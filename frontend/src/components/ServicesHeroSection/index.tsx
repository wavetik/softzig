import React from 'react';
import './index.css';

const ServicesHeroSection: React.FC = () => {
    return (
        <section className="services-hero">
            <div className="services-hero-content">
                <div className="services-hero-text">
                    <h1>Our Services</h1>
                    <p>We offer comprehensive software solutions tailored to meet your business needs. From custom development to digital transformation, we're here to help you succeed in the digital age.</p>
                    {/* <div className="services-hero-stats">
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
                    </div> */}
                </div>
                <div className="services-hero-image">
                    <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                        alt="Our Services" 
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesHeroSection; 