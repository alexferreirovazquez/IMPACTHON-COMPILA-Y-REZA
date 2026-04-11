// ── Defaults ──────────────────────────────────────────────
const DEFAULT_PENALTY  = 30;
const DEFAULT_INTERVAL = 300; // 5 minutos
const DEFAULT_SITES    = ["instagram.com","tiktok.com","x.com","twitter.com","facebook.com","youtube.com"];

// state
let penaltySeconds  = DEFAULT_PENALTY;
let intervalSeconds = DEFAULT_INTERVAL;
let sites           = [...DEFAULT_SITES];
let enabledCats     = new Set();
let allCategories   = [];

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
      return { category: get("CATEGORIA:"), q: get("PREGUNTA:") };
    })
    .filter(q => q.q && q.category);
}

async function loadCategories() {
  try {
    const url      = chrome.runtime.getURL("questions.txt");
    const text     = await fetch(url).then(r => r.text());
    const parsed   = parseQuestions(text);
    allCategories  = [...new Set(parsed.map(q => q.category))].sort();
  } catch (e) {
    console.error("[FocusFriends] No se pudo cargar questions.txt:", e);
    allCategories = [];
  }
}

// ── Boot ──────────────────────────────────────────────────
loadCategories().then(() => {
  chrome.storage.local.get(["ff_penalty","ff_interval","ff_sites","ff_categories"], (d) => {
    if (d.ff_penalty  != null) penaltySeconds  = d.ff_penalty;
    if (d.ff_interval != null) intervalSeconds = d.ff_interval;
    if (d.ff_sites)            sites           = d.ff_sites;

    // Si hay categorías guardadas las respetamos; si no, activamos todas
    if (d.ff_categories && d.ff_categories.length) {
      enabledCats = new Set(d.ff_categories);
    } else {
      enabledCats = new Set(allCategories);
    }

    const slider = document.getElementById("penaltySlider");
    slider.value = penaltySeconds;
    updatePenalty(penaltySeconds);

    const islider = document.getElementById("intervalSlider");
    islider.value = intervalSeconds;
    updateInterval(intervalSeconds);

    renderSites();
    renderCategories();
  });
});

// ── Penalty ───────────────────────────────────────────────
function updatePenalty(val) {
  penaltySeconds = parseInt(val);
  document.getElementById("penaltySlider").value = penaltySeconds;

  let label;
  if (penaltySeconds < 60)        label = penaltySeconds + "s";
  else if (penaltySeconds === 60) label = "1m";
  else if (penaltySeconds < 120)  label = "1m " + (penaltySeconds - 60) + "s";
  else {
    const m = Math.floor(penaltySeconds / 60);
    const s = penaltySeconds % 60;
    label = m + "m" + (s ? " " + s + "s" : "");
  }

  document.getElementById("penaltyDisplay").textContent = label;

  document.querySelectorAll(".preset-btn:not(.interval-preset-btn)").forEach(b => {
    b.classList.toggle("active", parseInt(b.dataset.preset) === penaltySeconds);
  });
}

function setPreset(v) { updatePenalty(v); }

// ── Interval ──────────────────────────────────────────────
function updateInterval(val) {
  intervalSeconds = parseInt(val);
  document.getElementById("intervalSlider").value = intervalSeconds;

  const m = Math.floor(intervalSeconds / 60);
  const s = intervalSeconds % 60;
  const label = m + "m" + (s ? " " + s + "s" : "");

  document.getElementById("intervalDisplay").textContent = label;

  document.querySelectorAll(".interval-preset-btn").forEach(b => {
    b.classList.toggle("active", parseInt(b.dataset.preset) === intervalSeconds);
  });
}

function setIntervalPreset(v) { updateInterval(v); }


function renderSites() {
  const list = document.getElementById("sitesList");
  list.innerHTML = sites.map((s, i) => `
    <div class="site-chip">
      <div class="site-dot"></div>
      <span class="site-name">${s}</span>
      <button class="remove-btn" data-index="${i}" title="Eliminar">✕</button>
    </div>`).join("");

  list.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => removeSite(parseInt(btn.dataset.index)));
  });
}

