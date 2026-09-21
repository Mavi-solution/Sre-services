import React, { useEffect, useState } from 'react';
 
/* ---------------------------------------------------------
   Chart primitives — plain inline SVG, no chart library.
   Ported from the dashboard-style-gallery-v2 reference.
--------------------------------------------------------- */
 
const seedRand = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};
 
const MultiLine: React.FC<{
  series: number[][];
  width?: number;
  height?: number;
  colors: string[];
  fillFirst?: boolean;
}> = ({ series, width = 200, height = 70, colors, fillFirst }) => {
  const all = series.flat();
  const max = Math.max(...all);
  const min = Math.min(...all);
  const paths = series.map((vals, si) => {
    const step = width / (vals.length - 1);
    const d = vals
      .map((v, i) => {
        const x = i * step;
        const y = height - ((v - min) / (max - min || 1)) * height;
        return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
    return { d, color: colors[si % colors.length] };
  });
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      {fillFirst && (
        <path d={`${paths[0].d} L${width},${height} L0,${height} Z`} fill={paths[0].color} fillOpacity={0.18} />
      )}
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill="none" stroke={p.color} strokeWidth={1.8} />
      ))}
    </svg>
  );
};
 
const HeatGrid: React.FC<{ cols: number; rows: number; palette: string[]; seed: number; height?: number }> = ({
  cols,
  rows,
  palette,
  seed,
  height = 100,
}) => {
  const rnd = seedRand(seed);
  const cw = 100 / cols;
  const ch = 100 / rows;
  const cells: React.ReactNode[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = Math.floor(rnd() * palette.length);
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={`${(c * cw).toFixed(2)}%`}
          y={`${(r * ch).toFixed(2)}%`}
          width={`${(cw - 1.4).toFixed(2)}%`}
          height={`${(ch - 1.4).toFixed(2)}%`}
          rx={2}
          fill={palette[idx]}
        />
      );
    }
  }
  return (
    <svg width="100%" height={height} viewBox="0 0 100 100" preserveAspectRatio="none">
      {cells}
    </svg>
  );
};
 
const MiniDonut: React.FC<{ pct: number; color: string; size?: number; label?: string }> = ({
  pct,
  color,
  size = 64,
  label,
}) => {
  const r = size / 2 - 4;
  const cx = size / 2;
  const cy = size / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={cx}
          cy={cy}
          r={r}
          stroke="currentColor"
          className="text-slate-200 dark:text-white/10"
          strokeWidth={6}
          fill="none"
        />
        <circle
          cx={cx}
          cy={cy}
          r={r}
          stroke={color}
          strokeWidth={6}
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          strokeLinecap="round"
          transform={`rotate(-90 ${cx} ${cy})`}
        />
        <text x={cx} y={cy + 4} fill={color} fontSize={size * 0.2} fontWeight={700} textAnchor="middle">
          {Math.round(pct * 100)}%
        </text>
      </svg>
      {label && <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">{label}</span>}
    </div>
  );
};
 
const BigDonut: React.FC<{
  segments: [number, string][];
  size?: number;
  centerText: string;
  centerColor: string;
}> = ({ segments, size = 130, centerText, centerColor }) => {
  const r = size / 2 - 14;
  const cx = size / 2;
  const cy = size / 2;
  const total = segments.reduce((s, x) => s + x[0], 0);
  let acc = 0;
  const arcs = segments.map(([val, color], i) => {
    const start = (acc / total) * 2 * Math.PI - Math.PI / 2;
    acc += val;
    const end = (acc / total) * 2 * Math.PI - Math.PI / 2;
    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end);
    const y2 = cy + r * Math.sin(end);
    const large = end - start > Math.PI ? 1 : 0;
    return (
      <path
        key={i}
        d={`M${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 ${large} 1 ${x2.toFixed(1)},${y2.toFixed(1)}`}
        stroke={color}
        strokeWidth={18}
        fill="none"
        strokeLinecap="round"
      />
    );
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="flex-none">
      <circle
        cx={cx}
        cy={cy}
        r={r}
        stroke="currentColor"
        className="text-slate-200 dark:text-white/10"
        strokeWidth={18}
        fill="none"
      />
      {arcs}
      <text x={cx} y={cy + 8} fill={centerColor} fontSize={size * 0.16} fontWeight={700} textAnchor="middle">
        {centerText}
      </text>
    </svg>
  );
};
 
