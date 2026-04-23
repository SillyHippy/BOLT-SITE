import type { ReactNode } from 'react';
import CountyLinksCTA from '@/components/ui/CountyLinksCTA';

// Shared layout for /blog/*.
// Appends a county cross-link section after the post body so every blog article
// surfaces internal links to /counties/* pages (prev gap: blog had no internal
// links to county pages, hurting SEO distribution of link equity).
export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <CountyLinksCTA />
      </div>
    </>
  );
}
