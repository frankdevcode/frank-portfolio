// PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../style-sheet/PostDetail.css';
import authorImage from '../imagenes/bibliografia/frank-dev.jpg';
import blogPosts from '../componentes/BlogPostData';

const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.reduce((total, block) => total + block.text.split(/\s+/).length, 0);
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} Min de lectura`;
};

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postDetail = blogPosts.find(post => post.id === parseInt(id, 10));
    if (postDetail) {
      postDetail.readTime = calculateReadTime(postDetail.content);
      setPost(postDetail);
    }
  }, [id]);

  if (!post) return <div>Cargando el artículo...</div>;

  return (
    <div className="post-detail-container">
      <h1>{post.title}</h1>

      <div className="post-detail-author-info">
        <Link to="/bio">
          <img 
            src={authorImage} 
            alt="Francisco Perlaza" 
            className="post-author-avatar" 
            onError={(e) => { e.target.src = '/path/to/placeholder.jpg'; }} 
          />
        </Link>
        <div className="post-author-details">
          <p className="post-author-name">
            <Link to="/bio" className="post-author-link">FRANCISCO PERLAZA</Link>
          </p>
          <p className="post-detail-date">
            {new Date(post.date).toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })} • {post.readTime}
          </p>
        </div>
      </div>

      {/* Imagen principal del post */}
      {post.image && (
        <div className="image-container">
          <img 
            src={post.image} 
            alt={post.title} 
            className="post-detail-image" 
            onError={(e) => { e.target.src = '/path/to/placeholder.jpg'; }}
          />
        </div>
      )}

      {/* Sección promocional del libro */}
      <div className="promotion-section">
        <h2 className="promotion-title">¡Consigue el Libro Completo sobre Git y GitHub!</h2>
        <p className="promotion-description">
          Aprende todo lo que necesitas saber sobre Git y GitHub, desde los conceptos básicos hasta 
          las técnicas avanzadas de colaboración en equipo y control de versiones. Disponible en 
          Hotmart y Amazon Kindle.
        </p>
        <a href="https://go.hotmart.com/Y95923822T" target="_blank" rel="noopener noreferrer" className="promotion-button">
          Comprar en Hotmart
        </a>
        {/*<a href="#" target="_blank" rel="noopener noreferrer" className="promotion-button">
          Comprar en Amazon Kindle
        </a>*/}
      </div>

      {/* Contenido del post */}
      <div className="post-detail-content">
        {post.content.map((block, index) => {
          if (block.type === 'h3') {
            return <h3 key={index}>{block.text}</h3>;
          } else if (block.type === 'p') {
            return <p key={index}>{block.text}</p>;
          }
          return null;
        })}
      </div>

      <div className="post-detail-twitter-invite">
        <p>¿Ideas o sugerencias? Compártelas en <a href="https://x.com/frankpzza" target="_blank" rel="noopener noreferrer">Twitter.</a></p>
      </div>

      <Link to="/blog" className="post-detail-back-link">← Volver al blog</Link>
    </div>
  );
};

export default PostDetail;
