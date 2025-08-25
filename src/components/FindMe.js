import React from 'react';
import { FaLinkedinIn, FaGithub, FaTelegramPlane, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import './FindMe.css';

const FindMe = () => {
  return (
    <section className="find-me" id="find-me">
      <div className="container">
        <h2 className="section-title">You can find me here:</h2>
        <div className="social-links">
          <a 
            href="https://linkedin.com/in/daniel-gidey-40497337a/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="social-icon" />
          </a>
          
          <a 
            href="https://github.com/dan-seng" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon" />
          </a>
          
          <a 
            href="https://t.me/living_guy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="Telegram"
          >
            <FaTelegramPlane className="social-icon" />
          </a>
          
          <a 
            href="https://wa.me/251945012123" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="social-icon" />
          </a>
          
          <a 
            href="https://facebook.com/dan16son" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="Facebook"
          >
            <FaFacebookF className="social-icon" />
          </a>
          
          <a 
            href="https://instagram.com/_dan_el" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="Instagram"
          >
            <FaInstagram className="social-icon" />
          </a>
          
          <a 
            href="mailto:da16gi@gmail.com" 
            className="social-link"
            aria-label="Email"
          >
            <HiOutlineMail className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FindMe;
