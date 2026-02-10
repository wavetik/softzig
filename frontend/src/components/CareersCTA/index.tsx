import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const CareersCTA: React.FC = () => {
    return (
        <section className="careers-cta container">
            <div className="cta-card">
                <div>
                    <h3>We're hiring — join SoftZig</h3>
                    <p>Explore opportunities to grow with a team building AI-driven digital products.</p>
                </div>
                <Link to="/careers" className="cta-link">See openings</Link>
            </div>
        </section>
    );
};

export default CareersCTA;
