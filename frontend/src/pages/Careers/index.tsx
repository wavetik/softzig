import React from 'react';
import './index.css';

const Careers: React.FC = () => {
    return (
        <div className="careers-page">
            <section className="careers-hero">
                <div className="container">
                    <h1>Careers at SoftZig</h1>
                    <p>Join our team — we're building AI-powered products and delivering transformative digital solutions. Check open roles below and apply to be part of our journey.</p>
                </div>
            </section>

            <section className="open-roles container">
                <h2>Open Positions</h2>
                <div className="roles-grid">
                    <div className="role-card">
                        <h3>Frontend Engineer</h3>
                        <p>Work on responsive UI, performance, and delightful user experiences.</p>
                        <a href="mailto:careers@softzig.com?subject=Application%20-%20Frontend%20Engineer" className="apply-link">Apply</a>
                    </div>
                    <div className="role-card">
                        <h3>Backend Engineer</h3>
                        <p>Design scalable APIs and backend systems supporting our products.</p>
                        <a href="mailto:careers@softzig.com?subject=Application%20-%20Backend%20Engineer" className="apply-link">Apply</a>
                    </div>
                    <div className="role-card">
                        <h3>Product Designer</h3>
                        <p>Create beautiful and usable product interfaces and design systems.</p>
                        <a href="mailto:careers@softzig.com?subject=Application%20-%20Product%20Designer" className="apply-link">Apply</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
