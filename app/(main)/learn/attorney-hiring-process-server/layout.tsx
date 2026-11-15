import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Attorney's Guide to Hiring a Process Server in Oklahoma",
  description: "A vendor-neutral guide for Oklahoma attorneys on how to hire a licensed process server. Covers license verification, key questions to ask, red flags to avo",
  alternates: {
    canonical: '/learn/attorney-hiring-process-server',
  },
  openGraph: {
    url: '/learn/attorney-hiring-process-server',
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
