/**
 * Brand and configuration constants
 */

export const BRAND = {
  name: import.meta.env.VITE_SITE_NAME || 'Relief',
  strapline: 'Find Comfort, Feel Relief',
  description: import.meta.env.VITE_SITE_DESCRIPTION || 'Find clean, private and accessible facilities nearby',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://relief-domain.co.uk',
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

export const EMAIL = {
  info: import.meta.env.VITE_EMAIL_INFO || 'info@relief-domain.co.uk',
  support: import.meta.env.VITE_EMAIL_SUPPORT || 'support@relief-domain.co.uk',
  privacy: import.meta.env.VITE_EMAIL_PRIVACY || 'privacy@relief-domain.co.uk',
  hello: import.meta.env.VITE_EMAIL_HELLO || 'hello@relief-domain.co.uk',
} as const

/**
 * Feature flags - enable/disable functionality during development
 */
export const FEATURES = {
  supabaseEnabled: Boolean(import.meta.env.VITE_SUPABASE_URL),
  analyticsEnabled: Boolean(import.meta.env.VITE_ANALYTICS_ID),
  resendEnabled: Boolean(import.meta.env.VITE_RESEND_API_KEY),
  blogEnabled: true,
  contactFormEnabled: true,
  addFacilityEnabled: true,
  bugReportEnabled: true,
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
  ogImage: `${BRAND.siteUrl}/og-image.png`,
  twitterHandle: '@ReliefApp',
} as const

/**
 * App store links (placeholder - add actual links when available)
 */
export const APP_STORE_LINKS = {
  ios: 'https://apps.apple.com/app/relief',
  android: 'https://play.google.com/store/apps/details?id=com.relief',
  playlistOr: '#waitlist', // Placeholder
} as const

