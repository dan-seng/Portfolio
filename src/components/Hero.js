import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const fullText = 'Full-Stack Developer';
  
  useEffect(() => {
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentIndex(0);
      } else {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 100);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText === fullText) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 150);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentIndex, isDeleting, fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title-container">
            <div className="hello-text">Hello I'm</div>
            <h1 className="hero-title">
              <span className="highlight">DANIEL</span>
            </h1>
          </div>
          <p className="hero-subtitle">
            I'm a <span className="typing-text">{currentText}</span><span className="cursor">|</span>
          </p>
          <p className="hero-description">
            Passionate about creating innovative web solutions and turning ideas into reality through clean, efficient code.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-block glass-card">
            <div className="window-controls">
              <div className="window-btn close"></div>
              <div className="window-btn minimize"></div>
              <div className="window-btn maximize"></div>
              <span className="window-title">terminal</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="line-number">1</span>
                <span className="code-text">
                  <span className="keyword">const</span> <span className="function">developer</span><span className="punctuation"> = </span><span className="punctuation">{`{`}</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">2</span>
                <span className="code-text">
                  &nbsp;&nbsp;<span className="property">name</span><span className="punctuation">: </span><span className="string">'Daniel'</span><span className="punctuation">,</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">3</span>
                <span className="code-text">
                  &nbsp;&nbsp;<span className="property">role</span><span className="punctuation">: </span><span className="string">'Full-Stack Developer'</span><span className="punctuation">,</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">4</span>
                <span className="code-text">
                  &nbsp;&nbsp;<span className="property">passion</span><span className="punctuation">: </span><span className="string">'Building amazing web experiences'</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">5</span>
                <span className="code-text"><span className="punctuation">{`}`}</span><span className="punctuation">;</span></span>
              </div>
              <div className="code-line">
                <span className="line-number">6</span>
                <span className="code-text"></span>
              </div>
              <div className="code-line">
                <span className="line-number">7</span>
                <span className="code-text">
                   <span className="property">developer</span>
                   <span className="punctuation">.</span>
                   <span className="property">skills</span> 
                   <span className="punctuation">= [</span> 
                   <span className="string">'JavaScript'</span>
                   <span className="punctuation">, </span>
                   <span className="string">'Python'</span>
                   <span className="punctuation">, </span>
                   <span className="string">'Java'</span>
                   <span className="punctuation">, </span>
                   <span className="string">'React'</span>
                   <span className="punctuation">, </span>
                   <span className="string">'Node.js'</span>
                   <span className="punctuation">, </span>
                   <span className="string">'MongoDB'</span>
                   <span className="punctuation">, </span>
                   <span className="string">'...'</span> 
                   <span className="punctuation">];</span></span>
              </div>
              <div className="code-line">
                <span className="line-number">8</span>
                <span className="code-text"></span>
              </div>
              <div className="code-line">
                <span className="line-number">9</span>
                <span className="code-text"><span className="comment">{` //Ready to create something amazing?`}</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollToSection('skills')}>
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
