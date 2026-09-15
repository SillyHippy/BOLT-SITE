import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Future of Process Serving in Oklahoma',
  description: 'E-filing, electronic service, and industry trends for Oklahoma process serving.',
  alternates: { canonical: '/resources/future-of-process-serving' },
  openGraph: {
    title: 'Future of Process Serving in Oklahoma',
    url: '/resources/future-of-process-serving',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp',
        width: 1200,
        height: 630,
        alt: 'Future of process serving in Oklahoma',
      },
    ],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
