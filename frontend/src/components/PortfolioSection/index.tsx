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
        <div className="project-category">Voting Technology</div>
        <h3>zigVote</h3>
        <p>SaaS-based voting platform enabling organizations to create and conduct secure online elections with encrypted ballot tracking.</p>

        <a href="https://zigvote.com/" className="project-link" target="_blank" rel="noopener noreferrer">View Case Study →</a>
      </div>

      <div className="project-card">
        <div className="project-category">Education Platform</div>
        <h3>Learn Sikhi Online</h3>
        <p>A comprehensive learning platform for Sikhi education with online classes, resources, and community features.</p>
        <a href="https://www.learnsikhionline.com/" className="project-link" target="_blank" rel="noopener noreferrer">View Case Study →</a>
      </div>

      <div className="project-card">
        <div className="project-category">Educational Institution</div>
        <h3>Guru Nanak Public School</h3>
        <p>Comprehensive school website with admissions portal, parent login system, and educational resources.</p>
        <a href="https://gnps2bbsr.com/" className="project-link" target="_blank" rel="noopener noreferrer">View Case Study →</a>
      </div>
    </div>

    <div className="work-cta">
      <a href="/portfolio" className="cta-button secondary">Explore More Projects</a>
    </div>
  </div>
</section>
  );
};

export default PortfolioSection;
