
import React from 'react';

// DRAFT case studies: confirm industries, figures and timelines before publishing.
const moreCases = [
  {
    industry: 'E-commerce Platform',
    icon: 'fa-cart-shopping',
    title: 'Peak-season traffic without the outages',
    challenge:
      'Checkout slowed down and failed during sale events, and the in-house team was firefighting through every launch.',
    solution:
      'Load-tested the platform, added Kubernetes autoscaling, set SLOs for checkout and put our offshore SRE team on 24/7 watch during sale windows.',
    results: [
      { value: '99.95%', label: 'Checkout uptime' },
      { value: '3x', label: 'Peak traffic handled' },
      { value: '0', label: 'Sale-day outages' },
    ],
  },
  {
    industry: 'SaaS / Startup',
    icon: 'fa-cloud',
    title: 'Cloud bill cut while releases got faster',
    challenge:
      'Over-provisioned cloud resources and manual deployments meant high monthly costs and slow, risky releases.',
    solution:
      'Right-sized compute, moved workloads to autoscaling and spot capacity, and built CI/CD pipelines with automated rollbacks.',
    results: [
      { value: '35%', label: 'Lower cloud cost' },
      { value: '5x', label: 'More frequent deploys' },
      { value: '<10m', label: 'Rollback time' },
    ],
  },
  {
    industry: 'Business Services',
    icon: 'fa-headset',
    title: 'An offshore SRE team running 24/7 in weeks',
    challenge:
      'The client had no out-of-hours cover, so issues found overnight waited until morning and customers noticed first.',
    solution:
      'Set up a dedicated offshore SRE team with runbooks, follow-the-sun on-call and synthetic monitoring of key customer journeys.',
    results: [
      { value: '24/7', label: 'Coverage' },
      { value: '70%', label: 'Faster detection' },
      { value: '4 wks', label: 'To go live' },
    ],
  },
];

export const CaseStudy: React.FC = () => {
  const metrics = [
    { label: 'MTTR REDUCTION', value: '85%', trend: 'down', icon: 'fa-stopwatch' },
    { label: 'ALERT VOLUME', value: '99%', trend: 'down', icon: 'fa-bell-slash' },
    { label: 'CUSTOMER IMPACT', value: 'ZERO', trend: 'stable', icon: 'fa-user-check' }
  ];

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-16">
          <h2 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] mb-4">Operational Success</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">WORK</h3>
        </div>

        <div className="glass-card border border-slate-200 dark:border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group transition-colors">
          <div className="grid lg:grid-cols-12">
            {/* Visual Side: Infrastructure Cluster */}
            <div className="lg:col-span-5 relative min-h-[500px] flex flex-col">
              <div className="absolute inset-0 bg-slate-950">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-110"
                  alt="Infrastructure Cluster"
                />
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
              </div>
              
              {/* Vertical blending gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white dark:to-[#050B14] lg:block hidden"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#050B14] lg:hidden block"></div>

              {/* Topic Label: Infrastructure Cluster */}
              <div className="absolute top-8 left-8 z-20">
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-md backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  <span className="text-[9px] font-mono-tech font-bold text-blue-400 uppercase tracking-[0.2em]">INFRASTRUCTURE CLUSTER</span>
                </div>
              </div>

              {/* Centered Comparison Cards */}
              <div className="flex-grow flex flex-col justify-center p-8 md:p-12 space-y-6 relative z-10">
                <div className="space-y-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] ml-2">BEFORE_SRE</span>
                  <div className="p-5 bg-white/80 dark:bg-red-500/5 backdrop-blur-sm border border-red-500/20 rounded-2xl shadow-xl">
                    <p className="text-slate-900 dark:text-red-100 text-sm font-bold leading-relaxed">"System instability caused 450+ alerts during peak hours."</p>
                  </div>
                </div>
                
                <div className="flex justify-center py-2">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-slate-600 shadow-inner">
                    <i className="fa-solid fa-arrow-down-long animate-bounce"></i>
                  </div>
                </div>
                
                <div className="space-y-3 transform transition-transform duration-500 group-hover:translate-y-2">
                  <span className="text-[10px] font-black text-[#42E695] uppercase tracking-[0.3em] ml-2">AFTER_MONITRONIX</span>
                  <div className="p-5 bg-white/80 dark:bg-green-500/5 backdrop-blur-sm border border-green-500/20 rounded-2xl shadow-xl">
                    <p className="text-slate-900 dark:text-green-50 text-sm font-bold leading-relaxed italic">"Intelligent noise reduction. Zero engineer burnout."</p>
                  </div>
                </div>
              </div>

              {/* Corner Tech Decor */}
              <div className="absolute bottom-6 left-8 text-[8px] font-mono-tech text-slate-500 uppercase tracking-widest opacity-40">
                NODE_ID: 882-XQ-CLUSTER
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-center bg-white/50 dark:bg-transparent">
              <h4 className="text-[11px] font-black text-[#2E7CF6] uppercase tracking-[0.4em] mb-6">Featured Case Study</h4>
              <h5 className="text-3xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">Panic-Free Management</h5>
              
              <div className="grid md:grid-cols-2 gap-12 mb-10">
                <div>
                  <h6 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">The Challenge</h6>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Frequent alert storms during deployment windows led to critical downtime and customer dissatisfaction.</p>
                </div>
                <div>
                  <h6 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">The Strategic Win</h6>
                  <p className="text-green-600 dark:text-[#42E695] text-xl font-black uppercase italic leading-tight">"Efficiency through noise reduction."</p>
                </div>
              </div>

              <div className="mb-12">
                <h6 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-200 dark:border-white/5 pb-2">Outcome Metrics</h6>
                <div className="grid grid-cols-3 gap-4">
                  {metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 group-hover:border-blue-500/20 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <i className={`fa-solid ${m.icon} text-[10px] text-blue-500`}></i>
                        <span className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">{m.label}</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-2xl font-black ${m.trend === 'down' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'} font-mono-tech`}>
                          {m.trend === 'down' && '↓'}{m.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                 {['Anomaly Detection', 'Smart Aggregation', 'Self-Healing'].map(tag => (
                   <span key={tag} className="px-4 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest hover:text-blue-500 dark:hover:text-white transition-colors cursor-default">{tag}</span>
                 ))}
              </div>
            </div>
          </div>
        </div>

        {/* More case studies.
            DRAFT: industries, numbers and timelines are placeholders to be confirmed by MaVi before merge. */}
        <div className="mt-16">
          <h4 className="text-[11px] font-black text-[#2E7CF6] uppercase tracking-[0.4em] mb-8">More Success Stories</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {moreCases.map((c) => (
              <div
                key={c.title}
                className="flex flex-col rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#42E695]/20 to-[#2E7CF6]/20 flex items-center justify-center">
                    <i className={`fa-solid ${c.icon} text-[#2E7CF6]`}></i>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{c.industry}</span>
                </div>
                <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4 leading-snug">{c.title}</h5>
                <div className="mb-3">
                  <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">Challenge</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1">{c.challenge}</p>
                </div>
                <div className="mb-6">
                  <span className="text-[10px] font-black text-green-600 dark:text-[#42E695] uppercase tracking-[0.2em]">What We Did</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1">{c.solution}</p>
                </div>
                <div className="mt-auto grid grid-cols-3 gap-2 pt-5 border-t border-slate-200 dark:border-white/10">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <div className="text-lg font-black text-green-600 dark:text-green-400 font-mono-tech">{r.value}</div>
                      <div className="text-[9px] font-black uppercase tracking-tight text-slate-500 leading-tight">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
