import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND } from '@/lib/config'
import { Mail, Phone, MapPin } from 'lucide-react'

/**
 * Contact page
 */
const Contact: React.FC = () => {
  const { t } = useTranslation()
  React.useEffect(() => {
    document.title = `${t('contact.page_title')} | ${BRAND.name}`
  }, [t])

  return (
    <div>
      <Hero
        title={t('contact.heading')}
        description={t('contact.page_description')}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary-dark" />
                  Email
                </h3>
                <p className="text-text-muted">
                  info@relief-domain.co.uk
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary-dark" />
                  Support
                </h3>
                <p className="text-text-muted">
                  support@relief-domain.co.uk
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-dark" />
                  Address
                </h3>
                <p className="text-text-muted">
                  [Company Address]
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 card p-6 md:p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('contact.select_category')} *
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light" disabled>
                    <option value="">{t('contact.general')}</option>
                    <option value="support">{t('contact.support')}</option>
                    <option value="press">{t('contact.press')}</option>
                    <option value="partnership">{t('contact.partnership')}</option>
                    <option value="privacy">{t('contact.privacy_request')}</option>
                    <option value="data">{t('contact.data_correction')}</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                      disabled
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                    disabled
                  ></textarea>
                </div>

                <div>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1"
                      disabled
                    />
                    <span className="text-sm text-text-muted">
                      I consent to my message being reviewed by the Relief team
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled
                >
                  {t('buttons.submit')}
                </button>
                <p className="text-xs text-text-muted text-center">
                  {t('contact.thank_you')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

