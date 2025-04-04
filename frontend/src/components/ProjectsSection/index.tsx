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
    },
    {
        title: 'Healthcare Management System',
        description: 'A comprehensive healthcare management system that streamlines patient records, appointments, and billing processes.',
        category: 'Healthcare Tech',
        stats: [
            { value: '200+', label: 'Hospitals' },
            { value: '1M+', label: 'Patients Served' }
        ],
        link: '/case-studies/healthcare-system'
    },
    {
        title: 'IoT Smart Home Solution',
        description: 'An integrated IoT platform for smart homes, enabling seamless control of home appliances and security systems.',
        category: 'IoT',
        stats: [
            { value: '10K+', label: 'Devices Connected' },
            { value: '40%', label: 'Energy Savings' }
        ],
        link: '/case-studies/smart-home'
    },
    {
        title: 'Blockchain Supply Chain',
        description: 'A blockchain-based supply chain management system ensuring transparency and traceability in logistics.',
        category: 'Blockchain',
        stats: [
            { value: '500+', label: 'Companies' },
            { value: '1M+', label: 'Transactions' }
        ],
        link: '/case-studies/blockchain-supply'
    },
    {
        title: 'AR Training Platform',
        description: 'An augmented reality platform for employee training, providing immersive learning experiences.',
        category: 'AR/VR',
        stats: [
            { value: '50K+', label: 'Users Trained' },
            { value: '85%', label: 'Learning Retention' }
        ],
        link: '/case-studies/ar-training'
    },
    {
        title: 'Field Service Management App',
        description: 'A comprehensive Power Apps solution for field service teams, featuring offline capabilities, real-time updates, and seamless integration with Microsoft 365.',
        category: 'Power Apps',
        stats: [
            { value: '75%', label: 'Faster Service Delivery' },
            { value: '90%', label: 'Field Team Adoption' }
        ],
        link: '/case-studies/field-service-app'
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