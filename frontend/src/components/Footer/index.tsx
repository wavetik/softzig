import React from 'react';
import './index.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <a href="/" className="footer-logo">
              <span className="logo-icon">S</span>
              <span className="logo-text">SoftZig</span>
            </a>
            <p className="footer-description">
              Empowering businesses with cutting-edge AI technology and innovative software solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">GitHub</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#custom-development">Custom Development</a></li>
              <li><a href="#ai-ml">AI & Machine Learning</a></li>
              <li><a href="#cloud">Cloud Infrastructure</a></li>
              <li><a href="#power-apps">Power Apps</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📍</span>
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
              <li>
                <span className="contact-icon">📧</span>
                <a href="mailto:contact@softzig.com">contact@softzig.com</a>
              </li>
              <li>
                <span className="contact-icon">📱</span>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">© 2024 SoftZig. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 