function addSite() {
  const input = document.getElementById("siteInput");
  let val = input.value.trim().toLowerCase()
    .replace(/^https?:\/\//, "").replace(/\/.*/, "");
  if (!val) return;
  if (!val.includes(".")) val += ".com";
  if (!sites.includes(val)) { sites.push(val); renderSites(); }
  input.value = "";
}

function removeSite(i) {
  sites.splice(i, 1);
  renderSites();
}

// ── Categories ────────────────────────────────────────────
function renderCategories() {
  const grid = document.getElementById("catGrid");
  const icons = {
    "Ciencia":         "🔬",
    "Historia":        "📜",
    "Geografía":       "🌍",
    "Mates":           "📐",
    "Arte":            "🎨",
    "Literatura":      "📚",
    "Tecnología":      "💻",
    "Deporte":         "⚽",
    "Deportes":        "🏅",
    "Cultura":         "🎭",
    "General":         "💡",
    "Filosofía":       "🧠",
    "Entretenimiento": "🎬",
  };

  if (!allCategories.length) {
    grid.innerHTML = `<p style="color:var(--muted);font-size:13px;">No se encontraron categorías en questions.txt</p>`;
    updateCatNote();
    return;
  }

  grid.innerHTML = allCategories.map(c => {
    const on = enabledCats.has(c);
    return `<div class="cat-toggle ${on ? "enabled" : ""}" data-cat="${c}">
      <div class="cat-check">${on ? "✓" : ""}</div>
      <span class="cat-label">${icons[c] || "❓"} ${c}</span>
    </div>`;
  }).join("");

  // addEventListener en vez de onclick inline (necesario por CSP de extensiones Chrome)
  grid.querySelectorAll(".cat-toggle").forEach(el => {
    el.addEventListener("click", () => toggleCat(el.dataset.cat, el));
  });

  updateCatNote();
}

function toggleCat(name, el) {
  if (enabledCats.has(name)) {
    if (enabledCats.size <= 1) return; // mínimo 1 siempre activa
    enabledCats.delete(name);
    el.classList.remove("enabled");
    el.querySelector(".cat-check").textContent = "";
  } else {
    enabledCats.add(name);
    el.classList.add("enabled");
    el.querySelector(".cat-check").textContent = "✓";
  }
  updateCatNote();
}

function updateCatNote() {
  const n     = enabledCats.size;
  const total = allCategories.length;
  const note  = document.getElementById("catNote");

  if (!total) {
    note.innerHTML = `Sin categorías cargadas — revisa questions.txt`;
    return;
  }
  if (n === total) {
    note.innerHTML = `<span>✓</span> Todas las categorías activas — máxima variedad`;
  } else {
    note.innerHTML = `<span>${n}/${total}</span> categorías activas`;
    if (n <= 2) note.innerHTML += ` — <span style="color:var(--danger)">⚠ pocas categorías, habrá repeticiones</span>`;
  }
}

// ── Toast ─────────────────────────────────────────────────
function showToast(msg) {
  let toast = document.getElementById("ff-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "ff-toast";
    toast.style.cssText = `
      position: fixed;
      bottom: 28px;
      right: 28px;
      background: var(--accent, #b4f264);
      color: #0f0f0f;
      font-family: 'DM Sans', sans-serif;
      font-weight: 700;
      font-size: 14px;
      padding: 14px 22px;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
      opacity: 0;
      transform: translateY(12px);
      transition: opacity 0.22s, transform 0.22s;
      pointer-events: none;
      z-index: 9999;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  // Forzar reflow para que la transición arranque desde cero
  toast.getBoundingClientRect();
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(12px)";
  }, 2400);
}

// ── Save ──────────────────────────────────────────────────
function saveAll() {
  chrome.storage.local.set({
    ff_penalty:    penaltySeconds,
    ff_interval:   intervalSeconds,
    ff_sites:      sites,
    ff_categories: [...enabledCats]
  }, () => {
    if (chrome.runtime.lastError) {
      showToast("✗ Error al guardar");
      return;
    }
    showToast("✓ Ajustes guardados");

    // Feedback extra en el botón
    const btn = document.getElementById("saveBtn");
    const original = btn.textContent;
    btn.textContent = "✓ Guardado";
    btn.style.opacity = "0.7";
    setTimeout(() => {
      btn.textContent = original;
      btn.style.opacity = "";
    }, 2000);
  });
}

// ── Event listeners (sin onclick inline, requerido por CSP de MV3) ────────
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("saveBtn")
    .addEventListener("click", saveAll);

  document.getElementById("penaltySlider")
    .addEventListener("input", e => updatePenalty(e.target.value));

  document.querySelectorAll(".preset-btn:not(.interval-preset-btn)").forEach(btn => {
    btn.addEventListener("click", () => setPreset(parseInt(btn.dataset.preset)));
  });

  document.getElementById("intervalSlider")
    .addEventListener("input", e => updateInterval(e.target.value));

  document.querySelectorAll(".interval-preset-btn").forEach(btn => {
    btn.addEventListener("click", () => setIntervalPreset(parseInt(btn.dataset.preset)));
  });

  document.getElementById("addSiteBtn")
    .addEventListener("click", addSite);

  document.getElementById("siteInput")
    .addEventListener("keydown", e => { if (e.key === "Enter") addSite(); });
});
