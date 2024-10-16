import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to Your Travel Adventure!</h1>
        <p>Discover attractions, hotels, and restaurants around the world.</p>
        <div className="auth-buttons">
          <Link to="/signup" className="auth-button">Sign Up</Link>
          <Link to="/login" className="auth-button">Login</Link>
        </div>
      </header>

      <section className="gallery">
        <h2>Explore the World</h2>
        <div className="image-grid">
          <img src="/images/post2.jpg" alt="Travel Destination 1" />
          <img src="/images/travel2.jpg" alt="Travel Destination 2" />
          <img src="/images/travel3.jpg" alt="Travel Destination 3" />
          <img src="/images/travel4.jpg" alt="Travel Destination 4" />
          <img src="/images/travel5.jpg" alt="Travel Destination 5" />
        </div>
      </section>

      <section className="content">
        <h2>Travel Tips & Guides</h2>
        <article>
          <h3>Finding Cheap Flights</h3>
          <p>Learn how to book flights at the best prices and save on your next trip.</p>
        </article>
        <article>
          <h3>Packing Light for Trips</h3>
          <p>Tips on how to pack efficiently and avoid overpacking.</p>
        </article>
        <article>
          <h3>Top Attractions to Visit</h3>
          <p>Discover must-see attractions in various destinations.</p>
        </article>
      </section>
    </div>
  );
};

export default HomePage;
