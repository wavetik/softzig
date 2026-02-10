import React from 'react';
import ServicesHeroSection from '../../components/ServicesHeroSection';
import AllServicesSection from '../../components/AllServicesSection';
import './index.css';

const Services: React.FC = () => {
    return (
        <div className="services-page">
            <ServicesHeroSection />
            <AllServicesSection />
            
        </div>
    );
};

export default Services; 