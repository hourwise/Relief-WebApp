import React from 'react'
import { useTranslation } from 'react-i18next'
import { MapPin, Map, Shield, Clock, Navigation, Heart, Download, ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'
import { BRAND, ROUTES } from '@/lib/config'

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
      description: 'Find facilities quickly when you need them most, with a one-tap shortcut to nearby options.',
    },
    {
      icon: Map,
      title: t('home.find_map_list'),
      description: 'Browse facilities on a map or a list, and centre the view on your current location.',
    },
    {
      icon: Shield,
      title: t('home.accessibility_filters'),
      description: 'Filter by accessible facilities, RADAR key, baby changing, gender-neutral, family friendly, and staff nearby.',
    },
    {
      icon: Clock,
      title: t('home.open_now'),
      description: 'Filter by cost (free or paid), open now, or open 24 hours, based on current facility data.',
    },
    {
      icon: Navigation,
      title: t('home.directions'),
      description: 'View facility details and get directions straight to the door.',
    },
    {
      icon: Heart,
      title: t('home.favourites_reports'),
      description: 'Signed-in users can save favourite facilities and report corrections to help keep data accurate.',
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
          label: t('buttons.learn_more'),
          href: ROUTES.about,
          variant: 'primary',
        }}
        image="/Assets/Screen Background.jpeg"
        imageNote={t('home.hero_image_note')}
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
                      <h3 className="font-bold text-text-primary">{item.title}</h3>
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

      {/* CTA Section - App availability status */}
      <section id="download" className="py-24 md:py-32">
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
                {t('home.cta_description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span
                  className="btn-secondary w-full sm:w-auto px-10 py-4 text-lg flex items-center justify-center gap-2 opacity-90 cursor-default"
                  aria-disabled="true"
                >
                  <Download className="w-5 h-5" />
                  {t('home.android_coming_soon')}
                </span>
                <span
                  className="btn-outline border-white text-white w-full sm:w-auto px-10 py-4 text-lg flex items-center justify-center gap-2 opacity-90 cursor-default"
                  aria-disabled="true"
                >
                  <ArrowRight className="w-5 h-5" />
                  {t('home.ios_coming_later')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Community */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-text-primary mb-4">{t('home.blog_heading')}</h2>
          <p className="text-text-muted mb-8">
            {t('home.blog_description')}
          </p>
          <div className="card p-10 md:p-14 text-center">
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              {t('home.blog_coming_soon')}
            </h3>
            <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
              {t('home.blog_coming_soon_desc')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
