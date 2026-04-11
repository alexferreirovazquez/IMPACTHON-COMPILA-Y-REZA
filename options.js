// ── Defaults ──────────────────────────────────────────────
const DEFAULT_PENALTY = 30;
const DEFAULT_SITES   = ["instagram.com","tiktok.com","x.com","twitter.com","facebook.com","youtube.com"];
 
// state
let penaltySeconds = DEFAULT_PENALTY;
let sites          = [...DEFAULT_SITES];
let enabledCats    = new Set();
let allCategories  = []; // se llena leyendo questions.txt
 
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
  chrome.storage.local.get(["ff_penalty","ff_sites","ff_categories"], (d) => {
    if (d.ff_penalty) penaltySeconds = d.ff_penalty;
    if (d.ff_sites)   sites          = d.ff_sites;
 
    // Si hay categorías guardadas las respetamos; si no, activamos todas
    if (d.ff_categories && d.ff_categories.length) {
      enabledCats = new Set(d.ff_categories);
    } else {
      enabledCats = new Set(allCategories);
    }
 
    const slider = document.getElementById("penaltySlider");
    slider.value = penaltySeconds;
    updatePenalty(penaltySeconds);
 
    renderSites();
    renderCategories();
  });
});
 
// ── Penalty ───────────────────────────────────────────────
function updatePenalty(val) {
  penaltySeconds = parseInt(val);
  document.getElementById("penaltySlider").value = val;
 
  let label;
  if (val < 60)       label = val + "s";
  else if (val === 60) label = "1m";
  else if (val < 120) label = "1m " + (val - 60) + "s";
  else { const m = Math.floor(val/60); const s = val%60; label = m + "m" + (s ? " "+s+"s" : ""); }
 
  document.getElementById("penaltyDisplay").textContent = label;
 
  document.querySelectorAll(".preset-btn").forEach(b => {
    b.classList.toggle("active", parseInt(b.getAttribute("onclick").match(/\d+/)[0]) === penaltySeconds);
  });
}
 
function setPreset(v) { updatePenalty(v); }
 
// ── Sites ─────────────────────────────────────────────────
function renderSites() {
  const list = document.getElementById("sitesList");
  list.innerHTML = sites.map((s, i) => `
    <div class="site-chip">
      <div class="site-dot"></div>
      <span class="site-name">${s}</span>
      <button class="remove-btn" onclick="removeSite(${i})" title="Eliminar">✕</button>
    </div>`).join("");
}
 
function addSite() {
  const input = document.getElementById("siteInput");
  let val = input.value.trim().toLowerCase()
    .replace(/^https?:\/\//,"").replace(/\/.*/,"");
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
    return `<div class="cat-toggle ${on ? "enabled" : ""}" onclick="toggleCat('${c}', this)">
      <div class="cat-check">${on ? "✓" : ""}</div>
      <span class="cat-label">${icons[c] || "❓"} ${c}</span>
    </div>`;
  }).join("");
 
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
 
// ── Save ──────────────────────────────────────────────────
function saveAll() {
  chrome.storage.local.set({
    ff_penalty:    penaltySeconds,
    ff_sites:      sites,
    ff_categories: [...enabledCats]
  }, () => {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
  });
}
