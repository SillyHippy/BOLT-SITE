import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://justlegalsolutions.org/family-law-service-guide-tulsa',
  },
};

export default function RedirectPage() {
  redirect('/family-law-service-guide-tulsa');
}
