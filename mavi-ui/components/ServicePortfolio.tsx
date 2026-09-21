import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { OFFERINGS } from '../data/services';

/**
 * Service overview on the home page.
 *
 * Previously each card opened a modal holding the overview/features/benefits
 * copy. That copy only entered the DOM after a click, so it was invisible to
 * crawlers and had no shareable URL. Cards now render a summary inline and
 * link to the dedicated /services/<slug> page.
 */
export const ServicePortfolio: React.FC = () => (
  <section
    id="portfolio"
    className="py-24 relative overflow-hidden bg-slate-100/30 dark:bg-slate-950/30 transition-colors duration-300"
    aria-labelledby="core-offerings-heading"
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <div className="mb-16">
        <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-4">
          Our Expertise
        </p>
        <h2
          id="core-offerings-heading"
          className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight"
        >
          Core Offerings
        </h2>
      </div>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {OFFERINGS.map((item) => {
          const isGreen = item.color === 'green';
          const accent = isGreen
            ? 'text-green-600 dark:text-green-400'
            : 'text-blue-600 dark:text-blue-400';
          return (
            <li key={item.slug}>
              <div className="group glass-card p-10 rounded-[40px] border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between h-full">
                <div>
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 transition-all duration-500 ${
                      isGreen
                        ? 'bg-green-500/10 text-green-600 dark:text-green-400 group-hover:bg-green-500 group-hover:text-slate-950'
                        : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white'
                    }`}
                    aria-hidden="true"
                  >
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {item.details.overview}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {item.details.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${accent}`} aria-hidden="true" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/services/${item.slug}`}
                  className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest ${accent} hover:gap-3 transition-all`}
                >
                  Explore {item.title}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-14">
        <Link
          to="/services"
          className="inline-flex items-center gap-3 px-8 py-4 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-black rounded-xl uppercase tracking-widest text-xs hover:border-blue-500/40 transition-colors"
        >
          View All Services
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);
