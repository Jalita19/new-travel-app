// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RestaurantsPage from './pages/RestaurantsPage';
import HotelsPage from './pages/HotelsPage';
import AttractionsPage from './pages/AttractionsPage';
import MapPage from './pages/MapPage';
import MainComponent from './components/MainComponent';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import Login from './components/Login'; // Import Login component
import SignUp from './components/SignUp'; // Import SignUp component

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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route path="/signup" element={<SignUp />} /> {/* SignUp route */}
      </Routes>
    </Router>
  );
};

export default App;
