import React from 'react';
import HeroSection from '../../components/HeroSection';
import HighlightedServicesSection from '../../components/HighlightedServicesSection';
import ProcessSection from '../../components/ProcessSection';
import TechStackSection from '../../components/TechStackSection';
import PortfolioSection from '../../components/PortfolioSection';
import ContactSection from '../../components/ContactSection';
import './index.css';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <HighlightedServicesSection />
            <ProcessSection />
            <TechStackSection />
            <PortfolioSection />
            
        </div>
    );
};

export default Home; 