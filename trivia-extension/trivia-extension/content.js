// BrainGate – Content Script
// Bloquea el acceso a redes sociales con preguntas de trivia

const TRIVIA_QUESTIONS = [
  // Ciencia
  { q: "¿Cuántos huesos tiene el cuerpo humano adulto?", options: ["206", "180", "256", "212"], correct: 0, category: "🔬 Ciencia" },
  { q: "¿Qué planeta es el más grande del sistema solar?", options: ["Saturno", "Neptuno", "Júpiter", "Urano"], correct: 2, category: "🚀 Astronomía" },
  { q: "¿A qué velocidad viaja la luz (aprox.)?", options: ["200.000 km/s", "300.000 km/s", "150.000 km/s", "500.000 km/s"], correct: 1, category: "🔬 Ciencia" },
  { q: "¿Cuál es el elemento más abundante en la Tierra?", options: ["Hierro", "Silicio", "Oxígeno", "Nitrógeno"], correct: 2, category: "🔬 Ciencia" },
  { q: "¿Cuántos cromosomas tiene una célula humana?", options: ["23", "46", "48", "44"], correct: 1, category: "🔬 Biología" },
  { q: "¿Qué órgano produce la insulina?", options: ["Hígado", "Riñón", "Páncreas", "Bazo"], correct: 2, category: "🔬 Biología" },
  { q: "¿Cuál es el símbolo químico del oro?", options: ["Go", "Or", "Au", "Ag"], correct: 2, category: "⚗️ Química" },
  { q: "¿En qué año llegó el ser humano a la Luna?", options: ["1967", "1971", "1969", "1965"], correct: 2, category: "🚀 Astronomía" },
  // Historia
  { q: "¿En qué año comenzó la Segunda Guerra Mundial?", options: ["1941", "1939", "1937", "1945"], correct: 1, category: "📜 Historia" },
  { q: "¿Quién pintó la Mona Lisa?", options: ["Miguel Ángel", "Rafael", "Botticelli", "Leonardo da Vinci"], correct: 3, category: "🎨 Arte" },
  { q: "¿En qué país nació Simón Bolívar?", options: ["Colombia", "Venezuela", "Ecuador", "Perú"], correct: 1, category: "📜 Historia" },
  { q: "¿Cuántos años duró la Guerra de los Cien Años?", options: ["100 años", "87 años", "116 años", "132 años"], correct: 2, category: "📜 Historia" },
  // Geografía
  { q: "¿Cuál es el río más largo del mundo?", options: ["Amazonas", "Nilo", "Misisipi", "Yangtsé"], correct: 1, category: "🌍 Geografía" },
  { q: "¿Cuál es el país más grande del mundo?", options: ["Canadá", "China", "EE.UU.", "Rusia"], correct: 3, category: "🌍 Geografía" },
  { q: "¿En qué continente está Egipto?", options: ["Asia", "África", "Oriente Medio", "Europa"], correct: 1, category: "🌍 Geografía" },
  { q: "¿Cuál es la capital de Australia?", options: ["Sídney", "Melbourne", "Canberra", "Brisbane"], correct: 2, category: "🌍 Geografía" },
  { q: "¿Cuántos países tiene América del Sur?", options: ["10", "12", "14", "13"], correct: 1, category: "🌍 Geografía" },
  // Matemáticas
  { q: "¿Cuánto es la raíz cuadrada de 144?", options: ["11", "12", "13", "14"], correct: 1, category: "🔢 Matemáticas" },
  { q: "¿Cuántos lados tiene un dodecágono?", options: ["10", "11", "12", "8"], correct: 2, category: "🔢 Matemáticas" },
  { q: "¿Cuánto es el 15% de 200?", options: ["25", "30", "35", "20"], correct: 1, category: "🔢 Matemáticas" },
  // Cultura general
  { q: "¿Cuántas cuerdas tiene una guitarra estándar?", options: ["4", "5", "6", "7"], correct: 2, category: "🎵 Música" },
  { q: "¿Cuántos jugadores hay en un equipo de fútbol?", options: ["10", "11", "12", "9"], correct: 1, category: "⚽ Deportes" },
  { q: "¿Cuál es el océano más grande?", options: ["Atlántico", "Índico", "Ártico", "Pacífico"], correct: 3, category: "🌊 Geografía" },
  { q: "¿Qué país tiene más habitantes?", options: ["India", "China", "EE.UU.", "Indonesia"], correct: 0, category: "🌍 Geografía" },
  { q: "¿En qué año se fundó la ONU?", options: ["1944", "1945", "1946", "1948"], correct: 1, category: "📜 Historia" }
];

const SITE_NAMES = {
  "tiktok.com": "TikTok",
  "instagram.com": "Instagram",
  "twitter.com": "Twitter",
  "x.com": "X (Twitter)",
  "facebook.com": "Facebook",
  "youtube.com": "YouTube",
  "reddit.com": "Reddit"
};

function getSiteName() {
  const host = window.location.hostname.replace("www.", "");
  for (const key in SITE_NAMES) {
    if (host.includes(key)) return SITE_NAMES[key];
  }
  return host;
}

function isEnabled(callback) {
  chrome.storage.sync.get({ enabled: true, blockedSites: Object.keys(SITE_NAMES) }, (data) => {
    const host = window.location.hostname.replace("www.", "");
    const isBlocked = data.blockedSites.some(site => host.includes(site));
    callback(data.enabled && isBlocked);
  });
}

function getCooldownKey() {
  const host = window.location.hostname.replace("www.", "");
  return `cooldown_${host}`;
}

function checkCooldown(callback) {
  chrome.storage.local.get([getCooldownKey()], (data) => {
    const ts = data[getCooldownKey()];
    if (ts) {
      const remaining = 60000 - (Date.now() - ts);
      if (remaining > 0) {
        callback(true, remaining);
        return;
      }
    }
    callback(false, 0);
  });
}

function setCooldown() {
  chrome.storage.local.set({ [getCooldownKey()]: Date.now() });
}

function clearCooldown() {
  chrome.storage.local.remove(getCooldownKey());
}

function getRandomQuestion() {
  return TRIVIA_QUESTIONS[Math.floor(Math.random() * TRIVIA_QUESTIONS.length)];
}

function createOverlay(question, onCorrect, onWrong) {
  const overlay = document.createElement("div");
  overlay.id = "braingate-overlay";

  const siteName = getSiteName();

  overlay.innerHTML = `
    <div class="bg-panel">
      <div class="bg-orb orb1"></div>
      <div class="bg-orb orb2"></div>
      <div class="bg-orb orb3"></div>
    </div>
    <div class="card">
      <div class="logo-row">
        <div class="logo-icon">🧠</div>
        <div class="logo-text">BrainGate</div>
      </div>
      <div class="site-badge">${siteName}</div>
      <p class="card-subtitle">Responde correctamente para entrar</p>
      <div class="category-tag">${question.category}</div>
      <div class="question-text">${question.q}</div>
      <div class="options-grid" id="options-grid">
        ${question.options.map((opt, i) => `
          <button class="option-btn" data-index="${i}">
            <span class="option-letter">${["A","B","C","D"][i]}</span>
            <span class="option-text">${opt}</span>
          </button>
        `).join("")}
      </div>
      <div class="result-msg" id="result-msg"></div>
    </div>
  `;

  document.documentElement.appendChild(overlay);

  // Event listeners
  overlay.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      const allBtns = overlay.querySelectorAll(".option-btn");
      allBtns.forEach(b => b.disabled = true);

      if (idx === question.correct) {
        btn.classList.add("correct");
        showResult(overlay, "✅ ¡Correcto! Entrando...", "success");
        setTimeout(() => {
          overlay.classList.add("fade-out");
          setTimeout(() => {
            overlay.remove();
            clearCooldown();
            onCorrect();
          }, 600);
        }, 900);
      } else {
        btn.classList.add("wrong");
        allBtns[question.correct].classList.add("correct");
        showResult(overlay, "❌ Incorrecto. Espera 60 segundos.", "error");
        setCooldown();
        onWrong();
        startCooldownTimer(overlay);
      }
    });
  });
}

function showResult(overlay, msg, type) {
  const el = overlay.querySelector("#result-msg");
  el.textContent = msg;
  el.className = `result-msg show ${type}`;
}

function createCooldownOverlay(remaining, onDone) {
  const overlay = document.createElement("div");
  overlay.id = "braingate-overlay";

  const siteName = getSiteName();
  const secs = Math.ceil(remaining / 1000);

  overlay.innerHTML = `
    <div class="bg-panel">
      <div class="bg-orb orb1"></div>
      <div class="bg-orb orb2"></div>
      <div class="bg-orb orb3"></div>
    </div>
    <div class="card">
      <div class="logo-row">
        <div class="logo-icon">🧠</div>
        <div class="logo-text">BrainGate</div>
      </div>
      <div class="site-badge">${siteName}</div>
      <div class="cooldown-container">
        <div class="cooldown-icon">⏳</div>
        <div class="cooldown-label">Acceso bloqueado</div>
        <div class="cooldown-timer" id="cooldown-timer">${secs}s</div>
        <div class="cooldown-desc">Fallaste la pregunta anterior.<br>Espera antes de intentarlo de nuevo.</div>
        <div class="cooldown-bar-wrap"><div class="cooldown-bar" id="cooldown-bar" style="width:${(remaining/60000)*100}%"></div></div>
      </div>
    </div>
  `;

  document.documentElement.appendChild(overlay);

  let timeLeft = remaining;
  const interval = setInterval(() => {
    timeLeft -= 1000;
    const timerEl = overlay.querySelector("#cooldown-timer");
    const barEl = overlay.querySelector("#cooldown-bar");
    if (timerEl) timerEl.textContent = Math.ceil(timeLeft / 1000) + "s";
    if (barEl) barEl.style.width = Math.max(0, (timeLeft / 60000) * 100) + "%";
    if (timeLeft <= 0) {
      clearInterval(interval);
      clearCooldown();
      overlay.classList.add("fade-out");
      setTimeout(() => {
        overlay.remove();
        onDone();
      }, 500);
    }
  }, 1000);
}

function startCooldownTimer(overlay) {
  // Replace question UI with countdown inside same overlay
  setTimeout(() => {
    overlay.classList.add("fade-out");
    setTimeout(() => {
      overlay.remove();
      createCooldownOverlay(60000, () => showTrivia());
    }, 500);
  }, 2000);
}

function showTrivia() {
  const existing = document.getElementById("braingate-overlay");
  if (existing) return;
  const q = getRandomQuestion();
  createOverlay(q, () => {}, () => {});
}

function init() {
  isEnabled((enabled) => {
    if (!enabled) return;

    checkCooldown((inCooldown, remaining) => {
      if (inCooldown) {
        createCooldownOverlay(remaining, () => showTrivia());
      } else {
        showTrivia();
      }
    });
  });
}

// Run on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
