import React from 'react';
import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';
import ServicesSection from '../../components/ServicesSection';
import ProcessSection from '../../components/ProcessSection';
import TechStackSection from '../../components/TechStackSection';
import PortfolioSection from '../../components/PortfolioSection';
import ContactSection from '../../components/ContactSection';
import './index.css';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <FeaturesSection />
            <ServicesSection />
            <ProcessSection />
            <TechStackSection />
            <PortfolioSection />
            <ContactSection />
        </div>
    );
};

export default Home; 