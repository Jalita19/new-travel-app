import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';  // Import initialized Firebase auth
import './SignUp.css';  // Ensure you have a CSS file for styling

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up: ', userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-header">
        <img src="/images/post3.jpg" alt="Travel" className="signup-header-image" /> {/* Direct path */}
        <h1>Join Us!</h1>
      </div>
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handleSignUp}>
          <label htmlFor="signup-username">Username</label>
          <input
            type="text"
            id="signup-username" // Unique ID for username input
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="signup-email">Email</label>
          <input
            type="email"
            id="signup-email" // Unique ID for email input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            id="signup-password" // Unique ID for password input
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
      </div>
      <p className="travel-tip">"The world is a book, and those who do not travel read only one page."</p>
    </div>
  );
};

export default SignUp;

