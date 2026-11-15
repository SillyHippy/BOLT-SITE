import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Process Serving Cost Estimator",
  description: "Estimate the cost of process serving in any Oklahoma county. Get itemized pricing for service speed, additional defendants, and special conditions.",
  alternates: {
    canonical: '/oklahoma-tools/process-serving-cost-estimator',
  },
  openGraph: {
    url: '/oklahoma-tools/process-serving-cost-estimator',
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
