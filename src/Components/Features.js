import React from 'react';
import '../Assets/Features.css';

const Features = () => {
  return (
    <div className="features-section">
      <h2 data-aos="fade-up" data-aos-duration="800">Features</h2>
      <div className="features-grid">
        <div className="feature-card" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600">
          <h3>Responsive Design</h3>
          <p>Works perfectly on desktop, tablet, and mobile devices</p>
        </div>
        <div className="feature-card" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="600">
          <h3>Animated Dropdowns</h3>
          <p>Smooth dropdown animations for desktop and mobile</p>
        </div>
        <div className="feature-card" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="600">
          <h3>Dark/Light Theme</h3>
          <p>Toggle between dark and light mode with ease</p>
        </div>
        <div className="feature-card" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="600">
          <h3>Futuristic Look</h3>
          <p>Modern glassmorphism and neon effects</p>
        </div>
      </div>
    </div>
  );
};

export default Features;

