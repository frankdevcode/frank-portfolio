// MainContentMobile.js
import React from 'react';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import EducationCarousel from './EducationCarousel';
import RecentArticles from './RecentArticles';
import blogPosts from '../data/BlogPostData';
import '../style-sheet/HomeMobile.css';



const HomeMobile = () => {
  const recentArticles = blogPosts.slice(-3).reverse();

  return (
    <div className='main-content-mobile'>
      <ProjectsSection />
      <SkillsSection />
      <RecentArticles recentArticles={recentArticles} />
      <EducationCarousel />
      {/* Otros contenidos de HomeMobile */}
    </div>
  );
};

export default HomeMobile;
