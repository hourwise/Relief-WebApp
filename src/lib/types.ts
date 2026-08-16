/**
 * Core type definitions for the Relief website
 */

/**
 * Blog post metadata and content
 */
export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  content: string
  author: string
  category: BlogCategory
  publishedAt: Date
  updatedAt?: Date
  featured: boolean
  coverImage?: string
  tags: string[]
}

export type BlogCategory =
  | 'accessibility'
  | 'travel-confidence'
  | 'ibs-crohns'
  | 'family-days-out'
  | 'elderly-users'
  | 'app-updates'
  | 'community-stories'
  | 'public-toilet-data'
  | 'behind-the-build'

/**
 * Form submission types
 */
export interface ContactFormData {
  name: string
  email: string
  category: 'general' | 'support' | 'press' | 'partnership' | 'privacy' | 'data-correction'
  message: string
  consent: boolean
  honeypot?: string // Anti-spam field
}

export interface AddFacilityFormData {
  facility_name: string
  address: string
  postcode: string
  town_city: string
  latitude: number
  longitude: number
  country: string
  access_notes: string
  is_free: boolean
  price_note: string
  is_accessible: boolean
  is_disabled_access: boolean
  has_baby_changing: boolean
  has_family_room: boolean
  is_gender_neutral: boolean
  is_single_occupancy: boolean
  is_24h: boolean
  notes: string
  access_codes: string
  submission_notes: string
  consent: boolean
  honeypot?: string
}

export interface ReportBugFormData {
  name?: string
  email?: string
  platform: 'ios' | 'android' | 'website'
  device_model?: string
  app_version?: string
  description: string
  steps_to_reproduce: string
  screenshot?: File
  consent: boolean
  honeypot?: string
}

export interface GDPRRequestFormData {
  name: string
  email: string
  request_type: 'access' | 'deletion' | 'correction' | 'withdraw-consent'
  description?: string
  consent: boolean
  honeypot?: string
}

/**
 * Social media content
 */
export interface SocialPost {
  id: string
  platform: 'instagram' | 'twitter' | 'linkedin' | 'tiktok'
  content: string
  image?: string
  link: string
  date: Date
  featured: boolean
}

/**
 * FAQ structure
 */
export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  order: number
}

/**
 * Email submission tracking (optional, for Supabase)
 */
export interface FormSubmission {
  id: string
  type: 'contact' | 'facility' | 'bug-report' | 'gdpr'
  data: Record<string, unknown>
  status: 'pending' | 'reviewed' | 'rejected' | 'approved'
  created_at: Date
  updated_at?: Date
  ip_address?: string // For rate limiting
}

/**
 * SEO metadata
 */
export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  twitterCard?: string
  canonicalUrl?: string
}

/**
 * API Response wrapper
 */
export interface APIResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

/**
 * Rate limiting
 */
export interface RateLimitConfig {
  windowMs: number // Time window in milliseconds
  maxRequests: number // Max requests per window
  message: string
}

