import React from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  cta?: {
    label: string
    href: string
    variant?: 'primary' | 'secondary' | 'outline'
  }
  image?: string
  imageAlt?: string
  imageNote?: string
  children?: React.ReactNode
  transparent?: boolean
  compact?: boolean
}

/**
 * Hero section component with Ghibli-inspired warmth and professional polish
 */
const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  cta,
  image,
  imageAlt,
  imageNote,
  children,
  transparent = false,
  compact = false,
}) => {
  const getButtonClass = (variant: 'primary' | 'secondary' | 'outline' = 'primary') => {
    switch (variant) {
      case 'secondary':
        return 'btn-secondary'
      case 'outline':
        return 'btn-outline'
      default:
        return 'btn-primary'
    }
  }

  return (
    <div className={`relative overflow-hidden ${transparent ? (compact ? 'py-12 md:py-20' : 'py-16 md:py-28') : 'bg-gradient-to-b from-teal-50/50 to-white py-16 md:py-28'}`}>
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            {subtitle && (
              <p className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 animate-fade-in">
                {subtitle}
              </p>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight animate-slide-in-up">
              {title}
            </h1>

            {description && (
              <p className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {description}
              </p>
            )}

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {cta && (
                <a
                  href={cta.href}
                  className={getButtonClass(cta.variant)}
                >
                  {cta.label}
                </a>
              )}
              {children}
            </div>
          </div>

          {image && (
            <div className="flex-1 relative">
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-secondary/20 blur-[60px] rounded-full scale-75 -z-10" />

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={image}
                  alt={imageAlt || 'Illustrative preview image'}
                  className="w-full h-auto object-cover"
                />
              </div>

              {imageNote && (
                <p className="text-xs text-text-muted mt-4 text-center italic max-w-md mx-auto">
                  {imageNote}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
