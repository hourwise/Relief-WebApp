/**
 * Zod validation schemas for all forms
 * NOTE: Server-side validation is critical for security
 * These schemas are for client-side UX only
 */

import { z } from 'zod'

/**
 * Contact form validation
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  category: z.enum(['general', 'support', 'press', 'partnership', 'privacy', 'data-correction']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to our contact policy',
  }),
  honeypot: z.string().optional().refine((val) => !val || val === '', {
    message: 'Form submission failed',
  }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

/**
 * Add facility form validation
 */
export const addFacilityFormSchema = z.object({
  facility_name: z.string().min(2, 'Facility name is required').max(255),
  address: z.string().min(5, 'Address is required').max(255),
  postcode: z.string().min(3, 'Postcode is required').max(20),
  town_city: z.string().min(2, 'Town/City is required').max(100),
  latitude: z.number().refine(
    (val) => val >= -90 && val <= 90,
    'Latitude must be between -90 and 90'
  ),
  longitude: z.number().refine(
    (val) => val >= -180 && val <= 180,
    'Longitude must be between -180 and 180'
  ),
  country: z.string().length(2).default('GB'),
  access_notes: z.string().max(1000).default(''),
  is_free: z.boolean().default(true),
  price_note: z.string().max(255).default(''),
  is_accessible: z.boolean().default(false),
  is_disabled_access: z.boolean().default(false),
  has_baby_changing: z.boolean().default(false),
  has_family_room: z.boolean().default(false),
  is_gender_neutral: z.boolean().default(false),
  is_single_occupancy: z.boolean().default(false),
  is_24h: z.boolean().default(false),
  notes: z.string().max(1000).default(''),
  access_codes: z.string().max(500).default(''),
  submission_notes: z.string().max(1000).default(''),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to our submission policy',
  }),
  honeypot: z.string().optional().refine((val) => !val || val === '', {
    message: 'Form submission failed',
  }),
})

export type AddFacilityFormValues = z.infer<typeof addFacilityFormSchema>

/**
 * Bug report form validation
 */
export const bugReportFormSchema = z.object({
  name: z.string().max(100).optional(),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  platform: z.enum(['ios', 'android', 'website']),
  device_model: z.string().max(100).optional(),
  app_version: z.string().max(50).optional(),
  description: z.string().min(10, 'Description is required').max(2000),
  steps_to_reproduce: z.string().min(5, 'Steps are required').max(2000),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to bug report submission',
  }),
  honeypot: z.string().optional().refine((val) => !val || val === '', {
    message: 'Form submission failed',
  }),
})

export type BugReportFormValues = z.infer<typeof bugReportFormSchema>

/**
 * GDPR request form validation
 */
export const gdprRequestFormSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  request_type: z.enum(['access', 'deletion', 'correction', 'withdraw-consent']),
  description: z.string().max(1000).optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to this GDPR request',
  }),
  honeypot: z.string().optional().refine((val) => !val || val === '', {
    message: 'Form submission failed',
  }),
})

export type GDPRRequestFormValues = z.infer<typeof gdprRequestFormSchema>

/**
 * Email subscription validation
 */
export const emailSubscriptionSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to email communications',
  }),
})

export type EmailSubscriptionValues = z.infer<typeof emailSubscriptionSchema>

/**
 * Validate form data
 */
export async function validateForm<T>(
  schema: z.ZodSchema,
  data: unknown
): Promise<{ success: boolean; data?: T; errors?: Record<string, string> }> {
  try {
    const validData = await schema.parseAsync(data)
    return { success: true, data: validData as T }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {}
      error.errors.forEach((err) => {
        const path = err.path.join('.')
        errors[path] = err.message
      })
      return { success: false, errors }
    }
    return { success: false, errors: { form: 'Validation error' } }
  }
}

