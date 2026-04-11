import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://justlegalsolutions.org/high-profile-service-protocols-tulsa',
  },
};

export default function RedirectPage() {
  redirect('/high-profile-service-protocols-tulsa');
}
