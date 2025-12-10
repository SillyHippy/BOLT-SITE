'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Head from 'next/head'

// SearchAction schema for this page since it has actual search functionality
const searchActionSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Just Legal Solutions",
  "url": "https://justlegalsolutions.org",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://justlegalsolutions.org/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Simple search data - you can expand this with your actual pages
const searchablePages = [
  { title: 'Process Server Services', url: '/services', description: 'Professional process serving throughout Oklahoma' },
  { title: 'Tulsa Process Server', url: '/tulsa-process-server', description: 'Expert process serving in Tulsa County' },
  { title: 'Service Areas', url: '/service-areas', description: 'We serve all major cities in Oklahoma' },
  { title: 'Pricing', url: '/pricing', description: 'Competitive rates for process serving' },
  { title: 'Contact Us', url: '/contact', description: 'Get in touch for process serving needs' },
  { title: 'FAQ', url: '/faq', description: 'Frequently asked questions about process serving' },
  { title: 'Broken Arrow Process Server', url: '/service-areas/broken-arrow', description: 'Process serving in Broken Arrow' },
  { title: 'Jenks Process Server', url: '/service-areas/jenks', description: 'Process serving in Jenks' },
  { title: 'Owasso Process Server', url: '/service-areas/owasso', description: 'Process serving in Owasso' },
  { title: 'Sand Springs Process Server', url: '/service-areas/sand-springs', description: 'Process serving in Sand Springs' },
  { title: 'What is a Process Server', url: '/seo/what-is-a-process-server', description: 'Learn about process serving laws and procedures' },
  { title: 'Oklahoma Process Server Laws', url: '/oklahoma-process-server-laws', description: 'Legal requirements for process serving in Oklahoma' },
  { title: 'Process Server Cost Calculator', url: '/oklahoma-process-server-cost-calculator', description: 'Calculate your process serving costs' },
  { title: 'Emergency Weekend Service', url: '/weekend-emergency', description: 'Rush and emergency process serving' },
  { title: 'Why Choose Us', url: '/why-choose-us', description: 'Benefits of choosing Just Legal Solutions' }
]

function SearchContent() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(searchablePages)

  useEffect(() => {
    const q = searchParams.get('q') || ''
    setQuery(q)
    if (q) {
      filterResults(q)
    }
  }, [searchParams])

  const filterResults = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults(searchablePages)
      return
    }

    const filtered = searchablePages.filter(page => 
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.url.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setResults(filtered)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    filterResults(query)
    // Update URL with search query
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      url.searchParams.set('q', query)
      window.history.pushState({}, '', url.toString())
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">
            Search Just Legal Solutions
          </h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-4 max-w-2xl mx-auto">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for services, locations, or information..."
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Search
              </button>
            </div>
          </form>

          {/* Search Results */}
          <div className="space-y-4">
            {query && (
              <p className="text-slate-600 mb-6">
                {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
              </p>
            )}

            {results.map((page, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <Link href={page.url} className="block group">
                  <h3 className="text-xl font-semibold text-blue-600 group-hover:text-blue-800 mb-2">
                    {page.title}
                  </h3>
                  <p className="text-slate-600 mb-2">{page.description}</p>
                  <p className="text-sm text-green-600">{`justlegalsolutions.org${page.url}`}</p>
                </Link>
              </div>
            ))}

            {results.length === 0 && query && (
              <div className="text-center py-12">
                <p className="text-slate-500 text-lg mb-4">No results found for &ldquo;{query}&rdquo;</p>
                <p className="text-slate-400">Try different keywords or browse our services below:</p>
                <div className="mt-6 flex gap-4 justify-center flex-wrap">
                  <Link href="/services" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                    Services
                  </Link>
                  <Link href="/service-areas" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                    Service Areas
                  </Link>
                  <Link href="/faq" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                    FAQ
                  </Link>
                  <Link href="/contact" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(searchActionSchema) }}
        />
      </Head>
      <Suspense fallback={
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-slate-800 mb-8">
                Search Just Legal Solutions
              </h1>
              <p className="text-slate-600">Loading search...</p>
            </div>
          </div>
        </div>
      }>
        <SearchContent />
      </Suspense>
    </>
  )
}
