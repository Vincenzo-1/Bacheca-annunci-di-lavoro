import React from 'react';
import { Link } from 'react-router-dom';

//importare OAuth 
        
const HomePage = () => {
    const handleLogin = () => {
        //redirecttoGoogleOauth (da importare dai service)
    };
    
    return (

    <div className="container mt-5 text-center">
      {/* Titolo principale della pagina. */}
      <img src="/logo2.svg" alt="Logo" style={{ width: '250px', height: 'auto' }} />
      <h1>Benvenuto nella Bacheca Annunci!</h1>
      <p className="lead">Trova il tuo prossimo lavoro o il candidato ideale.</p> 
      {/* Separatore orizzontale */}
      <hr/>
      <div className="mt-4">
        <p>Accedi o registrati per continuare:</p>
        <div className="mt-3">
          <Link to="/login" className="btn btn-primary btn-lg me-3">Login Tradizionale</Link>
          <Link to="/register" className="btn btn-primary btn-lg">Registrati</Link>
        </div>
      </div>
    </div>
    );
};

export default HomePage;