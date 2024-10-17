// src/pages/PostPage.js
import React, { useState } from 'react';
import '../styles/PostPage.css';
import { useNavigate } from 'react-router-dom';

const PostPage = () => {
  const navigate = useNavigate();
  
  // Initialize generic posts
  const [previousPosts, setPreviousPosts] = useState([
    {
      title: 'Exploring the Grand Canyon',
      content: 'The Grand Canyon is a natural wonder that offers breathtaking views and numerous hiking trails.',
      date: '2024-10-01',
      image: 'https://example.com/grand-canyon.jpg', // Replace with your image URL
      slug: 'exploring-the-grand-canyon',
    },
    {
      title: 'A Journey Through Paris',
      content: 'Paris, known as the City of Light, is famous for its art, fashion, and cuisine. A must-visit!',
      date: '2024-10-02',
      image: 'https://example.com/paris.jpg', // Replace with your image URL
      slug: 'a-journey-through-paris',
    },
    {
      title: 'Safari Adventure in Kenya',
      content: 'Experience the wild in Kenya. The diverse wildlife and stunning landscapes are unforgettable.',
      date: '2024-10-03',
      image: 'https://example.com/kenya-safari.jpg', // Replace with your image URL
      slug: 'safari-adventure-in-kenya',
    },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      ...formData,
      date: new Date().toLocaleDateString(),
      slug: formData.title.toLowerCase().replace(/ /g, '-'),
    };
    setPreviousPosts([...previousPosts, newPost]);
    setFormData({ title: '', content: '', image: null });
  };

  const handleReadMore = (post) => {
    navigate('/post-detail', {
      state: { post },
    });
  };

  return (
    <div className="post-page-container">
      <h2>Previous Posts</h2>
      <div className="previous-posts">
        {previousPosts.map((post, index) => (
          <div className="post-item" key={index} onClick={() => handleReadMore(post)}>
            {post.image && <img src={post.image} alt={post.title} />}
            <h3 className="post-title">{post.title}</h3>
            <small className="post-date">{post.date}</small>
            <p className="post-content">{post.content.substring(0, 150)}...</p>
            <button className="read-more-button">Read more</button>
          </div>
        ))}
      </div>

      <h2>Share Your Experience</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="content"
          placeholder="Write about your experience..."
          value={formData.content}
          onChange={handleInputChange}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default PostPage;


