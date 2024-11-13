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
            <h1 className='title-one-twist-banner'>Construyamos puentes entre sueños y realidad</h1>
            <h2 className='paragraph-one-twist-banner'>Soy Francisco Perlaza</h2>
          </div>
          <div className='container-engineer-fp-twist-banner'>
            <p className='text-engineer-fp-twist-banner'>Ing. Sistemas</p>
            <div>
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwistBanner; // Exportando el componente