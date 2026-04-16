const fs = require('fs');
const path = require('path');

// ─────────────────────────────────────────────
// KIMI RESEARCH DATA (real courthouse phones, neighborhoods, employers, FAQs)
// ─────────────────────────────────────────────
const kimiRaw = JSON.parse(fs.readFileSync(path.join(__dirname, 'kimi-data.json'), 'utf8'));
const KIMI = {};
for (const item of kimiRaw) {
  KIMI[item.name] = item;
}

// Strip prices from same-day answers
function stripSameDayPrice(answer) {
  // Replace the whole phrasing pattern at once
  return answer
    .replace(/Our Same-Day service\s*\(\$[\d,]+\)\s*covers\s*/gi, 'Our same-day service can cover ')
    .replace(/Our Same-Day service\s*covers\s*/gi, 'Our same-day service can cover ')
    .replace(/\(\$[\d,]+\)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function sanitizeFAQs(faqs) {
  return faqs.map(f => ({
    question: f.question,
    answer: /same.day/i.test(f.question) ? stripSameDayPrice(f.answer) : f.answer
  }));
}

const rootDir = "C:/Users/ianna/OneDrive/Desktop/GitHub/BOLT-SITE";
const citiesDir = "C:/Users/ianna/Downloads/location-rewrites/location-rewrites/locations";
const countiesDir = "C:/Users/ianna/Downloads/location-rewrites/location-rewrites/counties";

// ─────────────────────────────────────────────
// REAL DATA from oklahoma-local-seo-research.md
// ─────────────────────────────────────────────

const COUNTY_DATA = {
  'adair':         { pop: 19495,  seat: 'Stilwell',      address: '220 W Division St, Stilwell, OK 74960',          district: 11, majorCities: ['Stilwell','Westville','Watts'] },
  'atoka':         { pop: 14143,  seat: 'Atoka',         address: '200 E Court St, Atoka, OK 74525',                district: 25, majorCities: ['Atoka','Tushka','Coalgate'] },
  'beckham':       { pop: 16292,  seat: 'Sayre',         address: '302 E Main St, Sayre, OK 73662',                 district: 2,  majorCities: ['Sayre','Elk City','Erick'] },
  'blaine':        { pop: 8735,   seat: 'Watonga',       address: '212 N Weigle Ave, Watonga, OK 73772',            district: 4,  majorCities: ['Watonga','Geary','Okeene'] },
  'bryan':         { pop: 47498,  seat: 'Durant',        address: '402 W Evergreen St, Durant, OK 74701',           district: 19, majorCities: ['Durant','Calera','Colbert'] },
  'caddo':         { pop: 26945,  seat: 'Anadarko',      address: '201 W Oklahoma Ave, Anadarko, OK 73005',         district: 6,  majorCities: ['Anadarko','Chickasha','Carnegie'] },
  'canadian':      { pop: 154943, seat: 'El Reno',       address: 'Courthouse, El Reno, OK 73036',                  district: 26, majorCities: ['Yukon','Mustang','El Reno','Weatherford'] },
  'carter':        { pop: 48498,  seat: 'Ardmore',       address: '20 B St SW, Ardmore, OK 73401',                  district: 20, majorCities: ['Ardmore','Lone Grove','Wilson'] },
  'cherokee':      { pop: 46007,  seat: 'Tahlequah',     address: '213 W Delaware St, Tahlequah, OK 74464',         district: 11, majorCities: ['Tahlequah','Hulbert','Park Hill'] },
  'choctaw':       { pop: 14204,  seat: 'Hugo',          address: '300 E Duke St, Hugo, OK 74743',                  district: 17, majorCities: ['Hugo','Boswell','Fort Towson'] },
  'cimarron':      { pop: 2269,   seat: 'Boise City',    address: 'Courthouse Sq, Boise City, OK 73933',            district: 1,  majorCities: ['Boise City','Keyes','Felt'] },
  'cleveland':     { pop: 295532, seat: 'Norman',        address: '200 S Peters Ave, Norman, OK 73069',             district: 21, majorCities: ['Norman','Moore','Midwest City','Noble'] },
  'comanche':      { pop: 125543, seat: 'Lawton',        address: '315 SW 5th St, Lawton, OK 73501',                district: 5,  majorCities: ['Lawton','Elgin','Cache','Fletcher'] },
  'craig':         { pop: 14207,  seat: 'Vinita',        address: '301 W Canadian Ave, Vinita, OK 74301',           district: 12, majorCities: ['Vinita','Welch','Bluejacket'] },
  'creek':         { pop: 71640,  seat: 'Sapulpa',       address: '222 E Dewey Ave, Sapulpa, OK 74066',             district: 24, majorCities: ['Sapulpa','Bristow','Drumright','Kellyville'] },
  'custer':        { pop: 30814,  seat: 'Arapaho',       address: '603 B St, Arapaho, OK 73620',                    district: 2,  majorCities: ['Weatherford','Clinton','Arapaho'] },
  'delaware':      { pop: 43081,  seat: 'Jay',           address: '327 S 5th St, Jay, OK 74346',                    district: 13, majorCities: ['Jay','Grove','South Coffeyville'] },
  'dewey':         { pop: 4484,   seat: 'Taloga',        address: 'Ruble & Broadway, Taloga, OK 73667',             district: 4,  majorCities: ['Taloga','Seiling','Vici'] },
  'garfield':      { pop: 62536,  seat: 'Enid',          address: '114 W Broadway Ave, Enid, OK 73701',             district: 4,  majorCities: ['Enid','Hennessey','Fairmont'] },
  'grady':         { pop: 52582,  seat: 'Chickasha',     address: '328 W Choctaw Ave, Chickasha, OK 73018',         district: 6,  majorCities: ['Chickasha','Tuttle','Blanchard','Lindsay'] },
  'hughes':        { pop: 13021,  seat: 'Holdenville',   address: '200 N Broadway St, Holdenville, OK 74848',       district: 22, majorCities: ['Holdenville','Coalgate','Stuart'] },
  'jackson':       { pop: 26146,  seat: 'Altus',         address: '101 N Main St, Altus, OK 73521',                 district: 3,  majorCities: ['Altus','Blair','Duke'] },
  'kay':           { pop: 43705,  seat: 'Newkirk',       address: '300 Courthouse Dr, Perry, OK 73077',             district: 8,  majorCities: ['Ponca City','Newkirk','Blackwell','Tonkawa'] },
  'kiowa':         { pop: 8509,   seat: 'Hobart',        address: '315 SW 5th St, Lawton, OK 73501',                district: 3,  majorCities: ['Hobart','Snyder','Mountain Park'] },
  'leflore':       { pop: 48129,  seat: 'Poteau',        address: 'Courthouse, Poteau, OK 74953',                   district: 16, majorCities: ['Poteau','Heavener','Spiro','Panama'] },
  'lincoln':       { pop: 33688,  seat: 'Chandler',      address: '811 Manvel Ave, Chandler, OK 74834',             district: 23, majorCities: ['Chandler','Stroud','Prague','Cushing'] },
  'logan':         { pop: 50715,  seat: 'Guthrie',       address: '301 E Harrison Ave, Guthrie, OK 73044',          district: 9,  majorCities: ['Guthrie','Edmond (N)','Crescent','Langston'] },
  'love':          { pop: 10146,  seat: 'Marietta',      address: '301 N Broadway St, Walters, OK 73572',           district: 20, majorCities: ['Marietta','Thackerville','Gene Autry'] },
  'marshall':      { pop: 15312,  seat: 'Madill',        address: 'Courthouse, Madill, OK 73446',                   district: 20, majorCities: ['Madill','Plainview','Kingston'] },
  'mayes':         { pop: 39046,  seat: 'Pryor Creek',   address: 'Courthouse, Pryor Creek, OK 74361',              district: 12, majorCities: ['Pryor Creek','Salina','Chouteau','Locust Grove'] },
  'mcclain':       { pop: 41136,  seat: 'Purcell',       address: 'Courthouse, Purcell, OK 73080',                  district: 21, majorCities: ['Newcastle','Purcell','Blanchard','Tuttle'] },
  'mccurtain':     { pop: 30814,  seat: 'Idabel',        address: 'Courthouse, Idabel, OK 74745',                   district: 17, majorCities: ['Idabel','Broken Bow','Eagletown'] },
  'mcintosh':      { pop: 18941,  seat: 'Eufaula',       address: '222 E Dewey Ave, Sapulpa, OK 74066',             district: 18, majorCities: ['Eufaula','Checotah','Hanna'] },
  'murray':        { pop: 13904,  seat: 'Sulphur',       address: 'Courthouse, Sulphur, OK 73086',                  district: 20, majorCities: ['Sulphur','Davis','Dougherty'] },
  'muskogee':      { pop: 66553,  seat: 'Muskogee',      address: 'Courthouse, Muskogee, OK 74401',                 district: 15, majorCities: ['Muskogee','Fort Gibson','Wagoner','Taft'] },
  'noble':         { pop: 10924,  seat: 'Perry',         address: '300 Courthouse Dr, Perry, OK 73077',             district: 8,  majorCities: ['Perry','Billings','Marland'] },
  'nowata':        { pop: 9320,   seat: 'Nowata',        address: 'Courthouse, Nowata, OK 74048',                   district: 11, majorCities: ['Nowata','Delaware','South Coffeyville'] },
  'okfuskee':      { pop: 11310,  seat: 'Okemah',        address: 'Courthouse, Okemah, OK 74859',                   district: 24, majorCities: ['Okemah','Weleetka','Okfuskee'] },
  'oklahoma':      { pop: 796765, seat: 'Oklahoma City', address: '700 Couch Dr, Oklahoma City, OK 73102',          district: 7,  majorCities: ['Oklahoma City','Midwest City','Del City','Choctaw','Harrah'] },
  'okmulgee':      { pop: 36706,  seat: 'Okmulgee',      address: '314 W 7th St, Okmulgee, OK 74447',              district: 24, majorCities: ['Okmulgee','Henryetta','Beggs','Dewar'] },
  'osage':         { pop: 45818,  seat: 'Pawhuska',      address: '600 Grandview Ave, Pawhuska, OK 74056',          district: 10, majorCities: ['Pawhuska','Skiatook','Hominy','Barnsdall'] },
  'ottawa':        { pop: 30285,  seat: 'Miami',         address: 'Courthouse, Miami, OK 74355',                    district: 13, majorCities: ['Miami','Afton','Commerce','Quapaw'] },
  'payne':         { pop: 81646,  seat: 'Stillwater',    address: 'Courthouse, Stillwater, OK 74074',               district: 9,  majorCities: ['Stillwater','Cushing','Perkins','Glencoe'] },
  'pittsburg':     { pop: 43773,  seat: 'McAlester',     address: 'Courthouse, McAlester, OK 74501',                district: 18, majorCities: ['McAlester','Hartshorne','Krebs','Savanna'] },
  'pontotoc':      { pop: 38065,  seat: 'Ada',           address: 'Courthouse, Ada, OK 74820',                      district: 22, majorCities: ['Ada','Stonewall','Latta','Coalgate'] },
  'pottawatomie':  { pop: 72454,  seat: 'Shawnee',       address: '325 N Broadway Ave, Shawnee, OK 74801',          district: 23, majorCities: ['Shawnee','Tecumseh','Harrah','McLoud'] },
  'pushmataha':    { pop: 10812,  seat: 'Antlers',       address: 'Courthouse, Antlers, OK 74523',                  district: 17, majorCities: ['Antlers','Clayton','Rattan'] },
  'rogers':        { pop: 95240,  seat: 'Claremore',     address: 'Courthouse, Claremore, OK 74017',                district: 12, majorCities: ['Claremore','Catoosa','Owasso','Verdigris'] },
  'seminole':      { pop: 23556,  seat: 'Wewoka',        address: 'Courthouse, Wewoka, OK 74884',                   district: 22, majorCities: ['Wewoka','Seminole','Konawa','Wanette'] },
  'sequoyah':      { pop: 39281,  seat: 'Sallisaw',      address: '120 E Chickasaw Ave, Sallisaw, OK 74955',        district: 15, majorCities: ['Sallisaw','Muldrow','Roland','Vian'] },
  'stephens':      { pop: 42848,  seat: 'Duncan',        address: 'Courthouse, Duncan, OK 73533',                   district: 5,  majorCities: ['Duncan','Marlow','Rush Springs','Bray'] },
  'texas':         { pop: 21384,  seat: 'Guymon',        address: '219 NW 4th St, Guymon, OK 73942',               district: 1,  majorCities: ['Guymon','Goodwell','Hooker','Hardesty'] },
  'tulsa':         { pop: 669279, seat: 'Tulsa',         address: 'Courthouse, Tulsa, OK 74103',                    district: 14, majorCities: ['Tulsa','Broken Arrow','Owasso','Bixby','Jenks','Glenpool'] },
  'wagoner':       { pop: 80981,  seat: 'Wagoner',       address: 'Courthouse, Wagoner, OK 74467',                  district: 15, majorCities: ['Coweta','Wagoner','Catoosa','Broken Arrow'] },
  'washington':    { pop: 52455,  seat: 'Bartlesville',  address: '400 S Johnstone Ave, Bartlesville, OK 74003',    district: 11, majorCities: ['Bartlesville','Dewey','Copan','Ochelata'] },
  'woodward':      { pop: 20470,  seat: 'Woodward',      address: 'Courthouse, Woodward, OK 73801',                 district: 4,  majorCities: ['Woodward','Mooreland','Sharon'] },
};

const CITY_DATA = {
  'ada':           { pop: 17000,  county: 'Pontotoc County', driveOKC: 90,  driveTulsa: 120, notable: 'Home to East Central University and a major Chickasaw Nation hub' },
  'altus':         { pop: 18000,  county: 'Jackson County',  driveOKC: 120, driveTulsa: 210, notable: 'Home to Altus Air Force Base (97th Air Mobility Wing) and Jackson County seat' },
  'ardmore':       { pop: 25000,  county: 'Carter County',   driveOKC: 100, driveTulsa: 145, notable: 'Oil industry hub and I-35 corridor city near the Texas border' },
  'atoka':         { pop: 3000,   county: 'Atoka County',    driveOKC: 120, driveTulsa: 140, notable: 'Rural county seat with Chickasaw Nation presence in south-central Oklahoma' },
  'bartlesville':  { pop: 35000,  county: 'Washington County', driveOKC: 160, driveTulsa: 45, notable: 'Home to ConocoPhillips headquarters and the Price Tower; Washington County seat' },
  'bethany':       { pop: 19000,  county: 'Oklahoma County', driveOKC: 15,  driveTulsa: 100, notable: 'Densely populated OKC suburb adjacent to NW Oklahoma City with SNU campus' },
  'bixby':         { pop: 28000,  county: 'Tulsa County',    driveOKC: 110, driveTulsa: 15,  notable: 'Fast-growing Tulsa suburb along the Arkansas River with strong school district draw' },
  'bristow':       { pop: 4200,   county: 'Creek County',    driveOKC: 55,  driveTulsa: 50,  notable: 'Historic Route 66 city and Creek County community with oil industry history' },
  'broken-arrow':  { pop: 120000, county: 'Tulsa County',    driveOKC: 115, driveTulsa: 20,  notable: 'Second-largest Tulsa metro city with a major Boeing and industrial corridor' },
  'broken-bow':    { pop: 4000,   county: 'McCurtain County', driveOKC: 180, driveTulsa: 200, notable: 'Gateway to Beavers Bend State Park and the Ouachita National Forest; major tourism growth' },
  'catoosa':       { pop: 8000,   county: 'Rogers County',   driveOKC: 115, driveTulsa: 12,  notable: 'Home to the Port of Catoosa (western inland waterway port) and heavy industrial employers' },
  'chickasha':     { pop: 16000,  county: 'Grady County',    driveOKC: 40,  driveTulsa: 140, notable: 'Grady County seat with University of Science and Arts of Oklahoma (USAO) campus' },
  'choctaw':       { pop: 13000,  county: 'Oklahoma County', driveOKC: 20,  driveTulsa: 100, notable: 'Eastern OKC suburb with rapid residential growth along I-40 corridor' },
  'claremore':     { pop: 20000,  county: 'Rogers County',   driveOKC: 130, driveTulsa: 28,  notable: 'Rogers County seat, birthplace of Will Rogers, and home to Rogers State University' },
  'collinsville':  { pop: 7000,   county: 'Tulsa County',    driveOKC: 115, driveTulsa: 18,  notable: 'North Tulsa suburb growing along Hwy 169 with Cherokee Nation connections' },
  'coweta':        { pop: 11000,  county: 'Wagoner County',  driveOKC: 115, driveTulsa: 25,  notable: 'Wagoner County\'s largest city and fast-growing bedroom community east of Tulsa' },
  'durant':        { pop: 17000,  county: 'Bryan County',    driveOKC: 100, driveTulsa: 150, notable: 'Bryan County seat, home to Southeastern Oklahoma State University and Choctaw Nation' },
  'elk-city':      { pop: 12000,  county: 'Beckham County',  driveOKC: 115, driveTulsa: 200, notable: 'Gateway city on I-40 in western Oklahoma; serves oil, gas, and wind energy sectors' },
  'el-reno':       { pop: 16000,  county: 'Canadian County', driveOKC: 30,  driveTulsa: 110, notable: 'Canadian County seat on I-40 with a large federal correctional complex' },
  'guthrie':       { pop: 11000,  county: 'Logan County',    driveOKC: 30,  driveTulsa: 100, notable: 'Oklahoma\'s original capital city with Victorian historic district; Logan County seat' },
  'guymon':        { pop: 11000,  county: 'Texas County',    driveOKC: 240, driveTulsa: 320, notable: 'Panhandle hub with major meatpacking industry (Seaboard Foods) and large Hispanic workforce' },
  'jenks':         { pop: 23000,  county: 'Tulsa County',    driveOKC: 110, driveTulsa: 12,  notable: 'Upscale Tulsa suburb with River Walk district and the Oklahoma Aquarium' },
  'kellyville':    { pop: 1200,   county: 'Creek County',    driveOKC: 65,  driveTulsa: 40,  notable: 'Small Creek County community on Route 66 between Sapulpa and Bristow' },
  'mcalester':     { pop: 17000,  county: 'Pittsburg County', driveOKC: 110, driveTulsa: 90, notable: 'Home to the Oklahoma State Penitentiary and McAlester Army Ammunition Plant' },
  'miami':         { pop: 13000,  county: 'Ottawa County',   driveOKC: 195, driveTulsa: 75,  notable: 'Ottawa County seat and home to Northeastern Oklahoma A&M College and tribal enterprises' },
  'midwest-city':  { pop: 57000,  county: 'Oklahoma County', driveOKC: 10,  driveTulsa: 110, notable: 'Established OKC suburb adjacent to Tinker Air Force Base (largest OKC-area employer)' },
  'moore':         { pop: 64000,  county: 'Cleveland County', driveOKC: 15, driveTulsa: 115, notable: 'Major Oklahoma City suburb; Cleveland County\'s residential hub south of I-240' },
  'muskogee':      { pop: 36000,  county: 'Muskogee County', driveOKC: 120, driveTulsa: 50, notable: 'Muskogee County seat with strong Cherokee and Muscogee Nation presence along US-69' },
  'mustang':       { pop: 23000,  county: 'Canadian County', driveOKC: 20,  driveTulsa: 115, notable: 'Growing Canadian County suburb southwest of Oklahoma City along Hwy 152' },
  'nowata':        { pop: 3600,   county: 'Nowata County',   driveOKC: 175, driveTulsa: 55,  notable: 'Small Nowata County seat in northeastern Oklahoma with oil patch history' },
  'oklahoma-city': { pop: 712000, county: 'Oklahoma County', driveOKC: 0,   driveTulsa: 105, notable: 'State capital, Oklahoma\'s largest city, and judicial hub for the 1st/7th Districts' },
  'okmulgee':      { pop: 12000,  county: 'Okmulgee County', driveOKC: 90,  driveTulsa: 40,  notable: 'Muscogee (Creek) Nation capital city; significant tribal court jurisdiction' },
  'pauls-valley':  { pop: 6000,   county: 'Garvin County',   driveOKC: 60,  driveTulsa: 150, notable: 'Garvin County seat on I-35 halfway between OKC and Ardmore' },
  'pawhuska':      { pop: 3500,   county: 'Osage County',    driveOKC: 140, driveTulsa: 55,  notable: 'Osage Nation capital; Osage County courthouse; site of the FECC oil headrights district' },
  'ponca-city':    { pop: 24000,  county: 'Kay County',      driveOKC: 100, driveTulsa: 95,  notable: 'Oil refinery city (ConocoPhillips legacy) and Ponca Tribe of Oklahoma hub' },
  'poteau':        { pop: 8500,   county: 'Le Flore County', driveOKC: 165, driveTulsa: 115, notable: 'Le Flore County seat near Arkansas border and Cavanal Hill; timber and tourism economy' },
  'pryor':         { pop: 9500,   county: 'Mayes County',    driveOKC: 150, driveTulsa: 45,  notable: 'Home to the MidAmerica Industrial Park (Oklahoma\'s largest industrial park)' },
  'sallisaw':      { pop: 8800,   county: 'Sequoyah County', driveOKC: 165, driveTulsa: 115, notable: 'Sequoyah County seat near Fort Smith, AR and the Cherokee Nation\'s eastern edge' },
  'sapulpa':       { pop: 21000,  county: 'Creek County',    driveOKC: 90,  driveTulsa: 15,  notable: 'Creek County seat on Route 66; Muscogee (Creek) Nation jurisdiction considerations' },
  'shawnee':       { pop: 31000,  county: 'Pottawatomie County', driveOKC: 40, driveTulsa: 100, notable: 'Pottawatomie County seat with Citizen Potawatomi Nation and Seminole Nation presence' },
  'skiatook':      { pop: 8000,   county: 'Osage County',    driveOKC: 130, driveTulsa: 25,  notable: 'Osage County bedroom community north of Tulsa with rapid residential growth' },
  'sulphur':       { pop: 5000,   county: 'Murray County',   driveOKC: 85,  driveTulsa: 140, notable: 'Gateway to Chickasaw National Recreation Area; Murray County seat' },
  'tahlequah':     { pop: 17000,  county: 'Cherokee County', driveOKC: 150, driveTulsa: 65,  notable: 'Cherokee Nation capital, home to Cherokee Nation headquarters and Northeastern State University' },
  'vinita':        { pop: 5500,   county: 'Craig County',    driveOKC: 175, driveTulsa: 60,  notable: 'Craig County seat at I-44 and I-69 junction; Will Rogers Turnpike corridor' },
  'wagoner':       { pop: 9000,   county: 'Wagoner County',  driveOKC: 120, driveTulsa: 35,  notable: 'Wagoner County seat on the Arkansas River; Muscogee Nation jurisdiction area' },
  'yukon':         { pop: 31000,  county: 'Canadian County', driveOKC: 20,  driveTulsa: 110, notable: 'Fast-growing Canadian County suburb west of OKC with strong commercial development' },
};

const TRIBAL_COUNTIES = ['cherokee','muskogee','wagoner','rogers','mayes','okmulgee','adair','sequoyah','delaware','pottawatomie','seminole','pontotoc','oklahoma','creek','osage'];

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function toTitleCase(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function toPascalCase(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/"/g, "'")
    .replace(/`/g, '')
    .replace(/\n/g, ' ')
    .trim();
}

function extractFrontmatter(content, key) {
  const match = content.match(new RegExp(`${key}:\\s*"([^"]+)"`));
  return match ? match[1] : '';
}

function extractFAQs(content) {
  const faqs = [];
  const faqSection = content.split('## ').find(s => s.startsWith('FAQ') || s.startsWith('Specific FAQ') || s.includes('-Specific FAQ'));
  if (!faqSection) return faqs;
  const qRegex = /### Q: ([^\n]+)\n([\s\S]+?)(?=### Q:|$)/g;
  let m;
  while ((m = qRegex.exec(faqSection)) !== null && faqs.length < 5) {
    faqs.push({ question: cleanText(m[1]), answer: cleanText(m[2]) });
  }
  return faqs;
}

function extractZones(content) {
  const zones = [];
  const whereSection = content.split(/## Where We Serve/i)[1]?.split(/## /)[0] || '';
  const zoneRegex = /### ([^\n]+)\n([\s\S]+?)(?=### |$)/g;
  let m;
  while ((m = zoneRegex.exec(whereSection)) !== null) {
    if (!m[1].startsWith('Q:')) {
      zones.push({ title: cleanText(m[1]), desc: cleanText(m[2]).slice(0, 300) });
    }
  }
  return zones;
}

function extractEmployers(content) {
  const employers = [];
  const empSection = content.split(/## Major Employers/i)[1]?.split(/## /)[0] || '';
  const rowRegex = /\|\s*\*\*([^*]+)\*\*\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|/g;
  let m;
  while ((m = rowRegex.exec(empSection)) !== null) {
    employers.push({
      name: cleanText(m[1]),
      address: cleanText(m[2]),
      industry: cleanText(m[3]),
      notes: cleanText(m[4]),
    });
  }
  return employers;
}

function buildPage(slug, isCounty, mdContent) {
  const name = isCounty ? toTitleCase(slug) : toTitleCase(slug);
  const pascalName = toPascalCase(slug) + (isCounty ? 'CountyPage' : 'ProcessServerPage');
  const countyKey = slug.replace('-county', '');

  // Merge Kimi data over static data
  const kimi = KIMI[slug] || null;
  const extra = isCounty ? COUNTY_DATA[countyKey] : CITY_DATA[slug];

  // Population: prefer Kimi
  const rawPop = kimi?.population || extra?.pop;
  const pop = rawPop ? Number(rawPop).toLocaleString() : null;

  const seat = isCounty && extra?.seat ? extra.seat : null;
  const majorCities = isCounty && extra?.majorCities ? extra.majorCities.join(', ') : null;
  const district = isCounty && extra?.district ? extra.district : null;
  const countyName = isCounty ? name : (kimi?.county ? `${kimi.county} County` : (CITY_DATA[slug]?.county || 'Oklahoma County'));
  const cityCounty = isCounty ? countyKey : countyKey;
  const isTribal = TRIBAL_COUNTIES.includes(cityCounty);
  const tribalNote = isTribal ? 'McGirt v. Oklahoma ruling and tribal jurisdiction may apply to criminal matters in this area. We coordinate with tribal courts and recommend confirming venue with your attorney.' : null;

  // Drive times: prefer Kimi
  const driveOKC = !isCounty ? (kimi?.drive_from_okc_min ? `${kimi.drive_from_okc_min} min from OKC` : (extra?.driveOKC ? `${extra.driveOKC} min from OKC` : null)) : null;
  const driveTulsa = !isCounty ? (kimi?.drive_from_tulsa_min ? `${kimi.drive_from_tulsa_min} min from Tulsa` : (extra?.driveTulsa ? `${extra.driveTulsa} min from Tulsa` : null)) : null;

  // Notable feature: prefer Kimi
  const notable = kimi?.notable_feature || extra?.notable || null;

  // Special considerations
  const specialNote = kimi?.special_considerations || null;

  // Courthouse from Kimi
  const kimiCH = kimi?.courthouse || null;
  const kimiMC = kimi?.municipal_court || null;

  const rawTitle = extractFrontmatter(mdContent, 'title');
  const rawDesc  = extractFrontmatter(mdContent, 'description');
  const titleSafe = (rawTitle || `Process Server ${name}, OK | Licensed Legal Document Service`).replace(/\s*\|\s*Just Legal Solutions$/, '').trim();
  const descSafe  = rawDesc  || `Licensed process server in ${name}, Oklahoma. GPS-tracked and court-ready. Call (539) 367-6832.`;

  // FAQs: prefer Kimi (price-stripped), fall back to markdown
  const faqs = kimi?.faqs?.length
    ? sanitizeFAQs(kimi.faqs)
    : sanitizeFAQs(extractFAQs(mdContent));

  // Zones/neighborhoods: prefer Kimi
  const zones = kimi?.neighborhoods?.length
    ? kimi.neighborhoods.map(n => ({ title: n.name, desc: n.description }))
    : extractZones(mdContent);

  // Employers: prefer Kimi
  const employers = kimi?.employers?.length
    ? kimi.employers.map(e => ({
        name: e.name,
        address: e.address || '',
        industry: e.industry || '',
        notes: e.service_notes || '',
      }))
    : extractEmployers(mdContent);

  const pageUrl  = isCounty ? `counties/${slug}` : `service-areas/${slug}`;
  const breadcrumbParent = isCounty ? '/counties' : '/service-areas';
  const breadcrumbLabel  = isCounty ? 'Counties' : 'Service Areas';
  const keywords = isCounty
    ? `process server ${name} Oklahoma, ${name} process server, serve papers ${name}, legal document service ${name}`
    : `process server ${name} OK, serve papers ${name} Oklahoma, legal document service ${name}, subpoena service ${name}`;

  // Courthouse: use Kimi data if available, else fall back to COUNTY_DATA
  const courthouse = kimiCH
    ? { name: kimiCH.name, address: kimiCH.address, phone: kimiCH.phone, hours: kimiCH.hours }
    : (isCounty && extra ? { name: `${name} Courthouse`, address: extra.address, phone: null, hours: 'Mon-Fri 8:00 AM - 4:30 PM' } : null);

  // Detect courthouse from Kimi for city pages too
  const cityCourtInfo = !isCounty && kimiCH ? {
    name: kimiCH.name,
    address: kimiCH.address,
    phone: kimiCH.phone,
    hours: kimiCH.hours,
  } : null;

  const municipalCourt = kimiMC ? {
    name: kimiMC.name,
    address: kimiMC.address,
    phone: kimiMC.phone,
  } : null;

  return `import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: '${titleSafe}',
  description: '${descSafe.replace(/'/g, "\\'")}',
  keywords: '${keywords}',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: '${titleSafe}',
    description: '${descSafe.replace(/'/g, "\\'")}',
    url: 'https://justlegalsolutions.org/${pageUrl}',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/${pageUrl}',
  },
};

const pageFAQs: { question: string; answer: string }[] = [
${faqs.map(f => `  { question: '${f.question.replace(/'/g,"\\'")}', answer: '${f.answer.replace(/'/g,"\\'")}' },`).join('\n')}
];

const employers: { name: string; address: string; industry: string; notes: string }[] = [
${employers.map(e => `  { name: '${e.name.replace(/'/g,"\\'")}', address: '${e.address.replace(/'/g,"\\'")}', industry: '${e.industry.replace(/'/g,"\\'")}', notes: '${e.notes.replace(/'/g,"\\'")}' },`).join('\n')}
];

export default function ${pascalName}() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <nav className="text-sm mb-6 text-blue-200" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="${breadcrumbParent}" className="hover:text-white transition-colors">${breadcrumbLabel}</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">${name}</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            Licensed Professional
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Process Server<br className="hidden md:block" /> ${name}, Oklahoma
          </h1>
          ${pop ? `<div className="flex flex-wrap gap-4 mb-4 text-blue-200 text-sm">
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> Population: ${pop}</span>
            ${seat ? `<span className="flex items-center gap-1"><Building className="h-4 w-4" /> County Seat: ${seat}</span>` : ''}
            ${driveOKC ? `<span>🚗 ${driveOKC}</span>` : ''}
            ${driveTulsa ? `<span>🚗 ${driveTulsa}</span>` : ''}
          </div>` : ''}
          ${notable ? `<p className="text-lg text-blue-100 mb-4 italic">${notable}.</p>` : ''}
          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            ${descSafe.replace(/'/g, "\\'")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5393676832" className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 px-8 rounded-xl text-center transition-all shadow-xl text-lg flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" /> Call (539) 367-6832
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2">
              <FileText className="h-5 w-5" /> Get a Free Quote
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-blue-200 text-sm">
            <span>✓ Standard Service</span>
            <span>✓ Rush Service</span>
            <span>✓ Same-Day Service</span>
            <span>✓ GPS-tracked every attempt</span>
            <span>✓ Notarized affidavit included</span>
            <Link href="/pricing" className="underline underline-offset-2 hover:text-white transition-colors">View Current Pricing →</Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-12 space-y-10">

        ${(courthouse || cityCourtInfo) ? `{/* Courthouse Info */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
            <h2 className="text-2xl font-bold mb-1">Courthouse &amp; Filing Information</h2>
            ${district ? `<p className="text-slate-300">Judicial District ${district} — ${name}</p>` : `<p className="text-slate-300">${name}, Oklahoma</p>`}
          </div>
          <div className="p-8 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="font-semibold text-lg text-gray-900">${(courthouse || cityCourtInfo).name}</p>
              <p className="text-gray-700">${(courthouse || cityCourtInfo).address}</p>
              ${(courthouse || cityCourtInfo).phone ? `<p className="text-gray-600 text-sm mt-1">📞 ${(courthouse || cityCourtInfo).phone}</p>` : ''}
              ${(courthouse || cityCourtInfo).hours ? `<p className="text-gray-500 text-xs mt-1">🕐 ${(courthouse || cityCourtInfo).hours}</p>` : ''}
              ${majorCities ? `<p className="text-gray-600 mt-2 text-sm">Serves: ${majorCities}</p>` : ''}
            </div>
            ${municipalCourt ? `<div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-800">Municipal Court</p>
              <p className="text-gray-700 text-sm">${municipalCourt.name}</p>
              <p className="text-gray-600 text-sm">${municipalCourt.address}</p>
              ${municipalCourt.phone ? `<p className="text-gray-600 text-sm">📞 ${municipalCourt.phone}</p>` : ''}
            </div>` : ''}
            ${isTribal ? `<div className="bg-amber-50 border border-amber-300 rounded-xl p-4">
              <p className="font-semibold text-amber-800">Tribal Jurisdiction Note</p>
              <p className="text-amber-700 text-sm">${tribalNote}</p>
            </div>` : ''}
            ${specialNote ? `<div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="font-semibold text-orange-800">Local Service Notes</p>
              <p className="text-orange-700 text-sm">${specialNote}</p>
            </div>` : ''}
          </div>
        </section>` : ''}

        ${zones.length > 0 ? `{/* Service Areas */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Where We Serve Papers in ${name}</h2>
            <p className="text-indigo-100">Local coverage across ${countyName}</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            ${zones.map((z, i) => `<div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">${z.title}</h3>
              <p className="text-gray-700 text-sm">${z.desc}</p>
            </div>`).join('\n            ')}
          </div>
        </section>` : ''}

        {employers.length > 0 && (
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Major Employers &amp; Workplace Service</h2>
            <p className="text-emerald-100">Serving businesses and employees in ${name}</p>
          </div>
          <div className="p-8 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-800 font-semibold">
                <tr>
                  <th className="px-4 py-3 text-left">Employer</th>
                  <th className="px-4 py-3 text-left">Address</th>
                  <th className="px-4 py-3 text-left">Industry</th>
                  <th className="px-4 py-3 text-left">Service Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {employers.map((emp, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                    <td className="px-4 py-3 font-medium">{emp.name}</td>
                    <td className="px-4 py-3 text-gray-600">{emp.address}</td>
                    <td className="px-4 py-3 text-gray-600">{emp.industry}</td>
                    <td className="px-4 py-3 text-gray-600">{emp.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        )}

        {/* Pricing */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><DollarSign className="h-6 w-6" /> Pricing for ${name}</h2>
            <p className="text-blue-100">Flat rates — no hidden mileage fees in ${countyName}</p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-200">
                <p className="font-bold text-gray-900 text-lg mb-1">Standard Service</p>
                <p className="text-sm text-gray-600">2–3 business days</p>
                <p className="text-xs text-gray-400 mt-2">3 attempts · GPS affidavit · Photo docs</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 text-center border border-blue-200">
                <p className="font-bold text-gray-900 text-lg mb-1">Rush Service</p>
                <p className="text-sm text-gray-600">Next business day</p>
                <p className="text-xs text-gray-400 mt-2">Priority scheduling · All features</p>
              </div>
              <div className="bg-red-50 rounded-xl p-5 text-center border border-red-200">
                <p className="font-bold text-gray-900 text-lg mb-1">Same-Day Service</p>
                <p className="text-sm text-gray-600">Call before noon</p>
                <p className="text-xs text-gray-400 mt-2">Immediate deployment · ${name} coverage</p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/pricing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow">
                <DollarSign className="h-4 w-4" /> View Current Rates &amp; Full Pricing
              </Link>
              <p className="text-xs text-gray-500 mt-3">All rates are flat — no hidden mileage fees in ${countyName}.</p>
            </div>
          </div>
        </section>

        {pageFAQs.length > 0 && (
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-1">${name} FAQ</h2>
            <p className="text-teal-100">Local process serving questions answered</p>
          </div>
          <div className="p-8 space-y-6">
            {pageFAQs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: {faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        )}

        {/* Emergency CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl shadow-lg">
          <div className="p-8 text-center">
            <AlertCircle className="h-14 w-14 mx-auto mb-5 text-red-200" />
            <h2 className="text-3xl font-bold mb-3">Emergency Process Service in ${name}?</h2>
            <p className="text-xl mb-6 text-red-100">Available 24/7 for urgent legal document service across ${countyName}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5393676832" className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" /> Emergency: (539) 367-6832
              </a>
              <Link href="/contact" className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" /> Schedule Service
              </Link>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6" /> ${name} Service Area Map</h2>
            <p className="text-blue-100">GPS-verified coverage throughout ${countyName}</p>
          </div>
          <div className="p-8">
            <GoogleMapsEmbed
              countyName="${countyName}"
              ${!isCounty ? `cityName="${name}"` : ''}
              state="Oklahoma"
              title="${name} Process Server Service Area"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-lg">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Serve Papers in ${name}?</h2>
            <p className="text-xl mb-6 text-blue-100">GPS-tracked, notarized, court-ready — in ${countyName}.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5393676832" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" /> Call (539) 367-6832
              </a>
              <Link href="/contact" className="bg-blue-900 hover:bg-blue-950 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
                <FileText className="h-5 w-5" /> Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        <div className="text-center py-4">
          <Link href="${breadcrumbParent}" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
            ← Browse All ${breadcrumbLabel}
          </Link>
        </div>

      </div>

      <UnifiedSchema
        pageType="location"
        url="https://justlegalsolutions.org/${pageUrl}"
        title="${titleSafe}"
        description="${descSafe.replace(/'/g, "\\'")}"
        faqItems={pageFAQs.slice(0, 4)}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: '${breadcrumbLabel}', item: 'https://justlegalsolutions.org${breadcrumbParent}' },
          { name: '${name}', item: 'https://justlegalsolutions.org/${pageUrl}' },
        ]}
      />
    </div>
  );
}
`;
}

function processDirectory(sourceDir, isCounty) {
  const PROTECTED = ['owasso','catoosa','glenpool','sand-springs','edmond','norman','enid','stillwater','lawton','tulsa-county-enhanced','creek-county'];
  const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.md'));
  let created = 0;

  files.forEach(file => {
    const rawSlug = file.replace('.md', '');
    if (PROTECTED.includes(rawSlug)) {
      console.log(`  SKIP (protected): ${rawSlug}`);
      return;
    }
    const content = fs.readFileSync(path.join(sourceDir, file), 'utf8');
    const tsx = buildPage(rawSlug, isCounty, content);
    const outDir = path.join(rootDir, 'app', isCounty ? 'counties' : 'service-areas', rawSlug);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'page.tsx'), tsx, 'utf8');
    created++;
    console.log(`  ✓ ${rawSlug}`);
  });
  return created;
}

// ─────────────────────────────────────────────────────────────────────────────
// KIMI-ONLY PASS: regenerate city pages that have Kimi data but no markdown
// source file (e.g. older generated pages with hardcoded prices).
// ─────────────────────────────────────────────────────────────────────────────
function processKimiOnly() {
  const PROTECTED = ['owasso','catoosa','glenpool','sand-springs','edmond','norman','enid','stillwater','lawton'];
  let created = 0;

  for (const slug of Object.keys(KIMI)) {
    if (KIMI[slug].type !== 'city') continue;
    if (PROTECTED.includes(slug)) continue;
    const mdPath = path.join(citiesDir, `${slug}.md`);
    if (fs.existsSync(mdPath)) continue; // already handled by processDirectory
    const tsx = buildPage(slug, false, ''); // empty md = use Kimi data only
    const outDir = path.join(rootDir, 'app', 'service-areas', slug);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'page.tsx'), tsx, 'utf8');
    created++;
    console.log(`  ✓ ${slug} (kimi-only)`);
  }
  return created;
}

console.log('\n📍 Generating city pages...');
const citiesCount = processDirectory(citiesDir, false);
console.log('\n🏛  Generating county pages...');

const countiesCount = processDirectory(countiesDir, true);
console.log('\n🔄 Kimi-only city pass (no markdown source)...');
const kimiOnlyCount = processKimiOnly();
console.log(`\n✅ Done! ${citiesCount} cities + ${countiesCount} counties + ${kimiOnlyCount} kimi-only = ${citiesCount + countiesCount + kimiOnlyCount} pages`);
