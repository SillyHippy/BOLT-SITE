import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PerformanceOptimizer } from '@/components/ui/performance-optimizer';
import { CriticalCSS } from '@/components/ui/critical-css-inline';
import { MobileOptimizer } from '@/components/ui/mobile-optimizer';
import { MobilePerformanceBoost } from '@/components/ui/mobile-performance-boost';
import { ServiceWorkerRegistration } from '@/components/ui/service-worker-registration';
import { WebsiteSchema } from '@/components/ui/website-schema';
import { ClickOptimization } from '@/components/ui/ClickOptimization';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '700'],
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://justlegalsolutions.org/'),
  title: {
    default: 'Just Legal Solutions - Process Serving Oklahoma',
    template: '%s | Just Legal Solutions',
  },
  description: 'Expert process server serving Tulsa, Broken Arrow, Sapulpa, Glenpool & Oklahoma. Same day, rush & standard service options.',
  keywords: [
    'Process server Tulsa County', 'process server Broken Arrow', 'process server Sapulpa', 'legal document delivery',
    'court transfers Oklahoma', 'skip tracing services', 'Oklahoma process server', 'Tulsa County legal services',
    'Broken arrow legal services', 'Sapulpa process serving', 'Wagoner County process serving', 'Creek County process serving',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jls-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/jls-logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <CriticalCSS />
      </head>
      <body>
        <ClickOptimization />
        <ServiceWorkerRegistration />
        <MobileOptimizer />
        <PerformanceOptimizer />
        <MobilePerformanceBoost />
        <WebsiteSchema />
        {children}
      </body>
    </html>
  );
}
