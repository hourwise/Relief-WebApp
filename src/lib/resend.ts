/**
 * Public-form client adapters. Resend is used only by the server-side Pages
 * Functions; this module never reads or exposes a provider credential.
 */

import type { APIResponse } from './types'
import { submitPublicForm } from './formClient'

export const sendContactEmail = (data: Record<string, unknown>, turnstileToken = ''): Promise<APIResponse<{ reference?: string }>> =>
  submitPublicForm('/api/contact', data, turnstileToken)

export const sendBugReport = (data: Record<string, unknown>, turnstileToken = ''): Promise<APIResponse<{ reference?: string }>> =>
  submitPublicForm('/api/report-bug', data, turnstileToken)

export const sendGDPRRequest = (data: Record<string, unknown>, turnstileToken = ''): Promise<APIResponse<{ reference?: string }>> =>
  submitPublicForm('/api/gdpr-request', data, turnstileToken)

// Facility submissions and newsletter subscriptions remain intentionally
// disabled until their data and moderation/consent decisions are approved.
export const sendFacilitySubmission = async (): Promise<APIResponse<never>> => ({
  success: false,
  error: 'Facility submissions are not enabled.',
})

export const subscribeNewsletter = async (): Promise<APIResponse<never>> => ({
  success: false,
  error: 'Newsletter subscriptions are not enabled.',
})
