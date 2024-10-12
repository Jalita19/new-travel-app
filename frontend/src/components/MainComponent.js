// src/components/MainComponent.js
import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import MapComponent from '../components/MapComponent'; // Import the MapComponent
import '../styles/MainComponent.css'; // Import styles

const MainComponent = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar */}
      <MapComponent /> {/* Render the MapComponent */}
    </div>
  );
};

export default MainComponent;
