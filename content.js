const FIREBASE_PROJECT_ID = "focus-friends-a6d19"; 

// ── Config defaults ───────────────────────────────────────
const DEFAULT_PENALTY  = 30;
const DEFAULT_SITES    = ["instagram.com","tiktok.com","x.com","twitter.com","facebook.com","youtube.com"];
const CONFIRM_MESSAGES = [
  { t: "¿De verdad quieres entrar?", s: "Es una distracción. ¿Tienes algo mejor que hacer?" },
  { t: "¿Seguro que es necesario?", s: "Tu 'yo' del futuro te agradecería que cerraras esta pestaña." },
  { t: "¡Alto ahí!", s: "Solo ibas a mirar un minuto, pero ambos sabemos cómo termina esto." },
  { t: "¿Dopamina barata?", s: "Aprender algo nuevo te hará sentirte mejor a largo plazo." },
  { t: "Tu tiempo vale oro", s: "¿Quieres regalárselo a un algoritmo de recomendación?" }
];

const DELAY_MS = 10;
const SCROLL_TIME_LIMIT_MS = 5 * 60 * 1000;
 
// ── State ─────────────────────────────────────────────────
let questions        = [];
let BLOCKED_SITES    = [...DEFAULT_SITES];
let PENALTY_SECONDS  = DEFAULT_PENALTY;
let ENABLED_CATS     = null;
 
let scrollTimeAccum  = 0;
let lastScrollTime   = null;
let scrollDecayTimer = null;
let scrollLocked     = false;
 
// ── Parse questions.txt ───────────────────────────────────
function parseQuestions(text) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map(block => {
      const lines = block.trim().split("\n");
      const get   = prefix => {
        const l = lines.find(l => l.startsWith(prefix));
        return l ? l.slice(prefix.length).trim() : "";
      };
      const answers = ["A:","B:","C:","D:"].map(p => get(p));
      const correct = ["A","B","C","D"].indexOf(get("CORRECTA:"));
      return {
        category: get("CATEGORIA:"),
        q:        get("PREGUNTA:"),
        answers,
        correct
      };
    })
    .filter(q => q.q && q.answers.some(a => a) && q.correct >= 0);
}
 
async function loadQuestions() {
  try {
    const url  = chrome.runtime.getURL("questions.txt");
    const text = await fetch(url).then(r => r.text());
    questions  = parseQuestions(text);
    if (!questions.length) console.warn("[FocusFriends] questions.txt vacío o mal formateado.");
  } catch (e) {
    console.error("[FocusFriends] No se pudo cargar questions.txt:", e);
  }
}