const Bars: React.FC<{ values: number[]; width?: number; height?: number; colors: string[] }> = ({
  values,
  width = 200,
  height = 70,
  colors,
}) => {
  const max = Math.max(...values);
  const bw = width / values.length - 4;
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      {values.map((v, i) => {
        const bh = (v / max) * height;
        return (
          <rect
            key={i}
            x={i * (width / values.length)}
            y={height - bh}
            width={Math.max(bw, 1)}
            height={bh}
            rx={2}
            fill={colors[i % colors.length]}
          />
        );
      })}
    </svg>
  );
};
 
/* ---------------------------------------------------------
   Small presentational primitives reused across boards
--------------------------------------------------------- */
 
const Panel: React.FC<{ label: string; children: React.ReactNode; className?: string }> = ({
  label,
  children,
  className,
}) => (
  <div
    className={`rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-3.5 ${
      className ?? ''
    }`}
  >
    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2.5">
      {label}
    </p>
    {children}
  </div>
);
 
const StatBlock: React.FC<{ value: string; label: string; color: string; bg: string }> = ({
  value,
  label,
  color,
  bg,
}) => (
  <div className="rounded-lg p-3 flex flex-col justify-between min-h-[76px]" style={{ background: bg }}>
    <span className="font-mono text-xl font-bold" style={{ color }}>
      {value}
    </span>
    <span className="text-[10px] font-semibold" style={{ color, opacity: 0.85 }}>
      {label}
    </span>
  </div>
);
 
