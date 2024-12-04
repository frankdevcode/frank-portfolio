import React from 'react';
import youtubeVideos from '../data/YouTubeVideosData';
import '../style-sheet/YouTubeSection.css';

function YouTubeSection() {
  return (
    <section className="youtube-section">
      {/* Título de la sección */}
      <h2 className="youtube-section-title">Contenido educativo en YouTube</h2>
      <div className="youtube-videos-container">
        {youtubeVideos.map((video) => (
          <div key={video.id} className="youtube-video-card">
            {/* Miniatura del video */}
            <div className="youtube-thumbnail">
              <iframe
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Información del video */}
            <div className="youtube-video-info">
              <h3 className="youtube-video-title">{video.title}</h3>
              <p className="youtube-video-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default YouTubeSection;
