import React, { useEffect, useState } from 'react';

interface Metric {
  label: string;
  value: string;
  sub?: string;
}

interface Row {
  name: string;
  meta: string;
  value: string;
  status: 'up' | 'warn' | 'down';
}

interface DashboardData {
  id: string;
  tool: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  badge: string;
  subtitle: string;
  metrics: Metric[];
  rowsLabel: string;
  rows: Row[];
  eventsLabel: string;
  events: { time: string; text: string }[];
}

const dashboards: DashboardData[] = [
  {
    id: 'splunk',
    tool: 'Splunk',
    accent: 'text-orange-500 dark:text-orange-400',
    accentBg: 'bg-orange-500/10',
    accentBorder: 'border-orange-500/20',
    badge: 'Indexing normally',
    subtitle: 'Log analytics · SIEM · 6 indexers',
    metrics: [
      { label: 'Events indexed', value: '2.4M', sub: '/hr' },
      { label: 'Search latency', value: '340', sub: 'ms' },
      { label: 'Indexer queue', value: '0.2', sub: '%' },
    ],
    rowsLabel: 'Search heads',
    rows: [
      { name: 'sh-cluster-01', meta: 'Mumbai · captain', value: 'healthy', status: 'up' },
      { name: 'sh-cluster-02', meta: 'Mumbai · member', value: 'healthy', status: 'up' },
      { name: 'idx-cluster-04', meta: 'Frankfurt · replication lag', value: '4.2s', status: 'warn' },
      { name: 'forwarder-fleet', meta: '312 universal forwarders', value: '99.7%', status: 'up' },
    ],
    eventsLabel: 'Recent searches',
    events: [
      { time: '09:41', text: 'Scheduled report "Daily error summary" completed in 12s.' },
      { time: '08:55', text: 'Alert triggered: failed login spike from a single source IP.' },
      { time: 'Mon', text: 'Index replication factor increased to 3 for security index.' },
    ],
  },
  {
    id: 'appdynamics',
    tool: 'AppDynamics',
    accent: 'text-sky-500 dark:text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/20',
    badge: 'No anomalies',
    subtitle: 'APM · business transactions',
    metrics: [
      { label: 'Avg response', value: '182', sub: 'ms' },
      { label: 'Calls/min', value: '18.3k' },
      { label: 'Error rate', value: '0.04', sub: '%' },
    ],
    rowsLabel: 'Business transactions',
    rows: [
      { name: 'Checkout API', meta: 'tier: payments-svc', value: '210ms', status: 'up' },
      { name: 'Search API', meta: 'tier: search-svc', value: '640ms', status: 'warn' },
      { name: 'Auth token refresh', meta: 'tier: auth-svc', value: '95ms', status: 'up' },
      { name: 'Legacy invoice export', meta: 'tier: batch-svc', value: 'timeout', status: 'down' },
    ],
    eventsLabel: 'Health rule violations',
    events: [
      { time: '09:12', text: 'Search API response time exceeded baseline for 4 minutes.' },
      { time: '07:30', text: 'Auto-scaled payments-svc from 4 to 6 nodes.' },
      { time: 'Sun', text: 'Deployed build 2.14.0 to production tier.' },
    ],
  },
  {
    id: 'grafana',
    tool: 'Prometheus / Grafana',
    accent: 'text-amber-500 dark:text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/20',
    badge: 'All targets up',
    subtitle: 'Time-series metrics · 6 exporters',
    metrics: [
      { label: 'Scrape success', value: '99.98', sub: '%' },
      { label: 'Active series', value: '1.1M' },
      { label: 'CPU (avg)', value: '38', sub: '%' },
    ],
    rowsLabel: 'Targets',
    rows: [
      { name: 'node-exporter', meta: '24 hosts', value: 'up', status: 'up' },
      { name: 'kube-state-metrics', meta: 'prod cluster', value: 'up', status: 'up' },
      { name: 'blackbox-exporter', meta: 'external probes', value: '2 flapping', status: 'warn' },
      { name: 'postgres-exporter', meta: 'primary db', value: 'up', status: 'up' },
    ],
    eventsLabel: 'Alertmanager',
    events: [
      { time: '09:30', text: 'HighMemoryUsage resolved on node-07 after scale-up.' },
      { time: '06:14', text: 'Blackbox probe to /health flapped twice, now stable.' },
      { time: 'Sat', text: 'New dashboard "Checkout funnel" published to team folder.' },
    ],
  },
  {
    id: 'datadog',
    tool: 'Datadog',
    accent: 'text-purple-500 dark:text-purple-400',
    accentBg: 'bg-purple-500/10',
    accentBorder: 'border-purple-500/20',
    badge: 'Monitors green',
    subtitle: 'Infrastructure · APM · 41 hosts',
    metrics: [
      { label: 'Hosts up', value: '41', sub: '/41' },
      { label: 'Apdex', value: '0.96' },
      { label: 'Traces/s', value: '3.2k' },
    ],
    rowsLabel: 'Monitors',
    rows: [
      { name: 'API latency p95', meta: 'service: web-api', value: 'ok', status: 'up' },
      { name: 'Disk usage', meta: 'host: db-primary', value: '78%', status: 'warn' },
      { name: 'Pod restarts', meta: 'namespace: default', value: '0', status: 'up' },
      { name: 'Queue backlog', meta: 'service: worker', value: 'ok', status: 'up' },
    ],
    eventsLabel: 'Recent events',
    events: [
      { time: '09:48', text: 'Disk usage on db-primary crossed 75% warning threshold.' },
      { time: '08:10', text: 'Deployment marker: web-api v2.14.0 rolled out.' },
      { time: 'Fri', text: 'Anomaly detection flagged unusual traffic drop, self-resolved.' },
    ],
  },
  {
    id: 'kibana',
    tool: 'Kibana',
    accent: 'text-pink-500 dark:text-pink-400',
    accentBg: 'bg-pink-500/10',
    accentBorder: 'border-pink-500/20',
    badge: 'Cluster green',
    subtitle: 'Elasticsearch · log visualization',
    metrics: [
      { label: 'Docs indexed', value: '86.2M' },
      { label: 'Cluster health', value: 'green' },
      { label: 'Query latency', value: '65', sub: 'ms' },
    ],
    rowsLabel: 'Indices',
    rows: [
      { name: 'logs-app-2026.09', meta: '4 shards', value: 'green', status: 'up' },
      { name: 'logs-nginx-2026.09', meta: '2 shards', value: 'green', status: 'up' },
      { name: 'logs-audit-2026.09', meta: 'yellow · replica lag', value: 'yellow', status: 'warn' },
      { name: 'metrics-beat-*', meta: '6 shards', value: 'green', status: 'up' },
    ],
    eventsLabel: 'Saved searches',
    events: [
      { time: '09:20', text: 'Dashboard "5xx errors by service" viewed 14 times today.' },
      { time: '07:44', text: 'Index lifecycle policy rolled over logs-nginx to a new index.' },
      { time: 'Thu', text: 'New data view created for audit logs.' },
    ],
  },
];

