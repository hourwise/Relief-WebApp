import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ROUTES, BRAND } from '@/lib/config'

/**
 * Header component with Ghibli-inspired polish and responsive navigation
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { label: t('nav.home'), path: ROUTES.home },
    { label: t('nav.about'), path: ROUTES.about },
    { label: t('nav.data'), path: ROUTES.data },
    { label: t('nav.contact'), path: ROUTES.contact },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to={ROUTES.home}
          className="flex items-center focus-visible group"
          aria-label={BRAND.name}
        >
          <div className="relative">
            {/* Glow background matches oblong shape */}
            <div className="absolute inset-0 bg-secondary/15 blur-xl rounded-2xl scale-110 group-hover:bg-secondary/25 transition-all duration-500" />
            <img
              src="/media/relief-logo.jpeg"
              alt={BRAND.name}
              className="relative w-28 md:w-36 h-auto rounded-xl object-contain border-2 border-white/50 shadow-sm"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-primary/10 text-primary'
                  : 'text-text-muted hover:text-primary hover:bg-primary/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to={ROUTES.support}
            className="btn-primary py-2.5 px-6 text-sm flex items-center gap-2 group"
          >
            {t('nav.support')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-text-primary hover:bg-primary/5 rounded-full transition-colors"
          aria-expanded={isMenuOpen}
          aria-label={t('buttons.menu')}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-primary/5 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100 py-6 px-4' : 'max-h-0 opacity-0 pointer-events-none overflow-hidden'
        }`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`block py-3 px-6 rounded-2xl transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-text-muted hover:bg-primary/5 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={ROUTES.support}
            onClick={closeMenu}
            className="btn-primary w-full text-center mt-4 py-4 rounded-2xl"
          >
            {t('nav.support')}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
