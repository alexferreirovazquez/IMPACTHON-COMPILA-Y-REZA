const FIREBASE_PROJECT_ID = "focus-friends-a6d19";
const FIRESTORE_BASE = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)`;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  // 1. OBTENER EL RANKING DE SALA
  if (request.action === "getLeaderboard") {
    const url = `${FIRESTORE_BASE}/documents/rooms/${request.room}/players`;
    fetch(url)
      .then(res => res.json())
      .then(data => sendResponse(data))
      .catch(() => sendResponse({ error: true }));
    return true;
  }

  // 2. SUBIR PUNTUACIÓN Y RACHA A LA SALA
  if (request.action === "saveScore") {
    const docId    = encodeURIComponent(request.name.trim());
    const safeRoom = encodeURIComponent(request.room.trim());
    const url = `${FIRESTORE_BASE}/documents/rooms/${safeRoom}/players/${docId}` +
                `?updateMask.fieldPaths=name&updateMask.fieldPaths=score&updateMask.fieldPaths=streak`;

    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: {
          name:   { stringValue:  request.name },
          score:  { integerValue: request.score.toString() },
          streak: { integerValue: request.streak.toString() }
        }
      })
    })
    .then(res => res.json())
    .then(data => sendResponse(data))
    .catch(() => sendResponse({ error: true }));
    return true;
  }

  // 3. LEER PUNTOS GLOBALES — suma los puntos reales de todos los jugadores
  if (request.action === "getGlobalPoints") {
    const url = `${FIRESTORE_BASE}/documents/global_players`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const docs  = data.documents || [];
        const total = docs.reduce((sum, doc) => {
          return sum + parseInt(doc.fields?.score?.integerValue || "0");
        }, 0);
        sendResponse({ total_points: total });
      })
      .catch(() => sendResponse({ error: true, total_points: 0 }));
    return true;
  }

  // 4. ACTUALIZAR PUNTOS DEL JUGADOR EN LA COLECCIÓN GLOBAL
  //    Cada jugador tiene su doc en global_players/{nombre} con su score actual.
  //    El total del reto = suma de todos esos docs (calculado en getGlobalPoints).
  if (request.action === "addGlobalPoints") {
    const name   = request.name  || "unknown";
    const points = request.score || 0;
    const docId  = encodeURIComponent(name.trim());
    const url    = `${FIRESTORE_BASE}/documents/global_players/${docId}` +
                   `?updateMask.fieldPaths=name&updateMask.fieldPaths=score`;

    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: {
          name:  { stringValue:  name },
          score: { integerValue: points.toString() }
        }
      })
    })
    .then(res => res.json())
    .then(() => sendResponse({ ok: true }))
    .catch(() => sendResponse({ error: true }));
    return true;
  }
});