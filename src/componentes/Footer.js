// Frank

import React from 'react';
import '../style-sheet/Footer.css';
import logoFranciscoPerlaza from '../imagenes/logo-francisco-perlaza.png';

// Importamos el iconos de redes sociales
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
// import { AiOutlineWhatsApp } from 'react-icons/ai'; //
import { RiTwitterXLine } from "react-icons/ri";
import { RiTiktokFill } from "react-icons/ri";

// Importamos los links
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear(); // Obtener el año dinamicamente. Ej: 2024

  // Obtener numero de telefono de WhatsApp
  // const codigoDePais = '+57'; // Codigo de pais
  // const numeroDeTelefono = ''; // Numero de telefono

  return (
    <footer>
      <div className='main-container-of-footer-number-one'>
        <nav className='navigation-columns-container'>
          <div className='information-columns'>
            <a href='/' className='Logo-link-footer'>
              <img src={logoFranciscoPerlaza} alt='Logo Francisco Perlaza' className='Logo-text-fp' />
            </a>
            <p className='text-in-logo-description'>¡Bienvenido al mundo de la tecnología y la innovación! Soy Francisco Perlaza, experto en tecnología y programación. Con una sólida formación y amplia experiencia en el campo de la ingeniería de sistemas.</p>
          </div>

          <div className='information-columns'>
            <p className='title-information-sections'>Privacidad</p>
            <ul>
              <li><Link to='/politica-de-privacidad'>Política de Privacidad</Link></li>
              <li><Link to='/terminos-y-condiciones'>Términos y Condiciones</Link></li>
              <li><Link to='/'>Actualizaciones</Link></li>
              {/* Otros enlaces del pie de página según sea necesario */}
            </ul>
          </div>

          <div className='information-columns'>
            <p className='title-information-sections'>Novedades</p>
            <ul>
              <li><Link to='/'>Inteligencia Artificial</Link></li>
              <li><Link to='/'>Ciberseguridad</Link></li>
              <li><Link to='/'>Desarrollo Web</Link></li>
            </ul>
          </div>

          <div className='information-columns'>
            <p className='title-information-sections'>Redes sociales</p>
            <div className='container-social-icons'>
              <div className='container-columns-icons'>
                <a href='https://www.linkedin.com/in/franciscoperlaza/' target='_blank' rel='noopener noreferrer' className='social-media-icons-link' aria-label='LinkedIn'>
                  <AiFillLinkedin className='social-icons-components' />
                </a>
              </div>
              <div className='container-columns-icons'>
                <a href='https://web.facebook.com/franciscoders/' target='_blank' rel='noopener noreferrer' className='social-media-icons-link' aria-label='Facebook'>
                  <AiFillFacebook className='social-icons-components' />
                </a>
              </div>
              <div className='container-columns-icons'>
              <a href='https://github.com/frankdevcode' target='_blank' rel='noopener noreferrer' className='social-media-icons-link' aria-label='GitHub'>
                  <AiFillGithub className='social-icons-components' />
                </a>
              </div>
              <div className='container-columns-icons'>
                <a href='https://www.instagram.com/franciscoperlazza/' target='_blank' rel='noopener noreferrer' className='social-media-icons-link' aria-label='Instagram'>
                  <AiOutlineInstagram className="social-icons-components" />
                </a>
              </div>
              <div className='container-columns-icons'>
                <a href='https://x.com/franklaza' target='_blank' rel='noopener noreferrer' className='social-media-icons-link' aria-label='Twitter'>
                  <RiTwitterXLine className='social-icons-components' />
                </a>
              </div>
              <div className='container-columns-icons'>
                <a href='https://www.tiktok.com/@franciscoperlazza' target='_blank' rel='noopener noreferrer' className='social-media-icons-link' aria-label='Twitter'>
                  <RiTiktokFill className='social-icons-components' />
                </a>
              </div>
              {/*
              <div className='container-columns-icons'>
                <a href={`https://wa.me/${codigoDePais}${numeroDeTelefono}`} target='_blank' rel='noopener noreferrer' className='social-media-icons-link' aria-label='WhatsApp'>
                  <AiOutlineWhatsApp className='social-icons-components' />
                </a>
              </div>
              */}
            </div>
          </div>
        </nav>
        {/* Contenido del pie de pagina */}
        <div className='container-child-footer-number-two'>
          <p className='footer-text'>&copy; {currentYear} Francisco Perlaza. Todos los derechos reservados </p>
        </div>        
      </div>
    </footer>
  );
}

export default Footer;