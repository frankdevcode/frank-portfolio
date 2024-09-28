// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import MainContent from './componentes/MainContent';
import PrivacyPolicy from './componentes/PrivacyPolicy';
import TermsAndConditions from './componentes/TermsAndConditions';
import AboutFrancisco from './componentes/AboutFrancisco';
import Contact from './componentes/Contact';
import HelpCenter from './componentes/HelpCenter';
import Project from './componentes/ProjectFrank';
import Ecommerce from './componentes/Ecommerce';
import ApiProjects from './componentes/ApiProject';
import MiProjects from './componentes/MiProjects';
import Novedades from './componentes/Novedades';
import Blog from './componentes/Blog';
import PostDetail from './componentes/PostDetail';
import SearchResultsDisplay from './componentes/SearchResultsDisplay';
import HeaderMobile from './componentes/HeaderMobile';
import MainContentMobile from './componentes/MainContentMobile';

import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Lista de posts resultados de busqueda ENTER o boton buscar
  const [posts, setPosts] = useState([
    // Proyectos
    { title: 'Diseño y desarrollo del sitio web profesional Frank', content: 'Este proyecto es la creación de un portafolio personal para mos...', path: '/frank' },
    { title: 'Desarrollo de una plataforma de comercio electrónico', content: 'Este proyecto ofrece una plataforma de comercio en línea inno...', path: '/ecommerce' },
    { title: 'Creación de una API potente y versátil para el comercio electrónico', content: 'Esta API ha sido diseñada para optimizar el rendimien...', path: '/api' },

    // Articulos del blog
    { title: 'El rey de la simplicidad y la Inteligencia Artificial', content: 'Python se mantiene como un pilar fundamental en el ecosistema de la programación. Si bien fue creado...', path: '/post/1' },
    { title: 'La columna vertebral del desarrollo web', content: 'JavaScript continúa siendo la piedra angular del desarrollo web, pero su influencia no se limita a l...', path: '/post/2' },
    { title: 'La batalla por el futuro de la programación', content: 'En el ecosistema de programación actual, dos lenguajes han emergido como los favoritos para el desar...', path: '/post/3' },
  ]);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='App'>
        {isMobile ? <HeaderMobile /> : <Header />}
        <Routes>
          <Route path='/api' element={<ApiProjects />} />
          <Route path='/ecommerce' element={<Ecommerce />} />
          <Route path='/frank' element={<Project />} />
          <Route path='/ayuda' element={<HelpCenter />} />
          <Route path='/politica-de-privacidad' element={<PrivacyPolicy />} />
          <Route path='/terminos-y-condiciones' element={<TermsAndConditions />} />
          <Route path='/sobre-francisco' element={<AboutFrancisco />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/proyectos' element={<MiProjects />} />
          <Route path='/' element={isMobile ? <MainContentMobile /> : <MainContent />} />
          <Route path='/novedades' element={<Novedades />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route path='/search' element={<SearchResults posts={posts} />} />
          <Route path='/post/:id' element={<PostDetail />} />
          {/*<Route path='/post/:id' element={<PostDetail posts={posts} />} /> Si el componente necesita recibir posts como prop*/}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Componente para manejar los resultados de búsqueda
const SearchResults = ({ posts }) => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('q');

  // Filtrar los posts que coincidan con el término de búsqueda
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return <SearchResultsDisplay posts={filteredPosts} searchTerm={searchTerm} />;
};

export default App;
