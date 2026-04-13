import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phone Consultation Reviews — Just Legal Solutions',
  description: 'Verified phone consultation reviews from Just Legal Solutions clients. See what Oklahoma process server clients say about our service.',
  alternates: { canonical: 'https://justlegalsolutions.org/reviews/phone' },
  openGraph: {
    title: 'Phone Consultation Reviews — Just Legal Solutions',
    description: 'Verified phone reviews from our process serving clients across Oklahoma.',
    url: 'https://justlegalsolutions.org/reviews/phone',
    siteName: 'Just Legal Solutions',
    type: 'website',
    images: [{ url: 'https://justlegalsolutions.org/og-image.webp', width: 1200, height: 630 }],
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export default function PhoneReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
