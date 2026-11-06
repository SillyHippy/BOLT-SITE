/**
 * Single source of truth for service starting prices.
 * Permanent starting rates (fuel/operating-cost reality baked in, Nov 2026).
 * If fuel prices change, JLS adjusts pricing accordingly and passes savings
 * on to the customer.
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

/**
 * Professional pricing disclaimer shown near rate tables.
 */
export const PRICE_ADJUSTMENT_DISCLAIMER =
  'Rates reflect current operating costs. If fuel prices change, we adjust our pricing accordingly — and pass savings on to our customers.';

/** Permanent starting rates (single ladder, process serving + courier shared). */
export const BASE_PRICES: Record<string, number> = {
  'single-attempt': 40,
  standard: 90,
  rush: 130,
  'same-day': 180,
  'triple-attempt': 255,
  'after-hours-rush': 295,
  // Aliases — same dollars as standard / rush (shared process + courier ladder)
  'standard-courier': 90,
  'rush-courier': 130,
  'notary-in-office': 20,
  'notary-mobile': 25,
  'skip-tracing': 50,
  'court-filing': 25,
  stakeout: 90,
};

export function getBasePrice(id: string): number | undefined {
  return BASE_PRICES[id];
}

/** Back-compat alias: the "current" rate is now the permanent rate. */
export function getCurrentPrice(id: string): number | undefined {
  return BASE_PRICES[id];
}

/** Starting price for SEO, hero copy, and site-wide "starts at" summaries. */
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

/**
 * Ancillary prices. Courier is NOT a separate package ladder on /pricing —
 * Standard/Rush courier share standard/rush. These ids stay for internal/compat use.
 */
export const ANCILLARY_STARTING_PRICES: readonly StartingPrice[] = [
  { id: 'standard-courier', label: 'Standard (courier alias)', startsAt: getBasePrice('standard')!, note: 'same as Standard tier' },
  { id: 'rush-courier', label: 'Rush (courier alias)', startsAt: getBasePrice('rush')!, note: 'same as Rush tier' },
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
export const PRICE_RANGE_DISPLAY = '$40-$295';
