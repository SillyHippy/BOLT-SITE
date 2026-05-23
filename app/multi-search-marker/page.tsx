import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata = {
    alternates: {
    canonical: 'https://justlegalsolutions.org/multi-search-marker',
  },
title: 'Multi-Search Marker - Just Legal Solutions',
  description: 'This page marks multi-search optimization for Just Legal Solutions. Our services are discoverable across all major search platforms and assistants.',
  keywords: 'multi-search, search engine, voice assistant, just legal solutions',
  robots: {
    index: false,
    follow: false
  }
};

export default function MultiSearchMarker() {
  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Multi-Search Marker - Just Legal Solutions"
        pageDescription="This page marks multi-search optimization for Just Legal Solutions. Our services are discoverable across all major search platforms and assistants."
        pageUrl="https://justlegalsolutions.org/multi-search-marker"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Multi-Search Marker - Just Legal Solutions', url: '/multi-search-marker' },
        ]}
      />
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-12">
        <h1 className="text-4xl font-bold mb-6 text-purple-900">Multi-Search Marker</h1>
        <p className="text-lg text-gray-700 mb-8">
          This page confirms that Just Legal Solutions is optimized for multi-search. Our process serving services are discoverable on Google, Bing, Yahoo, DuckDuckGo, and all major voice assistants.
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-8">
          <li>Optimized for search engines and voice assistants</li>
          <li>Multi-platform schema included</li>
          <li>Service area: Oklahoma and nationwide</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
