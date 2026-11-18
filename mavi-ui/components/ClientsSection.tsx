import React from 'react';

const clients = [
  {
    id: 1,
    name: 'Placibo Technologies Pvt Ltd',
    logoUrl: 'https://i.postimg.cc/nLnXXpBD/Logo-(1).png',
    scale: '',
  },
  {
    id: 2,
    name: 'Rainbow Gate Marketing',
    logoUrl: 'https://i.postimg.cc/mrcysmXc/Picsart_26_02_20_12_45_52_806.png',
    scale: 'scale-150',
  },
  {
    id: 3,
    name: 'Vivasvana',
    logoUrl: '/images/vivasvana-logo.png',
    scale: 'scale-150',
  },
];

// Repeat the list so the strip is always wider than the screen, then render it twice
// so the scroll can loop seamlessly.
const REPEAT = 3;
const strip = Array.from({ length: REPEAT }).flatMap(() => clients);

export const ClientsSection: React.FC = () => {
  return (
    <section
      id="clients"
      className="py-20 relative overflow-hidden bg-white dark:bg-void-navy transition-colors duration-300"
    >
      <style>{`
        @keyframes clients-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .clients-track { animation: clients-scroll 30s linear infinite; }
        .clients-marquee:hover .clients-track { animation-play-state: paused; }
        .clients-marquee {
          -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
        }
        @media (prefers-reduced-motion: reduce) {
          .clients-track { animation: none; }
        }
      `}</style>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mb-12 text-center">
        <h2 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] mb-4">
          Trusted By
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          Our Clients
        </h3>
      </div>

      <div className="clients-marquee relative z-10 overflow-hidden">
        <div className="clients-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {strip.map((client, i) => (
                <div
                  key={`${copy}-${i}`}
                  className="mx-6 md:mx-10 flex items-center justify-center w-[200px] h-[90px] rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 px-6"
                  title={client.name}
                >
                  <img
                    src={client.logoUrl}
                    alt={copy === 0 ? `${client.name} logo` : ''}
                    className={`max-w-[150px] max-h-[55px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 ${client.scale}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
