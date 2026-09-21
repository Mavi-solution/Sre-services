/**
 * Route manifest — the single source of truth shared by the router, the
 * sitemap generator and the prerender script.
 *
 * Defining routes in one place prevents the classic drift where a new page
 * exists in the app but never reaches sitemap.xml (or vice versa).
 */

import { OFFERINGS } from './services';
import { BRAND, SITE_URL } from './site';

export interface RouteMeta {
  /** Path with a leading slash. '/' is the home page. */
  path: string;
  /** Full <title>. Keep under ~60 characters. */
  title: string;
  /** Meta description. Aim for 140-160 characters. */
  description: string;
  /** Sitemap priority (0.0-1.0). Google ignores this; kept for other engines. */
  priority: number;
  /** Excluded from sitemap.xml when true (still routable). */
  noIndex?: boolean;
}

const BRAND_SUFFIX = ` | ${BRAND.name}`;

export const ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: `${BRAND.name} | SRE & DevOps Managed Services`,
    description:
      'MaviSolution runs 24/7 site reliability engineering, DevOps automation and cloud operations for scaling startups and enterprises across India, the UAE and the USA.',
    priority: 1.0,
  },
  {
    path: '/about',
    title: `About Us${BRAND_SUFFIX}`,
    description:
      'MaviSolution bridges the gap between shipping code and staying online. Learn about our SRE philosophy, engineering practice and the technology stack we run.',
    priority: 0.8,
  },
  {
    path: '/services',
    title: `SRE, DevOps & Cloud Services${BRAND_SUFFIX}`,
    description:
      'Explore MaviSolution services: SRE as a Service, monitoring and observability, DevOps automation, CloudOps, performance engineering, managed hosting and offshore development.',
    priority: 0.9,
  },
  ...OFFERINGS.map((o) => ({
    path: `/services/${o.slug}`,
    title: `${o.metaTitle}${BRAND_SUFFIX}`,
    description: o.desc,
    priority: 0.8,
  })),
  {
    path: '/case-studies',
    title: `Case Study: Panic-Free Operations${BRAND_SUFFIX}`,
    description:
      'How MaviSolution cut alert volume and mean time to recovery for a scaling platform by replacing reactive firefighting with SLO-driven incident management.',
    priority: 0.7,
  },
  {
    path: '/contact',
    title: `Contact${BRAND_SUFFIX}`,
    description:
      'Talk to the MaviSolution SRE team about reliability, DevOps automation or cloud operations. Response within one business day.',
    priority: 0.7,
  },
  {
    path: '/privacy',
    title: `Privacy Policy${BRAND_SUFFIX}`,
    description:
      'How MaviSolution collects, uses, stores and protects client and visitor data across our SRE, DevOps and cloud managed-services engagements.',
    priority: 0.3,
  },
  {
    path: '/terms',
    title: `Terms and Conditions${BRAND_SUFFIX}`,
    description:
      'The terms governing MaviSolution service agreements, including client responsibilities, service scope, access requirements and governing jurisdiction.',
    priority: 0.3,
  },
];

export const getRouteMeta = (path: string): RouteMeta => {
  const normalized = path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
  return ROUTES.find((r) => r.path === normalized) ?? ROUTES[0];
};

export const canonicalFor = (path: string): string =>
  path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
