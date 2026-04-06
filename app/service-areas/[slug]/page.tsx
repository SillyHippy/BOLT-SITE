import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';
import MarkdownContent from '@/components/MarkdownContent';
import {
  getLocationSlugs,
  getLocationContent,
  extractTitle,
  extractDescription,
  extractFAQs,
  slugToLocationName,
} from '@/lib/markdown-utils';

export function generateStaticParams(): { slug: string }[] {
  return getLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getLocationContent(slug);
  const locationName = slugToLocationName(slug);
  const title =
    extractTitle(content) || `Process Server ${locationName} Oklahoma`;
  const description =
    extractDescription(content) ||
    `Licensed process server in ${locationName}, Oklahoma. Same-day service, GPS tracking, and court-ready documentation.`;

  return {
    title,
    description,
    authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
    openGraph: {
      title,
      description,
      url: `https://justlegalsolutions.org/service-areas/${slug}`,
      siteName: 'Just Legal Solutions',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://justlegalsolutions.org/og-image.png',
          width: 1200,
          height: 630,
          alt: `Just Legal Solutions - Process Server ${locationName} Oklahoma`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://justlegalsolutions.org/og-image.png'],
    },
    alternates: {
      canonical: `https://justlegalsolutions.org/service-areas/${slug}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getLocationContent(slug);
  const locationName = slugToLocationName(slug);
  const title =
    extractTitle(content) || `Process Server ${locationName} Oklahoma`;
  const description =
    extractDescription(content) ||
    `Licensed process server in ${locationName}, Oklahoma. Same-day service, GPS tracking, and court-ready documentation.`;
  const faqs = extractFAQs(content);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
    { name: locationName, url: `/service-areas/${slug}` },
  ];

  return (
    <>
      <UnifiedSchema
        pageType="location"
        pageTitle={title}
        pageDescription={description}
        pageUrl={`https://justlegalsolutions.org/service-areas/${slug}`}
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={[
          'Process Serving',
          'Legal Document Delivery',
          'Skip Tracing',
          'Courthouse Filing',
          'Mobile Notary',
        ]}
        breadcrumbs={breadcrumbItems}
        faqItems={faqs}
        location={{
          name: locationName,
          state: 'Oklahoma',
          region: locationName,
        }}
        keywords={[
          `process server ${locationName}`,
          `${locationName} process serving`,
          `serve papers ${locationName} Oklahoma`,
          'Oklahoma process server',
        ]}
      />
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="bg-gray-50 border-b border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-blue-600">
                  Service Areas
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-blue-600 font-medium">{locationName}</li>
            </ol>
          </div>
        </nav>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <MarkdownContent content={content} />
        </article>

        {/* CTA Bar */}
        <div className="bg-blue-600 text-white py-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Need a Process Server in {locationName}?
            </h2>
            <p className="mb-6 text-blue-100">
              Licensed &amp; bonded. Same-day service available. Call now for a
              free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5393676832"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                <Phone size={18} />
                (539) 367-6832
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                <MapPin size={18} />
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
