import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES, BRAND } from '@/lib/config'
import { Heart } from 'lucide-react'

/**
 * Footer component with Ghibli-inspired warmth and organized layout
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: ROUTES.about },
        { label: 'Blog', path: ROUTES.blog },
        { label: 'Press Kit', path: ROUTES.press },
        { label: 'Contact', path: ROUTES.contact },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Centre', path: ROUTES.support },
        { label: 'Report a Bug', path: ROUTES.reportBug },
        { label: 'Add a Facility', path: ROUTES.addFacility },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', path: ROUTES.privacy },
        { label: 'Terms of Service', path: ROUTES.terms },
        { label: 'GDPR', path: ROUTES.gdpr },
      ],
    },
  ]

  return (
    <footer className="bg-white border-t border-primary/5 pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to={ROUTES.home} className="flex items-center mb-8 group">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/10 blur-xl rounded-2xl scale-110 group-hover:bg-secondary/20 transition-all duration-500" />
                <img src="/Assets/Logo2.jpeg" alt={BRAND.name} className="relative w-32 h-auto rounded-xl shadow-sm group-hover:shadow-glow transition-all border border-white/30" />
              </div>
            </Link>
            <p className="text-text-muted text-lg leading-relaxed max-w-sm mb-8">
              Finding comfort, feeling relief — a kind, accessible companion for finding essential facilities.
            </p>
            <p className="text-sm text-text-muted">
              Social accounts are coming soon. We'll share links here once they're live.
            </p>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-text-primary font-bold mb-6 uppercase tracking-wider text-xs">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-text-muted hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-sm text-center md:text-left">
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-error fill-current animate-pulse" />
            <span>for the community</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
