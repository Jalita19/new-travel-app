// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';  // Add Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1DT9tgJg1d5nhlzwkgDAFyjd5E9BkZ4A",
  authDomain: "new-travel-app-61432.firebaseapp.com",
  projectId: "new-travel-app-61432",
  storageBucket: "new-travel-app-61432.appspot.com",
  messagingSenderId: "25441103578",
  appId: "1:25441103578:web:0561dcfff3be29e84f3fe3",
  measurementId: "G-P3FLTX9T7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  // Initialize Firebase Authentication

// Export necessary services
export { app, analytics, auth };  // Export 'auth' for authentication
