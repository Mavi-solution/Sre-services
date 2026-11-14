import React from 'react';

interface NewYear2027Props {
  onContactClick: () => void;
}

const highlights = [
  {
    icon: 'fa-solid fa-earth-asia',
    title: 'Dedicated Offshore SRE Team',
    text: 'Experienced site reliability engineers working as an extension of your team, ready to take on projects of any size.',
  },
  {
    icon: 'fa-solid fa-clock',
    title: '24/7 Follow-the-Sun Coverage',
    text: 'Round-the-clock monitoring, on-call and incident response, so your platform stays up while you sleep.',
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'Any Project, End to End',
    text: 'Cloud migrations, observability, CI/CD, Kubernetes and cost optimisation, delivered at offshore value.',
  },
];

export const NewYear2027: React.FC<NewYear2027Props> = ({ onContactClick }) => {
  return (
    <section
      id="new-year-2027"
      className="relative overflow-hidden py-20 bg-white dark:bg-[#07111F] border-y border-slate-200 dark:border-white/5 transition-colors duration-300"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] bg-[#42E695]/10 blur-[140px] rounded-full"></div>
        <div className="absolute -bottom-24 right-1/4 w-[420px] h-[420px] bg-[#2E7CF6]/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#42E695]/10 border border-[#42E695]/20 rounded-full mb-6">
            <i className="fa-solid fa-champagne-glasses text-[10px] text-green-600 dark:text-green-400"></i>
            <span className="text-[9px] font-black text-green-600 dark:text-green-400 uppercase tracking-[0.2em]">
              Season's Greetings
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-6">
            <span className="text-moving-gradient">Happy New Year </span>
            <span className="text-slate-950 dark:text-white">2027</span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Thank you to every client and partner who trusted MaVi Solutions this year. We wish you a
            reliable, scalable and outage-free 2027. And we're ready to help make it happen: our
            <span className="text-slate-900 dark:text-white font-bold"> offshore SRE team </span>
            is ready to take on your next project, whatever its size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-[#42E695]/40 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#42E695]/20 to-[#2E7CF6]/20 flex items-center justify-center mb-5">
                <i className={`${h.icon} text-[#2E7CF6]`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{h.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={onContactClick}
            className="px-12 py-5 bg-gradient-to-r from-[#42E695] to-[#3BB2B8] text-slate-950 font-black rounded-xl hover:scale-105 transition-all duration-300 uppercase tracking-[0.1em] shadow-2xl shadow-green-500/20"
          >
            Start Your 2027 Project
          </button>
        </div>
      </div>
    </section>
  );
};
