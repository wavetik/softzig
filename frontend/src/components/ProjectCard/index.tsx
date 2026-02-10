import React from 'react';
import './index.css';

interface ProjectCardProps {
    title: string;
    description: string;
    category: string;
    stats?: {
        value: string;
        label: string;
    }[];
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, category, link }) => {
    return (
        <div className="project-card">
            <div className="project-category">{category}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            
            {/* Stats intentionally removed to keep cards consistent */}
            
            <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">View Case Study →</a>
        </div>
    );
};

export default ProjectCard; 