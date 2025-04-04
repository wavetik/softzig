import React from 'react';
import HeroSection from '../../components/HeroSection';
import HighlightedServicesSection from '../../components/HighlightedServicesSection';
import ProcessSection from '../../components/ProcessSection';
import TechStackSection from '../../components/TechStackSection';
import PortfolioSection from '../../components/PortfolioSection';
import './index.css';
import FeaturesSection from '../../components/FeaturesSection';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <FeaturesSection />
            <HighlightedServicesSection />
            <ProcessSection />
            <TechStackSection />
            <PortfolioSection />
            
        </div>
    );
};

export default Home; 