# Relief Web — Current State (Source of Truth)

> Authoritative status for the Relief public website.
> Last updated: 2026-08-10
> Branch: `main` (intended production source branch)

Status terms used throughout this document:

- **VERIFIED** — confirmed working / true
- **IMPLEMENTED BUT DISABLED** — code exists but intentionally switched off
- **PLANNED** — intended, not yet built
- **EXTERNAL SETUP REQUIRED** — needs a third-party account/service to exist
- **NOT TESTED** — present but not validated

---

## 1. Project purpose

The public companion website for the **Relief** mobile app. Its roles:

1. Relief's public / brand home
2. Android app information & download hub (once a public build exists)
3. Support centre
4. Privacy / GDPR / legal information centre
5. Data transparency centre (`/data`)
6. Future facility contribution / correction gateway (moderated)
7. Future partnerships / data-provider contact point
8. Blog / project-update home

It is **not** a browser version of the interactive facility map and does not
duplicate the mobile app.

## 2. Stack (VERIFIED)

- Vite 5 + React 18 + TypeScript 5.9 + Tailwind CSS 3
- React Router v6, i18next, Zod, React Hook Form, Framer Motion, Lucide
- ESLint 8 + @typescript-eslint v8 (supports TS 5.9)

## 3. Quality gates (VERIFIED)

| Gate | Result |
|------|--------|
| `npm ci` | PASS |
| `npm run build` | PASS |
| `npm run lint` | PASS (no TypeScript-version warning after v8 upgrade) |
| `npm audit` | 4 findings remain — see §13 (no `--force` used) |

## 4. Pages / routes

| Route | Page | State |
|-------|------|-------|
| `/` | Home | VERIFIED |
| `/about` | About | VERIFIED |
| `/support` | Support | VERIFIED |
| `/data` | Data & Sources | VERIFIED |
| `/privacy` | Privacy | VERIFIED (final legal review required) |
| `/terms` | Terms | VERIFIED (final legal review required) |
| `/gdpr` | GDPR rights | VERIFIED (legal review required; request form disabled) |
| `/contact` | Contact | VERIFIED (form IMPLEMENTED BUT DISABLED) |
| `/add-facility` | Add Facility | VERIFIED (form IMPLEMENTED BUT DISABLED) |
| `/report-bug` | Report Bug | VERIFIED (form IMPLEMENTED BUT DISABLED) |
| `/blog` | Blog index | VERIFIED (no posts — PLANNED) |
| `/blog/:slug` | Blog post | PLANNED (route not implemented) |
| `/social` | Social hub | VERIFIED (no live accounts — PLANNED) |
| `/press` | Press kit | VERIFIED (download assets PLANNED) |
| `*` | 404 | VERIFIED |

## 5. Product features the website may truthfully describe

Verified mobile capabilities (Android preview build):

- Guest facility discovery
- Map / List Find experience
- Need One Now
- Current-location centring
- Facility details and directions
- Search
- Favourites for signed-in users
- Reports / corrections for signed-in users
- Filters backed by real live data: Cost (Any / Free / Paid), Open now,
  Open 24 hours, Accessible, RADAR Key, Baby changing, Gender-neutral,
  Family friendly, Staff nearby

The website deliberately does **not** claim: thousands of users, live
community ratings, privacy ratings as an active feature, grab-rail or
step-free filtering as currently available, real-time availability,
universally verified opening times, AI/smart recommendations, route
planning, offline maps, iOS availability, or app-store availability.

Planned functionality may appear, but only clearly labelled **Planned** /
**Coming later** / **In development**, with no speculative launch dates.

## 6. Intentionally disabled features

- All web forms (Contact, Add Facility, Report Bug, GDPR request,
  newsletter) — IMPLEMENTED BUT DISABLED. No fake success states; pages
  show an honest "coming soon" message.
- Email sending (Resend) — PLANNED, server-side only, not connected.

## 7. Forms / backend status

- No backend endpoints exist yet (PLANNED).
- Intended architecture:

  ```
  Browser
    → Cloudflare Worker / Pages Function (server-side endpoint)
    → validation / anti-spam / rate limiting
    → Resend (transactional email)
  ```

- There is deliberately **no frontend email credential** (nothing like a
  Resend key in `VITE_*` variables — anything `VITE_` is public).
- Add Facility is a future contribution gateway: submissions will be
  moderated, will not become live immediately, and no account is implied.

## 8. Data & Sources

- Current live dataset baseline: **Toilet Map UK** (VERIFIED — the only
  source currently in the database).
- Future enrichment work (transport operators, councils, specialist
  accessibility organisations): **research only — NOT part of the live
  dataset**; no partnerships or logos claimed.
- Community contributions / corrections: PLANNED (moderated).
- The database records source/provenance; data can become stale; Relief
  aims to prefer authoritative/current evidence and reconciles facilities
  from multiple sources rather than showing duplicates.

## 9. Deployment status

