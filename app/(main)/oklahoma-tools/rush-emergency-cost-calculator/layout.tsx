import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Rush & Emergency Cost Calculator",
  description: "Compare estimated costs for standard, rush, same-day, and emergency process serving across Oklahoma.",
  alternates: {
    canonical: '/oklahoma-tools/rush-emergency-cost-calculator',
  },
  openGraph: {
    url: '/oklahoma-tools/rush-emergency-cost-calculator',
    type: 'website',
    images: [
      {
        url: 'https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp',
        width: 1200,
        height: 630,
        alt: 'Oklahoma process serving tool',
      },
    ],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
