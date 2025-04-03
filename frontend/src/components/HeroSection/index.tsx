import React from 'react';
import hero from '../../assets/hero.webp';
import './index.css';

const HeroSection: React.FC = () => {
  return (
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>
              AI-Powered Development
              <span className="highlight">Future of Development</span>
            </h1>
            <p>
              Accelerate your software development with our cutting-edge AI technology. 
              Build secure, tested, and optimized solutions ready for immediate deployment.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="cta-button">Schedule a Demo</a>
              <div className="stat">
                <span>100% Production Ready</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src={hero} 
                 alt="AI Development" />
          </div>
        </div>
      </section>
  );
};

export default HeroSection;