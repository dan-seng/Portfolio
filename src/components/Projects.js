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
    title: 'E-Commerce Website',
    description: 'A comprehensive E-Commerce website built with NextJS and TailwindCSS. Includes Payment integration with stripe.',
    image: '/screenshots/eshemeta.png',
    technologies: ['NextJS', 'TailwindCSS', 'Stripe', 'Zustand', 'TypeScript', 'Shadcn UI'],
    category: 'web',
    liveUrl: 'https://eshemeta.vercel.app',
    githubUrl: 'https://github.com/dan-seng/fullstack-nextjs-ecommerce-app',
    featured: true
  },
  
  
  {
    id: 3,
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
    id: 4,
    title: 'Hotel Website',
    description: 'A hotel website built with React and TailwindCSS.',
    image: '/screenshots/hotel.png',
    technologies: ['React', 'TailwindCSS','Shadcn UI'],
    category: 'web',
    liveUrl: 'https://spdyhotel.vercel.app',
    githubUrl: 'https://github.com/dan-seng/hotel-website',
    featured: false
  },
  {
    id: 5,
    title: 'Substrack',
    description: 'A smart task management application with real-time updates, calendar view, and drag-and-drop functionality.',
    image: '/screenshots/substrack.png',
    technologies: ['NextJS', 'Express.js', 'TailwindCSS', 'JS', 'MongoDB'],
    category: 'web',
    liveUrl: 'https://substrackk.vercel.app/',
    githubUrl: 'https://github.com/dan-seng/todo-list-app',
    featured: true
  },
  {
    id: 6,
    title: 'Contact Manager API',
    description: 'This is the backend API for the MyContacts application, a contact management system with user authentication.',
    image: '/screenshots/contact-manager.png',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'dotenv'],
    category: 'web',
    liveUrl: '#',
    githubUrl: 'https://github.com/dan-seng/contact-manager/tree/main/mycontacts-backend',
    featured: false
  }

 /*
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
            gap: '0.6rem',
            color: '#000000',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '500',
            padding: '0.8rem 2rem',
            border: 'none',
            borderRadius: '50px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 50%, #00aa55 100%)',
            boxShadow: '0 4px 20px rgba(0, 255, 136, 0.4)',
            position: 'relative',
            overflow: 'hidden',
            zIndex: '1',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 255, 136, 0.6)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 255, 136, 0.4)';
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