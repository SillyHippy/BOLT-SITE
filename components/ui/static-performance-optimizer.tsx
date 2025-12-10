'use client'

import { useEffect } from 'react'

/**
 * Static Performance Optimizer - Optimized for Cloudflare Pages
 * 
 * This component implements performance optimizations that work
 * with static sites and don't require server-side capabilities.
 */
export default function StaticPerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link')
      fontLink.rel = 'preload'
      fontLink.href = '/fonts/inter.woff2'
      fontLink.as = 'font'
      fontLink.type = 'font/woff2'
      fontLink.crossOrigin = 'anonymous'
      document.head.appendChild(fontLink)

      // Preload critical CSS
      const criticalCSS = document.querySelector('link[rel="stylesheet"]')
      if (criticalCSS) {
        criticalCSS.setAttribute('rel', 'preload')
        criticalCSS.setAttribute('as', 'style')
        criticalCSS.setAttribute('onload', "this.onload=null;this.rel='stylesheet'")
      }
    }

    // Optimize images for better LCP
    const optimizeImages = () => {
      const images = document.querySelectorAll('img')
      images.forEach((img, index) => {
        // First few images get priority
        if (index < 3) {
          img.loading = 'eager'
          img.decoding = 'sync'
          
          // Add fetchpriority for the hero image
          if (index === 0) {
            img.setAttribute('fetchpriority', 'high')
          }
        } else {
          img.loading = 'lazy'
          img.decoding = 'async'
        }
      })
    }

    // Reduce layout shift
    const reduceLayoutShift = () => {
      // Add aspect ratios to images without dimensions
      const images = document.querySelectorAll('img:not([width]):not([height])')
      images.forEach(img => {
        const htmlImg = img as HTMLImageElement
        htmlImg.style.aspectRatio = '16/9' // Default aspect ratio
        htmlImg.style.objectFit = 'cover'
      })
    }

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]')
      scripts.forEach(script => {
        const htmlScript = script as HTMLScriptElement
        const src = htmlScript.getAttribute('src')
        if (src && !src.includes('gtag') && !src.includes('analytics')) {
          htmlScript.defer = true
        }
      })
    }

    // Prefetch next page resources on hover
    const prefetchOnHover = () => {
      const links = document.querySelectorAll('a[href^="/"]')
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href')
          if (href && !document.querySelector(`link[href="${href}"]`)) {
            const prefetch = document.createElement('link')
            prefetch.rel = 'prefetch'
            prefetch.href = href
            document.head.appendChild(prefetch)
          }
        }, { once: true })
      })
    }

    // Critical resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = [
        'www.googletagmanager.com',
        'scripts.simpleanalyticscdn.com',
        'fonts.googleapis.com',
        'fonts.gstatic.com'
      ]

      domains.forEach(domain => {
        if (!document.querySelector(`link[href="//${domain}"]`)) {
          const dnsPrefetch = document.createElement('link')
          dnsPrefetch.rel = 'dns-prefetch'
          dnsPrefetch.href = `//${domain}`
          document.head.appendChild(dnsPrefetch)
        }
      })
    }

    // Execute optimizations
    preloadCriticalResources()
    optimizeImages()
    reduceLayoutShift()
    optimizeThirdPartyScripts()
    prefetchOnHover()
    addResourceHints()

    // Clean up event listeners on unmount
    return () => {
      const links = document.querySelectorAll('a[href^="/"]')
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => {})
      })
    }
  }, [])

  return null // This component doesn't render anything
}
