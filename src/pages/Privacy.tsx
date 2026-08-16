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

          <p className="text-sm text-text-muted mb-8">Last updated: 16 August 2026</p>

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
                The public website is an informational site about Relief. Contact, Report Bug, and GDPR/data-rights request forms are enabled through same-origin Cloudflare Pages Functions. The Add Facility and newsletter forms remain disabled.
              </p>
              <p className="text-text-muted mb-4">
                The website does not intentionally include an analytics package, advertising pixel, or other non-essential tracking SDK. No non-essential cookies are intentionally set by the site. Form requests are checked for size, accepted fields, spam signals, and rate limits; the server does not log the full contents of submitted messages or data-rights requests.
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
                If you submit the Contact form, Relief may process your name, email address, enquiry category, message, and spam/security signals. The Report Bug form may receive your optional name and email address, platform, device model, app version, description, and reproduction steps. The GDPR/data-rights form may receive your name, email address, request type, and request details. You can also contact Relief directly by email; in that case we may process the information you choose to include, including attachments.
              </p>
              <p className="text-text-muted mb-4">
                This may be used to respond to an enquiry, provide support, handle a privacy or data-rights request, deal with facility or data-source correspondence, and keep appropriate correspondence records where necessary.
              </p>
              <p className="text-text-muted">
                Website form notifications and, where configured, acknowledgements are sent through a server-side email provider. The current implementation is prepared for Resend; delivery is not available until the required production configuration is added. Direct incoming mail for the published addresses is forwarded by Cloudflare Email Routing to destination mailboxes used to receive the correspondence, including Google/Gmail mailboxes. These providers are used to operate the email service; no data-residency or international-transfer guarantee is made here.
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
            <p className="text-text-muted mb-4">
                Signed-in Relief users can request automated account deletion in the mobile app from <strong>Profile → Delete account</strong>. The app asks the user to type <strong>DELETE MY ACCOUNT</strong>, select <strong>Request account deletion</strong>, and confirm the request. Recent authentication is required. When the trusted backend confirms completion, it removes the Relief sign-in account and governed user-linked data; canonical facility and source/provenance records may remain where attribution is anonymised. See the public <a href="/delete-account" className="text-primary-dark hover:underline">account-deletion page</a> for the complete route.
            </p>
            <p className="text-text-muted">
                Automated deletion currently fails closed for accounts with subscription or payment-history records, including any row in the mobile app's <code>user_subscriptions</code> or <code>subscription_events</code> records. No automated cleanup is performed for those accounts while retention and anonymisation treatment remains unresolved. Users in that situation, or users who no longer have the app, should email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark hover:underline">privacy@findrelief.co.uk</a> for privacy or data-rights assistance.
            </p>
          </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Information and purposes</h2>
              <p className="text-text-muted mb-4">
                We use form and email information to respond to enquiries, provide support, investigate bug reports, handle privacy or data-rights requests, and review facility or data-source correspondence.
              </p>
              <p className="text-text-muted mb-4">
                The likely lawful basis depends on the enquiry. It may be legitimate interests in responding to a voluntary enquiry, taking steps at your request, complying with a legal obligation, or another basis that must be confirmed for the particular processing. We do not claim that every basis applies to every message.
              </p>
              <p className="text-text-muted">
                We do not currently receive public website facility submissions, reviews, or newsletter subscriptions because those features remain disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Recipients and international transfers</h2>
              <p className="text-text-muted">
                Information may be handled by Cloudflare Pages and related security services, Cloudflare Email Routing for direct email, and the configured server-side email provider for form delivery. The specific provider terms, recipient categories, and any international-transfer safeguards remain subject to final review. We do not claim that any provider is UK-only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Retention</h2>
            <p className="text-text-muted">
                We keep form and direct email correspondence only for as long as it is reasonably needed for the enquiry, bug, or rights request, to handle a legal obligation or dispute, or to maintain a legitimate and appropriate business record. Specific retention periods and deletion procedures remain subject to final policy review; no arbitrary fixed period is stated here.
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
