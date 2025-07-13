import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://justlegalsolutions.org'
  
  // Static pages
  const staticPages = [
    '',
    '/pricing',
    '/services',
    '/card',
    '/security-policy'
  ]

  // SEO pages - location-based
  const locationPages = [
    '/process-server-tulsa',
    '/process-server-broken-arrow',
    '/process-server-sapulpa',
    '/process-server-bixby',
    '/process-server-jenks',
    '/process-server-owasso',
    '/process-server-sand-springs',
    '/process-server-glenpool',
    '/process-server-claremore',
    '/process-server-skiatook',
    '/process-server-collinsville',
    '/process-server-catoosa',
    '/process-server-bristow',
    '/process-server-wagoner',
    '/process-server-coweta',
    '/process-server-haskell',
    '/process-server-mounds',
    '/process-server-sperry',
    '/process-server-lotsee',
    '/process-server-leonard',
    '/process-server-turley',
    '/process-server-oakhurst',
    '/process-server-drumright',
    '/process-server-kellyville',
    '/process-server-mannford',
    '/process-server-kiefer',
    '/process-server-beggs',
    '/process-server-porter',
    '/process-server-okay',
    '/process-server-henryetta',
    '/process-server-okmulgee',
    '/process-server-morris',
    '/process-server-verdigris',
    '/process-server-inola'
  ]

  // Service-specific SEO pages
  const servicePages = [
    '/same-day-process-serving-tulsa',
    '/subpoena-service',
    '/eviction-process-serving',
    '/process-serving-faq',
    '/what-is-a-process-server',
    '/oklahoma-process-server-requirements',
    '/executive-assistant-services',
    '/data-entry-services-tulsa',
    '/courier-delivery-service',
    '/small-business-courier',
    '/debt-collection-process-server',
    '/loan-company-process-server',
    '/property-management-process-server',
    '/real-estate-process-server',
    '/insurance-process-server',
    '/medical-office-process-server',
    '/government-contractor-process-server',
    '/process-server-lawyers'
  ]

  const currentDate = new Date().toISOString()

  return [
    // Static pages with highest priority
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1.0 : 0.8,
    })),
    // Location pages - high priority for local SEO
    ...locationPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    // Service pages - good priority
    ...servicePages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  ]
}
