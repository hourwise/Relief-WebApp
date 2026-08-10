# Relief Website

The public companion website for **Relief** — a UK-focused mobile app for finding clean, private, and accessible facilities nearby. Built with dignity, accessibility, and privacy at its core. This site is the brand home, app info hub, support centre, privacy/legal centre, and data-transparency centre. It is **not** a browser version of the mobile app.

**Strapline:** Find Comfort, Feel Relief.

## Project Status

⚠️ **In development — not deployed.**

The site builds and runs locally, core pages are in place, and public claims reflect the current product. Forms and email are intentionally disabled until secure server-side infrastructure exists. The website is Cloudflare-ready but not yet deployed.

See [`docs/CURRENT_STATE.md`](docs/CURRENT_STATE.md) for the authoritative source-of-truth status.

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx           # Main layout wrapper
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with links
│   ├── Hero.tsx             # Hero section component
│   └── FeatureCard.tsx      # Feature card component
├── pages/
│   ├── Home.tsx             # Landing page
│   ├── About.tsx            # About/mission page
│   ├── Privacy.tsx          # Privacy policy
│   ├── Terms.tsx            # Terms & conditions
│   ├── Gdpr.tsx             # GDPR rights
│   ├── Contact.tsx          # Contact form
│   ├── Support.tsx          # Support & FAQs
│   ├── AddFacility.tsx      # Facility submission form
│   ├── ReportBug.tsx        # Bug report form
│   ├── BlogIndex.tsx        # Blog listing
│   ├── Press.tsx            # Press kit
│   ├── Social.tsx           # Social media hub
│   └── NotFound.tsx         # 404 page
├── lib/
│   ├── config.ts            # Brand colors, constants, env config
│   ├── types.ts             # TypeScript interfaces
│   ├── validation.ts        # Zod form validation schemas
│   ├── seo.ts               # SEO metadata helpers
│   ├── rateLimit.ts         # Rate limiting utilities
│   ├── resend.ts            # Email service integration (placeholder)
│   └── i18n.ts              # i18n setup
├── locales/
│   └── en.json              # English translations
├── styles/
│   └── globals.css          # Global styles, Tailwind setup
├── App.tsx                  # Main router component
├── main.tsx                 # Entry point
└── index.css                # Base styles
```

## Internationalization

Currently English only. Add more languages by:

1. Create `src/locales/[lang].json` (e.g., `es.json`)
2. Update `src/lib/i18n.ts` to include the new language resource
3. Use `useTranslation()` in components to access strings

Example:

```tsx
const { t } = useTranslation()
// t('common.site_name') → 'Relief'
```

## Routing

All routes are defined in `src/lib/config.ts`:

| Route | Page | Status |
|-------|------|--------|
| `/` | Home | ✅ Ready |
| `/about` | About | ✅ Ready |
| `/contact` | Contact | 🔒 Form disabled (backend pending) |
| `/support` | Support | ✅ Ready |
| `/privacy` | Privacy | ✅ Ready (legal review needed) |
| `/terms` | Terms | ✅ Ready (legal review needed) |
| `/gdpr` | GDPR Rights | ✅ Ready (legal review needed; form disabled) |
| `/add-facility` | Add Facility | 🔒 Disabled (future contribution gateway) |
| `/report-bug` | Report Bug | 🔒 Form disabled (backend pending) |
| `/blog` | Blog Index | ⏳ Coming soon (no posts yet) |
| `/blog/:slug` | Blog Post | ⏳ Not implemented |
| `/data` | Data & Sources | ✅ Ready |
| `/social` | Social Hub | ✅ Ready (accounts not live) |
| `/press` | Press Kit | ✅ Ready (assets pending) |

## Environment Variables

See `.env.example`. No secrets are required to run the site locally.

⚠️ **Security:** anything prefixed `VITE_` is bundled into browser code and is public. There is deliberately **no `VITE_RESEND_API_KEY`** and no other email credential anywhere in the frontend. Intended architecture:

```
Browser
  → Cloudflare Worker / Pages Function (server-side endpoint)
  → validation / anti-spam / rate limiting
  → Resend (transactional email)