const ListRows: React.FC<{ items: { name: string; value: string; color: string }[] }> = ({ items }) => (
  <div>
    {items.map((r, i) => (
      <div
        key={i}
        className={`flex items-center gap-2.5 py-1.5 text-[12.5px] ${
          i > 0 ? 'border-t border-slate-200 dark:border-white/10' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full flex-none" style={{ background: r.color }} />
        <span className="flex-1 text-slate-900 dark:text-white font-medium truncate">{r.name}</span>
        <span className="font-mono text-slate-500 dark:text-slate-400 text-[11.5px]">{r.value}</span>
      </div>
    ))}
  </div>
);
 
/* ---------------------------------------------------------
   Per-tool dashboard boards
--------------------------------------------------------- */
 
const SplunkBoard: React.FC = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <Panel label="Incident summary">
        <div className="flex items-center gap-4">
          <BigDonut
            segments={[
              [45, '#f97316'],
              [30, '#f59e0b'],
              [25, '#475569'],
            ]}
            size={110}
            centerText="8,362"
            centerColor="#f97316"
          />
          <div className="flex-1">
            <ListRows
              items={[
                { name: 'High severity', value: '752', color: '#f97316' },
                { name: 'Medium', value: '2,110', color: '#f59e0b' },
                { name: 'Low', value: '5,500', color: '#64748b' },
              ]}
            />
          </div>
        </div>
      </Panel>
      <Panel label="Incident timeline · 30d">
        <MultiLine
          series={[
            [40, 60, 45, 80, 55, 90, 70, 100, 60, 85, 95, 110, 80, 120, 90],
            [20, 30, 25, 40, 30, 45, 35, 50, 32, 42, 48, 55, 40, 58, 45],
          ]}
          width={320}
          height={130}
          colors={['#f97316', '#0ea5e9']}
          fillFirst
        />
      </Panel>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_0.8fr] gap-3">
      <Panel label="MITRE technique matrix">
        <HeatGrid cols={10} rows={4} palette={['#241a12', '#7c3f16', '#c2660f', '#f97316']} seed={42} height={100} />
      </Panel>
      <Panel label="Disposition stats">
        <div className="grid grid-cols-2 gap-2.5 mt-1">
          <StatBlock value="752" label="True positive" color="#4ade80" bg="rgba(34,197,94,0.12)" />
          <StatBlock value="17" label="False positive" color="#facc15" bg="rgba(250,204,21,0.12)" />
        </div>
      </Panel>
    </div>
  </div>
);
 
const AppDBoard: React.FC = () => {
  const gauges = [92.6, 95.7, 93.1, 92.9, 87.1, 90.2];
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Panel label="App calls">
          <MultiLine
            series={[
              [20, 35, 25, 45, 30, 55, 40, 60, 35, 50],
              [10, 18, 14, 22, 16, 26, 20, 28, 18, 24],
            ]}
            colors={['#0ea5e9', '#a855f7']}
            fillFirst
          />
        </Panel>
        <Panel label="Avg response time">
          <MultiLine series={[[50, 40, 55, 35, 60, 30, 58, 32, 45, 38]]} colors={['#f59e0b']} fillFirst />
        </Panel>
        <Panel label="Errors">
          <Bars values={[4, 2, 8, 3, 1, 6, 2, 9, 3, 2]} colors={['#ef4444', '#f59e0b']} />
        </Panel>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-3">
        <Panel label="Server health">
          <div className="flex flex-wrap justify-around gap-3">
            {gauges.map((g, i) => (
              <MiniDonut
                key={i}
                pct={g / 100}
                color={g > 90 ? '#0ea5e9' : g > 85 ? '#f59e0b' : '#ef4444'}
                size={58}
                label={`server ${i + 1}`}
              />
            ))}
          </div>
        </Panel>
        <Panel label="Slow call distribution">
          <HeatGrid cols={8} rows={6} palette={['#0c2530', '#134a5b', '#0ea5e9', '#7dd3fc']} seed={17} height={90} />
        </Panel>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Panel label="DB session count">
          <MultiLine series={[[30, 50, 35, 60, 40, 70, 45, 65, 55, 75]]} colors={['#a855f7']} fillFirst />
        </Panel>
        <Panel label="User experience by tier">
          <Bars values={[70, 55, 80, 45, 65, 60, 75, 50, 68, 72]} colors={['#0ea5e9', '#7dd3fc']} />
        </Panel>
      </div>
    </div>
  );
};
 
const GrafanaBoard: React.FC = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      <StatBlock value="3.8k" label="Peak req/s" color="#f87171" bg="rgba(239,68,68,0.12)" />
      <StatBlock value="380ms" label="Auth tier" color="#fbbf24" bg="rgba(245,158,11,0.12)" />
      <StatBlock value="269ms" label="Cache tier" color="#4ade80" bg="rgba(34,197,94,0.12)" />
      <StatBlock value="176ms" label="DB tier" color="#4ade80" bg="rgba(34,197,94,0.12)" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <Panel label="Monthly requests">
        <span className="font-mono text-3xl font-bold text-amber-500">940M</span>
      </Panel>
      <Panel label="Monthly cloud cost">
        <span className="font-mono text-3xl font-bold text-green-500">$10.9k</span>
      </Panel>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-[1.3fr_0.7fr] gap-3">
      <Panel label="Hourly request heatmap">
        <HeatGrid cols={12} rows={5} palette={['#1c1a12', '#5c4a1e', '#f59e0b', '#4ade80']} seed={9} height={100} />
      </Panel>
      <Panel label="By service" className="flex items-center justify-center">
        <BigDonut
          segments={[
            [38, '#f59e0b'],
            [27, '#4ade80'],
            [20, '#0ea5e9'],
            [15, '#ef4444'],
          ]}
          size={120}
          centerText="940M"
          centerColor="#f59e0b"
        />
      </Panel>
    </div>
    <Panel label="Last 7 days">
      <Bars values={[40, 55, 35, 60, 80, 45, 65, 30, 50, 70, 42, 58, 36, 64]} colors={['#4ade80', '#f59e0b']} />
    </Panel>
  </div>
);
 
const DatadogBoard: React.FC = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-2 gap-2.5">
      <StatBlock value="$77.2" label="Failed cart value" color="#fff" bg="#b0342f" />
      <StatBlock value="45.3s" label="Avg checkout time" color="#fff" bg="#b0342f" />
      <StatBlock value="64k" label="Revenue impact" color="#fff" bg="rgba(255,255,255,0.06)" />
      <StatBlock value="0.33%" label="Carts abandoned" color="#fff" bg="#b07a2f" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <Panel label="Latency by API endpoint">
        <MultiLine
          series={[
            [10, 40, 15, 60, 20, 25, 55, 18, 30, 45, 20, 35],
            [5, 15, 8, 20, 10, 12, 18, 9, 14, 16, 8, 12],
          ]}
          width={260}
          height={80}
          colors={['#ef4444', '#7dd3fc']}
        />
      </Panel>
      <Panel label="Load time p75 / p99">
        <MultiLine
          series={[
            [30, 45, 35, 55, 40, 60, 45, 58, 40, 50, 42, 52],
            [15, 22, 18, 28, 20, 30, 22, 28, 20, 25, 21, 26],
          ]}
          width={260}
          height={80}
          colors={['#a855f7', '#7dd3fc']}
        />
      </Panel>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <Panel label="Checkout failed">
        <Bars values={[20, 15, 30, 40, 25, 35, 20, 45, 30, 25, 38, 22]} colors={['#ef4444']} />
      </Panel>
      <Panel label="Checkout success">
        <Bars values={[60, 70, 55, 80, 65, 75, 60, 85, 70, 65, 78, 68]} colors={['#4ade80']} />
      </Panel>
    </div>
  </div>
);
 
const KibanaBoard: React.FC = () => (
  <div className="space-y-4">
    <Panel label="Events over time">
      <MultiLine
        series={[
          [30, 60, 45, 90, 60, 110, 70, 130, 80, 100, 90, 120, 70, 95, 110, 80, 60, 90, 70, 50],
          [10, 25, 15, 35, 20, 40, 25, 45, 28, 38, 30, 42, 26, 35, 38, 28, 20, 32, 24, 18],
        ]}
        width={500}
        height={130}
        colors={['#ec4899', '#7dd3fc']}
        fillFirst
      />
    </Panel>
    <Panel label="Top destinations · sources · ports · paths">
      <div className="flex flex-wrap justify-around gap-3">
        <MiniDonut pct={0.22} color="#ec4899" size={62} />
        <MiniDonut pct={0.14} color="#7dd3fc" size={62} />
        <MiniDonut pct={0.31} color="#facc15" size={62} />
        <MiniDonut pct={0.19} color="#4ade80" size={62} />
      </div>
    </Panel>
    <Panel label="Recent events">
      <ListRows
        items={[
          { name: '203.0.113.14 → /api/checkout', value: 'US · 200', color: '#4ade80' },
          { name: '198.51.100.9 → /login', value: 'DE · 401', color: '#ef4444' },
          { name: '192.0.2.44 → /search', value: 'IN · 200', color: '#4ade80' },
          { name: '203.0.113.77 → /api/invoice', value: 'BR · 504', color: '#ef4444' },
          { name: '198.51.100.22 → /health', value: 'SG · 200', color: '#4ade80' },
        ]}
      />
    </Panel>
  </div>
);
 
/* ---------------------------------------------------------
   Dashboard meta (tabs, header, badges) + board mapping
--------------------------------------------------------- */
 
interface DashboardMeta {
  id: string;
  tool: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  badge: string;
  subtitle: string;
}
 
const dashboards: DashboardMeta[] = [
  {
    id: 'splunk',
    tool: 'Splunk',
    accent: 'text-orange-500 dark:text-orange-400',
    accentBg: 'bg-orange-500/10',
    accentBorder: 'border-orange-500/20',
    badge: 'Indexing normally',
    subtitle: 'Log analytics · SIEM · 6 indexers',
  },
  {
    id: 'appdynamics',
    tool: 'AppDynamics',
    accent: 'text-sky-500 dark:text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/20',
    badge: 'No anomalies',
    subtitle: 'APM · business transactions',
  },
  {
    id: 'grafana',
    tool: 'Prometheus / Grafana',
    accent: 'text-amber-500 dark:text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/20',
    badge: 'All targets up',
    subtitle: 'Time-series metrics · 6 exporters',
  },
  {
    id: 'datadog',
    tool: 'Datadog',
    accent: 'text-purple-500 dark:text-purple-400',
    accentBg: 'bg-purple-500/10',
    accentBorder: 'border-purple-500/20',
    badge: 'Monitors green',
    subtitle: 'Infrastructure · APM · 41 hosts',
  },
  {
    id: 'kibana',
    tool: 'Kibana',
    accent: 'text-pink-500 dark:text-pink-400',
    accentBg: 'bg-pink-500/10',
    accentBorder: 'border-pink-500/20',
    badge: 'Cluster green',
    subtitle: 'Elasticsearch · log visualization',
  },
];
 
const boardComponents: Record<string, React.FC> = {
  splunk: SplunkBoard,
  appdynamics: AppDBoard,
  grafana: GrafanaBoard,
  datadog: DatadogBoard,
  kibana: KibanaBoard,
};
 
const ROTATE_MS = 1500;
 
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
  const Board = boardComponents[d.id];
 
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
 
      {/* Scrollable body — chart-based board per tool */}
      <div className="flex-1 min-h-0 overflow-y-auto px-5 py-5">
        <Board />
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