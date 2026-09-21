/**
 * Build-time prerender.
 *
 * Renders every route in the manifest to static HTML and writes it into dist/,
 * so crawlers (and AI assistants, which generally do not execute JavaScript)
 * receive fully-populated markup instead of an empty <div id="root">.
 *
 * Runs as `postbuild`, after `vite build` and `vite build --ssr`.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

const { render, ROUTES, canonicalFor, graphForRoute } = await import(
  path.join(root, 'dist-ssr', 'entry-server.js')
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Replaces the content of a meta tag matched by attribute. */
function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`, 'i');
  if (re.test(html)) return html.replace(re, `$1${esc(value)}$2`);
  return html.replace('</head>', `  <meta ${attr}="${key}" content="${esc(value)}">\n</head>`);
}

let ok = 0;
const failures = [];

for (const route of ROUTES) {
  try {
    const canonical = canonicalFor(route.path);
    const appHtml = render(route.path);

    let html = template;
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(route.title)}</title>`);
    html = setMeta(html, 'name', 'description', route.description);
    html = setMeta(html, 'property', 'og:title', route.title);
    html = setMeta(html, 'property', 'og:description', route.description);
    html = setMeta(html, 'property', 'og:url', canonical);
    html = setMeta(html, 'name', 'twitter:title', route.title);
    html = setMeta(html, 'name', 'twitter:description', route.description);
    html = html.replace(
      /(<link rel="canonical" href=")[^"]*(")/i,
      `$1${esc(canonical)}$2`,
    );

    // Per-route JSON-LD. Escape "<" so a closing tag inside a string cannot
    // terminate the script element early.
    const ld = JSON.stringify(graphForRoute(route.path)).replace(/</g, '\\u003c');
    html = html.replace(
      /(<script type="application\/ld\+json" data-seo-jsonld>)[\s\S]*?(<\/script>)/i,
      `$1${ld}$2`,
    );

    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const outDir = route.path === '/' ? dist : path.join(dist, route.path);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    ok++;
  } catch (err) {
    failures.push({ path: route.path, error: err.message });
  }
}

console.log(`[prerender] wrote ${ok}/${ROUTES.length} routes`);

if (failures.length) {
  for (const f of failures) console.error(`[prerender] FAILED ${f.path}: ${f.error}`);
  // A silent prerender failure would ship the empty-shell regression this whole
  // change exists to fix, so fail the build loudly instead.
  process.exit(1);
}
