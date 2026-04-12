/**
 * 1. Strip Navbar/Footer from service-areas/page.tsx
 * 2. Replace the majorCities array with all 55 cities
 */
const fs = require('fs');
const path = require('path');

const ROOT = 'C:/Users/ianna/OneDrive/Desktop/GitHub/BOLT-SITE';
const fp = path.join(ROOT, 'app/service-areas/page.tsx');
let code = fs.readFileSync(fp, 'utf8');

// Strip Navbar/Footer imports and JSX
code = code.replace(/import\s*\{\s*Navbar\s*\}\s*from\s*['"]@\/components\/ui\/navbar['"];\s*\r?\n/g, '');
code = code.replace(/import\s*\{\s*Footer\s*\}\s*from\s*['"]@\/components\/ui\/footer['"];\s*\r?\n/g, '');
code = code.replace(/\s*<Navbar\s*\/>\s*\r?\n?/g, '\n');
code = code.replace(/\s*<Footer\s*\/>\s*\r?\n?/g, '\n');

// Replace majorCities array
const newCities = `const majorCities = [
  { name: "Tulsa", county: "Tulsa", population: "413,066", link: "/tulsa-process-server" },
  { name: "Oklahoma City", county: "Oklahoma", population: "697,125", link: "/service-areas/oklahoma-city" },
  { name: "Norman", county: "Cleveland", population: "129,672", link: "/service-areas/norman" },
  { name: "Broken Arrow", county: "Tulsa", population: "118,180", link: "/service-areas/broken-arrow" },
  { name: "Edmond", county: "Oklahoma", population: "96,825", link: "/service-areas/edmond" },
  { name: "Lawton", county: "Comanche", population: "91,132", link: "/service-areas/lawton" },
  { name: "Muskogee", county: "Muskogee", population: "67,439", link: "/service-areas/muskogee" },
  { name: "Moore", county: "Cleveland", population: "63,420", link: "/service-areas/moore" },
  { name: "Midwest City", county: "Oklahoma", population: "58,297", link: "/service-areas/midwest-city" },
  { name: "Enid", county: "Garfield", population: "49,596", link: "/service-areas/enid" },
  { name: "Stillwater", county: "Payne", population: "48,712", link: "/service-areas/stillwater" },
  { name: "Bartlesville", county: "Washington", population: "37,878", link: "/service-areas/bartlesville" },
  { name: "Owasso", county: "Tulsa", population: "36,926", link: "/service-areas/owasso" },
  { name: "Shawnee", county: "Pottawatomie", population: "31,671", link: "/service-areas/shawnee" },
  { name: "Bixby", county: "Tulsa", population: "30,155", link: "/service-areas/bixby" },
  { name: "Jenks", county: "Tulsa", population: "27,102", link: "/service-areas/jenks" },
  { name: "Yukon", county: "Canadian", population: "25,529", link: "/service-areas/yukon" },
  { name: "Ardmore", county: "Carter", population: "24,877", link: "/service-areas/ardmore" },
  { name: "Ponca City", county: "Kay", population: "24,326", link: "/service-areas/ponca-city" },
  { name: "Sapulpa", county: "Creek", population: "22,570", link: "/service-areas/sapulpa" },
  { name: "Mustang", county: "Canadian", population: "22,192", link: "/service-areas/mustang" },
  { name: "Bethany", county: "Oklahoma", population: "20,560", link: "/service-areas/bethany" },
  { name: "Claremore", county: "Rogers", population: "20,166", link: "/service-areas/claremore" },
  { name: "Sand Springs", county: "Tulsa", population: "19,912", link: "/service-areas/sand-springs" },
  { name: "Durant", county: "Bryan", population: "19,746", link: "/service-areas/durant" },
  { name: "Altus", county: "Jackson", population: "18,646", link: "/service-areas/altus" },
  { name: "El Reno", county: "Canadian", population: "18,557", link: "/service-areas/el-reno" },
  { name: "McAlester", county: "Pittsburg", population: "18,111", link: "/service-areas/mcalester" },
  { name: "Tahlequah", county: "Cherokee", population: "16,935", link: "/service-areas/tahlequah" },
  { name: "Ada", county: "Pontotoc", population: "16,575", link: "/service-areas/ada" },
  { name: "Chickasha", county: "Grady", population: "16,539", link: "/service-areas/chickasha" },
  { name: "Glenpool", county: "Tulsa", population: "14,683", link: "/service-areas/glenpool" },
  { name: "Choctaw", county: "Oklahoma", population: "14,665", link: "/service-areas/choctaw" },
  { name: "Miami", county: "Ottawa", population: "12,926", link: "/service-areas/miami" },
  { name: "Guymon", county: "Texas", population: "12,539", link: "/service-areas/guymon" },
  { name: "Okmulgee", county: "Okmulgee", population: "12,000", link: "/service-areas/okmulgee" },
  { name: "Elk City", county: "Beckham", population: "11,361", link: "/service-areas/elk-city" },
  { name: "Guthrie", county: "Logan", population: "11,243", link: "/service-areas/guthrie" },
  { name: "Coweta", county: "Wagoner", population: "10,433", link: "/service-areas/coweta" },
  { name: "Pryor", county: "Mayes", population: "9,569", link: "/service-areas/pryor" },
  { name: "Nowata", county: "Nowata", population: "9,185", link: "/service-areas/nowata" },
  { name: "Wagoner", county: "Wagoner", population: "9,090", link: "/service-areas/wagoner" },
  { name: "Poteau", county: "Le Flore", population: "8,959", link: "/service-areas/poteau" },
  { name: "Collinsville", county: "Tulsa", population: "8,878", link: "/service-areas/collinsville" },
  { name: "Sallisaw", county: "Sequoyah", population: "8,605", link: "/service-areas/sallisaw" },
  { name: "Skiatook", county: "Osage", population: "8,632", link: "/service-areas/skiatook" },
  { name: "Catoosa", county: "Rogers", population: "7,628", link: "/service-areas/catoosa" },
  { name: "Pauls Valley", county: "Garvin", population: "6,142", link: "/service-areas/pauls-valley" },
  { name: "Vinita", county: "Craig", population: "5,347", link: "/service-areas/vinita" },
  { name: "Sulphur", county: "Murray", population: "4,994", link: "/service-areas/sulphur" },
  { name: "Broken Bow", county: "McCurtain", population: "4,241", link: "/service-areas/broken-bow" },
  { name: "Bristow", county: "Creek", population: "4,237", link: "/service-areas/bristow" },
  { name: "Pawhuska", county: "Osage", population: "3,482", link: "/service-areas/pawhuska" },
  { name: "Atoka", county: "Atoka", population: "3,000", link: "/service-areas/atoka" },
  { name: "Kellyville", county: "Creek", population: "1,047", link: "/service-areas/kellyville" },
];`;

// Find and replace the majorCities block using regex
code = code.replace(/const majorCities = \[[\s\S]*?\];/m, newCities);

fs.writeFileSync(fp, code, 'utf8');
console.log('Done! Updated service-areas/page.tsx with 55 cities and stripped Navbar/Footer.');
