import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import TurnstileField from '@/components/TurnstileField'
import { BRAND } from '@/lib/config'
import { bugReportFormSchema, type BugReportFormValues } from '@/lib/validation'
import { submitPublicForm } from '@/lib/formClient'

const ReportBug: React.FC = () => {
  const { t } = useTranslation()
  const [turnstileToken, setTurnstileToken] = React.useState('')
  const [formState, setFormState] = React.useState<{ type: 'idle' | 'success' | 'error'; message?: string }>({ type: 'idle' })
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<BugReportFormValues>({
    resolver: zodResolver(bugReportFormSchema),
    defaultValues: { platform: 'website', consent: false, honeypot: '' },
  })

  React.useEffect(() => { document.title = `${t('forms.report_bug')} | ${BRAND.name}` }, [t])

  const onSubmit = async (values: BugReportFormValues) => {
    if (!turnstileToken) { setFormState({ type: 'error', message: 'Please complete the spam-protection check before submitting.' }); return }
    setFormState({ type: 'idle' })
    const result = await submitPublicForm('/api/report-bug', values, turnstileToken)
    if (!result.success) { setFormState({ type: 'error', message: result.error }); return }
    reset(); setTurnstileToken(''); setFormState({ type: 'success', message: 'Your bug report was sent. Thank you for helping improve Relief.' })
  }

  return <div>
    <Hero title={t('forms.report_bug')} description="Found a bug? Help us improve Relief by reporting what happened and how to reproduce it." />
    <section className="py-16 md:py-24 bg-white"><div className="section-container max-w-2xl">
      <div className="card p-6 md:p-8">
        {formState.type !== 'idle' && <div role={formState.type === 'error' ? 'alert' : 'status'} className={`mb-6 rounded-button p-4 ${formState.type === 'error' ? 'bg-error/10 text-error' : 'bg-success/10 text-text-primary'}`}>{formState.message}</div>}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
          <div className="absolute -left-[10000px]" aria-hidden="true"><label>Leave this field empty<input tabIndex={-1} autoComplete="off" {...register('honeypot')} /></label></div>
          <div><label htmlFor="bug-platform" className="form-label">Platform *</label><select id="bug-platform" className="form-input" {...register('platform')} aria-invalid={Boolean(errors.platform)}><option value="ios">iOS</option><option value="android">Android</option><option value="website">Website</option></select>{errors.platform && <p className="form-error">{errors.platform.message}</p>}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="bug-name" className="form-label">Name <span className="text-text-muted">(optional)</span></label><input id="bug-name" className="form-input" {...register('name')} aria-invalid={Boolean(errors.name)} />{errors.name && <p className="form-error">{errors.name.message}</p>}</div><div><label htmlFor="bug-email" className="form-label">Email <span className="text-text-muted">(optional)</span></label><input id="bug-email" type="email" autoComplete="email" className="form-input" {...register('email')} aria-invalid={Boolean(errors.email)} />{errors.email && <p className="form-error">{errors.email.message}</p>}</div></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="bug-device" className="form-label">Device model <span className="text-text-muted">(optional)</span></label><input id="bug-device" className="form-input" {...register('device_model')} aria-invalid={Boolean(errors.device_model)} />{errors.device_model && <p className="form-error">{errors.device_model.message}</p>}</div><div><label htmlFor="bug-version" className="form-label">App version <span className="text-text-muted">(optional)</span></label><input id="bug-version" className="form-input" {...register('app_version')} aria-invalid={Boolean(errors.app_version)} />{errors.app_version && <p className="form-error">{errors.app_version.message}</p>}</div></div>
          <div><label htmlFor="bug-description" className="form-label">What went wrong? *</label><textarea id="bug-description" rows={5} className="form-input" {...register('description')} aria-invalid={Boolean(errors.description)} />{errors.description && <p className="form-error">{errors.description.message}</p>}</div>
          <div><label htmlFor="bug-steps" className="form-label">Steps to reproduce *</label><textarea id="bug-steps" rows={5} placeholder="1. Step one&#10;2. Step two" className="form-input" {...register('steps_to_reproduce')} aria-invalid={Boolean(errors.steps_to_reproduce)} />{errors.steps_to_reproduce && <p className="form-error">{errors.steps_to_reproduce.message}</p>}</div>
          <p className="text-sm text-text-muted">Screenshot uploads are not available through this form. Please describe what you saw without including sensitive information.</p>
          <div><label className="flex items-start gap-3 text-sm text-text-muted"><input type="checkbox" className="mt-1" {...register('consent')} /><span>I consent to this bug report being used to improve Relief. *</span></label>{errors.consent && <p className="form-error">{errors.consent.message}</p>}</div>
          <TurnstileField token={turnstileToken} onTokenChange={setTurnstileToken} />
          <button type="submit" className="btn-primary w-full" disabled={isSubmitting || !turnstileToken}>{isSubmitting ? 'Sending…' : 'Send bug report'}</button>
        </form>
      </div>
    </div></section>
  </div>
}

export default ReportBug
