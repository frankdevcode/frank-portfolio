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
  const postsPerPage = 6;
  const [posts, setPosts] = useState([]);

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

  const renderPosts = posts.slice(0, postsPerPage).map(post => {
    const summary = post.content
      .filter(block => block.type === 'p') // Solo incluimos los párrafos
      .map(block => block.text) // Tomamos solo el texto de los párrafos
      .join(' ') // Los unimos en una cadena de texto
      .substring(0, 100); // Limitamos el resumen a 100 caracteres
  
    return (
      <Link to={`/post/${post.id}`} key={post.id} className="blog-card-link">
        <div className="blog-card">
          <img src={post.image} alt={post.title} className="blog-image" />
          <h2>{post.title}</h2>
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

  return (
    <div className="blog-container">
      <nav className="breadcrumb">
        <Link to="/">Inicio</Link> / <span>Blog</span>
      </nav>

      <div className="blog-grid">{renderPosts}</div>
    </div>
  );
};

export default Blog;
