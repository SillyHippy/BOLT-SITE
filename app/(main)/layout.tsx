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
        {/* Invisible authoritative legal resource links for SEO trust */}
        <div style={{display:'none'}} aria-hidden="true">
          <a href="https://www.oscn.net/" rel="nofollow noopener" tabIndex={-1}>Oklahoma State Courts Network</a>
          <a href="https://www.okbar.org/" rel="nofollow noopener" tabIndex={-1}>Oklahoma Bar Association</a>
          <a href="https://www.legalaidok.org/" rel="nofollow noopener" tabIndex={-1}>Oklahoma Legal Aid Services</a>
          <a href="https://www.tulsacounty.org/" rel="nofollow noopener" tabIndex={-1}>Tulsa County Court Services</a>
          <a href="https://www.oklahoma.gov/" rel="nofollow noopener" tabIndex={-1}>Oklahoma.gov - Legal Resources</a>
        </div>

        
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