```

Optional later additions (backend-only; never private credentials in `VITE_*`):
- `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` - existing backend
- `VITE_ANALYTICS_ID` - Analytics

## Design System

### Colors

Primary theme color: **#0F766E** (teal)

```
--color-primary:       #0F766E
--color-secondary:     #14B8A6
--color-background:    #F8FAFC
--color-success:       #10B981
--color-warning:       #F59E0B
--color-error:         #EF4444
--color-text:          #0F172A
--color-muted:         #64748B
--color-white:         #FFFFFF
```

### Typography

Primary: **Inter**
Secondary: **Plus Jakarta Sans**

### Components

- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.btn-outline` - Outline button
- `.card` - Card component
- `.section-container` - Content wrapper with max-width

## Current Implementation Status

### ✅ Working now

- Project structure and build setup (Vite, React, TypeScript)
- Tailwind CSS with brand theme tokens
- React Router with all page routes (including `/data`)
- i18n setup with English translations
- Layout components (Header, Footer, Layout)
- All core pages with truthful, placeholder-aware content
- Hero and FeatureCard components
- Type definitions and validation schemas (Zod, ready for backend use)
- SEO metadata structure
- Accessibility foundations (focus states, ARIA labels, skip links)
- Client-side rate-limit utilities (UX only — the server enforces for real)

### 🔒 Implemented but disabled

- Contact, Add Facility, Bug Report, GDPR request, newsletter forms
- Email sending (Resend)

**Why:** secure server-side submission does not exist yet. Forms stay disabled until there are backend endpoints with server-side validation, IP-based rate limiting, CSRF protection, and anti-spam (Cloudflare Turnstile recommended).

### ⏳ Planned / Coming later

- Secure web forms via Cloudflare Worker / Pages Function
- Resend transactional email (server-side only)
- Live contact / GDPR / partnership submission
- Facility contribution & correction gateway (moderated)
- Blog posts (none published yet)
- App store links (Android preview in preparation; iOS planned)
- Real domain, email addresses, and social accounts
- Final legal review of Privacy, Terms and GDPR pages
- Accessibility audit against the WCAG AA target

## Deployment (intended)

- **Source:** GitHub
- **Frontend:** Cloudflare Pages (Vite build)
- **DNS / HTTPS / CDN:** Cloudflare-managed
- **Email routing:** Cloudflare Email Routing (incoming aliases, later)
- **Web forms:** Cloudflare Worker / Pages Function (later, for secure submission)
- **Outbound email:** Resend (later, server-side only)
- **Backend:** existing Supabase where appropriate

### Cloudflare Pages launch settings

- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`
- Canonical domain: `https://findrelief.co.uk`
- `www.findrelief.co.uk` will redirect to the canonical apex domain at Cloudflare.
- The eventual `*.pages.dev` URL should redirect to the canonical domain after the custom domain is confirmed.

No Cloudflare resources, DNS records, or deployments are created by this repository pass.

The project is **Cloudflare-ready, not Cloudflare-dependent**: no Cloudflare project, DNS, or domain is configured yet, and the site runs locally with normal `npm run dev` / `npm run build`.
- Spam protection

**Phase 4 - Blog & Social:**
- MDX/Markdown blog system
- Blog post page component
- Social media carousel/links
- Share buttons

**Phase 5 - Visual Polish:**
- Watercolor map background
- Subtle animations
- App screenshot mockups
- Download badges

**Phase 6 - Launch Readiness:**
- Full accessibility audit (WCAG AA)
- Mobile testing
- Form security testing
- SEO validation
- Production Vercel deployment
- Domain setup
- Email domain verification

## Security Architecture

### Current State (Before Phase 3)

