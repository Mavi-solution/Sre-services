import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { canonicalFor, getRouteMeta } from '../data/routes';
import { graphForRoute } from '../data/schema';
import { SITE_URL } from '../data/site';

/**
 * Keeps document head metadata in sync on client-side navigation.
 *
 * The *initial* head for each route is written statically by the prerender
 * step (scripts/prerender.mjs), so crawlers that never execute JavaScript
 * still receive correct per-page title, description, canonical, OG tags and
 * JSON-LD. This component only handles subsequent in-app navigation.
 */

const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

export const Seo: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(pathname);
    const canonical = canonicalFor(meta.path);

    document.title = meta.title;
    setMeta('meta[name="description"]', 'name', 'description', meta.description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;

    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    setMeta('meta[property="og:image"]', 'property', 'og:image', `${SITE_URL}/og-image.png`);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);

    const ld = document.head.querySelector('script[data-seo-jsonld]');
    if (ld) ld.textContent = JSON.stringify(graphForRoute(meta.path));
  }, [pathname]);

  return null;
};
