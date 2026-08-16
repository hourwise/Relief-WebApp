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
        description="Use this page to request account or personal-information deletion, even if you no longer have the app installed."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          <div className="mb-10 rounded-card border-l-4 border-warning bg-warning/10 p-6">
            <h2 className="text-xl font-semibold text-text-primary mb-2">Current deletion route</h2>
            <p className="text-text-muted">
              The current Relief mobile source does not contain a verified in-app account-deletion route or an automated deletion contract. Until that is implemented and confirmed, please request deletion by emailing{' '}
              <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark font-semibold hover:underline">privacy@findrelief.co.uk</a>.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">How to request deletion</h2>
              <ol className="list-decimal list-inside space-y-3 text-text-muted">
                <li>Email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark hover:underline">privacy@findrelief.co.uk</a> from an address associated with your Relief account, if possible.</li>
                <li>Say that you want your Relief account and associated personal information deleted.</li>
                <li>Include only the information needed to identify the account, such as the account email address. Do not send your password.</li>
              </ol>
              <p className="text-text-muted mt-4">
                If you cannot access the account email address, explain that in your message. We may request reasonable identity verification where necessary to protect the account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">What happens next</h2>
              <p className="text-text-muted mb-4">
                This email route is a request and intake process. It does not automatically delete an account, and this page does not promise that any particular category of mobile-app data will be erased before the deletion process has been confirmed for your account.
              </p>
              <p className="text-text-muted">
                We will assess the request, explain any steps or limitations that apply, and handle it under the relevant data-protection rules. We do not state a fixed completion time here.
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
