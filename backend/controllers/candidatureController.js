import Candidature from "../models/Candidature";
import PostAnnunci from "../models/PostAnnunci";

export const creazioneCandidature = async (req , res) => {
    try{
      
      const { postAnnunciId, emailCandidato, descrizioneCandidato} = req.body; //Estraiamo dal body della richiesta i dati della candidatura:
// - postAnnunciId: è l'ID dell'annuncio di lavoro a cui ci si sta candidando. 
//   Questo ID è stato generato automaticamente da MongoDB quando l'annuncio è stato creato.
//   Viene usato per valorizzare il campo 'postAnnunci' nello schema Candidature.js, 
//   che è un riferimento (_ref_) all'annuncio di lavoro.


      const esistenzaDelLavoro = await PostAnnunci.findById(postAnnunciId);
      if (!esistenzaDelLavoro){
       return res.status(404).json({ message: "Lavoro non trovato"});
      }
      //passo i dati{} di req.body al costruttore Candidature()
      const nuoveCandidature = new Candidature({
        postAnnunci : postAnnunciId, //La candidatura non sarà collegata a nessun annuncio di lavoro. Non potrai sapere per quale annuncio è stata fatta quella candidatura.
                                     //Se il campo non è obbligatorio, la candidatura verrà salvata ma senza riferimento all’annuncio
        emailCandidato, 
        descrizioneCandidato
      });
      const candidaturaSalvata = await nuoveCandidature.save();
      res.status(201).json( candidaturaSalvata ); //è gia un {json}
    } catch(e){
        res.status(500).json({ message: "Errore nella creazione della candidatura" , error: e.message});
    }
};



export const visualizzazioneCandidatureFatte = async (req, res) => {
  try{

    const candidature = await Candidature.find({ emailCandidato : req.params.email})
    //restituisce un array( vuoto se non trova nulla), non sarà mai undefined o null
    //conterrà il valore dell’email passato nell’URL del routes
    //Se l'array di candidature è vuoto allora è 0
    if(candidature.length === 0 ){
      res.status(404).json({message: "Nessuna candidatura trovata per questo Candiadato"});
    }
    res.json(candidature);
  } catch(e) {
    res.status(500).json({message: "Errore nella visualizzazione della candidatura" , error: e.message});
  }
};




export const visualizzaCandidaturePerAnnuncio = async (req, res) => {
    try {
        const { postAnnunciId } = req.params; //significa: estrai il parametro postAnnunciId dalla URL della richiesta HTTP.

        // Verifica se l'annuncio esiste
        const annuncio = await PostAnnunci.findById(postAnnunciId);
        if (!annuncio) {
            return res.status(404).json({ message: "Annuncio non trovato" });
        }

        // Trova tutte le candidature per quell'annuncio
        const candidature = await Candidature.find({ postAnnunci: postAnnunciId }); //in candidature, il campo postAnnunci è un riferimento all'ID dell'annuncio.
        if (candidature.length === 0) {
            return res.status(404).json({ message: "Nessuna candidatura trovata per questo annuncio" });
        }
 res.json({ //QUello che viene restituito è un oggetto JSON che contiene le informazioni sull'annuncio e le candidature associate.
            annuncio: {
                titolo: annuncio.titolo,
                azienda: annuncio.azienda,
                descrizione: annuncio.descrizione
            },
            candidature 
        });
    } catch (error) {
        res.status(500).json({ message: "Errore nella visualizzazione delle candidature", error: error.message });
    }
};