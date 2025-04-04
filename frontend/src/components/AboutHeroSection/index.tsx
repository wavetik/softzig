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
                                <div className="stat-icon">
                                    <i className="fas fa-calendar-alt"></i>
                                </div>
                                <span className="stat-value">35+</span>
                                <span className="stat-label">Years of Excellence</span>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <span className="stat-value">100+</span>
                                <span className="stat-label">Expert Team</span>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <i className="fas fa-globe"></i>
                                </div>
                                <span className="stat-value">2</span>
                                <span className="stat-label">Global Presence</span>
                            </div>
                        </div>
                        <div className="about-hero-locations">
                            <div className="location-item">
                                <span className="location-icon">🇱🇰</span>
                                <div className="location-details">
                                    <span className="location-text">Sri Lanka</span>
                                    {/* <span className="location-role">Development Hub</span> */}
                                </div>
                            </div>
                            <div className="location-item">
                                <span className="location-icon">🇬🇧</span>
                                <div className="location-details">
                                    <span className="location-text">United Kingdom</span>
                                    {/* <span className="location-role">Business Operations</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-hero-image">
                        <img 
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" 
                            alt="SoftZig Team" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection; 