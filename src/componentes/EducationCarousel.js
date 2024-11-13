// EducationCarousel.js
import React from 'react';
import '../style-sheet/EducationCarousel.css';
import imagenLogoUniremington from '../imagenes/imagen-logo-remigton.jpg';
import imagenLogoCisco from '../imagenes/imagen-logo-cisco.jpg';
import imagenLogoEdteam from '../imagenes/imagen-logo-edteam.jpg';
import imagenLogoPlatzi from '../imagenes/imagen-logo-platzi.jpg';
import imagenLogoSena from '../imagenes/imagen-logo-sena.jpg';

const educationData = [
  { title: 'Ingeniero de Sistemas', image: imagenLogoUniremington },
  { title: 'Python Essentials', image: imagenLogoCisco },
  { title: 'Introducción a la programación orientada a objetos', image: imagenLogoEdteam },
  { title: 'Inteligencia artificial para el trabajo', image: imagenLogoPlatzi },
  { title: 'Bases de datos generalidades y sistemas de gestión', image: imagenLogoSena },
];

const EducationCarousel = () => {
  return (
    <div className='education-carousel'>
      <h2 className='section-title'>Educación y certificaciones</h2>
      <div className='carousel-wrapper'>
        <div className='carousel-track'>
          {educationData.map((item, index) => (
            <div key={index} className='carousel-item'>
              <img src={item.image} alt={item.title} className='carousel-image' />
              <p className='carousel-title'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCarousel;
