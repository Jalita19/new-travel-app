// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing styles for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <i className="fa-solid fa-plane"></i>
        <i className="fa-solid fa-suitcase"></i>
        Travel App
      </div>
      <ul>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/hotels">Hotels</Link></li>
        <li><Link to="/attractions">Attractions</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
