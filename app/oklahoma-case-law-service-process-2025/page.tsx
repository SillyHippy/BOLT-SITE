import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://justlegalsolutions.org/oklahoma-case-law-service-process',
  },
};

export default function RedirectPage() {
  redirect('/oklahoma-case-law-service-process');
}
