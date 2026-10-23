/**
 * Pure jurisdiction rules over the pre-resolved bundle.
 *
 * Fail-closed by design: an unknown or empty filing state is always treated as
 * "affidavit only", never as a guess and never as Oklahoma.
 * Ported from servetracker-saas/src/utils/jurisdictionRules.ts, minus the venues.json layer.
 */
import { STATES, STATE_CODES } from './data';
import type {
  JurisdictionContentRule,
  JurisdictionSummary,
  ReturnJurisdictionRule,
} from './types';

/** Full state name (and federal aliases) -> code. */
const STATE_NAMES: Record<string, string> = {
  ALABAMA: 'AL',
  ALASKA: 'AK',
  ARIZONA: 'AZ',
  ARKANSAS: 'AR',
  CALIFORNIA: 'CA',
  COLORADO: 'CO',
  CONNECTICUT: 'CT',
  DELAWARE: 'DE',
  'DISTRICT OF COLUMBIA': 'DC',
  FLORIDA: 'FL',
  GEORGIA: 'GA',
  HAWAII: 'HI',
  IDAHO: 'ID',
  ILLINOIS: 'IL',
  INDIANA: 'IN',
  IOWA: 'IA',
  KANSAS: 'KS',
  KENTUCKY: 'KY',
  LOUISIANA: 'LA',
  MAINE: 'ME',
  MARYLAND: 'MD',
  MASSACHUSETTS: 'MA',
  MICHIGAN: 'MI',
  MINNESOTA: 'MN',
  MISSISSIPPI: 'MS',
  MISSOURI: 'MO',
  MONTANA: 'MT',
  NEBRASKA: 'NE',
  NEVADA: 'NV',
  'NEW HAMPSHIRE': 'NH',
  'NEW JERSEY': 'NJ',
  'NEW MEXICO': 'NM',
  'NEW YORK': 'NY',
  'NORTH CAROLINA': 'NC',
  'NORTH DAKOTA': 'ND',
  OHIO: 'OH',
  OKLAHOMA: 'OK',
  OREGON: 'OR',
  PENNSYLVANIA: 'PA',
  'RHODE ISLAND': 'RI',
  'SOUTH CAROLINA': 'SC',
  'SOUTH DAKOTA': 'SD',
  TENNESSEE: 'TN',
  TEXAS: 'TX',
  UTAH: 'UT',
  VERMONT: 'VT',
  VIRGINIA: 'VA',
  WASHINGTON: 'WA',
  'WEST VIRGINIA': 'WV',
  WISCONSIN: 'WI',
  WYOMING: 'WY',
  // Federal
  FEDERAL: 'FED',
  FED: 'FED',
  'UNITED STATES DISTRICT COURT': 'FED',
  'US DISTRICT COURT': 'FED',
  'U.S. DISTRICT COURT': 'FED',
  USA: 'FED',
  'UNITED STATES': 'FED',
};

/** Longest names first so WEST VIRGINIA beats VIRGINIA and NEW MEXICO beats MEXICO. */
const STATE_NAMES_BY_LENGTH: Array<[string, string]> = Object.entries(STATE_NAMES).sort(
  (a, b) => b[0].length - a[0].length,
);

/** State names that are also common surnames — never venue signals on their own. */
const AMBIGUOUS_SURNAME_STATES = new Set(['WASHINGTON', 'VIRGINIA', 'GEORGIA', 'CAROLINA']);

/**
 * Normalize a state code / state name into a 2-letter code (`FED` for federal).
 *
 * `''` in -> `''` out. A public tool must never silently default to Oklahoma, so an
 * unrecognised non-empty token is returned uppercased as-is and `getReturnRule` fails closed.
 */
export function normalizeStateCode(input?: string | null): string {
  const raw = String(input ?? '')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();
  if (!raw) return '';

  if (/^[A-Z]{2}$/.test(raw)) return raw;
  if (raw === 'FED' || raw === 'FEDERAL') return 'FED';
  if (STATE_NAMES[raw]) return STATE_NAMES[raw];

  // Explicit state references inside a court caption.
  for (const [fullName, code] of STATE_NAMES_BY_LENGTH) {
    if (fullName.length < 4) continue;
    if (
      raw.includes(`STATE OF ${fullName}`) ||
      raw.endsWith(`, ${fullName}`) ||
      raw.includes(`, ${fullName} `) ||
      raw.includes(`, ${fullName} -`)
    ) {
      return code;
    }
  }

  if (raw.includes('FED') || raw.includes('FEDERAL') || raw.includes('US DISTRICT') || raw.includes('U.S. DISTRICT') || raw.includes('UNITED STATES')) {
    return 'FED';
  }

  // Bare-name fallback for things like "SUPERIOR COURT OF CALIFORNIA, COUNTY OF ...".
  for (const [fullName, code] of STATE_NAMES_BY_LENGTH) {
    if (fullName.length < 4) continue;
    if (raw.includes(fullName)) return code;
  }

  // Unknown token: caller fails closed.
  return raw;
}

