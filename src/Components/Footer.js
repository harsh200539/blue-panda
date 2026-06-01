import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Assets/Footer.css"

export function Footer() {
  const navigate = useNavigate();

  const scrollToWhatWeDo = (e) => {
    e.preventDefault();
    navigate('/about');
    setTimeout(() => {
      const element = document.getElementById('what-we-do');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Info Column */}
        <div className="footer-column">
          <a href="/" className="logo-container">
            {/* Dark theme logo (white) - shows in dark mode */}
            <img 
              className="logo-dark-theme" 
              style={{height:'65px'}} 
              src={require('../Images/blue_panda_logo_white.png')} 
              alt="Blue Panda Mascot" 
            />
            {/* Light theme logo (blue) - shows in light mode */}
            <img 
              className="logo-light-theme" 
              style={{height:'65px'}} 
              src={require('../Images/logo_blue.png')} 
              alt="Blue Panda Mascot" 
            />
          </a>
          <p className="footer-description">Pandas don't just chill, we build brands!</p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Resources Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Resources</h3>
          <ul className="footer-list">
            <li>
              <a href="/blog" className="footer-link">Blog</a>
            </li>
            <li>
              <a href="/CareerPage" className="footer-link">Career</a>
            </li>
            <li>
              <a href="/PortfolioPage" className="footer-link">Portfolio</a>
            </li>
          </ul>
        </div>

        {/* Service Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Service</h3>
          <ul className="footer-list">
            <li>
              <a href="#" onClick={scrollToWhatWeDo} className="footer-link">Logo & Branding</a>
            </li>
            <li>
              <a href="#" onClick={scrollToWhatWeDo} className="footer-link">Website Development</a>
            </li>
            <li>
              <a href="#" onClick={scrollToWhatWeDo} className="footer-link">Mobile App Development</a>
            </li>
            <li>
              <a href="#" onClick={scrollToWhatWeDo} className="footer-link">Social Media Marketing</a>
            </li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Support</h3>
          <ul className="footer-list">
            <li>
              <a href="#" onClick={scrollToContact} className="footer-link">Contact Us</a>
            </li>
            <li>
              <a href="/PrivacyPolicyPage" className="footer-link">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
