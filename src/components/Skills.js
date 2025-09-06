import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  const skillCategories = {
    web: {
      name: 'Web Development',
      description: 'Frontend and backend technologies for building modern web applications.',
      skills: [
        { name: 'React', description: 'Modern frontend framework', icon: '⚛️', level: 92 },
        { name: 'Next.js', description: 'Full-stack React framework', icon: '⚡', level: 85 },
        { name: 'Node.js', description: 'JavaScript runtime environment', icon: '🟢', level: 88 },
        { name: 'TypeScript', description: 'Typed JavaScript superset', icon: '🔷', level: 80 },
        { name: 'JavaScript', description: 'Core web programming language', icon: '🟡', level: 95 },
        { name: 'HTML/CSS', description: 'Web markup and styling', icon: '🌐', level: 90 },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: '🎨', level: 90 },
        { name: 'Express', description: 'Web application framework', icon: '🚀', level: 85 },
        { name: 'MongoDB', description: 'NoSQL database', icon: '🍃', level: 80 },
        { name: 'PostgreSQL', description: 'Relational database', icon: '🐘', level: 75 }
      ]
    },
    mobile: {
      name: 'Mobile Development',
      description: 'Skills for building native and cross-platform mobile applications.',
      skills: [
        { name: 'Flutter', description: 'Cross-platform mobile app development', icon: '📱', level: 90 },
        { name: 'Dart', description: 'Programming language for Flutter', icon: '🎯', level: 85 },
        { name: 'Firebase', description: 'Backend services for mobile apps', icon: '🔥', level: 88 },
        { name: 'Android', description: 'Native Android development', icon: '🤖', level: 75 },
        { name: 'iOS', description: 'Native iOS development', icon: '🍎', level: 70 },
        { name: 'React Native', description: 'Cross-platform mobile development', icon: '⚛️', level: 80 },
        { name: 'Kotlin', description: 'Modern Android development', icon: '🔶', level: 70 },
        { name: 'Swift', description: 'iOS development language', icon: '🕊️', level: 65 },
        { name: 'Xamarin', description: 'Cross-platform mobile development', icon: '📱', level: 80 }
      ]
    },
    desktop: {
      name: 'Desktop Applications',
      description: 'Building robust desktop applications and software solutions.',
      skills: [
        { name: 'C#', description: 'Modern programming language', icon: '💎', level: 85 },
        { name: '.NET', description: 'Microsoft development platform', icon: '🔷', level: 80 },
        { name: 'WPF', description: 'Windows Presentation Foundation', icon: '🪟', level: 75 },
        { name: 'WinForms', description: 'Windows Forms applications', icon: '📋', level: 80 },
        { name: 'Java', description: 'Cross-platform development', icon: '☕', level: 85 },
        { name: 'Python', description: 'Versatile programming language', icon: '🐍', level: 80 },
        { name: 'C++', description: 'System programming language', icon: '⚡', level: 70 },
        { name: 'SQL', description: 'Database management', icon: '🗄️', level: 85 },
        { name: 'Electron', description: 'Cross-platform desktop apps', icon: '⚛️', level: 75 }
      ]
    },
    others: {
      name: 'Other Skills',
      description: 'Additional technologies and tools for comprehensive development.',
      skills: [
        { name: 'Git', description: 'Version control system', icon: '📚', level: 90 },
        { name: 'Docker', description: 'Containerization platform', icon: '🐳', level: 75 },
        { name: 'AWS', description: 'Cloud computing services', icon: '☁️', level: 70 },
        { name: 'Linux', description: 'Operating system administration', icon: '🐧', level: 80 },
        { name: 'REST APIs', description: 'Web service architecture', icon: '🔌', level: 85 },
        { name: 'GraphQL', description: 'Modern API query language', icon: '🔍', level: 75 },
        { name: 'CI/CD', description: 'Continuous integration/deployment', icon: '🔄', level: 80 },
        { name: 'UI/UX Design', description: 'User interface design', icon: '🎨', level: 75 },
        { name: 'Agile', description: 'Development methodology', icon: '🎯', level: 85 },
        { name: 'Testing', description: 'Software testing practices', icon: '🧪', level: 80 }
      ]
    }
  };

  const SkillCard = ({ skill }) => (
    <div className="skill-card">
      <div className="skill-content">
        <div className="skill-icon">{skill.icon}</div>
        <div className="skill-info">
          <h4 className="skill-title">{skill.name}</h4>
          <p className="skill-description">{skill.description}</p>
        </div>
      </div>
      <div className="skill-progress-bar">
        <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
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
          <div className="category-info">
            <h3 className="category-title">{skillCategories[activeCategory].name}</h3>
            <p className="category-description">{skillCategories[activeCategory].description}</p>
          </div>
          
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

