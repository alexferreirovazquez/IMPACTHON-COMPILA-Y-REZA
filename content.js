// ── Config defaults ───────────────────────────────────────
const DEFAULT_PENALTY  = 30;
const DEFAULT_SITES    = ["instagram.com","tiktok.com","x.com","twitter.com","facebook.com","youtube.com"];
const DEFAULT_INTERVAL_MS = 5 * 60 * 1000; // 5 minutos por defecto
const CONFIRM_MESSAGES = [
  { t: "¿De verdad quieres entrar?", s: "Es una distracción. ¿Tienes algo mejor que hacer?" },
  { t: "¿Seguro que es necesario?", s: "Tu 'yo' del futuro te agradecería que cerraras esta pestaña." },
  { t: "¡Alto ahí!", s: "Solo ibas a mirar un minuto, pero ambos sabemos cómo termina esto." },
  { t: "¿Dopamina barata?", s: "Aprender algo nuevo te hará sentirte mejor a largo plazo." },
  { t: "Tu tiempo vale oro", s: "¿Quieres regalárselo a un algoritmo de recomendación?" },
  { t: "Pausa de reflexión", s: "¿Entras por aburrimiento o por necesidad real?" },
  { t: "Modo Enfoque activado", s: "Si entras ahora, romperás tu ritmo de trabajo." },
  { t: "Cuidado con el agujero negro", s: "Esta web está diseñada para que no salgas. ¿Te arriesgas?" },
  { t: "¿Y si mejor no?", s: "Haz 10 sentadillas o bebe agua antes de decidir." },
  { t: "Productividad en peligro", s: "Estás a un click de perder 30 minutos de tu vida." },
  { t: "Solo una pregunta...", s: "¿Esta página te ayuda a conseguir tus metas de hoy?" },
  { t: "¡No te rindas!", s: "La tentación es grande, pero tu voluntad es mayor." },
  { t: "Atención plena", s: "Respira hondo tres veces antes de pulsar 'Sí'." },
  { t: "Efecto scroll infinito", s: "Recuerda: el contenido nunca se acaba, pero tu tiempo sí." },
  { t: "Zona de distracciones", s: "Mañana desearás haber tenido más tiempo. Empieza por hoy." },
  { t: "¿Buscas escapar?", s: "Afrontar la tarea difícil es más gratificante que este sitio." },
  { t: "Misión: Concentración", s: "Si entras, al menos que sea con un objetivo claro." },
  { t: "Pensándolo bien...", s: "¿Hay algo en tu lista de tareas que sea más importante?" },
  { t: "Cierra la puerta", s: "Las redes sociales son el ruido; el silencio es donde creces." },
  { t: "Última oportunidad", s: "¿Estás eligiendo esto conscientemente o por inercia?" }
];

// ── Mensajes de acierto ───────────────────────────────────
const SUCCESS_MESSAGES = [
  { emoji: "🔥", title: "¡Racha conservada!", sub: "Sigues en racha. Así se hace." },
  { emoji: "🧠", title: "¡Mente afilada!", sub: "Tu cerebro sigue funcionando bien." },
  { emoji: "💪", title: "¡Bien jugado!", sub: "Nadie dijo que sería fácil, y lo has clavado." },
  { emoji: "⚡", title: "¡Rapidísimo!", sub: "Eso es lo que se llama tener las ideas claras." },
  { emoji: "🎯", title: "¡Diana!", sub: "Sin dudas. Sin errores. Perfecto." },
  { emoji: "😎", title: "Demasiado fácil", sub: "Ni has sudado. Que no se note tanto." },
  { emoji: "🏆", title: "¡En forma!", sub: "Tu racha sigue viva. No la desperdicies." },
  { emoji: "✨", title: "¡Correctísimo!", sub: "Ahora a por lo siguiente. Sin distracciones." },
  { emoji: "🚀", title: "¡Despegando!", sub: "Con este ritmo llegas lejos." },
  { emoji: "🦾", title: "Modo bestia", sub: "Cada acierto es un paso más. Sigue." },
];

// ── Sonido de fallo ───────────────────────────────────────
function playErrorSound() {
  try {
    const audio = new Audio(chrome.runtime.getURL("error.mp3"));
    audio.volume = 0.8;
    audio.play().catch(() => {});
  } catch (e) {}
}

// ── Sonido de acierto ─────────────────────────────────────
function playCorrectSound() {
  try {
    const audio = new Audio(chrome.runtime.getURL("correct.mp3"));
    audio.volume = 0.8;
    audio.play().catch(() => {});
  } catch (e) {}
}

const DELAY_MS = 10;
const SCROLL_TIME_LIMIT_MS = 30 * 1000;
let PERIODIC_INTERVAL_MS = DEFAULT_INTERVAL_MS; // ── Se actualiza desde storage

// ── State ─────────────────────────────────────────────────
let questions        = [];
let BLOCKED_SITES    = [...DEFAULT_SITES];
let PENALTY_SECONDS  = DEFAULT_PENALTY;
let ENABLED_CATS     = null;

let scrollTimeAccum  = 0;
let lastScrollTime   = null;
let scrollDecayTimer = null;
let scrollLocked     = false;

let periodicTimer    = null; // ── Referencia al intervalo periódico

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
  chrome.storage.local.get(["ff_playerName", "ff_roomCode"], (data) => {
    if (data.ff_playerName && data.ff_roomCode) {
      callback(data.ff_playerName, data.ff_roomCode);
    } else {
      const mainOverlay = document.getElementById("ff-overlay");
      if (mainOverlay) mainOverlay.style.display = "none";

      const nameOverlay = document.createElement("div");
      nameOverlay.id = "ff-name-overlay";
      nameOverlay.style = "position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 2147483647; display: flex; align-items: center; justify-content: center; font-family: -apple-system, Arial, sans-serif;";

      nameOverlay.innerHTML = `
        <div class="ff-room-card">
          <div class="ff-room-emoji">🎮</div>
          <h2 class="ff-room-title">¡Modo Multijugador!</h2>
          <p class="ff-room-sub">Únete a una sala para competir con tus amigos:</p>

          <div class="ff-room-field">
            <label class="ff-room-label">Tu Nombre</label>
            <input type="text" id="ff-name-input" placeholder="Ej: Alex..." class="ff-room-input">
          </div>

          <div class="ff-room-field">
            <label class="ff-room-label">Código de Sala</label>
            <input type="text" id="ff-room-input" placeholder="Ej: IMPACTHON24..." class="ff-room-input ff-room-input-upper">
          </div>

          <button id="ff-start-btn" class="ff-room-btn">¡Entrar a la Sala!</button>
        </div>
      `;

      document.body.appendChild(nameOverlay);

      document.getElementById("ff-start-btn").addEventListener("click", () => {
        let name = document.getElementById("ff-name-input").value.trim();
        let room = document.getElementById("ff-room-input").value.trim().toUpperCase();

        if (!name) name = "Jugador_" + Math.floor(Math.random() * 1000);
        if (!room) room = "GLOBAL";

        const today = new Date().toDateString();
        const initialScore = 100;

        // REGLA 1: Guardamos racha en 1 y la fecha de hoy
        chrome.storage.local.set({
          ff_playerName: name,
          ff_roomCode: room,
          score: initialScore,
          streak: 1,
          lastClaimDate: today
        }, () => {
          saveScoreToCloud(name, initialScore, 1, room);
          nameOverlay.remove();
          if (mainOverlay) mainOverlay.style.display = "flex";
          callback(name, room);
        });
      });
    }
  });
}

// Descarga el podio SOLO de tu sala (Pide ayuda al background para saltar bloqueo)
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

// Sube tus puntos y racha a TU sala
function saveScoreToCloud(name, score, streak, roomCode) {
  chrome.runtime.sendMessage({
    action: "saveScore",
    name: name,
    score: score,
    streak: streak,
    room: roomCode
  });
}

// ── Espera a que document.body exista ────────────────────
function waitForBody() {
  return new Promise(resolve => {
    if (document.body) return resolve();
    const obs = new MutationObserver(() => {
      if (document.body) { obs.disconnect(); resolve(); }
    });
    obs.observe(document.documentElement, { childList: true });
  });
}

// ── MutationObserver: evita que SPAs eliminen el overlay ──
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

// ── Insertar overlay de forma segura ─────────────────────
function mountOverlay(overlay) {
  const parent = document.body || document.documentElement;
  parent.appendChild(overlay);
}

// ── Inicia (o reinicia) el temporizador periódico ─────────
function startPeriodicTimer() {
  if (periodicTimer) clearInterval(periodicTimer);

  // Guardamos el timestamp de inicio solo si no hay uno previo
  // Así Reddit (y otras SPAs que recargan) no reinician el contador desde cero
  chrome.storage.local.get(["ff_last_popup_time"], (d) => {
    if (d.ff_last_popup_time === undefined) {
      chrome.storage.local.set({ ff_last_popup_time: Date.now() });
    }
  });

  // Chequeamos cada 5s si ya pasó el intervalo configurado
  periodicTimer = setInterval(() => {
    if (document.getElementById("ff-overlay") || scrollLocked) return;

    chrome.storage.local.get(["ff_last_popup_time"], (d) => {
      const elapsed = Date.now() - (d.ff_last_popup_time || Date.now());
      if (elapsed >= PERIODIC_INTERVAL_MS) {
        chrome.storage.local.set({ ff_last_popup_time: Date.now() });
        showPopup();
      }
    });
  }, 5000);
}

// ── Boot: load questions + settings then start ────────────
loadQuestions().then(() => {
  chrome.storage.local.get(["ff_penalty","ff_interval","ff_sites","ff_categories"], (d) => {
    if (d.ff_penalty)    PENALTY_SECONDS      = d.ff_penalty;
    if (d.ff_interval)   PERIODIC_INTERVAL_MS = d.ff_interval * 1000;
    if (d.ff_sites)      BLOCKED_SITES        = d.ff_sites;
    if (d.ff_categories) ENABLED_CATS         = new Set(d.ff_categories);

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
          startPeriodicTimer(); // ── Arranca el temporizador periódico
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

// ── Pantalla de confirmación ──────────────────────────────
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
        <button id="ff-confirm-no" style="
          flex:1; max-width:140px;
          background:#f1f1f0; border:1px solid #ddd;
          display: flex; align-items: center; justify-content: center;
          border-radius:10px; padding:12px 0;
          font-size:14px; font-weight:600; color:#555;
          cursor:pointer;">
          Salir
        </button>
        <button id="ff-confirm-yes" style="
          flex:1; max-width:140px;
          background:#185FA5; border:none;
          border-radius:10px; padding:12px 0;
          display: flex; align-items: center; justify-content: center;
          font-size:14px; font-weight:600; color:#fff;
          cursor:pointer;">
          Entrar
        </button>
      </div>
    </div>`;

  mountOverlay(overlay);

  document.getElementById("ff-confirm-no").addEventListener("click", () => {
    overlay.remove();
    if (history.length > 1) {
      history.back();
    } else {
      window.close();
    }
  });

  document.getElementById("ff-confirm-yes").addEventListener("click", () => {
    overlay.remove();
    showPopup();
  });
}

// ── Lock screen ───────────────────────────────────────────
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
    // ── Al terminar el bloqueo, el timer empieza desde ahora
    if (lockLeft <= 0) { clearInterval(lockInterval); overlay.remove(); scrollLocked = false; startPeriodicTimer(); }
  }, 1000);
}

// ── TRIVIA POPUP MULTIJUGADOR ──────────────────────────────
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

  getPlayerInfo(async (myName, myRoom) => {

    // Extraemos la información fresca (incluyendo la fecha del último premio)
    const freshData = await new Promise(res => chrome.storage.local.get(["score","streak","lastClaimDate"], res));
    let myScore = (freshData.score != null) ? freshData.score : 0;
    let streak  = freshData.streak || 1;
    let lastClaimDate = freshData.lastClaimDate;

    // REGLA 2: RECOMPENSA DIARIA
    const today = new Date().toDateString();
    if (lastClaimDate && lastClaimDate !== today) {
      // Multiplicador: 5 + 5 * racha (ej: racha 1 da 10pts, racha 2 da 15pts...)
      const reward = 5 + (5 * streak);
      myScore += reward;
      streak += 1; // Sumamos 1 día a la racha por entrar hoy

      chrome.storage.local.set({
        score: myScore,
        streak: streak,
        lastClaimDate: today
      });

      saveScoreToCloud(myName, myScore, streak, myRoom);
      alert(`¡Día nuevo, racha nueva! 🔥 Has ganado ${reward} puntos extra por tu racha de ${streak} días.`);
    }

    // 3. DESCARGAMOS EL PODIO DE TU SALA DESDE FIREBASE
    const leaderboard = await getRoomLeaderboard(myRoom);

    const overlay = document.createElement("div");
    overlay.id = "ff-overlay";

    const allPlayers = [...leaderboard, { name: myName, score: myScore, isMe: true }]
      .sort((a, b) => b.score - a.score);

    // Limpiamos duplicados y nos quedamos con el Top 4
    const uniquePlayers = Array.from(new Set(allPlayers.map(a => a.name)))
      .map(name => allPlayers.find(a => a.name === name))
      .slice(0, 4);

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
        <div class="ff-warning">⚠️ Si fallas, <strong>${formatSeconds(PENALTY_SECONDS)}</strong> de bloqueo y pierdes la racha</div>
        <div class="ff-podium">
          <p class="ff-podium-label" style="display: flex; justify-content: space-between; align-items: center;">
            <span>SALA: <strong>${myRoom}</strong></span>
            <span id="ff-change-room" style="color: #185FA5; cursor: pointer; text-transform: none;">Cambiar sala</span>
          </p>
          ${rankHTML}
        </div>
      </div>`;

    mountOverlay(overlay);

    // Botón para cambiar de sala
    document.getElementById("ff-change-room").addEventListener("click", () => {
      chrome.storage.local.remove(["ff_playerName", "ff_roomCode", "score", "streak", "lastClaimDate"], () => {
        window.location.reload();
      });
    });

    const timerEl  = document.getElementById("ff-timer");
    const interval = setInterval(() => {
      timeLeft--;
      if (timerEl) timerEl.textContent = timeLeft;
      if (timeLeft <= 5 && timerEl) timerEl.style.color = "#E24B4A";
      if (timeLeft <= 0) { clearInterval(interval); playErrorSound(); penalize(); }
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
          playCorrectSound();

          // REGLA 3: Aciertas -> Conservas la racha, sin puntos extra por pregunta
          chrome.storage.local.set({ score: myScore });
          saveScoreToCloud(myName, myScore, streak, myRoom);

          // ── Acertaste: el intervalo empieza a contar desde ahora
          chrome.storage.local.set({ ff_last_popup_time: Date.now() });
          startPeriodicTimer();

          setTimeout(() => { showSuccessScreen(); }, 600);
        } else {
          allBtns[chosen].classList.add("ff-wrong");
          allBtns[q.correct].classList.add("ff-correct");
          playErrorSound();
          penalize();
        }
      });
    });

    function penalize() {
      const lockedUntil = Date.now() + (PENALTY_SECONDS * 1000);
      const currentSite = location.hostname;
      sessionStorage.setItem("lockedUntil", lockedUntil.toString());

      chrome.storage.local.get(["score"], (d) => {
        const currentScore = (d.score != null) ? d.score : 0;
        const newScore = Math.max(0, currentScore - 10);

        // REGLA 4: Fallas -> Pierdes 10 pts, racha cae a 1
        // El intervalo empieza a contar desde que termina el bloqueo, no desde ahora
        chrome.storage.local.set({
          [currentSite]: lockedUntil,
          score: newScore,
          streak: 1,
          ff_last_popup_time: lockedUntil
        });

        saveScoreToCloud(myName, newScore, 1, myRoom);
        showMinusPointsToast();
        setTimeout(() => showLockScreen(PENALTY_SECONDS), 900);
      });
    }
  });
}

