import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://justlegalsolutions.org/oklahoma-electronic-service-guide',
  },
};

export default function RedirectPage() {
  redirect('/oklahoma-electronic-service-guide');
}
