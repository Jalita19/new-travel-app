import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import MapPage from './pages/MapPage'; // Adjust the path if needed
import AddLocationPage from './pages/AddLocationPage'; // Adjust the path if needed
import Login from './pages/Login'; // Adjust the path if needed

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Map</a>
          <a href="/add">Add Location</a>
          <a href="/login">Login</a>
        </nav>
        <Routes> {/* Use Routes here */}
          <Route path="/" element={<MapPage />} /> {/* Use element prop instead of component */}
          <Route path="/add" element={<AddLocationPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* Fallback content */}
        <div>Welcome to the Travel App!</div>
      </div>
    </Router>
  );
};

export default App;