/**
 * Instrument gate: affidavit vs declaration.
 *
 * The filing (court) state decides the instrument. `return.allowDeclaration` is the only gate —
 * qualification.allowsUnswornDeclaration is never consulted here. A declaration is never
 * returned for a state where allowDeclaration is false, and the downgrade is never silent:
 * it carries a plain-English reason plus the governing citation.
 */
import { STATES } from './data';
import { getReturnRule, normalizeStateCode } from './rules';
import type { InstrumentResolution, RequestedType } from './types';

/** One-line plain-English explanation for a known state that blocks declarations. */
function blockedReason(stateName: string, affidavitTitle: string, requiresNotary: boolean): string {
  const label = affidavitTitle || 'Affidavit of Service';
  if (requiresNotary) {
    return `${stateName} requires a notarized ${label} for proof of service; an unsworn declaration is not authorized.`;
  }
  return `${stateName} requires a ${label} for proof of service; an unsworn declaration is not authorized.`;
}

/**
 * Decide what will actually be rendered for `requested` in `courtState`.
 *
 * - declaration + state without allowance -> affidavit, blocked, reason + citation
 * - declaration + unset/unknown state -> affidavit, blocked, reason 'STATE_REQUIRED'
 * - affidavit request -> affidavit, never blocked
 */
export function resolveInstrument(
  requested: RequestedType,
  courtState?: string | null,
): InstrumentResolution {
  const stateCode = normalizeStateCode(courtState);
  const rule = getReturnRule(stateCode);
  const wantsDeclaration = requested === 'declaration';

  // Affidavit is always available; nothing was downgraded.
  if (!wantsDeclaration) {
    return {
      docType: 'affidavit',
      blocked: false,
      stateCode,
      stateName: rule.stateName,
      statute: '',
      citation: '',
      reason: '',
    };
  }

  // No filing state: a public tool must not guess one, so no declaration.
  if (!stateCode) {
    return {
      docType: 'affidavit',
      blocked: true,
      stateCode: '',
      stateName: '',
      statute: '',
      citation: '',
      reason: 'STATE_REQUIRED',
    };
  }

  const known = STATES[stateCode];
  // Unknown state: fail closed exactly like "no state".
  if (!known) {
    return {
      docType: 'affidavit',
      blocked: true,
      stateCode,
      stateName: stateCode,
      statute: '',
      citation: '',
      reason: 'STATE_REQUIRED',
    };
  }

  if (!rule.allowDeclaration) {
    const citation =
      (Array.isArray(rule.sources) && rule.sources[0]) ||
      rule.primarySourceUrl ||
      rule.declarationStatute ||
      '';
    return {
      docType: 'affidavit',
      blocked: true,
      stateCode,
      stateName: rule.stateName,
      statute: '',
      citation,
      reason: blockedReason(rule.stateName || stateCode, rule.affidavitTitle, rule.requiresNotaryForReturn),
    };
  }

  return {
    docType: 'declaration',
    blocked: false,
    stateCode,
    stateName: rule.stateName,
    statute: rule.declarationStatute || '',
    citation: rule.declarationStatute || (Array.isArray(rule.sources) ? rule.sources[0] || '' : ''),
    reason: '',
  };
}
