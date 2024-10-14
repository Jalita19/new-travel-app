// / src/pages/BlogPostPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Exploring the Mountains',
    date: 'October 13, 2024',
    content: 'Full content of the blog post goes here...',
    slug: 'exploring-the-mountains',
  },
  {
    title: 'Beach Paradise in Bali',
    date: 'September 29, 2024',
    content: 'Full content of the blog post goes here...',
    slug: 'beach-paradise-in-bali',
  },
  // Add more blog posts
];

const BlogPostPage = () => {
  const { slug } = useParams(); // Get the post slug from the URL
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <h1>Blog post not found</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p><small>{post.date}</small></p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage;