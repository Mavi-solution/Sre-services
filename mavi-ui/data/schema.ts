/**
 * Schema.org JSON-LD builders.
 *
 * Deliberately NOT generated here:
 *  - Review / AggregateRating: no genuine reviews exist. Fabricating these
 *    risks a Google manual action.
 *  - SearchAction: the site has no search feature; declaring one is spam.
 *  - LocalBusiness / ProfessionalService: requires a verified postal address.
 *    Upgrades automatically once POSTAL_ADDRESS is populated in site.ts.
 */

import { OFFERINGS, type Offering } from './services';
import { canonicalFor } from './routes';
import {
  BRAND,
  CONTACT,
  POSTAL_ADDRESS,
  SERVICE_REGIONS,
  SITE_URL,
} from './site';

const LOGO_URL = `${SITE_URL}/logo.png`;
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  const org: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: `${SITE_URL}/`,
    logo: { '@type': 'ImageObject', url: LOGO_URL, width: 240, height: 195 },
    image: OG_IMAGE_URL,
    description:
      'Site Reliability Engineering, DevOps automation and cloud managed services for scaling startups and enterprises.',
    email: CONTACT.email,
    sameAs: [CONTACT.linkedin],
    areaServed: SERVICE_REGIONS.map((name) => ({ '@type': 'Country', name })),
    knowsAbout: [
      'Site Reliability Engineering',
      'DevOps Automation',
      'Cloud Infrastructure Management',
      'Observability and Monitoring',
      'Incident Response',
      'Performance Engineering',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: CONTACT.email,
        availableLanguage: ['en'],
        areaServed: SERVICE_REGIONS.map((name) => ({ '@type': 'Country', name })),
      },
    ],
  };

  // Only emitted once a real address is confirmed — never invented.
  if (POSTAL_ADDRESS) {
    org.address = { '@type': 'PostalAddress', ...POSTAL_ADDRESS };
  }

  return org;
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: BRAND.name,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en',
    // No SearchAction: the site has no search feature.
  };
}

export function serviceSchema(o: Offering) {
  return {
    '@type': 'Service',
    '@id': `${canonicalFor(`/services/${o.slug}`)}#service`,
    name: o.title,
    description: o.details.overview,
    url: canonicalFor(`/services/${o.slug}`),
    provider: { '@id': ORGANIZATION_ID },
    areaServed: SERVICE_REGIONS.map((name) => ({ '@type': 'Country', name })),
    serviceType: o.title,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${o.title} capabilities`,
      itemListElement: o.details.features.map((f) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: f },
      })),
    },
  };
}

export function breadcrumbSchema(path: string) {
  if (path === '/') return null;
  const segments = path.split('/').filter(Boolean);
  const items = [{ name: 'Home', url: `${SITE_URL}/` }];
  let acc = '';
  for (const seg of segments) {
    acc += `/${seg}`;
    const label =
      OFFERINGS.find((o) => o.slug === seg)?.title ??
      seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    items.push({ name: label, url: canonicalFor(acc) });
  }
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** Assembles the @graph for a given route. */
export function graphForRoute(path: string) {
  const nodes: unknown[] = [organizationSchema(), websiteSchema()];

  if (path === '/' || path === '/services') {
    nodes.push(...OFFERINGS.map(serviceSchema));
  } else if (path.startsWith('/services/')) {
    const slug = path.replace('/services/', '');
    const offering = OFFERINGS.find((o) => o.slug === slug);
    if (offering) nodes.push(serviceSchema(offering));
  }

  const crumbs = breadcrumbSchema(path);
  if (crumbs) nodes.push(crumbs);

  return { '@context': 'https://schema.org', '@graph': nodes };
}
