import React from 'react';
import './index.css';

const AboutHeroSection: React.FC = () => {
    return (
        <section className="about-hero">
            <div className="container">
                <div className="about-hero-content">
                    <div className="about-hero-text">
                        <h1>About SoftZig</h1>
                        <p className="about-hero-subtitle">
                            Empowering businesses through innovative technology solutions and AI-driven development.
                        </p>
                        <div className="about-hero-stats">
                            <div className="stat-item">
                                <span className="stat-value">10+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">500+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">100+</span>
                                <span className="stat-label">Team Members</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-hero-image">
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                            alt="SoftZig Team" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection; 