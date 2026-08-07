import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { Instagram, Twitter, Linkedin, Share2 } from 'lucide-react'

/**
 * Social media hub page
 */
const Social: React.FC = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    document.title = `${t('common.site_name')} - ${t('nav.blog')}`
  }, [t])

  const socialLinks = [
    {
      platform: 'Twitter',
      icon: Twitter,
      handle: '@ReliefApp',
      url: 'https://twitter.com',
      description: 'Daily updates and accessibility tips',
    },
    {
      platform: 'Instagram',
      icon: Instagram,
      handle: '@ReliefApp',
      url: 'https://instagram.com',
      description: 'Stories and community highlights',
    },
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      handle: 'Relief',
      url: 'https://linkedin.com',
      description: 'Company updates and insights',
    },
  ]

  return (
    <div>
      <Hero
        title="Connect With Relief"
        description="Follow us on social media for updates, tips, and community stories"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          {/* Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 hover:shadow-lg transition-all hover:scale-105"
                >
                  <Icon className="w-8 h-8 text-primary-dark mb-4" />
                  <h3 className="font-semibold text-text-primary mb-1">
                    {social.platform}
                  </h3>
                  <p className="text-sm text-primary-dark font-mono mb-3">
                    {social.handle}
                  </p>
                  <p className="text-sm text-text-muted">
                    {social.description}
                  </p>
                </a>
              )
            })}
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
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="px-6 py-2 bg-white text-primary-dark rounded-button font-semibold hover:bg-gray-100">
                Share on Twitter
              </button>
              <button className="px-6 py-2 bg-white/20 text-white rounded-button font-semibold hover:bg-white/30 border border-white">
                Copy Link
              </button>
            </div>
          </div>

          {/* Featured Posts Placeholder */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8">
              Featured Posts
            </h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card p-6 border-l-4 border-primary-dark">
                  <p className="text-xs font-semibold text-primary-dark uppercase mb-2">
                    Recent Update
                  </p>
                  <p className="text-text-muted mb-3">
                    Featured social content will appear here. Check back soon for accessibility tips, community stories, and Relief updates!
                  </p>
                  <a href="#" className="text-primary-dark font-semibold text-sm hover:text-primary-light">
                    Read more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Social

