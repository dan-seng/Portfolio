import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo" onClick={scrollToTop}>
          <span className="logo-text">Daniel</span>
          <span className="logo-dot">.</span>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Daniel. All rights reserved.</p>
        </div>
      </div>

      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
