import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://justlegalsolutions.org/oklahoma-legal-service-areas',
  },
};

export default function RedirectPage() {
  redirect('/oklahoma-legal-service-areas');
}
