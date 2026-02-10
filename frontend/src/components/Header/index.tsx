import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo-full-tbg.svg';
import './index.css';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    <img src={logo} alt="SoftZig Logo" />
                </Link>
                <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </button>
                <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                    <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
                    <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    {/* <Link to="/contact" className="nav-cta" onClick={() => setIsMobileMenuOpen(false)}>Get started</Link> */}
                </div>
            </div>
        </nav>
    );
};

export default Header;
