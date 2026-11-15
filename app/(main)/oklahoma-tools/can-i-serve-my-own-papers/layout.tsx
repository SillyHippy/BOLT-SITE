import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Can I Serve My Own Papers? | Just Legal Solutions",
  description: "Interactive decision tree to determine whether you can serve your own legal papers in Oklahoma under 12 O.S. \u00A7 2004.",
  alternates: {
    canonical: '/oklahoma-tools/can-i-serve-my-own-papers',
  },
  openGraph: {
    url: '/oklahoma-tools/can-i-serve-my-own-papers',
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
