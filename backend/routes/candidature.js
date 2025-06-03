import express from 'express';

import { 
    creazioneCandidature, 
    visualizzazioneCandidatureFatte
} from "../controllers/candidatureController" ;


const router = express.Router();


router.post("/" , creazioneCandidature);

router.get("/worker/:email" , visualizzazioneCandidatureFatte);

router.get("/annuncio/:postAnnunciId", visualizzaCandidaturePerAnnuncio);

export default router;