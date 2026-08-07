import React from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import { BRAND } from '@/lib/config'

/**
 * Terms & Conditions page
 */
const Terms: React.FC = () => {
  const { t } = useTranslation()
  React.useEffect(() => {
    document.title = `${t('nav.terms')} | ${BRAND.name}`
  }, [t])

  return (
    <div>
      <Hero
        title="Terms & Conditions"
        description="Read our terms and conditions for using Relief"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          <p className="text-sm text-text-muted mb-8">
            Last updated: June 2024
          </p>

          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-text-muted mb-3">
                By accessing and using Relief, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above,
                please do not use this service.
              </p>
            </section>

            {/* Use License */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Use License
              </h2>
              <p className="text-text-muted mb-3">
                Permission is granted to temporarily download one copy of the materials
                (information or software) on Relief for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="space-y-2 text-text-muted ml-4">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose or for any public display</li>
                <li>• Attempt to decompile or reverse engineer any software</li>
                <li>• Transmit or redistribute the materials without proper authorization</li>
                <li>• Remove or alter any copyright or proprietary notices</li>
              </ul>
            </section>

            {/* User-Submitted Content */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                User-Submitted Content
              </h2>
              <p className="text-text-muted mb-3">
                Relief relies on community-submitted data for facility information. By submitting
                a facility or review, you represent and warrant that:
              </p>
              <ul className="space-y-2 text-text-muted ml-4">
                <li>• The information is accurate and truthful</li>
                <li>• You have the right to submit the information</li>
                <li>• The information does not violate anyone's rights</li>
              </ul>
              <p className="text-text-muted mt-4">
                Relief reserves the right to moderate, edit, or remove any submission that violates
                these terms or is inappropriate.
              </p>
            </section>

            {/* Facility Information Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Facility Information Disclaimer
              </h2>
              <p className="text-text-muted mb-3">
                Information about facilities on Relief is provided by the community and may not be
                accurate, complete, or current. Relief makes no warranty as to:
              </p>
              <ul className="space-y-2 text-text-muted ml-4">
                <li>• Accuracy of facility information</li>
                <li>• Availability or opening hours</li>
                <li>• Accessibility features or ratings</li>
                <li>• Current cleanliness or conditions</li>
              </ul>
              <p className="text-text-muted mt-4">
                Always verify information directly with the facility before visiting.
              </p>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Acceptable Use Policy
              </h2>
              <p className="text-text-muted mb-3">
                You agree not to use Relief for:
              </p>
              <ul className="space-y-2 text-text-muted ml-4">
                <li>• Illegal activities or violations of any law</li>
                <li>• Harassment, bullying, or abusive behavior</li>
                <li>• Spam, commercial solicitation, or false information</li>
                <li>• Harmful or discriminatory content</li>
                <li>• Unauthorized access to systems or data</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Limitation of Liability
              </h2>
              <p className="text-text-muted">
                In no event shall Relief, its directors, employees, or agents be liable for any
                damages arising out of or in connection with your use of this service, including
                but not limited to direct, indirect, incidental, special, consequential or punitive
                damages, even if advised of the possibility of such damages.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Modifications to Terms
              </h2>
              <p className="text-text-muted">
                Relief reserves the right to modify these terms at any time. Changes will be
                effective upon posting to the website. Your continued use of Relief after posting
                of changes constitutes acceptance of the modified terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Contact Us
              </h2>
              <p className="text-text-muted">
                If you have questions about these terms, please contact us at info@relief-domain.co.uk
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms

