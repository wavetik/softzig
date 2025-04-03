import React from 'react';
import './index.css';

const ProcessSection: React.FC = () => {
  return (

    <section className="process">
    <div className="container">
      <div className="process-tag">Our Process</div>
      <h2 className="process-title">AI-Piloted Development Workflow</h2>
      <p className="process-subtitle">
        Our revolutionary approach combines human expertise with AI automation to deliver exceptional results.
      </p>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-number">01</div>
          <div className="timeline-content">
            <h3>Requirements Analysis</h3>
            <p>Our AI analyzes your project requirements and generates detailed specifications, identifying potential challenges and optimal solutions before development begins.</p>
          </div>
          <div className="timeline-line"></div>
        </div>

        <div className="timeline-item">
          <div className="timeline-number">02</div>
          <div className="timeline-content">
            <h3>Architecture Design</h3>
            <p>The AI automatically generates and validates optimal system architecture based on your requirements, ensuring scalability, performance, and security from the ground up.</p>
          </div>
          <div className="timeline-line"></div>
        </div>

        <div className="timeline-item">
          <div className="timeline-number">03</div>
          <div className="timeline-content">
            <h3>Rapid Development</h3>
            <p>AI-piloted coding with continuous integration and testing accelerates the development process while maintaining the highest standards of code quality and security.</p>
          </div>
          <div className="timeline-line"></div>
        </div>

        <div className="timeline-item">
          <div className="timeline-number">04</div>
          <div className="timeline-content">
            <h3>Deployment & Support</h3>
            <p>Automated deployment with ongoing AI-powered maintenance ensures your solution remains up-to-date, secure, and optimized throughout its lifecycle.</p>
          </div>
        </div>
      </div>

      <div className="process-cta">
        <a href="#contact" className="cta-button secondary">Learn More About Our Process</a>
      </div>
    </div>
  </section>
  );
};

export default ProcessSection;
