import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <img
          src="/images/post1.jpg"
          alt="Contact Us"
          className="contact-header-image"
        />
        <h1>Contact Us</h1>
      </header>
      <div className="contact-form-container">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your message" rows="8"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

