import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Register service worker for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        return registration;
      })
      .catch((registrationError) => {
        return registrationError;
      });
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);