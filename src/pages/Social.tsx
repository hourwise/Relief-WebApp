import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND } from '@/lib/config'
import { Share2 } from 'lucide-react'

/**
 * Social media hub page
 */
const Social: React.FC = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    document.title = `${t('nav.social')} | ${BRAND.name}`
  }, [t])

  return (
    <div>
      <Hero
        title="Connect With Relief"
        description="Follow us on social media for updates, tips, and community stories"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          {/* Social Links - coming soon */}
          <div className="card p-8 md:p-12 text-center mb-16">
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              We're not on social media yet
            </h3>
            <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
              Relief doesn't have live social accounts yet. When we launch them, we'll add links here
              along with updates and accessibility tips.
            </p>
          </div>

          {/* Share Section */}
          <div className="card p-8 bg-primary-dark text-white text-center">
            <Share2 className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl font-bold mb-2">
              Share Relief
            </h2>
            <p className="mb-6 text-white/90">
              Help us spread the word about Relief. Share with friends and family who need better access to facility information.
            </p>
            <p className="text-white/90">
              Once our site is public, you'll be able to share Relief with friends and family here.
            </p>
          </div>

          {/* Featured Posts - coming soon */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8">
              Featured Updates
            </h2>
            <div className="card p-8 md:p-12 text-center">
              <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
                Featured updates will appear here once Relief has public news to share. Check back soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Social

