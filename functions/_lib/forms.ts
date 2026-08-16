import { z } from 'zod'

import {
  bugReportFormSchema,
  contactFormSchema,
  gdprRequestFormSchema,
} from '../../src/lib/validation.ts'

export interface FormEnv {
  RESEND_API_KEY?: string
  RESEND_FROM_EMAIL?: string
  TURNSTILE_SECRET_KEY?: string
  REQUIRE_TURNSTILE?: string
  FORM_RATE_LIMIT_KV?: RateLimitKV
}

export interface RateLimitKV {
  get(key: string, type: 'text'): Promise<string | null>
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>
}

export interface PagesContext {
  request: Request
  env: FormEnv
}

export type FormKind = 'contact' | 'report-bug' | 'gdpr-request'

const MAX_BODY_BYTES = 32 * 1024
const RATE_LIMITS: Record<FormKind, { windowMs: number; max: number }> = {
  contact: { windowMs: 60 * 60 * 1000, max: 5 },
  'report-bug': { windowMs: 60 * 60 * 1000, max: 10 },
  'gdpr-request': { windowMs: 24 * 60 * 60 * 1000, max: 1 },
}

const schemaByKind = {
  contact: contactFormSchema.strict(),
  'report-bug': bugReportFormSchema.strict(),
  'gdpr-request': gdprRequestFormSchema.strict(),
} as const

const jsonHeaders = {
  'Cache-Control': 'no-store',
  'Content-Type': 'application/json; charset=utf-8',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
}

export const jsonResponse = (body: Record<string, unknown>, status = 200): Response =>
  new Response(JSON.stringify(body), { status, headers: jsonHeaders })

export const methodNotAllowed = (): Response =>
  jsonResponse({ error: 'Method not allowed' }, 405)

export const getClientIp = (request: Request): string =>
  request.headers.get('CF-Connecting-IP')?.trim()
    || request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim()
    || 'unknown'

const hash = async (value: string): Promise<string> => {
  const bytes = new TextEncoder().encode(value)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

export const parseRequest = async (
  request: Request,
  kind: FormKind,
): Promise<{ data?: Record<string, unknown>; turnstileToken?: string; honeypotHit: boolean; response?: Response }> => {
  const contentType = request.headers.get('content-type')?.toLowerCase() || ''
  if (!contentType.startsWith('application/json')) {
    return { honeypotHit: false, response: jsonResponse({ error: 'Invalid request' }, 415) }
  }

  const contentLength = Number(request.headers.get('content-length') || 0)
  if (contentLength > MAX_BODY_BYTES) {
    return { honeypotHit: false, response: jsonResponse({ error: 'Request is too large' }, 413) }
  }

  let raw: unknown
  try {
    const body = await request.arrayBuffer()
    if (body.byteLength > MAX_BODY_BYTES) {
      return { honeypotHit: false, response: jsonResponse({ error: 'Request is too large' }, 413) }
    }
    raw = JSON.parse(new TextDecoder().decode(body))
  } catch {
    return { honeypotHit: false, response: jsonResponse({ error: 'Invalid request' }, 400) }
  }

  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { honeypotHit: false, response: jsonResponse({ error: 'Invalid request' }, 400) }
  }

  const input = raw as Record<string, unknown>
  const turnstileToken = typeof input.turnstileToken === 'string' ? input.turnstileToken : undefined
  const { turnstileToken: _ignored, ...formData } = input
  void _ignored

  const acceptedFields = Object.keys(schemaByKind[kind].shape)
  if (Object.keys(formData).some((key) => !acceptedFields.includes(key))) {
    return { honeypotHit: false, response: jsonResponse({ error: 'Please check the submitted fields' }, 400) }
  }
  // Do not reveal whether a bot payload would otherwise validate. The field
  // allowlist has already been enforced, so silently accept honeypot hits.
  if (typeof formData.honeypot === 'string' && formData.honeypot.length > 0) {
    return { honeypotHit: true }
  }

  const parsed = schemaByKind[kind].safeParse(formData)
  if (!parsed.success) {
    return { honeypotHit: false, response: jsonResponse({ error: 'Please check the submitted fields' }, 400) }
  }

  const honeypotHit = typeof parsed.data.honeypot === 'string' && parsed.data.honeypot.length > 0
  return { data: parsed.data, turnstileToken, honeypotHit }
}

export const verifyTurnstile = async (
  request: Request,
  env: FormEnv,
  token: string | undefined,
): Promise<boolean> => {
  if (env.REQUIRE_TURNSTILE === 'false') return true
  if (!env.TURNSTILE_SECRET_KEY || !token) return false

  try {
    const body = new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: getClientIp(request),
    })
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    if (!response.ok) return false
    const result = await response.json() as { success?: boolean }
    return result.success === true
  } catch {
    return false
  }
}

