const FIREBASE_PROJECT_ID = "focus-friends-a6d19"; 

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  
  // 1. OBTENER EL RANKING
  if (request.action === "getLeaderboard") {
    const url = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/rooms/${request.room}/players`;
    fetch(url)
      .then(res => res.json())
      .then(data => sendResponse(data))
      .catch(e => sendResponse({ error: true }));
    return true; // Mantiene el canal abierto para responder
  }

  // 2. SUBIR PUNTUACIÓN Y RACHA
  if (request.action === "saveScore") {
    const docId = encodeURIComponent(request.name.trim());
    const safeRoom = encodeURIComponent(request.room.trim());
    
    // Añadimos "streak" a la máscara de actualización de la URL
    const url = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/rooms/${safeRoom}/players/${docId}?updateMask.fieldPaths=name&updateMask.fieldPaths=score&updateMask.fieldPaths=streak`;

    fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        fields: { 
          name: { stringValue: request.name }, 
          score: { integerValue: request.score.toString() },
          streak: { integerValue: request.streak.toString() } // <-- Guardamos la racha aquí
        } 
      })
    })
    .then(res => res.json())
    .then(data => sendResponse(data))
    .catch(e => sendResponse({ error: true }));
    return true; 
  }
});