import React from 'react';
import './index.css';

const FeaturesSection: React.FC = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="features-tag">Revolutionary Approach</div>
                <h2 className="features-title">Redefining Software Development</h2>
                <p className="features-subtitle">
                   Leveraging the power of AI to streamline and optimize every phase of the development lifecycle, from ideation to deployment
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Rapid Development</h3>
                        <p>Reduce development time by up to 80% with our AI-piloted automation tools and pre-built components.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">✅</div>
                        <h3>Customer-Centric Approach</h3>
                        <p>Solutions designed with clients in mind,ensuring personalized success at every step.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🚀</div>
                        <h3>Innovation-Driven Mindset</h3>
                        <p>Continuously reimagining software development with the latest advancements in AI and technology.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;