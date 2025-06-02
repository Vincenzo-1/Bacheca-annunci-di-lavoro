import Candidature from "../models/Candidature";
import PostAnnunci from "../models/PostAnnunci";

export const creazioneCandidature = async (req , res) => {
    try{
      
      const { postAnnunciId, emailCandidato, descrizioneCandidato} = req.body;

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











