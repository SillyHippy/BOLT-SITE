import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SMS Verified Reviews — Just Legal Solutions',
  description: 'SMS-verified client reviews for Just Legal Solutions process serving. Real feedback from real clients across Oklahoma.',
  alternates: { canonical: 'https://justlegalsolutions.org/reviews/text' },
  openGraph: {
    title: 'SMS Verified Reviews — Just Legal Solutions',
    description: 'Text message verified reviews from our process serving clients across Oklahoma.',
    url: 'https://justlegalsolutions.org/reviews/text',
    siteName: 'Just Legal Solutions',
    type: 'website',
    images: [{ url: 'https://justlegalsolutions.org/og-image.webp', width: 1200, height: 630 }],
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export default function TextReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
