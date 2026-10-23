/**
 * Typed access to the pre-resolved jurisdiction bundle.
 *
 * The bundle is generated in the SaaS repo (scripts/build-jurisdiction-bundle.mjs) and is the
 * single source of truth for the website. It may be a placeholder (`states: {}`) in a fresh
 * checkout — every accessor here tolerates that and the rules module fails closed.
 */
import rawBundle from '../../data/jurisdiction.bundle.json';
import type {
  BundleProvenance,
  JurisdictionBundle,
  JurisdictionStateEntry,
} from './types';

/** Full bundle, typed. Cast through `unknown` because the checked-in file may be a placeholder. */
export const BUNDLE: JurisdictionBundle = rawBundle as unknown as JurisdictionBundle;

/** Provenance of the checked-in bundle (repo/branch/commit). Required for drift tracing. */
export const GENERATED_FROM: BundleProvenance = BUNDLE?.generatedFrom ?? {
  repo: 'servetracker-saas',
  branch: 'UNKNOWN',
  commit: 'UNKNOWN',
};

/** Bundle schema version this module understands. */
export const BUNDLE_SCHEMA_VERSION: number = BUNDLE?.schemaVersion ?? 0;

/** Jurisdictions keyed by state code (`OK`, `DC`, `FED`, ...). Empty for a placeholder bundle. */
export const STATES: Record<string, JurisdictionStateEntry> = BUNDLE?.states ?? {};

/** Sorted state codes present in the bundle. */
export const STATE_CODES: string[] = Object.keys(STATES).sort();

/** False while data/jurisdiction.bundle.json is still the empty placeholder. */
export const HAS_STATE_DATA: boolean = STATE_CODES.length > 0;
