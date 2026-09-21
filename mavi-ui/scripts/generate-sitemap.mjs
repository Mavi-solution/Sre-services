/**
 * Generates dist/sitemap.xml from the same route manifest the router uses,
 * so the sitemap cannot drift out of sync with the actual pages.
 *
 * lastmod is derived per route from git history rather than a single build
 * timestamp, so unchanged pages don't all claim to have been updated today.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

const { ROUTES, canonicalFor } = await import(path.join(root, 'dist-ssr', 'entry-server.js'));

const BUILD_DATE = new Date().toISOString().slice(0, 10);

/** Source files that determine a route's content, for git-based lastmod. */
function sourcesFor(routePath) {
  if (routePath === '/') return ['pages/HomePage.tsx', 'components/Hero.tsx', 'App.tsx'];
  if (routePath === '/about') return ['pages/AboutPage.tsx', 'components/About.tsx', 'components/SREPhilosophy.tsx'];
  if (routePath === '/services') return ['pages/ServicesPage.tsx', 'data/services.ts'];
  if (routePath.startsWith('/services/')) return ['pages/ServiceDetailPage.tsx', 'data/services.ts'];
  if (routePath === '/case-studies') return ['pages/CaseStudiesPage.tsx', 'components/CaseStudy.tsx'];
  if (routePath === '/contact') return ['components/ContactPage.tsx'];
  if (routePath === '/privacy' || routePath === '/terms') return ['components/LegalPage.tsx'];
  return [];
}

function lastmodFor(routePath) {
  const files = sourcesFor(routePath).filter((f) => fs.existsSync(path.join(root, f)));
  if (!files.length) return BUILD_DATE;
  try {
    const out = execSync(`git log -1 --format=%cs -- ${files.map((f) => `"${f}"`).join(' ')}`, {
      cwd: root,
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : BUILD_DATE;
  } catch {
    return BUILD_DATE;
  }
}

const entries = ROUTES.filter((r) => !r.noIndex)
  .map((r) => {
    const loc = canonicalFor(r.path);
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmodFor(r.path)}</lastmod>`,
      `    <priority>${r.priority.toFixed(1)}</priority>`,
      '  </url>',
    ].join('\n');
  })
  .join('\n');

// No <changefreq>: Google ignores it.
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml);
console.log(`[sitemap] wrote ${ROUTES.filter((r) => !r.noIndex).length} URLs to dist/sitemap.xml`);
