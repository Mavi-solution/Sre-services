import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckCircle2, Target, ArrowRight } from 'lucide-react';
import { OFFERINGS, getOffering } from '../data/services';
import { SERVICE_REGIONS_SHORT } from '../data/site';

/**
 * Dedicated page per service.
 *
 * This content previously lived only inside a click-to-open modal in
 * ServicePortfolio.tsx, so it had no URL and never reached the DOM for
 * crawlers. SERP analysis showed every competitor ranking for these
 * commercial queries uses a dedicated /services/<name>/ page.
 */
export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const offering = slug ? getOffering(slug) : undefined;

  if (!offering) return <Navigate to="/services" replace />;

  const isGreen = offering.color === 'green';
  const accent = isGreen ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400';
  const related = OFFERINGS.filter((o) => o.slug !== offering.slug).slice(0, 3);

  return (
    <article className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-900 dark:text-white">{offering.title}</li>
          </ol>
        </nav>

        <header className="mb-14">
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 ${
              isGreen ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
            }`}
            aria-hidden="true"
          >
            <i className={`fa-solid ${offering.icon}`}></i>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none mb-6">
            {offering.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {offering.desc}
          </p>
        </header>

        <section className="mb-16" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-5">
            Overview
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {offering.details.overview}
          </p>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mt-4">
            {offering.title} is delivered by MaviSolution as a fully managed engagement for
            teams across {SERVICE_REGIONS_SHORT}, with engineering coverage aligned to your
            release cadence and on-call requirements.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">
              What&rsquo;s Included
            </h2>
            <ul className="space-y-4">
              {offering.details.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${accent}`} aria-hidden="true" />
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="benefits-heading">
            <h2 id="benefits-heading" className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">
              Business Outcomes
            </h2>
            <ul className="space-y-4">
              {offering.details.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Target className={`w-5 h-5 mt-0.5 shrink-0 ${accent}`} aria-hidden="true" />
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="glass-card rounded-[32px] p-10 mb-16 border border-slate-200 dark:border-white/5" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">
            Talk to an Engineer
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Tell us where reliability is costing you time or revenue. We&rsquo;ll scope a
            {' '}{offering.title.toLowerCase()} engagement around your current stack.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#42E695] to-[#3BB2B8] text-slate-950 font-black rounded-xl uppercase tracking-widest text-xs hover:scale-105 transition-transform"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </section>

        <section aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">
            Related Services
          </h2>
          <ul className="grid sm:grid-cols-3 gap-5">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to={`/services/${r.slug}`}
                  className="block glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-colors h-full"
                >
                  <span className="block font-bold text-slate-900 dark:text-white mb-2">{r.title}</span>
                  <span className="block text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {r.desc.slice(0, 90)}&hellip;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};
