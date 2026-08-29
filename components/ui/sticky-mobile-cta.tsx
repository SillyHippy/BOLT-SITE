'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show after scrolling 300px
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Do not render on legal generator/document tool pages
  if (pathname && (pathname.includes('/affidavit-of-service') || pathname.includes('/affidavit'))) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 print:hidden no-print no-print-affidavit ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-label="Call or contact Just Legal Solutions"
    >
      <div className="bg-gray-900 border-t border-gray-700 px-3 py-3 flex items-center gap-2">
        <a
          href="tel:5393676832"
          className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-gray-900 font-bold py-3 rounded-xl text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500"
        >
          📞 Call Now
        </a>
        <a
          href="sms:5393676832"
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 rounded-xl text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400"
        >
          💬 Text Us
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 rounded-xl text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
        >
          📋 Quote
        </Link>
      </div>
      <div className="bg-gray-900 text-center pb-safe">
        <p className="text-gray-400 text-xs pb-1">(539) 367-6832 · From $60 · Same-Day Available</p>
      </div>
    </div>
  );
}