// ── FUNCIONES DE MULTIJUGADOR Y FIREBASE ──────────────────
function getPlayerInfo(callback) {
  // Miramos si ya tenemos guardado el nombre y la sala en esta extensión
  chrome.storage.local.get(["ff_playerName", "ff_roomCode"], (data) => {
    if (data.ff_playerName && data.ff_roomCode) {
      // Si ya los tenemos, vamos directos a jugar
      callback(data.ff_playerName, data.ff_roomCode);
    } else {
      // Si no los tenemos, le mostramos la pantalla para pedirlos
      const mainOverlay = document.getElementById("ff-overlay");
      if (mainOverlay) mainOverlay.style.display = "none";

      const nameOverlay = document.createElement("div");
      nameOverlay.id = "ff-name-overlay";
      nameOverlay.style = "position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 2147483647; display: flex; align-items: center; justify-content: center; font-family: -apple-system, Arial, sans-serif;";

      nameOverlay.innerHTML = `
        <div class="ff-card" style="text-align: center; padding: 40px 32px; background: oklab(87.603% -0.03785 0.10292); border-radius: 16px; max-width: 400px; width: 90vw;">
          <div style="font-size: 48px; margin-bottom: 16px;">🎮</div>
          <h2 style="color: #1a1a1a; margin: 0 0 8px;">¡Modo Multijugador!</h2>
          <p style="color: #555; margin: 0 0 24px; font-size: 14px;">Únete a una sala para competir con tus amigos:</p>

          <div style="text-align: left; margin-bottom: 12px;">
            <label style="font-size: 12px; font-weight: bold; color: #185FA5; margin-left: 4px;">Tu Nombre</label>
            <input type="text" id="ff-name-input" placeholder="Ej: Alex..." style="width: 100%; padding: 12px; border: 2px solid rgba(0,0,0,0.1); border-radius: 8px; font-size: 16px; box-sizing: border-box; background: rgba(255,255,255,0.6); margin-top: 4px;">
          </div>

          <div style="text-align: left; margin-bottom: 24px;">
            <label style="font-size: 12px; font-weight: bold; color: #185FA5; margin-left: 4px;">Código de Sala</label>
            <input type="text" id="ff-room-input" placeholder="Ej: IMPACTHON24..." style="width: 100%; padding: 12px; border: 2px solid rgba(0,0,0,0.1); border-radius: 8px; font-size: 16px; box-sizing: border-box; background: rgba(255,255,255,0.6); margin-top: 4px; text-transform: uppercase;">
          </div>

          <button id="ff-start-btn" style="background: #185FA5; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 16px; cursor: pointer; font-weight: bold; width: 100%;">¡Entrar a la Sala!</button>
        </div>
      `;

      document.body.appendChild(nameOverlay);

      document.getElementById("ff-start-btn").addEventListener("click", () => {
        let name = document.getElementById("ff-name-input").value.trim();
        let room = document.getElementById("ff-room-input").value.trim().toUpperCase();

        if (!name) name = "Jugador_" + Math.floor(Math.random() * 1000); 
        if (!room) room = "GLOBAL"; // Si no ponen sala, los metemos en la general

        // Guardamos los datos para no volver a preguntarlos mañana
        chrome.storage.local.set({ ff_playerName: name, ff_roomCode: room }, () => {
            nameOverlay.remove();
            if (mainOverlay) mainOverlay.style.display = "flex"; 
            callback(name, room);
        });
      });
    }
  });
}

// Descarga el podio SOLO de tu sala (Le pide ayuda al background)
async function getRoomLeaderboard(roomCode) {
  return new Promise((resolve) => {
    const safeRoom = encodeURIComponent(roomCode.trim());
    chrome.runtime.sendMessage({ action: "getLeaderboard", room: safeRoom }, (data) => {
      if (!data || !data.documents) return resolve([]);
      let players = data.documents.map(doc => {
        return {
          name: doc.fields.name.stringValue,
          score: parseInt(doc.fields.score.integerValue)
        };
      });
      resolve(players.sort((a, b) => b.score - a.score).slice(0, 4));
    });
  });
}

// Sube tus puntos a TU sala (Le pide ayuda al background)
function saveScoreToCloud(name, score, roomCode) {
  chrome.runtime.sendMessage({ 
    action: "saveScore", 
    name: name, 
    score: score, 
    room: roomCode 
  });
}
 
// ── Boot logic (Wait for body, Observer, etc.) ────────────
function waitForBody() {
  return new Promise(resolve => {
    if (document.body) return resolve();
    const obs = new MutationObserver(() => {
      if (document.body) { obs.disconnect(); resolve(); }
    });
    obs.observe(document.documentElement, { childList: true });
  });
}
 
let overlayGuard = null;
function startOverlayGuard() {
  if (overlayGuard) return;
  overlayGuard = new MutationObserver(() => {
    const existing = document.getElementById("ff-overlay");
    if (!existing && scrollLocked) {
      chrome.storage.local.get([location.hostname], d => {
        const t = d[location.hostname];
        if (t && t > Date.now()) {
          showLockScreen(Math.ceil((t - Date.now()) / 1000));
        }
      });
    }
  });
  overlayGuard.observe(document.body, { childList: true, subtree: false });
}
 
