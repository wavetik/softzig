import React from 'react';
import ProjectCard from '../ProjectCard';
import './index.css';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.',
        category: 'Web Development',
        stats: [
            { value: '50K+', label: 'Monthly Users' },
            { value: '95%', label: 'Customer Satisfaction' }
        ],
        link: '/case-studies/ecommerce-platform'
    },
    {
        title: 'Mobile Banking App',
        description: 'A secure and intuitive mobile banking application that enables users to manage their finances on the go.',
        category: 'Mobile Development',
        stats: [
            { value: '100K+', label: 'Active Users' },
            { value: '4.8/5', label: 'App Store Rating' }
        ],
        link: '/case-studies/mobile-banking'
    },
    {
        title: 'AI-Powered Analytics',
        description: 'An advanced analytics platform that leverages artificial intelligence to provide actionable insights for businesses.',
        category: 'AI/ML',
        stats: [
            { value: '1M+', label: 'Data Points Analyzed' },
            { value: '98%', label: 'Accuracy Rate' }
        ],
        link: '/case-studies/ai-analytics'
    },
    {
        title: 'Cloud Migration',
        description: 'Successfully migrated a legacy system to the cloud, improving scalability and reducing operational costs.',
        category: 'Cloud Solutions',
        stats: [
            { value: '60%', label: 'Cost Reduction' },
            { value: '99.9%', label: 'Uptime' }
        ],
        link: '/case-studies/cloud-migration'
    }
];

const ProjectsSection: React.FC = () => {
    return (
        <section className="projects-section">
            <div className="container">
                <h2 className="section-title">Our Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            category={project.category}
                            stats={project.stats}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection; 