import React from 'react';
import './index.css';

const MissionVisionSection: React.FC = () => {
    return (
        <section className="mission-vision">
            <div className="container">
                <div className="section-header">
                    <h2>Our Mission & Vision</h2>
                    <p className="section-subtitle">
                        Driving innovation and excellence in software development
                    </p>
                </div>
                <div className="mission-vision-grid">
                    <div className="mission-card">
                        <div className="card-icon">
                            <i className="fas fa-bullseye"></i>
                        </div>
                        <h3>Our Mission</h3>
                        <p>
                            To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital era.
                        </p>
                    </div>
                    <div className="vision-card">
                        <div className="card-icon">
                            <i className="fas fa-eye"></i>
                        </div>
                        <h3>Our Vision</h3>
                        <p>
                            To be a global leader in AI-powered software development, setting new standards for innovation and client success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection; 