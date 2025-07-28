import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        {children}
        {/* Invisible authoritative legal resource links for SEO trust */}
        <div style={{display:'none'}}>
          <a href="https://www.oscn.net/" rel="nofollow noopener">Oklahoma State Courts Network</a>
          <a href="https://www.okbar.org/" rel="nofollow noopener">Oklahoma Bar Association</a>
          <a href="https://www.legalaidok.org/" rel="nofollow noopener">Oklahoma Legal Aid Services</a>
          <a href="https://www.tulsacounty.org/" rel="nofollow noopener">Tulsa County Court Services</a>
          <a href="https://www.oklahoma.gov/" rel="nofollow noopener">Oklahoma.gov - Legal Resources</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
