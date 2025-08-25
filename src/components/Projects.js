import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=E-Commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application built with React and Firebase. Real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Task+App',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecasts using OpenWeatherMap API. Built with vanilla JavaScript and modern CSS.',
      image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Weather+App',
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'API'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'REST API Service',
      description: 'A comprehensive REST API built with Express.js and PostgreSQL. Includes authentication, data validation, and comprehensive documentation.',
      image: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=API+Service',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      category: 'computer',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and styled-components. Features smooth animations and modern design principles.',
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Portfolio',
      technologies: ['React', 'Styled-Components', 'Framer Motion'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with WebSocket support, user authentication, and message history. Built with React and Socket.io.',
      image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=Chat+App',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Flutter Mobile App',
      description: 'Cross-platform mobile application built with Flutter and Dart. Features include offline support, push notifications, and native performance.',
      image: 'https://via.placeholder.com/400x250/00d4aa/ffffff?text=Mobile+App',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Provider'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 8,
      title: 'Desktop Utility Tool',
      description: 'Windows desktop application built with C# and WPF. Provides system optimization tools and performance monitoring.',
      image: 'https://via.placeholder.com/400x250/ff6b35/ffffff?text=Desktop+Tool',
      technologies: ['C#', 'WPF', '.NET', 'SQLite'],
      category: 'computer',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 9,
      title: 'AI Image Generator',
      description: 'Machine learning project that generates creative images using Python and TensorFlow. Includes web interface for user interaction.',
      image: 'https://via.placeholder.com/400x250/9c27b0/ffffff?text=AI+Project',
      technologies: ['Python', 'TensorFlow', 'Flask', 'OpenAI API'],
      category: 'other',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: '📁' },
    { key: 'mobile', label: 'Mobile', icon: '📱' },
    { key: 'web', label: 'Web', icon: '🌐' },
    { key: 'computer', label: 'Computer', icon: '💻' },
    { key: 'other', label: 'Other', icon: '🔧' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
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

        <motion.div 
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={{
                hidden: { 
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50 
                },
                visible: { 
                  opacity: 1, 
                  x: 0,
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
                <img src={project.image} alt={project.title} />
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
    </section>
  );
};

export default Projects;
