// src/components/HelpCenter.js

import React from 'react';
import '../style-sheet/HelpCenter.css';

// Importamos los links
import { Link } from 'react-router-dom'; // Asumiendo que utilizas react-router para la navegación

const HelpCenter = () => {
  return (
    <div className="help-center-container">
      <h1 className='tittle-help-centro'>Centro de Ayuda</h1>

      <section className="contact-section">
        <h2 className='subtitles-sections-help'>Contacto Directo</h2>
        {/* Aquí puedes colocar la información de contacto o un enlace al formulario de contacto */}
        <p className='help-paragraph'>Para preguntas específicas, comentarios o inquietudes, contáctame directamente a través de <Link className='link-help-section' to="/contacto">este enlace</Link>.</p>
      </section>

      <section className="faq-section">
        <h2 className='subtitles-sections-help'>Preguntas Frecuentes (FAQ)</h2>
        {/* Aquí colocas tu sección de preguntas frecuentes */}
        <p className='help-paragraph'>Consulta nuestra sección de Preguntas Frecuentes para obtener respuestas a las dudas más comunes.</p>
      </section>

      {/* Agrega más secciones según las necesidades, como Recursos Técnicos, Actualizaciones y Novedades, etc. */}

      <section className="community-section">
        <h2 className='subtitles-sections-help'>Comunidad y Colaboración</h2>
        {/* Información sobre la comunidad y enlaces a redes sociales */}
        <p className='help-paragraph'>Únete a la comunidad de Frank en las redes sociales y participa en conversaciones.</p>
      </section>

      <section className="technical-support-section">
        <h2 className='subtitles-sections-help'>Soporte Técnico</h2>
        {/* Información sobre cómo obtener soporte técnico */}
        <p className='help-paragraph'>Si experimentas problemas técnicos, comunícate con nuestro equipo de soporte técnico a través del <Link className='link-help-section' to="/technical-support">formulario de soporte técnico</Link>.</p>
      </section>

    </div>
  );
};

export default HelpCenter;
