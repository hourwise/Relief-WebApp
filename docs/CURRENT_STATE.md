# Relief Web — Current State (Source of Truth)

> Authoritative status for the Relief public website.
> Last updated: 2026-08-18
> Branch: `main` (production source branch)

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
| `/gdpr` | GDPR rights | VERIFIED (legal review required; email route and in-app access/deletion guidance) |
| `/delete-account` | Account deletion | IMPLEMENTED (public information route; legal review required) |
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
- Facility submissions, facility reports, temporary reports, corrections,
  access-code contributions, and governed badges for signed-in users
- In-app account deletion at `Profile → Delete account`
- In-app versioned JSON export at `Profile → Privacy & Data → Download my data`
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

## A. CURRENT PUBLIC WEBSITE — LIVE

- Relief is deployed on Cloudflare Pages from the `main` branch.
- The canonical public domain is **`https://findrelief.co.uk`**.
- The custom domain is active and SSL is enabled.
- Apex DNS is proxied through Cloudflare and points to
  `relief-webapp.pages.dev`.
- `relief-webapp.pages.dev` remains the underlying Pages hostname. This
  document does not claim that it redirects to the custom domain.
- `www.findrelief.co.uk` is a proxied, redirect-only hostname. It permanently
  redirects to the apex domain while preserving paths and query strings. This
  has been verified with `/privacy?test=1`.
- The current production build is a static informational SPA. Forms and user
  submission workflows are intentionally not part of the live service.
- Contact/legal reconciliation is committed at
  `7006229b8b5437bc29a5e5df7f593cb33bd45fb7`.

## B. CURRENTLY DISABLED / SAFE

- All web forms (Contact, Add Facility, Report Bug, GDPR request, newsletter)
  are intentionally disabled. No fake success states are presented; pages
  show an honest "coming soon" message.
- No Contact, GDPR, Add Facility, Report Bug, or newsletter backend exists.
- No intentionally installed analytics or tracking system is active.
- Google Fonts remains externally loaded. Self-hosting the current open-source
  font files remains a future privacy/performance improvement.
- Email sending through Resend is not connected. The public email aliases
  listed below are active for correspondence through Cloudflare Email Routing.

## C. BEFORE ENABLING FORMS OR USER SUBMISSION

- Build and review secure server-side form endpoints with validation,
  sanitisation, IP-based rate limiting, CSRF protection, and anti-spam
  controls such as Cloudflare Turnstile.
- Define handling, retention, access controls, and deletion procedures for
  submitted personal information.
- Complete final legal review of Privacy, Terms, and GDPR pages, including
  controller details and the temporary public address disclosure.
- If Supabase or another backend is introduced, keep service keys out of
  `VITE_*` variables and review the resulting provider and data flows.
- Choose and configure any server-side email delivery service only after the
  form design, privacy notice, and operational safeguards are ready.

Intended future form architecture:

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

## 10. Domain / email status

- Canonical production domain: **`https://findrelief.co.uk`**.
- Cloudflare Pages deployment, custom-domain activation, SSL, and proxied DNS
  are live as described in section A.
- Verified public contact aliases:
  `hello@findrelief.co.uk`, `support@findrelief.co.uk`,
  `privacy@findrelief.co.uk`, and `data@findrelief.co.uk`.
- Cloudflare Email Routing is active and forwards these aliases to a verified
  private destination mailbox. The private destination address is not stored
  in repository documentation.
- Operator identity for legal/controller wording: **Phil Geran trading as
  PCGsoft**, a UK sole trader.
- The public business address is supplied through `VITE_BUSINESS_ADDRESS`.
  Production verification that the configured value is visibly rendering on
  the live legal/contact pages remains outstanding. The real value must remain
  absent from Git-tracked files and repository documentation.
- App store links: `null` in `src/lib/config.ts` until real release URLs
  exist. Android public release/store link is future; iOS is future.

## 11. Internal compliance note

- Operator identified: **Phil Geran trading as PCGsoft**.
- The public business address must remain configuration-driven through
  `VITE_BUSINESS_ADDRESS` rather than committed into the public repository or
  `.env.example`.
- Do not mark the address as production-configured until visible rendering on
  the live legal/contact pages has been confirmed.
- If a temporary public address is used, replace it if a separate suitable
  business/service address is obtained. Do not invent or expose any other
  address.
- Future improvement: consider self-hosting the current open-source font files
  so the public website does not need to contact Google Fonts at page load.

## D. FUTURE PRODUCT/CONTENT WORK

- Home hero image is illustrative/placeholder and is labelled as such on the
  page (the app UI is still in development).
- Blog and Social pages show honest empty/"coming soon" states. Blog posts,
  social accounts, and press content/assets remain incomplete or planned; no
  invented articles, testimonials, metrics, or publication history.
- Android public release and store link remain future work; iOS remains future.
- Data-provider / partnership workflows remain future work.
- Legal pages (Privacy / Terms / GDPR) carry a marker that final legal review
  is required; no certifications, formal legal sign-off, or compliance claims
  are made.

## 12. Known placeholders

- Home hero image is illustrative/placeholder and is labelled as such on the
  page (the app UI is still in development).
- Press kit download assets: "Coming Soon".
- The production business address value is intentionally absent from tracked
  source and is pending visible production verification.

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

## 14. Genuine remaining review / future items

1. Final legal and compliance review of Privacy / Terms / GDPR, including
   controller details, provider arrangements, international-transfer review,
   and the temporary public address disclosure.
2. Production verification that `VITE_BUSINESS_ADDRESS` visibly renders on
   the live legal/contact pages.
3. Accessibility review against the WCAG AA target; no WCAG AA compliance
   claim is made here.
4. Secure form backend, Turnstile, retention procedures, and any email-sending
   integration before enabling user submission.
5. Android public release/store link and later iOS release.
6. Data-provider / partnership process, first blog posts, real social
   accounts, and completed press assets.
7. Deferred dependency upgrades and audit findings remain documented in
   section 13; no major dependency upgrades were introduced for this state
   reconciliation.

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
