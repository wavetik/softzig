import React from 'react';
import './index.css';

interface ProjectCardProps {
    title: string;
    description: string;
    category: string;
    stats: {
        value: string;
        label: string;
    }[];
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, category, stats, link }) => {
    return (
        <div className="project-card">
            <div className="project-category">{category}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            
            <div className="project-stats">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
            
            <a href={link} className="project-link">View Case Study →</a>
        </div>
    );
};

export default ProjectCard; 