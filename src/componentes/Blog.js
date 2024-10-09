import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style-sheet/Blog.css';
import authorImage from '../imagenes/bibliografia/frank-dev.jpg';
import blogPosts from '../componentes/BlogPostData';

const calculateReadTime = (content) => {
  const wordsPerMinute = 200;

  const totalWords = content.reduce((total, block) => {
    if (block.type === 'p') {
      return total + block.text.split(/\s+/).length;
    }
    return total;
  }, 0);

  const minutes = Math.ceil(totalWords / wordsPerMinute);
  return `${minutes} Min de lectura`;
};

const Blog = () => {
  const postsPerPage = 9; // Mostrar 9 tarjetas por página
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (Array.isArray(blogPosts)) {
      const updatedPosts = blogPosts.map(post => ({
        ...post,
        readTime: calculateReadTime(post.content)
      }));
      setPosts(updatedPosts);
    } else {
      console.error('BlogPostData no es un array.');
    }
  }, []);

  // Limitar el número de caracteres en el título
  const truncateTitle = (title) => {
    return title.length > 53 ? title.substring(0, 53) + '...' : title;
  };

  const renderPosts = posts
    .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
    .map(post => {
      const summary = post.content
        .filter(block => block.type === 'p') // Solo incluimos los párrafos
        .map(block => block.text) // Tomamos solo el texto de los párrafos
        .join(' ') // Los unimos en una cadena de texto
        .substring(0, 100); // Limitamos el resumen a 100 caracteres

      return (
        <Link to={`/post/${post.id}`} key={post.id} className="blog-card-link">
          <div className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2>{truncateTitle(post.title)}</h2> {/* Limitar los caracteres del título */}
            <p>{summary}...</p> {/* Muestra solo el resumen del contenido */}
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
    });

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="blog-container">
      <nav className="breadcrumb">
        <Link to="/">Inicio</Link> / <span>Blog</span>
      </nav>

      <div className="blog-grid">{renderPosts}</div>

      <div className="pagination-container">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Blog;
