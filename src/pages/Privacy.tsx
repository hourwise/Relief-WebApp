import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND } from '@/lib/config'
import { AlertCircle } from 'lucide-react'

/**
 * Privacy policy page
 */
const Privacy: React.FC = () => {
  const { t } = useTranslation()
  React.useEffect(() => {
    document.title = `${t('privacy.page_title')} | ${BRAND.name}`
  }, [t])

  return (
    <div>
      <Hero
        title={t('privacy.heading')}
        description={t('privacy.page_description')}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          {/* Legal Notice */}
          <div className="mb-8 p-4 md:p-6 bg-warning/10 border-l-4 border-warning rounded flex gap-4">
            <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-text-primary">
                {t('privacy.legal_notice')}
              </p>
              <p className="text-sm text-text-muted mt-2">
                This policy is a template and requires final legal review before launch.
                Do not use in production without legal counsel review.
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <p className="text-sm text-text-muted mb-8">
            {t('privacy.last_updated')} June 2024
          </p>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Data Controller */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                {t('privacy.data_controller')}
              </h2>
              <p className="text-text-muted mb-3">
                Relief is operated by [Company name to be confirmed before launch].
              </p>
              <p className="text-text-muted mb-3">
                Contact details for privacy matters will be published here before launch.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                {t('privacy.data_we_collect')}
              </h2>
              <ul className="space-y-3 text-text-muted">
                <li className="flex gap-3">
                  <span className="text-primary-dark font-bold">•</span>
                  <span>
                    <strong>Location Data:</strong> When you search for facilities, we collect your search location (not stored by default unless you save facilities)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-dark font-bold">•</span>
                  <span>
                    <strong>Account Data:</strong> If you create an account, we collect your name and email
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-dark font-bold">•</span>
                  <span>
                    <strong>Facility Submissions:</strong> Data you provide when suggesting new facilities
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-dark font-bold">•</span>
                  <span>
                    <strong>Contact Forms:</strong> Name, email, and message content
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-dark font-bold">•</span>
                  <span>
                    <strong>Analytics:</strong> Non-identifying usage data (pages viewed, features used)
                  </span>
                </li>
              </ul>
            </section>

            {/* How We Use Data */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                {t('privacy.how_we_use')}
              </h2>
              <p className="text-text-muted mb-3">
                We use the data you provide to:
              </p>
              <ul className="space-y-2 text-text-muted ml-4">
                <li>• Provide and improve the Relief service</li>
                <li>• Respond to your enquiries and support requests</li>
                <li>• Moderate facility submissions</li>
                <li>• Prevent abuse and fraud</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                {t('privacy.data_retention')}
              </h2>
              <p className="text-text-muted">
                We retain personal data only as long as necessary to provide the service or
                as required by law. Contact data is retained for as long as needed to respond
                to your enquiry, plus 12 months for legal compliance.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                {t('privacy.your_rights')}
              </h2>
              <p className="text-text-muted mb-3">
                Under GDPR, you have the right to:
              </p>
              <ul className="space-y-2 text-text-muted ml-4">
                <li>• Access your personal data</li>
                <li>• Request correction of inaccurate data</li>
                <li>• Request deletion of your data</li>
                <li>• Restrict processing of your data</li>
                <li>• Withdraw consent at any time</li>
              </ul>
              <p className="text-text-muted mt-4">
                Please see our <a href="/gdpr" className="text-primary-dark hover:underline">GDPR page</a> to exercise your rights.
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Security
              </h2>
              <p className="text-text-muted">
                We use industry-standard security measures to protect your data. However,
                no method of transmission over the internet is 100% secure. If you believe
                your data has been compromised, please contact us immediately.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Contact Us
              </h2>
              <p className="text-text-muted">
                Contact details for privacy questions and data requests will be published here before launch.
                In the meantime, you can read about your rights on our{" "}
                <a href="/gdpr" className="text-primary-dark hover:underline">GDPR page</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy

