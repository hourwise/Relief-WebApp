/**
 * Brand and configuration constants
 */

export const BRAND = {
  name: import.meta.env.VITE_SITE_NAME || 'Relief',
  strapline: 'Find Comfort, Feel Relief',
  description: import.meta.env.VITE_SITE_DESCRIPTION || 'Find clean, private and accessible facilities nearby',
  // No final domain exists yet. Set VITE_SITE_URL when one is live.
  // Do not invent a production-looking URL as a default.
  siteUrl: import.meta.env.VITE_SITE_URL || '',
} as const

export const COLORS = {
  primary: '#0F766E',
  secondary: '#14B8A6',
  background: '#F8FAFC',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  text: '#0F172A',
  muted: '#64748B',
  white: '#FFFFFF',
} as const

/**
 * Contact email addresses are NOT configured yet.
 * Final addresses (potentially hello@, support@, privacy@, data@) will be
 * centralised here once the domain and email setup exist. Do not hard-code
 * invented production-looking addresses into public pages.
 */

/**
 * Feature flags - enable/disable functionality during development
 */
export const FEATURES = {
  supabaseEnabled: Boolean(import.meta.env.VITE_SUPABASE_URL),
  analyticsEnabled: Boolean(import.meta.env.VITE_ANALYTICS_ID),
  blogEnabled: true,
  // Forms stay disabled until server-side submission, validation and
  // moderation exist. There is intentionally NO frontend email/resend flag:
  // private credentials must never exist in browser code (anything VITE_ is
  // exposed to the client).
  contactFormEnabled: false,
  addFacilityEnabled: false,
  bugReportEnabled: false,
  gdprRequestEnabled: false,
} as const

/**
 * Rate limiting configuration (will be implemented on backend)
 * These are client-side limits for UX feedback
 */
export const RATE_LIMITS = {
  contactForm: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 5,
  },
  addFacility: {
    windowMs: 24 * 60 * 60 * 1000, // 24 hours
    maxRequests: 10,
  },
  bugReport: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 10,
  },
  gdprRequest: {
    windowMs: 24 * 60 * 60 * 1000, // 24 hours
    maxRequests: 1,
  },
} as const

/**
 * Routes configuration
 */
export const ROUTES = {
  home: '/',
  about: '/about',
  privacy: '/privacy',
  terms: '/terms',
  gdpr: '/gdpr',
  contact: '/contact',
  support: '/support',
  data: '/data',
  addFacility: '/add-facility',
  reportBug: '/report-bug',
  blog: '/blog',
  blogPost: '/blog/:slug',
  social: '/social',
  press: '/press',
  notFound: '/404',
} as const

/**
 * SEO defaults
 */
export const SEO_DEFAULTS = {
  siteName: BRAND.name,
  description: BRAND.description,
  // No default OG image yet — pages must supply one before launch.
  ogImage: '',
  // No Twitter/X account exists yet — handle is published when one is live.
  twitterHandle: '',
} as const

/**
 * App store links — intentionally null until real release URLs exist.
 * The site must NOT navigate visitors to guessed store listings.
 * Set these when a public build/release is actually available.
 */
export const APP_STORE_LINKS = {
  android: null, // Set when a public Android preview/release build exists
  ios: null,     // Planned; no iOS build yet
} as const

