/**
 * Single source of truth for site-wide identity and contact facts.
 *
 * Canonical brand name is "MaviSolution" (matches the domain and <title>).
 * Earlier copy used "Monitronix" and "Maxi Vision" interchangeably, which
 * prevented search engines from resolving a single entity.
 */

export const SITE_URL = 'https://www.mavisolution.com';

export const BRAND = {
  /** Canonical trading name — use this in all copy and UI. */
  name: 'MaviSolution',
  /** Registered legal entity, used in schema and the footer copyright. */
  legalName: 'Mavi Solution Pvt. Ltd.',
  tagline: 'Engineering High-Performance Platforms',
} as const;

export const CONTACT = {
  email: 'support@mavisolution.com',
  /**
   * TODO(mavisolution): confirm the LinkedIn slug. "mavisoulutions" looks like a
   * typo for "mavisolutions" but LinkedIn returns HTTP 999 to automated checks,
   * so it could not be verified during the SEO audit. Update here once confirmed —
   * this constant is the only place the URL is defined.
   */
  linkedin: 'https://www.linkedin.com/company/mavisoulutions/',
} as const;

/** Regions actively served. Drives copy, schema areaServed and llms.txt. */
export const SERVICE_REGIONS = ['India', 'United Arab Emirates', 'United States'] as const;

/** Short display form for UI copy. */
export const SERVICE_REGIONS_SHORT = 'India, the UAE, and the USA';

/**
 * TODO(mavisolution): no publishable registered office address exists in the
 * codebase. "Chennai" currently appears only as a legal jurisdiction clause in
 * the Terms, which is NOT the same as a business address. Add a real address
 * here to upgrade Organization schema to ProfessionalService/LocalBusiness.
 */
export const POSTAL_ADDRESS: {
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
} | null = null;

/** Legal jurisdiction (from Terms) — distinct from a business address. */
export const LEGAL_JURISDICTION = 'Chennai, India';
