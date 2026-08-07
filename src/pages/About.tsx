import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND } from '@/lib/config'

/**
 * About page - company story and mission
 */
const About: React.FC = () => {
  const { t } = useTranslation()
  React.useEffect(() => {
    document.title = `${t('about.page_title')} | ${BRAND.name}`
  }, [t])

  return (
    <div>
      <Hero
        title={t('about.heading')}
        description={t('about.story_text')}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          {/* Mission */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {t('about.mission')}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              {t('about.mission_text')}
            </p>
          </div>

          {/* Story */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {t('about.story')}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-4">
              Relief was inspired by lived experience and a commitment to accessibility for everyone.
              We believe that finding a suitable facility should not be a source of stress or anxiety.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              Our sister's experiences navigating the UK without reliable information about accessible
              facilities sparked the idea. Relief is built to ensure that everyone has the dignity,
              privacy, and peace of mind they deserve.
            </p>
          </div>

          {/* Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t('about.community')}
              </h3>
              <p className="text-text-muted">
                {t('about.community_desc')}
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t('about.privacy')}
              </h3>
              <p className="text-text-muted">
                {t('about.privacy_desc')}
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t('about.uk_first')}
              </h3>
              <p className="text-text-muted">
                {t('about.uk_first_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

