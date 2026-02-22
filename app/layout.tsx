import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Image from 'next/image';
import React from 'react';
import StaticSiteOptimizer from '@/components/StaticSiteOptimizer';
import WebsiteSchema from '@/components/ui/website-schema';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '700'],
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
});
export const metadata: Metadata = {
  metadataBase: new URL('https://justlegalsolutions.org'),
  title: {
    default: 'Just Legal Solutions - Process Serving Oklahoma',
    template: '%s | Just Legal Solutions'
  },
  description: 'Expert process server starting $30 serving Tulsa, Broken Arrow, Sapulpa, Glenpool & Oklahoma. Same-day, rush & standard service options.',
  keywords: [
    'process server starting $30 Tulsa County', 'process server starting $30 Broken Arrow', 'process server starting $30 Sapulpa', 'legal document delivery',
    'court transfers Oklahoma', 'skip tracing services', 'Oklahoma process server starting $30', 'Tulsa County legal services',
    'Broken Arrow legal services', 'Sapulpa process serving', 'Wagoner County process server starting $30', 'Creek County process serving',
    'same day process serving', 'rush process serving', 'statewide process server starting $30 Oklahoma', 'legal support services',
    'document serving Tulsa', 'court document delivery', 'process server starting $30 near me', 'Oklahoma legal services',
    'divorce papers served', 'summons delivery', 'subpoena service', 'eviction notice service', 'court filing assistance'
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
    url: 'https://justlegalsolutions.org/',
    title: 'Just Legal Solutions - Professional Process Serving in Oklahoma',
    description: 'Expert process serving in Tulsa County, Broken Arrow, and Sapulpa. Same-day, rush, and standard service options available.',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Serving in Oklahoma'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Just Legal Solutions - Professional Process Serving in Oklahoma',
    description: 'Expert process serving in Tulsa County, Broken Arrow, and Sapulpa. Same-day, rush, and standard service options.',
    images: ['https://justlegalsolutions.org/og-image.png'] 
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
  alternates: {
    canonical: 'https://justlegalsolutions.org/'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#0B132B'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <meta name="cache-version" content="2026-01-25-v11-year-update" />
        
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-984ZD882EX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-984ZD882EX', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: false,
              cookie_flags: 'SameSite=None;Secure',
              anonymize_ip: true
            });
          `}
        </Script>
        {/* Simple Analytics - 100% privacy-first analytics */}
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" data-collect-dnt="true" strategy="afterInteractive" />
        
        {/* LLM Discovery - Legitimate emerging standard */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Information" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Extended LLM Information" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <StaticSiteOptimizer />
        <WebsiteSchema />
        {/* Simple Analytics noscript fallback */}
        <noscript>
          <Image 
            src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true" 
            alt="" 
            width={1}
            height={1}
            style={{ display: 'none' }}
            unoptimized
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
