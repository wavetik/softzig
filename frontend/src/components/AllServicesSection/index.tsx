import React from 'react';
import './index.css';

const AllServicesSection: React.FC = () => {
  return (
    <section className="all-services">
      <div className="container">
        <div className="services-header">
          <div className="services-tag">Our Services</div>
          <h2 className="services-title">Complete IT Solutions Portfolio</h2>
          <p className="services-subtitle">
            Explore our comprehensive range of technology services designed to meet all your business needs
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
              <a href="/services/custom-software" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
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
              <a href="/services/ai-ml" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
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
              <a href="/services/cloud" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
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
              <a href="/services/power-apps" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
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
              <a href="/services/cybersecurity" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
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
              <a href="/services/data-analytics" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-sync"></i>
            </div>
            <div className="service-content">
              <h3>Digital Transformation</h3>
              <p>Guide your organization through the digital transformation journey with our expertise.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Process Automation</li>
                <li><i className="fas fa-check"></i> Digital Strategy</li>
                <li><i className="fas fa-check"></i> Change Management</li>
                <li><i className="fas fa-check"></i> Technology Integration</li>
              </ul>
              <a href="/services/digital-transformation" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="service-content">
              <h3>Mobile App Development</h3>
              <p>Create engaging and powerful mobile applications for iOS and Android platforms.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Native Apps</li>
                <li><i className="fas fa-check"></i> Cross-Platform</li>
                <li><i className="fas fa-check"></i> UI/UX Design</li>
                <li><i className="fas fa-check"></i> App Maintenance</li>
              </ul>
              <a href="/services/mobile-apps" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-database"></i>
            </div>
            <div className="service-content">
              <h3>Database Solutions</h3>
              <p>Comprehensive database management and optimization services.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Database Design</li>
                <li><i className="fas fa-check"></i> Performance Tuning</li>
                <li><i className="fas fa-check"></i> Data Migration</li>
                <li><i className="fas fa-check"></i> Backup & Recovery</li>
              </ul>
              <a href="/services/database" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-network-wired"></i>
            </div>
            <div className="service-content">
              <h3>Network Solutions</h3>
              <p>Design and implement robust network infrastructure for your business.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Network Design</li>
                <li><i className="fas fa-check"></i> Security Implementation</li>
                <li><i className="fas fa-check"></i> Performance Monitoring</li>
                <li><i className="fas fa-check"></i> Troubleshooting</li>
              </ul>
              <a href="/services/network" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-robot"></i>
            </div>
            <div className="service-content">
              <h3>RPA Solutions</h3>
              <p>Automate repetitive tasks and streamline business processes with RPA.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Process Automation</li>
                <li><i className="fas fa-check"></i> Workflow Optimization</li>
                <li><i className="fas fa-check"></i> Bot Development</li>
                <li><i className="fas fa-check"></i> Integration Services</li>
              </ul>
              <a href="/services/rpa" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-headset"></i>
            </div>
            <div className="service-content">
              <h3>IT Support Services</h3>
              <p>Comprehensive IT support and maintenance services for your business.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Help Desk Support</li>
                <li><i className="fas fa-check"></i> System Maintenance</li>
                <li><i className="fas fa-check"></i> Hardware Support</li>
                <li><i className="fas fa-check"></i> Software Support</li>
              </ul>
              <a href="/services/it-support" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServicesSection; 