import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import DynamicBreadcrumbSchema from '@/components/ui/dynamic-breadcrumb-schema';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="pt-14 flex-grow">
        {children}


        {/* Base Breadcrumb Schema for homepage */}
        <DynamicBreadcrumbSchema
          items={[
            { name: "Home", url: "/" }
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
