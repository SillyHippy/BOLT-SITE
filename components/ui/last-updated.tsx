import { formatLastUpdatedLabel, formatMetaDate, getPageFreshness } from '@/lib/content-freshness';

interface LastUpdatedProps {
  /** Hub path, e.g. `/pricing` or `/` */
  pathname: string;
  className?: string;
  dateModified?: string;
  /** Display label — defaults to "Last updated" */
  label?: 'Last updated' | 'Last reviewed';
}

export default function LastUpdated({
  pathname,
  className = 'text-xs text-gray-500 mt-2',
  dateModified,
  label = 'Last updated',
}: LastUpdatedProps) {
  const date = dateModified ?? getPageFreshness(pathname)?.dateModified;
  if (!date) return null;

  const metaDate = formatMetaDate(date);

  return (
    <p className={className}>
      {label}:{' '}
      <time dateTime={metaDate}>{formatLastUpdatedLabel(date)}</time>
    </p>
  );
}
