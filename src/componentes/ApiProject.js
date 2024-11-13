import React from 'react';
import { SiPython, SiDjango, SiPostgresql, SiDocker, SiJest } from 'react-icons/si';
import '../style-sheet/ApiProject.css';

const ApiProject = () => {
  return (
    <div className='api-project-container'>
      <div className='project-header'>
        <h1 className='project-title'>Creación de una API potente y versátil para el comercio electrónico</h1>
        <p className='project-description'>
          Esta API ha sido diseñada para optimizar el rendimiento, la escalabilidad y la seguridad en el ámbito del comercio electrónico,
          aprovechando tecnologías de vanguardia.
        </p>
      </div>

      <div className='tech-section'>
        <h2 className='tech-title'>Tecnologías Utilizadas</h2>
        <div className='tech-grid'>
          <div className='tech-card-api-frank'>
            <SiPython className='tech-icon' />
            <h3>Python</h3>
            <p>
              Python es la base de nuestra API. Su legibilidad y la amplia gama de bibliotecas hacen que sea una opción ideal para aplicaciones
              web y APIs.
            </p>
          </div>

          <div className='tech-card-api-frank'>
            <SiDjango className='tech-icon' />
            <h3>Django</h3>
            <p>
              Django, un marco web robusto basado en Python, proporciona una estructura modular para nuestra API, siguiendo el patrón MVC.
            </p>
          </div>

          <div className='tech-card-api-frank'>
            <SiPostgresql className='tech-icon' />
            <h3>PostgreSQL</h3>
            <p>
              Utilizamos PostgreSQL como base de datos, garantizando la integridad de los datos y permitiendo una gestión eficiente de
              grandes volúmenes de información.
            </p>
          </div>

          <div className='tech-card-api-frank'>
            <SiDocker className='tech-icon' />
            <h3>Docker</h3>
            <p>
              Docker facilita la creación de entornos de desarrollo reproducibles, lo que permite un despliegue rápido y confiable de nuestra
              API en cualquier entorno.
            </p>
          </div>

          <div className='tech-card-api-frank'>
            <SiJest className='tech-icon' />
            <h3>Jest</h3>
            <p>
              Jest se utiliza para las pruebas unitarias, asegurando que todas las funcionalidades de la API se comporten correctamente y que
              el código sea robusto.
            </p>
          </div>
        </div>
      </div>

      <div className='project-footer'>
        {/* <button className='cta-button'>Explora el proyecto</button>*/}
      </div>
    </div>
  );
};

export default ApiProject;
