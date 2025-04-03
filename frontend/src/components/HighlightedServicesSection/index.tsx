import React from 'react';
import './index.css';

const HighlightedServicesSection: React.FC = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-header">
          <div className="services-tag">Our Expertise</div>
          <h2 className="services-title">Comprehensive IT Solutions</h2>
          <p className="services-subtitle">
            We deliver cutting-edge technology solutions that drive business growth and innovation
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="service-content">
              <h3>Custom Software Development</h3>
              <p>Enterprise-grade software solutions designed to address your specific business challenges and operational requirements.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Web Applications</li>
                <li><i className="fas fa-check"></i> Mobile Apps</li>
                <li><i className="fas fa-check"></i> Desktop Software</li>
                <li><i className="fas fa-check"></i> API Development</li>
              </ul>
              <a href="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-brain"></i>
            </div>
            <div className="service-content">
              <h3>AI & Machine Learning</h3>
              <p>Leverage artificial intelligence to automate processes, gain actionable insights, and create competitive advantages.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Predictive Analytics</li>
                <li><i className="fas fa-check"></i> Natural Language Processing</li>
                <li><i className="fas fa-check"></i> Computer Vision</li>
                <li><i className="fas fa-check"></i> Recommendation Systems</li>
              </ul>
              <a href="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <div className="service-content">
              <h3>Cloud Infrastructure</h3>
              <p>Scalable, secure, and reliable cloud infrastructure with automated deployment pipelines for maximum efficiency.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> AWS/Azure/GCP</li>
                <li><i className="fas fa-check"></i> Cloud Migration</li>
                <li><i className="fas fa-check"></i> Serverless Architecture</li>
                <li><i className="fas fa-check"></i> CI/CD Implementation</li>
              </ul>
              <a href="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-power-off"></i>
            </div>
            <div className="service-content">
              <h3>Power Apps Development</h3>
              <p>Build powerful, scalable business applications with Microsoft Power Platform. Create custom solutions that integrate seamlessly with your existing systems.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Canvas Apps</li>
                <li><i className="fas fa-check"></i> Model-Driven Apps</li>
                <li><i className="fas fa-check"></i> Power Automate</li>
                <li><i className="fas fa-check"></i> Power BI Integration</li>
              </ul>
              <a href="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="service-content">
              <h3>Cybersecurity</h3>
              <p>Enterprise-grade security solutions to protect your digital assets and infrastructure.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Security Audits</li>
                <li><i className="fas fa-check"></i> Threat Detection</li>
                <li><i className="fas fa-check"></i> Compliance Management</li>
                <li><i className="fas fa-check"></i> Incident Response</li>
              </ul>
              <a href="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="service-content">
              <h3>Data Analytics</h3>
              <p>Transform raw data into actionable business intelligence and strategic insights.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Business Intelligence</li>
                <li><i className="fas fa-check"></i> Data Visualization</li>
                <li><i className="fas fa-check"></i> Reporting Dashboards</li>
                <li><i className="fas fa-check"></i> Data Warehousing</li>
              </ul>
              <a href="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div className="services-cta">
          <a href="/services" className="cta-button">View All Services</a>
        </div>
      </div>
    </section>
  );
};

export default HighlightedServicesSection; 