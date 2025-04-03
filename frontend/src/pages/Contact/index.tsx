import React from 'react';
import ContactHeroSection from '../../components/ContactHeroSection';
import ContactSection from '../../components/ContactSection';
import './index.css';

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <ContactHeroSection />
            <ContactSection />
        </div>
    );
};

export default Contact; 