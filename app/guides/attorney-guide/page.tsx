import { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
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
  const contentDir = join(process.cwd(), 'seo-content');
  const content = readFileSync(join(contentDir, 'attorney-guide.md'), 'utf-8');

  return (
    <>
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
