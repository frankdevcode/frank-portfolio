// PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../style-sheet/PostDetail.css';
import authorImage from '../imagenes/bibliografia/frank-dev.jpg';
import blogPosts from '../data/BlogPostData';

const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.reduce((total, block) => total + block.text.split(/\s+/).length, 0);
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} Min de lectura`;
};

const PostDetail = () => {
  const { shortSlug } = useParams(); // Asegúrate de usar "shortSlug" aquí
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Busca el post basado en el shortSlug en lugar de generateSlug
    const postDetail = blogPosts.find(post => post.shortSlug === shortSlug);
    if (postDetail) {
      postDetail.readTime = calculateReadTime(postDetail.content);
      setPost(postDetail);
    }
  }, [shortSlug]);

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

      {post.image && (
        <div className="image-container">
          <img 
            src={post.image} 
            alt={post.title} 
            className="post-detail-image" 
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
        {/* Botón para comprar en Amazon */}
        <a
          href="https://a.co/d/j6OGj7Y"
          target="_blank"
          rel="noopener noreferrer"
          className="promotion-button"
          data-platform="amazon"
        >
          Comprar en Amazon
        </a>

        {/* Botón para comprar en Hotmart */}
        <a
          href="https://go.hotmart.com/Y95923822T"
          target="_blank"
          rel="noopener noreferrer"
          className="promotion-button"
          data-platform="hotmart"
        >
          Comprar en Hotmart
        </a>

        {/* Párrafo que indica la opción de compra por país */}
        <p>Adquiere este libro en Amazon según tu país:</p>

        {/* Lista de enlaces por país */}
        <ul className="country-links">
          <li>
            ESPAÑA:{' '}
            <a
              href="https://amzn.eu/d/fSyJzlD"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon España
            </a>
          </li>
          <li>
            MÉXICO:{' '}
            <a
              href="https://a.co/d/4ftLFtR"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon México
            </a>
          </li>
          <li>
            COLOMBIA:{' '}
            <a
              href="https://a.co/d/cllAQIV"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon Colombia
            </a>
          </li>
        </ul>
      </div>

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
        <p>¿Ideas o sugerencias? Compártelas en <a href="https://x.com/franklaza" target="_blank" rel="noopener noreferrer">Twitter (X).</a></p>
      </div>

      <Link to="/blog" className="post-detail-back-link">← Volver al blog</Link>
    </div>
  );
};

export default PostDetail;
