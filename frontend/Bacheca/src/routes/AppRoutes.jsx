import React from 'react';
import HomePage from '../pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';


const NotFoundPage = () => <div><h1>404 - Pagina Non Trovata</h1><Link to="/">Torna alla Home</Link></div>;const AppRoutes = () => {
  return (
    // Router (BrowserRouter) avvolge tutte le definizioni di rotte.
    <Router>
      {/* Routes contiene tutte le definizioni <Route>. */}
      <Routes>
        {/* Definizioni delle Rotte Pubbliche: accessibili a tutti gli utenti. */}
        <Route path="/" element={<HomePage />} /> {/* Rotta per la pagina principale. */}
        
      </Routes>
    </Router>
  );
};

// Esporta il componente AppRoutes.
export default AppRoutes;
