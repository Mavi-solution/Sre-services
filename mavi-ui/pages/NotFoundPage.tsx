import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center px-6 py-24">
    <div className="text-center max-w-lg">
      <p className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-4">
        Error 404
      </p>
      <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6">
        Page Not Found
      </h1>
      <p className="text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
        That page doesn&rsquo;t exist. It may have moved, or the link may be out of date.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="px-8 py-4 bg-gradient-to-r from-[#42E695] to-[#3BB2B8] text-slate-950 font-black rounded-xl uppercase tracking-widest text-xs hover:scale-105 transition-transform"
        >
          Back to Home
        </Link>
        <Link
          to="/services"
          className="px-8 py-4 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-black rounded-xl uppercase tracking-widest text-xs hover:border-blue-500/40 transition-colors"
        >
          Browse Services
        </Link>
      </div>
    </div>
  </div>
);
