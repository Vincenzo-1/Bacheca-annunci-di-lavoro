import apiClient from "./apiClient";

//Creo una funzione in modo tale da ottenere con una get i candidati
//che si sono iscritti a quell'annuncio di lavoro. In questa funzione 
//passo come prop lavoroId in modo tale una volta che inserisco sull'URL
//quell'id lavoro, mi apparirà gli annunci di lavoro.
export const getCandidaturePerAnnuncio = async (postAnnunciId) => {
    return apiClient.get(`/candidature/annuncio/${postAnnunciId}`); 
};

//Template literal mi permette di inserire variabili direttamente nella stringa
//lavoroId è diverso dal backend :postAnnunciId 
//Quando chiamo apiClient.get() , uso questa 
//configurazione per fare richiesta HTTP in modo tale 
//da non riscrivere sogni volta URL e headers
//Inoltre, se in futuro vuoi aggiungere autenticazione, intercettori o altre impostazioni, ti basta modificarle in un solo posto (apiClient.js) e tutte le chiamate API le useranno automaticamente.

export const getCandidatureFatte = async (email) =>{
    return apiClient.get(`/candidature/lavoratore/${email}`);
};
//RIVEDERE QUESTO SOPRA NEL CASO
//La funzione si collega al backend inviando una richiesta
//GET all'endpoint /candidature/lavoratore/email.
//La parte ${email} nel template literal inserisce il valore dell’email direttamente nell’URL.


// Prende 'applicationData' come argomento, un oggetto che contiene i dati della candidatura.
// applicationData DEVE contenere almeno:
  // - postAnnunciId: l'ID dell'annuncio per cui ci si candida.
  // - descrizioneCandidato: il messaggio o la descrizione fornita dal candidato.
  // L'ID e l'email dell'utente 'applier' dovrebbero essere gestiti automaticamente dal backend
  // tramite l'utente autenticato (req.user) grazie al middleware 'ensureAuthenticated'.
  // Effettua una richiesta POST all'endpoint '/candidature' del backend.
export const creazioneCandidature = async (candidature) => {
    return apiClient.post("/candidature" , candidature);
};

//Il nome della variabile (candidature) nel frontend non deve per forza essere uguale al nome del model MongoDB.
//Quello che conta è che l’oggetto che passi abbia le stesse proprietà (campi) che il backend si aspetta per creare una nuova candidatu
// applicationData--> candidature