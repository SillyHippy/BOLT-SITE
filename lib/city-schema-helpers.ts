/**
 * City Schema Helpers — City-level geo enrichment for Schema.org JSON-LD
 *
 * Provides additive city-level areaServed and geo markup for LocalBusiness schema.
 * All city entries supplement — never replace — county-level entries.
 *
 * Backward compatible: can be dropped into any page already using county schema
 * without changing existing behavior.
 */

import {
  CITY_GEO,
  CityGeoDatum,
  getCityGeoData,
  getCitiesByCounty,
  getAllCitySlugs,
  getAllCityGeoData,
} from "./city-geo";

import { COUNTY_GEO } from "./county-geo";

/* ------------------------------------------------------------------ */
/* Constants                                                          */
/* ------------------------------------------------------------------ */

/** Hard cap to prevent schema bloat / spam signal. */
const MAX_CITIES_PER_SCHEMA = 15;

/** Fixed state code for all cities in this dataset. */
const STATE_CODE = "OK";

/* ------------------------------------------------------------------ */
/* Schema-areaServed shape helpers                                     */
/* ------------------------------------------------------------------ */

/**
 * Generates a Schema.org City entry for the `areaServed` array.
 *
 * @param citySlug — slug key used in CITY_GEO (e.g. "tulsa", "oklahoma-city")
 * @returns Schema.org Place object, or undefined for invalid slugs
 */
export function generateCityAreaServedEntry(
  citySlug: string
): { type: "City"; name: string; state: string } | undefined {
  if (!citySlug || typeof citySlug !== "string") return undefined;

  const city = getCityGeoData(citySlug.trim().toLowerCase());
  if (!city) return undefined;

  return {
    type: "City",
    name: city.cityName,
    state: STATE_CODE,
  };
}

/**
 * Generates areaServed array entries for multiple cities.
 * Silently drops invalid slugs and respects the max-cities ceiling.
 *
 * @param citySlugs — array of city slug strings
 * @returns array of City areaServed objects (may be empty, never throws)
 */
export function generateCityAreaServed(
  citySlugs: string[]
): { type: "City"; name: string; state: string }[] {
  if (!Array.isArray(citySlugs) || citySlugs.length === 0) return [];

  const results: { type: "City"; name: string; state: string }[] = [];
  const seen = new Set<string>();

  for (const rawSlug of citySlugs) {
    if (results.length >= MAX_CITIES_PER_SCHEMA) break;

    const slug = String(rawSlug).trim().toLowerCase();
    if (seen.has(slug)) continue;
    seen.add(slug);

    const entry = generateCityAreaServedEntry(slug);
    if (entry) results.push(entry);
  }

  return results;
}

/**
 * Generates a Schema.org GeoCoordinates object for a given city.
 *
 * @param citySlug — slug key used in CITY_GEO
 * @returns GeoCoordinates shape or undefined for invalid slugs
 */
export function generateCityGeoMarkup(
  citySlug: string
): { "@type": "GeoCoordinates"; latitude: number; longitude: number } | undefined {
  if (!citySlug || typeof citySlug !== "string") return undefined;

  const city = getCityGeoData(citySlug.trim().toLowerCase());
  if (!city) return undefined;

  return {
    "@type": "GeoCoordinates",
    latitude: city.latitude,
    longitude: city.longitude,
  };
}

/**
 * Generates areaServed entries for a county PLUS all cities within it.
 * The county entry is always first; city entries follow (additive).
 * Useful when a page targets a county but you want city-level granularity too.
 *
 * @param countySlug — slug key used in COUNTY_GEO (e.g. "tulsa-county")
 * @returns array with county + city entries, empty array for invalid county
 */
