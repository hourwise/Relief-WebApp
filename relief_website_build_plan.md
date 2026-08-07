# Relief Website Build Plan

> ⚠️ **SUPERSEDED** — Historical requirements/planning document from before
> the product reached its current state. Parts are outdated (e.g., Vercel
> hosting). See [`docs/CURRENT_STATE.md`](docs/CURRENT_STATE.md) for current
> architecture and status.

## Project Summary

Build a simple, polished Vite web app for the Relief mobile app.

Relief is a public toilet and suitable facilities locator app focused on dignity, accessibility, privacy, cleanliness and peace of mind.

The website should act as:

- Landing page
- Brand home
- App download hub
- Privacy/GDPR information centre
- Contact and support portal
- Blog/social content hub
- Facility submission and bug-reporting gateway

## Brand Direction

### Name

Relief

### Strapline

Find Comfort, Feel Relief

### Visual Style

Use the same visual identity as the app:

- Calm teal colour scheme
- Watercolour textures
- Soft map lines
- Glowing location pins
- Gentle accessibility-first illustrations
- Studio Ghibli-inspired warmth, but avoid direct copying of copyrighted characters or assets
- Rounded cards
- Clean typography
- Calm, premium, reassuring tone

### Colour Palette

```css
--color-primary: #0F766E;
--color-secondary: #14B8A6;
--color-background: #F8FAFC;
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-text: #0F172A;
--color-muted: #64748B;
--color-white: #FFFFFF;
```

### Typography

Preferred:

- Inter

Alternative:

- Plus Jakarta Sans

Use large, readable text and excellent contrast.

## Recommended Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- ~~Vercel hosting~~ → Cloudflare Pages (see docs/CURRENT_STATE.md)
- Resend for transactional email
- Supabase optional for storing form submissions
- Markdown or MDX for blog posts
- React Router
- React Hook Form + Zod for forms
- Framer Motion for subtle animation only
- Lucide React for icons

## Website Structure

```txt
/
  Home
/about
/privacy
/terms
/gdpr
/contact
/support
/add-facility
/report-bug
/blog
/blog/:slug
/social
/press
```

## Core Pages

## 1. Home Page

Purpose:

Introduce Relief, explain the problem, show the app concept and direct users to download or join the waitlist.

Sections:

- Hero section
- Relief logo
- Strapline: Find Comfort, Feel Relief
- Short explanation:
  - Find clean, private and accessible facilities when you need them most.
- App preview mockup
- Coming soon / download buttons
- Feature highlights
- Social post carousel
- Blog preview
- Email signup
- Footer links

Hero copy example:

```txt
Find Comfort, Feel Relief.

Relief helps you discover clean, private and accessible facilities nearby, with filters designed around real people and real needs.
```

Feature cards:

- Need One Now
- Accessibility filters
- Baby changing
- Privacy ratings
- Community updates
- Open now
- Directions
- Saved favourites

## 2. About Us Page

Purpose:

Tell the personal story behind Relief.

Include:

- Why the app exists
- Sister’s lived experience as inspiration
- Accessibility and dignity mission
- UK-first launch
- Community-powered data
- Commitment to privacy and safety

Tone:

Warm, honest, human, not corporate.

## 3. Privacy Policy Page

Must include:

- Who operates Relief
- What data is collected
- Location data handling
- Account data
- Contact form data
- Facility submissions
- Photos/reviews
- Analytics
- Payment data explanation
- Data retention
- User rights
- Contact email
- GDPR rights

Important notes:

- Do not claim legal compliance without review.
- Add placeholder requiring final legal review before launch.

## 4. GDPR Page

Purpose:

Make user rights very clear.

Include:

- Request data copy
- Request deletion
- Correct personal information
- Withdraw consent
- Marketing email opt-out
- Contact method for privacy requests

Provide a GDPR request form.

## 5. Terms Page

Include:

- App and website usage
- Community-submitted data
- Accuracy disclaimer
- Facility availability disclaimer
- User content rules
- Payment/subscription terms
- Acceptable use
- Abuse/spam rules

## 6. Contact Page

Contact categories:

- General question
- Support
- Press
- Partnership
- Privacy/GDPR
- Facility data correction

Use Resend to send emails to:

- info@yourdomain.com
- support@yourdomain.com
- privacy@yourdomain.com

Store a copy in Supabase if configured.

## 7. Support Page

Include:

- FAQs
- How to use the app
- How to report a closed facility
- How to suggest a new facility
- How to restore purchases
- How to contact support
- Accessibility support

## 8. Add Facility Page

Public form for suggesting a new toilet/facility.

Fields:

- Facility name
- Address
- Postcode
- Town/city
- Latitude/longitude optional
- Access type
- Opening hours
- Free or paid
- Accessible toilet
- Wheelchair access
- RADAR key
- Baby changing
- Changing Places
- Privacy notes
- Cleanliness notes
- Photos optional
- Submitter name optional
- Submitter email optional
- Consent checkbox

Submission must go to moderation queue, not directly into live app database.

## 9. Report Bug Page

Fields:

- Name optional
- Email optional
- App platform: iOS / Android / Website
- Device model optional
- App version optional
- Description
- Steps to reproduce
- Screenshot upload optional
- Consent checkbox

## 10. Blog

Purpose:

Build SEO, trust and community.

Categories:

- Accessibility
- Travel confidence
- IBS/Crohn’s support
- Family days out
- Elderly users
- App updates
- Community stories
- Public toilet data
- Behind the build

Example posts:

- Why we are building Relief
- Why accessibility information matters
- Not all facilities are equal
- How community updates help everyone
- What makes a good accessible toilet?
- Relief development update: first look

## 11. Social Hub

Embed or display selected social posts.

Options:

- Manual cards
- Instagram/TikTok links
- Local hosted copies of approved social graphics
- Short video embeds where policy allows

Do not make the homepage depend on third-party social widgets loading.

## 12. Press / Media Kit

Optional but useful.

Include:

- Logo downloads
- Brand colours
- Short description
- Long description
- Contact email
- App screenshots
- Founder story
- Social links

## Forms and Email

Use Resend for sending transactional emails.

Recommended email routing:

```txt
# No final domain/email setup exists yet.
# Conceptually: hello@, support@, privacy@, data@ (to be confirmed)
```

Each form should:

- Validate with Zod
- Rate-limit submissions
- Use honeypot anti-spam field
- Optionally add Turnstile/hCaptcha
- Send confirmation email to user if email provided
- Send notification email to Relief team
- Store submission server-side if Supabase is enabled
- Never expose private emails publicly

## Security Requirements

- Use environment variables for Resend API key
- Never expose private API keys in frontend
- Validate server-side
- Sanitize all text inputs
- Rate-limit API routes
- Protect admin-only routes
- Use HTTPS only
- Add security headers
- Do not log sensitive personal data
- Do not store unnecessary user location data
- Strip metadata from uploaded images if processing uploads
- Add consent checkbox for contact and facility forms
- Separate support contact from marketing consent

## Accessibility Requirements

The website should be usable by elderly and disabled users.

Requirements:

- WCAG AA target
- Keyboard navigable
- Screen-reader friendly labels
- Visible focus states
- Large tap targets
- High contrast
- No essential information conveyed by colour alone
- Respect reduced motion preference
- Alt text for meaningful images
- Captions/transcripts for videos
- Simple language
- Plain page structure
- No autoplay audio

## Homepage Animation Direction

Use subtle animation only:

- Watercolour map slowly drifting
- Pins softly glowing
- Gentle ripple animations
- Fade-in feature cards
- No aggressive movement
- Disable/reduce for prefers-reduced-motion

## SEO Requirements

Add:

- Meta title
- Meta description
- Open Graph tags
- Twitter/social image
- Sitemap.xml
- Robots.txt
- Structured data where appropriate
- Clean URLs
- Blog metadata
- Image alt text

Suggested homepage meta:

```txt
Relief - Find Comfort, Feel Relief
Find clean, private and accessible facilities nearby with Relief, a community-powered app designed for dignity, confidence and peace of mind.
```

## Analytics

Use privacy-friendly analytics.

Options:

- Vercel Analytics
- Plausible
- Simple Analytics

Avoid invasive tracking.

Track:

- Page views
- Download button clicks
- Waitlist signups
- Contact form submissions
- Add facility submissions
- Blog views

## App Download Links

Initially:

- Coming soon buttons
- Join waitlist
- Follow social channels

Later:

- Apple App Store link
- Google Play Store link
- QR code to app
- Beta tester link if appropriate

## Content Management

Simple first version:

- Blog posts as Markdown/MDX files in repo

Later:

- Supabase CMS table
- Sanity
- Contentful
- Decap CMS

Do not overbuild CMS in phase one.

## Suggested Components

```txt
src/
  components/
    Layout.tsx
    Header.tsx
    Footer.tsx
    Hero.tsx
    FeatureCard.tsx
    AppMockup.tsx
    SocialCarousel.tsx
    BlogCard.tsx
    ContactForm.tsx
    AddFacilityForm.tsx
    BugReportForm.tsx
    WatercolorMapBackground.tsx
    AccessibleButton.tsx
  pages/
    Home.tsx
    About.tsx
    Privacy.tsx
    Terms.tsx
    Gdpr.tsx
    Contact.tsx
    Support.tsx
    AddFacility.tsx
    ReportBug.tsx
    BlogIndex.tsx
    BlogPost.tsx
  lib/
    resend.ts
    validation.ts
    rateLimit.ts
    seo.ts
  content/
    blog/
```

## Build Phases

## Phase 1 - Foundation

- [ ] Create Vite React TypeScript app
- [ ] Add Tailwind
- [ ] Add routing
- [ ] Add shared theme tokens
- [ ] Add layout, header and footer
- [ ] Add responsive navigation
- [ ] Add basic SEO

## Phase 2 - Core Pages

- [ ] Home
- [ ] About
- [ ] Privacy
- [ ] GDPR
- [ ] Terms
- [ ] Contact
- [ ] Support

## Phase 3 - Forms

- [ ] Contact form
- [ ] Add facility form
- [ ] Bug report form
- [ ] GDPR request form
- [ ] Resend email integration
- [ ] Spam protection
- [ ] Validation
- [ ] Success/error states

## Phase 4 - Blog and Social

- [ ] Markdown blog system
- [ ] Blog index
- [ ] Blog detail pages
- [ ] Social post carousel
- [ ] Social media links
- [ ] Share buttons

## Phase 5 - Visual Polish

- [ ] Watercolour map background
- [ ] Relief logo integration
- [ ] Subtle animations
- [ ] App screenshots/mockups
- [ ] Download badges
- [ ] Press/media kit

## Phase 6 - Launch Readiness

- [ ] Accessibility audit
- [ ] Mobile responsiveness test
- [ ] Form security test
- [ ] SEO test
- [ ] Privacy copy review
- [ ] Legal review placeholders resolved
- [ ] Production Vercel deployment
- [ ] Domain connected
- [ ] Email domain verified in Resend

## Acceptance Criteria

The website is ready when:

- A visitor understands Relief within 5 seconds
- App download/waitlist action is obvious
- Contact and support are easy to find
- Privacy/GDPR information is clear
- Facility suggestions can be submitted
- Bug reports can be submitted
- Site works well on mobile
- Site passes basic accessibility checks
- No secret keys are exposed
- Forms are validated and rate-limited
- Brand feels consistent with the app
