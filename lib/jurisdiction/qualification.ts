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

/**
 * Clues already printed by existing render paths — a clause matching any of them
 * verbatim must not print again (site parity with SaaS dedupe, dc083d1).
 */
export interface RequiredBodyClauseGate {
  /** Service actually happened — every remaining literal clause asserts a service event. */
  successfulServe?: boolean;
  /** The received date/time stamp printed on the document (not the "on or about" fallback). */
  stampPrinted?: boolean;
  /** Service was made at a residence / usual place of abode. */
  abodeMethod?: boolean;
  /** Text already printed elsewhere (qualification recital, came-to-hand recital, ...). */
  haystack?: string[];
}

/** Token-key clauses are owned by their existing render paths; never double-printed. */
const CLAUSE_TOKEN_KEYS = new Set([
  'cameToHandDate',
  'cameToHandDateTime',
  'serviceFeeBreakdown',
  'physicalDescriptionOfRecipient',
]);

function normalizeForDedupe(value: string): string {
  return String(value || '')
    .replace(/&[a-zA-Z#0-9]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();
}

/**
 * Literal sentences from `qualification.requiredBodyClauses` that must print on the
 * document after the qualification recital. Mirrors the SaaS render (commit dc083d1):
 * token-key clauses and `{{placeholder}}` formulas stay owned by their existing paths,
 * the CT "FEES:" line stays a legal-recital line here (the site has no fees table),
 * came-to-hand recitals need the received stamp, abode-mail recitals need the abode
 * method, and every returned clause is deduped against the caller's haystack.
 * Callers render entries verbatim as separate paragraphs (React escapes them).
 */
export function getRequiredBodyClauses(
  stateCode: string,
  gate: RequiredBodyClauseGate = {},
): string[] {
  const code = normalizeStateCode(stateCode);
  if (!code) return [];
  const clauses = STATES[code]?.qualification?.requiredBodyClauses;
  if (!Array.isArray(clauses) || clauses.length === 0) return [];
  if (gate.successfulServe !== true) return [];

  const haystack = (gate.haystack || []).map(normalizeForDedupe).filter(Boolean).join('\n');
  const out: string[] = [];
  for (const raw of clauses) {
    const clause = String(raw || '').trim();
    if (!clause) continue;
    if (CLAUSE_TOKEN_KEYS.has(clause)) continue;
    if (clause.includes('{{')) continue; // formula clauses are owned by their description paths
    const isCameToHandRecital = /came to hand on the date|at the time stated above/i.test(clause);
    if (isCameToHandRecital && gate.stampPrinted !== true) continue;
    if (/last and usual place of abode/i.test(clause) && gate.abodeMethod !== true) continue;
    const normClause = normalizeForDedupe(clause);
    if (!normClause) continue;
    if (haystack.includes(normClause)) continue; // an existing path already printed it verbatim
    out.push(clause);
  }
  return out;
}
