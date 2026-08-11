import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { CheckCircle } from 'lucide-react'
import { BRAND } from '@/lib/config'

const Gdpr: React.FC = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    document.title = `${t('gdpr.page_title')} | ${BRAND.name}`
  }, [t])

  const rights = [
    { title: 'Access', description: 'Ask whether we process your personal information and request a copy of it.' },
    { title: 'Correction', description: 'Ask us to correct information that is inaccurate or incomplete.' },
    { title: 'Erasure', description: 'Ask us to delete information where the law provides that right.' },
    { title: 'Restriction', description: 'Ask us to limit processing in circumstances provided by data-protection law.' },
    { title: 'Objection', description: 'Object to certain processing, including processing based on legitimate interests, where the law allows.' },
    { title: 'Data portability', description: 'In some circumstances, receive information you provided in a usable format or ask us to transmit it.' },
    { title: 'Withdraw consent', description: 'Where processing relies on consent, withdraw it for the future.' },
  ]

  return (
    <div>
      <Hero title={t('gdpr.heading')} description={t('gdpr.page_description')} />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          <div className="mb-8 p-4 md:p-6 bg-warning/10 border-l-4 border-warning rounded">
            <p className="font-semibold text-text-primary">This information remains subject to final legal review.</p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">Your data rights</h2>
            <div className="space-y-6">
              {rights.map((right) => (
                <div key={right.title} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Right to {right.title}</h3>
                    <p className="text-text-muted">{right.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-text-muted mt-6">
              These rights are not absolute and may not apply in every circumstance.
            </p>
          </section>

          <section className="bg-primary-dark/5 p-6 md:p-8 rounded-card mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-4">How to make a request</h2>
            <p className="text-text-muted mb-4">
              Email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark hover:underline">privacy@findrelief.co.uk</a>. You do not need to use a form. Please describe your request and include enough information for us to understand what you need; reasonable identity verification may be required where necessary to protect personal information.
            </p>
            <p className="text-text-muted">
              We will respond without undue delay and normally within one month. Where permitted by law, the time may be extended by up to a further two months for a complex request or multiple requests. If an extension is needed, we will explain this within the initial one-month period. We will not promise a fixed response time for every type of request or circumstance.
            </p>
          </section>

          <section className="card p-6 md:p-8 mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Online request form</h2>
            <p className="text-text-muted">
              The website request form is intentionally disabled while secure server-side form infrastructure is being prepared. This does not prevent you from exercising your rights by emailing the address above.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Complaints and fees</h2>
            <p className="text-text-muted mb-4">
              You can complain to the UK Information Commissioner’s Office if you are concerned about how your information is handled. See <a href="https://ico.org.uk/make-a-complaint/" className="text-primary-dark hover:underline">ico.org.uk/make-a-complaint</a>; this does not imply ICO endorsement of Relief.
            </p>
            <p className="text-text-muted">
              Requests are normally free. The law allows a reasonable fee or refusal in limited cases, such as a request that is manifestly unfounded or excessive.
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Gdpr
