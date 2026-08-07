# Development Guide

Quick reference for working on the Relief website.

## Getting Started

```bash
# First time setup
npm install
npm run dev

# Open http://localhost:5173
```

## Common Tasks

### Add a New Page

1. Create component in `src/pages/NewPage.tsx`:

```typescript
import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { PAGE_META } from '@/lib/seo'

const NewPage: React.FC = () => {
  const { t } = useTranslation()
  const metadata = PAGE_META.newPage()

  React.useEffect(() => {
    document.title = metadata.title
  }, [metadata.title])

  return (
    <div>
      <Hero title="Title" description="Description" />
      {/* Page content */}
    </div>
  )
}

export default NewPage
```

2. Add route to `src/App.tsx`:

```typescript
import NewPage from '@/pages/NewPage'

// In <Routes>
<Route path="/new-page" element={<NewPage />} />
```

3. Add to `src/lib/config.ts`:

```typescript
export const ROUTES = {
  // ...
  newPage: '/new-page',
} as const
```

4. Add translation strings to `src/locales/en.json`

5. Add navigation link in `src/components/Header.tsx` if needed

### Update Translations

1. Add key to `src/locales/en.json`:

```json
{
  "pages": {
    "mypage": {
      "title": "My Page Title",
      "description": "Page description"
    }
  }
}
```

2. Use in component:

```typescript
const { t } = useTranslation()
const title = t('pages.mypage.title')
```

### Create a Form (After Security Review)

1. Define Zod schema in `src/lib/validation.ts`:

```typescript
export const myFormSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
})

export type MyFormValues = z.infer<typeof myFormSchema>
```

2. Use in component with React Hook Form:

```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { myFormSchema, type MyFormValues } from '@/lib/validation'

const MyForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<MyFormValues>({
    resolver: zodResolver(myFormSchema),
  })

  const onSubmit = async (data: MyFormValues) => {
    // TODO: Submit to backend after security review
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
    </form>
  )
}
```

3. Call email service (after backend is ready):

```typescript
import { sendContactEmail } from '@/lib/resend'

const onSubmit = async (data: MyFormValues) => {
  const response = await sendContactEmail(data)
  if (response.success) {
    // Show success message
  } else {
    // Show error
  }
}
```

### Style a Component

Use Tailwind utilities and custom classes:

```typescript
<div className="bg-primary-dark text-white p-6 rounded-button hover:shadow-lg">
  <h2 className="text-2xl font-bold mb-4">Heading</h2>
  <p className="text-text-muted">Muted text</p>
</div>
```

Custom classes available:
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.btn-outline` - Outline button
- `.card` - Card styling
- `.section-container` - Page width container
- `.focus-visible` - Focus states

### Add Animations

Available animations (respect prefers-reduced-motion):

```tsx
<div className="animate-fade-in">Fades in</div>
<div className="animate-slide-in-up">Slides up</div>
<div className="animate-glow">Glows</div>
```

For Framer Motion (not yet integrated):

```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Add Icons

Using Lucide React:

```typescript
import { MapPin, Check, AlertCircle } from 'lucide-react'

<MapPin className="w-6 h-6 text-primary-dark" />
```

### Make Content Accessible

```typescript
// Good: Semantic HTML and ARIA labels
<button
  onClick={handleClick}
  aria-label="Close dialog"
  className="focus-visible"
>
  <X className="w-6 h-6" />
</button>

<input
  type="email"
  aria-label="Email address"
  aria-required="true"
/>

// Add alt text to images
<img src="image.jpg" alt="Description of image" />

// Use semantic headings hierarchy
<h1>Page title</h1>
<h2>Section heading</h2>
<h3>Subsection</h3>
```

## Component Patterns

### Page Component

