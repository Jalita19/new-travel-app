import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';  // Import initialized Firebase auth
import './Login.css'; // Ensure the CSS file is in the same directory

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in: ', userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <img src="/images/post8.jpg" alt="Travel" className="login-header-image" /> {/* Direct path */}
        <h1>Welcome Back!</h1>
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            id="login-email" // Unique ID for email input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password" // Unique ID for password input
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
      </div>
      <p className="travel-tip">"Adventure awaits! Don't forget to pack your sense of adventure!"</p>
    </div>
  );
};

export default Login;




