/**
 * Server entry used only by the build scripts (prerender + sitemap).
 *
 * StaticRouter renders a given path without touching window/history, so the
 * same component tree that runs in the browser can be serialised to HTML at
 * build time.
 *
 * The route manifest and schema builders are re-exported here so the whole
 * build-time surface ships as a single SSR bundle.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
// react-router v7 exports StaticRouter from the core package;
// the v6 'react-router-dom/server' entry point no longer exists.
import { StaticRouter } from 'react-router';
import App from './App';

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}

export { ROUTES, canonicalFor, getRouteMeta } from './data/routes';
export { graphForRoute } from './data/schema';
export { OFFERINGS } from './data/services';
export { SITE_URL, BRAND, CONTACT, SERVICE_REGIONS } from './data/site';
