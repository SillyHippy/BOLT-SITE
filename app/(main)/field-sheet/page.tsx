import React from 'react';
import { Metadata } from 'next';
import FieldSheet from '@/components/FieldSheet';

export const metadata: Metadata = {
  title: 'Field Sheet Generator | Just Legal Solutions',
  description:
    'Generate and print professional process server field sheets for Oklahoma service of process. Fill in case details, service locations, and field notes — then print or save as PDF.',
  keywords: [
    'process server field sheet',
    'field sheet template',
    'oklahoma process serving form',
    'service of process form',
    'process server paperwork',
    'tulsa process server field sheet',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Field Sheet Generator | Just Legal Solutions',
    description:
      'Professional field sheet generator for Oklahoma process servers. Fill, print, or save to PDF.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/field-sheet',
    siteName: 'Just Legal Solutions',
  },
};

export default function FieldSheetPage() {
  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-4 no-print-field-sheet">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-1">
          Field Sheet Generator
        </h1>
        <p className="text-center text-gray-600 text-sm mb-4">
          Fill in the details below, then print or save as PDF for your records.
        </p>
      </div>
      <FieldSheet />
    </div>
  );
}
