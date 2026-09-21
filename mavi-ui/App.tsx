import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { ThemeToggle } from './components/ThemeToggle';
import { Seo } from './components/Seo';
import { ContactPage } from './components/ContactPage';
import { LegalPage } from './components/LegalPage';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { NotFoundPage } from './pages/NotFoundPage';

/** Scrolls to top on route change, but preserves in-page #anchor jumps. */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);
  return null;
};

const App: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#050B14] text-slate-900 dark:text-slate-100 transition-colors duration-300">
    <Seo />
    <ScrollToTop />
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-6 focus:py-3 focus:bg-white focus:text-slate-900 focus:rounded-lg focus:shadow-xl focus:font-bold"
    >
      Skip to main content
    </a>
    <Header />
    <main id="main-content" className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
    <ThemeToggle />
    <Chatbot />
    <Footer />
  </div>
);

export default App;
