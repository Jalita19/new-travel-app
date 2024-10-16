import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaPlane } from 'react-icons/fa'; // Import the airplane icon from react-icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          <FaPlane className="plane-icon" /> Travel App
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to= "/Map">Map</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="navbar-buttons">
        <Link to="/login" className="btn login-btn">Login</Link>
        <Link to="/signup" className="btn signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;

