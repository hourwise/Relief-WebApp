import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND } from '@/lib/config'

/**
 * Blog index page
 */
const BlogIndex: React.FC = () => {
  const { t } = useTranslation()
  React.useEffect(() => {
    document.title = `${t('nav.blog')} | ${BRAND.name}`
  }, [t])

  const blogCategories = [
    'accessibility',
    'travel-confidence',
    'ibs-crohns',
    'family-days-out',
    'elderly-users',
    'app-updates',
    'community-stories',
    'public-toilet-data',
    'behind-the-build',
  ]

  return (
    <div>
      <Hero
        title="Blog"
        description="Stories, updates, and insights from the Relief team"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-text-primary mb-6">
              Categories
            </h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-button bg-primary-dark text-white hover:bg-primary-dark/90 transition">
                All Posts
              </button>
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 rounded-button border border-gray-300 text-text-muted hover:border-primary-dark hover:text-primary-dark transition"
                >
                  {cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts - coming soon */}
          <div className="card p-10 md:p-16 text-center">
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              No posts yet
            </h3>
            <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
              The blog is coming soon. We'll share why Relief is being built, how we handle facility data,
              and development updates here as the project progresses.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogIndex

