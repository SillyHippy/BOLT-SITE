import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { organizationSchema } from '@/components/ui/schema';
import { faqSchema } from '@/components/ui/faq-schema';
import { PerformanceOptimizer } from '@/components/ui/performance-optimizer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://justlegalsolutions.org'),
  title: {
    template: '%s | Just Legal Solutions',
    default: 'Just Legal Solutions - Process Serving Oklahoma'
  },
  description: 'Expert process serving in Tulsa County, Broken Arrow (Wagoner County), and Sapulpa (Creek County). Same-day, rush, and standard service with statewide Oklahoma coverage. Starting at $60.',
  keywords: [
    'process server', 'legal services', 'document delivery', 'court transfers', 'skip tracing', 
    'Oklahoma process server', 'Tulsa County process server', 'Broken Arrow process server', 
    'Sapulpa process server', 'Wagoner County legal services', 'Creek County process serving',
    'legal support', 'same day service', 'rush service', 'statewide coverage'
  ],
  authors: [{ name: 'Joseph Iannazzi' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/Favicon/favicon.ico' },
      { url: '/Favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/Favicon/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/Favicon/favicon.svg',
        color: '#0B132B'
      }
    ]
  },
  manifest: '/Favicon/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org',
    title: 'Just Legal Solutions - Professional Process Serving in Oklahoma',
    description: 'Expert process serving in Tulsa County, Broken Arrow, and Sapulpa. Same-day service available. Standard rates apply to Tulsa County and select parts of Creek County & Wagoner County.',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Just Legal Solutions - Professional Process Serving in Oklahoma',
    description: 'Expert process serving in Tulsa County, Broken Arrow, and Sapulpa. Same-day service available starting at $60.',
    images: ['/images/jls-logo.webp']
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
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://justlegalsolutions.org" />
        <link rel="preload" href="/images/hero.webp" as="image" />
        <link rel="preload" href="/Favicon/favicon.ico" as="image" type="image/x-icon" />
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <meta name="cache-version" content="2025-06-28-v2" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-984ZD882EX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-984ZD882EX');
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <PerformanceOptimizer />
        {children}
      </body>
    </html>
  );
}