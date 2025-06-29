import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tulsa Process Server | Same-Day Legal Document Delivery | Just Legal Solutions',
  description: 'Professional process server in Tulsa, Oklahoma offering same-day service, rush delivery, and standard legal document serving. Serving Tulsa County, Broken Arrow, Glenpool, and surrounding areas.',
  keywords: [
    'Tulsa process server',
    'process server Tulsa Oklahoma', 
    'Tulsa County process serving',
    'Broken Arrow process server',
    'Glenpool process server',
    'same day process server Tulsa',
    'legal document delivery Tulsa',
    'summons service Tulsa',
    'divorce papers Tulsa',
    'eviction notice Tulsa'
  ],
  openGraph: {
    title: 'Tulsa Process Server - Same-Day Legal Document Delivery',
    description: 'Expert process serving in Tulsa, Oklahoma with same-day service available. Serving Tulsa County, Broken Arrow, Glenpool, and metro area.',
    url: 'https://justlegalsolutions.org/tulsa-process-server',
    images: [
      {
        url: '/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Tulsa Process Server Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Process Server in Tulsa, Oklahoma',
    description: 'Same-day legal document delivery throughout Tulsa County and metro area.',
    images: ['/images/jls-logo.webp']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/tulsa-process-server'
  }
};
