import React from 'react';

interface ProductsSectionProps {
  onContactClick: () => void;
}

// TODO before launch: confirm product descriptions and add live links (url) for each app.
const products = [
  {
    id: 'romtally',
    name: 'Travel & Tally',
    sub: 'RomTally App',
    icon: 'fa-solid fa-plane-departure',
    accent: 'from-[#FACC15] to-[#F97316]',
    tagline: 'Plan trips and keep every shared expense tallied.',
    features: [
      'Plan trips with your group in one place',
      'Track shared expenses as you go',
      'See who owes what and settle up easily',
    ],
    url: '',
  },
  {
    id: 'kanvo',
    name: 'Kanvo',
    sub: 'Task board · Notes · Sticky wall',
    icon: 'fa-solid fa-table-columns',
    accent: 'from-[#42E695] to-[#3BB2B8]',
    tagline: 'A Jira-style board, notepad and sticky-note wall for every team.',
    features: [
      'Drag-and-drop task board with priorities, assignees and due dates',
      'Shared notepad and sticky-note walls for each team',
      'Branded sign-in per organisation, secured with email codes',
      'Works for companies, schools, startups and travel groups',
    ],
    url: '',
  },
  {
    id: 'timora',
    name: 'Timora',
    sub: 'Timesheet & time tracking',
    icon: 'fa-solid fa-clock',
    accent: 'from-[#2E7CF6] to-[#6366F1]',
    tagline: 'Log hours, track projects and approve timesheets.',
    features: [
      'Quick daily and weekly time entry',
      'Track hours by project and task',
      'Simple manager review and approval',
    ],
    url: '',
  },
];

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onContactClick }) => {
  const scrollToCards = () => {
    const el = document.getElementById('product-cards');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="products"
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#050B14] transition-colors duration-300"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#42E695]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Intro + featured apps panel (Zoho-style) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] mb-4">
              Products
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Apps built by MaVi to run your work
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              The same engineering team that keeps our clients' platforms reliable builds our own
              products: simple, secure apps for teams, travellers and businesses.
            </p>
            <button
              onClick={onContactClick}
              className="px-8 py-4 bg-gradient-to-r from-[#42E695] to-[#3BB2B8] text-slate-950 font-black rounded-xl hover:scale-105 transition-all duration-300 uppercase tracking-[0.1em] text-sm shadow-xl shadow-green-500/20"
            >
              Request a Demo <i className="fa-solid fa-chevron-right ml-2 text-xs"></i>
            </button>
          </div>

          <div className="rounded-3xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 shadow-xl p-8">
            <div className="text-center text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 mb-8">
              Featured Apps
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {products.map((p) => (
                <button
                  key={p.id}
                  onClick={scrollToCards}
                  className="flex items-start gap-4 text-left group"
                >
                  <span
                    className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${p.accent} flex items-center justify-center shadow-md`}
                  >
                    <i className={`${p.icon} text-white text-base`}></i>
                  </span>
                  <span>
                    <span className="block font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#42E695] transition-colors">
                      {p.name}
                    </span>
                    <span className="block text-sm text-slate-500 dark:text-slate-400 leading-snug">
                      {p.tagline}
                    </span>
                    <span className="block mt-1 text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                      Powered by MaVi
                    </span>
                  </span>
                </button>
              ))}
            </div>
            <div className="text-center mt-10">
              <button
                onClick={scrollToCards}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-[#42E695] hover:underline"
              >
                Explore all products <i className="fa-solid fa-chevron-right ml-1 text-[9px]"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Product detail cards */}
        <div id="product-cards" className="grid md:grid-cols-3 gap-6 scroll-mt-28">
          {products.map((p) => (
            <div
              key={p.id}
              className="flex flex-col rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <span
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.accent} flex items-center justify-center shadow-lg`}
                >
                  <i className={`${p.icon} text-white text-xl`}></i>
                </span>
                <div>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white">{p.name}</h4>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{p.sub}</div>
                  <div className="mt-1 inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-[0.15em] text-[#2E7CF6] dark:text-[#42E695]">
                    <i className="fa-solid fa-bolt text-[8px]"></i> Powered by MaVi
                  </div>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-5">{p.tagline}</p>
              <ul className="space-y-2 mb-8 flex-grow">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <i className="fa-solid fa-check text-[#42E695] mt-1 text-xs"></i>
                    {f}
                  </li>
                ))}
              </ul>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Try {p.name}
                </a>
              ) : (
                <button
                  onClick={onContactClick}
                  className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Request a Demo
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
