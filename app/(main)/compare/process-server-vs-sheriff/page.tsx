import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Process Server vs Sheriff',
  alternates: {
    canonical: 'https://justlegalsolutions.org/process-server-vs-sheriff',
  },
  robots: { index: false, follow: true },
};

/** Kimi swarm duplicate; canonical comparison lives at /process-server-vs-sheriff */
export default function CompareProcessServerVsSheriffRedirect() {
  redirect('/process-server-vs-sheriff');
}
