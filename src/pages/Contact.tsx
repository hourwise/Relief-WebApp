import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import TurnstileField from '@/components/TurnstileField'
import { BRAND, BUSINESS_ADDRESS } from '@/lib/config'
import { contactFormSchema, type ContactFormValues } from '@/lib/validation'
import { submitPublicForm } from '@/lib/formClient'
import { Database, Mail, MessageCircle, ShieldCheck } from 'lucide-react'

const Contact: React.FC = () => {
  const { t } = useTranslation()
  const [turnstileToken, setTurnstileToken] = React.useState('')
  const [formState, setFormState] = React.useState<{ type: 'idle' | 'success' | 'error'; message?: string }>({ type: 'idle' })
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { category: 'general', consent: false, honeypot: '' },
  })

  React.useEffect(() => { document.title = `${t('contact.page_title')} | ${BRAND.name}` }, [t])

  const onSubmit = async (values: ContactFormValues) => {
    if (!turnstileToken) {
      setFormState({ type: 'error', message: 'Please complete the spam-protection check before submitting.' })
      return
    }
    setFormState({ type: 'idle' })
    const result = await submitPublicForm('/api/contact', values, turnstileToken)
    if (!result.success) { setFormState({ type: 'error', message: result.error }); return }
    reset(); setTurnstileToken(''); setFormState({ type: 'success', message: 'Your message was sent. Thank you for contacting Relief.' })
  }

  const routes = [
    { icon: Mail, title: 'General and business enquiries', email: 'hello@findrelief.co.uk', description: 'Questions about Relief, the project, or potential business enquiries.' },
    { icon: MessageCircle, title: 'Support', email: 'support@findrelief.co.uk', description: 'Help with the Relief website or mobile app.' },
    { icon: ShieldCheck, title: 'Privacy and data rights', email: 'privacy@findrelief.co.uk', description: 'Privacy questions and requests about personal information.' },
    { icon: Database, title: 'Facility and data-source enquiries', email: 'data@findrelief.co.uk', description: 'Questions about facility information or data sources.' },
  ]

  return <div>
    <Hero title={t('contact.heading')} description={t('contact.page_description')} />
    <section className="py-16 md:py-24 bg-white"><div className="section-container max-w-4xl">
      <div className="mb-10"><h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">Choose the right contact route</h2><p className="text-text-muted">Use the form for ordinary enquiries, or email the specialist address that best matches your question.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">{routes.map(({ icon: Icon, title, email, description }) => <div key={email} className="card p-6"><Icon className="w-6 h-6 text-primary-dark mb-4" aria-hidden="true" /><h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3><p className="text-text-muted mb-4">{description}</p><a href={`mailto:${email}`} className="text-primary-dark font-semibold hover:underline break-words">{email}</a></div>)}</div>
      <div className="card p-6 md:p-8"><h2 className="text-2xl font-bold text-text-primary mb-2">Send a message</h2><p className="text-text-muted mb-6">Please do not include passwords or unnecessary sensitive information.</p>
        {formState.type !== 'idle' && <div role={formState.type === 'error' ? 'alert' : 'status'} className={`mb-6 rounded-button p-4 ${formState.type === 'error' ? 'bg-error/10 text-error' : 'bg-success/10 text-text-primary'}`}>{formState.message}</div>}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
          <div className="absolute -left-[10000px]" aria-hidden="true"><label>Leave this field empty<input tabIndex={-1} autoComplete="off" {...register('honeypot')} /></label></div>
          <div><label htmlFor="contact-name" className="form-label">{t('contact.name')} *</label><input id="contact-name" className="form-input" {...register('name')} aria-invalid={Boolean(errors.name)} />{errors.name && <p className="form-error">{errors.name.message}</p>}</div>
          <div><label htmlFor="contact-email" className="form-label">{t('contact.email')} *</label><input id="contact-email" type="email" autoComplete="email" className="form-input" {...register('email')} aria-invalid={Boolean(errors.email)} />{errors.email && <p className="form-error">{errors.email.message}</p>}</div>
          <div><label htmlFor="contact-category" className="form-label">Enquiry type *</label><select id="contact-category" className="form-input" {...register('category')} aria-invalid={Boolean(errors.category)}><option value="general">General question</option><option value="support">Support</option><option value="press">Press</option><option value="partnership">Partnership</option><option value="privacy">Privacy / GDPR</option><option value="data-correction">Facility data correction</option></select>{errors.category && <p className="form-error">{errors.category.message}</p>}</div>
          <div><label htmlFor="contact-message" className="form-label">{t('contact.message')} *</label><textarea id="contact-message" rows={6} className="form-input" {...register('message')} aria-invalid={Boolean(errors.message)} />{errors.message && <p className="form-error">{errors.message.message}</p>}</div>
          <div><label className="flex items-start gap-3 text-sm text-text-muted"><input type="checkbox" className="mt-1" {...register('consent')} /><span>I understand that Relief will receive this enquiry so it can respond and handle it appropriately. *</span></label>{errors.consent && <p className="form-error">{errors.consent.message}</p>}</div>
          <TurnstileField token={turnstileToken} onTokenChange={setTurnstileToken} />
          <button type="submit" className="btn-primary w-full" disabled={isSubmitting || !turnstileToken}>{isSubmitting ? 'Sending…' : 'Send message'}</button>
        </form>
      </div>
      <div className="mt-8 rounded-card border border-primary/10 p-6"><h2 className="text-lg font-semibold text-text-primary mb-2">Business address</h2>{BUSINESS_ADDRESS ? <address className="text-text-muted not-italic whitespace-pre-line">{BUSINESS_ADDRESS}</address> : <p className="text-text-muted">Public business address configured at deployment.</p>}</div>
    </div></section>
  </div>
}

export default Contact
