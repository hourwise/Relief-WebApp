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
  latitude?: number
  longitude?: number
  access_type: string
  opening_hours: string
  free_or_paid: 'free' | 'paid'
  accessible_toilet: boolean
  wheelchair_access: boolean
  radar_key: boolean
  baby_changing: boolean
  changing_places: boolean
  privacy_notes?: string
  cleanliness_notes?: string
  photos?: File[]
  submitter_name?: string
  submitter_email?: string
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

