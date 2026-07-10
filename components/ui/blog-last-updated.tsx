'use client';

import { usePathname } from 'next/navigation';
import LastUpdated from '@/components/ui/last-updated';

/** Visible freshness date for blog posts — reads pathname from the client router. */
export default function BlogLastUpdated() {
  const pathname = usePathname();
  if (!pathname?.startsWith('/blog/')) return null;

  return (
    <LastUpdated
      pathname={pathname}
      label="Last reviewed"
      className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100"
    />
  );
}
