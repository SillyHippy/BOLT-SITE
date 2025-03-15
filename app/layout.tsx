import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const basePath = process.env.NODE_ENV === 'production' ? '/BOLT-SITE' : '';

export const metadata: Metadata = {
  metadataBase: new URL('https://justlegalsolutions.org'),
  title: {
    template: '%s | Just Legal Solutions',
    default: 'Just Legal Solutions - Professional Process Serving Services in Tulsa'
  },
  description: 'Professional process serving, secure document delivery, court-run transfers, skip tracing, and same-day delivery services in Tulsa, Oklahoma. Licensed and experienced process servers.',
  keywords: ['process server', 'legal services', 'document delivery', 'court services', 'skip tracing', 'Tulsa', 'Oklahoma', 'same day service'],
  authors: [{ name: 'Joseph Iannazzi' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  formatDetection: {
    email: false,
    address: true,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org',
    siteName: 'Just Legal Solutions',
    title: 'Just Legal Solutions - Professional Process Serving Services in Tulsa',
    description: 'Professional process serving, secure document delivery, court-run transfers, skip tracing, and same-day delivery services in Tulsa, Oklahoma.',
    images: [
      {
        url: `${basePath}/images/jls-logo.webp`,
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Just Legal Solutions - Professional Process Serving Services in Tulsa',
    description: 'Professional process serving, secure document delivery, court-run transfers, skip tracing, and same-day delivery services in Tulsa, Oklahoma.',
    images: [`${basePath}/images/jls-logo.webp`],
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
  icons: {
    icon: [
      {
        url: `${basePath}/Favicon/favicon-96x96.png`,
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: `${basePath}/Favicon/favicon.svg`,
        type: 'image/svg+xml',
      },
      {
        url: `${basePath}/Favicon/favicon.ico`,
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    apple: [
      {
        url: `${basePath}/Favicon/apple-touch-icon.png`,
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: `${basePath}/Favicon/site.webmanifest`,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'JLS',
  },
  applicationName: 'Just Legal Solutions',
  themeColor: '#0B132B',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'add-your-google-site-verification-here',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org'
  },
  category: 'Legal Services'
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
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}