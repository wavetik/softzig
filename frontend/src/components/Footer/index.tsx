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
            {/* <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="/services#custom-development">Custom Software Development</a></li>
              <li><a href="/services#power-apps">Power Apps Development</a></li>
              <li><a href="/services#cybersecurity">Cybersecurity</a></li>
              <li><a href="/services#cloud">Cloud Infrastructure</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            {/* <h3 className="footer-title">Contact Us</h3> */}
            <ul className="footer-contact">
              <li>
                {/* <i className="fas fa-map-marker-alt contact-icon"></i>
                <span>123 Tech Street, Silicon Valley, CA 94025</span> */}
              </li>
              <li>
                {/* <i className="fas fa-envelope contact-icon"></i>
                <a href="mailto:contact@softzig.com">contact@softzig.com</a> */}
              </li>
              <li>
                {/* <i className="fas fa-phone contact-icon"></i>
                <a href="tel:+1234567890">+1 (234) 567-890</a> */}
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