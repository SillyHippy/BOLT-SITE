/**
 * Print gate.
 *
 * `errors` block printing. `warnings` never block — the UI must collect an explicit
 * acknowledgement before printing instead.
 *
 * Separation of concerns (contract §3):
 *  - filing state -> arrived-at-hand, documents list, attestations (ERRORS when missing)
 *  - service state -> Sunday block, officer-only, abode age, follow-up mail (WARNINGS ONLY)
 */
import { resolveInstrument } from './instrument';
import { getContentRule, getReturnRule, normalizeStateCode } from './rules';
import type { PrintValidationInput, PrintValidationResult } from './types';

/** `yyyy-mm-dd` -> weekday, avoiding timezone drift (noon UTC is safe in every zone). */
function isSunday(date?: string | null): boolean {
  const text = String(date ?? '').trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) return false;
  const parsed = new Date(`${text}T12:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return false;
  return parsed.getUTCDay() === 0;
}

function documentCount(documents?: string[] | string): number {
  if (Array.isArray(documents)) {
    return documents.filter((doc) => String(doc ?? '').trim().length > 0).length;
  }
  return String(documents ?? '')
    .split(/[\n,]/)
    .map((doc) => doc.trim())
    .filter(Boolean).length;
}

/** Attestations that only apply to a declaration of service. */
function appliesToInstrument(token: string, requested: PrintValidationInput['requested']): boolean {
  if (requested === 'declaration') return true;
  return !/declaration/i.test(token);
}

/**
 * Validate everything needed before printing a return.
 *
 * Missing filing-state requirements are errors; execution conditions are warnings.
 */
export function validateForPrint(input: PrintValidationInput = {}): PrintValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const courtState = normalizeStateCode(input?.courtState);
  const serviceState = normalizeStateCode(input?.serviceState) || courtState;
  const filingContent = getContentRule(courtState);
  const filingRule = getReturnRule(courtState);
  const serviceName = getReturnRule(serviceState).stateName || serviceState;

  // ---- Filing-state requirements: these block printing -------------------------------
  if (input?.requested === 'declaration') {
    const resolution = resolveInstrument('declaration', courtState);
    if (resolution.blocked) {
      const label = resolution.stateName || courtState || 'this state';
      errors.push(
        resolution.reason === 'STATE_REQUIRED'
          ? 'A declaration of service requires a filing state; select the court state or print the affidavit.'
          : `A declaration of service cannot be printed for ${label}: ${resolution.reason}`,
      );
    }
  }

  const cameToHand = filingContent?.render?.cameToHand;
  if (cameToHand?.required) {
    if (!String(input?.cameToHandDate ?? '').trim()) {
      errors.push(
        `${filingRule.stateName || courtState} requires the date the process came to hand (when you received it).`,
      );
    }
    const needsTime = String(cameToHand.wording ?? '').includes('{receivedTime}');
    if (needsTime && !String(input?.cameToHandTime ?? '').trim()) {
      errors.push(
        `${filingRule.stateName || courtState} requires the time the process came to hand.`,
      );
    }
  }

  const documentsList = filingContent?.render?.documentsList;
  if (documentsList?.required && documentCount(input?.documentsServed) === 0) {
    const label = String(documentsList.label ?? '').trim() || 'Documents served';
    errors.push(`${filingRule.stateName || courtState} requires the list of documents served (${label}).`);
  }

  const requiredAttestations = (filingContent?.attestations ?? []).filter((token) =>
    appliesToInstrument(String(token), input?.requested),
  );
  if (requiredAttestations.length > 0) {
    const accepted = new Set(
      (Array.isArray(input?.attestationsAccepted) ? input.attestationsAccepted : []).map((token) =>
        String(token).trim(),
      ),
    );
    const missing = requiredAttestations.filter((token) => !accepted.has(String(token)));
    if (missing.length > 0) {
      errors.push(
        `${filingRule.stateName || courtState} requires these attestations before printing: ${missing.join(', ')}.`,
      );
    }
  }

  // ---- Service-state conditions: warnings only --------------------------------------
  const serviceContent = getContentRule(serviceState);
  const execution = serviceContent?.execution;
  const abode = serviceContent?.abode;

  if (execution?.sundayServiceBlocked && (input?.servedOnSunday === true || isSunday(input?.serviceDate))) {
    warnings.push(
      `Service on a Sunday is restricted in ${serviceName} — confirm the service date before printing.`,
    );
  }

  if (execution?.officerOnlyInState && input?.officerAuthorized !== true) {
    warnings.push(
      `${serviceName} requires service by a peace officer or a person specially appointed — confirm your authority to serve before printing.`,
    );
  }

  const minAge = abode?.minRecipientAge;
  if (input?.servedByAbode === true && typeof minAge === 'number' && minAge > 0) {
    const age = input?.recipientAge;
    if (age === undefined || age === null || !Number.isFinite(Number(age)) || Number(age) < minAge) {
      warnings.push(
        `Abode service in ${serviceName} requires a co-resident at least ${minAge} years old — confirm the recipient's age before printing.`,
      );
    }
  }

  if (input?.servedByAbode === true && abode?.requiresFollowUpMail && !String(input?.abodeFollowUpMailDate ?? '').trim()) {
    warnings.push(
      `${serviceName} requires a follow-up mailed notice for abode service — record the mailing date before printing.`,
    );
  }

  return { errors, warnings };
}
