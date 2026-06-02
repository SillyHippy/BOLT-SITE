import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  openGraph: {
    title: 'Process Server vs Sheriff',
    description: 'Professional process serving in Oklahoma.',
    url: 'https://justlegalsolutions.org/compare/process-server-vs-sheriff',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp',
      width: 1200,
      height: 630,
      alt: 'Just Legal Solutions — professional process serving in Oklahoma',
    }],
  },
  title: 'Process Server vs Sheriff',
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server vs Sheriff',
    description: 'Professional process serving in Oklahoma.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/process-server-vs-sheriff',
  },
  robots: { index: false, follow: true },
};

/** Kimi swarm duplicate; canonical comparison lives at /process-server-vs-sheriff */
export default function CompareProcessServerVsSheriffRedirect() {
  redirect('/process-server-vs-sheriff');
}
