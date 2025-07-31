import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Public pages
import HomePage from './pages/public/HomePage';
import AboutPage from './pages/public/AboutPage';
import ContactPage from './pages/public/ContactPage';
import ServicesPage from './pages/public/ServicesPage';
import ServiceDetailPage from './pages/public/ServiceDetailPage';
import PricingPage from './pages/public/PricingPage';
import BlogIndexPage from './pages/public/BlogIndexPage';
import BlogPostPage from './pages/public/BlogPostPage';
import BlogCategoryPage from './pages/public/BlogCategoryPage';
import BlogTagPage from './pages/public/BlogTagPage';
import CoachesPage from './pages/public/CoachesPage';
import CoachDetailPage from './pages/public/CoachDetailPage';
import NotFoundPage from './pages/public/NotFoundPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      {/* Services Routes */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />
      
      {/* Pricing Route */}
      <Route path="/pricing" element={<PricingPage />} />
      
      {/* Blog Routes */}
      <Route path="/blog" element={<BlogIndexPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/blog/category/:category" element={<BlogCategoryPage />} />
      <Route path="/blog/tag/:tag" element={<BlogTagPage />} />
      
      {/* Coaches Routes */}
      <Route path="/coaches" element={<CoachesPage />} />
      <Route path="/coaches/:slug" element={<CoachDetailPage />} />
      
      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
