# Relief Website

The public companion website for Relief, a UK-focused mobile app for finding clean, private, and accessible facilities nearby. It is the public brand, support, legal, and data-transparency site; it is not a browser version of the mobile map.

## Status

The site is built with Vite, React, TypeScript, Tailwind, React Router, Zod, and React Hook Form. It is intended for Cloudflare Pages at `https://findrelief.co.uk`.

The Contact, Report Bug, and GDPR/data-rights forms are implemented through same-origin Cloudflare Pages Functions. They require external Turnstile, Cloudflare KV, and server-side email configuration before production submissions can succeed. Add Facility and newsletter remain disabled.

The public `/delete-account` route documents the verified in-app deletion flow and provides an external privacy/data-rights route for users without app access or with subscription/payment-history limitations. See [`docs/CURRENT_STATE.md`](docs/CURRENT_STATE.md).

## Quick start

```bash
npm ci
npm run dev
npm run build
npm run lint
```

## Form endpoints

```text
Browser
  → same-origin Pages Function
  → server-side Zod validation, size/method checks, honeypot, Turnstile, KV rate limit
  → Resend (server-side only, when configured)
```

Endpoints are `/api/contact`, `/api/report-bug`, and `/api/gdpr-request`. The required deployment names are documented in `docs/CURRENT_STATE.md`; never put private values in `VITE_*` variables.

## Community intake

The public Add Facility form is deliberately disabled. The mobile/backend audit and proposed staging/moderation architecture are documented in [`docs/COMMUNITY_INTAKE_PLAN.md`](docs/COMMUNITY_INTAKE_PLAN.md). Anonymous website submissions must not write directly to the canonical `facilities` table.

## Routes

See `src/lib/config.ts` and `src/App.tsx` for the complete route list. Important public routes include `/privacy`, `/terms`, `/gdpr`, `/delete-account`, `/contact`, `/report-bug`, `/add-facility`, and `/data`.
