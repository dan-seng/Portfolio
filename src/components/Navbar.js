import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaGithub, FaLinkedinIn, FaHome, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Initial checks
    handleResize();
    handleScroll();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Home', icon: <FaHome /> },
    { id: 'skills', label: 'Skills', icon: <FaCode /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  const renderDesktopNav = () => (
    <div className="nav-right">
      <div className="nav-links">
        {navLinks.slice(1).map((link) => (
          <a 
            key={link.id}
            href={`#${link.id}`}
            onClick={() => {
              scrollToSection(link.id);
            }} 
            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="nav-social-links">
        <a href="https://github.com/dan-seng" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/daniel-gidey-40497337a/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button" download>
          <HiOutlineDocumentDownload />
          <span>Resume</span>
        </a>
      </div>
    </div>
  );

  const renderMobileNav = () => (
    <div className="mobile-nav open">
      <div className="mobile-nav-links">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => {
              scrollToSection(link.id);
            }}
            className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
            aria-label={link.label}
          >
            {link.icon}
            <span className="mobile-nav-text">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : ''}`}>
        <div className="nav-container">
          {!isMobile && (
            <div className="nav-logo" onClick={() => scrollToSection('hero')}>
              <span className="logo-text">Dan</span>
              <span className="logo-dot">.</span>
            </div>
          )}
          
          {!isMobile ? (
            renderDesktopNav()
          ) : (
            null
          )}
        </div>
        {isMobile && renderMobileNav()}
      </nav>
      {isMobile && <div className="mobile-nav-spacer"></div>}
    </>
  );
};

export default Navbar;