const statusDot: Record<Row['status'], string> = {
  up: 'bg-green-500',
  warn: 'bg-amber-400',
  down: 'bg-red-500',
};

const statusBorder: Record<Row['status'], string> = {
  up: 'border-l-green-500',
  warn: 'border-l-amber-400',
  down: 'border-l-red-500',
};

const statusText: Record<Row['status'], string> = {
  up: 'text-green-600 dark:text-green-400',
  warn: 'text-amber-600 dark:text-amber-400',
  down: 'text-red-600 dark:text-red-400',
};

const ROTATE_MS = 5000;

export const SyntheticMonitoring: React.FC = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % dashboards.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const d = dashboards[active];

  return (
    <aside
      aria-label="Monitoring dashboards"
      className="w-full lg:-mt-2 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm flex flex-col h-[600px] lg:h-[680px] lg:sticky lg:top-8 overflow-hidden shadow-xl shadow-slate-900/5 dark:shadow-black/20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tool tabs */}
      <div className="flex items-center gap-1 px-3 pt-3 pb-2 border-b border-slate-200 dark:border-white/10 flex-none overflow-x-auto">
        {dashboards.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActive(i)}
            className={`shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wide transition-colors ${
              i === active
                ? `${item.accentBg} ${item.accent}`
                : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            {item.tool}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.02] flex-none">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">{d.tool} dashboard</h3>
          <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">{d.subtitle}</p>
        </div>
        <span
          className={`text-[10px] font-black uppercase tracking-wider ${d.accent} ${d.accentBg} border ${d.accentBorder} rounded-full px-3 py-1 whitespace-nowrap`}
        >
          {d.badge}
        </span>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 min-h-0 overflow-y-auto px-5 py-5 space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-3 gap-2">
          {d.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-3"
            >
              <dt className="text-[10px] text-slate-500 dark:text-slate-400 mb-1">{m.label}</dt>
              <dd className="font-mono text-lg font-bold text-slate-900 dark:text-white">
                {m.value}
                {m.sub && <span className="text-[10px] text-slate-400 font-normal">{m.sub}</span>}
              </dd>
            </div>
          ))}
        </div>

        {/* Rows */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2.5">
            {d.rowsLabel}
          </h4>
          <ul className="space-y-2">
            {d.rows.map((r) => (
              <li
                key={r.name}
                className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-slate-200 dark:border-white/10 border-l-[3px] ${statusBorder[r.status]} bg-slate-50 dark:bg-white/[0.03] px-3 py-2.5`}
              >
                <span className={`w-2 h-2 rounded-full ${statusDot[r.status]}`}></span>
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-slate-900 dark:text-white truncate">{r.name}</p>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">{r.meta}</p>
                </div>
                <span className={`text-[13px] font-mono ${statusText[r.status]}`}>{r.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Events */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2.5">
            {d.eventsLabel}
          </h4>
          <ul>
            {d.events.map((e, i) => (
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

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5 py-3 border-t border-slate-200 dark:border-white/10 flex-none">
        {dashboards.map((item, i) => (
          <button
            key={item.id}
            aria-label={`Show ${item.tool} dashboard`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? 'w-5 bg-slate-500 dark:bg-slate-300' : 'w-1.5 bg-slate-300 dark:bg-white/15'
            }`}
          />
        ))}
      </div>
    </aside>
  );
};