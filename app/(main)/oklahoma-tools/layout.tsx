import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    images: [
      {
        url: 'https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp',
        width: 1200,
        height: 630,
        alt: 'Oklahoma process serving tools from Just Legal Solutions',
      },
    ],
  },
};

export default function OklahomaToolsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
