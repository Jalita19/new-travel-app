// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // For Firestore
import { getDatabase } from "firebase/database"; // For Realtime Database
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyD1DT9tgJg1d5nhlzwkgDAFyjd5E9BkZ4A",
    authDomain: "AIzaSyD1DT9tgJg1d5nhlzwkgDAFyjd5E9BkZ4A",
    projectId: "new-travel-app-61432",
    storageBucket: "new-travel-app-61432.appspot.com",
    messagingSenderId: "25441103578",
    appId: "1:25441103578:web:0561dcfff3be29e84f3fe3",
    measurementId: "G-P3FLTX9T7E" // optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // For Firestore
const rtdb = getDatabase(app); // For Realtime Database
const analytics = getAnalytics(app);

export { auth, db, rtdb }; // Export what you need
export { app, analytics };
