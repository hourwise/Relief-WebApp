# Relief Website

A community-powered web app for finding clean, private, and accessible facilities nearby. Built with dignity, accessibility, and privacy at its core.

**Strapline:** Find Comfort, Feel Relief.

## Project Status

🚀 **Phase 1 - Foundation Complete**

The scaffolding is now complete! All core pages are built with placeholder content. Forms are disabled pending security review. Ready for Phase 2-6 implementation.

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
| `/contact` | Contact | 🔒 Form disabled (security review) |
| `/support` | Support | ✅ Ready |
| `/privacy` | Privacy | ✅ Ready (legal review needed) |
| `/terms` | Terms | ✅ Ready (legal review needed) |
| `/gdpr` | GDPR Rights | 🔒 Form disabled (security review) |
| `/add-facility` | Add Facility | 🔒 Form disabled (security review) |
| `/report-bug` | Report Bug | 🔒 Form disabled (security review) |
| `/blog` | Blog Index | ⏳ Phase 4 |
| `/blog/:slug` | Blog Post | ⏳ Phase 4 |
| `/social` | Social Hub | ✅ Ready |
| `/press` | Press Kit | ✅ Ready |

## Environment Variables

See `.env.example` for all required variables.

**Current state:** No secrets added yet. All `.env` files with actual API keys are in `.gitignore`.

Required before launch:
- `VITE_RESEND_API_KEY` - Email API (backend only, never frontend)
- `VITE_SUPABASE_URL` - Database (optional)
- `VITE_SUPABASE_ANON_KEY` - Database (optional)
- `VITE_ANALYTICS_ID` - Analytics (optional)

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

### ✅ Completed (Phase 1)

- Project structure and build setup (Vite, React, TypeScript)
- Tailwind CSS with brand theme tokens
- React Router with all page routes
- i18n setup with English translations
- Layout components (Header, Footer, Layout)
- All core pages with placeholder content
- Hero and FeatureCard components
- Type definitions (TypeScript interfaces)
- Validation schemas (Zod - not yet wired to forms)
- SEO metadata structure
- Accessibility basics (focus states, ARIA labels, skip links)
- Rate limiting utilities (client-side for UX)
- Email service stubs (implementation pending)
- Brand configuration and constants

### 🔒 Pending Security Review (Phase 3)

- Contact form
- Add facility form
- Bug report form
- GDPR request form
- Email integration

**Important:** All form submissions are disabled pending:
1. Backend API endpoints
2. Server-side validation and sanitization
3. Rate limiting by IP address
4. CSRF protection
5. Captcha integration (Cloudflare Turnstile recommended)

### ⏳ Not Yet Started

**Phase 2 - Core Pages:**
- Final polish on legal pages (privacy, terms, GDPR require legal review)

**Phase 3 - Forms & Email:**
- Contact form submission backend
- Facility submission backend
- Bug report backend
- GDPR request backend
- Resend email integration
- Supabase integration (optional)
- Rate limiting enforcement
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

#   R e l i e f - W e b A p p  
 