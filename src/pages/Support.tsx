import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND } from '@/lib/config'
import { ChevronDown } from 'lucide-react'

/**
 * Support page with FAQs
 */
const Support: React.FC = () => {
  const { t } = useTranslation()
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  React.useEffect(() => {
    document.title = `${t('support.page_title')} | ${BRAND.name}`
  }, [t])

  const faqs = [
    {
      category: 'How to Use',
      question: t('support.how_to_use'),
      answer: 'Relief makes it easy to find facilities. Use the search feature to find nearby facilities, apply filters for accessibility needs, and get directions.',
    },
    {
      category: 'Reporting',
      question: t('support.report_closed'),
      answer: 'If you find a facility is closed or inaccessible, please visit that facility page and select "Report Issue". Community feedback helps keep information accurate.',
    },
    {
      category: 'Contributing',
      question: t('support.suggest_facility'),
      answer: 'Visit our Add Facility page to suggest a new toilet or facility. Please provide as much detail as possible so our team can verify the information.',
    },
    {
      category: 'Account',
      question: t('support.restore_purchases'),
      answer: 'If you need to restore previous purchases or access, please contact our support team at support@relief-domain.co.uk.',
    },
    {
      category: 'Accessibility',
      question: t('support.accessibility_support'),
      answer: 'Relief is built with accessibility first. If you experience any difficulties using the app or website, please let us know at support@relief-domain.co.uk.',
    },
  ]

  return (
    <div>
      <Hero
        title={t('support.heading')}
        description={t('support.page_description')}
      />

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-12 text-center">
            {t('support.faq_heading')}
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors focus-visible"
                >
                  <div className="text-left">
                    <p className="text-xs font-semibold text-primary-dark uppercase">
                      {faq.category}
                    </p>
                    <p className="text-lg font-semibold text-text-primary mt-1">
                      {faq.question}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-dark flex-shrink-0 transition-transform ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {openFAQ === index && (
                  <div className="px-6 py-4 bg-background border-t border-gray-200">
                    <p className="text-text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 md:py-24 bg-primary-dark text-white">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            {t('support.cant_find')}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our support team is here to help. Reach out and we'll get back to you as soon as possible.
          </p>
          <a
            href="mailto:support@relief-domain.co.uk"
            className="btn-secondary inline-block"
          >
            {t('support.contact_support')}
          </a>
        </div>
      </section>
    </div>
  )
}

export default Support

