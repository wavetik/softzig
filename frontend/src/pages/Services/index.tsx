import React from 'react';
import ServicesHeroSection from '../../components/ServicesHeroSection';
import AllServicesSection from '../../components/AllServicesSection';
import ProcessSection from '../../components/ProcessSection';
import TechStackSection from '../../components/TechStackSection';
import ContactSection from '../../components/ContactSection';
import './index.css';

const Services: React.FC = () => {
    return (
        <div className="services-page">
            <ServicesHeroSection />
            <AllServicesSection />
            <ProcessSection />
            <TechStackSection />
            
        </div>
    );
};

export default Services; 