export const consumeRateLimit = async (
  request: Request,
  env: FormEnv,
  kind: FormKind,
): Promise<'allowed' | 'limited' | 'unconfigured'> => {
  const kv = env.FORM_RATE_LIMIT_KV
  if (!kv) return 'unconfigured'

  const config = RATE_LIMITS[kind]
  const bucket = Math.floor(Date.now() / config.windowMs)
  const key = `form:${kind}:${bucket}:${await hash(getClientIp(request))}`
  const current = Number(await kv.get(key, 'text') || 0)
  if (current >= config.max) return 'limited'

  await kv.put(key, String(current + 1), { expirationTtl: Math.ceil(config.windowMs / 1000) + 60 })
  return 'allowed'
}

const internalRecipientByKind: Record<FormKind, string> = {
  contact: 'hello@findrelief.co.uk',
  'report-bug': 'support@findrelief.co.uk',
  'gdpr-request': 'privacy@findrelief.co.uk',
}

const safeLines = (data: Record<string, unknown>): string =>
  Object.entries(data)
    .filter(([key]) => key !== 'consent' && key !== 'honeypot')
    .map(([key, value]) => `${key}: ${String(value ?? '').slice(0, 5000)}`)
    .join('\n')

const sendResendEmail = async (
  env: FormEnv,
  options: { to: string; subject: string; text: string; replyTo?: string },
): Promise<boolean> => {
  if (!env.RESEND_API_KEY) return false

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL || 'Relief Website <hello@findrelief.co.uk>',
        to: [options.to],
        subject: options.subject,
        text: options.text,
        ...(options.replyTo ? { reply_to: options.replyTo } : {}),
      }),
    })
    return response.ok
  } catch {
    return false
  }
}

export const sendSubmissionEmails = async (
  env: FormEnv,
  kind: FormKind,
  data: Record<string, unknown>,
  reference?: string,
): Promise<boolean> => {
  const email = typeof data.email === 'string' ? data.email : undefined
  const subject = kind === 'contact'
    ? `Relief website contact: ${String(data.category)}`
    : kind === 'report-bug' ? 'Relief website bug report' : `Relief data-rights request${reference ? ` ${reference}` : ''}`
  const text = `${reference ? `Reference: ${reference}\n\n` : ''}${safeLines(data)}`

  const internalSent = await sendResendEmail(env, {
    to: internalRecipientByKind[kind],
    subject,
    text,
    replyTo: email,
  })
  if (!internalSent) return false

  if (email && (kind === 'contact' || kind === 'gdpr-request')) {
    const acknowledgement = kind === 'gdpr-request'
      ? `We received your data-rights request. Your reference is ${reference}. We may need to verify your identity before responding.`
      : 'We received your message. We will review it and reply if a response is needed.'
    return sendResendEmail(env, {
      to: email,
      subject: `Relief received your ${kind === 'gdpr-request' ? 'data-rights request' : 'message'}`,
      text: `${acknowledgement}\n\nRelief will never ask for your password by email.`,
    })
  }
  return true
}

export const createReference = (): string => {
  const suffix = crypto.randomUUID().replace(/-/g, '').slice(0, 10).toUpperCase()
  return `RL-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${suffix}`
}

export const handleFormRequest = async (
  context: PagesContext,
  kind: FormKind,
): Promise<Response> => {
  const { request, env } = context
  if (request.method !== 'POST') return methodNotAllowed()

  const parsed = await parseRequest(request, kind)
  if (parsed.response) return parsed.response
  if (parsed.honeypotHit) return jsonResponse({ ok: true }, 202)
  if (!parsed.data) return jsonResponse({ error: 'Invalid request' }, 400)

  if (!(await verifyTurnstile(request, env, parsed.turnstileToken))) {
    return jsonResponse({ error: 'Submission could not be verified' }, 400)
  }

  const rateLimit = await consumeRateLimit(request, env, kind)
  if (rateLimit === 'unconfigured') return jsonResponse({ error: 'Form service is not configured' }, 503)
  if (rateLimit === 'limited') return jsonResponse({ error: 'Please try again later' }, 429)

  const reference = kind === 'gdpr-request' ? createReference() : undefined
  const sent = await sendSubmissionEmails(env, kind, parsed.data, reference)
  if (!sent) return jsonResponse({ error: 'The form service is temporarily unavailable' }, 503)

  return jsonResponse({ ok: true, ...(reference ? { reference } : {}) })
}

export type FormData = z.infer<typeof contactFormSchema> | z.infer<typeof bugReportFormSchema> | z.infer<typeof gdprRequestFormSchema>
