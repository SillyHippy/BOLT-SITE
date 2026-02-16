'use client'

import { useEffect } from 'react'

export default function StaticSiteOptimizer() {
  useEffect(() => {
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
