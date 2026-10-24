/**
 * Types for the pure jurisdiction module (website).
 *
 * Source of truth: data/jurisdiction.bundle.json, generated from servetracker-saas.
 * Contract: Documents/Plans/servetracker/JURISDICTION-BUNDLE-CONTRACT.md §1–§2.
 *
 * No React, no DOM, no network. These are plain data shapes only.
 */

/** The instrument the user asked for. What actually prints is `InstrumentResolution.docType`. */
export type RequestedType = 'affidavit' | 'declaration';

export type Confidence = 'high' | 'medium' | 'low';

export type ESignPosture = 'yes' | 'no' | 'court_dependent';

/**
 * Resolved return rule for one filing jurisdiction.
 * Already merged with venues.json in the SaaS repo — the website never loads venues.json.
 */
export interface ReturnJurisdictionRule {
  stateCode: string;
  stateName: string;
  /** THE ONLY gate for affidavit vs declaration. Never read qualification.allowsUnswornDeclaration. */
  allowDeclaration: boolean;
  declarationStatute: string;
  requiresNotaryForReturn: boolean;
  affidavitTitle: string;
  declarationTitle: string;
  declarationFormText: string;
  juratHints: string;
  eSignAffidavit: ESignPosture;
  eSignDeclaration: ESignPosture;
  nonServiceSameFamily: boolean;
  notes: string;
  sources: string[];
  confidence: Confidence;
  primarySourceUrl: string;
}

export interface ContentRenderRule {
  cameToHand?: { required: boolean; wording: string } | null;
  documentsList?: { required: boolean; label: string } | null;
  recipientCapacity?: { required: 'conditional' | boolean; wording: string } | null;
  serverContactFields?: string[];
  physicalDescription?: { required: boolean } | null;
  authorityFormula?: { whenLicensed: string; servingState?: string; note?: string } | null;
  nonServiceDiligence?: { required: boolean } | null;
  certificationFields?: { required: boolean } | null;
  instrumentNote?: string | null;
}

export interface ContentExecutionRule {
  sundayServiceBlocked: boolean;
  returnDeadlineDays: number | null;
  officerOnlyInState: boolean;
  officerExceptionFields: string[];
}

export interface ContentAbodeRule {
  allowed: boolean;
  minRecipientAge: number | null;
  requiresFollowUpMail: boolean;
  requiresEvasionFacts: boolean;
  requiresNotAdverseParty: boolean;
  requiresPurportInfo: boolean;
  requiresKnewPersonAttestation: boolean;
  notes?: string;
}

/** Verbatim copy of the SaaS content rule for a jurisdiction. */
export interface JurisdictionContentRule {
  stateCode: string;
  status: string;
  render: ContentRenderRule;
  execution: ContentExecutionRule;
  abode: ContentAbodeRule;
  attestations: string[];
  requiredFields: string[];
  declarationPathVerified: boolean | null;
  sources: string[];
  confidence: Confidence;
}

/** Qualification paragraph plus the tokens the document must fill. */
export interface QualificationRule {
  qualificationText: string;
  qualificationTextUnserved?: string;
  requiredBodyClauses?: string[];
  requiredFooterFields?: string[];
  allowsUnswornDeclaration?: boolean;
}

/** One jurisdiction in the bundle. `content` / `qualification` are null when absent. */
export interface JurisdictionStateEntry {
  stateCode: string;
  stateName: string;
  return: ReturnJurisdictionRule;
  content: JurisdictionContentRule | null;
  qualification: QualificationRule | null;
}

export interface BundleProvenance {
  repo: string;
  branch: string;
  commit: string;
}

export interface JurisdictionBundle {
  schemaVersion: number;
  generatedFrom: BundleProvenance;
  states: Record<string, JurisdictionStateEntry>;
}

/** What will actually be rendered, and why it is not what was asked for. */
export interface InstrumentResolution {
  docType: RequestedType;
  blocked: boolean;
  stateCode: string;
  stateName: string;
  statute: string;
  citation: string;
  reason: string;
}

/** Row shape for jurisdiction pickers. */
export interface JurisdictionSummary {
  code: string;
  name: string;
  allowDeclaration: boolean;
  statute: string;
}

/**
 * Everything the print gate needs. All fields optional so a half-filled public form
 * can be validated without throwing.
 */
export interface PrintValidationInput {
  /** Filing state (the court's state) — drives instrument, wording and filing-only requirements. */
  courtState?: string;
  /** Service state (where papers were served) — drives execution warnings only. Defaults to courtState. */
  serviceState?: string;
  requested?: RequestedType;
  /** ISO `yyyy-mm-dd`. Used for the Sunday check when `servedOnSunday` is not given. */
  serviceDate?: string;
  servedOnSunday?: boolean;
  cameToHandDate?: string;
  cameToHandTime?: string;
  /** Documents served; a comma/newline separated string is accepted too. */
  documentsServed?: string[] | string;
  /** Attestation tokens the user has affirmatively checked. */
  attestationsAccepted?: string[];
  /** True when service was by substituted service at the recipient's abode. */
  servedByAbode?: boolean;
  /** Actual age of the person who accepted abode service (not the statutory minimum). */
  recipientAge?: number | null;
  abodeFollowUpMailDate?: string;
  /** True when the server is a peace officer or specially appointed person (officer-only states). */
  officerAuthorized?: boolean;
  /** Physical signing / declaration execution venue (never the filing court). */
  execDate?: string;
  signingCity?: string;
  signingState?: string;
  signingCounty?: string;
  /** Values keyed by qualification.requiredFooterFields token names. */
  footerFieldValues?: Record<string, string | null | undefined>;
  /** Vars for declarationFormText `{token}` substitution (D2). */
  declarationVars?: Record<string, string | null | undefined>;
}

export interface PrintValidationResult {
  /** Non-empty errors block printing. */
  errors: string[];
  /** Warnings never block; they require an explicit acknowledgement before printing. */
  warnings: string[];
}
