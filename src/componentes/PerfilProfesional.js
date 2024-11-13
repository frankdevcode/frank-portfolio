// src/PerfilProfesional.js
import React from 'react';
import '../style-sheet/PerfilProfesional.css';
import placeholderPhoto from '../imagenes/placeholder-avatar.png'; // Imagen de avatar predeterminada
import bannerImage from '../imagenes/banner-prueba-perfil-pro.jpg'; // Imagen de banner

const PerfilProfesional = () => {
  return (
    <div className="perfil-container">
      {/* Sección 1: Banner personalizable */}
      <div className="perfil-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        {/* Imagen de banner como fondo */}
      </div>

      {/* Contenedor de columnas */}
      <div className="perfil-columns">
        {/* Columna izquierda */}
        <div className="perfil-column-left">
          <div className="perfil-photo-container">
            <img src={placeholderPhoto} alt="Francisco Perlaza" className="profile-photo" />
          </div>
          <div className="perfil-details">
            <p className="profile-professionn">Ingeniero de Sistemas</p>
            <p><strong>Ubicación:</strong> Cali, Colombia</p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/franciscoperlaza" target="_blank" rel="noopener noreferrer">@franciscoperlaza</a></p>
            <p><strong>Twitter (X):</strong> <a href="https://x.com/franklaza" target="_blank" rel="noopener noreferrer">@franklaza</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/frankdevcode" target="_blank" rel="noopener noreferrer">@frankdevcode</a></p>
          </div>

          {/* Seccion de idiomas */}
          <div className="language-section-container">
            <h3>Idiomas</h3>
            <ul>
              <li>Español - Nativo.</li>
              <li>Inglés - Intermedio (en proceso de mejora).</li>
            </ul>
          </div>

          {/* Sección de solicitar CV */}
          <div className="container-request-cv">
            <h3>Solicitar CV avanzado</h3>
            <p>Si deseas obtener una copia completa del CV detallado, haz clic en el botón a continuación y envíame tu solicitud. Estaré encantado de compartir más información sobre mi experiencia y habilidades.</p>
            <button className="btn-request-cv" onClick={() => window.open("https://twitter.com/franklaza", "_blank")}>Solicitar CV</button>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="perfil-column-right">
          {/* Sección de nombre */}
          <section className="perfil-section">
            <h2>Francisco Perlaza</h2>
            <p className="profession-right-column">Ingeniero de Sistemas | Desarrollador de Software y Desarrollador Web</p>
            <h3>PERFIL PROFESIONAL</h3>
            <p>Ingeniero de Sistemas especializado en desarrollo de software y aplicaciones web. Experto en crear soluciones robustas y escalables, con habilidades avanzadas en programación y tecnologías web modernas, enfocado en la innovación y la eficiencia en cada proyecto.</p>
          </section>

          {/* Sección de habilidades */}
          <section className="perfil-section">
            <h3>HABILIDADES</h3>
            <ul className="skill-list">
              <li>Desarrollo Frontend: React, HTML, CSS, JavaScript</li>
              <li>Desarrollo Backend: Node.js, Express</li>
              <li>Bases de Datos: MongoDB, MySQL</li>
              <li>Control de Versiones: Git, GitHub</li>
              <li>Cloud: AWS, Azure</li>
            </ul>
          </section>

          {/* Sección de experiencia laboral */}
          <section className="perfil-section">
            <h3 className='global-professions'>EXPERIENCIA LABORAL</h3>
            <div className="experience">
              <h4>Ingeniero de Sistemas en Safonic</h4>
              <p>MARZO  DE 2020 - NOV  DE 2023</p>
              <ul>
                <li>Lideré el desarrollo de plataformas web utilizando React, Node.js y MySQL, mejorando la eficiencia en un 20%.</li>
                <li>Implementé soluciones de inteligencia artificial con Python que optimizan la gestión de datos en un 15%.</li>
                <li>Coordiné equipos multifuncionales en proyectos de alto impacto, asegurando la entrega oportuna de soluciones tecnológicas.</li>
                <li>Tecnologías: React, Node.js, MySQL, Python.</li>
              </ul>
            </div>
            <div className="experience">
              <h3>EDUCACIÓN</h3>
              <h4 className='global-professions'>Ingeniería de Sistemas — Universidad Uniremington, Cali</h4>
              <p>ENERO DE 2020 - FEBRERO DE 2026</p>
              <ul>
                <li>Participación en proyectos de investigación en inteligencia artificial.</li>
                <li>Desarrollo de aplicaciones web como parte de trabajos prácticos.</li>
              </ul>
            </div>
          </section>

          {/* Sección de proyectos destacados */}
          <section className="perfil-section">
            <h3>PROYECTOS DESTACADOS</h3>
            <div className="project">
              <h4 className='global-professions'>Tienda de Tecnología en Línea</h4>
              <p>Proyecto de comercio electrónico desarrollado con React, Node.js y MongoDB.</p>
            </div>
            <div className="project">
              <h4 className='global-professions'>Herramienta de Edición de Fotos y Videos</h4>
              <p>Web app de diseño gráfico creada para editar imágenes.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PerfilProfesional;
