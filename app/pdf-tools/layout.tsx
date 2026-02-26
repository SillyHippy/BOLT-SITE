import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free PDF Tools for Legal Professionals',
  description: 'Free online PDF tools for legal professionals. Merge, split, compress, convert, and manage PDF documents for process serving and legal work.',
  alternates: {
    canonical: 'https://justlegalsolutions.org/pdf-tools',
  },
  openGraph: {
    title: 'Free PDF Tools for Legal Professionals',
    description: 'Free online PDF tools for legal professionals. Merge, split, compress, convert, and manage PDF documents for process serving and legal work.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/pdf-tools',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free PDF Tools - Just Legal Solutions',
      },
    ],
  },
};

export default function PdfToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
