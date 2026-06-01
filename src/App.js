import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import BlogsPage from './Pages/BlogsPage';
import BlogDetailsPage from './Pages/BlogDetailsPage';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Default animation duration
      delay: 0, // Default delay
      once: false, // Animation triggers every time element scrolls into view
      mirror: true, // Animate elements out while scrolling past them
      easing: 'ease-in-out', // Smooth easing function
      offset: 100, // Offset from the original trigger point
    });

    // Refresh AOS on route changes
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
