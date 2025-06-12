import axios from "axios";





const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost/5000/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {'Content-Type': 'application.json'} //application indica
    //che è un tipo di dato generico usato da applicazioni 
    //(non testo, non immagini,...). /json indica il formato dei dati
    //standard MIME /json . La / per separare tipo e sottotipo
});

//* TODO 
// apiClient.interceptors.request.use()
//apiClient.interceptors.response.use()

// *//
export default apiClient;