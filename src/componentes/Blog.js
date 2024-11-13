// Blog.js
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../style-sheet/Blog.css';
import authorImage from '../imagenes/bibliografia/frank-dev.jpg';
import blogPosts from '../data/BlogPostData';

// Función para calcular el tiempo de lectura de una publicación
const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const totalWords = content.reduce((total, block) => {
    return block.type === 'p' ? total + block.text.split(/\s+/).length : total;
  }, 0);

  const minutes = Math.ceil(totalWords / wordsPerMinute);
  return `${minutes} Min de lectura`;
};

const Blog = () => {
  const postsPerPage = 9;
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const updatedPosts = Array.isArray(blogPosts)
      ? blogPosts.map(post => ({
          ...post,
          readTime: calculateReadTime(post.content)
        }))
      : [];
    setPosts(updatedPosts);
  }, [blogPosts]);

  const totalPages = useMemo(() => Math.ceil(posts.length / postsPerPage), [posts]);

  // Limita el número de caracteres en el título para evitar desbordamientos
  const truncateTitle = (title) => title.length > 53 ? title.substring(0, 53) + '...' : title;

  const renderPosts = useMemo(() => (
    posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage).map(post => {
      const summary = post.content
        .filter(block => block.type === 'p')
        .map(block => block.text)
        .join(' ')
        .substring(0, 100);

      return (
        <Link to={`/blog/${post.shortSlug}`} key={post.id} className="container-block-link-cards">
          <div className="container-blog-card-fk">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2>{truncateTitle(post.title)}</h2>
            <p>{summary}...</p>
            <div className="blog-author-info">
              <img src={authorImage} alt="Francisco Perlaza" className="author-avatar" />
              <div className="author-details">
                <Link to="/bio" className="author-name">FRANCISCO PERLAZA</Link>
                <p className="blog-date">
                  {new Date(post.date).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })} • {post.readTime}
                </p>
              </div>
            </div>
          </div>
        </Link>
      );
    })
  ), [posts, currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="blog-container">
      <nav className="breadcrumb">
        <Link to="/">Inicio</Link> / <span>Blog</span>
      </nav>

      <div className="blog-grid">{renderPosts}</div>

      <div className="pagination-container">
        <button onClick={handlePreviousPage} disabled={currentPage === 1} aria-label="Página anterior">
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} aria-label="Página siguiente">
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Blog;
