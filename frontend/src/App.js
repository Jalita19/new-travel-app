import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Your existing Navbar
import MapPage from './pages/MapPage';
import BlogPage from './pages/BlogPage'; // Blog Page
import SignUp from './components/SignUp'; // SignUp component for Firebase
import Login from './components/Login'; // Login component for Firebase
import BlogPostPage from './pages/BlogPostPage'; // Blog Post component
import HomePage from './pages/HomePage'; // HomePage component
import ContactPage from './pages/ContactPage'; // Your contact page
import AboutPage from './components/About';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} /> {/* Set HomePage as the home page */}
        <Route path="/map" element={<MapPage />} />
        <Route path="/blog" element={<BlogPage />} /> {/* Blog Page Route */}
        <Route path="/blog/:slug" element={<BlogPostPage />} /> {/* Route for individual blog posts */}
        <Route path="/signup" element={<SignUp />} /> {/* SignUp Page for registration */}
        <Route path="/login" element={<Login />} /> {/* Login Page for user authentication */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
