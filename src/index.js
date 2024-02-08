import React from 'react';
import ReactDOM from 'react-dom/client';

// Importations locales
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style/index.css';

// Création de la racine ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans le strict mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mesure des performances de l'application
reportWebVitals();