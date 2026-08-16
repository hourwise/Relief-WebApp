import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import TurnstileField from '@/components/TurnstileField'
import { CheckCircle } from 'lucide-react'
import { BRAND } from '@/lib/config'
import { gdprRequestFormSchema, type GDPRRequestFormValues } from '@/lib/validation'
import { submitPublicForm } from '@/lib/formClient'

const Gdpr: React.FC = () => {
  const { t } = useTranslation()
  const [turnstileToken, setTurnstileToken] = React.useState('')
  const [formState, setFormState] = React.useState<{ type: 'idle' | 'success' | 'error'; message?: string }>({ type: 'idle' })
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<GDPRRequestFormValues>({
    resolver: zodResolver(gdprRequestFormSchema),
    defaultValues: { request_type: 'access', consent: false, honeypot: '' },
  })

  React.useEffect(() => { document.title = `${t('gdpr.page_title')} | ${BRAND.name}` }, [t])

  const onSubmit = async (values: GDPRRequestFormValues) => {
    if (!turnstileToken) { setFormState({ type: 'error', message: 'Please complete the spam-protection check before submitting.' }); return }
    setFormState({ type: 'idle' })
    const result = await submitPublicForm('/api/gdpr-request', values, turnstileToken)
    if (!result.success) { setFormState({ type: 'error', message: result.error }); return }
    reset(); setTurnstileToken(''); setFormState({ type: 'success', message: `Your request was received. Keep reference ${result.data?.reference || 'provided in your acknowledgement'} for follow-up.` })
  }

  const rights = [
    { title: 'Access', description: 'Ask whether we process your personal information and request a copy of it.' },
    { title: 'Correction', description: 'Ask us to correct information that is inaccurate or incomplete.' },
    { title: 'Erasure', description: 'Ask us to delete information where the law provides that right.' },
    { title: 'Restriction', description: 'Ask us to limit processing in circumstances provided by data-protection law.' },
    { title: 'Objection', description: 'Object to certain processing, including processing based on legitimate interests, where the law allows.' },
    { title: 'Data portability', description: 'In some circumstances, receive information you provided in a usable format or ask us to transmit it.' },
    { title: 'Withdraw consent', description: 'Where processing relies on consent, withdraw it for the future.' },
  ]

  return <div>
    <Hero title={t('gdpr.heading')} description={t('gdpr.page_description')} />
    <section className="py-16 md:py-24 bg-white"><div className="section-container max-w-3xl">
      <div className="mb-8 p-4 md:p-6 bg-warning/10 border-l-4 border-warning rounded"><p className="font-semibold text-text-primary">This information remains subject to final legal review.</p></div>
      <section className="mb-16"><h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">Your data rights</h2><div className="space-y-6">{rights.map((right) => <div key={right.title} className="flex gap-4"><CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" aria-hidden="true" /><div><h3 className="font-semibold text-text-primary mb-2">Right to {right.title}</h3><p className="text-text-muted">{right.description}</p></div></div>)}</div><p className="text-text-muted mt-6">These rights are not absolute and may not apply in every circumstance.</p></section>
      <section className="bg-primary-dark/5 p-6 md:p-8 rounded-card mb-10"><h2 className="text-2xl font-bold text-text-primary mb-4">How to make a request</h2><p className="text-text-muted mb-4">Use the form below or email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark hover:underline">privacy@findrelief.co.uk</a>. Please include enough information for us to understand what you need; reasonable identity verification may be required where necessary to protect personal information.</p><p className="text-text-muted">We will respond without undue delay and normally within one month. Where permitted by law, the time may be extended for a complex request or multiple requests. If an extension is needed, we will explain this within the initial one-month period.</p></section>
      <section className="mb-16"><h2 className="text-2xl font-bold text-text-primary mb-4">Account deletion routes</h2><p className="text-text-muted mb-4">If you can sign in to the Relief app, use <strong>Profile → Delete account</strong>, type <strong>DELETE MY ACCOUNT</strong>, select <strong>Request account deletion</strong>, and confirm the request. Successful automated deletion removes the Relief sign-in account and governed user-linked data; canonical facility and source/provenance records may remain where attribution is anonymised.</p><p className="text-text-muted">Accounts with subscription or payment-history records cannot currently complete automated deletion because retention and anonymisation treatment remains unresolved. If that applies, or if you no longer have the app, email <a href="mailto:privacy@findrelief.co.uk" className="text-primary-dark hover:underline">privacy@findrelief.co.uk</a> or use the deletion form below. No fixed retention period or specific legal basis is stated here.</p></section>
      <section className="card p-6 md:p-8 mb-16"><h2 className="text-2xl font-bold text-text-primary mb-4">Online data-rights request</h2>
        {formState.type !== 'idle' && <div role={formState.type === 'error' ? 'alert' : 'status'} className={`mb-6 rounded-button p-4 ${formState.type === 'error' ? 'bg-error/10 text-error' : 'bg-success/10 text-text-primary'}`}>{formState.message}</div>}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
          <div className="absolute -left-[10000px]" aria-hidden="true"><label>Leave this field empty<input tabIndex={-1} autoComplete="off" {...register('honeypot')} /></label></div>
          <div><label htmlFor="gdpr-name" className="form-label">Name *</label><input id="gdpr-name" autoComplete="name" className="form-input" {...register('name')} aria-invalid={Boolean(errors.name)} />{errors.name && <p className="form-error">{errors.name.message}</p>}</div>
          <div><label htmlFor="gdpr-email" className="form-label">Email *</label><input id="gdpr-email" type="email" autoComplete="email" className="form-input" {...register('email')} aria-invalid={Boolean(errors.email)} />{errors.email && <p className="form-error">{errors.email.message}</p>}</div>
          <div><label htmlFor="gdpr-type" className="form-label">Request type *</label><select id="gdpr-type" className="form-input" {...register('request_type')} aria-invalid={Boolean(errors.request_type)}><option value="access">Access my information</option><option value="deletion">Delete my information</option><option value="correction">Correct my information</option><option value="withdraw-consent">Withdraw consent</option></select>{errors.request_type && <p className="form-error">{errors.request_type.message}</p>}</div>
          <div><label htmlFor="gdpr-description" className="form-label">Details <span className="text-text-muted">(optional)</span></label><textarea id="gdpr-description" rows={5} className="form-input" {...register('description')} aria-invalid={Boolean(errors.description)} />{errors.description && <p className="form-error">{errors.description.message}</p>}</div>
          <div><label className="flex items-start gap-3 text-sm text-text-muted"><input type="checkbox" className="mt-1" {...register('consent')} /><span>I confirm that I want Relief to use this information to handle my request. *</span></label>{errors.consent && <p className="form-error">{errors.consent.message}</p>}</div>
          <TurnstileField token={turnstileToken} onTokenChange={setTurnstileToken} />
          <button type="submit" className="btn-primary w-full" disabled={isSubmitting || !turnstileToken}>{isSubmitting ? 'Sending…' : 'Send data-rights request'}</button>
        </form>
      </section>
      <section className="pt-8 border-t border-gray-200"><h2 className="text-2xl font-bold text-text-primary mb-4">Complaints and fees</h2><p className="text-text-muted mb-4">You can complain to the UK Information Commissioner’s Office if you are concerned about how your information is handled. See <a href="https://ico.org.uk/make-a-complaint/" className="text-primary-dark hover:underline">ico.org.uk/make-a-complaint</a>; this does not imply ICO endorsement of Relief.</p><p className="text-text-muted">Requests are normally free. The law allows a reasonable fee or refusal in limited cases, such as a request that is manifestly unfounded or excessive.</p></section>
    </div></section>
  </div>
}

export default Gdpr
