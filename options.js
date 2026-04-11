// ── Defaults ──────────────────────────────────────────────
const DEFAULT_PENALTY   = 30;
const DEFAULT_SITES     = ["instagram.com","tiktok.com","x.com","twitter.com","facebook.com","youtube.com"];
const ALL_CATEGORIES    = [
  "Ciencia","Historia","Geografía","Mates","Arte","Literatura",
  "Tecnología","Deporte","Deportes","Cultura","General","Filosofía","Entretenimiento"
];

// state
let penaltySeconds = DEFAULT_PENALTY;
let sites          = [...DEFAULT_SITES];
let enabledCats    = new Set(ALL_CATEGORIES);

// ── Boot ──────────────────────────────────────────────────
chrome.storage.local.get(["ff_penalty","ff_sites","ff_categories"], (d) => {
  if (d.ff_penalty)    penaltySeconds = d.ff_penalty;
  if (d.ff_sites)      sites          = d.ff_sites;
  if (d.ff_categories) enabledCats    = new Set(d.ff_categories);

  const slider = document.getElementById("penaltySlider");
  slider.value = penaltySeconds;
  updatePenalty(penaltySeconds);

  renderSites();
  renderCategories();
});

// ── Penalty ───────────────────────────────────────────────
function updatePenalty(val) {
  penaltySeconds = parseInt(val);
  document.getElementById("penaltySlider").value = val;

  let label;
  if (val < 60)  label = val + "s";
  else if (val === 60)  label = "1m";
  else if (val < 120)  label = "1m " + (val-60) + "s";
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
    "Ciencia":"🔬","Historia":"📜","Geografía":"🌍","Mates":"📐",
    "Arte":"🎨","Literatura":"📚","Tecnología":"💻","Deporte":"⚽",
    "Deportes":"🏅","Cultura":"🎭","General":"💡","Filosofía":"🧠","Entretenimiento":"🎬"
  };

  grid.innerHTML = ALL_CATEGORIES.map(c => {
    const on = enabledCats.has(c);
    return `<div class="cat-toggle ${on ? 'enabled' : ''}" onclick="toggleCat('${c}', this)">
      <div class="cat-check">${on ? '✓' : ''}</div>
      <span class="cat-label">${icons[c] || '❓'} ${c}</span>
    </div>`;
  }).join("");

  updateCatNote();
}

function toggleCat(name, el) {
  if (enabledCats.has(name)) {
    if (enabledCats.size <= 1) return; // siempre mínimo 1
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
  const n = enabledCats.size;
  const total = ALL_CATEGORIES.length;
  const note = document.getElementById("catNote");
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
