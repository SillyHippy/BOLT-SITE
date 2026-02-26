import React from 'react';
import { Metadata } from 'next';
import AffidavitOfService from '@/components/AffidavitOfService';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Affidavit of Service Generator',
  description:
    'Generate and print professional Affidavit of Service or Non-Service forms for Oklahoma process serving. Fill in case details, manner of service, and notary — then print or save as PDF.',
  keywords: [
    'affidavit of service',
    'affidavit of non-service',
    'oklahoma affidavit of service form',
    'process server affidavit',
    'service of process affidavit',
    'tulsa affidavit of service',
    'proof of service form',
  ],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://justlegalsolutions.org/affidavit-of-service',
  },
  openGraph: {
    title: 'Affidavit of Service Generator',
    description:
      'Professional Affidavit of Service generator for Oklahoma process servers. Fill, print, or save to PDF.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/affidavit-of-service',
    siteName: 'Just Legal Solutions',
  },
};

export default function AffidavitOfServicePage() {
  return (
    <>
      <UnifiedSchema
        pageType="generic"
        url="https://justlegalsolutions.org/affidavit-of-service"
        title="Affidavit of Service Generator | Just Legal Solutions"
        description="Generate and print professional Affidavit of Service or Non-Service forms for Oklahoma process serving."
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Affidavit of Service', item: 'https://justlegalsolutions.org/affidavit-of-service' }
        ]}
      />
    <div className="affidavit-wrapper" style={{ backgroundColor: '#555', minHeight: '100vh', paddingBottom: 40 }}>
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-4 no-print-affidavit">
        <h1 className="text-3xl font-bold text-center text-white mb-1">
          Affidavit of Service Generator
        </h1>
        <p className="text-center text-gray-300 text-sm mb-4">
          Fill in the details below, then print or save as PDF for your records.
        </p>
      </div>
      <AffidavitOfService />
    </div>
    </>
  );
}
