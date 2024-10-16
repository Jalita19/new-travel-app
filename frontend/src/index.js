import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'; // Global styles

// Render the main application
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
