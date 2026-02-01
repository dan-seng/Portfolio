import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  const skillCategories = {
    web: {
      name: 'Web Development',
      description: 'Frontend and backend technologies for building modern web applications.',
      skills: [
        { name: 'React',  image: '/images/skills/react.gif'},
        { name: 'Next.js',  image: '/images/skills/next-js.gif'},
        { name: 'Node.js', image: '/images/skills/node.gif'},
        { name: 'TypeScript', image: '/images/skills/ts.gif'},
        { name: 'JavaScript',  image: '/images/skills/js.gif'},
        { name: 'HTML',  image: '/images/skills/html.gif'},
        { name: 'CSS',  image: '/images/skills/css.webp'},
        { name: 'Tailwind CSS', image: '/images/skills/tailwind.gif'},
        { name: 'Express', image: '/images/skills/express.png'},
        { name: 'MongoDB', image: '/images/skills/mongodb.gif'},
        { name: 'PostgreSQL', image: '/images/skills/postgres.gif'},
        { name: 'VueJS',  image: '/images/skills/vuejs.gif'},
        
      ]
    },
    mobile: {
      name: 'Mobile Development',
      description: 'Skills for building native and cross-platform mobile applications.',
      skills: [
        { name: 'React Native', image: '/images/skills/react.gif'},
       ]
    },
    desktop: {
      name: 'Desktop Applications',
      description: 'Building robust desktop applications and software solutions.',
      skills: [
        { name: 'Java', image: '/images/skills/java.gif'},
        { name: 'Python', image: '/images/skills/python.gif'},
        { name: 'C++', image: '/images/skills/c++.gif'},
        { name: 'SQL', image: '/images/skills/sql.gif'},
     ]
    },
    others: {
      name: 'Other Skills',
      description: 'Additional technologies and tools for comprehensive development.',
      skills: [
        { name: 'Git', image: '/images/skills/git.gif'},
        { name: 'AWS', image: '/images/skills/aws.gif'},
        { name: 'Linux', image: '/images/skills/linux.gif'},
        { name: 'VS Code', image: '/images/skills/vscoode.png'},
        { name: 'Figma', image: '/images/skills/figma.gif'},
        { name: 'Github', image: '/images/skills/github.gif'},
        { name: 'SQL', image: '/images/skills/sql.gif'}
      ]
    }
  };

  const SkillCard = ({ skill }) => (
    <div className="skill-card">
      <div className="skill-content">
        <div className="skill-icon">
          <img 
            src={skill.image} 
            alt={skill.name} 
            className="skill-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/skills/default.png';
            }}
          />
        </div>
        <div className="skill-info">
          <h4 className="skill-title">{skill.name}</h4>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            I've developed expertise across multiple platforms and technologies, allowing me to create comprehensive solutions from concept to deployment.
          </p>
        </div>

        <div className="skills-navigation">
          <button
            className={`nav-category ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('web')}
          >
            Web
          </button>
          <button
            className={`nav-category ${activeCategory === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mobile')}
          >
            Mobile
          </button>
          <button
            className={`nav-category ${activeCategory === 'desktop' ? 'active' : ''}`}
            onClick={() => setActiveCategory('desktop')}
          >
            Desktop
          </button>
          <button
            className={`nav-category ${activeCategory === 'others' ? 'active' : ''}`}
            onClick={() => setActiveCategory('others')}
          >
            Others
          </button>
        </div>

        <div className="skills-content">
         
          <div className="skills-grid">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;