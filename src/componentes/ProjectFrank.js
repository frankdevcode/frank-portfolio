import React from 'react';
import '../style-sheet/ProjectFrank.css';
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si';
import sitioWebFrank from '../imagenes/projects/frank/sitio-web-frank.jpg';

const ProjectFrank = () => {
  return (
    <div className="project-frank-container">
      <div className="project-banner">
        <img
          src={sitioWebFrank}
          alt="Captura del sitio web personal"
          className="project-frank-image-banner"
        />
      </div>

      <div className="project-content">
        <h2 className="project-title">Diseño y desarrollo del sitio web profesional Frank</h2>
        <p className="project-description">
          Este proyecto es la creación de un portafolio personal para mostrar mis habilidades como ingeniero de sistemas. El sitio fue desarrollado usando React para el frontend, GitHub Pages para el despliegue y CSS para la estilización. Es completamente responsivo y refleja un diseño moderno y minimalista, enfocado en la experiencia del usuario.
        </p>

        <div className="technologies">
          <h3>Tecnologías utilizadas</h3>
          <div className="technology-grid">
            <div className="technology-item">
              <SiHtml5 className="technology-icon" />
              <p>HTML5 fue usado para crear una estructura semántica y accesible.</p>
            </div>
            <div className="technology-item">
              <SiCss3 className="technology-icon" />
              <p>CSS3 se utilizó para diseñar una estética moderna y responsiva.</p>
            </div>
            <div className="technology-item">
              <SiJavascript className="technology-icon" />
              <p>JavaScript añadió dinamismo e interactividad al proyecto.</p>
            </div>
            <div className="technology-item">
              <SiReact className="technology-icon" />
              <p>React permitió crear componentes reutilizables y modulares.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFrank;
