import express from 'express';

import { 
    creazioneCandidature, 
    visualizzazioneCandidatureFatte,
    visualizzaCandidaturePerAnnuncio
} from "../controllers/candidatureController.js" ;


const router = express.Router();


router.post("/" , creazioneCandidature);

router.get("/worker/:email" , visualizzazioneCandidatureFatte);

router.get("/annuncio/:postAnnunciId", visualizzaCandidaturePerAnnuncio);

export default router;