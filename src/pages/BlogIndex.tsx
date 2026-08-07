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

          {/* Blog Posts Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-light to-secondary opacity-30"></div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-primary-dark uppercase mb-2">
                    Category
                  </p>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Blog Post Title Here
                  </h3>
                  <p className="text-text-muted text-sm mb-4">
                    A brief excerpt of the blog post will appear here...
                  </p>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>By Author Name</span>
                    <span>Jun 23, 2024</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogIndex

