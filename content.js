// ── Config defaults ───────────────────────────────────────
const DEFAULT_PENALTY  = 30;
const DEFAULT_SITES    = ["instagram.com","tiktok.com","x.com","twitter.com","facebook.com","youtube.com"];
 
const DELAY_MS = 10;
const SCROLL_TIME_LIMIT_MS = 5 * 60 * 1000;
 
// ── State ─────────────────────────────────────────────────
let questions        = [];
let BLOCKED_SITES    = [...DEFAULT_SITES];
let PENALTY_SECONDS  = DEFAULT_PENALTY;
let ENABLED_CATS     = null; // null = todas
 
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
 
// ── Boot: load questions + settings then start ────────────
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
        showLockScreen(secondsLeft);
      } else if (isBlockedSite) {
        setTimeout(showPopup, DELAY_MS);
 
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") {
            chrome.storage.local.get(["lockedUntil"], (d2) => {
              if (!d2.lockedUntil || d2.lockedUntil <= Date.now()) setTimeout(showPopup, DELAY_MS);
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
 
// ── Lock screen ───────────────────────────────────────────
function showLockScreen(lockLeft) {
  let overlay = document.getElementById("ff-overlay");
  if (!overlay) { overlay = document.createElement("div"); overlay.id = "ff-overlay"; document.body.appendChild(overlay); }
 
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
    lockCountEl.textContent = lockLeft + "s";
    lockBarEl.style.width   = ((initialLock - lockLeft) / initialLock * 100) + "%";
    if (lockLeft <= 0) { clearInterval(lockInterval); overlay.remove(); scrollLocked = false; }
  }, 1000);
}
 
// ── Trivia popup ──────────────────────────────────────────
function showPopup() {
  if (document.getElementById("ff-overlay")) return;
  if (!chrome?.storage?.local) return;
 
  if (!questions.length) {
    console.warn("[FocusFriends] Sin preguntas disponibles.");
    return;
  }
 
  // Filtrar por categorías habilitadas
  const pool       = ENABLED_CATS ? questions.filter(q => ENABLED_CATS.has(q.category)) : questions;
  const activePool = pool.length ? pool : questions;
  const q          = activePool[Math.floor(Math.random() * activePool.length)];
 
  let timeLeft = 15;
  let answered = false;
 
  chrome.storage.local.get(["score","streak","leaderboard"], (data) => {
    const myScore     = data.score       || 0;
    const streak      = data.streak      || 0;
    const leaderboard = data.leaderboard || [
      { name: "Laura M.",  score: 320 },
      { name: "Carlos R.", score: 280 },
      { name: "Manuel D.", score: 238 },
    ];
 
    const overlay = document.createElement("div");
    overlay.id = "ff-overlay";
 
    const allPlayers = [...leaderboard, { name: "Tú", score: myScore, isMe: true }]
      .sort((a, b) => b.score - a.score);
 
    const rankHTML = allPlayers.map((p, i) => {
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
          <p class="ff-podium-label">Clasificación semanal</p>
          ${rankHTML}
        </div>
      </div>`;
 
    document.body.appendChild(overlay);
 
    const timerEl  = document.getElementById("ff-timer");
    const interval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft <= 5) timerEl.style.color = "#E24B4A";
      if (timeLeft <= 0) { clearInterval(interval); penalize(); }
    }, 1000);
 
    document.querySelectorAll(".ff-ans").forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        clearInterval(interval);
        const chosen  = parseInt(btn.dataset.index);
        const allBtns = document.querySelectorAll(".ff-ans");
 
        if (chosen === q.correct) {
          // Acierto
          allBtns[chosen].classList.add("ff-correct");
          chrome.storage.local.set({ score: myScore + 10, streak: streak + 1 });
          
          // Esperamos medio segundo para que vea que el botón se ha puesto verde/azul...
          // ...y le plantamos la pantalla de celebración.
          setTimeout(() => {
            showSuccessScreen();
          }, 600); 
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
}
 
function formatSeconds(s) {
  if (s < 60) return s + "s";
  const m = Math.floor(s / 60), r = s % 60;
  return m + "m" + (r ? " " + r + "s" : "");
}



// ==========================================
// 5. PANTALLA DE ÉXITO (REFUERZO POSITIVO)
// ==========================================
function showSuccessScreen() {
  let overlay = document.getElementById("ff-overlay");
  if (!overlay) return;

  // Reemplazamos el contenido de la tarjeta por una pantalla de celebración
  overlay.innerHTML = `
    <div class="ff-card" style="text-align: center; padding: 50px 32px;">
      <div style="font-size: 64px; margin-bottom: 16px; animation: bounce 1s infinite;">🎉</div>
      <p style="font-size: 24px; font-weight: 800; color: #185FA5; margin: 0 0 8px;">¡Respuesta Correcta!</p>
      <p style="font-size: 14px; color: #666; margin: 0 0 24px;">Has defendido tu racha con éxito.</p>
      
      <div style="display: inline-block; background: #E6F1FB; color: #185FA5; padding: 8px 16px; border-radius: 99px; font-weight: bold; font-size: 16px;">
        +10 Puntos 🔥
      </div>
    </div>`;

  // Desaparece sola a los 2.5 segundos dejándoles navegar en paz
  setTimeout(() => {
    if (document.getElementById("ff-overlay")) {
      document.getElementById("ff-overlay").remove();
    }
  }, 2500);
}
