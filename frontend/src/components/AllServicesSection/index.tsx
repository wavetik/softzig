import React from 'react';
import './index.css';

const services = [
    {
        title: "Custom Software Development",
        description: "Enterprise-grade software solutions designed to address your specific business challenges and operational requirements.",
        features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"],
        icon: "💻",
        color: "#3B82F6"
    },
    {
        title: "AI & Machine Learning",
        description: "Leverage artificial intelligence to automate processes, gain actionable insights, and create competitive advantages.",
        features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"],
        icon: "🤖",
        color: "#10B981"
    },
    {
        title: "Cloud Infrastructure",
        description: "Scalable, secure, and reliable cloud infrastructure with automated deployment pipelines for maximum efficiency.",
        features: ["Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code", "Cloud Security"],
        icon: "☁️",
        color: "#6366F1"
    },
    {
        title: "Digital Transformation",
        description: "End-to-end digital transformation services to modernize your business processes and drive growth.",
        features: ["Process Automation", "Digital Strategy", "Legacy Modernization", "Change Management"],
        icon: "🔄",
        color: "#F59E0B"
    },
    {
        title: "Data Analytics",
        description: "Data-driven insights and analytics solutions for informed decision-making and business intelligence.",
        features: ["Business Intelligence", "Data Warehousing", "Data Visualization", "Predictive Modeling"],
        icon: "📊",
        color: "#EC4899"
    },
    {
        title: "Cybersecurity",
        description: "Comprehensive security solutions to protect your digital assets and infrastructure from evolving threats.",
        features: ["Security Assessment", "Threat Detection", "Compliance Management", "Security Training"],
        icon: "🔒",
        color: "#EF4444"
    }
];

const AllServicesSection: React.FC = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="services-tag">Enterprise Solutions</div>
                <h2 className="services-title">Professional IT Services</h2>
                <p className="services-subtitle">
                    Comprehensive technology solutions tailored to meet the demands of modern businesses
                </p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="service-card"
                            style={{ '--service-color': service.color } as React.CSSProperties}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <div className="service-features">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="feature-item">
                                            <span className="feature-dot"></span>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <a href="#contact" className="service-link">
                                    Learn More
                                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllServicesSection; 