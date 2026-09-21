import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { OFFERINGS } from '../data/services';
import { ServicesTable } from '../components/ServicesTable';
import { SERVICE_REGIONS_SHORT } from '../data/site';

/** Services index — links out to each dedicated service page. */
export const ServicesPage: React.FC = () => (
  <div className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <nav aria-label="Breadcrumb" className="mb-10">
        <ol className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-900 dark:text-white">Services</li>
        </ol>
      </nav>

      <header className="mb-16 max-w-3xl">
        <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-4">
          Our Expertise
        </p>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none mb-6">
          Core Offerings
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          MaviSolution delivers seven managed engineering services covering reliability,
          automation, cloud operations and dedicated development capacity for teams across{' '}
          {SERVICE_REGIONS_SHORT}.
        </p>
      </header>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {OFFERINGS.map((item) => {
          const isGreen = item.color === 'green';
          return (
            <li key={item.slug}>
              <Link
                to={`/services/${item.slug}`}
                className="group glass-card p-10 rounded-[40px] border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between h-full"
              >
                <div>
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 ${
                      isGreen
                        ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                        : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                    }`}
                    aria-hidden="true"
                  >
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <h2 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest ${
                    isGreen ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
                  }`}
                >
                  Explore service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <ServicesTable />
    </div>
  </div>
);
