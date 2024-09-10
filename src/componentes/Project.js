// Proyect.js hace parte del proyecto de Frank
import React from 'react';
import '../style-sheet/Project.css';

// Importamos los iconos de React
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";

function Project() {
  return(
    <div className='main-container-frank-project'>
      <div className='container-main-title-project'>
        <h1 className='main-title-project'>Diseño y desarrollo del sitio web profesional Frank</h1>
      </div>
      {/* Seccion 1 */}
      <div className='container-title-project'>
        <p className='project-paragraph line-height'>El proyecto de página web Frank propiedad de Francisco Perlaza, un apasionado Ingeniero de Sistemas, ha sido diseñado y desarrollado con el objetivo de mostrar su amplia experiencia y habilidades en el campo de la tecnología y la innovación.</p>
        <p className='project-paragraph line-height'>Esta página web personalizada no solo sirve como un portafolio digital para Francisco, sino también como una plataforma para compartir sus conocimientos y conectar con otros profesionales del sector.</p>
      </div>

      {/* Secciones columnas */}
      <div className='container-frank-project'>
        <div className='container-sections-frank-project transform-column-one'>
          <h2 className="section-title">Descripción del Proyecto</h2>
        </div>

        <div className='container-sections-frank-project'>
          <h2 className="section-title">Descripción del Proyecto</h2>
        </div>
      </div>

      <div className='container-main-title-project'>
        <h2 className='main-title-project-two'>Tecnologías utilizadas en el desarrollo de este proyecto</h2>
      </div>
      <div className='container-section-two-frank-project'>
        <div className='section-information-container'>
          <div className='container-icons-in-projects'>
            <SiHtml5 className='icons-for-used-technologies' />
          </div>
          <div className='project-text-container'>
            <p className='project-paragraph line-height'>Como base estructural de la página web, se ha empleado HTML5 para crear un contenido semántico, accesible y compatible con los estándares actuales. Esto permite una mejor indexación por parte de los motores de búsqueda y facilita la navegación para los usuarios.</p>
          </div>
        </div>

        <div className='section-information-container'>
          <div className='container-icons-in-projects'>
            <SiCss3 className='icons-for-used-technologies' />
          </div>
          <div className='project-text-container'>
            <p className='project-paragraph line-height'>El diseño visual y la estética de la página web han sido cuidadosamente elaborados mediante CSS3, brindando un aspecto moderno, limpio y atractivo. Se han implementado animaciones, transiciones y efectos visuales que mejoran la interacción y la experiencia del usuario. Además, se ha tenido en cuenta la responsividad del diseño, asegurando que la página web se adapte a diferentes dispositivos y tamaños de pantalla.</p>
          </div>
        </div>
      </div>

      {/* Seccion dos */}
      <div className='container-section-three-frank-project'>
        <div className='section-information-container'>
          <div className='container-icons-in-projects'>
            <SiJavascript className='icons-for-used-technologies' />
          </div>
          <div className='project-text-container'>
            <p className='project-paragraph line-height'>Para añadir funcionalidades dinámicas e interactivas a la página web, se ha empleado JavaScript. Esto permite crear elementos como menús desplegables, formularios de contacto y galerías de imágenes, entre otros, que enriquecen la navegación y facilitan la interacción del usuario con el contenido.</p>
          </div>
        </div>

        <div className='section-information-container'>
          <div className='container-icons-in-projects'>
            <SiReact className='icons-for-used-technologies' />
          </div>
          <div className='project-text-container'>
            <p className='project-paragraph line-height'>Como biblioteca de JavaScript para la creación de interfaces de usuario, se ha utilizado React para desarrollar componentes reutilizables y modulares. Esto agiliza el proceso de desarrollo, mejora el rendimiento de la página web y facilita su mantenimiento y escalabilidad.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Project;