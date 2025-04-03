import React from 'react';
import './index.css';

const FeaturesSection: React.FC = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="features-tag">Revolutionary Approach</div>
                <h2 className="features-title">Redefining Software Development</h2>
                <p className="features-subtitle">
                    Our AI-powered platform automates and accelerates every phase of the development lifecycle, from ideation to deployment.
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Rapid Development</h3>
                        <p>Reduce development time by up to 80% with our AI-piloted automation tools and pre-built components.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">✅</div>
                        <h3>100% Production Ready</h3>
                        <p>Every solution we deliver is thoroughly tested, secure, and ready for immediate deployment to production.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🚀</div>
                        <h3>Cutting-Edge Technology</h3>
                        <p>Stay ahead with solutions built using the latest frameworks, libraries, and development practices.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;