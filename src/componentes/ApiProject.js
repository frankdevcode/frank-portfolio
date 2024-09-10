import React from 'react';
import '../style-sheet/ApiProject.css';

// Importamos los iconos de React
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";

const ApiProject = () => {

  return(
    <div className='main-container-app-project'>
      <div className='container-main-title-app'>
        <h1 className='main-title-app'>Creación de una API potente y versátil para el comercio electrónico</h1>
      </div>
      <div className='container-title-app'>
        <p className='app-paragraph app-text-height'>Nuestra API de comercio electrónico ha sido desarrollada con un enfoque en la eficiencia, la escalabilidad y la seguridad, utilizando un conjunto de tecnologías y herramientas de vanguardia.</p>
        <p className='app-paragraph app-text-height'>Entre las principales tecnologías empleadas en este proyecto se encuentran Python, Django y otras herramientas complementarias que garantizan un rendimiento óptimo</p>
      </div>

      <div className='container-project-app-sections'>
        <div className='sections-for-the-app-project'>
          <div className='container-for-label'>
            <p className='class-name-for-label'>Python</p>
          </div>
          <div className='container-for-project-icons'>
            <SiPython className='class-for-used-icons' />
          </div>
          <div className='app-text-section-container'>
            <p className='app-paragraph app-text-height'>Como lenguaje de programación de alto nivel, Python es la base de la API. Su sintaxis clara, legible y fácil de mantener, junto con su amplia gama de bibliotecas y marcos, lo convierten en una opción ideal para el desarrollo de aplicaciones web y APIs.</p>
          </div>
        </div>

        <div className='sections-for-the-app-project'>
          <div className='container-for-label'>
            <p className='class-name-for-label'>Django</p>
          </div>
          <div className='container-for-project-icons'>
            <SiDjango className='class-for-used-icons' />
          </div>
          <div className='app-text-section-container'>
            <p className='app-paragraph app-text-height'>Como marco web de alto nivel construido en Python, Django proporciona una estructura sólida y modular para nuestra API de comercio electrónico. Django sigue el patrón de diseño Modelo-Vista-Controlador (MVC) y ofrece una amplia gama de características integradas.</p>
          </div>
        </div>

        
      </div>

    </div>
  );
};

export default ApiProject;