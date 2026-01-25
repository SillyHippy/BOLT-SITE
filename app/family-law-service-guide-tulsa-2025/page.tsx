'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectToCurrentFamilyLaw() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/family-law-service-guide-tulsa');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to current family law service guide...</p>
        <p className="text-sm text-gray-400 mt-2">If not redirected, <a href="/family-law-service-guide-tulsa" className="text-blue-600 underline">click here</a></p>
      </div>
    </div>
  );
}
