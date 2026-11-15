import React, { useEffect, useState } from 'react';

// The MaVi SRE specialist rises from the bottom of the screen with a thank-you
// message, stays for a few seconds, then slides back down and hides.
// Shown once per browser session.

const SHOW_DELAY_MS = 1500;
const VISIBLE_MS = 7000;
const STORAGE_KEY = 'mavi-thanks-2027-shown';

type Phase = 'hidden' | 'in' | 'out';

export const ThanksPopup: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('hidden');

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* storage unavailable: show anyway */
    }

    const showTimer = setTimeout(() => {
      setPhase('in');
      try {
        sessionStorage.setItem(STORAGE_KEY, '1');
      } catch {
        /* ignore */
      }
    }, SHOW_DELAY_MS);
    const hideTimer = setTimeout(() => setPhase('out'), SHOW_DELAY_MS + VISIBLE_MS);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (phase !== 'out') return;
    const t = setTimeout(() => setPhase('hidden'), 750);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === 'hidden') return null;

  return (
    <div
      className={`ty-pop fixed bottom-0 left-2 sm:left-6 z-[60] flex items-end gap-2 sm:gap-3 pointer-events-none ${
        phase === 'in' ? 'ty-in' : 'ty-out'
      }`}
      role="status"
      aria-live="polite"
    >
      <style>{`
        @keyframes ty-rise {
          0%   { transform: translateY(110%); }
          60%  { transform: translateY(-6%); }
          80%  { transform: translateY(2%); }
          100% { transform: translateY(0); }
        }
        @keyframes ty-sink {
          0%   { transform: translateY(0); }
          20%  { transform: translateY(-5%); }
          100% { transform: translateY(115%); }
        }
        @keyframes ty-bubble {
          0%, 45% { opacity: 0; transform: scale(0.6) translateY(20px); }
          75%     { opacity: 1; transform: scale(1.05) translateY(0); }
          100%    { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes ty-wave {
          0%, 100% { transform: rotate(0deg); }
          25%      { transform: rotate(-4deg); }
          75%      { transform: rotate(4deg); }
        }
        .ty-in  { animation: ty-rise 0.9s cubic-bezier(.2,.8,.3,1) both; }
        .ty-out { animation: ty-sink 0.7s ease-in both; }
        .ty-in .ty-bubble { animation: ty-bubble 1.2s ease-out both; }
        .ty-in .ty-robot  { animation: ty-wave 2.4s ease-in-out 1s infinite; transform-origin: bottom center; }
        .ty-robot {
          -webkit-mask-image: radial-gradient(ellipse 50% 55% at 50% 50%, #000 60%, transparent 100%);
          mask-image: radial-gradient(ellipse 50% 55% at 50% 50%, #000 60%, transparent 100%);
        }
        @media (prefers-reduced-motion: reduce) {
          .ty-in, .ty-out, .ty-in .ty-bubble, .ty-in .ty-robot { animation: none; }
        }
      `}</style>

      {/* Robot peeking up from the bottom edge */}
      <div className="relative w-[130px] h-[190px] sm:w-[170px] sm:h-[250px] overflow-hidden shrink-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-[#42E695]/50 blur-xl rounded-full"></div>
        <img
          src="/images/mavi-sre-specialist.webp"
          alt="MaVi SRE specialist"
          className="ty-robot absolute top-0 left-0 w-full h-auto"
        />
      </div>

      {/* Thank-you speech bubble */}
      <div className="ty-bubble pointer-events-auto relative mb-44 sm:mb-32 max-w-[175px] sm:max-w-[300px] rounded-2xl rounded-bl-sm bg-[#07111F]/95 border border-[#42E695]/50 shadow-2xl shadow-green-500/20 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4">
        <button
          onClick={() => setPhase('out')}
          aria-label="Close thank-you message"
          className="absolute top-1.5 right-2 text-slate-400 hover:text-white text-sm leading-none"
        >
          ×
        </button>
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#42E695] mb-1">
          Thank You!
        </div>
        <p className="text-[13px] sm:text-base font-semibold text-white leading-snug pr-3">
          To every client and partner who trusted MaVi this year, thank you. Happy New Year 2027!
        </p>
      </div>
    </div>
  );
};
