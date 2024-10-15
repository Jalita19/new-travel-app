// src/pages/BlogPage.js
import React from 'react';
import '../styles/blogpage.css';
import blogPosts from '../data/blogPosts'; // Import blog posts data

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Welcome to My Travel Blog</h1>
      <p className="blog-intro">Your go-to resource for tips on budget traveling, flight deals, and more!</p>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <article className="blog-post" key={index}>
            <h2 className="post-title">{post.title}</h2>
            <small className="post-date">{post.date}</small>
            <p className="post-excerpt">{post.content.substring(0, 150)}...</p>
            <a className="read-more" href={`/blog/${post.slug}`}>Read more</a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
