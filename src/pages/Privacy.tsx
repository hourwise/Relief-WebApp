import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND, BUSINESS_ADDRESS } from '@/lib/config'
import { AlertCircle } from 'lucide-react'

const Privacy: React.FC = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    document.title = `${t('privacy.page_title')} | ${BRAND.name}`
  }, [t])

  return (
    <div>
      <Hero title={t('privacy.heading')} description={t('privacy.page_description')} />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          <div className="mb-8 p-4 md:p-6 bg-warning/10 border-l-4 border-warning rounded flex gap-4">
            <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-text-primary">This privacy information is under final legal review.</p>
              <p className="text-sm text-text-muted mt-2">
                We have published the current position as clearly as possible while final policy arrangements remain under review.
              </p>
            </div>
          </div>

          <p className="text-sm text-text-muted mb-8">Last updated: 11 August 2026</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Who is responsible for your information?</h2>
              <p className="text-text-muted mb-3">
                Relief is operated by <strong>Phil Geran trading as PCGsoft</strong>, a UK sole trader.
              </p>
              <p className="text-text-muted mb-3">
                For privacy and data-protection questions, email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark hover:underline">privacy@findrelief.co.uk</a>.
              </p>
              {BUSINESS_ADDRESS ? (
                <address className="text-text-muted not-italic whitespace-pre-line">{BUSINESS_ADDRESS}</address>
              ) : (
                <p className="text-text-muted">The public business address is supplied through private production configuration and is not available in this local build.</p>
              )}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">This website</h2>
              <p className="text-text-muted mb-4">
                The public website is an informational site about Relief. No Contact, GDPR, Add Facility, Report Bug, or newsletter form is currently enabled, so the website does not currently collect submissions through those forms.
              </p>
              <p className="text-text-muted mb-4">
                The website does not intentionally include an analytics package, advertising pixel, or other non-essential tracking SDK. No non-essential cookies are intentionally set by the site. The codebase contains a client-side rate-limit helper for future disabled forms; it is not a submission service and is not currently used to collect website enquiries.
              </p>
              <p className="text-text-muted">
                The website is hosted and delivered through Cloudflare Pages, with Cloudflare DNS, CDN, security, and proxy services used to support the site. These are third-party service providers used to operate the website; their precise legal roles and contractual arrangements are not stated here.
              </p>
              <p className="text-text-muted mt-4">
                The site currently loads fonts from Google Fonts. This causes your browser to make requests to Google’s font service, so technical request information such as your IP address and browser request information may be sent to Google. We do not state here how Google uses or retains that information beyond the provider’s own terms and notices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Direct email correspondence</h2>
              <p className="text-text-muted mb-4">
                The website forms are disabled, but visitors can contact Relief directly by email. If you email hello@findrelief.co.uk, support@findrelief.co.uk, privacy@findrelief.co.uk, or data@findrelief.co.uk, Phil Geran trading as PCGsoft may process the sender name, sender email address, message contents, attachments, and other information you voluntarily provide.
              </p>
              <p className="text-text-muted mb-4">
                This may be used to respond to an enquiry, provide support, handle a privacy or data-rights request, deal with facility or data-source correspondence, and keep appropriate correspondence records where necessary.
              </p>
              <p className="text-text-muted">
                Incoming mail for these addresses is forwarded by Cloudflare Email Routing to destination mailboxes used to receive the correspondence, including Google/Gmail mailboxes. These providers are used to operate the email service; no data-residency or international-transfer guarantee is made here. Provider terms, contractual arrangements, and transfer safeguards remain subject to final review.
              </p>
            </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">The Relief mobile app</h2>
            <p className="text-text-muted mb-4">
                The mobile app is a separate product. When used, it currently processes Supabase email/password account authentication, account email or auth identity, display name and user profile data, and a locally persisted auth session. It also processes foreground fine or coarse location; location coordinates may be sent to Supabase facility queries or the nearest-facility RPC for discovery. Favourites, facility reports, and correction requests are stored against the user ID, and the app has an authenticated facility-submission flow. The app uses Google Maps on Android for map display and directions handoff.
            </p>
            <p className="text-text-muted mb-4">
                The following mobile features are implemented but disabled or not currently public: push-token acquisition and notifications, alert preferences, RevenueCat subscriptions, Google OAuth, Apple login, offline facility caching, saved profiles, route planning, what3words, and AI features. Photo uploads and moderation are implemented but not verified or exposed.
            </p>
            <p className="text-text-muted mb-4">
                No dedicated analytics or crash-reporting system has been verified. This website policy should not be read as saying that the website currently performs the mobile app’s processing, or that disabled or not publicly exposed mobile features are active.
            </p>
            <p className="text-text-muted">
                Account-specific deletion handling remains unresolved. This policy does not promise a dedicated account-deletion page, automated deletion route, or particular deletion workflow until that contract and implementation are confirmed.
            </p>
          </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Information and purposes</h2>
              <p className="text-text-muted mb-4">
                If you email one of the published addresses, we may receive the information you choose to include, such as your name, email address, message, and any attachments. We use it to respond to your enquiry, provide support, consider privacy or data-rights requests, or review facility and data-source information.
              </p>
              <p className="text-text-muted mb-4">
                The likely lawful basis depends on the enquiry. It may be legitimate interests in responding to a voluntary enquiry, taking steps at your request, complying with a legal obligation, or another basis that must be confirmed for the particular processing. We do not claim that every basis applies to every message.
              </p>
              <p className="text-text-muted">
                We do not currently receive website facility submissions, reviews, or contact-form content because those features are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Recipients and international transfers</h2>
              <p className="text-text-muted">
                Information may be handled by email, hosting, security, or other service providers where necessary to operate the relevant service. The specific providers, recipient categories, and any international-transfer safeguards will be confirmed before the relevant processing is enabled. We do not add recipients or transfers here merely as placeholders.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Retention</h2>
            <p className="text-text-muted">
                We keep direct email correspondence only for as long as it is reasonably needed for the enquiry or support issue, to handle a legal obligation or dispute, or to maintain a legitimate and appropriate business record. Specific retention periods and deletion processes remain subject to final policy review; no arbitrary fixed period is stated here. Retention and deletion arrangements for mobile-app account data remain subject to the unresolved account-deletion contract.
            </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Your rights</h2>
              <p className="text-text-muted mb-3">
                Depending on the circumstances and the lawful basis involved, you may have rights to access, correct, erase, restrict, object to, or receive a copy of your personal information, and to withdraw consent where processing is based on consent. Some rights have conditions or exceptions.
              </p>
              <p className="text-text-muted">
                See our <a href="/gdpr" className="text-primary-dark hover:underline">data-rights page</a> or email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark hover:underline">privacy@findrelief.co.uk</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Complaints</h2>
              <p className="text-text-muted">
                You can raise questions with us first, but you also have the right to complain to the UK Information Commissioner’s Office (ICO). Information about the ICO is available at <a href="https://ico.org.uk/make-a-complaint/" className="text-primary-dark hover:underline">ico.org.uk/make-a-complaint</a>. This link does not imply ICO endorsement of Relief.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Automated decision-making</h2>
              <p className="text-text-muted">
                We do not currently use this website to make decisions about people using automated decision-making or profiling. Any separate mobile-app processing would need to be assessed and documented on its own terms.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
