import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '@/components/Hero'
import { BRAND, ROUTES } from '@/lib/config'

const DeleteAccount: React.FC = () => {
  React.useEffect(() => {
    document.title = `Delete a Relief Account | ${BRAND.name}`
  }, [])

  return (
    <div>
      <Hero
        title="Delete a Relief account"
        description="Use the Relief app when you can sign in, or email us if you need account-deletion or data-rights help."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          <div className="mb-10 rounded-card border-l-4 border-primary bg-primary/5 p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-2">The in-app route</h2>
            <p className="text-text-muted">
              If you can use Relief, open <strong>Profile → Delete account</strong>. The app asks you to confirm the destructive action and requires recent authentication. It reports success only after the server confirms that the deletion completed.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">What is normally removed</h2>
              <p className="text-text-muted mb-4">
                After the server confirms a successful deletion, Relief normally removes the sign-in account and governed application data linked to it. This can include account and profile information, saved favourites, account-linked community submissions and reports, corrections, access-code contributions, badges, saved settings, and related user-owned application records.
              </p>
              <p className="text-text-muted">
                The app does not treat the request as complete until the server-side cleanup and account removal have succeeded. Requesting deletion is not the same as signing out or temporarily disabling an account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Information that may remain</h2>
              <p className="text-text-muted">
                Public or canonical facility information and related source or provenance history may need to remain for the integrity of the service. Where appropriate, personal attribution is removed or anonymised. Relief does not promise that every historical or canonical record is physically erased.
              </p>
            </section>

            <section className="rounded-card border-l-4 border-warning bg-warning/10 p-6">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Subscription or payment history</h2>
              <p className="text-text-muted mb-4">
                Accounts associated with subscription or payment-history records currently fail closed: automated deletion does not proceed while the retention and anonymisation treatment for that history remains unresolved. Relief must not report that deletion as successful in this situation.
              </p>
              <p className="text-text-muted">
                Email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark font-semibold hover:underline">privacy@findrelief.co.uk</a> for privacy or data-rights assistance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">If you cannot use the app</h2>
              <p className="text-text-muted mb-4">
                Email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark font-semibold hover:underline">privacy@findrelief.co.uk</a> from an address associated with your Relief account if possible. Explain that you need account deletion or another data-rights request and include only the information needed to identify the account.
              </p>
              <p className="text-text-muted">
                Relief may need reasonable identity verification to protect the account. Do not send your password, payment-card details, authentication codes, or other unnecessary sensitive information. This public page is an information and contact route; it is not an unauthenticated account-deletion API.
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Data access and other rights</h2>
              <p className="text-text-muted">
                Signed-in users can use <strong>Profile → Privacy &amp; Data → Download my data</strong> to request their machine-readable export. For access, correction, restriction, objection, portability, or other privacy questions, see the <Link to={ROUTES.gdpr} className="text-primary-dark hover:underline">GDPR and data-rights page</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DeleteAccount
