// SearchResultsDisplay.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style-sheet/SearchResultsDisplay.css';

const SearchResultsDisplay = ({ posts, searchTerm }) => {
  return (
    <div className="search-results-container-enter-or-search-icon">
      <h2 className="title-search-result-for-enter">
        Resultados de búsqueda para: "{searchTerm}"
      </h2>
      {posts.length > 0 ? (
        <ul className="search-results-list-enter">
          {posts.map((post) => (
            <li key={post.title} className="enter-search-result-element">
              <span className={`content-type-badge ${post.type}`}>
                {post.type === 'blog' ? 'Blog' : 'Proyecto'}
              </span>
              
              <Link 
                to={post.type === 'blog' ? `/blog/${post.shortSlug}` : post.path} 
                className="search-result-link-enter"
              >
                <h3 className="result-title">{post.title}</h3>
              </Link>
              
              {post.summary && (
                <p className="post-summary">{post.summary}</p>
              )}
              
              <div className="post-content">
                {post.content.substring(0, 100)}
              </div>
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