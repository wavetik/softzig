import React from 'react';
import PortfolioHeroSection from '../../components/PortfolioHeroSection';
import ProjectsSection from '../../components/ProjectsSection';
import './index.css';

const Portfolio: React.FC = () => {
    return (
        <div className="portfolio-page">
            <PortfolioHeroSection />
            <ProjectsSection />
            
        </div>
    );
};

export default Portfolio; 