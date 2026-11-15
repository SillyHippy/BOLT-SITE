import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Service Deadline Calculator | Just Legal Solutions",
  description: "Calculate Oklahoma process serving deadlines based on your filing date. Account for court holidays and business days.",
  alternates: {
    canonical: '/oklahoma-tools/service-deadline-calculator',
  },
  openGraph: {
    url: '/oklahoma-tools/service-deadline-calculator',
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