- Frontend form validation only (client-side)
- No API keys exposed in code
- All API key placeholders in config
- `.env` files in `.gitignore`

### Required Before Launch

**Backend API Layer:**
1. Express/Node.js or similar backend
2. Server-side validation using Zod
3. Input sanitization and HTML escaping
4. CORS configuration
5. CSRF protection tokens
6. Rate limiting per IP address
7. Request signing/verification

**Email Security:**
- Resend API key stored in backend `.env` only
- Never expose to frontend
- All emails validated server-side
- Honeypot fields on forms

**Form Submission:**
- Validate all data on backend
- Sanitize text inputs
- Check rate limits by IP
- Log submissions without sensitive data
- Send confirmation emails
- Store in Supabase if enabled

**Recommended Additions:**
- Cloudflare Turnstile for CAPTCHA
- IP reputation checking
- Email verification
- Account rate limiting
- Request signing

See `src/lib/resend.ts` for detailed email integration notes.

## Development Guidelines

### Adding a New Page

1. Create page component in `src/pages/[PageName].tsx`
2. Import metadata from `lib/seo.ts`
3. Set document title in useEffect
4. Add route to `src/App.tsx`
5. Add to navigation in `src/lib/config.ts` if needed

### Adding Translations

1. Add key-value pair to `src/locales/en.json`
2. Use `useTranslation()` hook in component
3. Access with `t('namespace.key')`

### Form Validation

1. Define Zod schema in `lib/validation.ts`
2. Use `validateForm()` helper in component
3. All form submission disabled pending security review

### Styling

- Use Tailwind CSS utility classes
- Follow color scheme from `tailwind.config.js`
- Maintain consistent spacing and typography
- Respect `prefers-reduced-motion` media query

## Accessibility

- WCAG AA target compliance
- Keyboard navigation throughout
- ARIA labels on form inputs
- Focus visible states on all interactive elements
- High contrast text
- No color-only information
- Alt text for meaningful images
- Skip to main content link

## SEO

- Meta titles and descriptions on all pages
- Open Graph tags for social sharing
- Structured data ready (Phase 5)
- Clean URLs using React Router
- Sitemap placeholder in `public/`
- Robots.txt in `public/`

## Testing

```bash
# Lint code
npm run lint
```

Currently no automated tests. Consider adding:
- Jest for unit tests
- React Testing Library for component tests
- Cypress for E2E tests

## Performance

- Code splitting via React Router
- Lazy loading components
- Optimized images
- CSS animations respect prefers-reduced-motion
- No blocking scripts

## Analytics (Phase 3)

Privacy-friendly analytics recommended:
- Vercel Analytics
- Plausible
- Simple Analytics

**Not recommended:**
- Google Analytics (invasive tracking)
- Facebook Pixel (privacy concerns)

## Known Limitations & TODOs

- [ ] All forms disabled - awaiting backend API and security review
- [ ] Blog posts not yet implemented
- [ ] Blog post detail page component needed
- [ ] Legal pages need final review before production
- [ ] No backend API for email/storage yet
- [ ] No error boundaries or fallback UI
- [ ] No loading states on form submissions
- [ ] No pagination on blog/facility lists
- [ ] No image optimization pipeline
- [ ] Analytics not configured
- [ ] No database migrations documentation

## Deployment

Currently ready for Vercel (framework preference from plan):

```bash
vercel deploy
```

Ensure environment variables are set in Vercel dashboard before deploying.

## Contributing

When implementing new features:

1. Keep components small and reusable
2. Use TypeScript strictly
3. Add translations for all user-facing text
4. Maintain accessibility standards
5. Follow the brand design system
6. Document complex logic

## Support & Feedback

For issues, questions, or contributions:

📧 info@relief-domain.co.uk
🐛 support@relief-domain.co.uk

## License

[Add your license here]

---

**Built with 💚 for accessibility and dignity**

#   R e l i e f - W e b A p p 
 
 
