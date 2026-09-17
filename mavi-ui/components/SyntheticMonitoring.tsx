import React from 'react';

interface Check {
  name: string;
  meta: string;
  value: string;
  status: 'up' | 'warn' | 'down';
}

interface Event {
  time: string;
  text: string;
}

const checks: Check[] = [
  { name: 'Homepage load', meta: 'Mumbai · HTTP 200', value: '241ms', status: 'up' },
  { name: 'Checkout journey', meta: 'Singapore · 7 steps', value: '1.4s', status: 'up' },
  { name: 'Search API', meta: 'Frankfurt · above 500ms threshold', value: '612ms', status: 'warn' },
  { name: 'Login flow', meta: 'Virginia · 4 steps', value: '889ms', status: 'up' },
  { name: 'SSL certificate', meta: 'Expires in 68 days', value: 'valid', status: 'up' },
  { name: 'Legacy invoice PDF', meta: 'São Paulo · HTTP 504', value: 'timeout', status: 'down' },
  { name: 'DNS resolution', meta: '6 regions', value: '28ms', status: 'up' },
  { name: 'Status page', meta: 'Sydney · HTTP 200', value: '193ms', status: 'up' },
];

const events: Event[] = [
  { time: '09:41', text: 'Search API recovered after 4m of elevated latency in Frankfurt.' },
  { time: '08:02', text: 'Legacy invoice PDF check failed 3 runs in a row. Paged the on-call engineer.' },
  { time: '02:17', text: 'Deploy v2.14.0 verified. All journeys passed post-release.' },
  { time: 'Yesterday', text: 'Added a checkout journey check for the Singapore region.' },
  { time: 'Mon', text: 'Raised the search latency threshold to 500ms after tuning the index.' },
];

const statusDot: Record<Check['status'], string> = {
  up: 'bg-green-500',
  warn: 'bg-amber-400',
  down: 'bg-red-500',
};

const statusBorder: Record<Check['status'], string> = {
  up: 'border-l-green-500',
  warn: 'border-l-amber-400',
  down: 'border-l-red-500',
};

const statusText: Record<Check['status'], string> = {
  up: 'text-green-600 dark:text-green-400',
  warn: 'text-amber-600 dark:text-amber-400',
  down: 'text-red-600 dark:text-red-400',
};

export const SyntheticMonitoring: React.FC = () => {
  return (
    <aside
      aria-label="Synthetic monitoring"
      className="w-full lg:-mt-2 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm flex flex-col h-[560px] lg:h-[640px] lg:sticky lg:top-8 overflow-hidden shadow-xl shadow-slate-900/5 dark:shadow-black/20"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.02] flex-none">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Synthetic monitoring</h3>
          <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
            12 checks · 6 regions · every 60s
          </p>
        </div>
        <span className="text-[10px] font-black uppercase tracking-wider text-green-600 dark:text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 whitespace-nowrap">
          All systems normal
        </span>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 min-h-0 overflow-y-auto px-5 py-5 space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-3">
            <dt className="text-[10px] text-slate-500 dark:text-slate-400 mb-1">Uptime 30d</dt>
            <dd className="font-mono text-lg font-bold text-green-600 dark:text-green-400">
              99.99<span className="text-[10px] text-slate-400 font-normal">%</span>
            </dd>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-3">
            <dt className="text-[10px] text-slate-500 dark:text-slate-400 mb-1">p95 latency</dt>
            <dd className="font-mono text-lg font-bold text-slate-900 dark:text-white">
              284<span className="text-[10px] text-slate-400 font-normal">ms</span>
            </dd>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-3">
            <dt className="text-[10px] text-slate-500 dark:text-slate-400 mb-1">Failed runs</dt>
            <dd className="font-mono text-lg font-bold text-slate-900 dark:text-white">
              3<span className="text-[10px] text-slate-400 font-normal">/8.6k</span>
            </dd>
          </div>
        </div>

        {/* Checks */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2.5">
            Checks
          </h4>
          <ul className="space-y-2">
            {checks.map((c) => (
              <li
                key={c.name}
                className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-slate-200 dark:border-white/10 border-l-[3px] ${statusBorder[c.status]} bg-slate-50 dark:bg-white/[0.03] px-3 py-2.5`}
              >
                <span className={`w-2 h-2 rounded-full ${statusDot[c.status]}`}></span>
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-slate-900 dark:text-white truncate">{c.name}</p>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">{c.meta}</p>
                </div>
                <span className={`text-[13px] font-mono ${statusText[c.status]}`}>{c.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent activity */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2.5">
            Recent activity
          </h4>
          <ul>
            {events.map((e, i) => (
              <li
                key={i}
                className="grid grid-cols-[56px_1fr] gap-3 py-2.5 border-t border-slate-200 dark:border-white/10 first:border-t-0"
              >
                <time className="text-[10px] font-mono text-slate-400 dark:text-slate-500">{e.time}</time>
                <p className="text-[12.5px] text-slate-600 dark:text-slate-300 leading-relaxed">{e.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};