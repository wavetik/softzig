import React from 'react';
import './index.css';

const Careers: React.FC = () => {
    return (
        <div className="careers-page">
            <section className="careers-hero">
                <div className="container">
                    <div className="badge">We're Hiring!</div>
                    <h1>Join Our Team</h1>
                    <p className="hero-subtitle">
                        SoftZig is expanding its team and we are looking for a motivated 
                        <strong> Intern Quality Assurance Engineer</strong> to join us in a fully remote capacity!
                    </p>
                </div>
            </section>

            <section className="job-detail-section container">
                <div className="job-container">
                    <div className="job-header">
                        <div className="job-title-wrapper">
                            <h2>Intern - Quality Assurance Engineer</h2>
                            <span className="job-tag">Fully Remote</span>
                        </div>
                        <p className="job-intro">
                            Are you a detail-oriented problem solver looking to kickstart your career in tech 
                            from the comfort of your own home? This internship offers the perfect blend of 
                            professional growth and flexibility. You will work alongside our engineering team 
                            to ensure our software meets the highest standards of quality.
                        </p>
                    </div>

                    <div className="position-overview">
                        <div className="overview-item">
                            <i className="fas fa-briefcase"></i>
                            <div>
                                <h4>Role</h4>
                                <p>Intern - Quality Assurance Engineer</p>
                            </div>
                        </div>
                        <div className="overview-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h4>Location</h4>
                                <p>Fully Remote (Work from anywhere!)</p>
                            </div>
                        </div>
                        <div className="overview-item">
                            <i className="fas fa-building"></i>
                            <div>
                                <h4>Company</h4>
                                <p>SoftZig</p>
                            </div>
                        </div>
                    </div>

                    <div className="job-content-grid">
                        <div className="content-card">
                            <h3><i className="fas fa-tasks"></i> What You’ll Be Doing</h3>
                            <ul>
                                <li>
                                    <strong>Executing Test Cases:</strong> Assist in manual and automated testing to identify software bugs.
                                </li>
                                <li>
                                    <strong>Defect Tracking:</strong> Document and track issues to ensure they are resolved before release.
                                </li>
                                <li>
                                    <strong>Collaboration:</strong> Work closely with our developers in a remote environment to maintain seamless digital experiences.
                                </li>
                                <li>
                                    <strong>Learning:</strong> Gain hands-on experience with industry-standard QA tools and methodologies.
                                </li>
                            </ul>
                        </div>

                        <div className="content-card">
                            <h3><i className="fas fa-heart"></i> Why SoftZig?</h3>
                            <ul>
                                <li>
                                    <strong>Remote-First Culture:</strong> Enjoy the flexibility of working from your preferred location.
                                </li>
                                <li>
                                    <strong>Mentorship:</strong> Receive guidance from experienced professionals who are passionate about innovation.
                                </li>
                                <li>
                                    <strong>Impactful Work:</strong> Contribute to real-world projects that drive digital transformation.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="apply-section">
                        <div className="apply-card">
                            <h3>How to Apply</h3>
                            <p>If you’re ready to learn and grow with a forward-thinking team, we want to hear from you!</p>
                            <div className="apply-action">
                                <p>Send your CV and Cover Letter to:</p>
                                <a href="mailto:careers@softzig.com" className="apply-button">
                                    <i className="fas fa-envelope"></i> careers@softzig.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
