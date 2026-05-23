"use client";

import { useEffect } from "react";
import Link from "next/link";
import UnifiedSchema from '@/components/UnifiedSchema';

export default function TulsaServiceAreaRedirectPage() {
  useEffect(() => {
    window.location.replace("/tulsa-process-server");
  }, []);

  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Tulsa Service Area"
        pageDescription="Tulsa Service Area — Just Legal Solutions, Oklahoma process server and legal support services."
        pageUrl="https://justlegalsolutions.org/service-areas/tulsa"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tulsa Service Area', url: '/service-areas/tulsa' },
        ]}
      />
    <main className="min-h-[50vh] flex items-center justify-center px-6 py-16 text-center">
      <div className="max-w-xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Tulsa Service Area</h1>
        <p className="text-gray-600 mb-6">
          Redirecting to our main Tulsa page.
        </p>
        <Link
          href="/tulsa-process-server"
          className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Continue to Tulsa Process Server
        </Link>
      </div>
    </main>
    </>
  );
}
