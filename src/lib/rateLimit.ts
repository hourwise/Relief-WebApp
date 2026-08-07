/**
 * Rate limiting utilities
 * NOTE: Primary rate limiting MUST be implemented on the backend
 * These are client-side utilities for UX feedback only
 */

import { RATE_LIMITS } from './config'

/**
 * In-memory rate limiting for client-side form submissions
 * This is for UX feedback only - server must enforce rate limits
 */
class ClientRateLimiter {
  private attempts: Map<string, number[]> = new Map()

  /**
   * Check if an action should be rate limited
   */
  isRateLimited(key: string, config: { windowMs: number; maxRequests: number }): boolean {
    const now = Date.now()
    const attempts = this.attempts.get(key) || []

    // Remove old attempts outside the window
    const recentAttempts = attempts.filter((time) => now - time < config.windowMs)

    if (recentAttempts.length >= config.maxRequests) {
      return true
    }

    // Record this attempt
    recentAttempts.push(now)
    this.attempts.set(key, recentAttempts)

    return false
  }

  /**
   * Get remaining time until rate limit resets (in seconds)
   */
  getResetTime(key: string, config: { windowMs: number; maxRequests: number }): number {
    const attempts = this.attempts.get(key) || []
    if (attempts.length === 0) return 0

    const oldestAttempt = attempts[0]
    const resetTime = oldestAttempt + config.windowMs - Date.now()

    return Math.ceil(Math.max(0, resetTime) / 1000)
  }

  /**
   * Reset rate limit for a key
   */
  reset(key: string): void {
    this.attempts.delete(key)
  }

  /**
   * Clear all rate limits
   */
  clear(): void {
    this.attempts.clear()
  }
}

export const rateLimiter = new ClientRateLimiter()

/**
 * Check if contact form submission should be blocked
 */
export const checkContactFormLimit = (userIdentifier: string): boolean => {
  return rateLimiter.isRateLimited(`contact-${userIdentifier}`, RATE_LIMITS.contactForm)
}

/**
 * Check if facility submission should be blocked
 */
export const checkAddFacilityLimit = (userIdentifier: string): boolean => {
  return rateLimiter.isRateLimited(`facility-${userIdentifier}`, RATE_LIMITS.addFacility)
}

/**
 * Check if bug report submission should be blocked
 */
export const checkBugReportLimit = (userIdentifier: string): boolean => {
  return rateLimiter.isRateLimited(`bug-${userIdentifier}`, RATE_LIMITS.bugReport)
}

/**
 * Check if GDPR request should be blocked
 */
export const checkGDPRRequestLimit = (userIdentifier: string): boolean => {
  return rateLimiter.isRateLimited(`gdpr-${userIdentifier}`, RATE_LIMITS.gdprRequest)
}

/**
 * Get reset time for contact form
 */
export const getContactFormResetTime = (userIdentifier: string): number => {
  return rateLimiter.getResetTime(`contact-${userIdentifier}`, RATE_LIMITS.contactForm)
}

/**
 * Generate a unique identifier for the current user/session
 * NOTE: This is temporary and for client-side UX only
 * Server must implement proper rate limiting by IP/user
 */
export const getUserIdentifier = (): string => {
  let identifier = sessionStorage.getItem('_relief_session_id')

  if (!identifier) {
    identifier = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    sessionStorage.setItem('_relief_session_id', identifier)
  }

  return identifier
}

/**
 * ⚠️ IMPORTANT: Security Note
 * Client-side rate limiting is NOT sufficient for production
 * You MUST implement:
 * 1. Server-side rate limiting (by IP address)
 * 2. CSRF protection on all endpoints
 * 3. Captcha on forms (Cloudflare Turnstile recommended)
 * 4. Request signing/validation
 * 5. Honeypot fields
 * 6. Email verification
 */

