import React from 'react';
import ReactDOM from 'react-dom/client'; // Importă createRoot din react-dom/client
import './index.css';
import App from './App';

const container = document.getElementById('root');

// Creează un root folosind createRoot și randarește aplicația
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
