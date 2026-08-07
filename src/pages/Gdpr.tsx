import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { CheckCircle } from 'lucide-react'
import { BRAND } from '@/lib/config'

/**
 * GDPR Rights page
 */
const Gdpr: React.FC = () => {
  const { t } = useTranslation()
  React.useEffect(() => {
    document.title = `${t('gdpr.page_title')} | ${BRAND.name}`
  }, [t])

  const rights = [
    {
      title: t('gdpr.right_access'),
      description: t('gdpr.right_access_desc'),
    },
    {
      title: t('gdpr.right_delete'),
      description: t('gdpr.right_delete_desc'),
    },
    {
      title: t('gdpr.right_correct'),
      description: t('gdpr.right_correct_desc'),
    },
    {
      title: t('gdpr.right_withdraw'),
      description: t('gdpr.right_withdraw_desc'),
    },
    {
      title: t('gdpr.right_opt_out'),
      description: t('gdpr.right_opt_out_desc'),
    },
  ]

  return (
    <div>
      <Hero
        title={t('gdpr.heading')}
        description={t('gdpr.page_description')}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          {/* Your Rights */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">
              {t('gdpr.your_rights')}
            </h2>

            <div className="space-y-6">
              {rights.map((right, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      {right.title}
                    </h3>
                    <p className="text-text-muted">
                      {right.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Make a Request */}
          <section className="bg-primary-dark/5 p-6 md:p-8 rounded-card mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              How to Make a Data Request
            </h2>
            <p className="text-text-muted mb-4">
              To exercise any of your rights, please email us at{' '}
              <strong>privacy@relief-domain.co.uk</strong> with:
            </p>
            <ol className="space-y-2 text-text-muted ml-4 list-decimal">
              <li>Your full name</li>
              <li>Your email address</li>
              <li>Type of request (access, deletion, correction, etc.)</li>
              <li>Any relevant account details</li>
            </ol>
            <p className="text-text-muted mt-4">
              <strong>Timeline:</strong> We will respond to all valid requests within 30 days,
              as required by GDPR.
            </p>
          </section>

          {/* Request Form Placeholder */}
          <section className="card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Submit a Data Request
            </h2>
            <form className="space-y-6">
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

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {t('gdpr.request_type')} *
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary-light" disabled>
                  <option value="">{t('gdpr.request_data_access')}</option>
                  <option value="deletion">{t('gdpr.request_data_deletion')}</option>
                  <option value="correction">{t('gdpr.request_data_correction')}</option>
                  <option value="withdraw">{t('gdpr.request_withdraw_consent')}</option>
                </select>
              </div>

              <div>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1"
                    disabled
                  />
                  <span className="text-sm text-text-muted">
                    I understand that this will be processed according to GDPR regulations
                    and that I will receive a response within 30 days.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
                disabled
              >
                Submit Request
              </button>
              <p className="text-xs text-text-muted text-center">
                Form coming soon - security review in progress
              </p>
            </form>
          </section>

          {/* Additional Info */}
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              More Information
            </h3>
            <ul className="space-y-3 text-text-muted">
              <li>
                • <strong>Right to Lodge a Complaint:</strong> If you believe we have violated
                your rights, you can lodge a complaint with your local data protection authority.
              </li>
              <li>
                • <strong>No Cost:</strong> Except for manifestly unfounded or excessive requests,
                we will not charge a fee for exercising your rights.
              </li>
              <li>
                • <strong>Verification:</strong> We may ask you to verify your identity before
                processing your request for security reasons.
              </li>
              <li>
                • <strong>EU Citizens:</strong> If you are in the EU, you are covered by GDPR.
                If you are outside the EU, your rights may be determined by your local laws.
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Gdpr

