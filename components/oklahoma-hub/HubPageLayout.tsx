import Disclaimer from '@/components/oklahoma-hub/Disclaimer';
import CitationBanner from '@/components/oklahoma-hub/CitationBanner';
import type { ReactNode } from 'react';

interface HubPageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  citations?: Array<{ title: string; url?: string; description?: string }>;
  showDisclaimer?: boolean;
}

/** Content shell for Oklahoma hub pages (uses site Navbar/Footer from (main) layout). */
export default function HubPageLayout({
  children,
  title,
  description,
  citations = [],
  showDisclaimer = true,
}: HubPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <div className="bg-navy text-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{title}</h1>
          <p className="text-white/70 text-sm md:text-base max-w-3xl">{description}</p>
        </div>
      </div>

      <div className="flex-1 bg-cream">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <article className="max-w-4xl mx-auto">
            {children}

            {citations.length > 0 && (
              <div className="mt-8">
                <CitationBanner citations={citations} />
              </div>
            )}

            {showDisclaimer && (
              <div className="mt-8">
                <Disclaimer pageTitle={title} />
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
