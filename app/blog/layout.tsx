import type { ReactNode } from 'react';
import CountyLinksCTA from '@/components/ui/CountyLinksCTA';
import AuthorBio from '@/components/AuthorBio';

// Shared layout for /blog/*.
// Appends a county cross-link section and an E-E-A-T author attribution
// footer (with Person schema) after every post body so each blog article
// surfaces internal links to /counties/* pages and links to the author bio
// at /about/joseph-iannazzi.
export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <CountyLinksCTA />
        <AuthorBio />
      </div>
    </>
  );
}
