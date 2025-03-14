import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Just Legal Solutions - Professional Process Serving Services',
  description: 'Comprehensive process serving services including secure document delivery, court-run transfers, skip tracing, and same-day delivery.',
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
  manifest: '/Favicon/site.webmanifest'
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