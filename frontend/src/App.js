import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MapPage from './pages/MapPage';
import BlogPage from './components/BlogPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import BlogPostPage from './pages/BlogPostPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './components/About';
import PostPage from './components/PostPage';
import PostDetailPage from './components/PostDetailPage';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import PostDetail from './pages/PostDetail';


const ProtectedRoute = ({ children, user }) => {
  return user ? children : <Navigate to="/login" />;
};

const NotFound = () => (
  <div style={{ textAlign: 'center', margin: '50px' }}>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar user={user} handleSignOut={handleSignOut} />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post" element={<ProtectedRoute user={user}><PostPage /></ProtectedRoute>} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
        <Route path="/post-detail" element={<PostDetail />} />
      </Routes>
    </>
  );
};

export default App;

