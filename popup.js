// ── Helpers ────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function fmtPenalty(p) {
  return p < 60
    ? p + "s"
    : Math.floor(p / 60) + "m" + (p % 60 ? (p % 60) + "s" : "");
}

function nowTime() {
  return new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

// ── Cargar clasificación desde Firestore vía background ────
function loadLeaderboard(roomCode, myName) {
  const content   = document.getElementById("lb-content");
  const countEl   = document.getElementById("lb-player-count");
  const updatedEl = document.getElementById("lb-updated");

  // Estado de carga
  content.innerHTML = `
    <div class="lb-loading">
      <span class="lb-spinner">⏳</span>
      Cargando clasificación…
    </div>`;
  countEl.textContent   = "";
  updatedEl.textContent = "";

  const safeRoom = encodeURIComponent(roomCode.trim());

  chrome.runtime.sendMessage({ action: "getLeaderboard", room: safeRoom }, (data) => {

    // Error de red o Firebase
    if (!data || data.error || !data.documents) {
      content.innerHTML = `
        <div class="lb-error">
          ❌ No se pudo cargar la clasificación.<br>
          <span style="color:#555">Comprueba tu conexión.</span>
        </div>`;
      return;
    }

    // Parsear y ordenar jugadores
    const players = data.documents
      .map(doc => ({
        name:   doc.fields?.name?.stringValue             || "—",
        score:  parseInt(doc.fields?.score?.integerValue  || "0"),
        streak: parseInt(doc.fields?.streak?.integerValue || "0"),
      }))
      .sort((a, b) => b.score - a.score);

    if (!players.length) {
      content.innerHTML = `
        <div class="lb-empty">
          😶 Aún no hay jugadores en esta sala.
        </div>`;
      return;
    }

    // Construir filas
    const medals = ["🥇", "🥈", "🥉"];
    const rows = players.map((p, i) => {
      const isMe   = myName && p.name.trim().toLowerCase() === myName.trim().toLowerCase();
      const medal  = i < 3
        ? `<span class="lb-medal">${medals[i]}</span>`
        : `<span class="lb-rank-num">${i + 1}</span>`;
      const youTag = isMe ? `<span class="lb-you-tag">tú</span>` : "";
      const streak = p.streak > 1 ? `<span class="lb-streak">🔥${p.streak}</span>` : "";

      return `
        <div class="lb-row ${isMe ? "is-me" : ""}">
          ${medal}
          <span class="lb-name">${p.name}${youTag}</span>
          ${streak}
          <span class="lb-pts">${p.score}</span>
        </div>`;
    }).join("");

    content.innerHTML     = `<div class="lb-list">${rows}</div>`;
    countEl.textContent   = `${players.length} jugador${players.length !== 1 ? "es" : ""}`;
    updatedEl.textContent = `Actualizado a las ${nowTime()}`;
  });
}

// ── DOMContentLoaded ───────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {

  // ── Pantalla principal: leer storage ──────────────────
  chrome.storage.local.get(
    ["score", "streak", "ff_penalty", "ff_roomCode", "ff_playerName"],
    (data) => {
      document.getElementById("score").textContent   = data.score  != null ? data.score  : "—";
      document.getElementById("streak").textContent  = data.streak != null ? data.streak : "—";
      document.getElementById("penalty").textContent = fmtPenalty(data.ff_penalty || 30);
      document.getElementById("room").textContent    = data.ff_roomCode || "—";
    }
  );

  // ── Botón Ajustes ──────────────────────────────────────
  document.getElementById("openOptions").addEventListener("click", () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("options.html") });
    window.close();
  });

  // ── Botón Clasificación → ir a pantalla de ranking ────
  document.getElementById("openRanking").addEventListener("click", () => {
    chrome.storage.local.get(["ff_roomCode", "ff_playerName"], (data) => {
      const room   = data.ff_roomCode   || "GLOBAL";
      const myName = data.ff_playerName || "";

      document.getElementById("lb-room-name").textContent = room;
      showScreen("screen-ranking");
      loadLeaderboard(room, myName);
    });
  });

  // ── Botón Volver ───────────────────────────────────────
  document.getElementById("btnBack").addEventListener("click", () => {
    showScreen("screen-main");
  });

  // ── Botón Refrescar ────────────────────────────────────
  document.getElementById("btnRefresh").addEventListener("click", () => {
    const btn = document.getElementById("btnRefresh");
    btn.classList.add("spinning");
    setTimeout(() => btn.classList.remove("spinning"), 600);

    chrome.storage.local.get(["ff_roomCode", "ff_playerName"], (data) => {
      const room   = data.ff_roomCode   || "GLOBAL";
      const myName = data.ff_playerName || "";
      loadLeaderboard(room, myName);
    });
  });

});
