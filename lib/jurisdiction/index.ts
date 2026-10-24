/**
 * Single import surface for the pure jurisdiction module.
 *
 *   import { resolveInstrument, getReturnRule, validateForPrint } from '@/lib/jurisdiction';
 *
 * Pure functions over data/jurisdiction.bundle.json — no React, no DOM, no network.
 */
export * from './types';
export {
  BUNDLE,
  BUNDLE_SCHEMA_VERSION,
  GENERATED_FROM,
  HAS_STATE_DATA,
  STATE_CODES,
  STATES,
} from './data';
export {
  getContentRule,
  getReturnRule,
  listJurisdictions,
  normalizeStateCode,
  parseVenue,
} from './rules';
export {
  fillQualificationTemplate,
  getQualification,
  getQualificationTokens,
} from './qualification';
export {
  buildDeclarationVars,
  fillDeclarationForm,
  parseExecutionDateParts,
} from './declaration';
export { resolveInstrument } from './instrument';
export { getRequiredFooterFields, validateForPrint } from './validate';
