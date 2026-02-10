import React from 'react';
import ProjectCard from '../ProjectCard';
import './index.css';

const projects = [
    {
        title: 'zigVote',
        description: 'SaaS-based voting platform enabling organizations to create and conduct secure online elections with encrypted ballot tracking.',
        category: 'Voting Technology',
        stats: [],
        link: 'https://zigvote.com/'
    },
    {
        title: 'Learn Sikhi Online',
        description: "A comprehensive learning platform for Sikhi education with online classes, resources, and community features.",
        category: 'Education Platform',
        link: 'https://www.learnsikhionline.com/'
    },
    {
        title: 'Guru Nanak Public School',
        description: 'Comprehensive school website with admissions portal, parent login system, and educational resources.',
        category: 'Educational Institution',
        link: 'https://gnps2bbsr.com/'
    },
    {
        title: 'Paradize Estates',
        description: 'Modern property listing and real estate platform featuring premium plots with clear titles and interactive maps.',
        category: 'Real Estate',
        link: 'https://paradizeestates.com/'
    },
    {
        title: 'Flipi',
        description: 'Digital learning platform with interactive educational content and personalized learning experiences.',
        category: 'EdTech',
        link: 'https://flipi.in/'
    },
    
    {
        title: 'Prowess Resort',
        description: 'Luxury resort website with online booking system, virtual tours, and comprehensive amenity details.',
        category: 'Hospitality',
        link: 'https://prowessresort.com/'
    },
    {
        title: 'FVAgito',
        description: 'Innovative restaurant service platform revolutionizing the dining experience by eliminating waiter wait times and enhancing customer satisfaction.',
        category: 'Food Tech',
        link: 'https://fvagito.com/'
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
                            //stats={project.stats}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection; 