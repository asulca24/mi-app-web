import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Si tienes un archivo CSS global, si no, puedes eliminarlo.
import App from './App';
import reportWebVitals from './reportWebVitals'; // Si no usas esto, puedes eliminarlo.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si quieres medir el rendimiento de tu app, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o envíalo a un endpoint de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();