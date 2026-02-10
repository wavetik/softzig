import React from 'react';
import PortfolioHeroSection from '../../components/PortfolioHeroSection';
import ProjectsSection from '../../components/ProjectsSection';
import './index.css';
import CareersCTA from '../../components/CareersCTA';

const Portfolio: React.FC = () => {
    return (
        <div className="portfolio-page">
            <PortfolioHeroSection />
            <ProjectsSection />
            <CareersCTA />
            
        </div>
    );
};

export default Portfolio; 