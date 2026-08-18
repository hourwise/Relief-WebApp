/**
 * SEO helpers and meta tag generators
 */

import { SEOMetadata } from './types'
import { BRAND, SEO_DEFAULTS, ROUTES } from './config'

/**
 * Generate SEO metadata for pages
 */
export const generateSEOMetadata = (
  overrides: Partial<SEOMetadata> = {}
): SEOMetadata => {
  return {
    title: `${overrides.title || 'Home'} | ${BRAND.name}`,
    description: overrides.description || SEO_DEFAULTS.description,
    keywords: overrides.keywords,
    ogImage: overrides.ogImage || SEO_DEFAULTS.ogImage,
    ogType: overrides.ogType || 'website',
    twitterCard: overrides.twitterCard || 'summary_large_image',
    canonicalUrl: overrides.canonicalUrl || BRAND.siteUrl,
  }
}

/**
 * Meta tag strings for document head
 */
export const createMetaTags = (metadata: SEOMetadata): string[] => {
  const tags: string[] = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    `<meta name="description" content="${escapeHtml(metadata.description)}" />`,
    `<meta property="og:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(metadata.description)}" />`,
    `<meta property="og:type" content="${metadata.ogType || 'website'}" />`,
    `<meta name="twitter:card" content="${metadata.twitterCard || 'summary_large_image'}" />`,
    `<meta name="twitter:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(metadata.description)}" />`,
  ]

  if (metadata.ogImage) {
    tags.push(`<meta property="og:image" content="${metadata.ogImage}" />`)
  }

  if (SEO_DEFAULTS.twitterHandle) {
    tags.push(`<meta name="twitter:handle" content="${SEO_DEFAULTS.twitterHandle}" />`)
  }

  if (metadata.keywords) {
    tags.push(`<meta name="keywords" content="${escapeHtml(metadata.keywords.join(', '))}" />`)
  }

  if (metadata.canonicalUrl) {
    tags.push(`<link rel="canonical" href="${metadata.canonicalUrl}" />`)
  }

  return tags
}

/**
 * Escape HTML special characters for safe meta tags
 */
const escapeHtml = (text: string): string => {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

/**
 * Common page metadata
 */
export const PAGE_META = {
  home: () => generateSEOMetadata({
    title: `${BRAND.strapline}`,
    description: BRAND.description,
  }),
  about: () => generateSEOMetadata({
    title: 'About Us',
    description: 'Learn the story behind Relief and our mission to help everyone find dignity and accessibility.',
  }),
  privacy: () => generateSEOMetadata({
    title: 'Privacy Policy',
    description: 'Read our privacy policy to understand how we handle your data.',
  }),
  terms: () => generateSEOMetadata({
    title: 'Terms & Conditions',
    description: 'Read our terms and conditions for using Relief.',
  }),
  gdpr: () => generateSEOMetadata({
    title: 'Your GDPR Rights',
    description: 'Understand your rights under GDPR and how to exercise them.',
  }),
  deleteAccount: () => generateSEOMetadata({
    title: 'Delete a Relief Account',
    description: 'Learn how to delete a Relief account in the app or contact Relief if you need help.',
  }),
  contact: () => generateSEOMetadata({
    title: 'Contact Us',
    description: 'Get in touch with the Relief team. We\'d love to hear from you.',
  }),
  support: () => generateSEOMetadata({
    title: 'Support',
    description: 'Find answers and get help with the Relief app.',
  }),
  data: () => generateSEOMetadata({
    title: 'Data & Sources',
    description: 'Learn where Relief facility information comes from and how we track its sources.',
  }),
  addFacility: () => generateSEOMetadata({
    title: 'Add a Facility',
    description: 'Suggest a new facility to Relief.',
  }),
  reportBug: () => generateSEOMetadata({
    title: 'Report a Bug',
    description: 'Help us improve by reporting bugs in the Relief app.',
  }),
  blog: () => generateSEOMetadata({
    title: 'Blog',
    description: 'Read stories, updates, and insights from the Relief team.',
  }),
  press: () => generateSEOMetadata({
    title: 'Press Kit',
    description: 'Media resources, logos, and brand information for Relief.',
  }),
} as const

/** Metadata for public routes that have a real page and may be indexed. */
export const PAGE_META_BY_ROUTE: Record<string, () => SEOMetadata> = {
  [ROUTES.home]: PAGE_META.home,
  [ROUTES.about]: PAGE_META.about,
  [ROUTES.data]: PAGE_META.data,
  [ROUTES.support]: PAGE_META.support,
  [ROUTES.contact]: PAGE_META.contact,
  [ROUTES.privacy]: PAGE_META.privacy,
  [ROUTES.terms]: PAGE_META.terms,
  [ROUTES.gdpr]: PAGE_META.gdpr,
  [ROUTES.deleteAccount]: PAGE_META.deleteAccount,
  [ROUTES.addFacility]: PAGE_META.addFacility,
  [ROUTES.reportBug]: PAGE_META.reportBug,
  [ROUTES.blog]: PAGE_META.blog,
  [ROUTES.press]: PAGE_META.press,
}

