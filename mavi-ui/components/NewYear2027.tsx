import React from 'react';

interface NewYear2027Props {
  onContactClick: () => void;
}

// Firework bursts: position (% of section), colour, size, delay (s)
const bursts = [
  { top: 12, left: 8, color: '#42E695', size: 150, delay: 0 },
  { top: 22, left: 38, color: '#2E7CF6', size: 120, delay: 0.9 },
  { top: 8, left: 62, color: '#FACC15', size: 170, delay: 1.7 },
  { top: 40, left: 20, color: '#3BB2B8', size: 110, delay: 2.4 },
  { top: 18, left: 88, color: '#F472B6', size: 140, delay: 0.5 },
  { top: 55, left: 52, color: '#42E695', size: 100, delay: 3.1 },
  { top: 70, left: 6, color: '#FACC15', size: 120, delay: 1.3 },
  { top: 62, left: 92, color: '#2E7CF6', size: 130, delay: 2.0 },
];

const PARTICLES = 14;

const setupSteps = [
  {
    step: '01',
    title: 'Discover',
    text: 'We learn your product, roadmap and tech stack, and agree the skills, team size and ways of working.',
  },
  {
    step: '02',
    title: 'Build Your Team',
    text: 'We recruit dedicated engineers and SREs who match your stack and overlap with your time zones.',
  },
  {
    step: '03',
    title: 'Onboard & Integrate',
    text: 'Your ODC joins your tools, Slack, sprints and on-call rota, working as an extension of your team.',
  },
  {
    step: '04',
    title: 'Deliver & Scale',
    text: 'Regular delivery and reliability reports, and the team grows or shrinks as your needs change.',
  },
];

const odcCapabilities = [
  { icon: 'fa-solid fa-shield-halved', label: 'SRE & DevOps' },
  { icon: 'fa-solid fa-code', label: 'Full-Stack Development' },
  { icon: 'fa-solid fa-cloud', label: 'Cloud & Kubernetes' },
  { icon: 'fa-solid fa-vial-circle-check', label: 'QA & Automation' },
];

const support = [
  { icon: 'fa-solid fa-users', label: 'Dedicated engineers & SREs' },
  { icon: 'fa-solid fa-headset', label: '24/7 monitoring & on-call' },
  { icon: 'fa-solid fa-diagram-project', label: 'Fits your existing workflows' },
  { icon: 'fa-solid fa-up-right-and-down-left-from-center', label: 'Scale the team up or down' },
  { icon: 'fa-solid fa-list-check', label: 'End-to-end project management' },
  { icon: 'fa-solid fa-user-tie', label: 'Dedicated MaVi delivery manager' },
];

