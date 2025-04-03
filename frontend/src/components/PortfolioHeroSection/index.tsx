import React from 'react';
import './index.css';

const PortfolioHeroSection: React.FC = () => {
    return (
        <section className="contact-hero">
            <div className="contact-hero-content">
                <div className="contact-hero-text">
                    <h1>Our Portfolio</h1>
                    <p>Explore our diverse range of successful projects and see how we've helped businesses transform their digital presence.</p>
                    <div className="contact-hero-stats">
                        <div className="stat-item">
                            <h3>100+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <h3>50+</h3>
                            <p>Happy Clients</p>
                        </div>
                        <div className="stat-item">
                            <h3>10+</h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
                <div className="contact-hero-image">
                    <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                        alt="Our Portfolio" 
                    />
                </div>
            </div>
        </section>
    );
};

export default PortfolioHeroSection; 