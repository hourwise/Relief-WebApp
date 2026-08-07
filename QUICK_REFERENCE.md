# 📖 Relief Website - Quick Reference

> ⚠️ **SUPERSEDED** — Historical quick reference from scaffolding.
> See [`docs/CURRENT_STATE.md`](docs/CURRENT_STATE.md) for current status.

**Status:** In development — not deployed

---

## 🚀 Quick Start (5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# http://localhost:5173
```

---

## 📁 Project Structure at a Glance

```
relief-website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Layout.tsx       # Main wrapper
│   │   ├── Header.tsx       # Navigation
│   │   ├── Footer.tsx       # Footer
│   │   ├── Hero.tsx         # Hero section
│   │   └── FeatureCard.tsx  # Feature cards
│   ├── pages/               # Page components (one per route)
│   │   ├── Home.tsx, About.tsx, Contact.tsx, etc.
│   ├── lib/                 # Utilities & configuration
│   │   ├── config.ts        # Colors, routes, constants
│   │   ├── types.ts         # TypeScript interfaces
│   │   ├── validation.ts    # Zod form schemas
│   │   ├── seo.ts           # SEO helpers
│   │   ├── rateLimit.ts     # Rate limiting
│   │   ├── resend.ts        # Email service stubs
│   │   └── i18n.ts          # Internationalization
│   ├── locales/             # Translation files
│   │   └── en.json          # English (200+ strings)
│   ├── content/             # Static content
│   │   └── blog/            # Blog posts
│   ├── styles/              # Global styles
│   │   └── globals.css      # Tailwind + brand CSS
│   ├── App.tsx              # Router & routes
│   └── main.tsx             # Entry point
├── public/                  # Static assets
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Build config
├── tailwind.config.js       # Styling config
├── .env.example             # Environment template
├── README.md                # Full documentation
├── DEVELOPMENT.md           # Development guide
├── SCAFFOLDING_COMPLETE.md  # Build summary
├── BUILD_SUMMARY.md         # Quick overview
└── SETUP_CHECKLIST.md       # Verification checklist
```

---

## 🛣️ Routes

| Route | Component | Status |
|-------|-----------|--------|
| `/` | Home | ✅ |
| `/about` | About | ✅ |
| `/contact` | Contact | 🔒 |
| `/support` | Support | ✅ |
| `/privacy` | Privacy | ✅ |
| `/terms` | Terms | ✅ |
| `/gdpr` | Gdpr | ✅ |
| `/add-facility` | AddFacility | 🔒 |
| `/report-bug` | ReportBug | 🔒 |
| `/blog` | BlogIndex | ✅ |
| `/social` | Social | ✅ |
| `/press` | Press | ✅ |

✅ = Working | 🔒 = Disabled (pending security)

---

## 🎨 Colors & Styling

### Brand Colors

```css
--color-primary: #0F766E         /* Main teal */
--color-secondary: #14B8A6       /* Light teal */
--color-background: #F8FAFC      /* Off-white */
--color-success: #10B981         /* Green */
--color-warning: #F59E0B         /* Amber */
--color-error: #EF4444           /* Red */
--color-text: #0F172A            /* Dark */
--color-muted: #64748B           /* Gray */
```

### CSS Classes

```tsx
<button className="btn-primary">Primary</button>
<button className="btn-secondary">Secondary</button>
<button className="btn-outline">Outline</button>
<div className="card">Content</div>
<div className="section-container">Page width</div>
```

---

## 🌍 Internationalization

### Using Translations

```typescript
import { useTranslation } from 'react-i18next'

const MyComponent = () => {
  const { t } = useTranslation()
  return <h1>{t('home.hero_title')}</h1>
}
```

### Adding Strings

Add to `src/locales/en.json`:
```json
{
  "namespace": {
    "key": "English text"
  }
}
```

Use in component: `t('namespace.key')`

---

## 📝 Forms (After Security Review)

### Validation Schema

```typescript
import { z } from 'zod'

