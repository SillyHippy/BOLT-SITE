import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Publication Timeline Calculator",
  description: "Calculate the timeline for service by publication in Oklahoma under 12 O.S. \u00A7 2004(C)(3).",
  alternates: {
    canonical: '/oklahoma-tools/publication-timeline-calculator',
  },
  openGraph: {
    url: '/oklahoma-tools/publication-timeline-calculator',
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
