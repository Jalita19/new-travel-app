// src/pages/PostDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/PostDetail.css';

const PostDetail = () => {
  const location = useLocation();
  const { post } = location.state;

  return (
    <div className="post-detail-container">
      <h1>{post.title}</h1>
      <small>{post.date}</small>
      {post.image && <img src={post.image} alt={post.title} className="post-image" />}
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
