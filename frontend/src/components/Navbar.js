// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // Importing the CSS file

// Navbar component
const Navbar = () => {
  return (
    <nav>
      <div className="navbar-logo">
        <i className="fas fa-plane"></i> {/* Font Awesome icon */}
        <span>Travel App</span>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/hotels">Hotels</Link></li>
        <li><Link to="/attractions">Attractions</Link></li>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/login">Login</Link></li> {/* Add Login link */}
        <li><Link to="/signup">Sign Up</Link></li> {/* Add Sign Up link */}
      </ul>
    </nav>
  );
};

export default Navbar;
