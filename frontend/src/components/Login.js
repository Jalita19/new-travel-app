import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';  // Import initialized Firebase auth
import './Login.css'; // Ensure the CSS file is in the same directory
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear any previous error
    console.log('Attempting login with:', email, password); // Debugging log
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in: ', userCredential.user);
      // Redirect to home page after successful login
      navigate('/home'); 
    } catch (error) {
      // Provide more detailed error feedback
      switch (error.code) {
        case 'auth/user-not-found':
          setError('No user found with this email.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password. Please try again.');
          break;
        default:
          setError('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <img src="/images/post8.jpg" alt="Travel" className="login-header-image" />
        <h1>Welcome Back!</h1>
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            id="login-email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {error && <p className="error-message" aria-live="assertive">{error}</p>}
      </div>
      <p className="travel-tip">"Adventure awaits! Don't forget to pack your sense of adventure!"</p>
    </div>
  );
};

export default Login;






