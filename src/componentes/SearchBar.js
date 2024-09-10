import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style-sheet/SearchBar.css';
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [posts, setPosts] = useState([
    { title: 'Proyecto de diseño y desarrollo del sitio web profesional para Frank', content: 'Content of Post 1', path: '/frank' },
    { title: 'Desarrollo de una plataforma de comercio electrónico para impulsar el éxito empresarial', content: 'Content of Post 2', path: '/comercio' },
    { title: 'Creación de una API potente y versátil para el comercio electrónico', content: 'Content of Post 3', path: '/api' },
    { title: 'Post 4', content: 'Content of Post 4', path: '/post-4' },
    { title: 'Post 5', content: 'Content of Post 5', path: '/post-5' },
    { title: 'Post 6', content: 'Content of Post 6', path: '/post-6' },
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const limitedResults = filteredPosts.slice(0, 5);

  return (
    <div className='main-search-bar-container'>
      <div className="container-search-bar-header-fp">
        <input 
          type="text"
          placeholder="Ingrese un tema de interés"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} className='search-input-fp'
        />
        <AiOutlineSearch onClick={handleSearch} className='search-icon' />
      </div>
      <div className="search-results-container">
        {searchTerm && limitedResults.length > 0 && (
          <div className="search-results-container-two">
            {limitedResults.map((post) => (
              <div key={post.title} className="container-jf-search-result">
                <Link to={post.path} className="search-result-link">
                  <h2 className="search-result-title">{post.title}</h2>
                </Link>
              </div>
            ))}
            {filteredPosts.length > 5 && (
              <div className="container-jf-search-result">
                <Link to="/all-results" className="search-result-link">
                  <h2 className="search-result-title">Ver todos los resultados</h2>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
