const QUESTIONS = [
  { q: "¿Cuántos huesos tiene el cuerpo humano adulto?", answers: ["198", "206", "215", "189"], correct: 1, category: "Ciencia" },
  { q: "¿En qué año cayó el Muro de Berlín?", answers: ["1987", "1991", "1989", "1993"], correct: 2, category: "Historia" },
  { q: "¿Cuál es el país más grande del mundo?", answers: ["China", "Canadá", "EE.UU.", "Rusia"], correct: 3, category: "Geografía" },
  { q: "¿Cuánto es la raíz cuadrada de 144?", answers: ["11", "12", "13", "14"], correct: 1, category: "Mates" },
  { q: "¿Qué planeta es el más cercano al Sol?", answers: ["Venus", "Marte", "Mercurio", "Tierra"], correct: 2, category: "Ciencia" },
  { q: "¿Cuántos continentes hay en el mundo?", answers: ["5", "6", "7", "8"], correct: 2, category: "Geografía" },
  { q: "¿Cuál es el elemento químico con símbolo O?", answers: ["Oro", "Osmio", "Oxígeno", "Oganesón"], correct: 2, category: "Ciencia" },
];

const DELAY_MS = 1000; // 10 segundos — cambia a 5000 para demo más rápida

const BLOCKED_SITES = ["instagram.com", "tiktok.com", "x.com", "twitter.com", "facebook.com", "youtube.com"];
const isBlockedSite = BLOCKED_SITES.some(site => location.hostname.includes(site));

if (isBlockedSite) {
  setTimeout(showPopup, DELAY_MS);

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      setTimeout(showPopup, DELAY_MS);
    }
  });
}

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
          setTimeout(() => overlay.remove(), 1500);
        } else {
          btn.classList.add("ff-wrong");
          allBtns[q.correct].classList.add("ff-correct");
          penalize();
        }
      });
    });

    function penalize() {
      chrome.storage.local.get(["dailyMinutes"], (d) => {
        chrome.storage.local.set({
          dailyMinutes: Math.max(0, (d.dailyMinutes || 30) - 5),
          score: Math.max(0, myScore - 15),
          streak: 0
        });
      });
      timerEl.textContent = "✗";
      timerEl.style.background = "#FCEBEB";
      setTimeout(() => overlay.remove(), 2000);
    }
  });
}
