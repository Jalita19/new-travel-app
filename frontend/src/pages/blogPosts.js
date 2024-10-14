// src/pages/BlogPage.js
import React from 'react';
import '../styles/blogpage.css';
import blogPosts from './blogPosts'; // Import blog posts data

const BlogPage = () => {
  console.log('BlogPage component is being rendered');
  console.log('The blogPosts data is:', blogPosts);

  return (
    <div className="blog-container">
      <h1>Travel Blog</h1>
      {blogPosts.map((post, index) => {
        console.log(`Rendering post #${index + 1}: ${post.title}`);
        return (
          <article className="blog-post" key={index}>
            <h2>{post.title}</h2>
            <small>{post.date}</small>
            <p>{post.content.substring(0, 150)}...</p> {/* Show an excerpt of the content */}
            <a href={`/blog/${post.slug}`}>Read more</a>
          </article>
        );
      })}
    </div>
  );
};

export default BlogPage;
