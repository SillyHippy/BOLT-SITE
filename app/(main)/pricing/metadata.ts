import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tulsa Process Server Pricing & Rates',
  description: 'Transparent pricing for process serving in Tulsa County, Broken Arrow (Wagoner County), and Sapulpa (Creek County). Standard service starts at $60, rush $100, same-day $150. Statewide service available with surcharge.',
  keywords: ['Tulsa process server rates', 'Tulsa County legal service pricing', 'Broken Arrow process server cost', 'Sapulpa document delivery rates', 'Wagoner County process serving', 'Creek County legal services'],
  openGraph: {
    title: 'Tulsa Process Server Pricing & Rates | Just Legal Solutions',
    description: 'Affordable process serving rates in Tulsa County, Broken Arrow, and Sapulpa. Standard $60, Rush $100, Same-day $150. Statewide service with surcharge.',
    url: 'https://justlegalsolutions.org/pricing',
    images: [
      {
        url: '/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions Pricing Information'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing & Rates | Just Legal Solutions',
    description: 'Transparent pricing for process serving, document delivery, court transfers, and skip tracing services in Oklahoma.',
    images: ['/images/jls-logo.webp']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/pricing'
  }
};