function mountOverlay(overlay) {
  const parent = document.body || document.documentElement;
  parent.appendChild(overlay);
}
 
loadQuestions().then(() => {
  chrome.storage.local.get(["ff_penalty","ff_sites","ff_categories"], (d) => {
    if (d.ff_penalty)    PENALTY_SECONDS = d.ff_penalty;
    if (d.ff_sites)      BLOCKED_SITES   = d.ff_sites;
    if (d.ff_categories) ENABLED_CATS    = new Set(d.ff_categories);
 
    const currentSite   = location.hostname;
    const isBlockedSite = BLOCKED_SITES.some(site => currentSite.includes(site));
 
    chrome.storage.local.get([currentSite], (data) => {
      const now          = Date.now();
      const siteLockTime = data[currentSite];
 
      if (siteLockTime && siteLockTime > now) {
        const secondsLeft = Math.ceil((siteLockTime - now) / 1000);
        waitForBody().then(() => {
          showLockScreen(secondsLeft);
          startOverlayGuard();
        });
      } else if (isBlockedSite) {
        waitForBody().then(() => {
          setTimeout(showConfirm, DELAY_MS);
          startOverlayGuard();
        });
 
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") {
            chrome.storage.local.get(["lockedUntil"], (d2) => {
              if (!d2.lockedUntil || d2.lockedUntil <= Date.now()) setTimeout(showConfirm, DELAY_MS);
            });
          }
          if (document.visibilityState === "hidden") lastScrollTime = null;
        });
 
        window.addEventListener("scroll", onScroll, true);
        document.addEventListener("scroll", onScroll, true);
        document.addEventListener("wheel", onScroll, { passive: true });
      }
    });
  });
});
 
// ── Scroll tracker ────────────────────────────────────────
function onScroll() {
  if (scrollLocked || document.getElementById("ff-overlay")) return;
 
  const now = Date.now();
  if (lastScrollTime !== null) scrollTimeAccum += now - lastScrollTime;
  lastScrollTime = now;
 
  clearTimeout(scrollDecayTimer);
  scrollDecayTimer = setTimeout(() => { lastScrollTime = null; }, 500);
 
  if (scrollTimeAccum >= SCROLL_TIME_LIMIT_MS) {
    scrollTimeAccum = 0;
    lastScrollTime  = null;
    scrollLocked    = true;
    showPopup();
  }
}
 
// ── Pantallas UI ──────────────────────────────
function showConfirm() {
  if (document.getElementById("ff-overlay")) return;

  const variant = CONFIRM_MESSAGES[Math.floor(Math.random() * CONFIRM_MESSAGES.length)];
  const overlay = document.createElement("div");
  overlay.id = "ff-overlay";

  overlay.innerHTML = `
    <div class="ff-card" style="text-align:center; padding: 48px 36px;">
      <div style="font-size:48px; margin-bottom:16px;">🤔</div>
      <p style="font-size:20px; font-weight:800; color:#1a1a1a; margin:0 0 8px;">${variant.t}</p>
      <p style="font-size:13px; color:#888; margin:0 0 32px;"><strong>${location.hostname}</strong> ${variant.s}</p>
      <div style="display:flex; gap:12px; justify-content:center;">
        <button id="ff-confirm-no" style="flex:1; max-width:140px; background:#f1f1f0; border:1px solid #ddd; border-radius:10px; padding:12px 0; font-size:14px; font-weight:600; color:#555; cursor:pointer;">No, salir</button>
        <button id="ff-confirm-yes" style="flex:1; max-width:140px; background:#185FA5; border:none; border-radius:10px; padding:12px 0; font-size:14px; font-weight:600; color:#fff; cursor:pointer;">Sí, entrar</button>
      </div>
    </div>`; 
  
  mountOverlay(overlay);

  document.getElementById("ff-confirm-no").addEventListener("click", () => {
    overlay.remove();
    if (history.length > 1) { history.back(); } else { window.close(); }
  });

  document.getElementById("ff-confirm-yes").addEventListener("click", () => {
    overlay.remove();
    showPopup();
  });
}
 
