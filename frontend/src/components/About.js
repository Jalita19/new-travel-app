import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our travel blog! We are passionate travelers who love exploring the world and sharing our adventures with you. Our goal is to inspire you to embark on your own journeys and discover the beauty of different cultures, cuisines, and landscapes.
      </p>
      <div className="image-gallery">
        <img src="/images/post1.jpg" alt="Traveling in the mountains" />
        <img src="/images/post2.jpg" alt="Beach vacation" />
        <img src="/images/post3.jpg" alt="Cultural exploration" />
        <img src="/images/post4.jpg" alt="Food adventure" />
        <img src="/images/post7.jpg" alt="Cityscape" />
        <img src="/images/post6.jpg" alt="Nature trip" />
        {/* Add more images as needed */}
      </div>
      <p>
        Follow our journey, get inspired, and start planning your own adventures!
      </p>
      <p>
        Our mission is to help you travel smarter and explore the world on a budget. We share tips on finding cheap flights, budget accommodations, and hidden gems that make your travel experience unforgettable.
      </p>
      <h2>Connect with Us</h2>
      <p>
        We love connecting with fellow travelers! Follow us on our social media channels and share your travel stories with us. We believe that every traveler has a unique story to tell, and we want to hear yours!
      </p>
      <div className="social-media">
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook</a>
        {/* Add more social media links as needed */}
      </div>
    </div>
  );
};

export default About;
