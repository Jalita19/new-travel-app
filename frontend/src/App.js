// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Your existing Navbar
import HomePage from './pages/HomePage'; // Import your HomePage component
import RestaurantsPage from './pages/RestaurantsPage'; // Existing pages
import HotelsPage from './pages/HotelsPage';
import AttractionsPage from './pages/AttractionsPage';
import MapPage from './pages/MapPage';
import BlogPage from './pages/BlogPage'; // Blog Page
import SignUp from './components/SignUp'; // SignUp component for Firebase
import Login from './components/Login'; // Login component for Firebase
import BlogPostPage from './pages/BlogPostPage'; // Blog Post component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Set HomePage as the home page */}
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/attractions" element={<AttractionsPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/blog" element={<BlogPage />} /> {/* Blog Page Route */}
        <Route path="/blog/:slug" element={<BlogPostPage />} /> {/* Route for individual blog posts */}
        <Route path="/signup" element={<SignUp />} /> {/* SignUp Page for registration */}
        <Route path="/login" element={<Login />} /> {/* Login Page for user authentication */}
      </Routes>
    </Router>
  );
};

export default App;

