import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Cost Calculator — Oklahoma 2026 | Just Legal Solutions',
  description: 'Calculate your Oklahoma process server cost instantly. Enter your county, service type, and add-ons to get an estimated price range. Standard service base rate from $60. Call (539) 367-6832.',
  keywords: 'process server cost calculator oklahoma, how much does a process server cost, process serving price estimate, oklahoma process server rates, tulsa process server cost',
  alternates: { canonical: 'https://justlegalsolutions.org/cost-calculator' },
  openGraph: {
    title: 'Process Server Cost Calculator — Oklahoma 2026',
    description: 'Estimate your Oklahoma process serving cost instantly. Standard service base rate from $60. All 77 counties.',
    url: 'https://justlegalsolutions.org/cost-calculator',
    siteName: 'Just Legal Solutions',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-079-cost-calculator-card.webp', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function CostCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

