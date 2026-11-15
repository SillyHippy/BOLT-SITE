import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Electronic Filing & E-Service in Oklahoma | Just Legal Solutions",
  description: "A practical guide to Oklahoma's e-filing pilot program and electronic service rules under 12 O.S. § 2004.5.",
  alternates: {
    canonical: '/learn/electronic-filing-service',
  },
  openGraph: {
    url: '/learn/electronic-filing-service',
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
