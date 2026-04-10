const SITES = [
  { key: "tiktok.com", name: "TikTok", emoji: "🎵" },
  { key: "instagram.com", name: "Instagram", emoji: "📸" },
  { key: "twitter.com", name: "Twitter", emoji: "🐦" },
  { key: "x.com", name: "X (Twitter)", emoji: "✖️" },
  { key: "facebook.com", name: "Facebook", emoji: "👥" },
  { key: "youtube.com", name: "YouTube", emoji: "▶️" },
  { key: "reddit.com", name: "Reddit", emoji: "🤖" },
];

const DEFAULT_BLOCKED = ["tiktok.com", "instagram.com", "twitter.com", "x.com"];

function loadSettings() {
  chrome.storage.sync.get(
    { enabled: true, blockedSites: DEFAULT_BLOCKED, correctCount: 0, wrongCount: 0 },
    (data) => {
      // Toggle
      const toggle = document.getElementById("main-toggle");
      toggle.checked = data.enabled;
      updateStatusText(data.enabled);

      // Sites
      const grid = document.getElementById("sites-grid");
      grid.innerHTML = "";
      SITES.forEach(site => {
        const isActive = data.blockedSites.includes(site.key);
        const item = document.createElement("div");
        item.className = `site-item ${isActive ? "active" : ""}`;
        item.dataset.key = site.key;
        item.innerHTML = `
          <span class="site-emoji">${site.emoji}</span>
          <span class="site-name">${site.name}</span>
          <div class="site-check">${isActive ? "✓" : ""}</div>
        `;
        item.addEventListener("click", () => toggleSite(site.key));
        grid.appendChild(item);
      });

      // Stats
      document.getElementById("stat-correct").textContent = data.correctCount;
      document.getElementById("stat-wrong").textContent = data.wrongCount;
    }
  );
}

function updateStatusText(enabled) {
  const el = document.getElementById("status-text");
  el.textContent = enabled ? "Bloqueando sitios seleccionados" : "Extensión desactivada";
}

document.getElementById("main-toggle").addEventListener("change", (e) => {
  const enabled = e.target.checked;
  chrome.storage.sync.set({ enabled });
  updateStatusText(enabled);
});

function toggleSite(key) {
  chrome.storage.sync.get({ blockedSites: DEFAULT_BLOCKED }, (data) => {
    let sites = data.blockedSites;
    if (sites.includes(key)) {
      sites = sites.filter(s => s !== key);
    } else {
      sites.push(key);
    }
    chrome.storage.sync.set({ blockedSites: sites }, loadSettings);
  });
}

loadSettings();
