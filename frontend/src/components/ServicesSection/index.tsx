import React from 'react';
import './index.css';

const ServicesSection: React.FC = () => {
  return (

    <section className="services">
    <div className="container">
      <div className="services-tag">Enterprise Solutions</div>
      <h2 className="services-title">Professional IT Services</h2>
      <p className="services-subtitle">
        Comprehensive technology solutions tailored to meet the demands of modern businesses
      </p>

      <div className="services-grid">
        <div className="service-card main">
          <div className="service-header">
            <h3>Custom Software Development</h3>
            <a href="#contact" className="service-link">Explore Services →</a>
          </div>
          <p>Enterprise-grade software solutions designed to address your specific business challenges and operational requirements.</p>
          <div className="service-list">
            <span>Web Applications</span>
            <span>Mobile Apps</span>
            <span>Desktop Software</span>
            <span>API Development</span>
          </div>
        </div>

        <div className="service-card">
          <div className="service-header">
            <h3>AI & Machine Learning</h3>
            <a href="#contact" className="service-link">Learn More →</a>
          </div>
          <p>Leverage artificial intelligence to automate processes, gain actionable insights, and create competitive advantages.</p>
          <div className="service-list">
            <span>Predictive Analytics</span>
            <span>Natural Language Processing</span>
            <span>Computer Vision</span>
            <span>Recommendation Systems</span>
          </div>
        </div>

        <div className="service-card">
          <div className="service-header">
            <h3>Cloud Infrastructure</h3>
            <a href="#contact" className="service-link">View Services →</a>
          </div>
          <p>Scalable, secure, and reliable cloud infrastructure with automated deployment pipelines for maximum efficiency.</p>
          <div className="service-list">
            <span>AWS/Azure/GCP</span>
            <span>Cloud Migration</span>
            <span>Serverless Architecture</span>
            <span>CI/CD Implementation</span>
          </div>
        </div>

        <div className="service-card">
          <div className="service-header">
            <h3>Power Apps Development</h3>
            <a href="#contact" className="service-link">Learn More →</a>
          </div>
          <p>Build powerful, scalable business applications with Microsoft Power Platform. Create custom solutions that integrate seamlessly with your existing systems.</p>
          <div className="service-list">
            <span>Canvas Apps</span>
            <span>Model-Driven Apps</span>
            <span>Power Automate</span>
            <span>Power BI Integration</span>
          </div>
        </div>

        <div className="service-grid-small">
          <div className="service-card small">
            <div className="service-header">
              <h3>Cybersecurity</h3>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>
            <p>Enterprise-grade security solutions to protect your digital assets and infrastructure.</p>
          </div>

          <div className="service-card small">
            <div className="service-header">
              <h3>Data Analytics</h3>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>
            <p>Transform raw data into actionable business intelligence and strategic insights.</p>
          </div>

          <div className="service-card small">
            <div className="service-header">
              <h3>Digital Transformation</h3>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>
            <p>Strategic technology adoption to modernize operations and drive business growth.</p>
          </div>
        </div>
      </div>

      <div className="services-cta">
        <a href="#contact" className="cta-button secondary">View All Services</a>
      </div>
    </div>
  </section>
  );
};

export default ServicesSection;
