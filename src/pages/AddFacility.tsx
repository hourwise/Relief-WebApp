import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND } from '@/lib/config'

/**
 * Add facility submission page
 */
const AddFacility: React.FC = () => {
  const { t } = useTranslation()
  React.useEffect(() => {
    document.title = `${t('forms.add_facility')} | ${BRAND.name}`
  }, [t])

  return (
    <div>
      <Hero
        title={t('forms.add_facility')}
        description="Help us build Relief by suggesting a new facility. Information will be moderated before going live."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-2xl">
          <div className="mb-8 p-4 md:p-6 bg-primary-dark/5 border-l-4 border-primary rounded">
            <p className="font-semibold text-text-primary mb-2">
              How facility suggestions work
            </p>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>• Suggestions will be moderated and reviewed before they become live data.</li>
              <li>• Submissions will not appear in the app immediately.</li>
              <li>• No account is needed to suggest a facility.</li>
              <li>• Please only share objective facility information — don't include sensitive or unnecessary personal details.</li>
            </ul>
          </div>

          <div className="card p-6 md:p-8">
            <form className="space-y-6">
              {/* Facility Name */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t('forms.facility_name')} *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                  disabled
                />
              </div>

              {/* Address Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('forms.address')} *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('forms.postcode')} *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                    disabled
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t('forms.town_city')} *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                  disabled
                />
              </div>

              {/* Coordinates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('forms.latitude')}
                  </label>
                  <input
                    type="number"
                    step="0.0001"
                    className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t('forms.longitude')}
                  </label>
                  <input
                    type="number"
                    step="0.0001"
                    className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                    disabled
                  />
                </div>
              </div>

              {/* Facility Details */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t('forms.access_type')} *
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light" disabled>
                  <option value="">Select access type</option>
                  <option value="public">Public</option>
                  <option value="customer">Customers only</option>
                  <option value="staff">Staff only</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t('forms.opening_hours')} *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Mon-Fri 9am-5pm"
                  className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                  disabled
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t('forms.free_or_paid')} *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" disabled />
                    <span>Free</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" disabled />
                    <span>Paid</span>
                  </label>
                </div>
              </div>

              {/* Features */}
              <div className="border-t pt-6">
                <p className="text-sm font-medium text-text-primary mb-4">
                  Available Features
                </p>
                <div className="space-y-3">
                  {[
                    ['accessible_toilet', t('forms.accessible_toilet')],
                    ['wheelchair_access', t('forms.wheelchair_access')],
                    ['radar_key', t('forms.radar_key')],
                    ['baby_changing', t('forms.baby_changing')],
                    ['changing_places', t('forms.changing_places')],
                  ].map(([key, label]) => (
                    <label key={key} className="flex items-center gap-3">
                      <input type="checkbox" disabled />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t('forms.privacy_notes')}
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                  disabled
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t('forms.cleanliness_notes')}
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                  disabled
                ></textarea>
              </div>

              {/* Contact Info */}
              <div className="border-t pt-6">
                <p className="text-sm font-medium text-text-primary mb-4">
                  Your Information (Optional)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={t('forms.submitter_name')}
                    className="px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                    disabled
                  />
                  <input
                    type="email"
                    placeholder={t('forms.submitter_email')}
                    className="px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light"
                    disabled
                  />
                </div>
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-sm text-text-muted">
                    {t('forms.consent')}
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
                disabled
              >
                {t('forms.submit')}
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

export default AddFacility

