// Importa React y el hook useState
import React, { useState } from 'react';
import '../style-sheet/MainContentMobile.css';
import { Link } from 'react-router-dom';

// Importamos los iconos de React
import { AiOutlineRight } from "react-icons/ai";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import { PiCodeLight } from "react-icons/pi";
import { PiComputerTowerThin } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";

// Importa las imágenes desde la carpeta de imagenes
import imagenLogoUniremington from '../imagenes/imagen-logo-remigton.jpg';
import imagenLogoCisco from '../imagenes/imagen-logo-cisco.jpg';
import imagenLogoEdteam from '../imagenes/imagen-logo-edteam.jpg';
import imagenLogoPlatzi from '../imagenes/imagen-logo-platzi.jpg';
import imagenLogoSena from '../imagenes/imagen-logo-sena.jpg';

// Define un array con la información que se mostrará en la sección de educación
const informaciones = [
  "Ingeniero de Sistemas",
  "Python Essentials",
  "Introducción a la programación orientada a objetos",
  "Inteligencia artificial para el trabajo",
  "Bases de datos generalidades y sistemas de gestión",
  "Bases de datos institucionales",
  "Windows básico",
  "Estrategias para aprender inglés"
];

// Define un array con las URLs de las imágenes
const imagenes = [
  imagenLogoUniremington, 
  imagenLogoCisco, 
  imagenLogoEdteam, 
  imagenLogoPlatzi, 
  imagenLogoSena, 
  imagenLogoUniremington, 
  imagenLogoSena, 
  imagenLogoPlatzi
];

