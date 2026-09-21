import React from 'react';
import { Link } from 'react-router-dom';
import { OFFERINGS } from '../data/services';
import { BRAND, CONTACT } from '../data/site';

/**
 * Site footer.
 *
 * Privacy and Terms were previously <button onClick> with no href, which made
 * them undiscoverable to crawlers (link extraction only follows <a href>).
 * They are now real links, alongside a service directory that gives every
 * /services/<slug> page an internal inbound link from every page on the site.
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const linkClass =
    'text-xs font-bold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-widest';

  return (
    <footer className="bg-white dark:bg-black py-16 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-left">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6" aria-label={`${BRAND.name} home`}>
              <img
                src="/logo.png"
                alt={`${BRAND.name} logo`}
                width={240}
                height={195}
                loading="lazy"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-black tracking-tighter flex items-baseline font-sans">
                <span className="text-[#0066CC]">Ma</span>
                <span className="text-[#65D249]">Vi</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium uppercase tracking-tight">
              Engineering high-performance, ultra-reliable infrastructure for modern enterprises.
            </p>
          </div>

          <nav className="col-span-1" aria-labelledby="footer-explore">
            <h2 id="footer-explore" className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">
              Explore
            </h2>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className={linkClass}>Home</Link></li>
              <li><Link to="/about" className={linkClass}>About Us</Link></li>
              <li><Link to="/services" className={linkClass}>Our Services</Link></li>
              <li><Link to="/case-studies" className={linkClass}>Case Studies</Link></li>
              <li><Link to="/contact" className={linkClass}>Contact Us</Link></li>
            </ul>
          </nav>

          <nav className="col-span-1" aria-labelledby="footer-services">
            <h2 id="footer-services" className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">
              Services
            </h2>
            <ul className="flex flex-col gap-4">
              {OFFERINGS.map((o) => (
                <li key={o.slug}>
                  <Link to={`/services/${o.slug}`} className={linkClass}>
                    {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-1">
            <h2 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">
              Connect
            </h2>
            <div className="flex gap-4 mb-6">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#0077b5] hover:text-white hover:scale-110 hover:border-transparent transition-all duration-300 ease-out"
                aria-label={`${BRAND.name} on LinkedIn`}
              >
                <i className="fa-brands fa-linkedin-in text-lg" aria-hidden="true"></i>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white hover:scale-110 hover:border-transparent transition-all duration-300 ease-out"
                aria-label="Email support"
              >
                <i className="fa-solid fa-envelope text-lg" aria-hidden="true"></i>
              </a>
            </div>
            <a href={`mailto:${CONTACT.email}`} className={linkClass}>
              {CONTACT.email}
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col items-center md:items-start gap-4">
          <p className="text-[11px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-[0.3em]">
            Engineered for reliability. Built for scale.
          </p>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] font-bold">
              © {currentYear} {BRAND.legalName} All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-black hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-300 dark:text-slate-800" aria-hidden="true">|</span>
              <Link
                to="/terms"
                className="text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-black hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
