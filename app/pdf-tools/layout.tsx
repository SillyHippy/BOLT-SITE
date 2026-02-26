import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free PDF Tools for Legal Professionals | Just Legal Solutions',
  description: 'Free online PDF tools for legal professionals. Merge, split, compress, convert, and manage PDF documents for process serving and legal work.',
  alternates: {
    canonical: 'https://justlegalsolutions.org/pdf-tools',
  },
};

export default function PdfToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
