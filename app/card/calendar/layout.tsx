
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule a Consultation — Just Legal Solutions',
  description: 'Book a consultation appointment with Just Legal Solutions. Schedule process serving, notary, or legal support services across Oklahoma.',
  alternates: { canonical: 'https://justlegalsolutions.org/card/calendar' },
  openGraph: {
    title: 'Schedule a Consultation — Just Legal Solutions',
    description: 'Book your process serving or notary consultation appointment online.',
    url: 'https://justlegalsolutions.org/card/calendar',
    siteName: 'Just Legal Solutions',
    type: 'website',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-080-oklahoma-tools-hero.png', width: 1200, height: 630 }],
    locale: 'en_US',
  },
  robots: { index: false, follow: false },
};

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
