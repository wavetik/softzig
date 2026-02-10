import React from 'react';
import './index.css';

const FeaturesSection: React.FC = () => {
    return (
        <section className="features features--ai">
            <div className="container">
                <div className="features-tag">AI-Powered Advantage</div>
                <h2 className="features-title">Next-Gen Development<br/>Powered by AI</h2>
                <p className="features-subtitle">
                  Transforming the development landscape with cutting-edge AI technologies that revolutionize how software is built
                </p>

                <div className="features-grid features-grid--four">
                    <div className="feature-card">
                        <div className="feature-icon-box">🔒</div>
                        <h3>Highly Secured</h3>
                        <p>AI-assisted security audits and intelligent threat prevention implemented at every layer of your application stack.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-box">⏱️</div>
                        <h3>70% Time Reduction</h3>
                        <p>Reduce development time by up to 70% with our AI-piloted automation tools and pre-built components.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-box">💰</div>
                        <h3>40% Cost Savings</h3>
                        <p>AI-optimized resource allocation and intelligent workflow automation translate to significant cost reductions.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-box">📊</div>
                        <h3>Highly Organized</h3>
                        <p>AI-driven code structuring and automated documentation ensure maintainability and clear organization.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;