import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND, ROUTES } from '@/lib/config'
import { Database, MapPin, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react'

/**
 * Data & Sources page - transparency about where Relief's facility data comes from
 */
const DataSources: React.FC = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    document.title = `${t('data.page_title')} | ${BRAND.name}`
  }, [t])

  return (
    <div>
      <Hero
        title={t('data.heading')}
        description={t('data.page_description')}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          {/* How Relief data works */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {t('data.how_heading')}
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              {t('data.how_intro')}
            </p>
            <ul className="space-y-4 text-text-muted">
              <li className="flex gap-3">
                <Database className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                <span>{t('data.how_provenance')}</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                <span>{t('data.how_stale')}</span>
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                <span>{t('data.how_authoritative')}</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                <span>{t('data.how_reconcile')}</span>
              </li>
            </ul>
          </section>

          {/* Current sources */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {t('data.sources_heading')}
            </h2>
            <div className="card p-6">
              <h3 className="font-semibold text-text-primary mb-2">Toilet Map UK</h3>
              <p className="text-text-muted leading-relaxed">
                {t('data.toilet_map_uk')}
              </p>
            </div>
            <p className="text-text-muted mt-6 leading-relaxed">
              {t('data.future_sources')}
            </p>
          </section>

          {/* Contributions */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {t('data.contributions_heading')}
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              {t('data.contributions_text')}
            </p>
            <p className="text-text-muted leading-relaxed">
              {t('data.report_corrections')}
            </p>
          </section>

          {/* CTA for data providers */}
          <section className="bg-primary-dark/5 p-6 md:p-10 rounded-card">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              {t('data.cta_heading')}
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              {t('data.cta_text')}
            </p>
            <Link to={ROUTES.contact} className="btn-primary inline-flex items-center gap-2">
              {t('data.cta_button')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </section>
    </div>
  )
}

export default DataSources
