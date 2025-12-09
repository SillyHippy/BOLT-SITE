'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// Your Google Apps Script deployment URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwkYzKCdBUhcg0VsZ8KlsFjlXFpHA09I5q2cRL5F9KmJYdUd17XOaqXCrnW3WJDjC-e/exec';

function PortalContent() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get('case');
  const key = searchParams.get('key');
  
  if (!caseId || !key) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1e3a5f] to-[#0d1b2a] flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-8 max-w-md text-center shadow-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Invalid Portal Link</h1>
          <p className="text-gray-600 mb-6">
            Please use the link provided in your confirmation email to access your case portal.
          </p>
          <a 
            href="mailto:info@justlegalsolutions.org"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a5f] to-[#0d1b2a] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 max-w-md text-center shadow-2xl">
        <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
        <h1 className="text-xl font-semibold text-gray-800 mb-2">Opening Your Portal</h1>
        <p className="text-gray-600">Redirecting to your secure case portal...</p>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a5f] to-[#0d1b2a] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 max-w-md text-center shadow-2xl">
        <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
        <h1 className="text-xl font-semibold text-gray-800 mb-2">Loading...</h1>
        <p className="text-gray-600">Please wait...</p>
      </div>
    </div>
  );
}

export default function PortalRedirect() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PortalContent />
    </Suspense>
  );
}
