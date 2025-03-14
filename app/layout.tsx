import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Just Legal Solutions - Professional Process Serving Services',
  description: 'Comprehensive process serving services including secure document delivery, court-run transfers, skip tracing, and same-day delivery.',
  icons: {
    icon: [
      {
        url: '/Favicon/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/Favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/Favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/Favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/Favicon/safari-pinned-tab.svg',
        color: '#0B132B',
      },
    ],
  },
  manifest: '/Favicon/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Just Legal Solutions',
  },
  applicationName: 'Just Legal Solutions',
  themeColor: '#0B132B',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}