export const NewYear2027: React.FC<NewYear2027Props> = ({ onContactClick }) => {
  return (
    <section
      id="new-year-2027"
      className="ny-section relative overflow-hidden bg-[#050B14] text-white lg:min-h-[calc(100vh-80px)]"
    >
      <style>{`
        @keyframes ny-burst {
          0%   { transform: rotate(var(--a)) translateY(0) scale(1); opacity: 0; }
          8%   { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: rotate(var(--a)) translateY(calc(var(--r) * -1)) scale(0.2); opacity: 0; }
        }
        @keyframes ny-flash {
          0%, 100% { transform: translate(-50%, -50%) scale(0.2); opacity: 0; }
          10% { transform: translate(-50%, -50%) scale(1); opacity: 0.9; }
          40% { opacity: 0; }
        }
        @keyframes ny-glow {
          0%, 100% { filter: drop-shadow(0 0 18px rgba(66,230,149,0.55)) drop-shadow(0 0 40px rgba(46,124,246,0.35)); }
          50%      { filter: drop-shadow(0 0 30px rgba(66,230,149,0.9)) drop-shadow(0 0 70px rgba(46,124,246,0.6)); }
        }
        @keyframes ny-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes ny-shine {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .ny-burst { position: absolute; width: 0; height: 0; }
        .ny-burst .ny-p {
          position: absolute; left: -3px; top: -3px; width: 6px; height: 6px; border-radius: 9999px;
          animation: ny-burst 2.6s cubic-bezier(.15,.7,.3,1) infinite;
        }
        .ny-burst .ny-flash {
          position: absolute; left: 0; top: 0; width: 60px; height: 60px; border-radius: 9999px;
          animation: ny-flash 2.6s ease-out infinite;
        }
        .ny-year {
          background: linear-gradient(90deg, #42E695, #3BB2B8, #2E7CF6, #FACC15, #42E695);
          background-size: 200% auto;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: ny-shine 4s linear infinite, ny-glow 2.5s ease-in-out infinite;
        }
        .ny-robot {
          animation: ny-float 5s ease-in-out infinite;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 10%, #000 82%, transparent 100%), linear-gradient(to right, transparent 0%, #000 22%, #000 78%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image: linear-gradient(to bottom, transparent 0%, #000 10%, #000 82%, transparent 100%), linear-gradient(to right, transparent 0%, #000 22%, #000 78%, transparent 100%);
          mask-composite: intersect;
        }
        .ny-odc {
          background: linear-gradient(90deg, #42E695, #3BB2B8, #2E7CF6, #42E695);
          background-size: 300% 100%;
          animation: ny-shine 6s linear infinite;
          box-shadow: 0 0 35px rgba(66,230,149,0.2), 0 0 70px rgba(46,124,246,0.12);
        }
        @media (prefers-reduced-motion: reduce) {
          .ny-burst .ny-p, .ny-burst .ny-flash, .ny-year, .ny-robot, .ny-odc { animation: none; }
          .ny-burst { display: none; }
        }
      `}</style>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-[#42E695]/10 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#2E7CF6]/15 blur-[160px] rounded-full"></div>
      </div>

      {/* Fireworks */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {bursts.map((b, i) => (
          <div key={i} className="ny-burst" style={{ top: `${b.top}%`, left: `${b.left}%` }}>
            <span
              className="ny-flash"
              style={{
                background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
                animationDelay: `${b.delay}s`,
              }}
            />
            {Array.from({ length: PARTICLES }).map((_, j) => (
              <span
                key={j}
                className="ny-p"
                style={
                  {
                    background: b.color,
                    boxShadow: `0 0 8px 2px ${b.color}`,
                    animationDelay: `${b.delay}s`,
                    '--a': `${(360 / PARTICLES) * j}deg`,
                    '--r': `${b.size / 2}px`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-6 grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6 lg:gap-10 items-stretch lg:min-h-[calc(100vh-80px)]">
        {/* LEFT: greeting + offshore team */}
        <div className="py-16 lg:py-20 flex flex-col justify-center">
          <div className="inline-flex self-start items-center gap-2 px-3 py-1 bg-[#42E695]/10 border border-[#42E695]/30 rounded-full mb-6">
            <i className="fa-solid fa-champagne-glasses text-[11px] text-[#42E695]"></i>
            <span className="text-[10px] font-black text-[#42E695] uppercase tracking-[0.2em]">
              Season's Greetings from MaVi Solutions
            </span>
          </div>

          <h2 className="font-extrabold tracking-tighter leading-[0.9] mb-6">
            <span className="block text-3xl md:text-5xl text-white">Happy New Year</span>
            <span className="ny-year block text-[5.5rem] md:text-[9rem] lg:text-[10rem]">2027</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
            Thank you to every client and partner who trusted us this year. We wish you a reliable,
            scalable and outage-free 2027, and our{' '}
            <span className="text-white font-bold">Offshore Development Center</span> is ready to take
            on any project to help make it happen.
          </p>

          {/* Offshore Development Center highlight */}
          <div className="ny-odc relative max-w-2xl mb-10 rounded-2xl p-[2px]">
            <div className="rounded-2xl bg-[#07111F]/95 px-6 py-6 md:px-8 md:py-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-[#42E695] to-[#2E7CF6] flex items-center justify-center shadow-lg shadow-green-500/30">
                  <i className="fa-solid fa-building-user text-[15px] text-slate-950"></i>
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#42E695]">
                  New for 2027 · Offshore Development Center
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
                Your dedicated engineering team, run by MaVi
              </h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-5">
                We handle recruitment, infrastructure and management. You keep full control of the
                product roadmap.
              </p>
              <div className="flex flex-wrap gap-2">
                {odcCapabilities.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[12px] font-semibold text-slate-200"
                  >
                    <i className={`${c.icon} text-[11px] text-[#42E695]`}></i>
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Offshore team setup */}
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3BB2B8] mb-4">
            Your ODC, Set Up in 4 Steps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {setupSteps.map((s) => (
              <div
                key={s.step}
                className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-[#42E695]/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-black text-[#42E695]">{s.step}</span>
                  <h3 className="text-base font-bold text-white">{s.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          {/* Support from MaVi */}
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3BB2B8] mb-4">
            What Your ODC Includes
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
            {support.map((s) => (
              <li key={s.label} className="flex items-center gap-3 text-sm text-slate-200">
                <span className="w-8 h-8 shrink-0 rounded-lg bg-gradient-to-br from-[#42E695]/20 to-[#2E7CF6]/20 flex items-center justify-center">
                  <i className={`${s.icon} text-[12px] text-[#42E695]`}></i>
                </span>
                {s.label}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onContactClick}
              className="px-10 py-4 bg-gradient-to-r from-[#42E695] to-[#3BB2B8] text-slate-950 font-black rounded-xl hover:scale-105 transition-all duration-300 uppercase tracking-[0.1em] shadow-2xl shadow-green-500/30"
            >
              Build My Offshore Development Center
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('home');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-4 bg-white/5 border border-white/15 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 uppercase text-[12px] tracking-widest"
            >
              Explore Our Services
            </button>
          </div>
        </div>

        {/* RIGHT: MaVi SRE specialist, full height */}
        <div className="relative flex items-end justify-center h-[75vh] max-h-[720px] lg:max-h-none lg:h-[calc(100vh-80px)] lg:sticky lg:top-20 self-start">
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-[#42E695]/30 blur-2xl rounded-full"></div>
          <img
            src="/images/mavi-sre-specialist.webp"
            alt="MaVi SRE specialist robot"
            className="ny-robot relative h-full w-auto max-w-full lg:max-w-none object-contain object-bottom"
          />
          <div className="absolute top-8 right-0 lg:-right-4 px-4 py-2 rounded-xl bg-[#050B14]/80 border border-[#42E695]/40 backdrop-blur-md shadow-lg shadow-green-500/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#42E695] animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#42E695]">
                SRE Specialist · On Duty 24/7
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
