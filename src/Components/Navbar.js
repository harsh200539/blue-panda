import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../Assets/Navbar.css';
import bluePandaLogoWhite from '../Images/blue_panda_logo_white.png';
import bluePandaLogoBlue from '../Images/Blue Panda Logo Blue.png';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const handleScrollToSection = (path, sectionId) => {
    setIsNavOpen(false);
    if (location.pathname === path) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <header className="header">
            <nav className={`navbar ${isNavOpen ? 'nav-active' : ''}`} id="navbar">
                <div class="nav-brand">
                    <a href="#" class="logo">
                        <img src={bluePandaLogoWhite} alt="Blue Panda Logo" />
                    </a>
                </div>

                <div className="nav-toggle" id="nav-toggle" onClick={handleNavToggle}>
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div class="nav-menu" id="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#home" className="nav-link" onClick={(e) => {
                                e.preventDefault();
                                handleScrollToSection('/', 'home');
                            }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about-section-1" className="nav-link" onClick={(e) => {
                                e.preventDefault();
                                handleScrollToSection('/about', 'about-section-1');
                            }}>About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#what-we-do" className="nav-link" onClick={(e) => {
                                e.preventDefault();
                                handleScrollToSection('/about', 'what-we-do');
                            }}>What We Do</a>
                        </li>
                        <li className="nav-item">
                            <a href="#blogs-page" className="nav-link" onClick={(e) => {
                                e.preventDefault();
                                handleScrollToSection('/blog', 'blogs-page');
                            }}>Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" onClick={(e) => {
                                e.preventDefault();
                                handleScrollToSection('/', 'contact');
                            }}>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}