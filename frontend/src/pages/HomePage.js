import React from 'react';
import '../styles/HomePage.css';
import Signup from '../components/SignUp'; // Assuming you already have this component
import Login from '../components/Login'; // Assuming you have a Login component

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Explore the World</h1>
        <p>Your adventure starts here!</p>
        <button className="explore-button">Explore Now</button>
      </header>
      
      <section className="travel-tips">
        <h2>Travel Tips</h2>
        <div className="tips-container">
          <div className="tip">
            <h3>Finding Cheap Flights</h3>
            <p>Learn how to find the best deals on flights using various online tools and strategies...</p>
          </div>
          <div className="tip">
            <h3>Budget Traveling</h3>
            <p>Discover how to travel on a budget, including affordable accommodations and meals...</p>
          </div>
          <div className="tip">
            <h3>Packing Light</h3>
            <p>Tips and tricks for packing efficiently to avoid excess baggage fees and travel stress...</p>
          </div>
        </div>
      </section>

      <section className="signup-login">
        <div className="signup-container">
          <Signup />
        </div>
        <div className="login-container">
          <Login />
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Your Travel Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
