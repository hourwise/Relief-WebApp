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
            <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-text-primary">LEGAL REVIEW REQUIRED</p>
              <p className="text-sm text-text-muted mt-2">
                This page describes the current product and service position. Final legal review of the operator details, provider arrangements, and retention wording remains outstanding.
              </p>
            </div>
          </div>

          <p className="text-sm text-text-muted mb-8">Last updated: 18 August 2026</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Who is responsible for your information?</h2>
              <p className="text-text-muted mb-3">Relief is operated by <strong>Phil Geran trading as PCGsoft</strong>, a UK sole trader.</p>
              <p className="text-text-muted mb-3">For privacy and data-protection questions, email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark hover:underline">privacy@findrelief.co.uk</a>.</p>
              {BUSINESS_ADDRESS ? <address className="text-text-muted not-italic whitespace-pre-line">{BUSINESS_ADDRESS}</address> : <p className="text-text-muted">The public business address is supplied through private production configuration.</p>}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">This website</h2>
              <p className="text-text-muted mb-4">The public website is an informational site about Relief. Contact, GDPR, Add Facility, and Report Bug forms are disabled; the site does not currently collect submissions through those forms. Visitors can contact Relief by email using the addresses published on the <a href="/contact" className="text-primary-dark hover:underline">Contact page</a>.</p>
              <p className="text-text-muted mb-4">The website does not intentionally include an analytics package, advertising pixel, or dedicated crash-reporting SDK. No non-essential cookies are intentionally set by the site.</p>
              <p className="text-text-muted">The website is hosted and delivered through Cloudflare Pages and related Cloudflare DNS, CDN, security, and proxy services. The site currently loads fonts from Google Fonts, which causes your browser to make technical requests to Google’s font service. These providers’ own terms and notices govern their processing; no UK-only hosting or transfer guarantee is made here.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Account information</h2>
              <p className="text-text-muted">When you use the Relief mobile app, it currently processes Supabase email/password authentication, the account email or auth identity, display name and profile information, and a locally persisted authenticated session. These details support sign-in, account settings, and user-linked features.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Location and facility discovery</h2>
              <p className="text-text-muted">The mobile app may use foreground device location, including fine or coarse location where available, to find and sort nearby public facilities. Location coordinates may be sent to Relief’s Supabase-backed facility queries or nearest-facility service for that search. The current product does not describe this as continuous or background tracking.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Saved places and community data</h2>
              <p className="text-text-muted mb-4">Authenticated users may create user-linked favourites and community records such as facility submissions, facility reports, temporary reports, corrections, access-code contributions, and governed badges. These contributions are subject to server-side moderation or other controls. They do not automatically publish or alter canonical facility information.</p>
              <p className="text-text-muted">The public website does not currently accept anonymous facility submissions, reviews, or community reports.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Maps and external navigation</h2>
              <p className="text-text-muted">The mobile app can hand map or directions requests to Google Maps on Android. Google’s own services may process information under Google’s terms and privacy notices when you use that handoff. Relief does not control those external services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Account deletion</h2>
              <p className="text-text-muted mb-4">Signed-in users can open <strong>Profile → Delete account</strong> in the app. Recent authentication and explicit confirmation are required. The app reports success only after the server confirms the account cleanup and sign-in account removal. Normally, governed account-linked application data is removed; public or canonical facility and provenance information may remain where appropriate with personal attribution removed or anonymised.</p>
              <p className="text-text-muted">Accounts associated with subscription or payment-history records currently fail closed while retention and anonymisation treatment for that history remains unresolved. See the public <a href="/delete-account" className="text-primary-dark hover:underline">account-deletion page</a> for the full route and contact option. Deletion is not reported as successful in the blocked case.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Data access and export</h2>
              <p className="text-text-muted">An authenticated user can open <strong>Profile → Privacy &amp; Data → Download my data</strong>. The app produces a versioned, machine-readable JSON export in memory that can be saved or shared through normal device facilities. It includes relevant account-linked Relief data, but excludes passwords, tokens, and other authentication secrets; unrelated canonical, import, or provenance datasets are not dumped; and protected internal details, including some moderation-summary information, may be omitted. Requesting an export does not modify or delete the account.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Features not currently public</h2>
              <p className="text-text-muted">RevenueCat subscriptions and payments, OAuth, public photo Storage, remote push notifications, review submission, and automatic publication of community changes are not described here as active public capabilities. No dedicated mobile analytics or crash-reporting platform has been verified.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Email correspondence and retention</h2>
              <p className="text-text-muted mb-4">If you email hello@findrelief.co.uk, support@findrelief.co.uk, privacy@findrelief.co.uk, or data@findrelief.co.uk, Relief may process the sender name, sender email address, message contents, attachments, and other information you choose to provide. This may be used to respond to support, privacy, deletion, facility, or data-source enquiries.</p>
              <p className="text-text-muted">Direct email may be handled through Cloudflare Email Routing and destination mailboxes used to receive correspondence. We keep correspondence only for as long as reasonably needed for the enquiry, support issue, legal obligation, dispute, or appropriate business record. Specific retention periods and final provider/transfer arrangements remain subject to legal review; no arbitrary fixed period is stated here.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Your rights</h2>
              <p className="text-text-muted mb-3">Depending on the circumstances and applicable law, you may have rights to access, correct, erase, restrict, object to, or receive a copy of your personal information, and to withdraw consent where processing relies on consent. Some rights have conditions or exceptions.</p>
              <p className="text-text-muted">See the <a href="/gdpr" className="text-primary-dark hover:underline">GDPR and data-rights page</a> or email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark hover:underline">privacy@findrelief.co.uk</a>. You can also complain to the <a href="https://ico.org.uk/make-a-complaint/" className="text-primary-dark hover:underline">UK Information Commissioner’s Office</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
