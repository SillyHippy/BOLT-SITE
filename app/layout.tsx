import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const basePath = process.env.NODE_ENV === 'production' ? '/BOLT-SITE' : '';

export const metadata: Metadata = {
  title: 'Just Legal Solutions - Professional Process Serving Services',
  description: 'Comprehensive process serving services including secure document delivery, court-run transfers, skip tracing, and same-day delivery.',
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