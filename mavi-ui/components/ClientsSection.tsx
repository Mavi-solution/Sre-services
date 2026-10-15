
import React from 'react';

const clients = [
  {
    id: 1,
    name: 'Placibo Technologies Pvt Ltd',
    logoUrl: 'https://i.postimg.cc/nLnXXpBD/Logo-(1).png',
  },
  {
    id: 2,
    name: 'Rainbow Gate Marketing',
    logoUrl: 'https://i.postimg.cc/mrcysmXc/Picsart_26_02_20_12_45_52_806.png',
  },
  {
    id: 3,
    name: 'Vivasvana',
    logoUrl: '/images/vivasvana-logo.png',
  },
];

export const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="py-24 relative overflow-hidden bg-white dark:bg-void-navy transition-colors duration-300">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-16 text-left">
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Our Clients
          </h3>
        </div>

        <div className="flex justify-start items-center gap-8 md:gap-12 flex-wrap">
          {clients.map((client) => (
            <a
              key={client.id}
              //href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out transform hover:scale-105"
            >
            <img
              src={client.logoUrl}
              alt={`${client.name} logo`}
              className={`w-[220px] h-[75px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out ${
                client.id === 2
                  ? 'scale-150'
                  : client.id === 3
                  ? 'scale-150'
                  : ''
              }`}
            />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};


