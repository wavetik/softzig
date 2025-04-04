import React from 'react';
import './index.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiPython, SiTensorflow } from 'react-icons/si';

const TechStackSection: React.FC = () => {
  return (
    <section className="tech-stack">
      <div className="container">
        <div className="tech-stack-tag">Enterprise Technology Stack</div>
        <h2 className="tech-stack-title">Powered by Enterprise-Grade Technology</h2>
        <p className="tech-stack-subtitle">
          Our platform leverages industry-leading technologies and frameworks to deliver scalable, secure, and innovative solutions.
        </p>

        <div className="tech-grid">
          <div className="tech-main-grid">
            <div className="tech-card">
              <div className="tech-header">
                <div className="tech-badge">Enterprise-Ready</div>
                <div className="tech-logo">
                  <FaReact className="tech-icon react-icon" />
                </div>
                <h3>React</h3>
                <p className="tech-role">Enterprise UI Development</p>
              </div>
              <div className="tech-content">
                <p className="tech-users">Used by Meta, Airbnb, Netflix</p>
                <ul className="tech-features">
                  <li>Component Architecture</li>
                  <li>State Management</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-header">
                <div className="tech-badge">Enterprise-Ready</div>
                <div className="tech-logo">
                  <FaNodeJs className="tech-icon node-icon" />
                </div>
                <h3>Node.js</h3>
                <p className="tech-role">Server-Side Architecture</p>
              </div>
              <div className="tech-content">
                <p className="tech-users">Powers LinkedIn, NASA, PayPal</p>
                <ul className="tech-features">
                  <li>Microservices</li>
                  <li>Real-time Processing</li>
                  <li>Enterprise APIs</li>
                </ul>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-header">
                <div className="tech-badge">Enterprise-Ready</div>
                <div className="tech-logo">
                  <SiPython className="tech-icon python-icon" />
                </div>
                <h3>Python</h3>
                <p className="tech-role">AI & Data Engineering</p>
              </div>
              <div className="tech-content">
                <p className="tech-users">Trusted by Google, Intel, NASA</p>
                <ul className="tech-features">
                  <li>Machine Learning</li>
                  <li>Data Processing</li>
                  <li>Automation</li>
                </ul>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-header">
                <div className="tech-badge">Enterprise-Ready</div>
                <div className="tech-logo">
                  <SiTensorflow className="tech-icon tensorflow-icon" />
                </div>
                <h3>TensorFlow</h3>
                <p className="tech-role">Enterprise AI Framework</p>
              </div>
              <div className="tech-content">
                <p className="tech-users">Drives AI at Google, Intel, AMD</p>
                <ul className="tech-features">
                  <li>Deep Learning</li>
                  <li>Neural Networks</li>
                  <li>Model Deployment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tech-infrastructure">
            <h3>Enterprise Infrastructure</h3>
            <div className="infra-grid">
              <div className="infra-item">
                <span className="infra-name">AWS</span>
                <span className="infra-role">Cloud Infrastructure</span>
              </div>
              <div className="infra-item">
                <span className="infra-name">Docker</span>
                <span className="infra-role">Containerization</span>
              </div>
              <div className="infra-item">
                <span className="infra-name">Kubernetes</span>
                <span className="infra-role">Orchestration</span>
              </div>
              <div className="infra-item">
                <span className="infra-name">GraphQL</span>
                <span className="infra-role">API Architecture</span>
              </div>
              <div className="infra-item">
                <span className="infra-name">MongoDB</span>
                <span className="infra-role">Database</span>
              </div>
              <div className="infra-item">
                <span className="infra-name">Redis</span>
                <span className="infra-role">Caching Layer</span>
              </div>
            </div>

            <div className="infra-divider"></div>

            <div className="infra-certifications">
              <h4>Security & Compliance</h4>
              <div className="cert-grid">
                <div className="cert-item">SOC 2 Certified</div>
                <div className="cert-item">GDPR Compliant</div>
                <div className="cert-item">ISO 27001</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
