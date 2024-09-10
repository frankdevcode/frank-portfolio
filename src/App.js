import React from 'react';
import Header from './componentes/Header'; // Importando el Header
import Footer from './componentes/Footer'; // Importando el Footer
import MainContent from './componentes/MainContent'; // Componente principal de contenido

// Rutas para nuevas páginas 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './componentes/PrivacyPolicy';
import TermsAndConditions from './componentes/TermsAndConditions';
import AboutFrancisco from './componentes/AboutFrancisco';
import Contact from './componentes/Contact';
import HelpCenter from './componentes/HelpCenter';
import Briefcase from './componentes/Briefcase';
import Project from './componentes/Project';
import Ecommerce from './componentes/Ecommerce';
import ApiProjects from './componentes/ApiProject';

// Importando componentes para dispositivos moviles
import HeaderMobile from './componentes/HeaderMobile';
import MainContentMobile from './componentes/MainContentMobile';

// Rutas de barra de busqueda

// Importando el archivo App.css
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header /> {/* Header escritorio */}
        <HeaderMobile /> {/* Header dispositivos moviles */}
        <Routes>
          <Route path='/api' element={<ApiProjects />} />
          <Route path='/ecommerce' element={<Ecommerce />} />
          <Route path='/frank' element={<Project />} />
          <Route path='/portafolio' element={<Briefcase />} />
          <Route path='/ayuda' element={<HelpCenter />} />
          <Route path='/politica-de-privacidad' element={<PrivacyPolicy />} />
          <Route path='/terminos-y-condiciones' element={<TermsAndConditions />} />
          <Route path='/sobre-francisco' element={<AboutFrancisco />} />
          <Route path='/contacto' element={<Contact />} />
          {/*<Route path='/frank' element={<FrankProjectDetails title='Diseño y desarrollo del sitio web profesional Frank' />} />*/}
          <Route path='/' element={<MainContent />} />
        </Routes>
        <MainContentMobile /> {/* Main para dispositivos moviles */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
