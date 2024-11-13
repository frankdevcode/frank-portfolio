// SearchBar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style-sheet/SearchBar.css';
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  // Lista de posts resultados de sugerencias de la barra de busqueda
  const [posts, setPosts] = useState([
    // Proyectos
    { title: 'Diseño y desarrollo del sitio web profesional Frank', path: '/frank' },
    { title: 'Desarrollo de una plataforma de comercio electrónico', path: '/ecommerce' },
    { title: 'Creación de una API potente y versátil para el comercio electrónico', path: '/api' },
  
    // Post Blog (Actualizar las rutas)
    { title: 'El rey de la simplicidad y la Inteligencia Artificial', path: '/blog/python' },
    { title: 'La columna vertebral del desarrollo web', path: '/blog/javascript' },
    { title: 'La batalla por el futuro de la programación', path: '/blog/rust-go' },
    { title: 'Introducción a Git y GitHub', path: '/blog/git-github' },
  ]);  

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.search-bar-container')) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='search-bar-container'>
      <div className="search-bar">
        <input 
          type="text"
          placeholder="Ingrese un tema de interés"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          className='search-input'
          onFocus={() => setShowResults(true)}
        />
        <button onClick={handleSearch} className="search-button">
          <AiOutlineSearch className='search-icon' />
        </button>
      </div>
      {showResults && searchTerm && (
        <div className="search-results">
          {filteredPosts.length > 0 ? (
            filteredPosts.slice(0, 5).map((post) => (
              <Link 
                to={post.path} 
                key={post.title} 
                className="search-result-item" 
                onClick={() => setShowResults(false)}
              >
                {post.title}
              </Link>
            ))
          ) : (
            <div className="no-results">No se encontraron resultados</div>
          )}
          {filteredPosts.length > 5 && (
            <Link 
              to={`/search?q=${encodeURIComponent(searchTerm)}`} 
              className="search-result-item"
              onClick={() => setShowResults(false)}
            >
              Ver todos los resultados
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
