import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://justlegalsolutions.org/oklahoma-process-server-best-practices-checklist-2026',
  },
};

export default function RedirectPage() {
  redirect('/oklahoma-process-server-best-practices-checklist-2026');
}
