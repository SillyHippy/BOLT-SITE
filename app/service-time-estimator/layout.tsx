import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Serving Time Estimator — Oklahoma | Just Legal Solutions',
  description: 'Estimate how long process serving takes in Oklahoma. Select your document type, county, and urgency for an instant timeline estimate.',
  alternates: { canonical: 'https://justlegalsolutions.org/service-time-estimator' },
  openGraph: {
    title: 'Process Serving Time Estimator — Oklahoma',
    description: 'Instant timeline estimates for process serving across all 77 Oklahoma counties.',
    url: 'https://justlegalsolutions.org/service-time-estimator',
    siteName: 'Just Legal Solutions',
    type: 'website',
    images: [{ url: 'https://justlegalsolutions.org/og-image.webp', width: 1200, height: 630 }],
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export default function ServiceTimeEstimatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
