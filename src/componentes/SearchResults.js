// SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchResultsDisplay from '../componentes/SearchResultsDisplay';

const SearchResults = ({ posts }) => {
  const query = new URLSearchParams(useLocation().search).get('q');
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SearchResultsDisplay posts={filteredPosts} searchTerm={query} />
  );
};

export default SearchResults;