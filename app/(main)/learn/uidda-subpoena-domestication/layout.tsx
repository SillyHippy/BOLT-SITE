import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "UIDDA Subpoena Domestication in Oklahoma | Just Legal Solutions",
  description: "A complete guide to domesticating out-of-state subpoenas under the Uniform Interstate Depositions and Discovery Act.",
  alternates: {
    canonical: '/learn/uidda-subpoena-domestication',
  },
  openGraph: {
    url: '/learn/uidda-subpoena-domestication',
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
