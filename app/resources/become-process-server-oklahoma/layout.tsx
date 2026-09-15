import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'How to Become a Process Server in Oklahoma',
  description: 'Licensing, CLEET, HB 1162, and practical steps to become an Oklahoma process server.',
  alternates: { canonical: '/resources/become-process-server-oklahoma' },
  openGraph: {
    title: 'How to Become a Process Server in Oklahoma',
    url: '/resources/become-process-server-oklahoma',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp',
        width: 1200,
        height: 630,
        alt: 'Become an Oklahoma process server',
      },
    ],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
