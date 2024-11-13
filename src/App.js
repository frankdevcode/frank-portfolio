// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import './App.css';

import Header from './componentes/Header';
import TwistBanner from './componentes/TwistBanner';
import Footer from './componentes/Footer';
import Home from './componentes/Home';
import HomeMobile from './componentes/HomeMobile';
import PrivacyPolicy from './componentes/PrivacyPolicy';
import TermsAndConditions from './componentes/TermsAndConditions';
import AboutFrancisco from './componentes/AboutFrancisco';
import Contact from './componentes/Contact';
import HelpCenter from './componentes/HelpCenter';
import ProjectFrank from './componentes/ProjectFrank';
import Ecommerce from './componentes/Ecommerce';
import ApiProjects from './componentes/ApiProject';
import MiProjects from './componentes/MiProjects';
import PerfilProfesional from './componentes/PerfilProfesional';
import Blog from './componentes/Blog';
import PostDetail from './componentes/PostDetail';
import SearchResults from './componentes/SearchResults';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const [posts, setPosts] = useState([
    // Proyectos
    { 
        title: 'Diseño y desarrollo del sitio web profesional Frank', 
        content: 'Este proyecto es la creación de un portafolio personal...', 
        summary: 'Portafolio web personal con diseño moderno y responsive',
        path: '/frank', 
        type: 'project' 
    },
    { 
        title: 'Desarrollo de una plataforma de comercio electrónico', 
        content: 'Este proyecto ofrece una plataforma de comercio en línea...', 
        summary: 'Plataforma e-commerce completa con carrito de compras y pagos online',
        path: '/ecommerce', 
        type: 'project' 
    },
    { 
        title: 'Creación de una API potente y versátil para el comercio electrónico', 
        content: 'Esta API ha sido diseñada...', 
        summary: 'API RESTful para gestión de productos, usuarios y transacciones',
        path: '/api', 
        type: 'project' 
    },
    
    // Post Blog con "shortSlug"
    { 
        title: 'El rey de la simplicidad y la Inteligencia Artificial', 
        content: 'Python se mantiene como un pilar...', 
        summary: 'Explorando el rol de Python en el desarrollo de IA y su simplicidad característica',
        path: '/blog/python', 
        shortSlug: 'python', 
        type: 'blog' 
    },
    { 
        title: 'La columna vertebral del desarrollo web', 
        content: 'JavaScript continúa siendo...', 
        summary: 'Análisis del impacto de JavaScript en el desarrollo web moderno',
        path: '/blog/javascript', 
        shortSlug: 'javascript', 
        type: 'blog' 
    },
    { 
        title: 'La batalla por el futuro de la programación', 
        content: 'En el ecosistema de programación...', 
        summary: 'Comparativa entre Rust y Go: rendimiento, seguridad y casos de uso',
        path: '/blog/rust-go', 
        shortSlug: 'rust-go', 
        type: 'blog' 
    },
    { 
        title: 'Introducción a Git y GitHub', 
        content: 'Git y GitHub se han convertido...', 
        summary: 'Guía básica sobre control de versiones con Git y colaboración en GitHub',
        path: '/blog/git-github', 
        shortSlug: 'git-github', 
        type: 'blog' 
    },
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
        <Header />
        <Routes>
          <Route path='/' element={
            <>
              <TwistBanner />
              {isMobile ? <HomeMobile /> : <Home />}
            </>
          } />
          <Route path='/api' element={<ApiProjects />} />
          <Route path='/ecommerce' element={<Ecommerce />} />
          <Route path='/frank' element={<ProjectFrank />} />
          <Route path='/ayuda' element={<HelpCenter />} />
          <Route path='/politica-de-privacidad' element={<PrivacyPolicy />} />
          <Route path='/terminos-y-condiciones' element={<TermsAndConditions />} />
          <Route path='/sobre-francisco' element={<AboutFrancisco />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/proyectos' element={<MiProjects />} />
          <Route path='/perfil-profesional' element={<PerfilProfesional />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/search' element={<SearchResults posts={posts} />} />
          <Route exact path='/blog/:shortSlug' element={<PostDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