- **Not deployed** (EXTERNAL SETUP REQUIRED).
- Intended Cloudflare Pages settings after review:
  - Production branch: `main`
  - Build command: `npm run build`
  - Output directory: `dist`
  - Canonical domain: `findrelief.co.uk`
  - `www.findrelief.co.uk` redirects to `findrelief.co.uk`
  - `*.pages.dev` redirects to the canonical domain after the custom domain is confirmed
- Later external setup: Cloudflare-managed DNS/HTTPS/CDN, Email Routing, secure
  Worker / Pages Function forms, Resend (server-side), and existing Supabase where appropriate.
- The project is **Cloudflare-ready, not Cloudflare-dependent**: no
  Cloudflare project, DNS, domain, email, Worker, or Supabase connection
  has been created. The site runs locally with `npm run dev` / `npm run build`.

## 10. Domain / email status

- Canonical production domain: **`https://findrelief.co.uk`** (configured in the
  frontend defaults and `.env.example`; DNS and hosting remain external setup).
- `www.findrelief.co.uk` is not canonical and is intended to redirect at Cloudflare.
- Verified public contact addresses:
  `hello@findrelief.co.uk`, `support@findrelief.co.uk`,
  `privacy@findrelief.co.uk`, and `data@findrelief.co.uk`.
- Operator identity for legal/controller wording: **Phil Geran trading as
  PCGsoft**, a UK sole trader.
- A current public business/correspondence address has been supplied and
  expressly authorised by the owner for temporary use. It must remain
  configuration-driven and must not be committed to this public repository.
- Replace it if a separate suitable business/service address is obtained.
- App store links: `null` in `src/lib/config.ts` until real release URLs
  exist. Android preview is in preparation (PLANNED); iOS is PLANNED.

## 11. Internal compliance note

- Operator identified: **Phil Geran trading as PCGsoft**.
- The current public business/correspondence address has been supplied and
  expressly authorised by the owner for temporary use.
- The address must remain configuration-driven rather than committed into the
  public repository or `.env.example`.
- Replace it if a separate suitable business/service address is obtained.
- Do not invent or expose any other address.
- Future improvement: consider self-hosting the current open-source font files
  so the public website does not need to contact Google Fonts at page load.

## 12. Known placeholders

- Home hero image is illustrative/placeholder and is labelled as such on
  the page (the app UI is still in development).
- Press kit download assets: "Coming Soon".
- Current public business/correspondence address is deployment-configured and
  intentionally absent from tracked source.
- Blog and Social pages show honest empty/"coming soon" states — no
  invented articles, testimonials, metrics, or publication history.
- Legal pages (Privacy / Terms / GDPR) carry a marker that final legal
  review is required before launch; no certifications or compliance claims.

## 13. Dependency / audit findings (2026-08-07)

- **@typescript-eslint** upgraded v7 → v8 to support TypeScript 5.9
  (v7 warned against TS 5.9.x). Lint warning resolved; no app behaviour
  change.
- **postcss** high-severity path-traversal advisory — fixed via
  `npm audit fix` (non-breaking, within 8.x). No `--force` used.
- **Deferred (breaking upgrades, deliberately not applied):**
  - `esbuild` / `vite` (moderate): dev-server request vulnerability; fix
    requires Vite 8 (major). Dev-time only; revisit during a dedicated
    dependency-modernisation effort.
  - `react-router` / `react-router-dom` (moderate open redirect + high
    SSR constructor-injection advisory): fix requires v7 (major). The site
    is a static SPA without SSR; revisit before launch if warranted.

## 14. Security blockers (before public launch)

1. Server-side form endpoints with validation, sanitisation, IP-based rate
   limiting, CSRF, and anti-spam (Cloudflare Turnstile recommended).
2. Final legal review of Privacy / Terms / GDPR.
3. Final legal confirmation of the temporary public address disclosure and
   controller details.
4. Secure handling of any future Supabase integration (service keys never
   in `VITE_*`).

## 15. Outstanding launch requirements

1. Secure form backend (Cloudflare Worker / Pages Function) + Turnstile
2. Legal review sign-off on Privacy / Terms / GDPR
3. DNS, email routing, review of the temporary public address disclosure, and
   final owner/controller legal confirmation
4. Cloudflare Pages deployment
5. Accessibility audit against the **WCAG AA target** (a formal "WCAG AA
   compliant" claim may only be made after a real audit)
6. Real Android preview build and store link; iOS later
7. Data-provider / partnership process (via Contact once live)
8. First blog posts
9. Real social accounts and press assets

---

## Superseded historical documents

The following docs describe the original scaffolding and are retained for
history only; they are marked **SUPERSEDED** and may contain outdated claims
(e.g., Vercel deployment, phase-complete language):

- `BUILD_SUMMARY.md`
- `SCAFFOLDING_COMPLETE.md`
- `QUICK_REFERENCE.md`
- `SETUP_CHECKLIST.md`
- `relief_website_build_plan.md`
- `DEVELOPMENT.md` (development guide; deployment section updated to
  Cloudflare intent)
