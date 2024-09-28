// Novedades.js
import React from 'react';
import '../style-sheet/Novedades.css';

const novedadesData = [
  {
    id: 1,
    title: 'JavaScript ES2024: Nuevas Características',
    description: 'Descubre las mejoras en el lenguaje que harán tu código más limpio y eficiente.',
    image: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    id: 2,
    title: 'Avances en IA y Machine Learning',
    description: 'La inteligencia artificial continúa revolucionando el desarrollo de software.',
    image: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    id: 3,
    title: 'Frameworks JS: Lo que viene en 2024',
    description: 'Un vistazo a los frameworks emergentes que están cambiando la manera en que construimos interfaces.',
    image: 'https://via.placeholder.com/300x200',
    link: '#'
  },
];

const Novedades = () => {
  return (
    <section className="novedades">
      <h2 className="novedades-title">Últimas Novedades en Tecnología</h2>
      <div className="novedades-container">
        {novedadesData.map(novedad => (
          <div className="novedad-card" key={novedad.id}>
            <img src={novedad.image} alt={novedad.title} className="novedad-image" />
            <h3 className="novedad-title">{novedad.title}</h3>
            <p className="novedad-description">{novedad.description}</p>
            <a href={novedad.link} className="novedad-link">Leer más</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Novedades;
