import React from 'react';
import './index.css';

const ContactHeroSection: React.FC = () => {
    return (
        <section className="contact-hero">
            <div className="contact-hero-content">
                <div className="contact-hero-text">
                    <h1>Get in Touch</h1>
                    <p>We're here to help and answer any questions you might have. Our team is ready to assist you with your software development needs and provide the best solutions for your business.</p>
                    <div className="contact-hero-stats">
                        <div className="stat-item">
                            <h3>24/7</h3>
                            <p>Support Available</p>
                        </div>
                        <div className="stat-item">
                            <h3>1hr</h3>
                            <p>Response Time</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Satisfaction</p>
                        </div>
                    </div>
                </div>
                <div className="contact-hero-image">
                    <img 
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" 
                        alt="Contact Us" 
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactHeroSection; 