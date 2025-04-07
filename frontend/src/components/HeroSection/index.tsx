import React from 'react';
import hero from '../../assets/hero.webp';
import './index.css';

const HeroSection: React.FC = () => {
  return (
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>
            Where AI Meets Creativity and
            Technology
              <span className="highlight">Fusing Innovation and Expertise</span>
            </h1>
            <p>
               Revolutionize development with our seamless blend of AI power and creative technology.
               Build scalable, secure solutions ready to shape tomorrow.
            </p>
            {/* <div className="hero-actions">
              <a href="#contact" className="cta-button">Schedule a Demo</a>
              <div className="stat">
                <span>100% Production Ready</span>
              </div>
            </div> */}
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