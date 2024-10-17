import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Make sure you have this CSS file

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement login logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement logout logic
    setIsLoggedIn(false);
  };

  return (
    <div className="home-container">
      <img src="./images/post1.jpg" alt="Travel Banner" className="banner-image" />

      <div className="auth-container">
        {isLoggedIn ? (
          <>
            <h2>Welcome Back!</h2>
            <button onClick={handleLogout} className="btn">Log Out</button>
          </>
        ) : (
          <>
            <h2>Please Log In or Sign Up</h2>
            <button onClick={handleLogin} className="btn">Log In</button>
            <Link to="/signup" className="btn">Sign Up</Link>
          </>
        )}
      </div>

      <div className="reviews-section">
        <h3>User Reviews</h3>
        <div className="reviews">
          <div className="review-item">“Great travel tips!” - User A</div>
          <div className="review-item">“Helped me save a lot!” - User B</div>
          <div className="review-item">“Amazing experience!” - User C</div>
        </div>
      </div>

      <div className="features">
        <h3>Why Choose Us?</h3>
        <div className="feature-items">
          <div className="feature-item">
            <img src="/images/post7.jpg" alt="Feature 1" />
            <h4>Affordable Prices</h4>
            <p>Find the best deals on flights and accommodations.</p>
          </div>
          <div className="feature-item">
            <img src="/images/post2.jpg" alt="Feature 2" />
            <h4>Expert Tips</h4>
            <p>Get insider advice from seasoned travelers.</p>
          </div>
          <div className="feature-item">
            <img src="/images/post3.jpg" alt="Feature 3" />
            <h4>24/7 Support</h4>
            <p>We're here to assist you anytime, anywhere.</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Travel Company. All Rights Reserved.</p>
        <nav>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </footer>
    </div>
  );
};


export default HomePage;


