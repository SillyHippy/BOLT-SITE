import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import MarkdownContent from '@/components/MarkdownContent';
import {
  getCountySlugs,
  getCountyContent,
  extractTitle,
  extractDescription,
  extractFAQs,
  generateCountyFAQs,
  slugToCountyName,
} from '@/lib/markdown-utils';
import { getCountyData } from '@/lib/county-data';

export function generateStaticParams(): { slug: string }[] {
  return getCountySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const countyName = slugToCountyName(slug);
  const title = `${countyName} Process Server OK | Licensed & Bonded`;
  const description = `Licensed and bonded process server in ${countyName}, Oklahoma. Standard, rush, and same-day service with GPS-tracked attempts and notarized affidavits. See current rates at /pricing. Call (539) 367-6832.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://justlegalsolutions.org/counties/${slug}`,
      siteName: 'Just Legal Solutions',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://justlegalsolutions.org/image-pack/images/image-085-counties-hero.png',
          width: 1920,
          height: 1080,
          alt: 'Oklahoma prairie landscape with red dirt roads and vast sky at golden hour',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://justlegalsolutions.org/image-pack/images/image-085-counties-hero.png'],
    },
    alternates: {
      canonical: `https://justlegalsolutions.org/counties/${slug}`,
    },
  };
}

export default async function CountyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = getCountyContent(slug);
  const countyName = slugToCountyName(slug);
  const title = extractTitle(content) || `${countyName} Process Server`;
  const description =
    extractDescription(content) ||
    `Licensed process server throughout ${countyName}, Oklahoma. Same-day service available.`;
  const mdFaqs = extractFAQs(content);
  const countyDatum = getCountyData(slug);
  const generatedFaqs = countyDatum
    ? generateCountyFAQs(
        countyDatum.countyName,
        countyDatum.countySeat,
        countyDatum.courthouseAddress
      )
    : [];
  const seenQuestions = new Set<string>();
  const faqs = [...mdFaqs, ...generatedFaqs].filter((f) => {
    const key = f.question.toLowerCase().trim();
    if (seenQuestions.has(key)) return false;
    seenQuestions.add(key);
    return true;
  });

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Counties', url: '/counties' },
    { name: countyName, url: `/counties/${slug}` },
  ];

  return (
    <>
      <UnifiedSchema
        pageType="location"
        image="https://justlegalsolutions.org/images/jls-logo.webp"
        pageTitle={title}
        pageDescription={description}
        pageUrl={`https://justlegalsolutions.org/counties/${slug}`}
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Process Serving', 'Legal Document Delivery', 'Skip Tracing', 'Courthouse Filing']}
        breadcrumbs={breadcrumbItems}
        faqItems={faqs}
        location={{
          name: countyName,
          state: 'Oklahoma',
          region: countyName,
        }}
        keywords={[
          `process server ${countyName}`,
          `${countyName} process serving`,
          `serve papers ${countyName} Oklahoma`,
          'Oklahoma process server',
        ]}
      />
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
                <Link href="/counties" className="hover:text-blue-600">
                  Counties
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-gray-900 font-medium">{countyName}</li>
            </ol>
          </div>
        </nav>

        {/* Content */}
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <MarkdownContent content={content} />
        </article>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need a Process Server in {countyName}?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Professional, licensed process serving throughout {countyName},
              Oklahoma. Same-day and rush service available.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+15393676832"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5" />
                (539) 367-6832
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <MapPin className="h-5 w-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
