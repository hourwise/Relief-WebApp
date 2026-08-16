import assert from 'node:assert/strict'
import test from 'node:test'
import { createReference, handleFormRequest, parseRequest, type FormEnv, type RateLimitKV } from './forms.ts'

const contact = {
  name: 'Test User',
  email: 'test@example.com',
  category: 'general',
  message: 'A valid test message for the contact form.',
  consent: true,
  honeypot: '',
}

const makeRequest = (body: unknown, method = 'POST', headers: Record<string, string> = {}) => new Request('https://findrelief.co.uk/api/contact', {
  method,
  headers: { 'Content-Type': 'application/json', ...headers },
  body: method === 'GET' ? undefined : JSON.stringify(body),
})

const kv = (): RateLimitKV => {
  const store = new Map<string, string>()
  return {
    get: async (key) => store.get(key) || null,
    put: async (key, value) => { store.set(key, value) },
  }
}

test('rejects invalid schema input', async () => {
  const result = await parseRequest(makeRequest({ ...contact, email: 'not-an-email' }), 'contact')
  assert.equal(result.response?.status, 400)
})

test('rejects oversized payloads before parsing', async () => {
  const result = await parseRequest(makeRequest({ ...contact, message: 'x'.repeat(40_000) }), 'contact')
  assert.equal(result.response?.status, 413)
})

test('returns method not allowed for non-POST requests', async () => {
  const result = await handleFormRequest({ request: makeRequest({}, 'GET'), env: {} }, 'contact')
  assert.equal(result.status, 405)
})

test('accepts honeypot hits without sending mail', async () => {
  const result = await handleFormRequest({
    request: makeRequest({ ...contact, honeypot: 'bot value' }),
    env: { RESEND_API_KEY: 'not-used' },
  }, 'contact')
  assert.equal(result.status, 202)
  assert.deepEqual(await result.json(), { ok: true })
})

test('fails closed when Turnstile configuration is missing', async () => {
  const result = await handleFormRequest({
    request: makeRequest(contact),
    env: { FORM_RATE_LIMIT_KV: kv() },
  }, 'contact')
  assert.equal(result.status, 400)
})

test('returns a generic provider failure without exposing secrets', async () => {
  const secret = 'not-a-real-secret'
  const env: FormEnv = { REQUIRE_TURNSTILE: 'false', RESEND_API_KEY: secret, FORM_RATE_LIMIT_KV: kv() }
  const result = await handleFormRequest({ request: makeRequest(contact), env }, 'contact')
  assert.equal(result.status, 503)
  assert.doesNotMatch(await result.text(), new RegExp(secret))
})

test('generates a non-sensitive GDPR reference', () => {
  assert.match(createReference(), /^RL-\d{8}-[A-F0-9]{10}$/)
})
