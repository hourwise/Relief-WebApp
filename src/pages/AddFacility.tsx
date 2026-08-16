import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND } from '@/lib/config'

const AddFacility: React.FC = () => {
  const { t } = useTranslation()
  React.useEffect(() => { document.title = `${t('forms.add_facility')} | ${BRAND.name}` }, [t])

  const fields = [
    ['Facility name', 'text'],
    ['Address', 'text'],
    ['Postcode', 'text'],
    ['Town / city', 'text'],
    ['Latitude (required by the current mobile schema)', 'number'],
    ['Longitude (required by the current mobile schema)', 'number'],
  ] as const
  const amenities = ['Accessible', 'Disabled access', 'Baby changing', 'Family room', 'Gender neutral', 'Single occupancy', 'Open 24 hours']

  return <div>
    <Hero title={t('forms.add_facility')} description="Suggest a missing facility. The public website gateway is still being designed and remains disabled." />
    <section className="py-16 md:py-24 bg-white"><div className="section-container max-w-2xl">
      <div className="mb-8 p-4 md:p-6 bg-primary-dark/5 border-l-4 border-primary rounded"><p className="font-semibold text-text-primary mb-2">How the eventual workflow should work</p><ul className="space-y-2 text-sm text-text-muted"><li>• A suggestion will enter a staging or moderation queue.</li><li>• It will not write directly to the canonical facility record or appear in the app immediately.</li><li>• The approved workflow will preserve evidence and source provenance.</li><li>• Do not include private, unnecessary, or sensitive information.</li></ul></div>
      <div className="card p-6 md:p-8"><form className="space-y-6" aria-describedby="facility-disabled-note">
        {fields.map(([label, type]) => <div key={label}><label className="form-label">{label} *</label><input type={type} className="form-input" disabled /></div>)}
        <div><label className="form-label">Access notes</label><textarea rows={3} placeholder="For example, key available at reception or ground-floor access" className="form-input" disabled /></div>
        <div><label className="form-label">Cost</label><div className="flex gap-4"><label className="flex items-center gap-2 text-text-muted"><input type="radio" disabled /> Free</label><label className="flex items-center gap-2 text-text-muted"><input type="radio" disabled /> Paid</label></div><input className="form-input mt-3" placeholder="Price note, if relevant" disabled /></div>
        <div className="border-t pt-6"><p className="form-label">Structured facility information</p><div className="space-y-3">{amenities.map((label) => <label key={label} className="flex items-center gap-3 text-text-muted"><input type="checkbox" disabled /><span>{label}</span></label>)}</div></div>
        <div><label className="form-label">Other objective notes</label><textarea rows={4} className="form-input" disabled /></div>
        <div className="rounded-button border border-dashed border-primary/20 p-4 text-sm text-text-muted">Evidence, source links, opening-hours structure, and any web-specific contact/follow-up fields require an approved intake contract before they can be collected.</div>
        <label className="flex items-start gap-3 text-sm text-text-muted"><input type="checkbox" className="mt-1" disabled /><span>I consent to the eventual moderation and data-handling policy.</span></label>
        <button type="submit" className="btn-primary w-full" disabled>{t('forms.submit')}</button>
        <p id="facility-disabled-note" className="text-sm text-text-muted text-center">This form is disabled while the secure community intake and moderation design is reviewed.</p>
      </form></div>
    </div></section>
  </div>
}

export default AddFacility
