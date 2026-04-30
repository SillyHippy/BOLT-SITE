import { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';
import MarkdownContent from '@/components/MarkdownContent';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const metadata: Metadata = {
  title: 'Process Serving in Rural Oklahoma | Complete Guide',
  description:
    'Navigate the unique challenges of rural Oklahoma process serving. GPS tracking, tribal lands, weather, and county-by-county strategies across all 77 counties.',
  openGraph: {
    title: 'Process Serving in Rural Oklahoma | Complete Guide',
    description:
      'Navigate the unique challenges of rural Oklahoma process serving. GPS tracking, tribal lands, weather, and county-by-county strategies across all 77 counties.',
    url: 'https://justlegalsolutions.org/guides/rural-oklahoma',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Serving in Rural Oklahoma | Complete Guide',
    description:
      'Navigate the unique challenges of rural Oklahoma process serving. GPS tracking, tribal lands, weather, and county-by-county strategies across all 77 counties.',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/guides/rural-oklahoma',
  },
};

export default async function RuralOklahomaGuidePage() {
  const contentDir = join(process.cwd(), 'content');
  // ⚡ Bolt: Using async readFile to prevent blocking the event loop
  const content = await readFile(
    join(contentDir, 'rural-oklahoma-guide.md'),
    'utf-8'
  );

  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Process Serving in Rural Oklahoma | Complete Guide"
        pageDescription="Navigate the unique challenges of rural Oklahoma process serving. GPS tracking, tribal lands, weather, and county-by-county strategies."
        pageUrl="https://justlegalsolutions.org/guides/rural-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Process Serving', 'Rural Process Serving', 'GPS Tracked Service']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides' },
          { name: 'Rural Oklahoma', url: '/guides/rural-oklahoma' },
        ]}
        articleDetails={{
          headline: 'Process Serving in Rural Oklahoma | Complete Guide',
          author: 'Joseph Iannazzi',
          datePublished: '2026-04-03',
          dateModified: '2026-04-03',
          image: 'https://justlegalsolutions.org/image-pack/images/image-077-guides-hero.webp',
        }}
        keywords={['rural process serving Oklahoma', 'Oklahoma 77 counties process server', 'GPS tracked rural service']}
      />
      <Navbar />
      <main className="pt-14 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav
            className="flex items-center space-x-2 text-sm text-gray-500 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-blue-600">
              Guides
            </Link>
            <span>/</span>
            <span className="text-gray-900">Rural Oklahoma Guide</span>
          </nav>

          <article>
            <MarkdownContent content={content} />
          </article>

          <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Need Professional Process Serving?
            </h2>
            <p className="mb-6">
              Just Legal Solutions provides reliable process serving across
              Oklahoma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5393676832"
                className="inline-flex items-center justify-center bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (539) 367-6832
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
