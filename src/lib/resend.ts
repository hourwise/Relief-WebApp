/**
 * Email handling with Resend
 * ⚠️ API KEY MUST NEVER BE EXPOSED IN FRONTEND
 * This file contains placeholder functions that should call your backend
 */

import { APIResponse } from './types'

/**
 * ⚠️ SECURITY CRITICAL
 * Never expose the Resend API key in frontend code
 * All email sending must go through your backend server
 * The backend will validate, sanitize, and rate-limit requests
 */

/**
 * Send a contact form email
 * This function should call your backend endpoint
 */
export async function sendContactEmail(data: {
  name: string
  email: string
  category: string
  message: string
}): Promise<APIResponse<{ messageId: string }>> {
  try {
    void data
    // TODO: Implement after backend is ready
    // This will call your backend endpoint: /api/email/contact
    // The backend will:
    // 1. Validate the data server-side
    // 2. Sanitize all inputs
    // 3. Check rate limits by IP
    // 4. Send via Resend API (never expose key to frontend)
    // 5. Log submission to Supabase if enabled
    // 6. Send confirmation to user

    console.warn('sendContactEmail: Implementation pending - backend API not ready')
    return {
      success: false,
      error: 'Email functionality not yet configured',
    }
  } catch (error) {
    console.error('Error sending contact email:', error)
    return {
      success: false,
      error: 'Failed to send email',
    }
  }
}

/**
 * Send facility submission notification
 */
export async function sendFacilitySubmission(data: {
  facility_name: string
  address: string
  postcode: string
  email?: string
}): Promise<APIResponse<{ submissionId: string }>> {
  try {
    void data
    // TODO: Implement after backend is ready
    // This will call your backend endpoint: /api/email/facility-submission
    // The backend will:
    // 1. Validate the data server-side
    // 2. Store in moderation queue (Supabase)
    // 3. Send confirmation to submitter if email provided
    // 4. Send notification to team

    console.warn('sendFacilitySubmission: Implementation pending - backend API not ready')
    return {
      success: false,
      error: 'Facility submission not yet configured',
    }
  } catch (error) {
    console.error('Error sending facility submission:', error)
    return {
      success: false,
      error: 'Failed to submit facility',
    }
  }
}

/**
 * Send bug report notification
 */
export async function sendBugReport(data: {
  platform: string
  description: string
  email?: string
}): Promise<APIResponse<{ reportId: string }>> {
  try {
    void data
    // TODO: Implement after backend is ready
    // This will call your backend endpoint: /api/email/bug-report
    // The backend will:
    // 1. Validate the data server-side
    // 2. Store bug report (Supabase)
    // 3. Send confirmation to user if email provided
    // 4. Send notification to team

    console.warn('sendBugReport: Implementation pending - backend API not ready')
    return {
      success: false,
      error: 'Bug report not yet configured',
    }
  } catch (error) {
    console.error('Error sending bug report:', error)
    return {
      success: false,
      error: 'Failed to submit bug report',
    }
  }
}

/**
 * Send GDPR request confirmation
 */
export async function sendGDPRRequest(data: {
  name: string
  email: string
  request_type: string
}): Promise<APIResponse<{ requestId: string }>> {
  try {
    void data
    // TODO: Implement after backend is ready
    // This will call your backend endpoint: /api/email/gdpr-request
    // The backend will:
    // 1. Validate the data server-side
    // 2. Store GDPR request securely (Supabase)
    // 3. Send confirmation email with reference number
    // 4. Initiate proper GDPR workflow
    // 5. Never expose personal data in emails

    console.warn('sendGDPRRequest: Implementation pending - backend API not ready')
    return {
      success: false,
      error: 'GDPR requests not yet configured',
    }
  } catch (error) {
    console.error('Error sending GDPR request:', error)
    return {
      success: false,
      error: 'Failed to submit GDPR request',
    }
  }
}

/**
 * Send email newsletter subscription
 */
export async function subscribeNewsletter(email: string): Promise<APIResponse<void>> {
  try {
    void email
    // TODO: Implement after backend is ready
    // This will call your backend endpoint: /api/email/subscribe
    // The backend will:
    // 1. Validate email server-side
    // 2. Check if already subscribed
    // 3. Store in Supabase or email service
    // 4. Send confirmation email

    console.warn('subscribeNewsletter: Implementation pending - backend API not ready')
    return {
      success: false,
      error: 'Newsletter subscription not yet configured',
    }
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return {
      success: false,
      error: 'Failed to subscribe',
    }
  }
}

/**
 * Email configuration documentation
 *
 * Required steps before using email functionality:
 *
 * 1. Create backend API endpoints:
 *    - POST /api/email/contact
 *    - POST /api/email/facility-submission
 *    - POST /api/email/bug-report
 *    - POST /api/email/gdpr-request
 *    - POST /api/email/subscribe
 *
 * 2. Backend should:
 *    - Validate all inputs with Zod
 *    - Sanitize text inputs
 *    - Implement rate limiting by IP
 *    - Use environment variables for Resend API key
 *    - Store submissions in Supabase (optional)
 *    - Send via Resend API
 *    - Log appropriately (never log sensitive data)
 *
 * 3. Intended architecture (do NOT put any Resend credential in frontend code):
 *
 *    Browser
 *      -> Cloudflare Worker / Pages Function (server-side endpoint)
 *      -> validation / anti-spam / rate limiting
 *      -> Resend
 *
 * 4. Set up final email addresses in Resend once the domain exists
 *    (potentially hello@, support@, privacy@, data@).
 *
 * 5. Configure CORS for the Worker endpoint
 *
 * 6. Add CSRF protection tokens
 *
 * 7. Consider adding:
 *    - Cloudflare Turnstile for CAPTCHA
 *    - Spam detection
 *    - IP reputation checking
 */

