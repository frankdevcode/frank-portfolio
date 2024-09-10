import React, { useState } from 'react';
import '../style-sheet/Ecommerce.css';

// Importamos los iconos de React
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const Ecommerce = () => {
  // Definimos las tecnologías iniciales
  const initialTechnologies = [
    { icon: <SiCss3 className='icons-for-used-technologies-ecm' />, text: 'CSS3 - Para dar vida al diseño visual...' },
    // ... otras tecnologías
  ];

  // Estado para controlar si se deben mostrar los detalles
  const [showDetails, setShowDetails] = useState(false);

  // Función para alternar la visibilidad de los detalles al hacer clic en el botón
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return(
    <div className='ecommerce-project-main-container'>
      <div className='container-main-title-ecommerce'>
        <h1 className='main-title-ecommerce'>Desarrollo de una plataforma de comercio electrónico para impulsar el éxito empresarial</h1>
      </div>

      {/* Seccion 1 */}
      <div className='container-title-ecommerce'>
        <p className='ecommerce-paragraph line-height-ecm'>Este proyecto de comercio electrónico es una plataforma en línea innovadora y altamente funcional, diseñada para ofrecer una experiencia de compra excepcional a los usuarios y facilitar la gestión de productos y ventas a los propietarios de tiendas.</p>
        <p className='ecommerce-paragraph line-height-ecm'>Este proyecto ha sido desarrollado utilizando un conjunto sólido de tecnologías y herramientas de vanguardia, garantizando un rendimiento óptimo, escalabilidad y mantenibilidad.</p>
        <p className='ecommerce-paragraph line-height-ecm'>A continuación, se describen las principales tecnologías y herramientas utilizadas en el desarrollo de este proyecto:</p>
      </div>

      <div className='container-main-title-ecommerce'>
        <h2 className='main-title-ecommerce-two'>Tecnologías utilizadas</h2>
      </div>
      <div className='container-section-two-ecommerce-project'>
        <div className='section-information-container-ecm'>
          <div className='container-name-label-ecm'>
            <p className='ecm-text-label'>HTML</p>
          </div>
          <div className='container-icons-in-projects-ecm'>
            <SiHtml5 className='icons-for-used-technologies-ecm' />
          </div>
          <div className='project-text-container-ecm'>
            <p className='ecommerce-paragraph line-height-ecm'>La estructura básica y el contenido de la plataforma han sido creados utilizando HTML5, lo que garantiza una semántica adecuada, compatibilidad con los estándares actuales y una base sólida para el diseño y la funcionalidad.</p>
          </div>
        </div>

        <div className='section-information-container-ecm'>
          <div className='container-name-label-ecm'>
            <p className='ecm-text-label'>CSS</p>
          </div>
          <div className='container-icons-in-projects-ecm'>
            <SiCss3 className='icons-for-used-technologies-ecm' />
          </div>        
          <div className='project-text-container-ecm'>
            <p className='ecommerce-paragraph line-height-ecm'>Para dar vida al diseño visual y proporcionar una apariencia atractiva y moderna, se ha empleado CSS3. Se han implementado animaciones, transiciones y efectos visuales que mejoran la interacción y la experiencia del usuario.</p>
          </div>
        </div>
      </div>

      {/* Boton ver mas categorias */}
      <div>
        <div className='ecommerce-project-button'>
          <button className='button-ecommerce-ecm' onClick={handleToggleDetails}>
            {showDetails ? 'Ver menos' : 'Ver más'}
          </button>
        </div>

        {showDetails && (
          <div className='main-drop-down-information-container'>
            {initialTechnologies.map((tech, index) => (
              <div className='dropdown-container-icons'>
                <div className='container-name-label-ecm'>
                  <p className='ecm-text-label'>JavaScript</p>
                </div>
                <div className='drop-down-used-technologies-icons'>
                  <SiJavascript className='icons-for-used-technologies-ecm' />
                </div>
                <div className='project-text-container-ecm'>
                  <p className='ecommerce-paragraph line-height-ecm'>Para agregar funcionalidades dinámicas e interactivas a la plataforma, se ha utilizado JavaScript. Esto permite crear elementos como menús desplegables, carruseles de imágenes y formularios de registro, entre otros, que enriquecen la navegación y facilitan la interacción del usuario con el contenido.</p>
                </div>
              </div>
            ))}

            {/* Nueva sección oculta con la tecnología de JavaScript */}
            <div className='dropdown-container-icons'>
              <div className='container-name-label-ecm'>
                <p className='ecm-text-label'>React</p>
              </div>
              <div className='drop-down-used-technologies-icons'>
                <SiReact className='icons-for-used-technologies-ecm' />
              </div>
              <div className='project-text-container-ecm'>
                <p className='ecommerce-paragraph line-height-ecm'>Como biblioteca de JavaScript para la creación de interfaces de usuario, se ha utilizado React para desarrollar componentes reutilizables y modulares. Esto agiliza el proceso de desarrollo, mejora el rendimiento de la plataforma y facilita su mantenimiento y escalabilidad.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Seccion tres */}
      <div className='container-for-the-other-technologies-section'>
        <div className='container-title-other-tech'>
          <h2 className='title-ecommerce-two'>Otras tecnologías adicionales</h2>
        </div>
        <div className='container-sections-other-tech'>
          <div className='container-name-label-ecm'>
            <p className='ecm-text-label'>GiT</p>
          </div>
          <div className='container-icons-in-projects-ecm'>
            <SiGit className='icons-for-used-technologies-ecm' />
          </div>
          <p className='ecommerce-paragraph line-height-ecm'>Como sistema de control de versiones, GIT nos permite administrar y realizar un seguimiento de los cambios en el código fuente de la plataforma.</p>
        </div>

        <div className='container-sections-other-tech'>
          <div className='container-name-label-ecm'>
            <p className='ecm-text-label'>GitHub</p>
          </div>
          <div className='container-icons-in-projects-ecm'>
            <SiGithub className='icons-for-used-technologies-ecm' />
          </div>
          <p className='ecommerce-paragraph line-height-ecm'>Como plataforma de alojamiento de repositorios de código, GitHub nos ofrece un entorno seguro y colaborativo para hospedar nuestro proyecto de comercio electrónico.</p>
        </div>

        <div className='container-sections-other-tech'>
          <div className='container-name-label-ecm'>
            <p className='ecm-text-label'>SQL</p>
          </div>
          <div className='container-icons-in-projects-ecm'>
            <SiMysql className='icons-for-used-technologies-ecm' />
          </div>
          <p className='ecommerce-paragraph line-height-ecm'>Como sistema de gestión de bases de datos relacionales, MySQL es la herramienta elegida para almacenar y administrar la información de nuestra plataforma de comercio electrónico.</p>
        </div>              
      </div>
    </div>
  );
};

export default Ecommerce;