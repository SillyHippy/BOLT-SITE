import React from 'react';
import { Metadata } from 'next';
import AffidavitOfService from '@/components/AffidavitOfService';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Affidavit & Declaration of Service Generator (50-State Compliant)',
  description:
    'Free nationwide legal document generator for process servers and attorneys. Create court-ready Affidavits of Service (Notarized), Declarations of Service (Unsworn under penalty of perjury), and Affidavits/Declarations of Non-Service.',
  keywords: [
    'affidavit of service',
    'declaration of service',
    'affidavit of non-service',
    'declaration of non-service',
    'proof of service form',
    'oklahoma affidavit of service form',
    'nationwide affidavit of service',
    'unsworn declaration of service',
    'process server affidavit',
    'service of process return',
    'tulsa affidavit of service',
    'due diligence non-service form',
  ],
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: 'Affidavit & Declaration of Service Generator (50-State Compliant)',
    description:
      'Create court-ready Affidavits of Service (Notarized), Declarations of Service (Unsworn penalty of perjury), and Non-Service due diligence forms.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-060-affidavit-of-service-og.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/affidavit-of-service',
  },
  openGraph: {
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-060-affidavit-of-service-og.png',
      width: 1200,
      height: 630,
      alt: 'Just Legal Solutions — professional process serving and legal document tools',
    }],
    title: 'Affidavit & Declaration of Service Generator (50-State Compliant)',
    description:
      'Professional Affidavit and Declaration of Service generator for process servers, attorneys, and legal professionals. Fill on mobile or desktop, print, or save to PDF.',
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
        title="Affidavit & Declaration of Service Generator | Just Legal Solutions"
        description="Generate and print court-ready Affidavits of Service, Declarations of Service, and Due Diligence Non-Service documents for all 50 states."
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Affidavit & Declaration of Service', item: 'https://justlegalsolutions.org/affidavit-of-service' }
        ]}
      />
      <div className="affidavit-wrapper bg-slate-950/90 py-6 sm:py-8 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 pb-2 no-print-affidavit text-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Nationwide Affidavit &amp; Declaration Generator
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto">
            Easily generate court-admissible returns of service for all 50 states. Choose between a sworn 
            <strong className="text-white"> Affidavit (Notarized)</strong> or an unsworn 
            <strong className="text-white"> Declaration (Penalty of Perjury)</strong> for both completed service and diligent non-service.
          </p>
        </div>
        <AffidavitOfService />
      </div>
    </>
  );
}
