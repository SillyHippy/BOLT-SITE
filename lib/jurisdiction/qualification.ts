/**
 * Qualification paragraph assembly.
 *
 * A qualification is a legal recital ("I, {{serverName}}, state that I am ... License No.
 * {{licenseNumber}}"). Printing a literal `{{licenseNumber}}` on a court document is a defect,
 * so an unfilled template is treated as "no qualification" (empty string) rather than rendered.
 */
import { STATES } from './data';
import { normalizeStateCode } from './rules';

const TOKEN_PATTERN = /\{\{\s*([A-Za-z0-9_]+)\s*\}\}/g;
const TOKEN_LEFT = /\{\{[^}]*\}\}/;

/** Flatten vars so `{{licenseNumber}}` matches `licenseNumber` and `LICENSENUMBER`. */
function varLookup(vars?: Record<string, string> | null): Record<string, string> {
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

/**
 * Fill `{{token}}` placeholders. Returns '' when any token is unresolved or the template is
 * empty, so callers can drop the paragraph instead of printing a placeholder.
 */
export function fillQualificationTemplate(
  template?: string | null,
  vars?: Record<string, string> | null,
): string {
  const text = String(template ?? '');
  if (!text.trim()) return '';

  const lookup = varLookup(vars);
  const filled = text.replace(TOKEN_PATTERN, (whole, key: string) => {
    const value = lookup[key] ?? lookup[key.toLowerCase()];
    return value ? value : whole;
  });

  if (TOKEN_LEFT.test(filled)) return '';
  return filled;
}

/**
 * Qualification paragraph for a filing state, filled from `vars`.
 * Returns '' when the state is unknown, has no qualification text, or any token is unresolved.
 */
export function getQualification(
  stateCode: string,
  vars: Record<string, string> = {},
): string {
  const code = normalizeStateCode(stateCode);
  if (!code) return '';
  const qualification = STATES[code]?.qualification;
  if (!qualification || typeof qualification.qualificationText !== 'string') return '';
  return fillQualificationTemplate(qualification.qualificationText, vars);
}

/**
 * Tokens still required to fill a state's qualification paragraph (`{{...}}` keys).
 * Useful for driving the per-state input list.
 */
export function getQualificationTokens(stateCode: string): string[] {
  const code = normalizeStateCode(stateCode);
  if (!code) return [];
  const text = STATES[code]?.qualification?.qualificationText;
  if (typeof text !== 'string' || !text) return [];
  const tokens = new Set<string>();
  for (const match of text.matchAll(/\{\{\s*([A-Za-z0-9_]+)\s*\}\}/g)) tokens.add(match[1]);
  return Array.from(tokens).sort();
}
