import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND, BUSINESS_ADDRESS } from '@/lib/config'
import { AlertCircle } from 'lucide-react'

const Terms: React.FC = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    document.title = `${t('nav.terms')} | ${BRAND.name}`
  }, [t])

  return (
    <div>
      <Hero title="Terms & Conditions" description="Information about using the Relief website and companion app service." />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          <div className="mb-8 p-4 md:p-6 bg-warning/10 border-l-4 border-warning rounded flex gap-4">
            <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-text-primary">These terms remain subject to final legal review.</p>
              <p className="text-sm text-text-muted mt-2">The page reflects the current public website and product position; final legal wording remains subject to review.</p>
            </div>
          </div>

          <p className="text-sm text-text-muted mb-8">Last updated: 11 August 2026</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">About Relief</h2>
              <p className="text-text-muted mb-3">
                Relief is a public informational website and a companion site for the Relief mobile application. The operator is <strong>Phil Geran trading as PCGsoft</strong>, a UK sole trader.
              </p>
              {BUSINESS_ADDRESS ? (
                <address className="text-text-muted not-italic whitespace-pre-line mb-3">{BUSINESS_ADDRESS}</address>
              ) : (
                <p className="text-text-muted mb-3">The public business address is supplied through private production configuration and is not available in this local build.</p>
              )}
              <p className="text-text-muted">
                Questions about these terms can be sent to <a href="mailto:hello@findrelief.co.uk" className="text-primary-dark hover:underline">hello@findrelief.co.uk</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Using the website</h2>
              <p className="text-text-muted">
                You may use the website for lawful, personal, and informational purposes. Please do not misuse it, attempt unauthorised access, interfere with its operation, submit harmful material, or use it to mislead or harm others. The website’s contribution and report forms are currently disabled; these terms do not treat them as active submission or review services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Facility information</h2>
              <p className="text-text-muted mb-3">
                Relief facility information may come from external or public data sources. Opening hours, availability, accessibility features, cost, cleanliness, and other details may be incomplete, inaccurate, or stale because circumstances change.
              </p>
              <p className="text-text-muted">
                Use your own judgement and, where access is important, check with the facility or another reliable source before relying on the information. Relief does not promise that a facility will be open, suitable, accessible, or available when you arrive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Maps and external links</h2>
              <p className="text-text-muted">
                The website or mobile app may provide links to maps, directions, or other third-party services. Those services are controlled by their own operators and terms. Relief is not responsible for their availability, accuracy, or content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">App availability</h2>
              <p className="text-text-muted">
                The Relief mobile application is a separate service. Features and availability may vary by release; any App Store or Google Play availability is only as stated in the relevant official store listing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Information and limitations</h2>
              <p className="text-text-muted mb-3">
                The website and its information are provided on a reasonable-efforts, informational basis. To the extent permitted by law, Relief does not guarantee that the website will always be available, error-free, complete, or suitable for a particular purpose.
              </p>
              <p className="text-text-muted">
                Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited, including applicable consumer rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Changes</h2>
              <p className="text-text-muted">
                These terms may be updated as Relief develops. The updated version will show a new date and will apply from publication, subject to any legal requirements that apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Contact</h2>
              <p className="text-text-muted">
                For general or business enquiries, email <a href="mailto:hello@findrelief.co.uk" className="text-primary-dark hover:underline">hello@findrelief.co.uk</a>. For support, use <a href="mailto:support@findrelief.co.uk" className="text-primary-dark hover:underline">support@findrelief.co.uk</a>. Privacy and account-deletion information is available through the <a href="/privacy" className="text-primary-dark hover:underline">Privacy Policy</a>, <a href="/gdpr" className="text-primary-dark hover:underline">data-rights page</a>, and <a href="/delete-account" className="text-primary-dark hover:underline">account-deletion page</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
