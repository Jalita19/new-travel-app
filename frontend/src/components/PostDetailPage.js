// src/pages/PostDetailPage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/PostDetailPage.css';

const PostDetailPage = () => {
  const location = useLocation();
  const { post } = location.state;

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <div className="post-detail-container">
      <h1>{post.title}</h1>
      {post.image && <img src={post.image} alt={post.title} className="post-detail-image" />}
      <p>{post.content}</p>
      <h2>Comments</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Leave a comment..."
          required
        />
        <button type="submit">Post Comment</button>
      </form>
      <div className="comments-list">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <p key={index} className="comment">{comment}</p>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default PostDetailPage;
