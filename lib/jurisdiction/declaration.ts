/**
 * Declaration form-text substitution.
 *
 * Bundle tokens use single braces (`{date}`, `{affiantName}`), unlike qualification
 * templates which use `{{token}}`. Any unresolved `{token}` is a print defect —
 * callers must treat leftover braces as an error, never ship placeholder text.
 */

const TOKEN_PATTERN = /\{([A-Za-z][A-Za-z0-9_]*)\}/g;

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function ordinal(n: number): string {
  const j = n % 10;
  const k = n % 100;
  if (j === 1 && k !== 11) return `${n}st`;
  if (j === 2 && k !== 12) return `${n}nd`;
  if (j === 3 && k !== 13) return `${n}rd`;
  return `${n}th`;
}

/** Parse MM/DD/YYYY, M/D/YYYY, or yyyy-mm-dd into calendar parts (local). */
export function parseExecutionDateParts(raw?: string | null): {
  date: string;
  dayOrdinal: string;
  month: string;
  year: string;
} | null {
  const text = String(raw ?? '').trim();
  if (!text) return null;

  let year = 0;
  let monthIndex = -1;
  let day = 0;

  const us = text.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})$/);
  if (us) {
    monthIndex = Number(us[1]) - 1;
    day = Number(us[2]);
    year = us[3].length === 2 ? 2000 + Number(us[3]) : Number(us[3]);
  } else {
    const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!iso) return null;
    year = Number(iso[1]);
    monthIndex = Number(iso[2]) - 1;
    day = Number(iso[3]);
  }

  if (!Number.isFinite(year) || monthIndex < 0 || monthIndex > 11 || day < 1 || day > 31) {
    return null;
  }

  const monthName = MONTHS[monthIndex];
  const padded = `${String(monthIndex + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}/${year}`;
  return {
    date: padded,
    dayOrdinal: ordinal(day),
    month: monthName,
    year: String(year),
  };
}

function lookupVars(vars?: Record<string, string | null | undefined> | null): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(vars || {})) {
    if (value === undefined || value === null) continue;
    const text = String(value).trim();
    if (!text) continue;
    out[key] = text;
    out[key.toLowerCase()] = text;
  }
  return out;
}

export interface DeclarationFillResult {
  /** Filled text when every token resolved; otherwise the partially filled string. */
  text: string;
  /** Unresolved `{token}` names (empty when fully filled or template blank). */
  missing: string[];
}

/**
 * Substitute `{token}` placeholders in a declaration form sentence.
 * Does not invent values — missing tokens stay listed in `missing`.
 */
export function fillDeclarationForm(
  template?: string | null,
  vars?: Record<string, string | null | undefined> | null,
): DeclarationFillResult {
  const source = String(template ?? '');
  if (!source.trim()) return { text: '', missing: [] };

  const lookup = lookupVars(vars);
  const missing: string[] = [];
  const text = source.replace(TOKEN_PATTERN, (whole, key: string) => {
    const value = lookup[key] ?? lookup[key.toLowerCase()];
    if (!value) {
      missing.push(key);
      return whole;
    }
    return value;
  });

  return { text, missing: Array.from(new Set(missing)) };
}

/**
 * Split a typed declarant address line ("564 E 138th Pl, Glenpool, OK 74033")
 * into street / city / state / zip. Returns null when the line does not end in a
 * "City, State ZIP" tail — the caller then falls back to the signing venue fields.
 */
export function parseDeclarantAddress(raw?: string | null): {
  street: string;
  city: string;
  state: string;
  zip: string;
} | null {
  const text = String(raw ?? '').trim();
  if (!text) return null;
  const m = text.match(/^(.+?)[,;]\s*([^,;]+?)[,;]\s*([A-Za-z]{2}|[A-Za-z][A-Za-z]*(?:\s[A-Za-z]+)*?)\s+(\d{5}(?:-\d{4})?)\s*$/);
  if (!m) return null;
  const [, street, city, state, zip] = m;
  return {
    street: street.trim(),
    city: city.trim(),
    state: state.trim(),
    zip: zip.trim(),
  };
}

/** Build the standard var map used by declaration form text from collected fields. */
export function buildDeclarationVars(input: {
  execDate?: string;
  signingCity?: string;
  signingState?: string;
  signingCounty?: string;
  execCity?: string;
  affiantName?: string;
  serverDob?: string;
  street?: string;
  /** Declarant-mailing-address city (falls back to the signing city). */
  addressCity?: string;
  /** Declarant-mailing-address state (falls back to the signing state). */
  addressState?: string;
  /** Declarant-mailing-address ZIP — required by CPRC §132.001(d) (TX). */
  addressZip?: string;
  /** Declarant country — site callers pass 'USA'. */
  country?: string;
}): Record<string, string> {
  const parts = parseExecutionDateParts(input.execDate);
  const city = String(input.signingCity || input.execCity || '').trim();
  const state = String(input.signingState || '').trim();
  const county = String(input.signingCounty || '').trim();
  const vars: Record<string, string> = {};
  if (parts) {
    vars.date = parts.date;
    vars.dayOrdinal = parts.dayOrdinal;
    vars.month = parts.month;
    vars.year = parts.year;
  }
  if (city) {
    vars.execCity = city;
  }
  if (state) {
    vars.execState = state;
    vars.execStateOrCountry = state;
  }
  // Declarant mailing-address tokens (CPRC §132.001(d) requires street, city,
  // state, zip AND country on a TX unsworn declaration). Fall back to the
  // signing venue so a server signing at home still fills the address.
  const addressCity = String(input.addressCity || city || '').trim();
  if (addressCity) vars.city = addressCity;
  const addressState = String(input.addressState || state || '').trim();
  if (addressState) vars.state = addressState;
  const zip = String(input.addressZip || '').trim();
  if (zip) vars.zip = zip;
  const country = String(input.country || '').trim();
  if (country) vars.country = country;
  if (county) vars.execCounty = county;
  const name = String(input.affiantName || '').trim();
  if (name) vars.affiantName = name;
  const dobRaw = String(input.serverDob || '').trim();
  if (dobRaw) {
    // §132.001(d) reads "date of birth is ______" — print a readable date, not
    // a raw ISO/machine format, matching the SaaS render ("January 14, 1992").
    const dobParts = parseExecutionDateParts(dobRaw);
    vars.serverDob = dobParts
      ? `${dobParts.month} ${Number(dobParts.date.split('/')[1])}, ${dobParts.year}`
      : dobRaw;
  }
  const street = String(input.street || '').trim();
  if (street) vars.street = street;
  return vars;
}
