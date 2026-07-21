/**
 * Single source of truth for service starting prices.
 * Base rates are used everywhere except the fuel-adjustment banner on /pricing,
 * which shows current rates (base + temporary adjustment) for affected services.
 */

export type StartingPrice = {
  /** Stable id used for keys / lookups */
  id: string;
  /** Customer-facing service label */
  label: string;
  /** Starting price in USD (number, no symbol) */
  startsAt: number;
  /** Short turnaround / scope hint shown beneath the label, optional */
  note?: string;
};

/** Temporary fuel & operating-cost adjustment on fuel-dependent services. */
export const FUEL_OPERATING_ADJUSTMENT = 20;

/** When the current fuel adjustment took effect (display string). */
export const FUEL_ADJUSTMENT_EFFECTIVE_DATE = 'July 19, 2026';

/** Service ids that receive the temporary fuel & operating-cost adjustment. */
export const FUEL_ADJUSTED_SERVICE_IDS = [
  'standard',
  'rush',
  'same-day',
  'standard-courier',
  'rush-courier',
] as const;

/** Base starting rates before temporary fuel adjustment. */
export const BASE_PRICES: Record<string, number> = {
  'single-attempt': 35,
  standard: 60,
  rush: 100,
  'same-day': 150,
  'triple-attempt': 225,
  'after-hours-rush': 265,
  'standard-courier': 60,
  'rush-courier': 100,
  'notary-in-office': 20,
  'notary-mobile': 25,
  'skip-tracing': 50,
  'court-filing': 25,
  stakeout: 90,
};

export function getBasePrice(id: string): number | undefined {
  return BASE_PRICES[id];
}

/** Current customer-facing rate (base + fuel adjustment where applicable). */
export function getCurrentPrice(id: string): number | undefined {
  const base = getBasePrice(id);
  if (base === undefined) return undefined;
  if ((FUEL_ADJUSTED_SERVICE_IDS as readonly string[]).includes(id)) {
    return base + FUEL_OPERATING_ADJUSTMENT;
  }
  return base;
}

/** Base starting price for SEO, hero copy, and site-wide "starts at" summaries. */
export function getStartingPrice(id: string): number | undefined {
  return getBasePrice(id);
}

export const STARTING_PRICES: readonly StartingPrice[] = [
  { id: 'single-attempt', label: 'Single-Attempt Posting', startsAt: getBasePrice('single-attempt')!, note: '1-3 business days' },
  { id: 'standard', label: 'Standard Service', startsAt: getBasePrice('standard')!, note: 'up to 3 attempts, 5-10 business days' },
  { id: 'rush', label: 'Rush Service', startsAt: getBasePrice('rush')!, note: '1-3 business days' },
  { id: 'same-day', label: 'Same-Day Service', startsAt: getBasePrice('same-day')!, note: 'within 4-8 hours' },
  {
    id: 'triple-attempt',
    label: 'Triple-Attempt Service',
    startsAt: getBasePrice('triple-attempt')!,
    note: 'three attempts within 48 hours or sooner, evasive respondents',
  },
  { id: 'after-hours-rush', label: 'After-Hours Rush', startsAt: getBasePrice('after-hours-rush')!, note: '2-hour response' },
] as const;

/** Add-on / non-process-serving services. Optional; for richer pricing pages. */
export const ANCILLARY_STARTING_PRICES: readonly StartingPrice[] = [
  { id: 'standard-courier', label: 'Standard Courier', startsAt: getBasePrice('standard-courier')!, note: 'same-day or next-morning' },
  { id: 'rush-courier', label: 'Rush Courier', startsAt: getBasePrice('rush-courier')!, note: '2-3 hour priority' },
  { id: 'notary-in-office', label: 'In-Office Notary', startsAt: 20, note: 'Mon-Fri 8am-6pm' },
  { id: 'notary-mobile', label: 'Mobile Notary / RON', startsAt: 25, note: 'per act, travel fee may apply' },
  { id: 'skip-tracing', label: 'Skip Tracing', startsAt: 50, note: 'standard turnaround' },
  { id: 'court-filing', label: 'Court Run / Filing', startsAt: 25, note: 'plus court costs' },
] as const;

/** Formatted "starts at $X" string. */
export function formatStartsAt(price: number): string {
  return `starts at $${price}`;
}

/** The widest range used in schema priceRange properties. */
export const PRICE_RANGE_DISPLAY = '$35-$265';
