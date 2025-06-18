import React from 'react';
// Importa il componente AppRoutes, che gestisce la definizione e il rendering delle rotte dell'applicazione.
import AppRoutes from './routes/AppRoutes';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App container">
        {/* Renderizza il componente AppRoutes, che a sua volta mostrerà il componente
            corrispondente alla rotta URL corrente. */}
        <AppRoutes />
      </div>
  )
}

export default App
