import React, { useState } from 'react';
import '../style-sheet/TwistBanner.css';
import SearchBar from '../componentes/SearchBar';

const TwistBanner = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (    
    <div className='main-container-of-header-number-one'>
      {/* Añadimos las partículas aquí */}
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      
      <div className='child-container-number-two'>
        <div className='container-header-number-three-twist-banner'>
          <div className='container-child-info-banner'>
            <h1 className='title-one-twist-banner'>HOLA, SOY</h1>
            <h2 className='paragraph-one-twist-banner'>FRANCISCO PERLAZA</h2>
          </div>
          <div className='container-engineer-fp-twist-banner'>
            <p className='text-engineer-fp-twist-banner'>Ingeniero de Sistemas | Software Engineer</p>
            <div>
              <SearchBar onSearch={handleSearch} />
            </div>

            {/* Redes sociales */}
            <div className="social-media-links">
              <p className="social-media-text">Conecta conmigo en:</p>
              <div className="social-media-icons">
                <a href="https://linkedin.com/in/franciscoperlaza/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://tiktok.com/@franciscoperlazza" target="_blank" rel="noopener noreferrer">TikTok</a>
                <a href="https://instagram.com/franciscoperlazza/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://youtube.com/@frankdevcoder" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://x.com/franklaza" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwistBanner; // Exportando el componente