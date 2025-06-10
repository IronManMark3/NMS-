import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@styles/index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

// ✅ Animate on scroll
AOS.init({
  duration: 1000,
  once: false,             // allow multiple triggers
  easing: 'ease-in-out',
  mirror: true             // fade out as well
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
