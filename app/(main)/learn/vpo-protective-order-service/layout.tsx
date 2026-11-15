import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "VPO & Protective Order Service in Oklahoma",
  description: "Learn how Victim Protective Orders are filed, served, and enforced in Oklahoma. Covers the 24-hour priority service rule, the service process, what happens",
  alternates: {
    canonical: '/learn/vpo-protective-order-service',
  },
  openGraph: {
    url: '/learn/vpo-protective-order-service',
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
