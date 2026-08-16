import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '@/components/Hero'
import { BRAND, ROUTES } from '@/lib/config'

const DeleteAccount: React.FC = () => {
  React.useEffect(() => {
    document.title = `Delete an Account | ${BRAND.name}`
  }, [])

  return (
    <div>
      <Hero
        title="Delete a Relief account"
        description="Use the Relief app when you can sign in, or contact us for account deletion and data-rights help if you no longer have the app."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          <div className="mb-10 rounded-card border-l-4 border-primary bg-primary/5 p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-2">Two ways to request deletion</h2>
            <p className="text-text-muted">
              Signed-in users can use the automated flow in the Relief app. If you no longer have the app, cannot sign in, or automated deletion is unavailable for your account, email{' '}
              <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark font-semibold hover:underline">privacy@findrelief.co.uk</a>.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Delete in the Relief app</h2>
              <ol className="list-decimal list-inside space-y-3 text-text-muted">
                <li>Sign in and open <strong>Profile</strong>.</li>
                <li>Select <strong>Delete account</strong>.</li>
                <li>Type <strong>DELETE MY ACCOUNT</strong> in the confirmation field.</li>
                <li>Select <strong>Request account deletion</strong>, then select <strong>Confirm request</strong> in the final confirmation prompt.</li>
              </ol>
              <p className="text-text-muted mt-4">
                The app requires a recent sign-in. It reports completion only after the trusted backend confirms Storage cleanup, governed data cleanup, and removal of the Relief sign-in account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">What automated deletion removes</h2>
              <p className="text-text-muted mb-4">
                After successful confirmation, automated deletion removes your Relief sign-in account and the governed user-linked data covered by the account-deletion contract, including owned app data and Storage objects. Canonical facility and source/provenance records may remain where your attribution is anonymised.
              </p>
              <p className="text-text-muted">
                The deletion result is not reported as successful if the trusted backend cannot confirm the required cleanup and Auth deletion.
              </p>
            </section>

            <section className="rounded-card border-l-4 border-warning bg-warning/10 p-6">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Subscription or payment history</h2>
              <p className="text-text-muted mb-4">
                Accounts with subscription or payment-history records cannot currently complete automated deletion. Relief fails closed before cleanup while the retention and anonymisation treatment for those records remains unresolved; no automated deletion outcome is reported for those accounts.
              </p>
              <p className="text-text-muted">
                Please email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark font-semibold hover:underline">privacy@findrelief.co.uk</a> for a privacy or data-rights request instead. This route also supports anyone who no longer has the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">External deletion and data-rights help</h2>
              <p className="text-text-muted mb-4">
                Email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark hover:underline">privacy@findrelief.co.uk</a> from an address associated with your Relief account, if possible. Say what you need and include only the information needed to identify the account, such as its email address.
              </p>
              <p className="text-text-muted">
                If you cannot access the account email address, explain that in your message. We may request reasonable identity verification where necessary to protect the account. Do not send your password, payment-card details, or other unnecessary sensitive information. We do not state a fixed completion time or invent a retention period here.
              </p>
            </section>

            <section className="rounded-card bg-primary-dark/5 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Security reminder</h2>
              <p className="text-text-muted">
                Relief will never ask for your password by email. Do not include passwords, payment-card details, or other unnecessary sensitive information in a deletion request.
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Other data-rights requests</h2>
              <p className="text-text-muted">
                For access, correction, restriction, objection, portability, or consent requests, see the{' '}
                <Link to={ROUTES.gdpr} className="text-primary-dark hover:underline">GDPR and data-rights page</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DeleteAccount
