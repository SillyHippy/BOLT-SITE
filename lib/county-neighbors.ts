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

// Pre-compute and cache the full sorted list of neighbors for every county
const precomputedNeighbors = new Map<string, { slug: string; countyName: string }[]>();

// Initialize the cache at module load time
const counties = Object.values(COUNTY_GEO);
for (const current of counties) {
  const sortedNeighbors = counties
    .filter((c) => c.slug !== current.slug)
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
    .map(({ slug, countyName }) => ({ slug, countyName }));

  precomputedNeighbors.set(current.slug, sortedNeighbors);
}

export function getNearbyCounties(
  slug: string,
  limit = 4
): { slug: string; countyName: string }[] {
  const neighbors = precomputedNeighbors.get(slug);
  if (!neighbors) return [];

  return neighbors.slice(0, limit);
}
