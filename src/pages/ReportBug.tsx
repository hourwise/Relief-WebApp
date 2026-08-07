import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND } from '@/lib/config'

/**
 * Report bug page
 */
const ReportBug: React.FC = () => {
  const { t } = useTranslation()
  React.useEffect(() => {
    document.title = `${t('forms.report_bug')} | ${BRAND.name}`
  }, [t])

  return (
    <div>
      <Hero
        title={t('forms.report_bug')}
        description="Found a bug? Help us improve Relief by reporting it. Include as much detail as possible."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-2xl">
          <div className="card p-6 md:p-8">
            <form className="space-y-6">
              {/* Platform */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t('forms.platform')} *
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light" disabled>
                  <option value="">Select platform</option>
                  <option value="ios">iOS</option>
                  <option value="android">Android</option>
                  <option value="website">Website</option>
                </select>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('contact.name')} {t('forms.optional')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('contact.email')} {t('forms.optional')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                    disabled
                  />
                </div>
              </div>

              {/* Device Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('forms.device_model')} {t('forms.optional')}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., iPhone 14 Pro"
                    className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('forms.app_version')} {t('forms.optional')}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 1.0.0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                    disabled
                  />
                </div>
              </div>

              {/* Bug Description */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t('forms.description')} *
                </label>
                <textarea
                  rows={4}
                  placeholder="Please describe the bug you encountered"
                  className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                  disabled
                ></textarea>
              </div>

              {/* Steps to Reproduce */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t('forms.steps_to_reproduce')} *
                </label>
                <textarea
                  rows={4}
                  placeholder="1. Step one&#10;2. Step two&#10;3. Step three"
                  className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                  disabled
                ></textarea>
                <p className="text-xs text-text-muted mt-2">
                  Please be as detailed as possible - this helps us fix bugs faster
                </p>
              </div>

              {/* Screenshot Upload */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t('forms.screenshot')} {t('forms.optional')}
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-button p-6 text-center">
                  <p className="text-text-muted">Drop a screenshot here or click to upload</p>
                  <p className="text-xs text-text-muted mt-1">PNG, JPG up to 5MB</p>
                </div>
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-sm text-text-muted">
                    I consent to this bug report being used to improve Relief
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
                Form coming soon - security review in progress
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReportBug

