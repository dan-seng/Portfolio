import React, { useEffect } from 'react';
import './Navbar.css';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Get all sections
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

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">Dan</span>
          <span className="logo-dot">.</span>
        </div>
        
        <div className="nav-right">
          <div className="nav-links">
            <a 
              onClick={() => scrollToSection('skills')} 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Skills
            </a>
            <a 
              onClick={() => scrollToSection('projects')} 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </a>
            <a 
              onClick={() => scrollToSection('contact')} 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
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
      </div>
    </nav>
  );
};

export default Navbar;
