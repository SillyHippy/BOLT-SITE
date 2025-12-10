import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Options - Just Legal Solutions | Secure Payment Methods',
  description: 'Secure and convenient payment options for legal services. Accept cash, check, money orders, and electronic payments. New clients require payment in advance.',
  keywords: ['legal services payment', 'process server payment', 'online payment', 'Oklahoma legal services payment'],
  alternates: {
    canonical: 'https://justlegalsolutions.org/payments'
  },
  openGraph: {
    title: 'Payment Options | Just Legal Solutions',
    description: 'Secure and convenient payment options for legal services. Accept cash, check, money orders, and electronic payments.',
    url: 'https://justlegalsolutions.org/payments',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions Payment Options'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payment Options | Just Legal Solutions', 
    description: 'Secure and convenient payment options for legal services.',
    images: ['https://justlegalsolutions.org/images/jls-logo.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};
