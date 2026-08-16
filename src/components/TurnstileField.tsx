import React from 'react'
import { TURNSTILE_SITE_KEY } from '@/lib/config'

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: { sitekey: string; callback: (token: string) => void; 'expired-callback': () => void; 'error-callback': () => void }) => string
      remove: (widgetId: string) => void
    }
  }
}

interface TurnstileFieldProps {
  token: string
  onTokenChange: (token: string) => void
}

const TurnstileField: React.FC<TurnstileFieldProps> = ({ token, onTokenChange }) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const widgetRef = React.useRef<string>()
  const [status, setStatus] = React.useState<'loading' | 'ready' | 'unconfigured' | 'error'>(
    TURNSTILE_SITE_KEY ? 'loading' : 'unconfigured',
  )

  React.useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !containerRef.current) return

    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile || widgetRef.current) return
      widgetRef.current = window.turnstile.render(containerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (nextToken) => {
          onTokenChange(nextToken)
          setStatus('ready')
        },
        'expired-callback': () => onTokenChange(''),
        'error-callback': () => {
          onTokenChange('')
          setStatus('error')
        },
      })
      setStatus('ready')
    }

    if (window.turnstile) {
      renderWidget()
      return
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-relief-turnstile]')
    const script = existingScript || document.createElement('script')
    if (!existingScript) {
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      script.async = true
      script.defer = true
      script.dataset.reliefTurnstile = 'true'
      document.head.appendChild(script)
    }
    script.addEventListener('load', renderWidget)
    return () => script.removeEventListener('load', renderWidget)
  }, [onTokenChange])

  React.useEffect(() => () => {
    if (widgetRef.current && window.turnstile) window.turnstile.remove(widgetRef.current)
  }, [])

  return (
    <div className="space-y-2" aria-live="polite">
      <div ref={containerRef} />
      {status === 'unconfigured' && (
        <p className="text-sm text-text-muted">Spam protection is being configured. Please use the email route above for now.</p>
      )}
      {status === 'loading' && <p className="text-sm text-text-muted">Loading spam protection…</p>}
      {status === 'error' && <p className="text-sm text-error">Spam protection could not be loaded. Please try again later.</p>}
      <input type="hidden" name="turnstileToken" value={token} readOnly />
    </div>
  )
}

export default TurnstileField
