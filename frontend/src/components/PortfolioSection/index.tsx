import React from 'react';
import './index.css';

const PortfolioSection: React.FC = () => {
  return (

  <section className="work">
  <div className="container">
    <div className="work-tag">Our Work</div>
    <h2 className="work-title">Featured Projects</h2>
    <p className="work-subtitle">
      Discover how we've helped businesses transform their operations with our AI-powered solutions.
    </p>

    <div className="projects-grid">
      <div className="project-card">
        <div className="project-category">AI & Machine Learning</div>
        <h3>AI-Driven E-commerce Platform</h3>
        <p>Revolutionized online shopping with personalized recommendations and automated inventory management.</p>
        
        <div className="project-stats">
          <div className="stat-item">
            <div className="stat-value">150%</div>
            <div className="stat-label">Sales Increase</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">85%</div>
            <div className="stat-label">Customer Retention</div>
          </div>
        </div>
        
        <a href="#case-study" className="project-link">View Case Study →</a>
      </div>

      <div className="project-card">
        <div className="project-category">Industrial IoT</div>
        <h3>Smart Manufacturing System</h3>
        <p>Implemented IoT sensors and predictive maintenance to optimize production efficiency.</p>
        
        <div className="project-stats">
          <div className="stat-item">
            <div className="stat-value">75%</div>
            <div className="stat-label">Downtime Reduction</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">40%</div>
            <div className="stat-label">Efficiency Gain</div>
          </div>
        </div>
        
        <a href="#case-study" className="project-link">View Case Study →</a>
      </div>

      <div className="project-card">
        <div className="project-category">Data Analytics</div>
        <h3>FinTech Analytics Platform</h3>
        <p>Real-time financial data analysis and fraud detection system for banking institutions.</p>
        
        <div className="project-stats">
          <div className="stat-item">
            <div className="stat-value">99.9%</div>
            <div className="stat-label">Fraud Prevention</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">-60%</div>
            <div className="stat-label">Processing Time</div>
          </div>
        </div>
        
        <a href="#case-study" className="project-link">View Case Study →</a>
      </div>
    </div>

    {/* <div className="work-cta">
      <a href="#projects" className="cta-button secondary">View All Projects</a>
    </div> */}
  </div>
</section>
  );
};

export default PortfolioSection;
