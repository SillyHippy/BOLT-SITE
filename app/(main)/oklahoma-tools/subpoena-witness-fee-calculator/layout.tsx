import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Subpoena Witness Fee Calculator",
  description: "Calculate witness fees and mileage reimbursement for subpoenaed witnesses in Oklahoma under 28A O.S. \u00A7 28-81.",
  alternates: {
    canonical: '/oklahoma-tools/subpoena-witness-fee-calculator',
  },
  openGraph: {
    url: '/oklahoma-tools/subpoena-witness-fee-calculator',
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
