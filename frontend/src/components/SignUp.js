import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';  // Import initialized Firebase auth
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './SignUp.css'; // Ensure the CSS file is in the same directory

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear any previous error
    console.log('Attempting signup with:', email, password); // Debugging log
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up: ', userCredential.user);
      // Redirect to home page after successful signup
      navigate('/home'); 
    } catch (error) {
      // Provide more detailed error feedback
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('This email is already in use.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email format. Please try again.');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters.');
          break;
        default:
          setError('Signup failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-header">
        <img src="/images/post8.jpg" alt="Travel" className="signup-header-image" />
        <h1>Create an Account!</h1>
      </div>
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handleSignup}>
          <label htmlFor="signup-email">Email</label>
          <input
            type="email"
            id="signup-email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            id="signup-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        {error && <p className="error-message" aria-live="assertive">{error}</p>}
      </div>
      <p className="travel-tip">"Adventure awaits! Don’t forget to pack your sense of adventure!"</p>
    </div>
  );
};

export default SignUp;


