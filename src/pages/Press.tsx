import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND } from '@/lib/config'
import { Download } from 'lucide-react'

/**
 * Press/Media Kit page
 */
const Press: React.FC = () => {
  const { t } = useTranslation()
  React.useEffect(() => {
    document.title = `${t('nav.press')} | ${BRAND.name}`
  }, [t])

  return (
    <div>
      <Hero
        title="Press Kit"
        description="Media resources and brand information for Relief"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          {/* Brand Overview */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              About Relief
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Relief is a community-powered app helping people find clean, private, and accessible facilities nearby.
              Built with dignity, privacy, and accessibility at its core.
            </p>
            <p className="text-text-muted leading-relaxed">
              Available for iOS and Android, Relief is transforming how people discover essential facilities with confidence.
            </p>
          </div>

          {/* Key Facts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card p-6">
              <h3 className="font-semibold text-text-primary mb-3">
                Founder Story
              </h3>
              <p className="text-text-muted text-sm">
                Relief was founded by [Name] and inspired by lived experience and personal journey with accessibility challenges.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-text-primary mb-3">
                Mission
              </h3>
              <p className="text-text-muted text-sm">
                To ensure everyone has dignity, privacy, and peace of mind when finding essential facilities.
              </p>
            </div>
          </div>

          {/* Brand Assets */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Brand Assets
            </h2>
            <div className="space-y-4">
              <div className="card p-6 flex items-center justify-between hover:shadow-md transition">
                <div>
                  <h3 className="font-semibold text-text-primary">Logo Files</h3>
                  <p className="text-sm text-text-muted">PNG, SVG formats</p>
                </div>
                <button className="flex items-center gap-2 text-primary-dark hover:text-primary-light">
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </button>
              </div>
              <div className="card p-6 flex items-center justify-between hover:shadow-md transition">
                <div>
                  <h3 className="font-semibold text-text-primary">App Screenshots</h3>
                  <p className="text-sm text-text-muted">High-res app mockups and screenshots</p>
                </div>
                <button className="flex items-center gap-2 text-primary-dark hover:text-primary-light">
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </button>
              </div>
              <div className="card p-6 flex items-center justify-between hover:shadow-md transition">
                <div>
                  <h3 className="font-semibold text-text-primary">Brand Guidelines</h3>
                  <p className="text-sm text-text-muted">Colour palette, typography, usage rules</p>
                </div>
                <button className="flex items-center gap-2 text-primary-dark hover:text-primary-light">
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </section>

          {/* Brand Colours */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Brand Colours
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <div className="w-full h-24 rounded-lg bg-primary-dark mb-3"></div>
                <p className="font-mono text-xs">#0F766E</p>
                <p className="text-xs text-text-muted">Primary</p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg bg-secondary mb-3"></div>
                <p className="font-mono text-xs">#14B8A6</p>
                <p className="text-xs text-text-muted">Secondary</p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg bg-success mb-3"></div>
                <p className="font-mono text-xs">#10B981</p>
                <p className="text-xs text-text-muted">Success</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <div className="bg-primary-dark/5 p-6 md:p-8 rounded-card">
            <h3 className="font-semibold text-text-primary mb-2">Press Enquiries</h3>
            <p className="text-text-muted mb-4">
              For press queries, interviews, or media requests:
            </p>
            <a
              href="mailto:press@relief-domain.co.uk"
              className="text-primary-dark font-semibold hover:text-primary-light"
            >
              press@relief-domain.co.uk
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Press

