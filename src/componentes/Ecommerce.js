import React, { useState } from 'react';
import '../style-sheet/Ecommerce.css';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiGithub, SiMysql } from 'react-icons/si';

const Ecommerce = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="ecommerce-container">
      <header className="ecommerce-header">
        <h1>Desarrollo de una Plataforma de Comercio Electrónico</h1>
        <p>Este proyecto ofrece una plataforma de comercio en línea innovadora y profesional, desarrollada para mejorar la gestión de productos y ventas.</p>
      </header>

      <section className="technologies-section">
        <h2>Tecnologías Utilizadas</h2>
        <div className="tech-grid">
          <div className="tech-card">
            <SiHtml5 className="tech-icon" />
            <h3>HTML5</h3>
            <p>La estructura de la plataforma fue diseñada con HTML5, garantizando semántica y compatibilidad.</p>
          </div>
          <div className="tech-card">
            <SiCss3 className="tech-icon" />
            <h3>CSS3</h3>
            <p>Se utilizó CSS3 para estilizar la plataforma con un diseño moderno y atractivo, implementando animaciones y transiciones.</p>
          </div>
          <div className="tech-card">
            <SiJavascript className="tech-icon" />
            <h3>JavaScript</h3>
            <p>JavaScript añade interactividad, permitiendo funcionalidades como menús dinámicos y carruseles.</p>
          </div>
          <div className="tech-card">
            <SiReact className="tech-icon" />
            <h3>React</h3>
            <p>Con React, se crearon componentes reutilizables, mejorando la escalabilidad y el mantenimiento de la plataforma.</p>
          </div>
        </div>
        <button className="toggle-button" onClick={handleToggleDetails}>
          {showDetails ? 'Ver menos' : 'Ver más'}
        </button>
        {showDetails && (
          <div className="more-tech">
            <div className="tech-card">
              <SiGit className="tech-icon" />
              <h3>Git</h3>
              <p>Git permitió controlar versiones y gestionar cambios del código eficientemente.</p>
            </div>
            <div className="tech-card">
              <SiGithub className="tech-icon" />
              <h3>GitHub</h3>
              <p>El proyecto está alojado en GitHub, proporcionando colaboración y control de versiones.</p>
            </div>
            <div className="tech-card">
              <SiMysql className="tech-icon" />
              <h3>MySQL</h3>
              <p>Se utilizó MySQL para la gestión de la base de datos, asegurando el almacenamiento adecuado de la información.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Ecommerce;
