// ProjectsSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { PiCodeLight, PiComputerTowerThin } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { AiOutlineRight } from "react-icons/ai"; // Asegúrate de que el icono está importado
import '../style-sheet/ProjectsSection.css';

const projectData = [
  { icon: <PiCodeLight />, title: 'Sitio web Frank', link: '/frank', description: 'Diseñada para mostrar la amplia experiencia y habilidades de Francisco Perlaza, Ingeniero de Sistemas apasionado por la tecnología y la innovación.' },
  { icon: <PiComputerTowerThin />, title: 'Plataforma empresarial', link: '/ecommerce', description: 'Proyecto que optimiza la gestión operativa, mejorando la eficiencia con herramientas avanzadas.' },
  { icon: <CiStreamOn />, title: 'API e-commerce', link: '/api', description: 'Ofrece una experiencia de compra excepcional para usuarios y facilita la gestión de productos.' }
];

const ProjectsSection = () => (
  <div className='projects-section'>
    <h2 className='title-featured-projects-mobile'>Descubre los proyectos destacados</h2>
    {projectData.map((project, index) => (
      <Link to={project.link} key={index} className='project-link'>
        <div className='project-item'>
          <div className='icon-title-container'>
            {project.icon}
            <h3 className='project-title'>{project.title}</h3>
          </div>
          <p className='project-description'>{project.description}</p>
          <div className='project-footer'>
            <span className='project-text'>Ir al proyecto</span>
            <AiOutlineRight className='arrow-icon-mobile' />
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default ProjectsSection;
