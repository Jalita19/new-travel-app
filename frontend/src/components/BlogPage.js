// src/pages/BlogPage.js
import React, { useState } from 'react';
import '../styles/blogpage.css';
import blogPosts from '../data/blogPosts'; // Import blog posts data
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [posts] = useState(blogPosts); // Removed addPost

  return (
    <div className="blog-container">
      <h1 className="blog-title">Welcome to My Travel Blog</h1>
      <p className="blog-intro">Your go-to resource for tips on budget traveling, flight deals, and more!</p>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <article className="blog-post" key={index}>
            <h2 className="post-title">{post.title}</h2>
            <small className="post-date">{post.date}</small>
            <p className="post-excerpt">{post.content.substring(0, 150)}...</p>
            <Link className="read-more" to={`/blog/${post.slug}`}>Read more</Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