function showLockScreen(lockLeft) {
  let overlay = document.getElementById("ff-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "ff-overlay";
    mountOverlay(overlay);
  }
 
  overlay.innerHTML = `
    <div class="ff-card ff-lockout">
      <div class="ff-lock-icon">🔒</div>
      <p class="ff-lock-title">Acceso bloqueado</p>
      <p class="ff-lock-sub">Has fallado o recargado la página. Espera para continuar.</p>
      <div class="ff-lock-bar-wrap"><div class="ff-lock-bar" id="ff-lock-bar"></div></div>
      <div class="ff-lock-countdown" id="ff-lock-countdown">${lockLeft}s</div>
    </div>`;
 
  const lockCountEl = document.getElementById("ff-lock-countdown");
  const lockBarEl   = document.getElementById("ff-lock-bar");
  const initialLock = lockLeft;
 
  const lockInterval = setInterval(() => {
    lockLeft--;
    if (lockCountEl) lockCountEl.textContent = lockLeft + "s";
    if (lockBarEl)   lockBarEl.style.width   = ((initialLock - lockLeft) / initialLock * 100) + "%";
    if (lockLeft <= 0) { clearInterval(lockInterval); overlay.remove(); scrollLocked = false; }
  }, 1000);
}
 
// ── TRIVIA POPUP MULTIJUGADOR ──────────────────────────
function showPopup() {
  if (document.getElementById("ff-overlay")) return;
  if (!chrome?.storage?.local) return;
 
  if (!questions.length) {
    console.warn("[FocusFriends] Sin preguntas disponibles.");
    return;
  }
 
  const pool       = ENABLED_CATS ? questions.filter(q => ENABLED_CATS.has(q.category)) : questions;
  const activePool = pool.length ? pool : questions;
  const q          = activePool[Math.floor(Math.random() * activePool.length)];
 
  let timeLeft = 15;
  let answered = false;

  // 1. OBTENEMOS TUS PUNTOS LOCALES
  chrome.storage.local.get(["score","streak"], (data) => {
    const myScore   = data.score  || 0;
    const streak    = data.streak || 0;

    // 2. PEDIMOS NOMBRE Y SALA (Automático si ya los pusiste una vez)
    getPlayerInfo(async (myName, myRoom) => {
      
      // 3. DESCARGAMOS EL PODIO DE TU SALA DESDE FIREBASE
      const leaderboard = await getRoomLeaderboard(myRoom);

      const overlay = document.createElement("div");
      overlay.id = "ff-overlay";

      const allPlayers = [...leaderboard, { name: myName, score: myScore, isMe: true }]
        .sort((a, b) => b.score - a.score);

      // Limpiamos duplicados y nos quedamos con el Top 4
      const uniquePlayers = Array.from(new Set(allPlayers.map(a => a.name)))
        .map(name => {
          return allPlayers.find(a => a.name === name);
        }).slice(0, 4); 

      const rankHTML = uniquePlayers.map((p, i) => {
        const medals = ["🥇","🥈","🥉"];
        return `<div class="ff-row ${p.isMe ? "ff-me" : ""}">
          <span class="ff-rank">${medals[i] || (i+1)}</span>
          <span class="ff-name">${p.name}${p.isMe ? ' <span class="ff-tag">tú</span>' : ""}</span>
          <span class="ff-pts">${p.score} pts</span>
        </div>`;
      }).join("");

      overlay.innerHTML = `
        <div class="ff-card">
          <div class="ff-top">
            <div>
              <span class="ff-site">${location.hostname}</span>
              <span class="ff-streak">🔥 Racha: ${streak} días</span>
            </div>
            <div class="ff-timer" id="ff-timer">${timeLeft}</div>
          </div>
          <div class="ff-question-box">
            <span class="ff-cat">${q.category}</span>
            <p class="ff-q">${q.q}</p>
          </div>
          <div class="ff-answers">
            ${q.answers.map((a, idx) => `<button class="ff-ans" data-index="${idx}">${a}</button>`).join("")}
          </div>
          <div class="ff-warning">⚠️ Si fallas, <strong>${formatSeconds(PENALTY_SECONDS)}</strong> de bloqueo</div>
          <div class="ff-podium">
            
            <p class="ff-podium-label" style="display: flex; justify-content: space-between; align-items: center;">
              <span>SALA: <strong>${myRoom}</strong></span>
              <span id="ff-change-room" style="color: #185FA5; cursor: pointer; text-transform: none;">Cambiar sala</span>
            </p>

            ${rankHTML}
          </div>
        </div>`;

      mountOverlay(overlay);

      // Botón para cambiar de sala (borra la memoria y te vuelve a pedir los datos)
      document.getElementById("ff-change-room").addEventListener("click", () => {
        chrome.storage.local.remove(["ff_playerName", "ff_roomCode"], () => {
          overlay.remove();
          showPopup(); 
        });
      });

      const timerEl  = document.getElementById("ff-timer");
      const interval = setInterval(() => {
        timeLeft--;
        if (timerEl) timerEl.textContent = timeLeft;
        if (timeLeft <= 5 && timerEl) timerEl.style.color = "#E24B4A";
        if (timeLeft <= 0) { clearInterval(interval); penalize(); }
      }, 1000);

      overlay.querySelectorAll(".ff-ans").forEach(btn => {
        btn.addEventListener("click", () => {
          if (answered) return;
          answered = true;
          clearInterval(interval);
          const chosen  = parseInt(btn.dataset.index);
          const allBtns = overlay.querySelectorAll(".ff-ans");

          if (chosen === q.correct) {
            allBtns[chosen].classList.add("ff-correct");
            const newScore = myScore + 10;
            chrome.storage.local.set({ score: newScore, streak: streak + 1 });
            
            // 4. SUBIMOS LOS PUNTOS A TU SALA DE FIREBASE
            saveScoreToCloud(myName, newScore, myRoom);

            setTimeout(() => { showSuccessScreen(); }, 600);
          } else {
            btn.classList.add("ff-wrong");
            allBtns[q.correct].classList.add("ff-correct");
            penalize();
          }
        });
      });

      function penalize() {
        const lockedUntil = Date.now() + (PENALTY_SECONDS * 1000);
        const currentSite = location.hostname;
        sessionStorage.setItem("lockedUntil", lockedUntil.toString());
        chrome.storage.local.set({
          [currentSite]: lockedUntil,
          score:  Math.max(0, (myScore || 0) - 15),
          streak: 0
        });
        showLockScreen(PENALTY_SECONDS);
      }
    });
  });
}
 
function formatSeconds(s) {
  if (s < 60) return s + "s";
  const m = Math.floor(s / 60), r = s % 60;
  return m + "m" + (r ? " " + r + "s" : "");
}
 
function showSuccessScreen() {
  let overlay = document.getElementById("ff-overlay");
  if (!overlay) return;
 
  overlay.innerHTML = `
    <div class="ff-card" style="text-align: center; padding: 50px 32px;">
      <div style="font-size: 64px; margin-bottom: 16px;">🎉</div>
      <p style="font-size: 24px; font-weight: 800; color: #185FA5; margin: 0 0 8px;">¡Respuesta Correcta!</p>
      <p style="font-size: 14px; color: #666; margin: 0 0 24px;">Has defendido tu racha con éxito.</p>
      <div style="display: inline-block; background: #E6F1FB; color: #185FA5; padding: 8px 16px; border-radius: 99px; font-weight: bold; font-size: 16px;">
        +10 Puntos 🔥
      </div>
    </div>`;
 
  setTimeout(() => {
    const el = document.getElementById("ff-overlay");
    if (el) el.remove();
  }, 2500);
}