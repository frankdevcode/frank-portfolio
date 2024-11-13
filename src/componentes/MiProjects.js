import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom
import '../style-sheet/MiProjects.css';
import { LiaArrowRightSolid } from 'react-icons/lia'; // Importar el ícono desde react-icons
import tarjetaImagenProyectoFrank from '../imagenes/projects/frank/tarjeta-imagen-proyecto-frank.jpg'; 
import tarjetaImagenProyectoPlataformaEmpresarial from '../imagenes/projects/empresarial/tarjeta-imagen-proyecto-plataforma-empresarial.jpg';
import tarjetaImagenProyectoApiEcommerce from '../imagenes/projects/api/tarjeta-imagen-proyecto-api-ecommerce.jpg';

export default function MiProjects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Sitio Web Frank",
      description: "Desarrollo de un sitio web personal utilizando React y CSS3, desplegado en GitHub Pages.",
      technologies: ["React", "CSS3", "GitHub Pages"],
      route: "/frank", // Ruta interna para React Router
      image: tarjetaImagenProyectoFrank
    },
    {
      id: 2,
      title: "Plataforma empresarial",
      description: "Plataforma diseñada para ecommerce con un enfoque en la experiencia del usuario.",
      technologies: ["React", "Node.js", "MongoDB"],
      route: "/ecommerce", // Ruta interna para React Router
      image: tarjetaImagenProyectoPlataformaEmpresarial
    },
    {
      id: 3,
      title: "API e-commerce",
      description: "Proyecto que busca desarrollar una interfaz de programación de aplicaciones para una tienda en línea.",
      technologies: ["Node.js", "MongoDB", "Express.js"],
      route: "/api", // Ruta interna para React Router
      image: tarjetaImagenProyectoApiEcommerce
    }
    
  ]);

  return (
    <div className='main-container-portfolio-frank'>
      <div className="portfolio-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={`Imagen del proyecto ${project.title}`} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">{tech}</span>
                ))}
              </div>
              <Link
                to={project.route} // Cambiar href por to para usar React Router
                className="project-link-mi-frank"
                aria-label={`Ver proyecto ${project.title}`}
              >
                Ver Proyecto
                <LiaArrowRightSolid className="arrow-icon" /> {/* Flecha */}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Segunda sección del portfolio */}
      <div className='section-two-portfolio-frank'>
        <h2 className='frank-title'>Tecnologías utilizadas en el desarrollo de este proyecto</h2>
        <p className='frank-description'>
          Estos proyectos fueron desarrollados utilizando tecnologías avanzadas para garantizar escalabilidad, eficiencia y una experiencia de usuario óptima.
        </p>
        
        <a
          href="https://discord.gg/j89QRebV"
          target="_blank"
          rel="noopener noreferrer"
          className="frank-community-button"
        >
          Únete a la Comunidad Developer
        </a>
      </div>
    </div>
  );
}
