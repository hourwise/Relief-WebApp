import React from 'react'
import { useTranslation } from 'react-i18next'
import { MapPin, Map, Shield, Clock, Navigation, Heart, Download, ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'
import ReliefMediaShowcase, { ReliefMediaItem } from '@/components/ReliefMediaShowcase'
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

  const mediaItems: ReliefMediaItem[] = [
    {
      type: 'video',
      src: '/media/relief-video-1.mp4',
      title: 'Relief in action',
      caption: 'A first look at the calm, focused experience being built for finding facilities when you need them.',
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
        image="/media/relief-screen-background.jpeg"
        imageNote={t('home.hero_image_note')}
        transparent
        compact
      />

      {/* Features Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
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
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                See Relief in Action
              </h2>
              <p className="text-text-muted leading-relaxed mb-8 max-w-xl">
                A calm interface designed to keep essential information clear when you need it quickly.
              </p>
              <div className="space-y-5">
                {[
                  { title: "Visual Comfort", desc: "Teal tones and watercolor textures support a calm, focused experience." },
                  { title: "Glowing Indicators", desc: "Distinctive location pins help facilities stand out at a glance." },
                  { title: "Soft Map Lines", desc: "A gentle map treatment keeps the surrounding detail readable." }
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
            <div className="lg:w-1/2 w-full">
              <ReliefMediaShowcase items={mediaItems} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - App availability status */}
      <section id="download" className="py-16 md:py-20">
        <div className="section-container">
          <div className="card bg-primary p-8 md:p-14 text-white text-center relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                {t('home.cta_section')}
              </h2>
              <p className="text-xl text-white/80 mb-8">
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

    </div>
  )
}

export default Home
