import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot instead of ReactDOM
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