export const myFormSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
})
```

### Using Form

```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const form = useForm({
  resolver: zodResolver(myFormSchema),
})
```

---

## 🧩 Creating Components

### Reusable Component

```typescript
import React from 'react'

interface MyComponentProps {
  title: string
  onClick?: () => void
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
  return <div className="card">{title}</div>
}

export default MyComponent
```

### Page Component

```typescript
import React from 'react'
import { useTranslation } from 'react-i18next'
import { PAGE_META } from '@/lib/seo'

const MyPage: React.FC = () => {
  const { t } = useTranslation()
  const metadata = PAGE_META.myPage()

  React.useEffect(() => {
    document.title = metadata.title
  }, [metadata.title])

  return <div>{/* Content */}</div>
}

export default MyPage
```

---

## 🔐 Environment Variables

### Available Variables

```env
# No email addresses or production domain are configured yet.
VITE_SITE_NAME=Relief
# VITE_SITE_URL= (set when a real domain exists)
```

### Adding New Variables

1. Add to `.env.example`
2. Create `.env.local` (in `.gitignore`)
3. Access in code: `import.meta.env.VITE_YOUR_VAR`

---

## 🏗️ Adding a New Page

**1. Create page component:**
```typescript
// src/pages/MyNewPage.tsx
const MyNewPage: React.FC = () => {
  // ... component code
}
export default MyNewPage
```

**2. Add route:**
```typescript
// src/App.tsx
import MyNewPage from '@/pages/MyNewPage'
<Route path="/my-new-page" element={<MyNewPage />} />
```

**3. Add to config:**
```typescript
// src/lib/config.ts
myNewPage: '/my-new-page',
```

**4. Add translations:**
```json
// src/locales/en.json
{
  "mynewpage": { "title": "My New Page" }
}
```

---

## 🧪 Common Commands

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build            # Production build
npm run preview          # Preview production build

# Code Quality
npm run lint             # Check TypeScript

# Utilities
npm install              # Install dependencies
npm update               # Update dependencies
```

---

## 🎯 Key Files to Know

| File | Purpose |
|------|---------|
| `src/lib/config.ts` | Colors, routes, constants |
| `src/locales/en.json` | All text strings |
| `tailwind.config.js` | Styling theme |
| `src/App.tsx` | Router & routes |
| `src/components/Layout.tsx` | Main page wrapper |

---

## 🔗 Important Links

- **Docs:** `README.md`
- **Dev Guide:** `DEVELOPMENT.md`
- **Checklist:** `SETUP_CHECKLIST.md`
- **Build Info:** `BUILD_SUMMARY.md`

---

## 💡 Tips & Tricks

**Use path aliases:**
```typescript
// Good
import { config } from '@/lib/config'

// Avoid
import { config } from '../../../lib/config'
```

**Reuse components:**
```typescript
import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'
```

**Use i18n everywhere:**
```typescript
const { t } = useTranslation()
// Never hardcode text strings
```

**Responsive design:**
```tsx
// Mobile first
<div className="text-lg md:text-2xl lg:text-4xl">
  Responsive text
</div>
```

---

## ⚠️ Remember

- ✅ Keep components small
- ✅ Use TypeScript types
- ✅ Use translations for all text
- ✅ Follow accessibility standards
- ✅ Use semantic HTML
- ✅ Don't hardcode colors
- ❌ Don't use `any` type
- ❌ Don't store secrets in code
- ❌ Don't disable accessibility

---

## 📚 Documentation

- **Full Guide:** `README.md`
- **Dev Tasks:** `DEVELOPMENT.md`
- **Checklist:** `SETUP_CHECKLIST.md`
- **Build Info:** `BUILD_SUMMARY.md`
- **Build Plan:** `relief_website_build_plan.md`

---

## 🚀 Next Steps

1. Run `npm install && npm run dev`
2. Open http://localhost:5173
3. Explore all pages
4. Review `DEVELOPMENT.md`
5. Start Phase 2 work
6. Plan backend for Phase 3

---

**Let's build something amazing!** 💚

Questions? Check the docs or review the code. Everything is well-commented.

