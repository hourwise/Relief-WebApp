import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { CheckCircle } from 'lucide-react'
import { BRAND, ROUTES } from '@/lib/config'

const Gdpr: React.FC = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    document.title = `${t('gdpr.page_title')} | ${BRAND.name}`
  }, [t])

  const rights = [
    { title: 'Access', description: 'Ask whether Relief processes your personal information and request a copy of it.' },
    { title: 'Correction', description: 'Ask Relief to correct information that is inaccurate or incomplete.' },
    { title: 'Erasure', description: 'Ask Relief to delete information where the law provides that right.' },
    { title: 'Restriction', description: 'Ask Relief to limit processing in circumstances provided by data-protection law.' },
    { title: 'Objection', description: 'Object to certain processing where the law allows.' },
    { title: 'Data portability', description: 'In some circumstances, receive information you provided in a usable format.' },
    { title: 'Withdraw consent', description: 'Where processing relies on consent, withdraw it for the future.' },
  ]

  return (
    <div>
      <Hero title={t('gdpr.heading')} description={t('gdpr.page_description')} />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          <div className="mb-8 p-4 md:p-6 bg-warning/10 border-l-4 border-warning rounded">
            <p className="font-semibold text-text-primary">LEGAL REVIEW REQUIRED</p>
            <p className="text-sm text-text-muted mt-2">This page explains the current self-service and email routes. Final legal review of operator, provider, and retention wording remains outstanding.</p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">Your data rights</h2>
            <div className="space-y-6">
              {rights.map((right) => (
                <div key={right.title} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Right to {right.title}</h3>
                    <p className="text-text-muted">{right.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-text-muted mt-6">These rights are not absolute and may not apply in every circumstance.</p>
          </section>

          <section className="rounded-card bg-primary-dark/5 p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Access and export in the app</h2>
            <p className="text-text-muted mb-4">An authenticated user can open <strong>Profile → Privacy &amp; Data → Download my data</strong>. Relief creates a versioned, machine-readable JSON export in memory that can be saved or shared through normal device facilities.</p>
            <p className="text-text-muted">The export covers relevant account-linked Relief data. It excludes passwords, tokens, and authentication secrets; it does not dump unrelated canonical, import, or provenance datasets; and protected internal details, including some moderation-summary information, may be omitted. Requesting an export does not change or delete the account.</p>
          </section>

          <section className="rounded-card bg-primary-dark/5 p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Deletion in the app</h2>
            <p className="text-text-muted mb-4">If you can sign in, open <strong>Profile → Delete account</strong>, complete the explicit confirmation, and satisfy the recent-authentication requirement. The app reports success only after the server confirms account cleanup and sign-in account removal.</p>
            <p className="text-text-muted">Normally, governed account-linked application data is removed. Public or canonical facility and provenance information may remain where appropriate with personal attribution removed or anonymised. Accounts associated with subscription or payment-history records currently fail closed while retention and anonymisation treatment remains unresolved; deletion is not reported as successful in that situation.</p>
            <p className="text-text-muted mt-4"><Link to={ROUTES.deleteAccount} className="text-primary-dark font-semibold hover:underline">Read the public account-deletion information</Link>.</p>
          </section>

          <section className="bg-primary-dark/5 p-6 md:p-8 rounded-card mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-4">How to contact Relief</h2>
            <p className="text-text-muted mb-4">For a rights request, deletion issue, correction request, or help when you cannot use the app, email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark hover:underline">privacy@findrelief.co.uk</a>. Describe what you need and include only the information needed to identify the account or request. Reasonable identity verification may be required to protect personal information.</p>
            <p className="text-text-muted">The public website forms are disabled. This email route does not promise a fixed service time or a particular deletion outcome; requests are handled subject to applicable law and the current data contracts.</p>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Complaints and fees</h2>
            <p className="text-text-muted mb-4">You can complain to the UK Information Commissioner’s Office if you are concerned about how your information is handled. See <a href="https://ico.org.uk/make-a-complaint/" className="text-primary-dark hover:underline">ico.org.uk/make-a-complaint</a>; this does not imply ICO endorsement of Relief.</p>
            <p className="text-text-muted">Requests are normally free. The law allows a reasonable fee or refusal in limited cases, such as a request that is manifestly unfounded or excessive.</p>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Gdpr
