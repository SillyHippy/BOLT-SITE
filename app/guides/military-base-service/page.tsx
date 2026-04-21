import { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';
import MarkdownContent from '@/components/MarkdownContent';
import { readFileSync } from 'fs';
import { join } from 'path';

export const metadata: Metadata = {
  title:
    'Serving Process on Military Bases in Oklahoma | Complete Guide',
  description:
    'How to serve legal documents on Oklahoma military installations including Fort Sill, Tinker AFB, and Altus AFB. Gate access, JAG coordination, and SCRA protections.',
  openGraph: {
    title:
      'Serving Process on Military Bases in Oklahoma | Complete Guide',
    description:
      'How to serve legal documents on Oklahoma military installations including Fort Sill, Tinker AFB, and Altus AFB. Gate access, JAG coordination, and SCRA protections.',
    url: 'https://justlegalsolutions.org/guides/military-base-service',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Serving Process on Military Bases in Oklahoma | Complete Guide',
    description:
      'How to serve legal documents on Oklahoma military installations including Fort Sill, Tinker AFB, and Altus AFB. Gate access, JAG coordination, and SCRA protections.',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/guides/military-base-service',
  },
};

export default function MilitaryBaseServiceGuidePage() {
  const contentDir = join(process.cwd(), 'content', 'guides');
  const content = readFileSync(
    join(contentDir, 'military-base-service-guide.md'),
    'utf-8'
  );

  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Serving Process on Military Bases in Oklahoma | Complete Guide"
        pageDescription="How to serve legal documents on Oklahoma military installations including Fort Sill, Tinker AFB, and Altus AFB."
        pageUrl="https://justlegalsolutions.org/guides/military-base-service"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Military Base Process Serving', 'Process Serving', 'Legal Document Delivery']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides' },
          { name: 'Military Base Service', url: '/guides/military-base-service' },
        ]}
        articleDetails={{
          headline: 'Serving Process on Military Bases in Oklahoma | Complete Guide',
          author: 'Joseph Iannazzi',
          datePublished: '2026-04-03',
          dateModified: '2026-04-03',
          image: 'https://justlegalsolutions.org/image-pack/images/image-077-guides-hero.png',
        }}
        keywords={['military base process serving', 'Fort Sill process server', 'Tinker AFB service of process', 'SCRA process serving']}
      />
      <Navbar />
      <main className="pt-20 pb-16">
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
            <span className="text-gray-900">Military Base Service</span>
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
