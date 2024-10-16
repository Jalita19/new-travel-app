// src/components/Login.js
import React from 'react';
import './Login.css'; // Ensure the CSS file is in the same directory

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-header">
        <img src="/images/post8.jpg" alt="Travel" className="login-header-image" /> {/* Direct path */}
        <h1>Welcome Back!</h1>
      </div>
      <div className="login-form-container">
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
          
          <button type="submit">Login</button>
        </form>
      </div>
      <p className="travel-tip">"Adventure awaits! Don't forget to pack your sense of adventure!"</p>
    </div>
  );
};

export default Login;