// Componente principal
const MainContentMobile = () => {
  // Estado para controlar qué imagen se mostrará en el banner
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [mostrarBanner, setMostrarBanner] = useState(false);

  // Función para manejar el clic en un texto
  const handleTextoClick = (index) => {
    setImagenSeleccionada(imagenes[index]);
    setMostrarBanner(true); // Muestra el banner con la imagen seleccionada
  };

  // Función para cerrar el banner
  const cerrarBanner = () => {
    setMostrarBanner(false); // Oculta el banner
  };

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

  // Seccion para  cambio de imagenes en el home
  // Define el estado para almacenar la URL de la imagen de vista previa
  const [imagenVistaPrevia, setImagenVistaPrevia] = useState(imagenes[0]);
  const [seleccionado, setSeleccionado] = useState(null); // Estado para almacenar el índice de la información seleccionada

  // Función para cambiar la imagen de vista previa al pasar el ratón sobre una información
  const mostrarVistaPrevia = (imagen, index) => {
    setImagenVistaPrevia(imagen);
    setSeleccionado(index); // Actualiza el estado al pasar el ratón sobre el contenedor de información
  };
  

  return (
    <div className='main-container-content-home-mobile'>
      <div className='container-title-home-mobile'>
        <h2 className='main-home-title-mobile'>Descubre los proyectos destacados</h2>
      </div>

      {/* Secion 1 */}
      <div className='mobile-container-home-sections'>
        <div className='mobile-subcontainer-contents-home'>
          <Link to='/frank' className='project-link'>
            <div className='project-column'>
              <div className='title-icon-container'>
                <PiCodeLight className='project-icon' />
                <h2 className='title-sections-home'>Sitio web Frank</h2>
              </div>
              <p className='text-sections-home'>Diseñada para mostrar la amplia experiencia y habilidades de Francisco Perlaza, Ingeniero de Sistemas apasionado por la tecnología y la innovación.</p>
              <div className='container-for-start-arrows'>
                <AiOutlineRight className='home-plate-arrows' />
              </div>
            </div>
          </Link>
        </div>
        <div className='mobile-subcontainer-contents-home'>
          <Link to='/ecommerce' className='project-link'>
            <div className='project-column'>
              <div className='title-icon-container'>
                <PiComputerTowerThin className='project-icon' />
                <h2 className='title-sections-home'>Plataforma empresarial</h2>
              </div>
              <p className='text-sections-home'>Proyecto innovador que optimiza la gestión operativa, mejorando la eficiencia con herramientas avanzadas para la administración de recursos y el seguimiento de proyectos.</p>
              <div className='container-for-start-arrows'>
                <AiOutlineRight className='home-plate-arrows' />
              </div>
            </div>
          </Link>
        </div>
        <div className='mobile-subcontainer-contents-home'>
        <Link to='/api' className='project-link'>
            <div className='project-column'>
              <div className='title-icon-container'>
                <CiStreamOn className='project-icon' />
                <h2 className='title-sections-home'>API e-commerce</h2>
              </div>
              <p className='text-sections-home'>Proyecto innovador y funcional que ofrece una experiencia de compra excepcional para usuarios y facilita la gestión de productos y ventas para propietarios de tiendas.</p>
              <div className='container-for-start-arrows'>
                <AiOutlineRight className='home-plate-arrows' />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Secion 2 */}
      <div className='mobile-container-tech-skills-list'>
        <h2 className='mobile-title-skills-list'>Lista de habilidades y tecnologías</h2>
      </div>
      <div className='main-mobile-container-section-two-list-of-skills'>
        <div className='container-to-handle-the-contents'>
          <div className='icon-sessions-container-home'>
            <SiHtml5 className='home-session-icons' />
          </div>
          <p className='titles-for-sections-two'></p>
          <p className='text-sections-home'>Lenguaje para diseñar páginas web, estructura contenido con etiquetas semánticas, define presentación al usuario.</p>
          {/* Agrega mas contenido segun sea necesario */}
        </div>

        <div className='container-to-handle-the-contents'>
          <div className='icon-sessions-container-home'>
            <SiCss3 className='home-session-icons' />
          </div>
          <p className='titles-for-sections-two'></p>
          <p className='text-sections-home'>Controla estilo de página web, aplica colores, fuentes, márgenes y diseño para mejorar apariencia y experiencia del usuario.</p>
          {/* Agrega mas contenido segun sea necesario */}
        </div>

        <div className='container-to-handle-the-contents'>
          <div className='icon-sessions-container-home'>
            <SiJavascript className='home-session-icons' />
          </div>
          <p className='titles-for-sections-two'></p>
          <p className='text-sections-home'>Lenguaje de programación de alto nivel, agrega interactividad y funcionalidad a páginas web, manipula contenido, responde a eventos, crea animaciones.</p>
          {/* Agrega mas contenido segun sea necesario */}
        </div>
      </div>

      {/* Boton Ver mas */}
      <div className='ecommerce-project-button'>
        <button className='button-ecommerce-ecm' onClick={handleToggleDetails}>
          {showDetails ? 'Ver menos' : 'Ver más'}
        </button>
        {showDetails && (
          <div className='main-drop-down-information-container'>
            {initialTechnologies.map((tech, index) => (
              <div className='container-to-handle-the-contents'>
                <div className='icon-sessions-container-home'>
                  <SiReact className='home-session-icons' />
                </div>
                <p className='titles-for-sections-two'></p>
                <p className='text-sections-home'>Biblioteca poderosa y flexible que facilita la creación de interfaces de usuario interactivas y reactivas en aplicaciones web, mejorando el rendimiento y la mantenibilidad del código.</p>
                {/* Agrega mas contenido segun sea necesario */}
              </div>
            ))}

            {/* Nueva sección oculta con la tecnología de JavaScript */}
            <div className=''>
              <div className='icon-sessions-container-home'>
                <SiGit className='home-session-icons' />
              </div>
              <p className='titles-for-sections-two'></p>
              <p className='text-sections-home'>Sistema distribuido de control de versiones, rastrea cambios, colabora en proyectos, gestiona versiones del código.</p>
              {/* Agrega mas contenido segun sea necesario */}
            </div>

            <div className=''>
              <div className='icon-sessions-container-home'>
                <SiGithub className='home-session-icons' />
              </div>
              <p className='titles-for-sections-two'></p>
              <p className='text-sections-home'>Plataforma con Git, colaboración en proyectos, gestión de problemas, despliegue de sitios web estáticos.</p>
              {/* Agrega mas contenido segun sea necesario */}
            </div>

            <div className=''>
              <div className='icon-sessions-container-home'>
                <SiMysql className='home-session-icons' />
              </div>
              <p className='titles-for-sections-two'></p>
              <p className='text-sections-home'>Gestión de bases de datos relacionales, código abierto, eficiente, escalabilidad y seguridad.</p>
              {/* Agrega mas contenido segun sea necesario */}
            </div>
          </div>
        )}
      </div>

      {/* Secion 3 */}
      <div className='mobile-container-title-section-three-home'>
        <h2 className='mobile-title-education-and-certifications mobile-title-skills-list'>
          Educación y certificaciones
        </h2>
      </div>

      <div className="mobile-container-main-section-three-education">
        <div className="columna-izquierda">
          {informaciones.map((info, index) => (
            <div
              key={index}
              className='informacion'
              onClick={() => handleTextoClick(index)} // Muestra el banner al hacer clic
            >
              {info}
            </div>
          ))}
        </div>
      </div>

      {/* Banner que aparece desde la parte inferior */}
      {mostrarBanner && (
        <div className="overlay" onClick={cerrarBanner}>
          <div className="banner" onClick={(e) => e.stopPropagation()}>
            <img src={imagenSeleccionada} alt="Vista seleccionada" className="imagen-banner" />
            <button className="cerrar-banner" onClick={cerrarBanner}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
  
export default MainContentMobile; // Exportando el componente