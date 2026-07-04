import { COUNTY_GEO } from './county-geo';

function haversineMiles(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const R = 3958.8;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

const cache = new Map<string, { slug: string; countyName: string }[]>();

export function getNearbyCounties(
  slug: string,
  limit = 4
): { slug: string; countyName: string }[] {
  const cacheKey = `${slug}-${limit}`;
  if (cache.has(cacheKey)) {
    return [...cache.get(cacheKey)!];
  }

  const current = COUNTY_GEO[slug];
  if (!current) return [];

  const result = Object.values(COUNTY_GEO)
    .filter((c) => c.slug !== slug)
    .map((c) => ({
      slug: c.slug,
      countyName: c.countyName,
      dist: haversineMiles(
        current.latitude,
        current.longitude,
        c.latitude,
        c.longitude
      ),
    }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, limit)
    .map(({ slug: s, countyName }) => ({ slug: s, countyName }));

  cache.set(cacheKey, result);
  return [...result];
}
