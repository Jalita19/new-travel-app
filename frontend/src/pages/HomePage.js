import React from 'react';
import './HomePage.css'; // Import your CSS for styling
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to Travel Diaries</h1>
        <p>Your gateway to exploring the world through shared stories and experiences!</p>
      </header>

      <section className="signup-login-section">
        <div className="auth-links">
          <Link to="/signup" className="auth-button">Sign Up</Link>
          <Link to="/login" className="auth-button">Login</Link>
        </div>
        <p>Join our community of travel enthusiasts to post blogs, share advice, and explore tips from fellow travelers.</p>
      </section>

      <section className="featured-blogs-section">
        <h2>Featured Blogs</h2>
        <div className="blog-cards">
          <div className="blog-card">
            <img src="/images/post1.jpg" alt="Adventurous Road Trip" />
            <h3>Best Road Trips in the USA</h3>
            <p>Discover the most scenic routes from the East to the West Coast.</p>
          </div>
          <div className="blog-card">
            <img src="/images/post2.jpg" alt="Beach Vacation" />
            <h3>Top 10 Beach Getaways</h3>
            <p>From sunny California to tropical Florida, find your dream beach destination.</p>
          </div>
          <div className="blog-card">
            <img src="/images/post3.jpg" alt="New York Exploration" />
            <h3>Exploring New York</h3>
            <p>The ultimate guide to food, culture, and hidden gems in the Big Apple.</p>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <h2>User Reviews</h2>
        <div className="reviews">
          <div className="review">
            <p>"This blog gave me amazing tips for my cross-country trip. So helpful!"</p>
            <span>- Sarah from Texas</span>
          </div>
          <div className="review">
            <p>"Loved reading about the budget travel hacks. I saved so much on my trip!"</p>
            <span>- Michael from California</span>
          </div>
          <div className="review">
            <p>"I found the best hidden gems in New York, thanks to Travel Diaries!"</p>
            <span>- Emma from New York</span>
          </div>
        </div>
      </section>

      <section className="share-experience-section">
        <h2>Share Your Experience</h2>
        <p>Been somewhere cool? Share your travel stories and tips with our community!</p>
        <Link to="/create-post" className="share-button">Create a Blog Post</Link>
      </section>

      <section className="gallery-section">
        <h2>Explore By State</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/images/paris.jpg" alt="Florida Beaches" />
            <h3>Florida</h3>
          </div>
          <div className="gallery-item">
            <img src="/images/tokyo.jpg" alt="California Mountains" />
            <h3>California</h3>
          </div>
          <div className="gallery-item">
            <img src="/images/post3.jpg" alt="New York City" />
            <h3>New York</h3>
          </div>
          <div className="gallery-item">
            <img src="/images/post8.jpg" alt="Colorado Hiking" />
            <h3>Colorado</h3>
          </div>
          {/* Add more states as needed */}
        </div>
      </section>

      <footer className="homepage-footer">
        <p>Travel Diaries &copy; 2024 - Your go-to travel blog for adventures, tips, and inspiration!</p>
      </footer>
    </div>
  );
};

export default HomePage;
