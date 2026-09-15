import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Just Legal Solutions Reviews | Oklahoma Process Server',
  description: 'Verified Google, phone, email, and survey reviews for Just Legal Solutions process serving across Oklahoma.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/reviews',
  },
  openGraph: {
    title: 'Just Legal Solutions Reviews | Oklahoma Process Server',
    description: 'Verified reviews for Oklahoma process serving by Just Legal Solutions.',
    url: '/reviews',
    type: 'website',
    images: [
      {
        url: 'https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions Oklahoma process server reviews',
      },
    ],
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
