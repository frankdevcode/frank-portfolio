import React from 'react';
import '../style-sheet/Briefcase.css';

import { Link } from 'react-router-dom';

function Briefcase() {
  return (
    <div className='main-container-briefcase'>
      <div className='container-main-title-briefcase'>
        <h1 className='main-title-briefcase'>Portafolio</h1>
      </div>
      <div className='main-container-sections-portfolio'>
        {/* Seccion 1 */}
        <div className='container-title-briefcase'>
          <p className='project-name'>Frank</p>
          <h3 className='title-briefcase'>Proyecto de diseño y desarrollo del sitio web profesional para Frank</h3>
          <p className='briefcase-paragraph'>El proyecto de página web Frank propiedad de Francisco Perlaza, un apasionado Ingeniero de Sistemas, ha sido diseñado y desarrollado con el objetivo de mostrar su amplia experiencia y habilidades en el campo de la tecnología y la innovación.</p>
          <p><Link className='text-see-more-portfolio' to="/frank">Ir al proyecto</Link></p>
        </div>

        {/* Seccion 2 */}
        <div className='container-title-briefcase'>
          <p className='project-name'>E-commerce</p>
          <h3 className='title-briefcase'>Desarrollo de una plataforma de comercio electrónico para impulsar el éxito empresarial</h3>
          <p className='briefcase-paragraph'>Este proyecto de comercio electrónico es una plataforma en línea innovadora y altamente funcional, diseñada para ofrecer una experiencia de compra excepcional a los usuarios y facilitar la gestión de productos y ventas a los propietarios de tiendas.</p>
          <p><Link className='text-see-more-portfolio' to="/ecommerce">Ir al proyecto</Link></p>
        </div>

        {/* Seccion 3 */}
        <div className='container-title-briefcase'>
          <p className='project-name'>API</p>
          <h3 className='title-briefcase'>Creación de una API potente y versátil para el comercio electrónico</h3>
          <p className='briefcase-paragraph'>Este proyecto brinda una experiencia excepcional para los usuarios. La API ha sido diseñada para ser potente y versátil, ofreciendo una amplia gama de funcionalidades que permite a la plataforma de comercio electrónico mejorar la presencia digital.</p>
          <p><Link className='text-see-more-portfolio' to="/api">Ir al proyecto</Link></p>
        </div>
        {/* Agregar mas secciones si es necesario */}
        
      </div>

      {/* Sección dos */}
      <div className='main-container-two-sections-portfolio'>

      </div>
    </div>
  );
}

export default Briefcase;