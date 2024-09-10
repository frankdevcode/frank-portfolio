import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style-sheet/HeaderMobile.css'; // Importamos el archivo CSS del componente HeaderMobile

// Importamos el logo
import logoFranciscoPerlaza from '../imagenes/logo-francisco-perlaza.png';

// Importamos el icono cerrar de react icons
import { IoCloseOutline } from 'react-icons/io5';

import SearchBar from '../componentes/SearchBar';

const HeaderMobile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="header-mobile">
      {/* Contenedor para el menú toggle y el logotipo */}
      <div className="menu-toggle-container">
        <div className="menu-toggle" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <Link to="/" className="mobile-logo-link">
          <img src={logoFranciscoPerlaza} alt="Logo Francisco Perlaza" className="mobile-device-logo" />
        </Link>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-greeting">¡Hola!</span>
          <IoCloseOutline className="close-icon" onClick={toggleSidebar} />
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/contacto" onClick={toggleSidebar}>Contacto</Link>
            </li>
            <li>
              <Link to="/portafolio" onClick={toggleSidebar}>Portafolio</Link>
            </li>
            <li>
              <Link to="/ayuda" onClick={toggleSidebar}>Ayuda</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Giro banner mobile */}
      <div className='main-container-twist-banner-mobile'>
        <div className='container-twist-banner-mobile'>
          <div className='container-child-info-banner'>
            <h1 className='title-twist-banner-mobile'>Construyamos puentes entre sueños y realidad</h1>
            {/*<h2 className='title-two-twist-banner'>sueños y realidad</h2>*/}
            <h2 className='title-two-twist-banner-mobile'>Soy Francisco Perlaza</h2>
          </div>

          {/* Contenedor para el nombre */}
          <div className='container-engineer-fp-twist-banner-mobile'>
            <p className='text-engineer-fp-twist-banner-mobile'>Ing. Sistemas</p>
            {/* Contenedor para la barra de búsqueda */}
            <div>
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default HeaderMobile;
