import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    // ... your projects array remains the same
   {
    id: 1,
    title: 'Movie Explore',
    description: 'A responsive web app that lets users search and explore movies with details like ratings, genres, and trailers. Built using React, TailwindCSS, and the TMDB API for real-time movie data.',
    image: '/screenshots/movie-explore.png',
    technologies: ['React', 'TMDB API', 'TailwindCSS', 'JavaScript'],
    category: 'web',
    liveUrl: 'https://moviexplore.vercel.app',
    githubUrl: 'https://github.com/dan-seng/Movie-Explore',
    featured: true
  },
  {
    id: 2,
    title: 'Internet Speed Test',
    description: 'A lightweight web app that measures real-time internet speed, including download and upload rates. Built with HTML, CSS, and JavaScript, it provides a clean interface and responsive design for quick performance checks.',
    image: '/screenshots/ist.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    liveUrl: 'https://internet-speedtester.vercel.app',
    githubUrl: 'https://github.com/dan-seng/Internet-Speed-Test',
    featured: true
  },
  {
    id: 3,
    title: 'Mu-Seng',
    description: 'A simple class website built for Software Engineering students at Mekelle University. It features photos, student lists, and basic information, designed with HTML, CSS, and JavaScript for a clean and responsive layout.',
    image: '/screenshots/mu-seng.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    liveUrl: 'https://mu-softwareengineers.vercel.app',
    githubUrl: 'https://github.com/dan-seng/musengclass',
    featured: true
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations and clean design.',
    image: '/screenshots/portfolio.png',
    technologies: ['React', 'Framer Motion', 'CSS3', 'JavaScript'],
    category: 'web',
    liveUrl: 'https://dan-softwares.vercel.app',
    githubUrl: 'https://github.com/dan-seng/Portfolio',
    featured: false
  },
  {
    id: 5,
    title: 'Task Management App',
    description: 'A smart task management application with real-time updates, calendar view, and drag-and-drop functionality.',
    image: '/screenshots/todo-app.png',
    technologies: ['React', 'Node.js', 'TailwindCSS', 'JS'],
    category: 'web',
    liveUrl: 'https://task-wall.vercel.app',
    githubUrl: 'https://github.com/dan-seng/todo-list-app',
    featured: true
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    description: 'A weather application that displays current weather and forecasts using OpenWeatherMap API.',
    image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Weather+App',
    technologies: ['JavaScript', 'CSS3', 'HTML5', 'API'],
    category: 'web',
    liveUrl: 'https://dan-weatherapp.vercel.app',
    githubUrl: 'https://github.com/dan-seng/Weather-app',
    featured: false
  },
  /*{
    id: 7,
    title: 'REST API Service',
    description: 'A comprehensive REST API built with Express.js and PostgreSQL. Includes authentication and data validation.',
    image: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=API+Service',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    category: 'computer',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 8,
    title: 'Desktop Notes',
    description: 'A sticky notes application for quick reminders with search, categories, and local storage.',
    image: 'https://via.placeholder.com/400x250/f97316/ffffff?text=Desktop+Notes',
    technologies: ['Electron', 'React', 'Local Storage'],
    category: 'computer',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 9,
    title: 'System Cleaner',
    description: 'A desktop application to clear cache, temporary files, and improve system performance.',
    image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=System+Cleaner',
    technologies: ['Electron', 'Node.js', 'System API'],
    category: 'computer',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },

  {
    id: 10,
    title: 'Language Learner',
    description: 'A gamified language learning app with flashcards, quizzes, and streak tracking.',
    image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=Language+Learner',
    technologies: ['Flutter', 'SQLite', 'Firebase'],
    category: 'mobile',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },

 
  {
    id: 11,
    title: 'Portfolio Generator',
    description: 'A tool that generates a personal portfolio website from a JSON configuration file.',
    image: 'https://via.placeholder.com/400x250/f43f5e/ffffff?text=Portfolio+Generator',
    technologies: ['Node.js', 'React', 'TailwindCSS'],
    category: 'other',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 12,
    title: 'AI Chatbot',
    description: 'A simple chatbot app powered by an AI API for answering user questions in real time.',
    image: 'https://via.placeholder.com/400x250/9333ea/ffffff?text=AI+Chatbot',
    technologies: ['React', 'Node.js', 'AI API'],
    category: 'other',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },    */
      
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
      
  // Get unique categories from projects for dynamic filtering
  const projectCategories = [...new Set(projects.map(project => project.category))];
  
  // Define all possible filters
  const allFilters = [
    { key: 'all', label: 'All Projects', icon: '📁' },
    { key: 'mobile', label: 'Mobile', icon: '📱' },
    { key: 'web', label: 'Web', icon: '🌐' },
    { key: 'computer', label: 'Computer', icon: '💻' },
    { key: 'other', label: 'Other', icon: '🔧' }
  ];
  
  // Filter to only show filters that have matching projects or are 'all'
  const availableFilters = allFilters.filter(
    filter => filter.key === 'all' || projectCategories.includes(filter.key)
  );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="project-filters">
          {availableFilters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              <span className="filter-icon">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="no-projects-message">
            <p>No projects found in this category. Check back soon for updates!</p>
          </div>
        )}

        <motion.div 
          className="projects-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          key={activeFilter} // Add this key to force re-render when filter changes
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={{
                hidden: { 
                  opacity: 0,
                  y: 20 // Changed from x to y for a more consistent animation
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.5s ease-in-out'
                  }}
                />
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="github-more" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <a 
          href="https://github.com/dan-seng" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#00ff88',
            textDecoration: 'none',
            fontSize: '1.1rem',
            padding: '0.75rem 1.5rem',
            border: '2px solid rgba(0, 255, 136, 0.3)',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
            background: 'rgba(0, 255, 136, 0.05)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(0, 255, 136, 0.1)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(0, 255, 136, 0.05)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <FaGithub />
          View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;