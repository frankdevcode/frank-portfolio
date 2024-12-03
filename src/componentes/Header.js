import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import logoFranciscoPerlaza from '../imagenes/logo-francisco-perlaza.png';
import SearchBar from '../componentes/SearchBar';
import '../style-sheet/Header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Detecta el cambio de tamaño de pantalla
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  // Detecta el scroll para cambiar el estilo del header
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  // Alterna el sidebar en modo móvil
  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prevState => !prevState);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleResize, handleScroll]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="menu-container">
        {isMobile ? (
          <div className="menu-toggle-container">
            <button className="menu-toggle" onClick={toggleSidebar} aria-label="Abrir menú">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
            <Link to="/" className="logo-link">
              <img src={logoFranciscoPerlaza} alt="Logo Francisco Perlaza" className="logo" />
            </Link>
          </div>
        ) : (
          <nav className="flex-container" role="navigation">
            <Link to="/" className="logo-link">
              <img src={logoFranciscoPerlaza} alt="Logo Francisco Perlaza" className="logo" />
            </Link>
            <div className="menu-navigation-container">
              <Link to="/perfil-profesional">Perfil Profesional</Link>
              <Link to="/sobre-francisco">Sobre Mi</Link>
              <Link to="/proyectos">Proyectos</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contacto">Contacto</Link>
              <Link to="/ayuda">Ayuda</Link>
            </div>
          </nav>
        )}
      </div>

      {isMobile && (
        <>
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </>
      )}
    </header>
  );
};

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`sidebar ${isOpen ? 'active' : ''}`} aria-hidden={!isOpen}>
    <div className="sidebar-header">
      <span className="sidebar-greeting">¡Hola!</span>
      <IoCloseOutline className="close-icon" onClick={toggleSidebar} aria-label="Cerrar menú" />
    </div>
    <nav className="sidebar-nav" role="navigation">
      <ul>
        {['Perfil Profesional', 'Proyectos', 'Blog', 'Contacto', 'Ayuda'].map((item, index) => (
          <li key={index}>
            <Link to={`/${item.toLowerCase().replace(' ', '-')}`} onClick={toggleSidebar}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Header;
