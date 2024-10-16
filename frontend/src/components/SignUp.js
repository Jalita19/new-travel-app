// src/components/SignUp.js
import React from 'react';
import './SignUp.css'; // Ensure the CSS file is in the same directory

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="signup-header">
        <img src="/images/post3.jpg" alt="Travel" className="signup-header-image" /> {/* Direct path */}
        <h1>Join Us!</h1>
      </div>
      <div className="signup-form-container">
        <form className="signup-form">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Choose a username" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />

          <button type="submit">Sign Up</button>
        </form>
      </div>
      <p className="travel-tip">"The world is a book, and those who do not travel read only one page."</p>
    </div>
  );
};

export default SignUp;

