import React, { useState } from 'react';
import './Skills.css';
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGithub, 
  FaAws, FaLinux, FaFigma, FaMobileAlt, 
  FaJava, FaPython, FaDatabase, FaServer, FaGitAlt
} from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiKotlin,
  SiCplusplus, SiCsharp, SiMongodb, SiPostgresql, SiGraphql,
  SiTypescript, SiNextdotjs, SiDocker, SiTestinglibrary, SiJavascript, SiMicrosoftazure
} from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { BsGit } from 'react-icons/bs';
import { TbBrandReactNative } from 'react-icons/tb';
import { GiSpiderWeb, GiBrain } from 'react-icons/gi';
import { MdOutlineDesignServices, MdOutlineMobileFriendly } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  const skillCategories = {
    web: {
      name: 'Web Development',
      description: 'Frontend and backend technologies for building modern web applications.',
      skills: [
        { name: 'React', description: 'Modern frontend framework', icon: <FaReact/>, level: 92 },
        { name: 'Next.js', description: 'Full-stack React framework', icon: <SiNextdotjs/>, level: 85 },
        { name: 'Node.js', description: 'JavaScript runtime environment', icon: <FaNodeJs/>, level: 88 },
        { name: 'TypeScript', description: 'Typed JavaScript superset', icon: <SiTypescript/>, level: 80 },
        { name: 'JavaScript', description: 'Core web programming language', icon: <FaJs/>, level: 95 },
        { name: 'HTML/CSS', description: 'Web markup and styling', icon: <FaHtml5/>, level: 90 },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: <SiTailwindcss/>, level: 90 },
        { name: 'Express', description: 'Web application framework', icon: <SiExpress/>, level: 75 },
        { name: 'MongoDB', description: 'NoSQL database', icon: <SiMongodb/>, level: 80 },
        { name: 'PostgreSQL', description: 'Relational database', icon: <SiPostgresql/>, level: 50 }
      ]
    },
    mobile: {
      name: 'Mobile Development',
      description: 'Skills for building native and cross-platform mobile applications.',
      skills: [
       // { name: 'Flutter', description: 'Cross-platform mobile app development', icon: <SiFlutter className='flutter-icon'/>, level: 10 },
       // { name: 'Firebase', description: 'Backend services for mobile apps', icon: <SiFirebase/>, level: 88 },
        { name: 'React Native', description: 'Cross-platform mobile development', icon: <TbBrandReactNative/>, level: 40 },
        { name: 'Kotlin', description: 'Modern Android development', icon:<SiKotlin/>, level: 30 },
        { name: 'Xamarin', description: 'Cross-platform mobile development', icon: <FaMobileAlt/>, level: 10 }
      ]
    },
    desktop: {
      name: 'Desktop Applications',
      description: 'Building robust desktop applications and software solutions.',
      skills: [
       // { name: 'C#', description: 'Modern programming language', icon:<SiCsharp/>, level: 85 },
       // { name: '.NET', description: 'Microsoft development platform', icon: '🔷', level: 80 },
        { name: 'Java', description: 'Cross-platform development', icon:<FaJava/>, level: 85 },
        { name: 'Python', description: 'Versatile programming language', icon:<FaPython/>, level: 80 },
        { name: 'C++', description: 'System programming language', icon:<SiCplusplus/>, level: 70 },
        { name: 'SQL', description: 'Database management', icon:<FaDatabase/>, level: 85 },
     ]
    },
    others: {
      name: 'Other Skills',
      description: 'Additional technologies and tools for comprehensive development.',
      skills: [
        { name: 'Git', description: 'Version control system', icon:<FaGitAlt/>, level: 90 },
       // { name: 'Docker', description: 'Containerization platform', icon: '🐳', level: 75 },
        { name: 'AWS', description: 'Cloud computing services', icon:<FaAws/>, level: 70 },
        { name: 'Linux', description: 'Operating system administration', icon:<FaLinux/>, level: 80 },
        { name: 'REST APIs', description: 'Web service architecture', icon:<FaServer/>, level: 85 },
        //{ name: 'GraphQL', description: 'Modern API query language', icon: '🔍', level: 75 },
        //{ name: 'CI/CD', description: 'Continuous integration/deployment', icon: '🔄', level: 80 },
        { name: 'UI/UX Design', description: 'User interface design', icon: <FaFigma/>, level: 75 },
        { name: 'Agile', description: 'Development methodology', icon: <DiScrum/>, level: 85 },
        { name: 'Testing', description: 'Software testing practices', icon: <SiTestinglibrary/>, level: 80 }
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

