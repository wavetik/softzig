import React from 'react';
import './index.css';

const ValuesSection: React.FC = () => {
    return (
        <section className="values">
            <div className="container">
                <div className="section-header">
                    <h2>Our Core Values</h2>
                    <p className="section-subtitle">
                        The principles that guide everything we do at SoftZig
                    </p>
                </div>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">
                            <i className="fas fa-lightbulb"></i>
                        </div>
                        <h3>Innovation</h3>
                        <p>
                            We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
                        </p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <i className="fas fa-handshake"></i>
                        </div>
                        <h3>Integrity</h3>
                        <p>
                            We maintain the highest standards of honesty and transparency in all our dealings.
                        </p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3>Collaboration</h3>
                        <p>
                            We believe in the power of teamwork and working closely with our clients.
                        </p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <h3>Excellence</h3>
                        <p>
                            We strive for excellence in every project, ensuring the highest quality deliverables.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection; 