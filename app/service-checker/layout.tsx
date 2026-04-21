import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Can I Be Served? — Oklahoma Process Server Checker',
  description: 'Interactive 4-question test to find out if you can legally be served with civil process right now under Oklahoma law.',
  alternates: { canonical: 'https://justlegalsolutions.org/service-checker' },
  openGraph: {
    title: 'Can I Be Served? — Oklahoma Process Server Checker',
    description: 'Check if civil process can be legally served to you right now under Oklahoma law.',
    url: 'https://justlegalsolutions.org/service-checker',
    siteName: 'Just Legal Solutions',
    type: 'website',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-080-oklahoma-tools-hero.png', width: 1200, height: 630 }],
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export default function ServiceCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
