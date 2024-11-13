import React from 'react';
import { Link } from 'react-router-dom';
import '../style-sheet/RecentArticles.css'; // Asegúrate de crear y vincular el archivo CSS

const RecentArticles = ({ recentArticles }) => {
  return (
    <section className="recent-articles-section-mobile">
      <h2 className="title-home-content-blog-mobile">Artículos recientes</h2>
      <div className="articles-container-mobile">
        {recentArticles.map((post) => (
          <Link to={`/blog/${post.shortSlug}`} key={post.id} className="blog-card-link">
            <div className="article-content-mobile">
              <img src={post.image} alt={post.title} className="article-image-mobile" />
              <h3 className="article-title-mobile">{post.title}</h3>
              <p className="article-summary-mobile">{post.summary}...</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentArticles;
