'use client'

import { useEffect } from 'react'

export default function StaticSiteOptimizer() {
  useEffect(() => {
    // Preload critical resources for better performance
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ]
      
      fontLinks.forEach(href => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'style'
        link.href = href
        link.onload = () => {
          link.rel = 'stylesheet'
        }
        document.head.appendChild(link)
      })
    }

    // Optimize images with lazy loading and proper sizing
    const optimizeImages = () => {
      const images = document.querySelectorAll('img:not([loading])')
      images.forEach(img => {
        if (img instanceof HTMLImageElement) {
          img.loading = 'lazy'
          img.decoding = 'async'
          
          // Add proper aspect ratio if missing
          if (!img.style.aspectRatio && img.width && img.height) {
            img.style.aspectRatio = `${img.width} / ${img.height}`
          }
        }
      })
    }

    // Prefetch critical pages for faster navigation
    const prefetchCriticalPages = () => {
      const criticalPages = [
        '/services',
        '/contact',
        '/service-areas'
      ]
      
      criticalPages.forEach(page => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = page
        document.head.appendChild(link)
      })
    }

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Delay non-critical scripts
      const scripts = document.querySelectorAll('script[src*="google"], script[src*="analytics"]')
      scripts.forEach(script => {
        if (script instanceof HTMLScriptElement && !script.async && !script.defer) {
          script.defer = true
        }
      })
    }

    // Reduce layout shift by setting dimensions
    const reduceLayoutShift = () => {
      // Add skeleton loading for dynamic content
      const dynamicElements = document.querySelectorAll('[data-dynamic]')
      dynamicElements.forEach(element => {
        if (element instanceof HTMLElement && !element.style.minHeight) {
          element.style.minHeight = '100px'
        }
      })
    }

    // Run optimizations
    preloadCriticalResources()
    optimizeImages()
    prefetchCriticalPages()
    optimizeThirdPartyScripts()
    reduceLayoutShift()

    // Re-run image optimization for dynamically loaded content
    const observer = new MutationObserver(() => {
      optimizeImages()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => observer.disconnect()
  }, [])

  // This component renders nothing - it's just for optimization
  return null
}