function formatSeconds(s) {
  if (s < 60) return s + "s";
  const m = Math.floor(s / 60), r = s % 60;
  return m + "m" + (r ? " " + r + "s" : "");
}

// ── Pantalla de éxito ─────────────────────────────────────
function showSuccessScreen() {
  let overlay = document.getElementById("ff-overlay");
  if (!overlay) return;

  const msg = SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)];

  overlay.innerHTML = `
    <div class="ff-card" style="text-align: center; padding: 50px 32px;">
      <div style="font-size: 64px; margin-bottom: 16px;">${msg.emoji}</div>
      <p style="font-size: 24px; font-weight: 800; color: #185FA5; margin: 0 0 8px;">${msg.title}</p>
      <p style="font-size: 14px; color: #666; margin: 0 0 0;">${msg.sub}</p>
    </div>`;

  setTimeout(() => {
    const el = document.getElementById("ff-overlay");
    if (el) el.remove();
  }, 2500);
}

// ── Notificación -10 puntos ───────────────────────────────
function showMinusPointsToast() {
  const toast = document.createElement("div");
  toast.id = "ff-minus-toast";
  toast.style.cssText = `
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 2147483648;
    background: #E24B4A;
    color: #fff;
    font-family: -apple-system, Arial, sans-serif;
    font-size: 22px;
    font-weight: 900;
    padding: 14px 28px;
    border-radius: 14px;
    box-shadow: 0 6px 28px rgba(226,75,74,0.45);
    letter-spacing: -0.5px;
    opacity: 0;
    transform: translateY(-12px) scale(0.92);
    transition: opacity 0.22s ease, transform 0.22s ease;
    pointer-events: none;
  `;
  toast.textContent = "−10 puntos 💀";
  document.body.appendChild(toast);

  toast.getBoundingClientRect();
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0) scale(1)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-12px) scale(0.92)";
    setTimeout(() => toast.remove(), 300);
  }, 1800);
}