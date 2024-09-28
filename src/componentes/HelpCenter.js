// src/components/HelpCenter.js

import React from 'react';
import '../style-sheet/HelpCenter.css';
import { Link } from 'react-router-dom'; // Para navegación interna
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Íconos de React Icons
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const HelpCenter = () => {
  return (
    <div className="help-center-container">
      <h1 className='title-help-center'>Centro de Ayuda</h1>

      <section className="contact-section">
        <h2 className='subtitles-sections-help'>Contacto Directo</h2>
        <p className='help-paragraph'>
          Para preguntas específicas o inquietudes, contáctame a través de este <Link className='link-help-section' to="/contacto">enlace</Link>.
        </p>
      </section>

      <section className="faq-section">
        <h2 className='subtitles-sections-help'>Preguntas Frecuentes (FAQ)</h2>
        <p className='help-paragraph'>
          Consulta nuestra sección de <Link className='link-help-section' to="/faqs">Preguntas Frecuentes</Link> para obtener respuestas a las dudas más comunes.
        </p>
      </section>

      <section className="resources-section">
        <h2 className='subtitles-sections-help'>Recursos Técnicos</h2>
        <p className='help-paragraph'>
          Accede a recursos actualizados de programación y tecnología a través de este <Link className='link-help-section' to="/recursos-tecnicos">enlace</Link>.
        </p>
      </section>

      <section className="community-section">
        <h2 className='subtitles-sections-help'>Comunidad y Colaboración</h2>
        <p className='help-paragraph'>
          Únete a la comunidad de Frank en las redes sociales y participa en conversaciones.
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/tu-perfil" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.twitter.com/tu-perfil" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
            < AiOutlineInstagram className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter className="icon" />
          </a>

          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
            <AiOutlineWhatsApp className="icon" />
          </a>
        </div>
      </section>

      <section className="technical-support-section">
        <h2 className='subtitles-sections-help'>Soporte Técnico</h2>
        <p className='help-paragraph'>
          Si experimentas problemas técnicos, comunícate con nuestro equipo de soporte técnico.
        </p>
        <Link className="support-button" to="/technical-support">
          Solicitar soporte técnico
        </Link>
      </section>
    </div>
  );
};

export default HelpCenter;
