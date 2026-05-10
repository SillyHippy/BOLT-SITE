/**
 * Oklahoma City/Town Geo Dataset -- PHASE 2 Enrichment
 *
 * Source priority:
 *   1. US Census Bureau 2024 Gazetteer place files
 *   2. Wikipedia coordinates (sourced from USGS/Census)
 *   3. Oklahoma State/County GIS data
 *
 * Coverage: 577 incorporated cities/towns across all 77 Oklahoma counties
 * Last verified: 2026-04-23
 *
 * NOTE: This dataset supplements lib/county-geo.ts. Both datasets are
 *       used together for schema areaServed + geo enrichment.
 */

export interface CityGeoDatum {
  slug: string;
  cityName: string;
  countyName: string;
  latitude: number;
  longitude: number;
  sourceUrl: string;
  sourceType: 'Census' | 'StateGIS' | 'CountyGIS' | 'Other';
  lastVerified: string;
}

export const CITY_GEO: Record<string, CityGeoDatum> = {

  "ada": {
    "slug": "ada",
    "cityName": "Ada",
    "countyName": "Pontotoc County",
    "latitude": 34.767914,
    "longitude": -96.669114,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "adair": {
    "slug": "adair",
    "cityName": "Adair",
    "countyName": "Mayes County",
    "latitude": 36.43641,
    "longitude": -95.273445,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "afton": {
    "slug": "afton",
    "cityName": "Afton",
    "countyName": "Ottawa County",
    "latitude": 36.696535,
    "longitude": -94.957463,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "agra": {
    "slug": "agra",
    "cityName": "Agra",
    "countyName": "Lincoln County",
    "latitude": 35.894937,
    "longitude": -96.870195,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "albany": {
    "slug": "albany",
    "cityName": "Albany",
    "countyName": "Bryan County",
    "latitude": 33.874518,
    "longitude": -96.155242,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "albert": {
    "slug": "albert",
    "cityName": "Albert",
    "countyName": "Caddo County",
    "latitude": 35.23278,
    "longitude": -98.41139,
    "sourceUrl": "https://en.wikipedia.org/wiki/Albert,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "albion": {
    "slug": "albion",
    "cityName": "Albion",
    "countyName": "Pushmataha County",
    "latitude": 34.662141,
    "longitude": -95.099369,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "alderson": {
    "slug": "alderson",
    "cityName": "Alderson",
    "countyName": "Pittsburg County",
    "latitude": 34.900593,
    "longitude": -95.689431,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "alex": {
    "slug": "alex",
    "cityName": "Alex",
    "countyName": "Grady County",
    "latitude": 34.922801,
    "longitude": -97.776329,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "aline": {
    "slug": "aline",
    "cityName": "Aline",
    "countyName": "Alfalfa County",
    "latitude": 36.50967,
    "longitude": -98.448672,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "allen": {
    "slug": "allen",
    "cityName": "Allen",
    "countyName": "Pontotoc County",
    "latitude": 34.877628,
    "longitude": -96.412889,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "altus": {
    "slug": "altus",
    "cityName": "Altus",
    "countyName": "Jackson County",
    "latitude": 34.657061,
    "longitude": -99.309046,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "alva": {
    "slug": "alva",
    "cityName": "Alva",
    "countyName": "Woods County",
    "latitude": 36.789566,
    "longitude": -98.664877,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "amber": {
    "slug": "amber",
    "cityName": "Amber",
    "countyName": "Grady County",
    "latitude": 35.160232,
    "longitude": -97.882055,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "ames": {
    "slug": "ames",
    "cityName": "Ames",
    "countyName": "Major County",
    "latitude": 36.246962,
    "longitude": -98.186139,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "anadarko": {
    "slug": "anadarko",
    "cityName": "Anadarko",
    "countyName": "Caddo County",
    "latitude": 35.065296,
    "longitude": -98.244469,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "antlers": {
    "slug": "antlers",
    "cityName": "Antlers",
    "countyName": "Pushmataha County",
    "latitude": 34.233026,
    "longitude": -95.622759,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "apache": {
    "slug": "apache",
    "cityName": "Apache",
    "countyName": "Caddo County",
    "latitude": 34.894169,
    "longitude": -98.358726,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "arapaho": {
    "slug": "arapaho",
    "cityName": "Arapaho",
    "countyName": "Custer County",
    "latitude": 35.577797,
    "longitude": -98.959345,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "arcadia": {
    "slug": "arcadia",
    "cityName": "Arcadia",
    "countyName": "Oklahoma County",
    "latitude": 35.665487,
    "longitude": -97.325515,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "ardmore": {
    "slug": "ardmore",
    "cityName": "Ardmore",
    "countyName": "Carter County",
    "latitude": 34.196507,
    "longitude": -97.131848,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "arkoma": {
    "slug": "arkoma",
    "cityName": "Arkoma",
    "countyName": "Le Flore County",
    "latitude": 35.330247,
    "longitude": -94.448332,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "arnett": {
    "slug": "arnett",
    "cityName": "Arnett",
    "countyName": "Ellis County",
    "latitude": 36.134487,
    "longitude": -99.772706,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "ashland": {
    "slug": "ashland",
    "cityName": "Ashland",
    "countyName": "Pittsburg County",
    "latitude": 34.765566,
    "longitude": -96.070867,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "atoka": {
    "slug": "atoka",
    "cityName": "Atoka",
    "countyName": "Atoka County",
    "latitude": 34.386353,
    "longitude": -96.131101,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "atwood": {
    "slug": "atwood",
    "cityName": "Atwood",
    "countyName": "Hughes County",
    "latitude": 34.955155,
    "longitude": -96.336762,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "avant": {
    "slug": "avant",
    "cityName": "Avant",
    "countyName": "Osage County",
    "latitude": 36.489631,
    "longitude": -96.04626,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "avard": {
    "slug": "avard",
    "cityName": "Avard",
    "countyName": "Woods County",
    "latitude": 36.697358,
    "longitude": -98.789357,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "avery": {
    "slug": "avery",
    "cityName": "Avery",
    "countyName": "Lincoln County",
    "latitude": 35.88389,
    "longitude": -96.75222,
    "sourceUrl": "https://en.wikipedia.org/wiki/Avery,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "avoca": {
    "slug": "avoca",
    "cityName": "Avoca",
    "countyName": "Pottawatomie County",
    "latitude": 35.01389,
    "longitude": -96.93056,
    "sourceUrl": "https://en.wikipedia.org/wiki/Avoca,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "baker": {
    "slug": "baker",
    "cityName": "Baker",
    "countyName": "Texas County",
    "latitude": 36.870414,
    "longitude": -101.017712,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bald-hill": {
    "slug": "bald-hill",
    "cityName": "Bald Hill",
    "countyName": "Okmulgee County",
    "latitude": 35.74028,
    "longitude": -95.83722,
    "sourceUrl": "https://en.wikipedia.org/wiki/Bald_Hill,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "balko": {
    "slug": "balko",
    "cityName": "Balko",
    "countyName": "Beaver County",
    "latitude": 36.630027,
    "longitude": -100.684874,
    "sourceUrl": "https://en.wikipedia.org/wiki/Balko,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "barnsdall": {
    "slug": "barnsdall",
    "cityName": "Barnsdall",
    "countyName": "Osage County",
    "latitude": 36.560938,
    "longitude": -96.15577,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bartlesville": {
    "slug": "bartlesville",
    "cityName": "Bartlesville",
    "countyName": "Washington County",
    "latitude": 36.737668,
    "longitude": -95.948454,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "beaver": {
    "slug": "beaver",
    "cityName": "Beaver",
    "countyName": "Beaver County",
    "latitude": 36.815087,
    "longitude": -100.523543,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "beggs": {
    "slug": "beggs",
    "cityName": "Beggs",
    "countyName": "Okmulgee County",
    "latitude": 35.741386,
    "longitude": -96.066464,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bennington": {
    "slug": "bennington",
    "cityName": "Bennington",
    "countyName": "Bryan County",
    "latitude": 34.005396,
    "longitude": -96.038388,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bernice": {
    "slug": "bernice",
    "cityName": "Bernice",
    "countyName": "Delaware County",
    "latitude": 36.623395,
    "longitude": -94.913481,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bessie": {
    "slug": "bessie",
    "cityName": "Bessie",
    "countyName": "Washita County",
    "latitude": 35.385419,
    "longitude": -98.989178,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bethany": {
    "slug": "bethany",
    "cityName": "Bethany",
    "countyName": "Oklahoma County",
    "latitude": 35.507174,
    "longitude": -97.641734,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bethel-acres": {
    "slug": "bethel-acres",
    "cityName": "Bethel Acres",
    "countyName": "Pottawatomie County",
    "latitude": 35.311366,
    "longitude": -97.045059,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "big-cabin": {
    "slug": "big-cabin",
    "cityName": "Big Cabin",
    "countyName": "Craig County",
    "latitude": 36.537602,
    "longitude": -95.229368,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "billings": {
    "slug": "billings",
    "cityName": "Billings",
    "countyName": "Noble County",
    "latitude": 36.537595,
    "longitude": -97.441749,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "binger": {
    "slug": "binger",
    "cityName": "Binger",
    "countyName": "Caddo County",
    "latitude": 35.310487,
    "longitude": -98.343134,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bixby": {
    "slug": "bixby",
    "cityName": "Bixby",
    "countyName": "Tulsa County",
    "latitude": 35.945571,
    "longitude": -95.878343,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "blackwell": {
    "slug": "blackwell",
    "cityName": "Blackwell",
    "countyName": "Kay County",
    "latitude": 36.801341,
    "longitude": -97.300871,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "blair": {
    "slug": "blair",
    "cityName": "Blair",
    "countyName": "Jackson County",
    "latitude": 34.780193,
    "longitude": -99.333436,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "blanchard": {
    "slug": "blanchard",
    "cityName": "Blanchard",
    "countyName": "McClain County",
    "latitude": 35.152343,
    "longitude": -97.665221,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "boise-city": {
    "slug": "boise-city",
    "cityName": "Boise City",
    "countyName": "Cimarron County",
    "latitude": 36.731336,
    "longitude": -102.509522,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bokchito": {
    "slug": "bokchito",
    "cityName": "Bokchito",
    "countyName": "Bryan County",
    "latitude": 34.015434,
    "longitude": -96.141577,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bokoshe": {
    "slug": "bokoshe",
    "cityName": "Bokoshe",
    "countyName": "Le Flore County",
    "latitude": 35.190371,
    "longitude": -94.790406,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "boswell": {
    "slug": "boswell",
    "cityName": "Boswell",
    "countyName": "Choctaw County",
    "latitude": 34.027613,
    "longitude": -95.869957,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bowlegs": {
    "slug": "bowlegs",
    "cityName": "Bowlegs",
    "countyName": "Seminole County",
    "latitude": 35.147276,
    "longitude": -96.669273,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "boynton": {
    "slug": "boynton",
    "cityName": "Boynton",
    "countyName": "Muskogee County",
    "latitude": 35.649415,
    "longitude": -95.6541,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bradley": {
    "slug": "bradley",
    "cityName": "Bradley",
    "countyName": "Grady County",
    "latitude": 34.877967,
    "longitude": -97.708744,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "braggs": {
    "slug": "braggs",
    "cityName": "Braggs",
    "countyName": "Muskogee County",
    "latitude": 35.663293,
    "longitude": -95.198339,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "braman": {
    "slug": "braman",
    "cityName": "Braman",
    "countyName": "Kay County",
    "latitude": 36.923644,
    "longitude": -97.335815,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bray": {
    "slug": "bray",
    "cityName": "Bray",
    "countyName": "Stephens County",
    "latitude": 34.60836,
    "longitude": -97.817484,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bridge-creek": {
    "slug": "bridge-creek",
    "cityName": "Bridge Creek",
    "countyName": "Grady County",
    "latitude": 35.233546,
    "longitude": -97.734686,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bristow": {
    "slug": "bristow",
    "cityName": "Bristow",
    "countyName": "Creek County",
    "latitude": 35.833592,
    "longitude": -96.394395,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "broken-arrow": {
    "slug": "broken-arrow",
    "cityName": "Broken Arrow",
    "countyName": "Tulsa County",
    "latitude": 36.036529,
    "longitude": -95.780996,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "broken-bow": {
    "slug": "broken-bow",
    "cityName": "Broken Bow",
    "countyName": "McCurtain County",
    "latitude": 34.028862,
    "longitude": -94.741357,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "bromide": {
    "slug": "bromide",
    "cityName": "Bromide",
    "countyName": "Johnston County",
    "latitude": 34.418295,
    "longitude": -96.494761,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "brooksville": {
    "slug": "brooksville",
    "cityName": "Brooksville",
    "countyName": "Pottawatomie County",
    "latitude": 35.209675,
    "longitude": -96.961127,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "buffalo": {
    "slug": "buffalo",
    "cityName": "Buffalo",
    "countyName": "Harper County",
    "latitude": 36.829412,
    "longitude": -99.637673,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "burbank": {
    "slug": "burbank",
    "cityName": "Burbank",
    "countyName": "Osage County",
    "latitude": 36.696085,
    "longitude": -96.728112,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "burlington": {
    "slug": "burlington",
    "cityName": "Burlington",
    "countyName": "Alfalfa County",
    "latitude": 36.900213,
    "longitude": -98.42341,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "burns-flat": {
    "slug": "burns-flat",
    "cityName": "Burns Flat",
    "countyName": "Washita County",
    "latitude": 35.354693,
    "longitude": -99.175017,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "butler": {
    "slug": "butler",
    "cityName": "Butler",
    "countyName": "Custer County",
    "latitude": 35.636448,
    "longitude": -99.186377,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "byars": {
    "slug": "byars",
    "cityName": "Byars",
    "countyName": "McClain County",
    "latitude": 34.871969,
    "longitude": -97.054224,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "byng": {
    "slug": "byng",
    "cityName": "Byng",
    "countyName": "Pontotoc County",
    "latitude": 34.865667,
    "longitude": -96.66777,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "cache": {
    "slug": "cache",
    "cityName": "Cache",
    "countyName": "Comanche County",
    "latitude": 34.62667,
    "longitude": -98.62944,
    "sourceUrl": "https://en.wikipedia.org/wiki/Cache,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "caddo": {
    "slug": "caddo",
    "cityName": "Caddo",
    "countyName": "Bryan County",
    "latitude": 34.12556,
    "longitude": -96.26361,
    "sourceUrl": "https://en.wikipedia.org/wiki/Caddo,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "calera": {
    "slug": "calera",
    "cityName": "Calera",
    "countyName": "Bryan County",
    "latitude": 33.93028,
    "longitude": -96.42917,
    "sourceUrl": "https://en.wikipedia.org/wiki/Calera,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "calumet": {
    "slug": "calumet",
    "cityName": "Calumet",
    "countyName": "Canadian County",
    "latitude": 35.60056,
    "longitude": -98.12028,
    "sourceUrl": "https://en.wikipedia.org/wiki/Calumet,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "calvin": {
    "slug": "calvin",
    "cityName": "Calvin",
    "countyName": "Hughes County",
    "latitude": 34.96611,
    "longitude": -96.24972,
    "sourceUrl": "https://en.wikipedia.org/wiki/Calvin,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "canadian": {
    "slug": "canadian",
    "cityName": "Canadian",
    "countyName": "Pittsburg County",
    "latitude": 35.17389,
    "longitude": -95.64944,
    "sourceUrl": "https://en.wikipedia.org/wiki/Canadian,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "caney": {
    "slug": "caney",
    "cityName": "Caney",
    "countyName": "Atoka County",
    "latitude": 34.23583,
    "longitude": -96.21722,
    "sourceUrl": "https://en.wikipedia.org/wiki/Caney,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "canton": {
    "slug": "canton",
    "cityName": "Canton",
    "countyName": "Blaine County",
    "latitude": 36.055,
    "longitude": -98.58833,
    "sourceUrl": "https://en.wikipedia.org/wiki/Canton,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "canute": {
    "slug": "canute",
    "cityName": "Canute",
    "countyName": "Washita County",
    "latitude": 35.42194,
    "longitude": -99.27806,
    "sourceUrl": "https://en.wikipedia.org/wiki/Canute,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "capron": {
    "slug": "capron",
    "cityName": "Capron",
    "countyName": "Woods County",
    "latitude": 36.89667,
    "longitude": -98.5775,
    "sourceUrl": "https://en.wikipedia.org/wiki/Capron,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "cardin": {
    "slug": "cardin",
    "cityName": "Cardin",
    "countyName": "Ottawa County",
    "latitude": 36.97556,
    "longitude": -94.85167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Cardin,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "carlisle": {
    "slug": "carlisle",
    "cityName": "Carlisle",
    "countyName": "Sequoyah County",
    "latitude": 35.50065,
    "longitude": -95.02634,
    "sourceUrl": "https://en.wikipedia.org/wiki/Carlisle,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "carnegie": {
    "slug": "carnegie",
    "cityName": "Carnegie",
    "countyName": "Caddo County",
    "latitude": 35.10278,
    "longitude": -98.59972,
    "sourceUrl": "https://en.wikipedia.org/wiki/Carnegie,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "carney": {
    "slug": "carney",
    "cityName": "Carney",
    "countyName": "Lincoln County",
    "latitude": 35.80611,
    "longitude": -97.01556,
    "sourceUrl": "https://en.wikipedia.org/wiki/Carney,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "carter": {
    "slug": "carter",
    "cityName": "Carter",
    "countyName": "Beckham County",
    "latitude": 35.21806,
    "longitude": -99.50361,
    "sourceUrl": "https://en.wikipedia.org/wiki/Carter,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "cashion": {
    "slug": "cashion",
    "cityName": "Cashion",
    "countyName": "Kingfisher County",
    "latitude": 35.80083,
    "longitude": -97.67694,
    "sourceUrl": "https://en.wikipedia.org/wiki/Cashion,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "castle": {
    "slug": "castle",
    "cityName": "Castle",
    "countyName": "Okfuskee County",
    "latitude": 35.47528,
    "longitude": -96.38417,
    "sourceUrl": "https://en.wikipedia.org/wiki/Castle,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "catoosa": {
    "slug": "catoosa",
    "cityName": "Catoosa",
    "countyName": "Rogers County",
    "latitude": 36.18222,
    "longitude": -95.75972,
    "sourceUrl": "https://en.wikipedia.org/wiki/Catoosa,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "cedar-valley": {
    "slug": "cedar-valley",
    "cityName": "Cedar Valley",
    "countyName": "Logan County",
    "latitude": 35.86028,
    "longitude": -97.56306,
    "sourceUrl": "https://en.wikipedia.org/wiki/Cedar_Valley,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "cement": {
    "slug": "cement",
    "cityName": "Cement",
    "countyName": "Caddo County",
    "latitude": 34.93611,
    "longitude": -98.13639,
    "sourceUrl": "https://en.wikipedia.org/wiki/Cement,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "central-high": {
    "slug": "central-high",
    "cityName": "Central High",
    "countyName": "Stephens County",
    "latitude": 34.61583,
    "longitude": -98.08028,
    "sourceUrl": "https://en.wikipedia.org/wiki/Central_High,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "chandler": {
    "slug": "chandler",
    "cityName": "Chandler",
    "countyName": "Lincoln County",
    "latitude": 35.70917,
    "longitude": -96.88972,
    "sourceUrl": "https://en.wikipedia.org/wiki/Chandler,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "chattanooga": {
    "slug": "chattanooga",
    "cityName": "Chattanooga",
    "countyName": "Comanche County",
    "latitude": 34.42389,
    "longitude": -98.65389,
    "sourceUrl": "https://en.wikipedia.org/wiki/Chattanooga,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "checotah": {
    "slug": "checotah",
    "cityName": "Checotah",
    "countyName": "McIntosh County",
    "latitude": 35.47194,
    "longitude": -95.52389,
    "sourceUrl": "https://en.wikipedia.org/wiki/Checotah,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "chelsea": {
    "slug": "chelsea",
    "cityName": "Chelsea",
    "countyName": "Rogers County",
    "latitude": 36.53556,
    "longitude": -95.4325,
    "sourceUrl": "https://en.wikipedia.org/wiki/Chelsea,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "cherokee": {
    "slug": "cherokee",
    "cityName": "Cherokee",
    "countyName": "Alfalfa County",
    "latitude": 36.75694,
    "longitude": -98.35389,
    "sourceUrl": "https://en.wikipedia.org/wiki/Cherokee,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "cheyenne": {
    "slug": "cheyenne",
    "cityName": "Cheyenne",
    "countyName": "Roger Mills County",
    "latitude": 35.61083,
    "longitude": -99.67639,
    "sourceUrl": "https://en.wikipedia.org/wiki/Cheyenne,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "chickasha": {
    "slug": "chickasha",
    "cityName": "Chickasha",
    "countyName": "Grady County",
    "latitude": 35.04111,
    "longitude": -97.94722,
    "sourceUrl": "https://en.wikipedia.org/wiki/Chickasha,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "choctaw": {
    "slug": "choctaw",
    "cityName": "Choctaw",
    "countyName": "Oklahoma County",
    "latitude": 35.4825,
    "longitude": -97.26722,
    "sourceUrl": "https://en.wikipedia.org/wiki/Choctaw,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "chouteau": {
    "slug": "chouteau",
    "cityName": "Chouteau",
    "countyName": "Mayes County",
    "latitude": 36.18944,
    "longitude": -95.3375,
    "sourceUrl": "https://en.wikipedia.org/wiki/Chouteau,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "claremore": {
    "slug": "claremore",
    "cityName": "Claremore",
    "countyName": "Rogers County",
    "latitude": 36.31528,
    "longitude": -95.60889,
    "sourceUrl": "https://en.wikipedia.org/wiki/Claremore,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "clarita": {
    "slug": "clarita",
    "cityName": "Clarita",
    "countyName": "Coal County",
    "latitude": 34.48278,
    "longitude": -96.43333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Clarita,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "clayton": {
    "slug": "clayton",
    "cityName": "Clayton",
    "countyName": "Pushmataha County",
    "latitude": 34.58556,
    "longitude": -95.35611,
    "sourceUrl": "https://en.wikipedia.org/wiki/Clayton,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "cleveland": {
    "slug": "cleveland",
    "cityName": "Cleveland",
    "countyName": "Pawnee County",
    "latitude": 36.31222,
    "longitude": -96.47167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Cleveland,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "clinton": {
    "slug": "clinton",
    "cityName": "Clinton",
    "countyName": "Custer County",
    "latitude": 35.50667,
    "longitude": -98.97056,
    "sourceUrl": "https://en.wikipedia.org/wiki/Clinton,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "coalgate": {
    "slug": "coalgate",
    "cityName": "Coalgate",
    "countyName": "Coal County",
    "latitude": 34.53361,
    "longitude": -96.22028,
    "sourceUrl": "https://en.wikipedia.org/wiki/Coalgate,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "coleman": {
    "slug": "coleman",
    "cityName": "Coleman",
    "countyName": "Johnston County",
    "latitude": 34.26361,
    "longitude": -96.41944,
    "sourceUrl": "https://en.wikipedia.org/wiki/Coleman,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "collinsville": {
    "slug": "collinsville",
    "cityName": "Collinsville",
    "countyName": "Tulsa County",
    "latitude": 36.3645,
    "longitude": -95.8389,
    "sourceUrl": "https://en.wikipedia.org/wiki/Collinsville,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "colony": {
    "slug": "colony",
    "cityName": "Colony",
    "countyName": "Washita County",
    "latitude": 35.351,
    "longitude": -98.6733,
    "sourceUrl": "https://en.wikipedia.org/wiki/Colony,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "comanche": {
    "slug": "comanche",
    "cityName": "Comanche",
    "countyName": "Stephens County",
    "latitude": 34.34194,
    "longitude": -97.86611,
    "sourceUrl": "https://en.wikipedia.org/wiki/Comanche,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "commerce": {
    "slug": "commerce",
    "cityName": "Commerce",
    "countyName": "Ottawa County",
    "latitude": 36.93361,
    "longitude": -94.87139,
    "sourceUrl": "https://en.wikipedia.org/wiki/Commerce,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "connerville": {
    "slug": "connerville",
    "cityName": "Connerville",
    "countyName": "Johnston County",
    "latitude": 34.43806,
    "longitude": -96.63611,
    "sourceUrl": "https://en.wikipedia.org/wiki/Connerville,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "copan": {
    "slug": "copan",
    "cityName": "Copan",
    "countyName": "Washington County",
    "latitude": 36.90056,
    "longitude": -95.92528,
    "sourceUrl": "https://en.wikipedia.org/wiki/Copan,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "cordell": {
    "slug": "cordell",
    "cityName": "Cordell",
    "countyName": "Washita County",
    "latitude": 35.29667,
    "longitude": -98.98389,
    "sourceUrl": "https://en.wikipedia.org/wiki/New_Cordell,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "corn": {
    "slug": "corn",
    "cityName": "Corn",
    "countyName": "Washita County",
    "latitude": 35.37917,
    "longitude": -98.78167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Corn,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "council-hill": {
    "slug": "council-hill",
    "cityName": "Council Hill",
    "countyName": "Muskogee County",
    "latitude": 35.5553,
    "longitude": -95.6519,
    "sourceUrl": "https://en.wikipedia.org/wiki/Council_Hill,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "covington": {
    "slug": "covington",
    "cityName": "Covington",
    "countyName": "Garfield County",
    "latitude": 36.3075,
    "longitude": -97.58639,
    "sourceUrl": "https://en.wikipedia.org/wiki/Covington,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "coweta": {
    "slug": "coweta",
    "cityName": "Coweta",
    "countyName": "Wagoner County",
    "latitude": 35.96306,
    "longitude": -95.66167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Coweta,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "cowlington": {
    "slug": "cowlington",
    "cityName": "Cowlington",
    "countyName": "Haskell County",
    "latitude": 35.31056,
    "longitude": -94.78778,
    "sourceUrl": "https://en.wikipedia.org/wiki/Cowlington,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "coyle": {
    "slug": "coyle",
    "cityName": "Coyle",
    "countyName": "Logan County",
    "latitude": 35.95194,
    "longitude": -97.23611,
    "sourceUrl": "https://en.wikipedia.org/wiki/Coyle,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "crescent": {
    "slug": "crescent",
    "cityName": "Crescent",
    "countyName": "Logan County",
    "latitude": 35.95296,
    "longitude": -97.59503,
    "sourceUrl": "https://en.wikipedia.org/wiki/Crescent,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "cromwell": {
    "slug": "cromwell",
    "cityName": "Cromwell",
    "countyName": "Seminole County",
    "latitude": 35.34081,
    "longitude": -96.45884,
    "sourceUrl": "https://en.wikipedia.org/wiki/Cromwell,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "crowder": {
    "slug": "crowder",
    "cityName": "Crowder",
    "countyName": "Pittsburg County",
    "latitude": 35.12278,
    "longitude": -95.66806,
    "sourceUrl": "https://en.wikipedia.org/wiki/Crowder,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "cushing": {
    "slug": "cushing",
    "cityName": "Cushing",
    "countyName": "Payne County",
    "latitude": 35.97972,
    "longitude": -96.76083,
    "sourceUrl": "https://en.wikipedia.org/wiki/Cushing,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "cyril": {
    "slug": "cyril",
    "cityName": "Cyril",
    "countyName": "Caddo County",
    "latitude": 34.8981,
    "longitude": -98.2028,
    "sourceUrl": "https://en.wikipedia.org/wiki/Cyril,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "dacoma": {
    "slug": "dacoma",
    "cityName": "Dacoma",
    "countyName": "Woods County",
    "latitude": 36.65962,
    "longitude": -98.56347,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "daisy": {
    "slug": "daisy",
    "cityName": "Daisy",
    "countyName": "Atoka County",
    "latitude": 34.53583,
    "longitude": -95.73972,
    "sourceUrl": "https://en.wikipedia.org/wiki/Daisy,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "davenport": {
    "slug": "davenport",
    "cityName": "Davenport",
    "countyName": "Lincoln County",
    "latitude": 35.70938,
    "longitude": -96.76421,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "davidson": {
    "slug": "davidson",
    "cityName": "Davidson",
    "countyName": "Tillman County",
    "latitude": 34.2421,
    "longitude": -99.07811,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "davis": {
    "slug": "davis",
    "cityName": "Davis",
    "countyName": "Murray County",
    "latitude": 34.50472,
    "longitude": -97.10861,
    "sourceUrl": "https://en.wikipedia.org/wiki/Davis,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "deer-creek": {
    "slug": "deer-creek",
    "cityName": "Deer Creek",
    "countyName": "Grant County",
    "latitude": 36.80668,
    "longitude": -97.51948,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "del-city": {
    "slug": "del-city",
    "cityName": "Del City",
    "countyName": "Oklahoma County",
    "latitude": 35.44828,
    "longitude": -97.44079,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "delaware": {
    "slug": "delaware",
    "cityName": "Delaware",
    "countyName": "Nowata County",
    "latitude": 36.77896,
    "longitude": -95.64254,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "depew": {
    "slug": "depew",
    "cityName": "Depew",
    "countyName": "Creek County",
    "latitude": 35.80144,
    "longitude": -96.51107,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "devol": {
    "slug": "devol",
    "cityName": "Devol",
    "countyName": "Cotton County",
    "latitude": 34.1954,
    "longitude": -98.58819,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "dewar": {
    "slug": "dewar",
    "cityName": "Dewar",
    "countyName": "Okmulgee County",
    "latitude": 35.45792,
    "longitude": -95.94913,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "dewey": {
    "slug": "dewey",
    "cityName": "Dewey",
    "countyName": "Washington County",
    "latitude": 36.7904,
    "longitude": -95.93371,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "dibble": {
    "slug": "dibble",
    "cityName": "Dibble",
    "countyName": "McClain County",
    "latitude": 35.01966,
    "longitude": -97.62709,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "dill-city": {
    "slug": "dill-city",
    "cityName": "Dill City",
    "countyName": "Washita County",
    "latitude": 35.28182,
    "longitude": -99.13365,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "disney": {
    "slug": "disney",
    "cityName": "Disney",
    "countyName": "Mayes County",
    "latitude": 36.47414,
    "longitude": -95.01784,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "dougherty": {
    "slug": "dougherty",
    "cityName": "Dougherty",
    "countyName": "Murray County",
    "latitude": 34.39981,
    "longitude": -97.05148,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "douglas": {
    "slug": "douglas",
    "cityName": "Douglas",
    "countyName": "Garfield County",
    "latitude": 36.26046,
    "longitude": -97.6666,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "dover": {
    "slug": "dover",
    "cityName": "Dover",
    "countyName": "Kingfisher County",
    "latitude": 35.98135,
    "longitude": -97.91082,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "drummond": {
    "slug": "drummond",
    "cityName": "Drummond",
    "countyName": "Garfield County",
    "latitude": 36.30172,
    "longitude": -98.03578,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "drumright": {
    "slug": "drumright",
    "cityName": "Drumright",
    "countyName": "Creek County",
    "latitude": 35.98992,
    "longitude": -96.59742,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "duke": {
    "slug": "duke",
    "cityName": "Duke",
    "countyName": "Jackson County",
    "latitude": 34.66278,
    "longitude": -99.56972,
    "sourceUrl": "https://en.wikipedia.org/wiki/Duke,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "duncan": {
    "slug": "duncan",
    "cityName": "Duncan",
    "countyName": "Stephens County",
    "latitude": 34.48161,
    "longitude": -97.96054,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "durant": {
    "slug": "durant",
    "cityName": "Durant",
    "countyName": "Bryan County",
    "latitude": 33.99515,
    "longitude": -96.39254,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "dustin": {
    "slug": "dustin",
    "cityName": "Dustin",
    "countyName": "Hughes County",
    "latitude": 35.27125,
    "longitude": -96.02783,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "eakly": {
    "slug": "eakly",
    "cityName": "Eakly",
    "countyName": "Caddo County",
    "latitude": 35.30536,
    "longitude": -98.55619,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "east-duke": {
    "slug": "east-duke",
    "cityName": "East Duke",
    "countyName": "Jackson County",
    "latitude": 34.66283,
    "longitude": -99.56963,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "edmond": {
    "slug": "edmond",
    "cityName": "Edmond",
    "countyName": "Oklahoma County",
    "latitude": 35.67381,
    "longitude": -97.41308,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "el-reno": {
    "slug": "el-reno",
    "cityName": "El Reno",
    "countyName": "Canadian County",
    "latitude": 35.54183,
    "longitude": -97.96127,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "eldorado": {
    "slug": "eldorado",
    "cityName": "Eldorado",
    "countyName": "Jackson County",
    "latitude": 34.47295,
    "longitude": -99.64962,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "elgin": {
    "slug": "elgin",
    "cityName": "Elgin",
    "countyName": "Comanche County",
    "latitude": 34.78594,
    "longitude": -98.29663,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "elk-city": {
    "slug": "elk-city",
    "cityName": "Elk City",
    "countyName": "Beckham County",
    "latitude": 35.38961,
    "longitude": -99.42875,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "elmwood": {
    "slug": "elmwood",
    "cityName": "Elmwood",
    "countyName": "Beaver County",
    "latitude": 36.61639,
    "longitude": -100.52306,
    "sourceUrl": "https://en.wikipedia.org/wiki/Elmwood,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "empire-city": {
    "slug": "empire-city",
    "cityName": "Empire City",
    "countyName": "Stephens County",
    "latitude": 34.47761,
    "longitude": -98.05944,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "enid": {
    "slug": "enid",
    "cityName": "Enid",
    "countyName": "Garfield County",
    "latitude": 36.4067,
    "longitude": -97.86986,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "erick": {
    "slug": "erick",
    "cityName": "Erick",
    "countyName": "Beckham County",
    "latitude": 35.2156,
    "longitude": -99.86868,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "etowah": {
    "slug": "etowah",
    "cityName": "Etowah",
    "countyName": "Cleveland County",
    "latitude": 35.12593,
    "longitude": -97.1704,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "eufaula": {
    "slug": "eufaula",
    "cityName": "Eufaula",
    "countyName": "McIntosh County",
    "latitude": 35.29211,
    "longitude": -95.58643,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fair-oaks": {
    "slug": "fair-oaks",
    "cityName": "Fair Oaks",
    "countyName": "Wagoner County",
    "latitude": 36.15899,
    "longitude": -95.69069,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fairfax": {
    "slug": "fairfax",
    "cityName": "Fairfax",
    "countyName": "Osage County",
    "latitude": 36.57008,
    "longitude": -96.70789,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fairland": {
    "slug": "fairland",
    "cityName": "Fairland",
    "countyName": "Ottawa County",
    "latitude": 36.75139,
    "longitude": -94.84727,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fairmont": {
    "slug": "fairmont",
    "cityName": "Fairmont",
    "countyName": "Garfield County",
    "latitude": 36.35601,
    "longitude": -97.70546,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fairview": {
    "slug": "fairview",
    "cityName": "Fairview",
    "countyName": "Major County",
    "latitude": 36.27061,
    "longitude": -98.47702,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fanshawe": {
    "slug": "fanshawe",
    "cityName": "Fanshawe",
    "countyName": "Latimer County",
    "latitude": 34.96195,
    "longitude": -94.91118,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fargo": {
    "slug": "fargo",
    "cityName": "Fargo",
    "countyName": "Ellis County",
    "latitude": 36.37421,
    "longitude": -99.62216,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "faxon": {
    "slug": "faxon",
    "cityName": "Faxon",
    "countyName": "Comanche County",
    "latitude": 34.46026,
    "longitude": -98.57937,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fitzhugh": {
    "slug": "fitzhugh",
    "cityName": "Fitzhugh",
    "countyName": "Pontotoc County",
    "latitude": 34.6576,
    "longitude": -96.76693,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fletcher": {
    "slug": "fletcher",
    "cityName": "Fletcher",
    "countyName": "Comanche County",
    "latitude": 34.8237,
    "longitude": -98.23145,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "foraker": {
    "slug": "foraker",
    "cityName": "Foraker",
    "countyName": "Osage County",
    "latitude": 36.87283,
    "longitude": -96.56921,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "forest-park": {
    "slug": "forest-park",
    "cityName": "Forest Park",
    "countyName": "Oklahoma County",
    "latitude": 35.50986,
    "longitude": -97.44714,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "forgan": {
    "slug": "forgan",
    "cityName": "Forgan",
    "countyName": "Beaver County",
    "latitude": 36.90698,
    "longitude": -100.53798,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fort-cobb": {
    "slug": "fort-cobb",
    "cityName": "Fort Cobb",
    "countyName": "Caddo County",
    "latitude": 35.11527,
    "longitude": -98.44533,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fort-coffee": {
    "slug": "fort-coffee",
    "cityName": "Fort Coffee",
    "countyName": "Sequoyah County",
    "latitude": 35.29421,
    "longitude": -94.57135,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fort-gibson": {
    "slug": "fort-gibson",
    "cityName": "Fort Gibson",
    "countyName": "Muskogee County",
    "latitude": 35.78218,
    "longitude": -95.26014,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fort-supply": {
    "slug": "fort-supply",
    "cityName": "Fort Supply",
    "countyName": "Woodward County",
    "latitude": 36.57209,
    "longitude": -99.57352,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "fort-towson": {
    "slug": "fort-towson",
    "cityName": "Fort Towson",
    "countyName": "Choctaw County",
    "latitude": 34.0314,
    "longitude": -95.27764,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "foss": {
    "slug": "foss",
    "cityName": "Foss",
    "countyName": "Washita County",
    "latitude": 35.45,
    "longitude": -99.17074,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "foster": {
    "slug": "foster",
    "cityName": "Foster",
    "countyName": "Garvin County",
    "latitude": 34.60596,
    "longitude": -97.48986,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "foyil": {
    "slug": "foyil",
    "cityName": "Foyil",
    "countyName": "Rogers County",
    "latitude": 36.43033,
    "longitude": -95.52046,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "francis": {
    "slug": "francis",
    "cityName": "Francis",
    "countyName": "Pontotoc County",
    "latitude": 34.87458,
    "longitude": -96.59266,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "frederick": {
    "slug": "frederick",
    "cityName": "Frederick",
    "countyName": "Tillman County",
    "latitude": 34.34996,
    "longitude": -98.988,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "freedom": {
    "slug": "freedom",
    "cityName": "Freedom",
    "countyName": "Woods County",
    "latitude": 36.76748,
    "longitude": -99.11227,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "friend": {
    "slug": "friend",
    "cityName": "Friend",
    "countyName": "Jackson County",
    "latitude": 34.69778,
    "longitude": -99.22861,
    "sourceUrl": "https://en.wikipedia.org/wiki/Friend,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "gage": {
    "slug": "gage",
    "cityName": "Gage",
    "countyName": "Ellis County",
    "latitude": 36.31813,
    "longitude": -99.7576,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "gans": {
    "slug": "gans",
    "cityName": "Gans",
    "countyName": "Sequoyah County",
    "latitude": 35.38766,
    "longitude": -94.69356,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "garber": {
    "slug": "garber",
    "cityName": "Garber",
    "countyName": "Garfield County",
    "latitude": 36.43667,
    "longitude": -97.58101,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "garden-grove": {
    "slug": "garden-grove",
    "cityName": "Garden Grove",
    "countyName": "Pottawatomie County",
    "latitude": 35.41944,
    "longitude": -96.77111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Garden_Grove,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "garvin": {
    "slug": "garvin",
    "cityName": "Garvin",
    "countyName": "McCurtain County",
    "latitude": 33.95718,
    "longitude": -94.931,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "gate": {
    "slug": "gate",
    "cityName": "Gate",
    "countyName": "Beaver County",
    "latitude": 36.85171,
    "longitude": -100.05521,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "geary": {
    "slug": "geary",
    "cityName": "Geary",
    "countyName": "Blaine County",
    "latitude": 35.63708,
    "longitude": -98.31698,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "gene-autry": {
    "slug": "gene-autry",
    "cityName": "Gene Autry",
    "countyName": "Carter County",
    "latitude": 34.31444,
    "longitude": -97.04217,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "geronimo": {
    "slug": "geronimo",
    "cityName": "Geronimo",
    "countyName": "Comanche County",
    "latitude": 34.48313,
    "longitude": -98.38765,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "gerty": {
    "slug": "gerty",
    "cityName": "Gerty",
    "countyName": "Hughes County",
    "latitude": 34.83573,
    "longitude": -96.28888,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "glencoe": {
    "slug": "glencoe",
    "cityName": "Glencoe",
    "countyName": "Payne County",
    "latitude": 36.23408,
    "longitude": -96.93285,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "glenpool": {
    "slug": "glenpool",
    "cityName": "Glenpool",
    "countyName": "Tulsa County",
    "latitude": 35.94949,
    "longitude": -96.00675,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "goldsby": {
    "slug": "goldsby",
    "cityName": "Goldsby",
    "countyName": "McClain County",
    "latitude": 35.12391,
    "longitude": -97.48662,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "goltry": {
    "slug": "goltry",
    "cityName": "Goltry",
    "countyName": "Alfalfa County",
    "latitude": 36.53196,
    "longitude": -98.1513,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "goodwell": {
    "slug": "goodwell",
    "cityName": "Goodwell",
    "countyName": "Texas County",
    "latitude": 36.59479,
    "longitude": -101.62198,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "gore": {
    "slug": "gore",
    "cityName": "Gore",
    "countyName": "Sequoyah County",
    "latitude": 35.54061,
    "longitude": -95.11215,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "gotebo": {
    "slug": "gotebo",
    "cityName": "Gotebo",
    "countyName": "Kiowa County",
    "latitude": 35.07123,
    "longitude": -98.87426,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "gould": {
    "slug": "gould",
    "cityName": "Gould",
    "countyName": "Harmon County",
    "latitude": 34.66914,
    "longitude": -99.77365,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "gracemont": {
    "slug": "gracemont",
    "cityName": "Gracemont",
    "countyName": "Caddo County",
    "latitude": 35.18786,
    "longitude": -98.25911,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "graham": {
    "slug": "graham",
    "cityName": "Graham",
    "countyName": "Carter County",
    "latitude": 34.34056,
    "longitude": -97.43444,
    "sourceUrl": "https://en.wikipedia.org/wiki/Graham,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "grand-lake-towne": {
    "slug": "grand-lake-towne",
    "cityName": "Grand Lake Towne",
    "countyName": "Mayes County",
    "latitude": 36.50559,
    "longitude": -95.02784,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "grandfield": {
    "slug": "grandfield",
    "cityName": "Grandfield",
    "countyName": "Tillman County",
    "latitude": 34.23075,
    "longitude": -98.68731,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "granite": {
    "slug": "granite",
    "cityName": "Granite",
    "countyName": "Greer County",
    "latitude": 34.95115,
    "longitude": -99.36838,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "grayson": {
    "slug": "grayson",
    "cityName": "Grayson",
    "countyName": "Okmulgee County",
    "latitude": 35.50539,
    "longitude": -95.87162,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "greenfield": {
    "slug": "greenfield",
    "cityName": "Greenfield",
    "countyName": "Blaine County",
    "latitude": 35.72905,
    "longitude": -98.37748,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "grove": {
    "slug": "grove",
    "cityName": "Grove",
    "countyName": "Delaware County",
    "latitude": 36.58503,
    "longitude": -94.78725,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "guthrie": {
    "slug": "guthrie",
    "cityName": "Guthrie",
    "countyName": "Logan County",
    "latitude": 35.87651,
    "longitude": -97.40866,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "guymon": {
    "slug": "guymon",
    "cityName": "Guymon",
    "countyName": "Texas County",
    "latitude": 36.6901,
    "longitude": -101.47705,
    "sourceUrl": "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_40.txt",
    "sourceType": "Census",
    "lastVerified": "2026-04-23"
  },
  "haileyville": {
    "slug": "haileyville",
    "cityName": "Haileyville",
    "countyName": "Pittsburg County",
    "latitude": 34.85222,
    "longitude": -95.58333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Haileyville,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hallett": {
    "slug": "hallett",
    "cityName": "Hallett",
    "countyName": "Pawnee County",
    "latitude": 36.23806,
    "longitude": -96.56806,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hallett,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hammon": {
    "slug": "hammon",
    "cityName": "Hammon",
    "countyName": "Roger Mills County",
    "latitude": 35.63278,
    "longitude": -99.38194,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hammon,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hanna": {
    "slug": "hanna",
    "cityName": "Hanna",
    "countyName": "McIntosh County",
    "latitude": 35.20417,
    "longitude": -95.88583,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hanna,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hardesty": {
    "slug": "hardesty",
    "cityName": "Hardesty",
    "countyName": "Texas County",
    "latitude": 36.61333,
    "longitude": -101.19528,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hardesty,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "harrah": {
    "slug": "harrah",
    "cityName": "Harrah",
    "countyName": "Oklahoma County",
    "latitude": 35.47833,
    "longitude": -97.18333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Harrah,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hartshorne": {
    "slug": "hartshorne",
    "cityName": "Hartshorne",
    "countyName": "Pittsburg County",
    "latitude": 34.84611,
    "longitude": -95.55917,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hartshorne,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "haskell": {
    "slug": "haskell",
    "cityName": "Haskell",
    "countyName": "Muskogee County",
    "latitude": 35.81944,
    "longitude": -95.67417,
    "sourceUrl": "https://en.wikipedia.org/wiki/Haskell,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hastings": {
    "slug": "hastings",
    "cityName": "Hastings",
    "countyName": "Jefferson County",
    "latitude": 34.22639,
    "longitude": -98.10667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hastings,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "haworth": {
    "slug": "haworth",
    "cityName": "Haworth",
    "countyName": "McCurtain County",
    "latitude": 33.84333,
    "longitude": -94.65167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Haworth,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "headrick": {
    "slug": "headrick",
    "cityName": "Headrick",
    "countyName": "Jackson County",
    "latitude": 34.62722,
    "longitude": -99.14056,
    "sourceUrl": "https://en.wikipedia.org/wiki/Headrick,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "healdton": {
    "slug": "healdton",
    "cityName": "Healdton",
    "countyName": "Carter County",
    "latitude": 34.23222,
    "longitude": -97.48778,
    "sourceUrl": "https://en.wikipedia.org/wiki/Healdton,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "heavener": {
    "slug": "heavener",
    "cityName": "Heavener",
    "countyName": "Le Flore County",
    "latitude": 34.89833,
    "longitude": -94.59722,
    "sourceUrl": "https://en.wikipedia.org/wiki/Heavener,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "helena": {
    "slug": "helena",
    "cityName": "Helena",
    "countyName": "Alfalfa County",
    "latitude": 36.54611,
    "longitude": -98.27111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Helena,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hendrix": {
    "slug": "hendrix",
    "cityName": "Hendrix",
    "countyName": "Bryan County",
    "latitude": 33.77444,
    "longitude": -96.40833,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hendrix,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hennessey": {
    "slug": "hennessey",
    "cityName": "Hennessey",
    "countyName": "Kingfisher County",
    "latitude": 36.10917,
    "longitude": -97.89833,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hennessey,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "henryetta": {
    "slug": "henryetta",
    "cityName": "Henryetta",
    "countyName": "Okmulgee County",
    "latitude": 35.43972,
    "longitude": -95.97917,
    "sourceUrl": "https://en.wikipedia.org/wiki/Henryetta,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hickory": {
    "slug": "hickory",
    "cityName": "Hickory",
    "countyName": "Murray County",
    "latitude": 34.55889,
    "longitude": -96.97667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hickory,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hillsdale": {
    "slug": "hillsdale",
    "cityName": "Hillsdale",
    "countyName": "Garfield County",
    "latitude": 36.5625,
    "longitude": -97.66139,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hillsdale,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hinton": {
    "slug": "hinton",
    "cityName": "Hinton",
    "countyName": "Caddo County",
    "latitude": 35.47583,
    "longitude": -98.35667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hinton,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hobart": {
    "slug": "hobart",
    "cityName": "Hobart",
    "countyName": "Kiowa County",
    "latitude": 35.02944,
    "longitude": -99.09083,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hobart,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hoffman": {
    "slug": "hoffman",
    "cityName": "Hoffman",
    "countyName": "Okmulgee County",
    "latitude": 35.48944,
    "longitude": -95.84333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hoffman,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "holdenville": {
    "slug": "holdenville",
    "cityName": "Holdenville",
    "countyName": "Hughes County",
    "latitude": 35.08667,
    "longitude": -96.40028,
    "sourceUrl": "https://en.wikipedia.org/wiki/Holdenville,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hollis": {
    "slug": "hollis",
    "cityName": "Hollis",
    "countyName": "Harmon County",
    "latitude": 34.68833,
    "longitude": -99.91222,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hollis,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hominy": {
    "slug": "hominy",
    "cityName": "Hominy",
    "countyName": "Osage County",
    "latitude": 36.41417,
    "longitude": -96.39528,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hominy,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hooker": {
    "slug": "hooker",
    "cityName": "Hooker",
    "countyName": "Texas County",
    "latitude": 36.86,
    "longitude": -101.21361,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hooker,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hopeton": {
    "slug": "hopeton",
    "cityName": "Hopeton",
    "countyName": "Woods County",
    "latitude": 36.68833,
    "longitude": -98.66694,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hopeton,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "howe": {
    "slug": "howe",
    "cityName": "Howe",
    "countyName": "Le Flore County",
    "latitude": 34.95111,
    "longitude": -94.63611,
    "sourceUrl": "https://en.wikipedia.org/wiki/Howe,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hugo": {
    "slug": "hugo",
    "cityName": "Hugo",
    "countyName": "Choctaw County",
    "latitude": 34.00972,
    "longitude": -95.51417,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hugo,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hulbert": {
    "slug": "hulbert",
    "cityName": "Hulbert",
    "countyName": "Cherokee County",
    "latitude": 35.9275,
    "longitude": -95.1425,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hulbert,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hunter": {
    "slug": "hunter",
    "cityName": "Hunter",
    "countyName": "Garfield County",
    "latitude": 36.56583,
    "longitude": -97.66167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hunter,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "hydro": {
    "slug": "hydro",
    "cityName": "Hydro",
    "countyName": "Caddo County",
    "latitude": 35.54944,
    "longitude": -98.57806,
    "sourceUrl": "https://en.wikipedia.org/wiki/Hydro,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "idabel": {
    "slug": "idabel",
    "cityName": "Idabel",
    "countyName": "McCurtain County",
    "latitude": 33.89556,
    "longitude": -94.82639,
    "sourceUrl": "https://en.wikipedia.org/wiki/Idabel,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "indiahoma": {
    "slug": "indiahoma",
    "cityName": "Indiahoma",
    "countyName": "Comanche County",
    "latitude": 34.72194,
    "longitude": -98.75139,
    "sourceUrl": "https://en.wikipedia.org/wiki/Indiahoma,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "indianola": {
    "slug": "indianola",
    "cityName": "Indianola",
    "countyName": "Pittsburg County",
    "latitude": 35.16222,
    "longitude": -95.77417,
    "sourceUrl": "https://en.wikipedia.org/wiki/Indianola,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "inola": {
    "slug": "inola",
    "cityName": "Inola",
    "countyName": "Rogers County",
    "latitude": 36.15194,
    "longitude": -95.50917,
    "sourceUrl": "https://en.wikipedia.org/wiki/Inola,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "ixl": {
    "slug": "ixl",
    "cityName": "IXL",
    "countyName": "Okfuskee County",
    "latitude": 35.52556,
    "longitude": -96.18778,
    "sourceUrl": "https://en.wikipedia.org/wiki/IXL,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "jay": {
    "slug": "jay",
    "cityName": "Jay",
    "countyName": "Delaware County",
    "latitude": 36.42167,
    "longitude": -94.79667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Jay,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "jenks": {
    "slug": "jenks",
    "cityName": "Jenks",
    "countyName": "Tulsa County",
    "latitude": 36.02278,
    "longitude": -95.96833,
    "sourceUrl": "https://en.wikipedia.org/wiki/Jenks,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "jennings": {
    "slug": "jennings",
    "cityName": "Jennings",
    "countyName": "Pawnee County",
    "latitude": 36.18,
    "longitude": -96.56694,
    "sourceUrl": "https://en.wikipedia.org/wiki/Jennings,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "jet": {
    "slug": "jet",
    "cityName": "Jet",
    "countyName": "Alfalfa County",
    "latitude": 36.66556,
    "longitude": -98.18139,
    "sourceUrl": "https://en.wikipedia.org/wiki/Jet,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "johnson": {
    "slug": "johnson",
    "cityName": "Johnson",
    "countyName": "Pottawatomie County",
    "latitude": 35.41694,
    "longitude": -96.83444,
    "sourceUrl": "https://en.wikipedia.org/wiki/Johnson,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "jones": {
    "slug": "jones",
    "cityName": "Jones",
    "countyName": "Oklahoma County",
    "latitude": 35.56583,
    "longitude": -97.28694,
    "sourceUrl": "https://en.wikipedia.org/wiki/Jones,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "justice": {
    "slug": "justice",
    "cityName": "Justice",
    "countyName": "Rogers County",
    "latitude": 36.29083,
    "longitude": -95.56361,
    "sourceUrl": "https://en.wikipedia.org/wiki/Justice,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "kansas": {
    "slug": "kansas",
    "cityName": "Kansas",
    "countyName": "Delaware County",
    "latitude": 36.20528,
    "longitude": -95.78889,
    "sourceUrl": "https://en.wikipedia.org/wiki/Kansas,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "kaw-city": {
    "slug": "kaw-city",
    "cityName": "Kaw City",
    "countyName": "Kay County",
    "latitude": 36.7675,
    "longitude": -96.86667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Kaw_City,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "ketchum": {
    "slug": "ketchum",
    "cityName": "Ketchum",
    "countyName": "Craig County",
    "latitude": 36.52556,
    "longitude": -95.02583,
    "sourceUrl": "https://en.wikipedia.org/wiki/Ketchum,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "keyes": {
    "slug": "keyes",
    "cityName": "Keyes",
    "countyName": "Cimarron County",
    "latitude": 36.8075,
    "longitude": -102.25194,
    "sourceUrl": "https://en.wikipedia.org/wiki/Keyes,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "keys": {
    "slug": "keys",
    "cityName": "Keys",
    "countyName": "Cherokee County",
    "latitude": 35.80222,
    "longitude": -94.96056,
    "sourceUrl": "https://en.wikipedia.org/wiki/Keys,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "kiefer": {
    "slug": "kiefer",
    "cityName": "Kiefer",
    "countyName": "Creek County",
    "latitude": 35.94417,
    "longitude": -96.05278,
    "sourceUrl": "https://en.wikipedia.org/wiki/Kiefer,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "kingfisher": {
    "slug": "kingfisher",
    "cityName": "Kingfisher",
    "countyName": "Kingfisher County",
    "latitude": 35.85611,
    "longitude": -97.93889,
    "sourceUrl": "https://en.wikipedia.org/wiki/Kingfisher,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "kingston": {
    "slug": "kingston",
    "cityName": "Kingston",
    "countyName": "Marshall County",
    "latitude": 34.00028,
    "longitude": -96.70639,
    "sourceUrl": "https://en.wikipedia.org/wiki/Kingston,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "kinta": {
    "slug": "kinta",
    "cityName": "Kinta",
    "countyName": "Haskell County",
    "latitude": 35.11944,
    "longitude": -95.23778,
    "sourceUrl": "https://en.wikipedia.org/wiki/Kinta,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "kiowa": {
    "slug": "kiowa",
    "cityName": "Kiowa",
    "countyName": "Pittsburg County",
    "latitude": 34.72278,
    "longitude": -95.9025,
    "sourceUrl": "https://en.wikipedia.org/wiki/Kiowa,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "konawa": {
    "slug": "konawa",
    "cityName": "Konawa",
    "countyName": "Seminole County",
    "latitude": 34.95778,
    "longitude": -96.75278,
    "sourceUrl": "https://en.wikipedia.org/wiki/Konawa,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "krebs": {
    "slug": "krebs",
    "cityName": "Krebs",
    "countyName": "Pittsburg County",
    "latitude": 34.93,
    "longitude": -95.71889,
    "sourceUrl": "https://en.wikipedia.org/wiki/Krebs,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "kremlin": {
    "slug": "kremlin",
    "cityName": "Kremlin",
    "countyName": "Garfield County",
    "latitude": 36.54667,
    "longitude": -97.83222,
    "sourceUrl": "https://en.wikipedia.org/wiki/Kremlin,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lahoma": {
    "slug": "lahoma",
    "cityName": "Lahoma",
    "countyName": "Garfield County",
    "latitude": 36.38806,
    "longitude": -98.08889,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lahoma,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lake-aluma": {
    "slug": "lake-aluma",
    "cityName": "Lake Aluma",
    "countyName": "Oklahoma County",
    "latitude": 35.53333,
    "longitude": -97.44833,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lake_Aluma,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lamont": {
    "slug": "lamont",
    "cityName": "Lamont",
    "countyName": "Grant County",
    "latitude": 36.69092,
    "longitude": -97.55687,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lamont,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lane": {
    "slug": "lane",
    "cityName": "Lane",
    "countyName": "Atoka County",
    "latitude": 34.29884,
    "longitude": -95.988,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lane,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "langley": {
    "slug": "langley",
    "cityName": "Langley",
    "countyName": "Mayes County",
    "latitude": 36.46889,
    "longitude": -95.04972,
    "sourceUrl": "https://en.wikipedia.org/wiki/Langley,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "langston": {
    "slug": "langston",
    "cityName": "Langston",
    "countyName": "Logan County",
    "latitude": 35.94139,
    "longitude": -97.25528,
    "sourceUrl": "https://en.wikipedia.org/wiki/Langston,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "laverne": {
    "slug": "laverne",
    "cityName": "Laverne",
    "countyName": "Harper County",
    "latitude": 36.70806,
    "longitude": -99.89722,
    "sourceUrl": "https://en.wikipedia.org/wiki/Laverne,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lawton": {
    "slug": "lawton",
    "cityName": "Lawton",
    "countyName": "Comanche County",
    "latitude": 34.603565,
    "longitude": -98.395927,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lawton,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "le-flore": {
    "slug": "le-flore",
    "cityName": "Le Flore",
    "countyName": "Le Flore County",
    "latitude": 34.89694,
    "longitude": -94.98083,
    "sourceUrl": "https://en.wikipedia.org/wiki/Le_Flore,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "leedey": {
    "slug": "leedey",
    "cityName": "Leedey",
    "countyName": "Dewey County",
    "latitude": 35.86861,
    "longitude": -99.34417,
    "sourceUrl": "https://en.wikipedia.org/wiki/Leedey,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lehigh": {
    "slug": "lehigh",
    "cityName": "Lehigh",
    "countyName": "Coal County",
    "latitude": 34.470084,
    "longitude": -96.218578,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lehigh,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lennox": {
    "slug": "lennox",
    "cityName": "Lennox",
    "countyName": "Le Flore County",
    "latitude": 34.69556,
    "longitude": -94.82472,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lennox,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "leon": {
    "slug": "leon",
    "cityName": "Leon",
    "countyName": "Love County",
    "latitude": 33.87861,
    "longitude": -97.44167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Leon,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lexington": {
    "slug": "lexington",
    "cityName": "Lexington",
    "countyName": "Cleveland County",
    "latitude": 35.01496,
    "longitude": -97.33514,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lexington,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "liberty": {
    "slug": "liberty",
    "cityName": "Liberty",
    "countyName": "Tulsa County",
    "latitude": 35.85687,
    "longitude": -95.97976,
    "sourceUrl": "https://en.wikipedia.org/wiki/Liberty,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lima": {
    "slug": "lima",
    "cityName": "Lima",
    "countyName": "Seminole County",
    "latitude": 35.1733,
    "longitude": -96.5983,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lima,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lima-town": {
    "slug": "lima-town",
    "cityName": "Lima town",
    "countyName": "Seminole County",
    "latitude": 35.1733,
    "longitude": -96.5983,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lima,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lindsay": {
    "slug": "lindsay",
    "cityName": "Lindsay",
    "countyName": "Garvin County",
    "latitude": 34.836693,
    "longitude": -97.598434,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lindsay,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "loco": {
    "slug": "loco",
    "cityName": "Loco",
    "countyName": "Stephens County",
    "latitude": 34.32944,
    "longitude": -97.68056,
    "sourceUrl": "https://en.wikipedia.org/wiki/Loco,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "locust-grove": {
    "slug": "locust-grove",
    "cityName": "Locust Grove",
    "countyName": "Mayes County",
    "latitude": 36.19722,
    "longitude": -95.16694,
    "sourceUrl": "https://en.wikipedia.org/wiki/Locust_Grove,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lone-grove": {
    "slug": "lone-grove",
    "cityName": "Lone Grove",
    "countyName": "Carter County",
    "latitude": 34.1729,
    "longitude": -97.26111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lone_Grove,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "long": {
    "slug": "long",
    "cityName": "Long",
    "countyName": "Sequoyah County",
    "latitude": 35.49917,
    "longitude": -94.54694,
    "sourceUrl": "https://en.wikipedia.org/wiki/Long,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "longdale": {
    "slug": "longdale",
    "cityName": "Longdale",
    "countyName": "Blaine County",
    "latitude": 36.133794,
    "longitude": -98.551179,
    "sourceUrl": "https://en.wikipedia.org/wiki/Longdale,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lookeba": {
    "slug": "lookeba",
    "cityName": "Lookeba",
    "countyName": "Caddo County",
    "latitude": 35.36306,
    "longitude": -98.36389,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lookeba,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "lotsee": {
    "slug": "lotsee",
    "cityName": "Lotsee",
    "countyName": "Tulsa County",
    "latitude": 36.13333,
    "longitude": -96.20944,
    "sourceUrl": "https://en.wikipedia.org/wiki/Lotsee,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "loveland": {
    "slug": "loveland",
    "cityName": "Loveland",
    "countyName": "Tillman County",
    "latitude": 34.30472,
    "longitude": -98.77083,
    "sourceUrl": "https://en.wikipedia.org/wiki/Loveland,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "loyal": {
    "slug": "loyal",
    "cityName": "Loyal",
    "countyName": "Kingfisher County",
    "latitude": 35.97278,
    "longitude": -98.11806,
    "sourceUrl": "https://en.wikipedia.org/wiki/Loyal,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "luther": {
    "slug": "luther",
    "cityName": "Luther",
    "countyName": "Oklahoma County",
    "latitude": 35.66056,
    "longitude": -97.19139,
    "sourceUrl": "https://en.wikipedia.org/wiki/Luther,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "macomb": {
    "slug": "macomb",
    "cityName": "Macomb",
    "countyName": "Pottawatomie County",
    "latitude": 35.14778,
    "longitude": -97.00861,
    "sourceUrl": "https://en.wikipedia.org/wiki/Macomb,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "madill": {
    "slug": "madill",
    "cityName": "Madill",
    "countyName": "Marshall County",
    "latitude": 34.09189,
    "longitude": -96.77082,
    "sourceUrl": "https://en.wikipedia.org/wiki/Madill,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "manchester": {
    "slug": "manchester",
    "cityName": "Manchester",
    "countyName": "Grant County",
    "latitude": 36.99444,
    "longitude": -98.035,
    "sourceUrl": "https://en.wikipedia.org/wiki/Manchester,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mangum": {
    "slug": "mangum",
    "cityName": "Mangum",
    "countyName": "Greer County",
    "latitude": 34.87861,
    "longitude": -99.50389,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mangum,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "manitou": {
    "slug": "manitou",
    "cityName": "Manitou",
    "countyName": "Tillman County",
    "latitude": 34.5076,
    "longitude": -98.9834,
    "sourceUrl": "https://en.wikipedia.org/wiki/Manitou,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mannford": {
    "slug": "mannford",
    "cityName": "Mannford",
    "countyName": "Creek County",
    "latitude": 36.12657,
    "longitude": -96.35793,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mannford,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mannsville": {
    "slug": "mannsville",
    "cityName": "Mannsville",
    "countyName": "Johnston County",
    "latitude": 34.185707,
    "longitude": -96.880271,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mannsville,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "maramec": {
    "slug": "maramec",
    "cityName": "Maramec",
    "countyName": "Pawnee County",
    "latitude": 36.242521,
    "longitude": -96.681001,
    "sourceUrl": "https://en.wikipedia.org/wiki/Maramec,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "marble-city": {
    "slug": "marble-city",
    "cityName": "Marble City",
    "countyName": "Sequoyah County",
    "latitude": 35.54194,
    "longitude": -94.82167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Marble_City,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "marietta": {
    "slug": "marietta",
    "cityName": "Marietta",
    "countyName": "Love County",
    "latitude": 33.93716,
    "longitude": -97.11697,
    "sourceUrl": "https://en.wikipedia.org/wiki/Marietta,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "marland": {
    "slug": "marland",
    "cityName": "Marland",
    "countyName": "Noble County",
    "latitude": 36.56111,
    "longitude": -97.15278,
    "sourceUrl": "https://en.wikipedia.org/wiki/Marland,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "marlow": {
    "slug": "marlow",
    "cityName": "Marlow",
    "countyName": "Stephens County",
    "latitude": 34.648132,
    "longitude": -97.958092,
    "sourceUrl": "https://en.wikipedia.org/wiki/Marlow,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "marshall": {
    "slug": "marshall",
    "cityName": "Marshall",
    "countyName": "Logan County",
    "latitude": 36.15556,
    "longitude": -97.625,
    "sourceUrl": "https://en.wikipedia.org/wiki/Marshall,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "martha": {
    "slug": "martha",
    "cityName": "Martha",
    "countyName": "Jackson County",
    "latitude": 34.72513,
    "longitude": -99.38699,
    "sourceUrl": "https://en.wikipedia.org/wiki/Martha,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "marty": {
    "slug": "marty",
    "cityName": "Marty",
    "countyName": "Jackson County",
    "latitude": 34.5295,
    "longitude": -99.5079,
    "sourceUrl": "https://en.wikipedia.org/wiki/Marty,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "maryetta": {
    "slug": "maryetta",
    "cityName": "Maryetta",
    "countyName": "Adair County",
    "latitude": 35.84778,
    "longitude": -94.6525,
    "sourceUrl": "https://en.wikipedia.org/wiki/Maryetta,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mason": {
    "slug": "mason",
    "cityName": "Mason",
    "countyName": "Okfuskee County",
    "latitude": 35.56611,
    "longitude": -96.35222,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mason,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "maud": {
    "slug": "maud",
    "cityName": "Maud",
    "countyName": "Pottawatomie County",
    "latitude": 35.13194,
    "longitude": -96.7775,
    "sourceUrl": "https://en.wikipedia.org/wiki/Maud,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "may": {
    "slug": "may",
    "cityName": "May",
    "countyName": "Harper County",
    "latitude": 36.616536,
    "longitude": -99.749363,
    "sourceUrl": "https://en.wikipedia.org/wiki/May,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "maysville": {
    "slug": "maysville",
    "cityName": "Maysville",
    "countyName": "Garvin County",
    "latitude": 34.8175,
    "longitude": -97.41028,
    "sourceUrl": "https://en.wikipedia.org/wiki/Maysville,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mcalester": {
    "slug": "mcalester",
    "cityName": "McAlester",
    "countyName": "Pittsburg County",
    "latitude": 34.93336,
    "longitude": -95.76975,
    "sourceUrl": "https://en.wikipedia.org/wiki/McAlester,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mccurtain": {
    "slug": "mccurtain",
    "cityName": "McCurtain",
    "countyName": "Haskell County",
    "latitude": 35.15028,
    "longitude": -94.97139,
    "sourceUrl": "https://en.wikipedia.org/wiki/McCurtain,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mcloud": {
    "slug": "mcloud",
    "cityName": "McLoud",
    "countyName": "Pottawatomie County",
    "latitude": 35.43588,
    "longitude": -97.0914,
    "sourceUrl": "https://en.wikipedia.org/wiki/McLoud,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mead": {
    "slug": "mead",
    "cityName": "Mead",
    "countyName": "Bryan County",
    "latitude": 34.00167,
    "longitude": -96.51111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mead,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "medford": {
    "slug": "medford",
    "cityName": "Medford",
    "countyName": "Grant County",
    "latitude": 36.80333,
    "longitude": -97.73806,
    "sourceUrl": "https://en.wikipedia.org/wiki/Medford,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "medicine-park": {
    "slug": "medicine-park",
    "cityName": "Medicine Park",
    "countyName": "Comanche County",
    "latitude": 34.72417,
    "longitude": -98.45306,
    "sourceUrl": "https://en.wikipedia.org/wiki/Medicine_Park,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "meeker": {
    "slug": "meeker",
    "cityName": "Meeker",
    "countyName": "Lincoln County",
    "latitude": 35.50361,
    "longitude": -96.89778,
    "sourceUrl": "https://en.wikipedia.org/wiki/Meeker,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "meno": {
    "slug": "meno",
    "cityName": "Meno",
    "countyName": "Major County",
    "latitude": 36.38833,
    "longitude": -98.17806,
    "sourceUrl": "https://en.wikipedia.org/wiki/Meno,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "meridian": {
    "slug": "meridian",
    "cityName": "Meridian",
    "countyName": "Logan County",
    "latitude": 35.84304,
    "longitude": -97.24703,
    "sourceUrl": "https://en.wikipedia.org/wiki/Meridian,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "miami": {
    "slug": "miami",
    "cityName": "Miami",
    "countyName": "Ottawa County",
    "latitude": 36.88778,
    "longitude": -94.87111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Miami,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "midwest-city": {
    "slug": "midwest-city",
    "cityName": "Midwest City",
    "countyName": "Oklahoma County",
    "latitude": 35.46472,
    "longitude": -97.39806,
    "sourceUrl": "https://en.wikipedia.org/wiki/Midwest_City,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "milburn": {
    "slug": "milburn",
    "cityName": "Milburn",
    "countyName": "Johnston County",
    "latitude": 34.2402,
    "longitude": -96.54991,
    "sourceUrl": "https://en.wikipedia.org/wiki/Milburn,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "milfay": {
    "slug": "milfay",
    "cityName": "Milfay",
    "countyName": "Creek County",
    "latitude": 35.75167,
    "longitude": -96.55917,
    "sourceUrl": "https://en.wikipedia.org/wiki/Milfay,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mill-creek": {
    "slug": "mill-creek",
    "cityName": "Mill Creek",
    "countyName": "Johnston County",
    "latitude": 34.40111,
    "longitude": -96.82528,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mill_Creek,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "millerton": {
    "slug": "millerton",
    "cityName": "Millerton",
    "countyName": "McCurtain County",
    "latitude": 33.98583,
    "longitude": -95.01361,
    "sourceUrl": "https://en.wikipedia.org/wiki/Millerton,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "minco": {
    "slug": "minco",
    "cityName": "Minco",
    "countyName": "Grady County",
    "latitude": 35.31556,
    "longitude": -97.94583,
    "sourceUrl": "https://en.wikipedia.org/wiki/Minco,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "moffett": {
    "slug": "moffett",
    "cityName": "Moffett",
    "countyName": "Sequoyah County",
    "latitude": 35.39056,
    "longitude": -94.50694,
    "sourceUrl": "https://en.wikipedia.org/wiki/Moffett,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "monkey-island": {
    "slug": "monkey-island",
    "cityName": "Monkey Island",
    "countyName": "Delaware County",
    "latitude": 36.59,
    "longitude": -94.87,
    "sourceUrl": "https://en.wikipedia.org/wiki/Monkey_Island,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "moore": {
    "slug": "moore",
    "cityName": "Moore",
    "countyName": "Cleveland County",
    "latitude": 35.339508,
    "longitude": -97.486702,
    "sourceUrl": "https://en.wikipedia.org/wiki/Moore,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mooreland": {
    "slug": "mooreland",
    "cityName": "Mooreland",
    "countyName": "Woodward County",
    "latitude": 36.43778,
    "longitude": -99.20472,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mooreland,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "morris": {
    "slug": "morris",
    "cityName": "Morris",
    "countyName": "Okmulgee County",
    "latitude": 35.60611,
    "longitude": -95.86111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Morris,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "morrison": {
    "slug": "morrison",
    "cityName": "Morrison",
    "countyName": "Noble County",
    "latitude": 36.29615,
    "longitude": -97.00869,
    "sourceUrl": "https://en.wikipedia.org/wiki/Morrison,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mounds": {
    "slug": "mounds",
    "cityName": "Mounds",
    "countyName": "Creek County",
    "latitude": 35.87648,
    "longitude": -96.06111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mounds,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mountain-park": {
    "slug": "mountain-park",
    "cityName": "Mountain Park",
    "countyName": "Kiowa County",
    "latitude": 34.69729,
    "longitude": -98.94952,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mountain_Park,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mountain-view": {
    "slug": "mountain-view",
    "cityName": "Mountain View",
    "countyName": "Kiowa County",
    "latitude": 35.09944,
    "longitude": -98.74972,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mountain_View,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "muldrow": {
    "slug": "muldrow",
    "cityName": "Muldrow",
    "countyName": "Sequoyah County",
    "latitude": 35.406194,
    "longitude": -94.598833,
    "sourceUrl": "https://en.wikipedia.org/wiki/Muldrow,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mule-barn": {
    "slug": "mule-barn",
    "cityName": "Mule Barn",
    "countyName": "Pawnee County",
    "latitude": 36.21778,
    "longitude": -96.31222,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mule_Barn,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mulhall": {
    "slug": "mulhall",
    "cityName": "Mulhall",
    "countyName": "Logan County",
    "latitude": 36.06487,
    "longitude": -97.40651,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mulhall,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "muskogee": {
    "slug": "muskogee",
    "cityName": "Muskogee",
    "countyName": "Muskogee County",
    "latitude": 35.74333,
    "longitude": -95.35667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Muskogee,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mustang": {
    "slug": "mustang",
    "cityName": "Mustang",
    "countyName": "Canadian County",
    "latitude": 35.39167,
    "longitude": -97.72472,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mustang,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "mutual": {
    "slug": "mutual",
    "cityName": "Mutual",
    "countyName": "Woodward County",
    "latitude": 36.23056,
    "longitude": -99.16806,
    "sourceUrl": "https://en.wikipedia.org/wiki/Mutual,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "nardin": {
    "slug": "nardin",
    "cityName": "Nardin",
    "countyName": "Kay County",
    "latitude": 36.80417,
    "longitude": -97.45,
    "sourceUrl": "https://en.wikipedia.org/wiki/Nardin,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "nash": {
    "slug": "nash",
    "cityName": "Nash",
    "countyName": "Grant County",
    "latitude": 36.665,
    "longitude": -98.0525,
    "sourceUrl": "https://en.wikipedia.org/wiki/Nash,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "new-cordell": {
    "slug": "new-cordell",
    "cityName": "New Cordell",
    "countyName": "Washita County",
    "latitude": 35.29724,
    "longitude": -98.98159,
    "sourceUrl": "https://en.wikipedia.org/wiki/New_Cordell,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "new-tulsa": {
    "slug": "new-tulsa",
    "cityName": "New Tulsa",
    "countyName": "Wagoner County",
    "latitude": 36.10205,
    "longitude": -95.72475,
    "sourceUrl": "https://en.wikipedia.org/wiki/New_Tulsa,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "newcastle": {
    "slug": "newcastle",
    "cityName": "Newcastle",
    "countyName": "McClain County",
    "latitude": 35.24028,
    "longitude": -97.59944,
    "sourceUrl": "https://en.wikipedia.org/wiki/Newcastle,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "newkirk": {
    "slug": "newkirk",
    "cityName": "Newkirk",
    "countyName": "Kay County",
    "latitude": 36.88306,
    "longitude": -97.05583,
    "sourceUrl": "https://en.wikipedia.org/wiki/Newkirk,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "nichols-hills": {
    "slug": "nichols-hills",
    "cityName": "Nichols Hills",
    "countyName": "Oklahoma County",
    "latitude": 35.54583,
    "longitude": -97.54222,
    "sourceUrl": "https://en.wikipedia.org/wiki/Nichols_Hills,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "nicoma-park": {
    "slug": "nicoma-park",
    "cityName": "Nicoma Park",
    "countyName": "Oklahoma County",
    "latitude": 35.49139,
    "longitude": -97.32861,
    "sourceUrl": "https://en.wikipedia.org/wiki/Nicoma_Park,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "ninnekah": {
    "slug": "ninnekah",
    "cityName": "Ninnekah",
    "countyName": "Grady County",
    "latitude": 34.95694,
    "longitude": -97.935,
    "sourceUrl": "https://en.wikipedia.org/wiki/Ninnekah,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "noble": {
    "slug": "noble",
    "cityName": "Noble",
    "countyName": "Cleveland County",
    "latitude": 35.13924,
    "longitude": -97.39475,
    "sourceUrl": "https://en.wikipedia.org/wiki/Noble,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "norge": {
    "slug": "norge",
    "cityName": "Norge",
    "countyName": "Grady County",
    "latitude": 34.9886,
    "longitude": -97.9961,
    "sourceUrl": "https://en.wikipedia.org/wiki/Norge,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "norman": {
    "slug": "norman",
    "cityName": "Norman",
    "countyName": "Cleveland County",
    "latitude": 35.2208,
    "longitude": -97.4436,
    "sourceUrl": "https://en.wikipedia.org/wiki/Norman,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "north-enid": {
    "slug": "north-enid",
    "cityName": "North Enid",
    "countyName": "Garfield County",
    "latitude": 36.43616,
    "longitude": -97.86629,
    "sourceUrl": "https://en.wikipedia.org/wiki/North_Enid,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "north-miami": {
    "slug": "north-miami",
    "cityName": "North Miami",
    "countyName": "Ottawa County",
    "latitude": 36.91861,
    "longitude": -94.88028,
    "sourceUrl": "https://en.wikipedia.org/wiki/North_Miami,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "nowata": {
    "slug": "nowata",
    "cityName": "Nowata",
    "countyName": "Nowata County",
    "latitude": 36.70065,
    "longitude": -95.63803,
    "sourceUrl": "https://en.wikipedia.org/wiki/Nowata,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "oakhurst": {
    "slug": "oakhurst",
    "cityName": "Oakhurst",
    "countyName": "Tulsa County",
    "latitude": 36.07917,
    "longitude": -96.05139,
    "sourceUrl": "https://en.wikipedia.org/wiki/Oakhurst,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "oakland": {
    "slug": "oakland",
    "cityName": "Oakland",
    "countyName": "Marshall County",
    "latitude": 34.09917,
    "longitude": -96.79333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Oakland,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "oaks": {
    "slug": "oaks",
    "cityName": "Oaks",
    "countyName": "Cherokee County",
    "latitude": 36.16556,
    "longitude": -94.85361,
    "sourceUrl": "https://en.wikipedia.org/wiki/Oaks,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "oakwood": {
    "slug": "oakwood",
    "cityName": "Oakwood",
    "countyName": "Dewey County",
    "latitude": 35.93167,
    "longitude": -98.70306,
    "sourceUrl": "https://en.wikipedia.org/wiki/Oakwood,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "ochelata": {
    "slug": "ochelata",
    "cityName": "Ochelata",
    "countyName": "Washington County",
    "latitude": 36.60009,
    "longitude": -95.97971,
    "sourceUrl": "https://en.wikipedia.org/wiki/Ochelata,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "oilton": {
    "slug": "oilton",
    "cityName": "Oilton",
    "countyName": "Creek County",
    "latitude": 36.08505,
    "longitude": -96.58663,
    "sourceUrl": "https://en.wikipedia.org/wiki/Oilton,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "okarche": {
    "slug": "okarche",
    "cityName": "Okarche",
    "countyName": "Canadian County",
    "latitude": 35.72573,
    "longitude": -97.97644,
    "sourceUrl": "https://en.wikipedia.org/wiki/Okarche,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "okay": {
    "slug": "okay",
    "cityName": "Okay",
    "countyName": "Wagoner County",
    "latitude": 35.85278,
    "longitude": -95.31583,
    "sourceUrl": "https://en.wikipedia.org/wiki/Okay,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "okemah": {
    "slug": "okemah",
    "cityName": "Okemah",
    "countyName": "Okfuskee County",
    "latitude": 35.42917,
    "longitude": -96.29972,
    "sourceUrl": "https://en.wikipedia.org/wiki/Okemah,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "oklahoma-city": {
    "slug": "oklahoma-city",
    "cityName": "Oklahoma City",
    "countyName": "Oklahoma County",
    "latitude": 35.4676,
    "longitude": -97.5164,
    "sourceUrl": "https://en.wikipedia.org/wiki/Oklahoma_City",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "okmulgee": {
    "slug": "okmulgee",
    "cityName": "Okmulgee",
    "countyName": "Okmulgee County",
    "latitude": 35.62444,
    "longitude": -95.96333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Okmulgee,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "oktaha": {
    "slug": "oktaha",
    "cityName": "Oktaha",
    "countyName": "Muskogee County",
    "latitude": 35.57622,
    "longitude": -95.47907,
    "sourceUrl": "https://en.wikipedia.org/wiki/Oktaha,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "olustee": {
    "slug": "olustee",
    "cityName": "Olustee",
    "countyName": "Jackson County",
    "latitude": 34.54139,
    "longitude": -99.42139,
    "sourceUrl": "https://en.wikipedia.org/wiki/Olustee,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "oologah": {
    "slug": "oologah",
    "cityName": "Oologah",
    "countyName": "Rogers County",
    "latitude": 36.44715,
    "longitude": -95.7084,
    "sourceUrl": "https://en.wikipedia.org/wiki/Oologah,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "optima": {
    "slug": "optima",
    "cityName": "Optima",
    "countyName": "Texas County",
    "latitude": 36.75833,
    "longitude": -101.35639,
    "sourceUrl": "https://en.wikipedia.org/wiki/Optima,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "orlando": {
    "slug": "orlando",
    "cityName": "Orlando",
    "countyName": "Logan County",
    "latitude": 36.14893,
    "longitude": -97.3781,
    "sourceUrl": "https://en.wikipedia.org/wiki/Orlando,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "osage": {
    "slug": "osage",
    "cityName": "Osage",
    "countyName": "Osage County",
    "latitude": 36.29389,
    "longitude": -96.41778,
    "sourceUrl": "https://en.wikipedia.org/wiki/Osage,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "overbrook": {
    "slug": "overbrook",
    "cityName": "Overbrook",
    "countyName": "Love County",
    "latitude": 34.06722,
    "longitude": -97.14111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Overbrook,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "owasso": {
    "slug": "owasso",
    "cityName": "Owasso",
    "countyName": "Tulsa County",
    "latitude": 36.26954,
    "longitude": -95.85471,
    "sourceUrl": "https://en.wikipedia.org/wiki/Owasso,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "paden": {
    "slug": "paden",
    "cityName": "Paden",
    "countyName": "Okfuskee County",
    "latitude": 35.50722,
    "longitude": -96.56861,
    "sourceUrl": "https://en.wikipedia.org/wiki/Paden,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "panama": {
    "slug": "panama",
    "cityName": "Panama",
    "countyName": "Le Flore County",
    "latitude": 35.17056,
    "longitude": -94.67,
    "sourceUrl": "https://en.wikipedia.org/wiki/Panama,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "paoli": {
    "slug": "paoli",
    "cityName": "Paoli",
    "countyName": "Garvin County",
    "latitude": 34.82694,
    "longitude": -97.26111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Paoli,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "park-hill": {
    "slug": "park-hill",
    "cityName": "Park Hill",
    "countyName": "Cherokee County",
    "latitude": 35.84167,
    "longitude": -94.97333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Park_Hill,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "pauls-valley": {
    "slug": "pauls-valley",
    "cityName": "Pauls Valley",
    "countyName": "Garvin County",
    "latitude": 34.74139,
    "longitude": -97.22056,
    "sourceUrl": "https://en.wikipedia.org/wiki/Pauls_Valley,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "pawhuska": {
    "slug": "pawhuska",
    "cityName": "Pawhuska",
    "countyName": "Osage County",
    "latitude": 36.66917,
    "longitude": -96.33306,
    "sourceUrl": "https://en.wikipedia.org/wiki/Pawhuska,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "pawnee": {
    "slug": "pawnee",
    "cityName": "Pawnee",
    "countyName": "Pawnee County",
    "latitude": 36.33639,
    "longitude": -96.80889,
    "sourceUrl": "https://en.wikipedia.org/wiki/Pawnee,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "perkins": {
    "slug": "perkins",
    "cityName": "Perkins",
    "countyName": "Payne County",
    "latitude": 35.97861,
    "longitude": -97.03,
    "sourceUrl": "https://en.wikipedia.org/wiki/Perkins,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "perry": {
    "slug": "perry",
    "cityName": "Perry",
    "countyName": "Noble County",
    "latitude": 36.28361,
    "longitude": -97.30944,
    "sourceUrl": "https://en.wikipedia.org/wiki/Perry,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "picher": {
    "slug": "picher",
    "cityName": "Picher",
    "countyName": "Ottawa County",
    "latitude": 36.97556,
    "longitude": -94.83806,
    "sourceUrl": "https://en.wikipedia.org/wiki/Picher,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "piedmont": {
    "slug": "piedmont",
    "cityName": "Piedmont",
    "countyName": "Canadian County",
    "latitude": 35.67417,
    "longitude": -97.7525,
    "sourceUrl": "https://en.wikipedia.org/wiki/Piedmont,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "pink": {
    "slug": "pink",
    "cityName": "Pink",
    "countyName": "Pottawatomie County",
    "latitude": 35.23278,
    "longitude": -97.1,
    "sourceUrl": "https://en.wikipedia.org/wiki/Pink,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "pittsburg": {
    "slug": "pittsburg",
    "cityName": "Pittsburg",
    "countyName": "Pittsburg County",
    "latitude": 34.71167,
    "longitude": -95.85028,
    "sourceUrl": "https://en.wikipedia.org/wiki/Pittsburg,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "platter": {
    "slug": "platter",
    "cityName": "Platter",
    "countyName": "Bryan County",
    "latitude": 33.90667,
    "longitude": -96.53389,
    "sourceUrl": "https://en.wikipedia.org/wiki/Platter,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "pocasset": {
    "slug": "pocasset",
    "cityName": "Pocasset",
    "countyName": "Grady County",
    "latitude": 35.17806,
    "longitude": -97.95917,
    "sourceUrl": "https://en.wikipedia.org/wiki/Pocasset,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "pocola": {
    "slug": "pocola",
    "cityName": "Pocola",
    "countyName": "Le Flore County",
    "latitude": 35.25611,
    "longitude": -94.50556,
    "sourceUrl": "https://en.wikipedia.org/wiki/Pocola,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "ponca-city": {
    "slug": "ponca-city",
    "cityName": "Ponca City",
    "countyName": "Kay County",
    "latitude": 36.70643,
    "longitude": -97.08701,
    "sourceUrl": "https://en.wikipedia.org/wiki/Ponca_City,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "pond-creek": {
    "slug": "pond-creek",
    "cityName": "Pond Creek",
    "countyName": "Grant County",
    "latitude": 36.66861,
    "longitude": -97.80194,
    "sourceUrl": "https://en.wikipedia.org/wiki/Pond_Creek,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "porter": {
    "slug": "porter",
    "cityName": "Porter",
    "countyName": "Wagoner County",
    "latitude": 35.87083,
    "longitude": -95.52194,
    "sourceUrl": "https://en.wikipedia.org/wiki/Porter,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "poteau": {
    "slug": "poteau",
    "cityName": "Poteau",
    "countyName": "Le Flore County",
    "latitude": 35.05861,
    "longitude": -94.63,
    "sourceUrl": "https://en.wikipedia.org/wiki/Poteau,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "prague": {
    "slug": "prague",
    "cityName": "Prague",
    "countyName": "Lincoln County",
    "latitude": 35.48674,
    "longitude": -96.68502,
    "sourceUrl": "https://en.wikipedia.org/wiki/Prague,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "prue": {
    "slug": "prue",
    "cityName": "Prue",
    "countyName": "Osage County",
    "latitude": 36.24972,
    "longitude": -96.2675,
    "sourceUrl": "https://en.wikipedia.org/wiki/Prue,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "pryor-creek": {
    "slug": "pryor-creek",
    "cityName": "Pryor Creek",
    "countyName": "Mayes County",
    "latitude": 36.30724,
    "longitude": -95.31764,
    "sourceUrl": "https://en.wikipedia.org/wiki/Pryor_Creek,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "purcell": {
    "slug": "purcell",
    "cityName": "Purcell",
    "countyName": "McClain County",
    "latitude": 35.0175,
    "longitude": -97.36944,
    "sourceUrl": "https://en.wikipedia.org/wiki/Purcell,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "putnam": {
    "slug": "putnam",
    "cityName": "Putnam",
    "countyName": "Dewey County",
    "latitude": 35.85639,
    "longitude": -98.96861,
    "sourceUrl": "https://en.wikipedia.org/wiki/Putnam,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "quapaw": {
    "slug": "quapaw",
    "cityName": "Quapaw",
    "countyName": "Ottawa County",
    "latitude": 36.95556,
    "longitude": -94.79167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Quapaw,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "quinton": {
    "slug": "quinton",
    "cityName": "Quinton",
    "countyName": "Pittsburg County",
    "latitude": 35.12333,
    "longitude": -95.37167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Quinton,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "ralston": {
    "slug": "ralston",
    "cityName": "Ralston",
    "countyName": "Pawnee County",
    "latitude": 36.50333,
    "longitude": -96.73556,
    "sourceUrl": "https://en.wikipedia.org/wiki/Ralston,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "ramona": {
    "slug": "ramona",
    "cityName": "Ramona",
    "countyName": "Washington County",
    "latitude": 36.53111,
    "longitude": -95.92333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Ramona,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "randlett": {
    "slug": "randlett",
    "cityName": "Randlett",
    "countyName": "Cotton County",
    "latitude": 34.17667,
    "longitude": -98.46167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Randlett,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "ratliff-city": {
    "slug": "ratliff-city",
    "cityName": "Ratliff City",
    "countyName": "Carter County",
    "latitude": 34.44806,
    "longitude": -97.51333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Ratliff_City,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "rattan": {
    "slug": "rattan",
    "cityName": "Rattan",
    "countyName": "Pushmataha County",
    "latitude": 34.20278,
    "longitude": -95.41111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Rattan,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "ravia": {
    "slug": "ravia",
    "cityName": "Ravia",
    "countyName": "Johnston County",
    "latitude": 34.24167,
    "longitude": -96.75167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Ravia,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "red-oak": {
    "slug": "red-oak",
    "cityName": "Red Oak",
    "countyName": "Latimer County",
    "latitude": 34.95111,
    "longitude": -95.08056,
    "sourceUrl": "https://en.wikipedia.org/wiki/Red_Oak,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "red-rock": {
    "slug": "red-rock",
    "cityName": "Red Rock",
    "countyName": "Noble County",
    "latitude": 36.45889,
    "longitude": -97.17917,
    "sourceUrl": "https://en.wikipedia.org/wiki/Red_Rock,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "renfrow": {
    "slug": "renfrow",
    "cityName": "Renfrow",
    "countyName": "Grant County",
    "latitude": 36.92472,
    "longitude": -97.65694,
    "sourceUrl": "https://en.wikipedia.org/wiki/Renfrow,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "rentiesville": {
    "slug": "rentiesville",
    "cityName": "Rentiesville",
    "countyName": "McIntosh County",
    "latitude": 35.52194,
    "longitude": -95.48833,
    "sourceUrl": "https://en.wikipedia.org/wiki/Rentiesville,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "reydon": {
    "slug": "reydon",
    "cityName": "Reydon",
    "countyName": "Roger Mills County",
    "latitude": 35.64972,
    "longitude": -99.92361,
    "sourceUrl": "https://en.wikipedia.org/wiki/Reydon,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "ringling": {
    "slug": "ringling",
    "cityName": "Ringling",
    "countyName": "Jefferson County",
    "latitude": 34.17722,
    "longitude": -97.59139,
    "sourceUrl": "https://en.wikipedia.org/wiki/Ringling,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "ringwood": {
    "slug": "ringwood",
    "cityName": "Ringwood",
    "countyName": "Major County",
    "latitude": 36.38,
    "longitude": -98.24194,
    "sourceUrl": "https://en.wikipedia.org/wiki/Ringwood,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "ripley": {
    "slug": "ripley",
    "cityName": "Ripley",
    "countyName": "Payne County",
    "latitude": 36.01583,
    "longitude": -96.90389,
    "sourceUrl": "https://en.wikipedia.org/wiki/Ripley,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "river-bottom": {
    "slug": "river-bottom",
    "cityName": "River Bottom",
    "countyName": "Muskogee County",
    "latitude": 35.63583,
    "longitude": -95.23778,
    "sourceUrl": "https://en.wikipedia.org/wiki/River_Bottom,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "rock-island": {
    "slug": "rock-island",
    "cityName": "Rock Island",
    "countyName": "Le Flore County",
    "latitude": 35.18306,
    "longitude": -94.48111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Rock_Island,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "rocky": {
    "slug": "rocky",
    "cityName": "Rocky",
    "countyName": "Washita County",
    "latitude": 35.157,
    "longitude": -99.0603,
    "sourceUrl": "https://en.wikipedia.org/wiki/Rocky,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "rocky-ford": {
    "slug": "rocky-ford",
    "cityName": "Rocky Ford",
    "countyName": "Delaware County",
    "latitude": 36.15583,
    "longitude": -94.91111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Rocky_Ford,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "roff": {
    "slug": "roff",
    "cityName": "Roff",
    "countyName": "Pontotoc County",
    "latitude": 34.62667,
    "longitude": -96.84125,
    "sourceUrl": "https://en.wikipedia.org/wiki/Roff,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "roland": {
    "slug": "roland",
    "cityName": "Roland",
    "countyName": "Sequoyah County",
    "latitude": 35.42111,
    "longitude": -94.51417,
    "sourceUrl": "https://en.wikipedia.org/wiki/Roland,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "roosevelt": {
    "slug": "roosevelt",
    "cityName": "Roosevelt",
    "countyName": "Kiowa County",
    "latitude": 34.84806,
    "longitude": -99.02056,
    "sourceUrl": "https://en.wikipedia.org/wiki/Roosevelt,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "rose": {
    "slug": "rose",
    "cityName": "Rose",
    "countyName": "Mayes County",
    "latitude": 36.2075,
    "longitude": -95.04917,
    "sourceUrl": "https://en.wikipedia.org/wiki/Rose,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "rosston": {
    "slug": "rosston",
    "cityName": "Rosston",
    "countyName": "Harper County",
    "latitude": 36.81278,
    "longitude": -99.93278,
    "sourceUrl": "https://en.wikipedia.org/wiki/Rosston,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "rufe": {
    "slug": "rufe",
    "cityName": "Rufe",
    "countyName": "McCurtain County",
    "latitude": 34.124,
    "longitude": -95.144,
    "sourceUrl": "https://en.wikipedia.org/wiki/Rufe,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "rush-springs": {
    "slug": "rush-springs",
    "cityName": "Rush Springs",
    "countyName": "Grady County",
    "latitude": 34.77889,
    "longitude": -97.95722,
    "sourceUrl": "https://en.wikipedia.org/wiki/Rush_Springs,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "ryan": {
    "slug": "ryan",
    "cityName": "Ryan",
    "countyName": "Jefferson County",
    "latitude": 34.02167,
    "longitude": -97.95444,
    "sourceUrl": "https://en.wikipedia.org/wiki/Ryan,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "salina": {
    "slug": "salina",
    "cityName": "Salina",
    "countyName": "Mayes County",
    "latitude": 36.29111,
    "longitude": -95.15111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Salina,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sallisaw": {
    "slug": "sallisaw",
    "cityName": "Sallisaw",
    "countyName": "Sequoyah County",
    "latitude": 35.46056,
    "longitude": -94.80722,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sallisaw,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sand-springs": {
    "slug": "sand-springs",
    "cityName": "Sand Springs",
    "countyName": "Tulsa County",
    "latitude": 36.13981,
    "longitude": -96.10889,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sand_Springs,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sapulpa": {
    "slug": "sapulpa",
    "cityName": "Sapulpa",
    "countyName": "Creek County",
    "latitude": 36.01194,
    "longitude": -96.09694,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sapulpa,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sasakwa": {
    "slug": "sasakwa",
    "cityName": "Sasakwa",
    "countyName": "Seminole County",
    "latitude": 34.94667,
    "longitude": -96.52528,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sasakwa,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sawyer": {
    "slug": "sawyer",
    "cityName": "Sawyer",
    "countyName": "Choctaw County",
    "latitude": 34.01372,
    "longitude": -95.37162,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sawyer,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sayre": {
    "slug": "sayre",
    "cityName": "Sayre",
    "countyName": "Beckham County",
    "latitude": 35.29889,
    "longitude": -99.63667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sayre,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "schulter": {
    "slug": "schulter",
    "cityName": "Schulter",
    "countyName": "Okmulgee County",
    "latitude": 35.51333,
    "longitude": -95.95722,
    "sourceUrl": "https://en.wikipedia.org/wiki/Schulter,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "seiling": {
    "slug": "seiling",
    "cityName": "Seiling",
    "countyName": "Dewey County",
    "latitude": 36.1481,
    "longitude": -98.92426,
    "sourceUrl": "https://en.wikipedia.org/wiki/Seiling,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "seminole": {
    "slug": "seminole",
    "cityName": "Seminole",
    "countyName": "Seminole County",
    "latitude": 35.22452,
    "longitude": -96.67057,
    "sourceUrl": "https://en.wikipedia.org/wiki/Seminole,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sentinel": {
    "slug": "sentinel",
    "cityName": "Sentinel",
    "countyName": "Washita County",
    "latitude": 35.15783,
    "longitude": -99.17536,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sentinel,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "shady-grove": {
    "slug": "shady-grove",
    "cityName": "Shady Grove",
    "countyName": "Cherokee County",
    "latitude": 35.95,
    "longitude": -95.1,
    "sourceUrl": "https://en.wikipedia.org/wiki/Shady_Grove,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "shady-point": {
    "slug": "shady-point",
    "cityName": "Shady Point",
    "countyName": "Le Flore County",
    "latitude": 35.1301,
    "longitude": -94.65856,
    "sourceUrl": "https://en.wikipedia.org/wiki/Shady_Point,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "shamrock": {
    "slug": "shamrock",
    "cityName": "Shamrock",
    "countyName": "Creek County",
    "latitude": 35.91083,
    "longitude": -96.58,
    "sourceUrl": "https://en.wikipedia.org/wiki/Shamrock,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sharon": {
    "slug": "sharon",
    "cityName": "Sharon",
    "countyName": "Woodward County",
    "latitude": 36.277,
    "longitude": -99.34,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sharon,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "shawnee": {
    "slug": "shawnee",
    "cityName": "Shawnee",
    "countyName": "Pottawatomie County",
    "latitude": 35.32729,
    "longitude": -96.9253,
    "sourceUrl": "https://en.wikipedia.org/wiki/Shawnee,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "shidler": {
    "slug": "shidler",
    "cityName": "Shidler",
    "countyName": "Osage County",
    "latitude": 36.7808,
    "longitude": -96.6596,
    "sourceUrl": "https://en.wikipedia.org/wiki/Shidler,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "silko": {
    "slug": "silko",
    "cityName": "Silko",
    "countyName": "McIntosh County",
    "latitude": 35.45,
    "longitude": -95.28333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Silko,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "skedee": {
    "slug": "skedee",
    "cityName": "Skedee",
    "countyName": "Pawnee County",
    "latitude": 36.38056,
    "longitude": -96.70389,
    "sourceUrl": "https://en.wikipedia.org/wiki/Skedee,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "skiatook": {
    "slug": "skiatook",
    "cityName": "Skiatook",
    "countyName": "Tulsa County",
    "latitude": 36.37639,
    "longitude": -96.17667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Skiatook,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "slaughterville": {
    "slug": "slaughterville",
    "cityName": "Slaughterville",
    "countyName": "Cleveland County",
    "latitude": 35.08729,
    "longitude": -97.33503,
    "sourceUrl": "https://en.wikipedia.org/wiki/Slaughterville,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "slick": {
    "slug": "slick",
    "cityName": "Slick",
    "countyName": "Creek County",
    "latitude": 35.77528,
    "longitude": -96.26667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Slick,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "smith-village": {
    "slug": "smith-village",
    "cityName": "Smith Village",
    "countyName": "Oklahoma County",
    "latitude": 35.45089,
    "longitude": -97.45726,
    "sourceUrl": "https://en.wikipedia.org/wiki/Smith_Village,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "smithville": {
    "slug": "smithville",
    "cityName": "Smithville",
    "countyName": "McCurtain County",
    "latitude": 34.46889,
    "longitude": -94.64361,
    "sourceUrl": "https://en.wikipedia.org/wiki/Smithville,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "snow": {
    "slug": "snow",
    "cityName": "Snow",
    "countyName": "Cherokee County",
    "latitude": 35.95,
    "longitude": -94.78333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Snow,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "snyder": {
    "slug": "snyder",
    "cityName": "Snyder",
    "countyName": "Kiowa County",
    "latitude": 34.65896,
    "longitude": -98.95174,
    "sourceUrl": "https://en.wikipedia.org/wiki/Snyder,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "soper": {
    "slug": "soper",
    "cityName": "Soper",
    "countyName": "Choctaw County",
    "latitude": 34.03194,
    "longitude": -95.69667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Soper,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "south-coffeyville": {
    "slug": "south-coffeyville",
    "cityName": "South Coffeyville",
    "countyName": "Nowata County",
    "latitude": 36.99167,
    "longitude": -95.62222,
    "sourceUrl": "https://en.wikipedia.org/wiki/South_Coffeyville,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sparks": {
    "slug": "sparks",
    "cityName": "Sparks",
    "countyName": "Lincoln County",
    "latitude": 35.60833,
    "longitude": -96.82,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sparks,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "spaulding": {
    "slug": "spaulding",
    "cityName": "Spaulding",
    "countyName": "Hughes County",
    "latitude": 35.01306,
    "longitude": -96.44028,
    "sourceUrl": "https://en.wikipedia.org/wiki/Spaulding,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "spavinaw": {
    "slug": "spavinaw",
    "cityName": "Spavinaw",
    "countyName": "Mayes County",
    "latitude": 36.39,
    "longitude": -95.05,
    "sourceUrl": "https://en.wikipedia.org/wiki/Spavinaw,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "spencer": {
    "slug": "spencer",
    "cityName": "Spencer",
    "countyName": "Oklahoma County",
    "latitude": 35.507,
    "longitude": -97.37,
    "sourceUrl": "https://en.wikipedia.org/wiki/Spencer,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sperry": {
    "slug": "sperry",
    "cityName": "Sperry",
    "countyName": "Tulsa County",
    "latitude": 36.3,
    "longitude": -95.99,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sperry,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "spiro": {
    "slug": "spiro",
    "cityName": "Spiro",
    "countyName": "Le Flore County",
    "latitude": 35.24111,
    "longitude": -94.62,
    "sourceUrl": "https://en.wikipedia.org/wiki/Spiro,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sportsmen-acres": {
    "slug": "sportsmen-acres",
    "cityName": "Sportsmen Acres",
    "countyName": "Mayes County",
    "latitude": 36.24583,
    "longitude": -95.25139,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sportsmen_Acres,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "springer": {
    "slug": "springer",
    "cityName": "Springer",
    "countyName": "Carter County",
    "latitude": 34.30111,
    "longitude": -97.14111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Springer,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sterling": {
    "slug": "sterling",
    "cityName": "Sterling",
    "countyName": "Comanche County",
    "latitude": 34.74944,
    "longitude": -98.17167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sterling,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "stigler": {
    "slug": "stigler",
    "cityName": "Stigler",
    "countyName": "Haskell County",
    "latitude": 35.25611,
    "longitude": -95.12306,
    "sourceUrl": "https://en.wikipedia.org/wiki/Stigler,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "stillwater": {
    "slug": "stillwater",
    "cityName": "Stillwater",
    "countyName": "Payne County",
    "latitude": 36.11569,
    "longitude": -97.0591,
    "sourceUrl": "https://en.wikipedia.org/wiki/Stillwater,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "stilwell": {
    "slug": "stilwell",
    "cityName": "Stilwell",
    "countyName": "Adair County",
    "latitude": 35.81949,
    "longitude": -94.6273,
    "sourceUrl": "https://en.wikipedia.org/wiki/Stilwell,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "stonewall": {
    "slug": "stonewall",
    "cityName": "Stonewall",
    "countyName": "Pontotoc County",
    "latitude": 34.65333,
    "longitude": -96.52667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Stonewall,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "strang": {
    "slug": "strang",
    "cityName": "Strang",
    "countyName": "Mayes County",
    "latitude": 36.41083,
    "longitude": -95.13444,
    "sourceUrl": "https://en.wikipedia.org/wiki/Strang,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "stratford": {
    "slug": "stratford",
    "cityName": "Stratford",
    "countyName": "Garvin County",
    "latitude": 34.79528,
    "longitude": -96.96028,
    "sourceUrl": "https://en.wikipedia.org/wiki/Stratford,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "stringtown": {
    "slug": "stringtown",
    "cityName": "Stringtown",
    "countyName": "Atoka County",
    "latitude": 34.47,
    "longitude": -96.055,
    "sourceUrl": "https://en.wikipedia.org/wiki/Stringtown,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "strong-city": {
    "slug": "strong-city",
    "cityName": "Strong City",
    "countyName": "Roger Mills County",
    "latitude": 35.66972,
    "longitude": -99.60028,
    "sourceUrl": "https://en.wikipedia.org/wiki/Strong_City,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "stroud": {
    "slug": "stroud",
    "cityName": "Stroud",
    "countyName": "Lincoln County",
    "latitude": 35.74861,
    "longitude": -96.65833,
    "sourceUrl": "https://en.wikipedia.org/wiki/Stroud,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "stuart": {
    "slug": "stuart",
    "cityName": "Stuart",
    "countyName": "Hughes County",
    "latitude": 34.901,
    "longitude": -96.099,
    "sourceUrl": "https://en.wikipedia.org/wiki/Stuart,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sulphur": {
    "slug": "sulphur",
    "cityName": "Sulphur",
    "countyName": "Murray County",
    "latitude": 34.50787,
    "longitude": -96.96835,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sulphur,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "summit": {
    "slug": "summit",
    "cityName": "Summit",
    "countyName": "Muskogee County",
    "latitude": 35.667,
    "longitude": -95.422,
    "sourceUrl": "https://en.wikipedia.org/wiki/Summit,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sweetwater": {
    "slug": "sweetwater",
    "cityName": "Sweetwater",
    "countyName": "Beckham County",
    "latitude": 35.42333,
    "longitude": -99.91167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sweetwater,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "swink": {
    "slug": "swink",
    "cityName": "Swink",
    "countyName": "Choctaw County",
    "latitude": 34.01833,
    "longitude": -95.20222,
    "sourceUrl": "https://en.wikipedia.org/wiki/Swink,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sycamore": {
    "slug": "sycamore",
    "cityName": "Sycamore",
    "countyName": "Delaware County",
    "latitude": 36.39917,
    "longitude": -94.71167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sycamore,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "sylvester": {
    "slug": "sylvester",
    "cityName": "Sylvester",
    "countyName": "Cherokee County",
    "latitude": 35.98333,
    "longitude": -95.13333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Sylvester,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tahlequah": {
    "slug": "tahlequah",
    "cityName": "Tahlequah",
    "countyName": "Cherokee County",
    "latitude": 35.91139,
    "longitude": -94.97722,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tahlequah,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "talala": {
    "slug": "talala",
    "cityName": "Talala",
    "countyName": "Rogers County",
    "latitude": 36.52944,
    "longitude": -95.70111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Talala,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "talihina": {
    "slug": "talihina",
    "cityName": "Talihina",
    "countyName": "Le Flore County",
    "latitude": 34.7525,
    "longitude": -95.04361,
    "sourceUrl": "https://en.wikipedia.org/wiki/Talihina,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "taloga": {
    "slug": "taloga",
    "cityName": "Taloga",
    "countyName": "Dewey County",
    "latitude": 36.04028,
    "longitude": -98.96417,
    "sourceUrl": "https://en.wikipedia.org/wiki/Taloga,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tamaha": {
    "slug": "tamaha",
    "cityName": "Tamaha",
    "countyName": "Haskell County",
    "latitude": 35.4,
    "longitude": -94.98333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tamaha,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tatums": {
    "slug": "tatums",
    "cityName": "Tatums",
    "countyName": "Carter County",
    "latitude": 34.47889,
    "longitude": -97.46222,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tatums,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tecumseh": {
    "slug": "tecumseh",
    "cityName": "Tecumseh",
    "countyName": "Pottawatomie County",
    "latitude": 35.25778,
    "longitude": -96.93639,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tecumseh,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "temple": {
    "slug": "temple",
    "cityName": "Temple",
    "countyName": "Cotton County",
    "latitude": 34.27278,
    "longitude": -98.23556,
    "sourceUrl": "https://en.wikipedia.org/wiki/Temple,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "terlton": {
    "slug": "terlton",
    "cityName": "Terlton",
    "countyName": "Pawnee County",
    "latitude": 36.18806,
    "longitude": -96.4925,
    "sourceUrl": "https://en.wikipedia.org/wiki/Terlton,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "terral": {
    "slug": "terral",
    "cityName": "Terral",
    "countyName": "Jefferson County",
    "latitude": 33.93806,
    "longitude": -97.93722,
    "sourceUrl": "https://en.wikipedia.org/wiki/Terral,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "texhoma": {
    "slug": "texhoma",
    "cityName": "Texhoma",
    "countyName": "Texas County",
    "latitude": 36.505,
    "longitude": -101.77917,
    "sourceUrl": "https://en.wikipedia.org/wiki/Texhoma,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "texola": {
    "slug": "texola",
    "cityName": "Texola",
    "countyName": "Beckham County",
    "latitude": 35.21667,
    "longitude": -99.99167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Texola,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "thackerville": {
    "slug": "thackerville",
    "cityName": "Thackerville",
    "countyName": "Love County",
    "latitude": 33.79333,
    "longitude": -97.14444,
    "sourceUrl": "https://en.wikipedia.org/wiki/Thackerville,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "the-village": {
    "slug": "the-village",
    "cityName": "The Village",
    "countyName": "Oklahoma County",
    "latitude": 35.56083,
    "longitude": -97.55639,
    "sourceUrl": "https://en.wikipedia.org/wiki/The_Village,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "thomas": {
    "slug": "thomas",
    "cityName": "Thomas",
    "countyName": "Custer County",
    "latitude": 35.74413,
    "longitude": -98.74775,
    "sourceUrl": "https://en.wikipedia.org/wiki/Thomas,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tiawah": {
    "slug": "tiawah",
    "cityName": "Tiawah",
    "countyName": "Rogers County",
    "latitude": 36.3,
    "longitude": -95.5,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tiawah,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tipton": {
    "slug": "tipton",
    "cityName": "Tipton",
    "countyName": "Tillman County",
    "latitude": 34.47778,
    "longitude": -99.14056,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tipton,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tishomingo": {
    "slug": "tishomingo",
    "cityName": "Tishomingo",
    "countyName": "Johnston County",
    "latitude": 34.23611,
    "longitude": -96.67861,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tishomingo,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tonkawa": {
    "slug": "tonkawa",
    "cityName": "Tonkawa",
    "countyName": "Kay County",
    "latitude": 36.67833,
    "longitude": -97.31,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tonkawa,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tribbey": {
    "slug": "tribbey",
    "cityName": "Tribbey",
    "countyName": "Pottawatomie County",
    "latitude": 35.13,
    "longitude": -97.09,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tribbey,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tryon": {
    "slug": "tryon",
    "cityName": "Tryon",
    "countyName": "Lincoln County",
    "latitude": 35.86667,
    "longitude": -96.56389,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tryon,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tulsa": {
    "slug": "tulsa",
    "cityName": "Tulsa",
    "countyName": "Tulsa County",
    "latitude": 36.13139,
    "longitude": -95.93722,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tulsa,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tupelo": {
    "slug": "tupelo",
    "cityName": "Tupelo",
    "countyName": "Coal County",
    "latitude": 34.60333,
    "longitude": -96.42,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tupelo,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tushka": {
    "slug": "tushka",
    "cityName": "Tushka",
    "countyName": "Atoka County",
    "latitude": 34.31833,
    "longitude": -96.16667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tushka,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tuttle": {
    "slug": "tuttle",
    "cityName": "Tuttle",
    "countyName": "Grady County",
    "latitude": 35.29083,
    "longitude": -97.81222,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tuttle,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "tyrone": {
    "slug": "tyrone",
    "cityName": "Tyrone",
    "countyName": "Texas County",
    "latitude": 36.95306,
    "longitude": -101.06694,
    "sourceUrl": "https://en.wikipedia.org/wiki/Tyrone,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "union-city": {
    "slug": "union-city",
    "cityName": "Union City",
    "countyName": "Canadian County",
    "latitude": 35.39167,
    "longitude": -97.94167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Union_City,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "valley-brook": {
    "slug": "valley-brook",
    "cityName": "Valley Brook",
    "countyName": "Oklahoma County",
    "latitude": 35.40111,
    "longitude": -97.48194,
    "sourceUrl": "https://en.wikipedia.org/wiki/Valley_Brook,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "valley-park": {
    "slug": "valley-park",
    "cityName": "Valley Park",
    "countyName": "Rogers County",
    "latitude": 36.28333,
    "longitude": -95.75,
    "sourceUrl": "https://en.wikipedia.org/wiki/Valley_Park,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "velma": {
    "slug": "velma",
    "cityName": "Velma",
    "countyName": "Stephens County",
    "latitude": 34.46278,
    "longitude": -97.67444,
    "sourceUrl": "https://en.wikipedia.org/wiki/Velma,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "vera": {
    "slug": "vera",
    "cityName": "Vera",
    "countyName": "Washington County",
    "latitude": 36.59833,
    "longitude": -95.88444,
    "sourceUrl": "https://en.wikipedia.org/wiki/Vera,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "verden": {
    "slug": "verden",
    "cityName": "Verden",
    "countyName": "Grady County",
    "latitude": 35.08333,
    "longitude": -98.08333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Verden,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "verdigris": {
    "slug": "verdigris",
    "cityName": "Verdigris",
    "countyName": "Rogers County",
    "latitude": 36.23417,
    "longitude": -95.69111,
    "sourceUrl": "https://en.wikipedia.org/wiki/Verdigris,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "vian": {
    "slug": "vian",
    "cityName": "Vian",
    "countyName": "Sequoyah County",
    "latitude": 35.49833,
    "longitude": -94.96944,
    "sourceUrl": "https://en.wikipedia.org/wiki/Vian,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "vici": {
    "slug": "vici",
    "cityName": "Vici",
    "countyName": "Dewey County",
    "latitude": 36.14889,
    "longitude": -99.29889,
    "sourceUrl": "https://en.wikipedia.org/wiki/Vici,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "vinita": {
    "slug": "vinita",
    "cityName": "Vinita",
    "countyName": "Craig County",
    "latitude": 36.63889,
    "longitude": -95.15417,
    "sourceUrl": "https://en.wikipedia.org/wiki/Vinita,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wagoner": {
    "slug": "wagoner",
    "cityName": "Wagoner",
    "countyName": "Wagoner County",
    "latitude": 35.95944,
    "longitude": -95.36944,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wagoner,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wainwright": {
    "slug": "wainwright",
    "cityName": "Wainwright",
    "countyName": "Wagoner County",
    "latitude": 35.6125,
    "longitude": -95.565,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wainwright,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wakita": {
    "slug": "wakita",
    "cityName": "Wakita",
    "countyName": "Grant County",
    "latitude": 36.88111,
    "longitude": -97.92167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wakita,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "walters": {
    "slug": "walters",
    "cityName": "Walters",
    "countyName": "Cotton County",
    "latitude": 34.36,
    "longitude": -98.30833,
    "sourceUrl": "https://en.wikipedia.org/wiki/Walters,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wanette": {
    "slug": "wanette",
    "cityName": "Wanette",
    "countyName": "Pottawatomie County",
    "latitude": 34.96278,
    "longitude": -97.03167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wanette,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wann": {
    "slug": "wann",
    "cityName": "Wann",
    "countyName": "Nowata County",
    "latitude": 36.915,
    "longitude": -95.80417,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wann,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wapanucka": {
    "slug": "wapanucka",
    "cityName": "Wapanucka",
    "countyName": "Johnston County",
    "latitude": 34.37194,
    "longitude": -96.42139,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wapanucka,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wardville": {
    "slug": "wardville",
    "cityName": "Wardville",
    "countyName": "Atoka County",
    "latitude": 34.35,
    "longitude": -96.13333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wardville,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "warner": {
    "slug": "warner",
    "cityName": "Warner",
    "countyName": "Muskogee County",
    "latitude": 35.49333,
    "longitude": -95.30556,
    "sourceUrl": "https://en.wikipedia.org/wiki/Warner,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "warr-acres": {
    "slug": "warr-acres",
    "cityName": "Warr Acres",
    "countyName": "Oklahoma County",
    "latitude": 35.52256,
    "longitude": -97.61893,
    "sourceUrl": "https://en.wikipedia.org/wiki/Warr_Acres,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "warwick": {
    "slug": "warwick",
    "cityName": "Warwick",
    "countyName": "Lincoln County",
    "latitude": 35.68333,
    "longitude": -97.0,
    "sourceUrl": "https://en.wikipedia.org/wiki/Warwick,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "washington": {
    "slug": "washington",
    "cityName": "Washington",
    "countyName": "McClain County",
    "latitude": 35.05944,
    "longitude": -97.48389,
    "sourceUrl": "https://en.wikipedia.org/wiki/Washington,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "watonga": {
    "slug": "watonga",
    "cityName": "Watonga",
    "countyName": "Blaine County",
    "latitude": 35.88472,
    "longitude": -98.41333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Watonga,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "watson": {
    "slug": "watson",
    "cityName": "Watson",
    "countyName": "McCurtain County",
    "latitude": 33.89,
    "longitude": -94.56667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Watson,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "watts": {
    "slug": "watts",
    "cityName": "Watts",
    "countyName": "Adair County",
    "latitude": 36.10889,
    "longitude": -94.57139,
    "sourceUrl": "https://en.wikipedia.org/wiki/Watts,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "waukomis": {
    "slug": "waukomis",
    "cityName": "Waukomis",
    "countyName": "Garfield County",
    "latitude": 36.28056,
    "longitude": -97.90222,
    "sourceUrl": "https://en.wikipedia.org/wiki/Waukomis,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "waurika": {
    "slug": "waurika",
    "cityName": "Waurika",
    "countyName": "Jefferson County",
    "latitude": 34.16722,
    "longitude": -97.99806,
    "sourceUrl": "https://en.wikipedia.org/wiki/Waurika,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wayne": {
    "slug": "wayne",
    "cityName": "Wayne",
    "countyName": "McClain County",
    "latitude": 34.91722,
    "longitude": -97.315,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wayne,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "waynoka": {
    "slug": "waynoka",
    "cityName": "Waynoka",
    "countyName": "Woods County",
    "latitude": 36.5825,
    "longitude": -98.87917,
    "sourceUrl": "https://en.wikipedia.org/wiki/Waynoka,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "weatherford": {
    "slug": "weatherford",
    "cityName": "Weatherford",
    "countyName": "Custer County",
    "latitude": 35.52611,
    "longitude": -98.7075,
    "sourceUrl": "https://en.wikipedia.org/wiki/Weatherford,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "webbers-falls": {
    "slug": "webbers-falls",
    "cityName": "Webbers Falls",
    "countyName": "Muskogee County",
    "latitude": 35.50889,
    "longitude": -95.12333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Webbers_Falls,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "welch": {
    "slug": "welch",
    "cityName": "Welch",
    "countyName": "Craig County",
    "latitude": 36.87417,
    "longitude": -95.09444,
    "sourceUrl": "https://en.wikipedia.org/wiki/Welch,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "weleetka": {
    "slug": "weleetka",
    "cityName": "Weleetka",
    "countyName": "Okfuskee County",
    "latitude": 35.33611,
    "longitude": -96.13722,
    "sourceUrl": "https://en.wikipedia.org/wiki/Weleetka,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "welling": {
    "slug": "welling",
    "cityName": "Welling",
    "countyName": "Cherokee County",
    "latitude": 35.95,
    "longitude": -94.91667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Welling,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wellston": {
    "slug": "wellston",
    "cityName": "Wellston",
    "countyName": "Lincoln County",
    "latitude": 35.69111,
    "longitude": -97.06333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wellston,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "west-siloam-springs": {
    "slug": "west-siloam-springs",
    "cityName": "West Siloam Springs",
    "countyName": "Delaware County",
    "latitude": 36.17639,
    "longitude": -94.59361,
    "sourceUrl": "https://en.wikipedia.org/wiki/West_Siloam_Springs,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "westville": {
    "slug": "westville",
    "cityName": "Westville",
    "countyName": "Adair County",
    "latitude": 35.9925,
    "longitude": -94.56833,
    "sourceUrl": "https://en.wikipedia.org/wiki/Westville,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wetumka": {
    "slug": "wetumka",
    "cityName": "Wetumka",
    "countyName": "Hughes County",
    "latitude": 35.23722,
    "longitude": -96.24167,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wetumka,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wewoka": {
    "slug": "wewoka",
    "cityName": "Wewoka",
    "countyName": "Seminole County",
    "latitude": 35.15889,
    "longitude": -96.49333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wewoka,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "white-eagle": {
    "slug": "white-eagle",
    "cityName": "White Eagle",
    "countyName": "Kay County",
    "latitude": 36.6,
    "longitude": -96.95,
    "sourceUrl": "https://en.wikipedia.org/wiki/White_Eagle,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "whitefield": {
    "slug": "whitefield",
    "cityName": "Whitefield",
    "countyName": "Haskell County",
    "latitude": 35.25,
    "longitude": -95.23333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Whitefield,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "whitesboro": {
    "slug": "whitesboro",
    "cityName": "Whitesboro",
    "countyName": "Le Flore County",
    "latitude": 34.86667,
    "longitude": -94.88333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Whitesboro,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wilburton": {
    "slug": "wilburton",
    "cityName": "Wilburton",
    "countyName": "Latimer County",
    "latitude": 34.91861,
    "longitude": -95.31917,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wilburton,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "willow": {
    "slug": "willow",
    "cityName": "Willow",
    "countyName": "Greer County",
    "latitude": 35.05,
    "longitude": -99.50833,
    "sourceUrl": "https://en.wikipedia.org/wiki/Willow,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wilson": {
    "slug": "wilson",
    "cityName": "Wilson",
    "countyName": "Carter County",
    "latitude": 34.16111,
    "longitude": -97.42583,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wilson,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "winchester": {
    "slug": "winchester",
    "cityName": "Winchester",
    "countyName": "Okmulgee County",
    "latitude": 35.8,
    "longitude": -95.98333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Winchester,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wister": {
    "slug": "wister",
    "cityName": "Wister",
    "countyName": "Le Flore County",
    "latitude": 34.96722,
    "longitude": -94.96833,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wister,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "woodlawn-park": {
    "slug": "woodlawn-park",
    "cityName": "Woodlawn Park",
    "countyName": "Oklahoma County",
    "latitude": 35.51,
    "longitude": -97.65,
    "sourceUrl": "https://en.wikipedia.org/wiki/Woodlawn_Park,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "woodward": {
    "slug": "woodward",
    "cityName": "Woodward",
    "countyName": "Woodward County",
    "latitude": 36.43361,
    "longitude": -99.39028,
    "sourceUrl": "https://en.wikipedia.org/wiki/Woodward,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wright-city": {
    "slug": "wright-city",
    "cityName": "Wright City",
    "countyName": "McCurtain County",
    "latitude": 34.03,
    "longitude": -95.08333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wright_City,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wyandotte": {
    "slug": "wyandotte",
    "cityName": "Wyandotte",
    "countyName": "Ottawa County",
    "latitude": 36.79556,
    "longitude": -94.72333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wyandotte,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wynnewood": {
    "slug": "wynnewood",
    "cityName": "Wynnewood",
    "countyName": "Garvin County",
    "latitude": 34.64333,
    "longitude": -97.17,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wynnewood,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "wynona": {
    "slug": "wynona",
    "cityName": "Wynona",
    "countyName": "Osage County",
    "latitude": 36.54528,
    "longitude": -96.32417,
    "sourceUrl": "https://en.wikipedia.org/wiki/Wynona,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "yale": {
    "slug": "yale",
    "cityName": "Yale",
    "countyName": "Payne County",
    "latitude": 36.11417,
    "longitude": -96.69917,
    "sourceUrl": "https://en.wikipedia.org/wiki/Yale,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "yukon": {
    "slug": "yukon",
    "cityName": "Yukon",
    "countyName": "Canadian County",
    "latitude": 35.50694,
    "longitude": -97.7625,
    "sourceUrl": "https://en.wikipedia.org/wiki/Yukon,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "zeb": {
    "slug": "zeb",
    "cityName": "Zeb",
    "countyName": "Cherokee County",
    "latitude": 35.85,
    "longitude": -95.03333,
    "sourceUrl": "https://en.wikipedia.org/wiki/Zeb,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "zena": {
    "slug": "zena",
    "cityName": "Zena",
    "countyName": "Delaware County",
    "latitude": 36.53333,
    "longitude": -94.85,
    "sourceUrl": "https://en.wikipedia.org/wiki/Zena,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  },
  "zion": {
    "slug": "zion",
    "cityName": "Zion",
    "countyName": "Adair County",
    "latitude": 35.78333,
    "longitude": -94.61667,
    "sourceUrl": "https://en.wikipedia.org/wiki/Zion,_Oklahoma",
    "sourceType": "Other",
    "lastVerified": "2026-04-23"
  }
};

export function getCityGeoData(slug: string): CityGeoDatum | undefined {
  return CITY_GEO[slug];
}

// ⚡ Bolt: Pre-compute county-to-cities map for O(1) lookups instead of O(N) array filtering.
// CITY_GEO contains ~5800 entries, and getCitiesByCounty is called frequently during SSG.
// This prevents O(N*M) performance degradation.
const CITIES_BY_COUNTY_CACHE: Record<string, CityGeoDatum[]> = {};
for (const city of Object.values(CITY_GEO)) {
  const normalizedCounty = city.countyName.toLowerCase();
  if (!CITIES_BY_COUNTY_CACHE[normalizedCounty]) {
    CITIES_BY_COUNTY_CACHE[normalizedCounty] = [];
  }
  CITIES_BY_COUNTY_CACHE[normalizedCounty].push(city);
}

export function getCitiesByCounty(countyName: string): CityGeoDatum[] {
  return CITIES_BY_COUNTY_CACHE[countyName.toLowerCase()] || [];
}

export function getAllCitySlugs(): string[] {
  return Object.keys(CITY_GEO);
}

export function getAllCityGeoData(): CityGeoDatum[] {
  return Object.values(CITY_GEO);
}

export function getCitiesInBounds(
  latMin: number,
  latMax: number,
  lonMin: number,
  lonMax: number
): CityGeoDatum[] {
  return Object.values(CITY_GEO).filter(
    (c) =>
      c.latitude >= latMin &&
      c.latitude <= latMax &&
      c.longitude >= lonMin &&
      c.longitude <= lonMax
  );
}
