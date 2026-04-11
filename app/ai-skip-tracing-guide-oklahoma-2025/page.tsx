import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://justlegalsolutions.org/ai-skip-tracing-guide-oklahoma',
  },
};

export default function RedirectPage() {
  redirect('/ai-skip-tracing-guide-oklahoma');
}
