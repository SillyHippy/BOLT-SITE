import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Eviction Service of Process in Oklahoma",
  description: "A step-by-step guide to Oklahoma eviction service of process. Covers the 14-day compressed timeline, notice requirements, who can serve eviction papers, co",
  alternates: {
    canonical: '/learn/eviction-service-guide',
  },
  openGraph: {
    url: '/learn/eviction-service-guide',
    type: 'website',
    images: [
      {
        url: 'https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp',
        width: 1200,
        height: 630,
        alt: 'Oklahoma process serving guide',
      },
    ],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
