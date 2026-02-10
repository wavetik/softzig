import React from 'react';
import AboutHeroSection from '../../components/AboutHeroSection';
import MissionVisionSection from '../../components/MissionVisionSection';
import TeamSection from '../../components/TeamSection';
import ValuesSection from '../../components/ValuesSection';
import './index.css';
import CareersCTA from '../../components/CareersCTA';

const About: React.FC = () => {
    return (
        <div className="about-page">
            <AboutHeroSection />
            <MissionVisionSection />
            <ValuesSection />
            <TeamSection />
            <CareersCTA />
        </div>
    );
};

export default About; 