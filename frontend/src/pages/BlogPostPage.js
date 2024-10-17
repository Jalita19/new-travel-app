// src/pages/BlogPostPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/blogpostpage.css'; // Add any specific styles for blog post page

const initialBlogPosts= [
  {
    title: 'Finding Cheap Flights: Tips and Tricks',
    date: 'October 15, 2024',
    content: `
      <p>Finding affordable flights can often feel like a daunting task, but with the right strategies, you can snag great deals. Here are some effective tips to help you find the best prices on flights:</p>
      <ul>
        <li><strong>Use Flexible Date Searches:</strong> Many flight comparison websites allow you to see prices across a range of dates, helping you identify the cheapest days to fly.</li>
        <li><strong>Set Fare Alerts:</strong> Websites like Skyscanner and Google Flights allow you to set alerts for price drops on specific routes.</li>
        <li><strong>Consider Nearby Airports:</strong> Sometimes, flying into or out of a nearby airport can save you a significant amount.</li>
        <li><strong>Book in Advance:</strong> For domestic flights, booking 1-3 months in advance can help you secure better rates.</li>
        <li><strong>Check Budget Airlines:</strong> Don't overlook low-cost carriers; they can often offer lower fares than traditional airlines.</li>
        <li><strong>Be Flexible with Routes:</strong> Consider connecting flights instead of direct flights to lower your costs.</li>
      </ul>
      <p>By employing these strategies, you can significantly reduce your travel costs and enjoy more adventures!</p>
    `,
    slug: 'finding-cheap-flights',
    image: '/images/post1.jpg',
  },
  {
    title: 'Budget Traveling: Exploring the World Without Breaking the Bank',
    date: 'October 14, 2024',
    content: `
      <p>Traveling doesn’t have to be expensive. Here are some essential tips for budget traveling:</p>
      <ul>
        <li><strong>Travel Off-Peak:</strong> Visit popular destinations during off-peak seasons to save money on flights and accommodations.</li>
        <li><strong>Stay in Hostels:</strong> They’re not just for young backpackers anymore; hostels can offer a great way to meet people and save money.</li>
        <li><strong>Utilize Public Transport:</strong> Instead of taxis, use public transportation to explore cities efficiently and affordably.</li>
        <li><strong>Eat Like a Local:</strong> Try street food or local eateries instead of expensive restaurants to save on meals.</li>
        <li><strong>Take Advantage of Free Attractions:</strong> Many cities offer free walking tours, museums on certain days, and public parks to enjoy.</li>
        <li><strong>Plan Your Itinerary:</strong> Having a rough plan can help you avoid last-minute splurges and keep you within budget.</li>
      </ul>
      <p>With some planning and creativity, you can enjoy incredible experiences without overspending!</p>
    `,
    slug: 'budget-traveling',
    image: '/images/post2.jpg',
  },
  {
    title: 'Car Rentals Made Easy: What You Need to Know',
    date: 'October 13, 2024',
    content: `
      <p>Renting a car can enhance your travel experience, but it's important to know how to do it wisely:</p>
      <ul>
        <li><strong>Book in Advance:</strong> Often, booking ahead of time secures better rates.</li>
        <li><strong>Compare Prices:</strong> Use sites like Kayak or Rentalcars.com to find the best deals.</li>
        <li><strong>Understand Insurance:</strong> Know what coverage you have before purchasing additional insurance from rental companies.</li>
        <li><strong>Inspect the Car:</strong> Before leaving the lot, inspect the car for damages to avoid any surprise charges later.</li>
        <li><strong>Know Your Fuel Options:</strong> Understand whether you need to return the car with a full tank or if you’ll be charged for fuel.</li>
        <li><strong>Look for Discounts:</strong> Check if your credit card offers discounts on car rentals or if you can find coupons online.</li>
      </ul>
      <p>These tips will help you have a smooth rental experience and enjoy the freedom to explore at your own pace.</p>
    `,
    slug: 'car-rentals',
    image: '/images/post3.jpg',
  },
  {
    title: 'Travel Hacking: Maximizing Your Travel Experience',
    date: 'October 12, 2024',
    content: `
      <p>Travel hacking can open doors to incredible savings and experiences:</p>
      <ul>
        <li><strong>Use Travel Rewards Cards:</strong> Consider signing up for credit cards that offer travel rewards and bonuses, but make sure to pay off the balance monthly to avoid interest charges.</li>
        <li><strong>Join Loyalty Programs:</strong> Many airlines and hotels offer loyalty programs that can lead to discounts or free stays.</li>
        <li><strong>Be Flexible with Destinations:</strong> Sometimes, traveling to lesser-known destinations can yield better rewards and savings.</li>
        <li><strong>Look for Mistake Fares:</strong> Occasionally, airlines list flights at lower prices due to human error; be ready to book quickly!</li>
        <li><strong>Stack Deals:</strong> Combine rewards points, discounts, and credit card offers to maximize your savings.</li>
        <li><strong>Travel During Sales:</strong> Watch for seasonal sales and promotions that can help you book flights and accommodations at lower prices.</li>
      </ul>
      <p>With a little strategy and savvy, you can make the most of your travel budget and experience more than you thought possible!</p>
    `,
    slug: 'travel-hacking',
    image: '/images/post4.jpg', // Add your image paths
  },
  {
    title: 'Packing Light: Travel Smart and Efficient',
    date: 'October 11, 2024',
    content: `
      <p>Packing light is an essential skill for any traveler. Here’s how to do it:</p>
      <ul>
        <li><strong>Choose the Right Bag:</strong> Opt for a versatile carry-on or backpack that fits your needs and meets airline regulations.</li>
        <li><strong>Pack Versatile Clothing:</strong> Select items that can be mixed and matched for different outfits. Stick to a color palette to maximize combinations.</li>
        <li><strong>Limit Shoes:</strong> Shoes can take up a lot of space; try to limit yourself to two pairs that suit various occasions.</li>
        <li><strong>Use Packing Cubes:</strong> These can help organize your bag and maximize space. Roll clothes instead of folding them to save even more space.</li>
        <li><strong>Carry Essentials:</strong> Always pack a small bag with essentials such as medications, travel documents, and electronics.</li>
        <li><strong>Leave Room for Souvenirs:</strong> If you plan to shop, leave some space in your bag to accommodate new items.</li>
      </ul>
      <p>Traveling light not only makes your journey much more enjoyable, but it also saves you time and hassle at airports!</p>
    `,
    slug: 'packing-light',
    image: '/images/post5.jpg', // Add your image paths
  },
];
const BlogPostPage = () => {
  const { slug } = useParams(); // Get the post slug from the URL
  const post = initialBlogPosts.find((post) => post.slug === slug);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  if (!post) {
    return <h1>Blog post not found</h1>;
  }

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(''); // Clear the input field
    }
  };

  return (
    <div className="blog-post-container">
      <img src={post.image} alt="Blog Post" className="blog-header-image" />
      <h1>{post.title}</h1>
      <p className="post-date"><small>{post.date}</small></p>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <a href="/blog" className="back-link">Back to Blog</a>

      {/* Comments Section */}
      <h2>Comments</h2>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Leave a comment..."
          required
        />
        <button type="submit">Submit</button>
      </form>

      <div className="comments-list">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>{comment}</p>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to leave one!</p>
        )}
      </div>

      {/* Displaying all blog posts */}
      <h2>Other Posts</h2>
      <div className="other-posts">
        {initialBlogPosts.map((p) => (
          <div key={p.slug} className="post-preview">
            <h3>{p.title}</h3>
            <p><small>{p.date}</small></p>
            <a href={`/blog/${p.slug}`}>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostPage;