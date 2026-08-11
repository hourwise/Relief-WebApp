import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND, BUSINESS_ADDRESS } from '@/lib/config'
import { Database, Mail, MessageCircle, ShieldCheck } from 'lucide-react'

const Contact: React.FC = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    document.title = `${t('contact.page_title')} | ${BRAND.name}`
  }, [t])

  const routes = [
    { icon: Mail, title: 'General and business enquiries', email: 'hello@findrelief.co.uk', description: 'Questions about Relief, the project, or potential business enquiries.' },
    { icon: MessageCircle, title: 'Support', email: 'support@findrelief.co.uk', description: 'Help with the Relief website or mobile app.' },
    { icon: ShieldCheck, title: 'Privacy and data rights', email: 'privacy@findrelief.co.uk', description: 'Privacy questions and requests about personal information.' },
    { icon: Database, title: 'Facility and data-source enquiries', email: 'data@findrelief.co.uk', description: 'Questions about facility information or data sources.' },
  ]

  return (
    <div>
      <Hero title={t('contact.heading')} description={t('contact.page_description')} />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-4xl">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">Choose the right contact route</h2>
            <p className="text-text-muted">Email is currently the working way to contact Relief. The current public business address is shown when supplied through production configuration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {routes.map(({ icon: Icon, title, email, description }) => (
              <div key={email} className="card p-6">
                <Icon className="w-6 h-6 text-primary-dark mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
                <p className="text-text-muted mb-4">{description}</p>
                <a href={`mailto:${email}`} className="text-primary-dark font-semibold hover:underline break-words">{email}</a>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-card border border-primary/10 p-6">
            <h2 className="text-lg font-semibold text-text-primary mb-2">Business address</h2>
            {BUSINESS_ADDRESS ? (
              <address className="text-text-muted not-italic whitespace-pre-line">{BUSINESS_ADDRESS}</address>
            ) : (
              <p className="text-text-muted">Public business address configured at deployment.</p>
            )}
          </div>

          <div className="mt-10 rounded-card bg-primary-dark/5 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-3">Website contact form</h2>
            <p className="text-text-muted">
              The website contact form is intentionally disabled while secure server-side submission infrastructure is being prepared. Please use the appropriate email address above; no response-time guarantee is made.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