export function generateCountyWithCitiesAreaServed(
  countySlug: string
): (
  | { type: "County"; name: string; state: string; containedInPlace: string }
  | { type: "City"; name: string; state: string }
)[] {
  if (!countySlug || typeof countySlug !== "string") return [];

  const normalizedCountySlug = countySlug.trim().toLowerCase();
  const county = COUNTY_GEO[normalizedCountySlug];
  if (!county) return [];

  const results: (
    | { type: "County"; name: string; state: string; containedInPlace: string }
    | { type: "City"; name: string; state: string }
  )[] = [
    {
      type: "County",
      name: county.countyName,
      state: STATE_CODE,
      containedInPlace: "Oklahoma",
    },
  ];

  const citiesInCounty = getCitiesByCounty(county.countyName);
  if (!citiesInCounty || citiesInCounty.length === 0) return results;

  const citySlugs = citiesInCounty
    .map((city) => {
      // Reverse-lookup slug from CITY_GEO by matching the datum
      const entry = Object.entries(CITY_GEO).find(
        ([, datum]) => datum.cityName === city.cityName && datum.countyName.toLowerCase().replace(/\s+county$/, "") === normalizedCountySlug.replace(/-county$/, "")
      );
      return entry?.[0];
    })
    .filter((slug): slug is string => !!slug);

  const cityEntries = generateCityAreaServed(citySlugs);

  // Additive merge — cities supplement the county
  return [...results, ...cityEntries];
}

/**
 * Returns a formatted list of all city names suitable for schema text fields
 * (e.g., description, areaServed name lists, etc.).
 * Sorted alphabetically, capped safely.
 *
 * @returns array of city-name strings
 */
export function getCityListForSchema(): string[] {
  const all = getAllCityGeoData();
  const names = all
    .map((city) => city.cityName)
    .filter((name): name is string => !!name);

  return [...new Set(names)].sort();
}

/* ------------------------------------------------------------------ */
/* Safe additive enrichment                                            */
/* ------------------------------------------------------------------ */

/**
 * Safely merges city-level areaServed entries into an existing schema array.
 * County entries are NEVER duplicated or overwritten — only city entries
 * that are genuinely new are appended (up to the max ceiling).
 *
 * @param existingAreaServed — current areaServed array (may include counties)
 * @param citySlugs — city slugs to add
 * @returns new array with original entries preserved + new city entries appended
 */
export function enrichSchemaWithCities(
  existingAreaServed: any[],
  citySlugs: string[]
):
  | (
      | { type: "County"; name: string; state: string; containedInPlace: string }
      | { type: "City"; name: string; state: string }
      | any
    )[] {
  // Guard: invalid existing array — treat as fresh start with just cities
  if (!Array.isArray(existingAreaServed)) {
    return generateCityAreaServed(citySlugs);
  }

  // Guard: no city slugs — pass through unchanged (preserves county behavior)
  if (!Array.isArray(citySlugs) || citySlugs.length === 0) {
    return existingAreaServed;
  }

  // Collect names already present so we never duplicate
  const existingCityNames = new Set<string>();
  for (const entry of existingAreaServed) {
    if (entry && entry.type === "City" && typeof entry.name === "string") {
      existingCityNames.add(entry.name.toLowerCase());
    }
  }

  // Build fresh city entries, skipping duplicates already in the schema
  const newCityEntries: { type: "City"; name: string; state: string }[] = [];
  const seenSlugs = new Set<string>();
  let totalCities = existingCityNames.size;

  for (const rawSlug of citySlugs) {
    if (totalCities >= MAX_CITIES_PER_SCHEMA) break;

    const slug = String(rawSlug).trim().toLowerCase();
    if (seenSlugs.has(slug)) continue;
    seenSlugs.add(slug);

    const city = getCityGeoData(slug);
    if (!city) continue;
    if (existingCityNames.has(city.cityName.toLowerCase())) continue;

    newCityEntries.push({
      type: "City",
      name: city.cityName,
      state: STATE_CODE,
    });
    totalCities++;
  }

  // Additive: original entries first, new city entries appended
  return [...existingAreaServed, ...newCityEntries];
}

/* ------------------------------------------------------------------ */
/* Convenience: validation helpers                                     */
/* ------------------------------------------------------------------ */

/**
 * Checks whether a city slug is valid (exists in CITY_GEO).
 *
 * @param citySlug — slug to validate
 * @returns true if the slug resolves to a city datum
 */
export function isValidCitySlug(citySlug: string): boolean {
  if (!citySlug || typeof citySlug !== "string") return false;
  return !!getCityGeoData(citySlug.trim().toLowerCase());
}

/**
 * Returns a list of valid city slugs from an arbitrary input array.
 * Useful when slugs come from user input, query params, or CMS data.
 *
 * @param slugs — raw slug strings
 * @returns filtered array of valid, normalized slugs
 */
export function filterValidCitySlugs(slugs: string[]): string[] {
  if (!Array.isArray(slugs)) return [];
  return slugs
    .map((s) => String(s).trim().toLowerCase())
    .filter((slug) => !!CITY_GEO[slug]);
}
