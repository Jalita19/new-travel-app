// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RestaurantsPage from './pages/RestaurantsPage';
import HotelsPage from './pages/HotelsPage';
import AttractionsPage from './pages/AttractionsPage';
import MapPage from './pages/MapPage';
import MainComponent from './components/MainComponent';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/attractions" element={<AttractionsPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
};

export default App;
