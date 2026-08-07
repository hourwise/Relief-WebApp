import React from 'react'
import { useTranslation } from 'react-i18next'
import { MapPin, Shield, Baby, Star, Users, Clock, Heart, Download, ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'
import { BRAND } from '@/lib/config'

/**
 * Home page - landing page for Relief
 */
const Home: React.FC = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    const title = `${t('home.hero_title')} | ${BRAND.name}`
    document.title = title
  }, [t])

  const features = [
    {
      icon: MapPin,
      title: t('home.need_now'),
      description: 'Quickly find facilities when you need them most with our intuitive map interface.',
    },
    {
      icon: Shield,
      title: t('home.accessibility_filters'),
      description: 'Filter by step-free access, grab rails, and other essential accessibility features.',
    },
    {
      icon: Baby,
      title: t('home.baby_changing'),
      description: 'Detailed information on baby changing facilities for families on the go.',
    },
    {
      icon: Star,
      title: t('home.privacy_ratings'),
      description: 'Community-led ratings for cleanliness, privacy, and overall experience.',
    },
    {
      icon: Users,
      title: t('home.community_updates'),
      description: 'Join thousands of users sharing real-time status updates on facilities.',
    },
    {
      icon: Clock,
      title: t('home.open_now'),
      description: 'Never get caught out again. See verified opening times and real-time availability.',
    },
  ]

  return (
    <div className="relative">
      {/* Hero Section - Using the Screen Background as the primary mockup */}
      <Hero
        title={t('home.hero_title')}
        subtitle={BRAND.strapline}
        description={t('home.hero_description')}
        cta={{
          label: t('buttons.join_waitlist'),
          href: '#waitlist',
          variant: 'primary',
        }}
        image="/Assets/Screen Background.jpeg"
        transparent
      />

      {/* Features Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              {t('home.features_heading')}
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              Designed for comfort, built for relief. Everything you need to navigate your day with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Mockup Section (Visual Identity focus) */}
      <section className="py-24 md:py-32 bg-primary/5">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
                A Calm, Premium Experience
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Visual Comfort", desc: "Soothing teal tones and watercolor textures reduce stress during urgent searches." },
                  { title: "Glowing Indicators", desc: "Easily spot available facilities with our distinctive glowing location pins." },
                  { title: "Soft Map Lines", desc: "Custom map styling designed to be readable and gentle on the eyes." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <Heart className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary">{item.title}</h4>
                      <p className="text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               {/* Mockup using Logo2 as a secondary visual element */}
               <div className="card p-4 bg-white/40 border-8 border-white/60">
                  <img src="/Assets/Logo2.jpeg" alt="Relief Branding" className="rounded-2xl w-full h-auto shadow-lg" />
               </div>
               <div className="absolute -bottom-8 -right-8 p-8 bg-secondary text-white rounded-3xl shadow-glow-lg hidden md:block max-w-xs animate-float">
                  <p className="text-lg font-medium italic">"Find Comfort, Feel Relief"</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - The Waitlist */}
      <section id="waitlist" className="py-24 md:py-32">
        <div className="section-container">
          <div className="card bg-primary p-8 md:p-20 text-white text-center relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                {t('home.cta_section')}
              </h2>
              <p className="text-xl text-white/80 mb-12">
                Join our exclusive waitlist to be among the first to experience the future of personal comfort navigation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="btn-secondary w-full sm:w-auto px-10 py-4 text-lg flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  {t('home.download_ios')}
                </button>
                <button className="btn-outline border-white text-white hover:bg-white/10 w-full sm:w-auto px-10 py-4 text-lg flex items-center justify-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  {t('home.download_android')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Community */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">{t('home.blog_heading')}</h2>
              <p className="text-text-muted">Stories, updates, and accessibility news from our community.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card overflow-hidden flex flex-col group">
                <div className="h-48 bg-teal-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-primary font-bold">Read Article</span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary">Accessibility</span>
                    <span className="text-xs text-text-muted">• 5 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                    Improving Urban Accessibility in 2026
                  </h3>
                  <p className="text-text-muted text-sm line-clamp-2">
                    How Relief is working with local councils to map and improve facilities across the country...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
