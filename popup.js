document.addEventListener("DOMContentLoaded", () => {

  // Leer todo el storage de golpe
  chrome.storage.local.get(
    ["score", "streak", "ff_penalty", "ff_roomCode", "ff_playerName"],
    (data) => {
      // Puntos
      const scoreEl = document.getElementById("score");
      scoreEl.textContent = (data.score != null) ? data.score : "—";

      // Racha
      const streakEl = document.getElementById("streak");
      streakEl.textContent = (data.streak != null) ? data.streak : "—";

      // Penalización
      const p = data.ff_penalty || 30;
      const penaltyEl = document.getElementById("penalty");
      penaltyEl.textContent = p < 60
        ? p + "s"
        : Math.floor(p / 60) + "m" + (p % 60 ? (p % 60) + "s" : "");

      // Sala
      const roomEl = document.getElementById("room");
      roomEl.textContent = data.ff_roomCode || "—";
    }
  );

  // Botón ajustes → abre options.html en nueva pestaña
  document.getElementById("openOptions").addEventListener("click", () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("options.html") });
    window.close();
  });

});
