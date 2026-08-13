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

// ⚡ Bolt: Pre-compute and cache heavy static mathematical operations
const nearbyCountiesCache = new Map<string, { slug: string; countyName: string }[]>();

// Initialize the cache eagerly at module load time to shift O(N log N)
// mathematical operations and array sorting to initialization time
for (const [slug, current] of Object.entries(COUNTY_GEO)) {
  const neighbors = Object.values(COUNTY_GEO)
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
    .map(({ slug: s, countyName }) => ({ slug: s, countyName }));

  nearbyCountiesCache.set(slug, neighbors);
}

export function getNearbyCounties(
  slug: string,
  limit = 4
): { slug: string; countyName: string }[] {
  const neighbors = nearbyCountiesCache.get(slug);
  if (!neighbors) return [];

  return neighbors.slice(0, limit);
}
