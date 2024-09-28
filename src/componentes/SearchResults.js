/* SearchResults.js */

/* Resultados de sugerencias de busquedas al buscar en la barra de busqueda */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchResults = ({ posts }) => {
  const query = new URLSearchParams(useLocation().search).get('q');
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-results-container">
      <h2 className="search-results-title">Resultados de búsqueda para: "{query}"</h2>
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <Link key={post.id} to={post.path} className="search-result-item">
            {post.title}
          </Link>
        ))
      ) : (
        <div className="no-results">No se encontraron resultados</div>
      )}
    </div>
  );
};

export default SearchResults;
