import React from 'react';
import './index.css';

const ContactSection: React.FC = () => {
  return (

    <section className="contact">
    <div className="container">
      {/* <div className="contact-tag">Get Started</div>
      <h2 className="contact-title">Schedule Your Demo</h2>
      <p className="contact-subtitle">
        Experience the power of AI-driven development firsthand. Let's discuss how we can transform your development process.
      </p> */}

      <div className="contact-grid">
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input type="email" id="email" placeholder="Enter your work email" required />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" placeholder="Enter your company name" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea id="message" placeholder="Tell us about your project requirements" required></textarea>
            </div>
            <button type="submit" className="cta-button">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="contact-card">
            <h3>Ready to Transform Your Development?</h3>
            <p>Join leading companies that have accelerated their development process with our AI-powered platform.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <span>Email us at</span>
                  <a href="mailto:contact@softzig.com">contact@softzig.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <span>Call us at</span>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <span>Visit us at</span>
                  <a href="#">123 Tech Street, Silicon Valley, CA 94025</a>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <p>Not ready for a demo? Let's have a brief conversation about your needs.</p>
              <a href="tel:+1234567890" className="cta-button secondary">Schedule a Call</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ContactSection;
