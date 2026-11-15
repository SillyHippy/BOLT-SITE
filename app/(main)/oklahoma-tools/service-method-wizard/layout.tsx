import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Service Method Wizard | Just Legal Solutions",
  description: "Answer 5 questions to find the right Oklahoma process serving method for your specific situation.",
  alternates: {
    canonical: '/oklahoma-tools/service-method-wizard',
  },
  openGraph: {
    url: '/oklahoma-tools/service-method-wizard',
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
