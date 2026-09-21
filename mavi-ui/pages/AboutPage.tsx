import React from 'react';
import { Link } from 'react-router-dom';
import { About } from '../components/About';
import { SREPhilosophy } from '../components/SREPhilosophy';
import { ClientsSection } from '../components/ClientsSection';
import { TechStack } from '../components/TechStack';

export const AboutPage: React.FC = () => (
  <div className="pt-20">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <nav aria-label="Breadcrumb" className="mb-10">
        <ol className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-900 dark:text-white">About</li>
        </ol>
      </nav>
      <header className="mb-4 max-w-3xl">
        <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-4">
          Who We Are
        </p>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none mb-6">
          About MaviSolution
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          We are a Site Reliability Engineering and DevOps practice for teams whose
          uptime is their product. This page covers how we work, the reliability
          principles we hold to, and the technology we run in production.
        </p>
      </header>
    </div>
    <About />
    <SREPhilosophy />
    <ClientsSection />
    <TechStack />
  </div>
);
