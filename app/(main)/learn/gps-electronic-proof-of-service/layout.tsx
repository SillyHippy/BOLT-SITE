import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "GPS & Electronic Proof of Service | Just Legal Solutions",
  description: "Learn why GPS documentation matters for process servers, what Oklahoma courts accept as proof of service, metadata requirements, photo best practices, and ",
  alternates: {
    canonical: '/learn/gps-electronic-proof-of-service',
  },
  openGraph: {
    url: '/learn/gps-electronic-proof-of-service',
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
