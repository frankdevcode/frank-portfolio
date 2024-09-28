import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import SearchBar from '../componentes/SearchBar';
import logoFranciscoPerlaza from '../imagenes/logo-francisco-perlaza.png';
import '../style-sheet/HeaderMobile.css';

// Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`sidebar ${isOpen ? 'active' : ''}`} aria-hidden={!isOpen}>
    <div className="sidebar-header">
      <span className="sidebar-greeting">¡Hola!</span>
      <IoCloseOutline className="close-icon" onClick={toggleSidebar} aria-label="Cerrar menú" />
    </div>
    <nav className="sidebar-nav">
      <ul>
        {['Proyectos', 'Novedades', 'Blog', 'Contacto', 'Ayuda'].map((item, index) => (
          <li key={index}>
            <Link to={`/${item.toLowerCase()}`} onClick={toggleSidebar}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const HeaderMobile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prevState => !prevState);
  }, []);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  return (
    <header className="header-mobile">
      <div className="menu-toggle-container">
        <button className="menu-toggle" onClick={toggleSidebar} aria-label="Abrir menú">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <Link to="/" className="mobile-logo-link">
          <img src={logoFranciscoPerlaza} alt="Logo Francisco Perlaza" className="mobile-device-logo" />
        </Link>
      </div>

      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="main-container-twist-banner-mobile">
        <div className="container-twist-banner-mobile">
          <div className="container-child-info-banner">
            <h1 className="title-twist-banner-mobile">Construyamos puentes entre sueños y realidad</h1>
            <h2 className="title-two-twist-banner-mobile">Soy Francisco Perlaza</h2>
          </div>
          <div className="container-engineer-fp-twist-banner-mobile">
            <p className="text-engineer-fp-twist-banner-mobile">Ing. Sistemas</p>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
