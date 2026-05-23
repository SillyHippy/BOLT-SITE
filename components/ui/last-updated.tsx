import { formatLastUpdatedLabel, getPageFreshness } from '@/lib/content-freshness';

interface LastUpdatedProps {
  /** Hub path, e.g. `/pricing` or `/` */
  pathname: string;
  className?: string;
  dateModified?: string;
}

export default function LastUpdated({
  pathname,
  className = 'text-xs text-gray-500 mt-2',
  dateModified,
}: LastUpdatedProps) {
  const date = dateModified ?? getPageFreshness(pathname)?.dateModified;
  if (!date) return null;

  return (
    <p className={className}>
      Last updated: {formatLastUpdatedLabel(date)}
    </p>
  );
}
