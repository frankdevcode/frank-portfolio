// SkillsSection.js
import React, { useState } from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiGithub, SiMysql } from "react-icons/si";
import '../style-sheet/SkillsSection.css';

const skillsData = [
  { icon: <SiHtml5 />, description: 'HTML5 - Lenguaje de marcado para estructurar contenido en la web.' },
  { icon: <SiCss3 />, description: 'CSS3 - Controla el estilo y el diseño de la web.' },
  { icon: <SiJavascript />, description: 'JavaScript - Agrega interactividad y funcionalidades.' },
  { icon: <SiReact />, description: 'React - Biblioteca para crear interfaces de usuario.' },
  { icon: <SiGit />, description: 'Git - Sistema de control de versiones distribuido.' },
  { icon: <SiGithub />, description: 'GitHub - Plataforma para colaborar en proyectos y gestionar el código.' },
  { icon: <SiMysql />, description: 'MySQL - Gestión de bases de datos relacionales.' },
];

const SkillsSection = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='skills-section'>
      <h2 className='section-title-mobile-tech'>Habilidades y tecnologías</h2>
      {skillsData.slice(0, showDetails ? skillsData.length : 3).map((skill, index) => (
        <div key={index} className='skill-item'>
          <div className='skill-icon'>{skill.icon}</div>
          <p className='skill-description'>{skill.description}</p>
        </div>
      ))}
      <button className='toggle-details-btn' onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Ver menos' : 'Ver más'}
      </button>
    </div>
  );
};

export default SkillsSection;
