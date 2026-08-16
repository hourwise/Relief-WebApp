# Relief Web — Current State

> Authoritative status for the Relief public website.
> Last updated: 2026-08-16

Status terms: **VERIFIED**, **IMPLEMENTED**, **IMPLEMENTED BUT REQUIRES EXTERNAL CONFIG**, **DISABLED**, **PLANNED**, **DECISION REQUIRED**, and **NOT TESTED**.

## Website and deployment

- **VERIFIED:** Vite 5, React 18, TypeScript, Tailwind CSS, React Router, i18next, Zod, React Hook Form, Framer Motion, and Lucide are used.
- **VERIFIED:** The intended production source branch is `main`, with Cloudflare Pages serving `https://findrelief.co.uk`.
- **VERIFIED:** The site remains a static SPA with no browser-side private credentials. `VITE_*` values are public.
- **NOT TESTED:** This batch does not verify the live Cloudflare deployment or production function routing.

## Public routes

| Route | State |
| --- | --- |
| `/`, `/about`, `/support`, `/data` | VERIFIED |
| `/privacy`, `/terms`, `/gdpr` | IMPLEMENTED; final legal review required |
| `/contact` | IMPLEMENTED BUT REQUIRES EXTERNAL CONFIG |
| `/report-bug` | IMPLEMENTED BUT REQUIRES EXTERNAL CONFIG |
| `/delete-account` | IMPLEMENTED as an external request/help route |
| `/add-facility` | DISABLED |
| `/blog`, `/social`, `/press` | VERIFIED placeholders / PLANNED content |

## Forms and server architecture

- **IMPLEMENTED:** Contact, Report Bug, and GDPR/data-rights forms use React Hook Form, existing Zod schemas, accessible labels, field-level errors, loading/submit protection, success/error states, and no screenshot upload.
- **IMPLEMENTED:** Same-origin Pages Function endpoints are in `functions/api/contact.ts`, `functions/api/report-bug.ts`, and `functions/api/gdpr-request.ts`.
- **IMPLEMENTED:** The shared handler checks POST method, JSON content type, a 32 KB body limit, strict accepted fields, Zod validation, honeypots, Turnstile, generic errors, KV-backed per-IP bucket limits, and server-side email delivery.
- **IMPLEMENTED BUT REQUIRES EXTERNAL CONFIG:** Outbound delivery is prepared for Resend; no provider key is committed or available in browser code.
- **IMPLEMENTED BUT REQUIRES EXTERNAL CONFIG:** The browser Turnstile integration fails closed when `VITE_TURNSTILE_SITE_KEY` is absent. The server fails closed when `TURNSTILE_SECRET_KEY` or `FORM_RATE_LIMIT_KV` is absent.
- **DISABLED:** Add Facility and newsletter. No public website form writes to Supabase in this batch.

Required deployment names only: `RESEND_API_KEY`, `RESEND_FROM_EMAIL` (optional), `TURNSTILE_SECRET_KEY`, `FORM_RATE_LIMIT_KV`, and public `VITE_TURNSTILE_SITE_KEY`.

## Privacy and data handling

- **IMPLEMENTED:** Privacy copy now describes the three enabled form categories, the information they receive, spam/security processing, Cloudflare/Pages Function processing, server-side email-provider involvement, and the absence of a fixed retention period.
- **IMPLEMENTED:** The GDPR form generates a non-sensitive request reference and never automatically deletes an account.
- **DECISION REQUIRED:** Final retention procedure, provider terms, transfer safeguards, and legal wording review.
- **VERIFIED:** Direct email aliases are `hello@findrelief.co.uk`, `support@findrelief.co.uk`, `privacy@findrelief.co.uk`, and `data@findrelief.co.uk`; Cloudflare Email Routing is not changed by this batch.

## Account deletion

- **IMPLEMENTED:** `/delete-account` is a public route suitable for an external request link and works without the app installed.
- **NOT VERIFIED:** The inspected mobile repository `hourwise/Relief` at `9cfda375912a84b9ea90b6a267f1678341b055eb` contains no `ACCOUNT_DELETION_CONTRACT.md`, deletion Edge Function, or in-app deletion screen; its current documentation still says deletion is not implemented.
- **SAFETY POSITION:** The website does not claim in-app automated deletion, a subscription-history guard, deletion timing, or deletion of particular mobile records. The route directs users to `privacy@findrelief.co.uk`, says not to send passwords, and allows identity verification where necessary.
- **DECISION REQUIRED:** Reconcile the mobile/backend source before publishing copy that promises an in-app deletion workflow.

## Community and facility intake

- **VERIFIED:** The inspected mobile app uses authenticated `facility_submissions` for pending new facilities, `correction_requests` for field-level corrections, and temporary facility issue reports. It also contains provenance (`facility_sources`/`field_provenance`), photo moderation, badges, and rate-limit structures.
- **DECISION REQUIRED:** The mobile baseline contains both `facility_reports` and `temporary_reports`, while the service/UI use the temporary-report model. Reconcile that contract before web integration.
- **DISABLED:** The WebApp Add Facility form remains disabled and does not write directly to canonical `facilities`.
- **IMPLEMENTED:** The audit and recommended staging/moderation design are documented in `docs/COMMUNITY_INTAKE_PLAN.md`.
- **NO PRODUCTION CHANGE:** No Supabase migration, RLS change, grant, or destructive command was applied.

## External/manual actions remaining

1. Configure the listed Cloudflare Pages Function secrets/binding and public Turnstile site key.
2. Create/verify the Resend sending-domain configuration and confirm the sender address.
3. Deploy and manually test Pages Function routing, Turnstile, KV limits, and mail delivery.
4. Complete legal review of Privacy, Terms, GDPR, retention, and provider/transfer wording.
5. Reconcile the mobile account-deletion implementation and contract; only then update the public deletion page with verified in-app steps.
6. Approve the community intake schema, staging queue, moderation flow, and any future Supabase migration separately.
7. Add the public deletion URL to the relevant app-store console only after the mobile flow is real and verified.
