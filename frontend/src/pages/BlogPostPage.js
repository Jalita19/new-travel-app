// src/pages/BlogPostPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/blogpostpage.css'; // Add any specific styles for blog post page

const blogPosts = [
  {
    title: 'Finding Cheap Flights: Tips and Tricks',
    date: 'October 15, 2024',
    content: `
      Finding affordable flights can often feel like a daunting task, but with the right strategies, you can snag great deals. 
      Here are some effective tips to help you find the best prices on flights:
      <ul>
        <li><strong>Use Flexible Date Searches:</strong> Many flight comparison websites allow you to see prices across a range of dates, helping you identify the cheapest days to fly.</li>
        <li><strong>Set Fare Alerts:</strong> Websites like Skyscanner and Google Flights allow you to set alerts for price drops on specific routes.</li>
        <li><strong>Consider Nearby Airports:</strong> Sometimes, flying into or out of a nearby airport can save you a significant amount.</li>
        <li><strong>Book in Advance:</strong> For domestic flights, booking 1-3 months in advance can help you secure better rates.</li>
      </ul>
      Happy travels!
    `,
    slug: 'finding-cheap-flights',
  },
  {
    title: 'Budget Traveling: Exploring the World Without Breaking the Bank',
    date: 'October 14, 2024',
    content: `
      Traveling doesn’t have to be expensive. Here are some essential tips for budget traveling:
      <ul>
        <li><strong>Travel Off-Peak:</strong> Visit popular destinations during off-peak seasons to save money on flights and accommodations.</li>
        <li><strong>Stay in Hostels:</strong> They’re not just for young backpackers anymore; hostels can offer a great way to meet people and save money.</li>
        <li><strong>Utilize Public Transport:</strong> Instead of taxis, use public transportation to explore cities efficiently and affordably.</li>
        <li><strong>Eat Like a Local:</strong> Try street food or local eateries instead of expensive restaurants to save on meals.</li>
      </ul>
      With some planning, you can enjoy incredible experiences without overspending!
    `,
    slug: 'budget-traveling',
  },
  {
    title: 'Car Rentals Made Easy: What You Need to Know',
    date: 'October 13, 2024',
    content: `
      Renting a car can enhance your travel experience, but it's important to know how to do it wisely:
      <ul>
        <li><strong>Book in Advance:</strong> Often, booking ahead of time secures better rates.</li>
        <li><strong>Compare Prices:</strong> Use sites like Kayak or Rentalcars.com to find the best deals.</li>
        <li><strong>Understand Insurance:</strong> Know what coverage you have before purchasing additional insurance from rental companies.</li>
        <li><strong>Inspect the Car:</strong> Before leaving the lot, inspect the car for damages to avoid any surprise charges later.</li>
      </ul>
      These tips will help you have a smooth rental experience.
    `,
    slug: 'car-rentals',
  },
  {
    title: 'Travel Hacking: Maximizing Your Travel Experience',
    date: 'October 12, 2024',
    content: `
      Travel hacking can open doors to incredible savings and experiences:
      <ul>
        <li><strong>Use Travel Rewards Cards:</strong> Consider signing up for credit cards that offer travel rewards and bonuses.</li>
        <li><strong>Join Loyalty Programs:</strong> Many airlines and hotels offer loyalty programs that can lead to discounts or free stays.</li>
        <li><strong>Be Flexible with Destinations:</strong> Sometimes, traveling to lesser-known destinations can yield better rewards and savings.</li>
        <li><strong>Look for Mistake Fares:</strong> Occasionally, airlines list flights at lower prices due to human error; be ready to book quickly!</li>
      </ul>
      With a little strategy, you can make the most of your travel budget.
    `,
    slug: 'travel-hacking',
  },
  {
    title: 'Packing Light: Travel Smart and Efficient',
    date: 'October 11, 2024',
    content: `
      Packing light is an essential skill for any traveler. Here’s how to do it:
      <ul>
        <li><strong>Choose the Right Bag:</strong> Opt for a versatile carry-on or backpack that fits your needs.</li>
        <li><strong>Pack Versatile Clothing:</strong> Select items that can be mixed and matched for different outfits.</li>
        <li><strong>Limit Shoes:</strong> Shoes can take up a lot of space; try to limit yourself to two pairs.</li>
        <li><strong>Use Packing Cubes:</strong> These can help organize your bag and maximize space.</li>
      </ul>
      Traveling light makes your journey much more enjoyable!
    `,
    slug: 'packing-light',
  },
];

const BlogPostPage = () => {
  const { slug } = useParams(); // Get the post slug from the URL
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <h1>Blog post not found</h1>;
  }

  return (
    <div className="blog-post-container">
      <h1>{post.title}</h1>
      <p className="post-date"><small>{post.date}</small></p>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <a href="/blog" className="back-link">Back to Blog</a>
    </div>
  );
};

export default BlogPostPage;
