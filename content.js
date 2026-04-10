(function () {
  const PENALTY_SECONDS = 30;
  // La pregunta aparece siempre al cargar la página

  const question = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];

  // ── Estilos ──────────────────────────────────────────────────────────────
  const style = document.createElement("style");
  style.textContent = `
    #brain-gate-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 2147483647;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    #brain-gate-box {
      background: #fff;
      border-radius: 16px;
      padding: 36px 40px;
      max-width: 480px;
      width: 90%;
      text-align: center;
      box-shadow: 0 24px 60px rgba(0,0,0,0.4);
    }
    #brain-gate-icon {
      font-size: 36px;
      margin-bottom: 12px;
    }
    #brain-gate-title {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 16px;
    }
    #brain-gate-question {
      font-size: 20px;
      font-weight: 600;
      color: #111;
      margin-bottom: 28px;
      line-height: 1.4;
    }
    #brain-gate-options {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 0;
    }
    .bg-option {
      background: #f4f4f5;
      border: 2px solid transparent;
      border-radius: 10px;
      padding: 14px 10px;
      font-size: 15px;
      font-weight: 500;
      color: #222;
      cursor: pointer;
      transition: background 0.15s, border-color 0.15s;
    }
    .bg-option:hover {
      background: #e8e8eb;
      border-color: #c0c0c8;
    }
    .bg-option.correct {
      background: #d1fae5;
      border-color: #10b981;
      color: #065f46;
    }
    .bg-option.wrong {
      background: #fee2e2;
      border-color: #ef4444;
      color: #7f1d1d;
    }
    #brain-gate-feedback {
      margin-top: 20px;
      font-size: 15px;
      font-weight: 500;
      min-height: 24px;
    }
    #brain-gate-countdown {
      margin-top: 8px;
      font-size: 13px;
      color: #888;
    }
    #brain-gate-timer-bar-wrap {
      margin-top: 14px;
      background: #f0f0f0;
      border-radius: 99px;
      height: 6px;
      overflow: hidden;
    }
    #brain-gate-timer-bar {
      height: 100%;
      background: #ef4444;
      border-radius: 99px;
      width: 100%;
      transition: width 1s linear;
    }
  `;
  document.head.appendChild(style);

  // ── HTML ─────────────────────────────────────────────────────────────────
  const overlay = document.createElement("div");
  overlay.id = "brain-gate-overlay";
  overlay.innerHTML = `
    <div id="brain-gate-box">
      <div id="brain-gate-icon">🧠</div>
      <div id="brain-gate-title">Brain Gate — Demuestra que mereces entrar</div>
      <div id="brain-gate-question">${question.q}</div>
      <div id="brain-gate-options">
        ${question.options.map((opt, i) => `
          <button class="bg-option" data-index="${i}">${opt}</button>
        `).join("")}
      </div>
      <div id="brain-gate-feedback"></div>
      <div id="brain-gate-countdown"></div>
      <div id="brain-gate-timer-bar-wrap" style="display:none">
        <div id="brain-gate-timer-bar"></div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const feedback = document.getElementById("brain-gate-feedback");
  const countdown = document.getElementById("brain-gate-countdown");
  const timerBarWrap = document.getElementById("brain-gate-timer-bar-wrap");
  const timerBar = document.getElementById("brain-gate-timer-bar");
  const buttons = overlay.querySelectorAll(".bg-option");

  // ── Lógica ───────────────────────────────────────────────────────────────
  function disableButtons() {
    buttons.forEach(btn => btn.disabled = true);
  }

  function removeOverlay() {
    overlay.remove();
    style.remove();
  }

  function startPenalty() {
    let remaining = PENALTY_SECONDS;
    timerBarWrap.style.display = "block";
    timerBar.style.width = "100%";

    countdown.textContent = `Podrás entrar en ${remaining} segundos…`;

    // Forzar reflow para que la transición funcione
    timerBar.getBoundingClientRect();
    timerBar.style.width = "0%";

    const interval = setInterval(() => {
      remaining--;
      if (remaining <= 0) {
        clearInterval(interval);
        removeOverlay();
      } else {
        countdown.textContent = `Podrás entrar en ${remaining} segundos…`;
      }
    }, 1000);
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const chosen = parseInt(btn.dataset.index);
      disableButtons();

      if (chosen === question.correct) {
        btn.classList.add("correct");
        feedback.style.color = "#065f46";
        feedback.textContent = "¡Correcto! Accediendo…";
        setTimeout(removeOverlay, 900);
      } else {
        btn.classList.add("wrong");
        buttons[question.correct].classList.add("correct");
        feedback.style.color = "#7f1d1d";
        feedback.textContent = "Incorrecto. Espera 30 segundos.";
        startPenalty();
      }
    });
  });
})();
