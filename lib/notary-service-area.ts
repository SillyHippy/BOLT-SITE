/**
 * In-person / mobile notary coverage (Glenpool-based).
 * Remote Online Notarization (RON) is separate — signers can be anywhere
 * (US + worldwide where law, lender, and ID/KBA rules allow). The
 * commissioned notary performs the RON session while physically in Oklahoma.
 * Process serving remains statewide on its own pages.
 */

/** RON: signer geography vs notary location (use on /notary and /remote-online-notary). */
export const NOTARY_RON_SIGNER_SCOPE =
  'Signers can join from anywhere in the United States and from other countries wherever remote notarization is permitted for your document type. Your Oklahoma-commissioned notary performs each RON session while physically present in Oklahoma.';

export const NOTARY_RON_SIGNER_SCOPE_SHORT =
  'Signers: all U.S. states & worldwide where allowed. Notary: physically in Oklahoma.';

export const NOTARY_HUB_LAT = 35.9531;
export const NOTARY_HUB_LNG = -96.0039;
export const NOTARY_MOBILE_RADIUS_MILES = 50;

/** Short line for meta / badges */
export const NOTARY_MOBILE_AREA_TAGLINE =
  '~50 miles from Glenpool — Tulsa County & surrounding counties';

/** Counties commonly served within the mobile radius (not exhaustive). */
export const NOTARY_MOBILE_COUNTIES = [
  'Tulsa County',
  'Creek County',
  'Wagoner County',
  'Rogers County',
  'Osage County',
  'Okmulgee County',
] as const;

/** Schema.org areaServed for mobile + in-office notary (RON is worldwide separately). */
export const notaryMobileGeoCircleAreaServed = {
  '@type': 'GeoCircle',
  name: `Mobile notary within approximately ${NOTARY_MOBILE_RADIUS_MILES} miles of Glenpool, OK`,
  geoMidpoint: {
    '@type': 'GeoCoordinates',
    latitude: NOTARY_HUB_LAT,
    longitude: NOTARY_HUB_LNG,
  },
  geoRadius: {
    '@type': 'Distance',
    value: NOTARY_MOBILE_RADIUS_MILES,
    unitCode: 'SMI',
  },
};
