import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BRAND } from '../data/site';

/**
 * Primary navigation.
 *
 * Every destination is a real <a href> via react-router's Link/NavLink.
 * The previous implementation used onClick handlers and hash fragments, which
 * crawlers cannot follow — Google's link extraction only follows <a href>.
 */
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', to: '/' },
    { name: 'ABOUT', to: '/about' },
    { name: 'SERVICES', to: '/services' },
    { name: 'CASE STUDIES', to: '/case-studies' },
  ];

  const blueStyle = { color: '#0066CC' };
  const greenStyle = { color: '#65D249' };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-colors group ${
      isActive
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#050B14]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3" aria-label={`${BRAND.name} home`}>
            <img
              src="/logo.png"
              alt={`${BRAND.name} logo`}
              width={240}
              height={195}
              className="h-14 w-auto object-contain"
            />
            <span className="text-2xl md:text-3xl font-black tracking-tighter flex items-baseline font-sans">
              <span style={blueStyle}>Ma</span>
              <span style={greenStyle}>Vi</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <nav className="flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.to} end={link.to === '/'} className={linkClass}>
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#0066CC] to-[#65D249] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></span>
                </NavLink>
              ))}
            </nav>

            <Link
              to="/contact"
              className="px-8 py-2.5 text-[11px] font-black uppercase tracking-widest rounded-lg hover:scale-105 transition-all shadow-lg bg-gradient-to-r from-[#42E695] to-[#3BB2B8] text-slate-950 shadow-green-500/20"
            >
              CONTACT
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-400"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-[#050B14] border-b border-slate-200 dark:border-white/10 py-8 px-6 space-y-6"
        >
          <nav className="space-y-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-bold uppercase tracking-widest transition-colors ${
                    isActive ? 'text-blue-600' : 'text-slate-700 dark:text-slate-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center px-6 py-4 bg-gradient-to-r from-[#42E695] to-[#3BB2B8] text-slate-950 font-black rounded-xl uppercase tracking-widest"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
};