/** Fail-closed default: notarized affidavit, low confidence, never a declaration. */
function failClosedRule(stateCode: string): ReturnJurisdictionRule {
  return {
    stateCode,
    stateName: stateCode,
    allowDeclaration: false,
    declarationStatute: '',
    requiresNotaryForReturn: true,
    affidavitTitle: 'Affidavit of Service',
    declarationTitle: 'Affidavit of Service',
    declarationFormText: '',
    juratHints: 'Unknown jurisdiction: fail-closed to notarized affidavit',
    eSignAffidavit: 'court_dependent',
    eSignDeclaration: 'no',
    nonServiceSameFamily: true,
    notes: stateCode
      ? `Unverified jurisdiction ${stateCode}: fail-closed to notarized Affidavit of Service.`
      : 'No filing state selected: fail-closed to notarized Affidavit of Service.',
    sources: [],
    confidence: 'low',
    primarySourceUrl: '',
  };
}

/**
 * Resolved return rule for a filing state. Fails closed for unknown or empty states and
 * never throws — a missing or malformed bundle entry is treated as "affidavit only".
 */
export function getReturnRule(stateCode?: string | null): ReturnJurisdictionRule {
  const code = normalizeStateCode(stateCode);
  if (!code) return failClosedRule('');

  const entry = STATES[code];
  const rule = entry?.return;
  if (!rule || typeof rule.allowDeclaration !== 'boolean') return failClosedRule(code);

  return {
    ...failClosedRule(code),
    ...rule,
    stateCode: code,
    stateName: rule.stateName || entry.stateName || code,
  };
}

/** Content rule for a filing state, or null when absent / unknown. */
export function getContentRule(stateCode?: string | null): JurisdictionContentRule | null {
  const code = normalizeStateCode(stateCode);
  if (!code) return null;
  const content = STATES[code]?.content;
  return content && typeof content === 'object' ? content : null;
}

/** Sorted list of jurisdictions in the bundle, for pickers and state tables. */
export function listJurisdictions(): JurisdictionSummary[] {
  return STATE_CODES.map((code) => {
    const entry = STATES[code];
    const rule = entry?.return;
    return {
      code,
      name: entry?.stateName || rule?.stateName || code,
      allowDeclaration: Boolean(rule?.allowDeclaration),
      statute: rule?.declarationStatute || '',
    };
  });
}

/**
 * Extract filing state + county from free-text court name.
 *
 * Never routes a surname to a state (Toni Washington -> no state) and strips
 * `<STATE> COUNTY` / `<PARISH>` before bare-name matching, so
 * "Washington County, Arkansas" is AR, not WA.
 */
export function parseVenue(courtName?: string | null): { state: string; county: string } {
  const name = String(courtName ?? '')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();

  if (!name) return { state: '', county: '' };

  let state = '';

  // Federal court first: "UNITED STATES DISTRICT COURT ..." / "US DISTRICT COURT ..."
  if (
    (name.includes('UNITED STATES') || name.includes('U.S.') || name.includes('US ')) &&
    name.includes('DISTRICT COURT')
  ) {
    state = 'FED';
  }

  // Explicit forms only: "STATE OF X", ", X", ", X -".
  if (!state) {
    for (const [fullName, code] of STATE_NAMES_BY_LENGTH) {
      if (fullName.length < 4) continue;
      if (
        name.includes(`STATE OF ${fullName}`) ||
        name.endsWith(`, ${fullName}`) ||
        name.includes(`, ${fullName} -`) ||
        name.includes(`, ${fullName} `)
      ) {
        state = code;
        break;
      }
    }
  }

  // Bare-name match, with the surname guard and the <STATE> COUNTY strip.
  if (!state) {
    for (const [fullName, code] of STATE_NAMES_BY_LENGTH) {
      if (fullName.length < 4) continue;
      if (!name.includes(fullName)) continue;

      if (AMBIGUOUS_SURNAME_STATES.has(fullName)) {
        const courtStatePattern = new RegExp(
          `(STATE OF ${fullName}|IN AND FOR THE (?:STATE|COUNTY) OF ${fullName}|FOR THE STATE OF ${fullName}|JUDICIAL DISTRICT OF ${fullName}|IN ${fullName}\\b)`,
        );
        if (!courtStatePattern.test(name)) continue;
      }

      // Skip when the name only appears as "<STATE> COUNTY" / "<STATE> PARISH".
      const withoutCounty = name.replace(new RegExp(`${fullName}\\s+(?:COUNTY|PARISH)`, 'g'), '');
      if (withoutCounty.includes(fullName)) {
        state = code;
        break;
      }
    }
  }

  let county = '';
  const countyPatterns = [
    /COUNTY\s+OF\s+([A-Z]+(?:\s+[A-Z]+){0,2})/,
    /PARISH\s+OF\s+([A-Z]+(?:\s+[A-Z]+){0,2})/,
    /IN AND FOR\s+([A-Z]+(?:\s+[A-Z]+){0,2}?)\s+(?:COUNTY|PARISH)/,
    /DISTRICT COURT OF\s+([A-Z]+(?:\s+[A-Z]+){0,2}?)\s+(?:COUNTY|PARISH)/,
    /CIRCUIT COURT OF\s+([A-Z]+(?:\s+[A-Z]+){0,2}?)\s+(?:COUNTY|PARISH)/,
    /SUPERIOR COURT OF\s+([A-Z]+(?:\s+[A-Z]+){0,2}?)\s+(?:COUNTY|PARISH)/,
    /\b([A-Z]+)\s+(?:COUNTY|PARISH)\b/,
  ];

  for (const pattern of countyPatterns) {
    const match = name.match(pattern);
    if (match && match[1]) {
      const candidate = match[1].trim().toUpperCase();
      if (!['THE', 'STATE', 'AND', 'FOR', 'IN', 'OF'].includes(candidate)) {
        county = candidate;
        break;
      }
    }
  }

  return { state, county };
}
