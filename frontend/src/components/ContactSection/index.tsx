import React from 'react';
import './index.css';

const ContactSection: React.FC = () => {
  return (

    <section className="contact">
      <div className="container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">Experience the power of AI-driven development firsthand. Let's discuss how we can transform your development process.</p>

        <div style={{ maxWidth: 720, margin: '2rem auto 0' }}>
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company (optional)</label>
                <input type="text" id="company" name="company" placeholder="Enter your company name" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us whats on your mind" required></textarea>
              </div>
              <button type="submit" className="cta-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
