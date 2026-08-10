import React from 'react'
import { useLocation } from 'react-router-dom'
import { BRAND } from '@/lib/config'
import { PAGE_META_BY_ROUTE } from '@/lib/seo'

const upsertMeta = (attribute: 'name' | 'property', key: string, content?: string) => {
  const selector = `meta[${attribute}="${key}"]`
  const existing = document.head.querySelector<HTMLMetaElement>(selector)
  if (!content) {
    existing?.remove()
    return
  }
  const element = existing || document.head.appendChild(document.createElement('meta'))
  element.setAttribute(attribute, key)
  element.setAttribute('content', content)
}

const setCanonical = (url?: string) => {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!url) {
    existing?.remove()
    return
  }
  const element = existing || document.head.appendChild(document.createElement('link'))
  element.rel = 'canonical'
  element.href = url
}

/** Keeps SPA document metadata aligned with the current valid public route. */
const RouteMetadata: React.FC = () => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
    const metadataFactory = PAGE_META_BY_ROUTE[normalizedPath]

    if (!metadataFactory) {
      document.title = `Page not found | ${BRAND.name}`
      setCanonical()
      upsertMeta('property', 'og:url')
      return
    }

    const metadata = metadataFactory()
    const canonicalUrl = new URL(normalizedPath, `${BRAND.siteUrl}/`).toString()
    const ogImage = metadata.ogImage ? new URL(metadata.ogImage, `${BRAND.siteUrl}/`).toString() : undefined

    document.title = metadata.title
    setCanonical(canonicalUrl)
    upsertMeta('name', 'description', metadata.description)
    upsertMeta('property', 'og:title', metadata.title)
    upsertMeta('property', 'og:description', metadata.description)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('name', 'twitter:title', metadata.title)
    upsertMeta('name', 'twitter:description', metadata.description)
    upsertMeta('name', 'twitter:image', ogImage)
  }, [pathname])

  return null
}

export default RouteMetadata
