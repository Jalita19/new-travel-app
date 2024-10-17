import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Ensure this CSS file exists

const HomePage = () => {
  return (
    <div className="home-container">
      <img src="/images/post1.jpg" alt="Travel Banner" className="banner-image" />

      <div className="info-container">
        <h2>Welcome to Our Travel App!</h2>
        <p>Discover amazing places and plan your next adventure with us.</p>
        <Link to="/about" className="btn">Explore Now</Link> {/* Changed to /about */}
      </div>

      <div className="explore-section">
        <h3>Explore Destinations</h3>
        <div className="destinations">
          <div className="destination-item">
            <img src="/images/post2.jpg" alt="Destination 1" />
            <h4>Destination 1</h4>
          </div>
          <div className="destination-item">
            <img src="/images/post3.jpg" alt="Destination 2" />
            <h4>Destination 2</h4>
          </div>
          <div className="destination-item">
            <img src="/images/post4.jpg" alt="Destination 3" />
            <h4>Destination 3</h4>
          </div>
        </div>
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