```typescript
import React from 'react'
import { useTranslation } from 'react-i18next'
import { PAGE_META } from '@/lib/seo'

const MyPage: React.FC = () => {
  const { t } = useTranslation()
  const metadata = PAGE_META.myPage()

  // Update page title for SEO
  React.useEffect(() => {
    document.title = metadata.title
  }, [metadata.title])

  return (
    <div>
      <Hero title={t('mypage.title')} />
      {/* Content */}
    </div>
  )
}

export default MyPage
```

### Reusable Component

```typescript
import React from 'react'

interface MyComponentProps {
  title: string
  description?: string
  onClick?: () => void
}

const MyComponent: React.FC<MyComponentProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <div className="card p-6">
      <h3 className="font-bold">{title}</h3>
      {description && <p className="text-text-muted">{description}</p>}
      {onClick && (
        <button onClick={onClick} className="btn-primary mt-4">
          Click me
        </button>
      )}
    </div>
  )
}

export default MyComponent
```

## Debugging

### Check Translations

```javascript
// In browser console
import i18n from '@/lib/i18n'
i18n.t('common.site_name') // Should return 'Relief'
```

### Check Routes

```typescript
// In browser console
import { ROUTES } from '@/lib/config'
console.log(ROUTES)
```

### TypeScript Errors

```bash
# Check for TS errors without building
npx tsc --noEmit
```

### ESLint Issues

```bash
npm run lint -- --fix
```

## Performance Tips

1. **Code split pages** - React Router handles this automatically
2. **Lazy load images** - Use `loading="lazy"` on images
3. **Memoize components** - Use `React.memo()` for frequently re-rendered components
4. **Avoid inline objects/functions** - Move to component scope
5. **Use key on lists** - Proper React keys improve performance

## Testing Locally

### Test on Mobile

```bash
# Get your local IP
ipconfig getifaddr en0  # macOS
hostname -I            # Linux
ipconfig               # Windows

# Visit http://YOUR_IP:5173 on mobile device
```

### Test Accessibility

1. Use Chrome DevTools > Lighthouse
2. Test with keyboard: Tab, Enter, Space
3. Test with screen reader (NVDA, JAWS, VoiceOver)
4. Check contrast with WebAIM Contrast Checker

### Test Responsive Design

Use Chrome DevTools device toolbar or actual devices.

Breakpoints:
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: > 1024px (lg)

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes
git add .
git commit -m "Add my feature"

# Push
git push origin feature/my-feature

# Create pull request on GitHub
```

## Deployment

### Preview Build

```bash
npm run build
npm run preview
```

### Deploy to Cloudflare Pages (intended — not yet set up)

Relief Web is intended to be deployed on **Cloudflare Pages** (Vite frontend), with Cloudflare-managed DNS, HTTPS and CDN. No Cloudflare project or domain is configured yet — this is a local-first, Cloudflare-ready project.

```bash
# Once a Cloudflare account/project exists, the typical flow is:
# Connect the GitHub repo in the Cloudflare dashboard (build command:
# npm run build, output directory: dist)
```

### Environment Variables on Cloudflare Pages

1. Go to project settings → Environment Variables
2. Add variables as needed (never add private credentials that the browser must not see — anything `VITE_` is public)
3. Redeploy to apply changes

## Troubleshooting

### Port 5173 Already in Use

```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5173   # Windows
```

### Module Not Found

1. Check import path: `src/lib/config` vs `@/lib/config`
2. Use path alias: `@` = `src/`
3. Check file extensions (.ts, .tsx, .json)

### Tailwind Not Working

1. Check `tailwind.config.js` content paths
2. Restart dev server: `npm run dev`
3. Check spelling of Tailwind classes

### Translations Not Showing

1. Check key exists in `en.json`
2. Check namespace in `useTranslation()` if specified
3. Restart dev server

## Code Style

- Use TypeScript strictly (no `any`)
- Use functional components with hooks
- Export components as default
- Use consistent spacing and indentation
- Comment complex logic
- Keep components small and focused

## Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com)
- [i18next](https://www.i18next.com)
- [Zod](https://zod.dev)
- [Lucide Icons](https://lucide.dev)

---

Happy coding! 🚀

