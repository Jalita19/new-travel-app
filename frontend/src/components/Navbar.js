import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/map">Map</Link>
      <Link to="/add">Add Location</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;