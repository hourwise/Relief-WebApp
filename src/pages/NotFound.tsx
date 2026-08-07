import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '@/lib/config'

/**
 * 404 Not Found page
 */
const NotFound: React.FC = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    document.title = '404 - Page Not Found | Relief'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-white px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-bold text-primary-light/30 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {t('errors.404')}
          </h2>
        </div>

        <p className="text-lg text-text-muted mb-8">
          {t('errors.404_message')}
        </p>

        <Link
          to={ROUTES.home}
          className="btn-primary inline-block"
        >
          {t('errors.back_home')}
        </Link>

        <div className="mt-12">
          <p className="text-sm text-text-muted mb-4">
            Or explore:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to={ROUTES.about}
              className="text-primary-dark hover:text-primary-light transition"
            >
              {t('nav.about')}
            </Link>
            <span className="text-text-muted hidden sm:inline">•</span>
            <Link
              to={ROUTES.blog}
              className="text-primary-dark hover:text-primary-light transition"
            >
              {t('nav.blog')}
            </Link>
            <span className="text-text-muted hidden sm:inline">•</span>
            <Link
              to={ROUTES.contact}
              className="text-primary-dark hover:text-primary-light transition"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound

