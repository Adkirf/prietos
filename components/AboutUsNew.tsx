'use client'

import React, { useEffect, useState } from 'react';
import './AboutSection.css';

export function AboutUs() {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        // Simulate the animation completion after a timeout
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 2000); // Adjust the duration as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="about-section">
            <div className="left-column">
                <div
                    className={`image-div ${animationComplete ? 'final-position' : 'initial-animation'}`}
                >
                    {/* Image content can be added here */}
                </div>
            </div>
            <div className="right-column">
                {[...Array(4)].map((_, index) => (
                    <div className="section" key={index}>
                        <h2>Section {index + 1}</h2>
                        <p>Content for section {index + 1} aligned to the bottom.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
