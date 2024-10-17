import React, { useState } from 'react';
import './HomePage.css';

const Homepage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        // Simple authentication logic (replace with real auth)
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <div className="Homepage">
            <Hero />
            <main>
                {isAuthenticated ? (
                    <AuthenticatedContent />
                ) : (
                    <div className="auth-buttons">
                        <h2>Please log in to view content</h2>
                        <button onClick={handleLogin}>Log In</button>
                    </div>
                )}
            </main>
            <Footer onLogout={handleLogout} isAuthenticated={isAuthenticated} />
        </div>
    );
};

const Hero = () => (
    <section className="hero">
        <h1>Join Our Community</h1>
        <p>"Share stories, discover tips, and explore the world through travel."</p>
    </section>
);

const AuthenticatedContent = () => (
    <div className="authenticated-content">
        <FeaturedStories />
        <UserReviews />
        <TravelTips />
    </div>
);

const FeaturedStories = () => (
    <section className="featured-stories">
        <h2>Featured Stories</h2>
        <div className="horizontal-row">
            <StoryItem title="Exploring the Alps" description="Breathtaking views and adventure." imgSrc="/post1.jpg" />
            <StoryItem title="Beach Getaway" description="Sun-soaked shores await you." imgSrc="/post2.jpg" />
            <StoryItem title="City Adventures" description="Experience vibrant city life." imgSrc="/post3.jpg" />
        </div>
    </section>
);

const StoryItem = ({ title, description, imgSrc }) => (
    <div className="story-item">
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const UserReviews = () => (
    <section className="user-reviews">
        <h2>User Reviews</h2>
        <div className="horizontal-row">
            <ReviewItem name="Jane Doe" rating="⭐⭐⭐⭐⭐" comment="Travel Tales helped me discover hidden gems!" imgSrc="/user1.jpg" />
            <ReviewItem name="John Smith" rating="⭐⭐⭐⭐" comment="A great community for travel enthusiasts." imgSrc="/user2.jpg" />
        </div>
    </section>
);

const ReviewItem = ({ name, rating, comment, imgSrc }) => (
    <div className="review-item">
        <img src={imgSrc} alt={name} />
        <h3>{name}</h3>
        <p>{rating}</p>
        <p>"{comment}"</p>
    </div>
);

const TravelTips = () => (
    <section className="tips">
        <h2>Travel Tips</h2>
        <div className="horizontal-row">
            <TipCard title="Packing Essentials" description="What to bring for a hassle-free trip." imgSrc="/tip1.jpg" />
            <TipCard title="Budget Travel" description="How to travel without breaking the bank." imgSrc="/tip2.jpg" />
        </div>
    </section>
);

const TipCard = ({ title, description, imgSrc }) => (
    <div className="tip-card">
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const Footer = ({ onLogout, isAuthenticated }) => (
    <footer>
        <div>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>
            <div className="social-media">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
            {isAuthenticated && <button onClick={onLogout}>Log Out</button>}
        </div>
    </footer>
);

export default Homepage;
