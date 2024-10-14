// src/pages/BlogPage.js
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import '../styles/blogpage.css';
import blogPosts from './blogPosts';

const BlogPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  if (!user) {
    return <div>Please log in to view the blog.</div>;
  }

  return (
    <div className="blog-container">
      <h1>Travel Blog</h1>
      {blogPosts.map((post, index) => (
        <article className="blog-post" key={index}>
          <h2>{post.title}</h2>
          <small>{post.date}</small>
          <p>{post.content.substring(0, 150)}...</p>
          <a href={`/blog/${post.slug}`}>Read more</a>
        </article>
      ))}
    </div>
  );
};

export default BlogPage;
