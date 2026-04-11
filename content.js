const QUESTIONS = [
  { q: "¿Cuántos huesos tiene el cuerpo humano adulto?", answers: ["198", "206", "215", "189"], correct: 1, category: "Ciencia" },
  { q: "¿En qué año cayó el Muro de Berlín?", answers: ["1987", "1991", "1989", "1993"], correct: 2, category: "Historia" },
  { q: "¿Cuál es el país más grande del mundo?", answers: ["China", "Canadá", "EE.UU.", "Rusia"], correct: 3, category: "Geografía" },
  { q: "¿Cuánto es la raíz cuadrada de 144?", answers: ["11", "12", "13", "14"], correct: 1, category: "Mates" },
  { q: "¿Qué planeta es el más cercano al Sol?", answers: ["Venus", "Marte", "Mercurio", "Tierra"], correct: 2, category: "Ciencia" },
  { q: "¿Cuántos continentes hay en el mundo?", answers: ["5", "6", "7", "8"], correct: 2, category: "Geografía" },
  { q: "¿Cuál es el elemento químico con símbolo O?", answers: ["Oro", "Osmio", "Oxígeno", "Oganesón"], correct: 2, category: "Ciencia" },
];
 
const DELAY_MS = 10;
const SCROLL_TIME_LIMIT_MS = 5 * 60 * 1000; // 5 minutos de scroll activo
 
const BLOCKED_SITES = ["instagram.com", "tiktok.com", "x.com", "twitter.com", "facebook.com", "youtube.com"];
const isBlockedSite = BLOCKED_SITES.some(site => location.hostname.includes(site));
 
// --- Scroll time tracker ---
let scrollTimeAccum = 0;
let lastScrollTime = null;
let scrollDecayTimer = null;
let scrollLocked = false;
 
function onScroll() {
  if (scrollLocked || document.getElementById("ff-overlay")) return;
 
  const now = Date.now();
  if (lastScrollTime !== null) {
    scrollTimeAccum += now - lastScrollTime;
  }
  lastScrollTime = now;
 
  clearTimeout(scrollDecayTimer);
  scrollDecayTimer = setTimeout(() => {
    lastScrollTime = null;
  }, 500);
 
  if (scrollTimeAccum >= SCROLL_TIME_LIMIT_MS) {
    scrollTimeAccum = 0;
    lastScrollTime = null;
    scrollLocked = true;
    showPopup();
  }
}
 
// 1. COMPROBACIÓN INICIAL AL CARGAR LA PÁGINA
chrome.storage.local.get(["lockedUntil"], (data) => {
  const now = Date.now();
 
  if (data.lockedUntil && data.lockedUntil > now) {
    const secondsLeft = Math.ceil((data.lockedUntil - now) / 1000);
    showLockScreen(secondsLeft);
  } else if (isBlockedSite) {
    setTimeout(showPopup, DELAY_MS);
 
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        chrome.storage.local.get(["lockedUntil"], (d) => {
          if (!d.lockedUntil || d.lockedUntil <= Date.now()) {
            setTimeout(showPopup, DELAY_MS);
          }
        });
      }
      if (document.visibilityState === "hidden") {
        lastScrollTime = null; // pausa el contador al cambiar de pestaña
      }
    });
 
    // Listeners de scroll
    window.addEventListener("scroll", onScroll, true);
    document.addEventListener("scroll", onScroll, true);
    document.addEventListener("wheel", onScroll, { passive: true });
  }
});
 
 
// 2. PANTALLA DE BLOQUEO PURO
function showLockScreen(lockLeft) {
  let overlay = document.getElementById("ff-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "ff-overlay";
    document.body.appendChild(overlay);
  }
 
  overlay.innerHTML = `
    <div class="ff-card ff-lockout">
      <div class="ff-lock-icon">🔒</div>
      <p class="ff-lock-title">Acceso bloqueado</p>
      <p class="ff-lock-sub">Has fallado o recargado la página. Espera para continuar.</p>
      <div class="ff-lock-bar-wrap">
        <div class="ff-lock-bar" id="ff-lock-bar"></div>
      </div>
      <div class="ff-lock-countdown" id="ff-lock-countdown">${lockLeft}s</div>
    </div>`;
 
  const lockCountEl = document.getElementById("ff-lock-countdown");
  const lockBarEl = document.getElementById("ff-lock-bar");
  const initialLock = lockLeft;
 
  const lockInterval = setInterval(() => {
    lockLeft--;
    lockCountEl.textContent = lockLeft + "s";
    lockBarEl.style.width = ((initialLock - lockLeft) / initialLock * 100) + "%";
    if (lockLeft <= 0) {
      clearInterval(lockInterval);
      overlay.remove();
      scrollLocked = false;
    }
  }, 1000);
}
 
 
// 3. PREGUNTA TRIVIA
function showPopup() {
  if (document.getElementById("ff-overlay")) return;
  if (!chrome?.storage?.local) return;
 
  const q = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
  let timeLeft = 15;
  let answered = false;
 
  chrome.storage.local.get(["score", "streak", "leaderboard"], (data) => {
    const myScore = data.score || 0;
    const streak = data.streak || 0;
    const leaderboard = data.leaderboard || [
      { name: "Laura M.", score: 320 },
      { name: "Carlos R.", score: 280 },
      { name: "Manuel D.", score: 238 },
    ];
 
    const overlay = document.createElement("div");
    overlay.id = "ff-overlay";
 
    const allPlayers = [...leaderboard, { name: "Tú", score: myScore, isMe: true }]
      .sort((a, b) => b.score - a.score);
 
    const rankHTML = allPlayers.map((p, i) => {
      const medals = ["🥇", "🥈", "🥉"];
      return `<div class="ff-row ${p.isMe ? "ff-me" : ""}">
        <span class="ff-rank">${medals[i] || (i + 1)}</span>
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
        <div class="ff-warning">⚠️ Si fallas, <strong>-5 min</strong> de uso hoy y bajas en el podio</div>
        <div class="ff-podium">
          <p class="ff-podium-label">Clasificación semanal</p>
          ${rankHTML}
        </div>
      </div>`;
 
    document.body.appendChild(overlay);
 
    const timerEl = document.getElementById("ff-timer");
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
        const chosen = parseInt(btn.dataset.index);
        const allBtns = document.querySelectorAll(".ff-ans");
 
        if (chosen === q.correct) {
          allBtns[chosen].classList.add("ff-correct");
          chrome.storage.local.set({ score: myScore + 10, streak: streak + 1 });
          setTimeout(() => {
            overlay.remove();
            scrollLocked = false; // reactiva el scroll tras acertar
          }, 1500);
        } else {
          btn.classList.add("ff-wrong");
          allBtns[q.correct].classList.add("ff-correct");
          penalize();
        }
      });
    });
 
    function penalize() {
      const lockTimeSeconds = 30;
      const lockedUntil = Date.now() + (lockTimeSeconds * 1000);
 
      chrome.storage.local.get(["dailyMinutes"], (d) => {
        chrome.storage.local.set({
          dailyMinutes: Math.max(0, (d.dailyMinutes || 30) - 5),
          score: Math.max(0, myScore - 15),
          streak: 0,
          lockedUntil: lockedUntil
        });
      });
 
      showLockScreen(lockTimeSeconds);
    }
  });
}
