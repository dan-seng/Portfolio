import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FindMe from './components/FindMe';
import { ScrollAnimation } from './components/ScrollAnimation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <AnimatePresence mode="wait">
        <main>
          <ScrollAnimation type="fadeIn" duration={0.8} threshold={0.2}>
            <Hero id="hero" />
          </ScrollAnimation>
          
          <ScrollAnimation type="fadeUp" delay={0.2} duration={0.8} threshold={0.1}>
            <Skills id="skills" />
          </ScrollAnimation>
          
          <ScrollAnimation type="staggerChildren" delay={0.1} duration={0.8} threshold={0.1}>
            <Projects id="projects" />
          </ScrollAnimation>
          
          <ScrollAnimation type="fadeLeft" delay={0.2} duration={0.8} threshold={0.1}>
            <Contact id="contact" />
          </ScrollAnimation>
          
          <ScrollAnimation type="fadeRight" delay={0.2} duration={0.8} threshold={0.1}>
            <FindMe id="find-me" />
          </ScrollAnimation>
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
