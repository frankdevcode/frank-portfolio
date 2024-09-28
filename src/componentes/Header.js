// src/Header.js
import React, { useState } from 'react';
import '../style-sheet/Header.css'; // Importamos el archivo CSS del componente Header
import logoFranciscoPerlaza from '../imagenes/logo-francisco-perlaza.png'; // Importamos el logo y mostramos el atributo <img>

// Importamos los links
import { Link } from 'react-router-dom';

// Elementos de la barra de búsqueda
import SearchBar from '../componentes/SearchBar';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');  

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className='main-container-of-header-number-one'>
      <div className='child-container-number-two'>
        {/* Contenedor para el menu de navegacion (header) */}
        <header className='container-three-menu-navigation'>
          <nav className='flex-container'>
            <div className='logo-container'>
              <Link to='/' className='LogoLink'>
                <img src={logoFranciscoPerlaza} alt='Logo Francisco Perlaza' className='Logo' />
              </Link>
            </div>
            <div className='menu-navigation-container'>
              <Link to='/novedades'>Novedades</Link>
              <Link to='/sobre-francisco'>Sobre Francisco</Link>
              <Link to='/proyectos'>Proyectos</Link>
              {/* <Link to='/portafolio'>Portafolio</Link> */}
              <Link to='/blog'>Blog</Link>
              <Link to='/contacto'>Contacto</Link>
              <Link to='/ayuda'>Ayuda</Link>
              {/* Agregar mas elementos al encabezado segun sea necesario */}
            </div>
          </nav>
        </header>

        {/* Contenedor para la informacion del giro banner */}
        <div className='container-header-number-three-twist-banner'>
          <div className='container-child-info-banner'>
            <h1 className='title-one-twist-banner'>Construyamos puentes entre sueños y realidad</h1>
            {/*<h2 className='title-two-twist-banner'>sueños y realidad</h2>*/}
            <h2 className='paragraph-one-twist-banner'>Soy Francisco Perlaza</h2>
          </div>

          {/* Contenedor para el nombre */}
          <div className='container-engineer-fp-twist-banner'>
            <p className='text-engineer-fp-twist-banner'>Ing. Sistemas</p>
            {/* Contenedor para la barra de búsqueda */}
            <div>
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Header;