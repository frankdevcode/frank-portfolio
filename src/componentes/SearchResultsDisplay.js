// SearchResultsDisplay.js

/* Resultados de busquedas al presionar ENTER o clic en el icono de BUSCAR en la barra de búsqueda */
import React from 'react';
import { Link } from 'react-router-dom';
import '../style-sheet/SearchResultsDisplay.css'; // Añadir estilos personalizados
import '../style-sheet/SearchResults.css';

const SearchResultsDisplay = ({ posts, searchTerm }) => {
  const getSnippet = (content) => {
    // Devuelve los primeros 100 caracteres del contenido como resumen
    return typeof content === 'string' && content.length > 100 
      ? content.substring(0, 100) + '...' 
      : content;
  };

  return (
    <div className="search-results-container-enter-or-search-icon">
      <h2 className="title-search-result-for-enter">Resultados de búsqueda para: "{searchTerm}"</h2>
      {posts.length > 0 ? (
        <ul className="search-results-list-enter">
          {posts.map((post) => (
            <li key={post.id} className="enter-search-result-element"> {/* Usar post.id aquí */}
              {/* El título es un enlace al artículo completo */}
              <Link to={post.path} className="search-result-link-enter" aria-label={`Leer más sobre ${post.title}`}>
                <h3>{post.title}</h3>
              </Link>
              {/* Muestra solo un resumen del contenido */}
              <p>{getSnippet(post.content)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-results-found-enter">No se encontraron resultados</p>
      )}
    </div>
  );
};

export default SearchResultsDisplay;
