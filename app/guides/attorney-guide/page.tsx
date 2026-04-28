import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Phone } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';
import MarkdownContent from '@/components/MarkdownContent';
import { readFileSync } from 'fs';
import { join } from 'path';

export const metadata: Metadata = {
  title: 'Process Serving for Oklahoma Attorneys | What You Need to Know',
  description:
    'Complete guide for Oklahoma attorneys on selecting, working with, and depending on professional process servers. Avoid common mistakes and protect your cases.',
  openGraph: {
    title: 'Process Serving for Oklahoma Attorneys | What You Need to Know',
    description:
      'Complete guide for Oklahoma attorneys on selecting, working with, and depending on professional process servers. Avoid common mistakes and protect your cases.',
    url: 'https://justlegalsolutions.org/guides/attorney-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Serving for Oklahoma Attorneys | What You Need to Know',
    description:
      'Complete guide for Oklahoma attorneys on selecting, working with, and depending on professional process servers. Avoid common mistakes and protect your cases.',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/guides/attorney-guide',
  },
};

export default function AttorneyGuidePage() {
  const contentDir = join(process.cwd(), 'content');
  const content = readFileSync(join(contentDir, 'attorney-guide.md'), 'utf-8');

  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Process Serving for Oklahoma Attorneys | What You Need to Know"
        pageDescription="Complete guide for Oklahoma attorneys on selecting, working with, and depending on professional process servers."
        pageUrl="https://justlegalsolutions.org/guides/attorney-guide"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Process Serving', 'Legal Document Delivery', 'Skip Tracing']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides' },
          { name: 'Attorney Guide', url: '/guides/attorney-guide' },
        ]}
        articleDetails={{
          headline: 'Process Serving for Oklahoma Attorneys | What You Need to Know',
          author: 'Joseph Iannazzi',
          datePublished: '2026-04-03',
          dateModified: '2026-04-03',
          image: 'https://justlegalsolutions.org/image-pack/images/image-077-guides-hero.webp',
        }}
        keywords={['process server for attorneys', 'Oklahoma attorney process serving guide', 'hire process server Oklahoma']}
      />
      <Script
        type="application/ld+json"
        id="howto-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'What to Do When Process Service Fails',
            description: 'Step-by-step guide for Oklahoma attorneys on handling failed process service, from documenting attempts to filing motions for alternative service.',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Document All Service Attempts',
                text: 'Ensure your process server provides detailed logs of every attempt including dates, times, locations, descriptions of premises, and any interactions. Collect photographs of locations, vehicle descriptions, and witness observations to strengthen your motion for alternative service.',
                position: 1
              },
              {
                '@type': 'HowToStep',
                name: 'Conduct Skip Tracing and Investigation',
                text: 'Before abandoning traditional service, use skip tracing services including database searches, social media investigation, and public records review to locate current addresses. A small additional investment in investigation may succeed where repeated attempts at outdated addresses fail.',
                position: 2
              },
              {
                '@type': 'HowToStep',
                name: 'Explore Alternative Service Options',
                text: 'Oklahoma courts recognize several alternative service methods when personal service proves impossible, including service by certified mail with return receipt, publication in newspapers, or service on designated agents. Each method has specific procedural requirements and evidentiary standards.',
                position: 3
              },
              {
                '@type': 'HowToStep',
                name: 'File a Motion for Alternative Service',
                text: 'When you have exhausted reasonable attempts, file a motion for alternative service with the court. This requires affidavits documenting your efforts, explaining why standard service failed, and proposing an alternative method. Work with your process server to prepare a comprehensive affidavit that satisfies judicial scrutiny.',
                position: 4
              },
              {
                '@type': 'HowToStep',
                name: 'Protect Your Client Interests',
                text: 'Communicate transparently with clients about service challenges, additional costs, and timeline adjustments. Be aware that statutes of limitation may run and temporary orders may expire. Consider whether aggressive skip tracing or adjusting litigation strategy is the best approach.',
                position: 5
              }
            ]
          })
        }}
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
            <span className="text-gray-900">Attorney Guide</span>
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
