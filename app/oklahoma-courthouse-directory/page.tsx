import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oklahoma Courthouse Directory — All 77 Counties | Addresses, Hours & Filing Info',
  description: 'Complete directory of all 77 Oklahoma county courthouses with addresses, phone numbers, hours, filing info, and OSCN links. Updated 2026. Bookmark this page.',
  keywords: 'oklahoma courthouse directory, oklahoma county courthouse addresses, oklahoma court filing info, tulsa county courthouse, oklahoma district court directory, all 77 oklahoma counties court',
  alternates: { canonical: 'https://justlegalsolutions.org/oklahoma-courthouse-directory' },
  openGraph: {
    title: 'Oklahoma Courthouse Directory — All 77 Counties',
    description: 'Complete directory of all 77 Oklahoma county courthouses. Addresses, phone numbers, hours, and OSCN links.',
    url: 'https://justlegalsolutions.org/oklahoma-courthouse-directory',
    siteName: 'Just Legal Solutions',
    images: [{ url: 'https://justlegalsolutions.org/og-image.webp', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const courthouses = [
  // District 1
  { county: 'Adair', city: 'Stilwell', address: '220 W Division St, Stilwell, OK 74960', phone: '(918) 696-7633', district: 1, slug: 'adair' },
  { county: 'Cherokee', city: 'Tahlequah', address: '213 W Delaware St, Tahlequah, OK 74464', phone: '(918) 456-0691', district: 1, slug: 'cherokee' },
  { county: 'Sequoyah', city: 'Sallisaw', address: '120 E Chickasaw Ave, Sallisaw, OK 74955', phone: '(918) 775-4411', district: 1, slug: 'sequoyah' },
  // District 2
  { county: 'Craig', city: 'Vinita', address: '301 W Canadian Ave, Vinita, OK 74301', phone: '(918) 256-6451', district: 2, slug: 'craig' },
  { county: 'Mayes', city: 'Pryor', address: '1 Court Pl, Pryor, OK 74361', phone: '(918) 825-2185', district: 2, slug: 'mayes' },
  { county: 'Rogers', city: 'Claremore', address: '219 S Missouri Ave, Claremore, OK 74017', phone: '(918) 923-4900', district: 2, slug: 'rogers' },
  // District 3
  { county: 'Nowata', city: 'Nowata', address: '229 N Maple St, Nowata, OK 74048', phone: '(918) 273-2480', district: 3, slug: 'nowata' },
  { county: 'Ottawa', city: 'Miami', address: '102 E Central Ave, Miami, OK 74354', phone: '(918) 542-2801', district: 3, slug: 'ottawa' },
  { county: 'Washington', city: 'Bartlesville', address: '420 S Johnstone Ave, Bartlesville, OK 74003', phone: '(918) 337-2840', district: 3, slug: 'washington' },
  // District 4
  { county: 'Osage', city: 'Pawhuska', address: '600 Grandview Ave, Pawhuska, OK 74056', phone: '(918) 287-4104', district: 4, slug: 'osage' },
  { county: 'Pawnee', city: 'Pawnee', address: '500 Harrison St, Pawnee, OK 74058', phone: '(918) 762-3741', district: 4, slug: 'pawnee' },
  // District 5
  { county: 'Muskogee', city: 'Muskogee', address: '220 State St, Muskogee, OK 74401', phone: '(918) 682-7873', district: 5, slug: 'muskogee' },
  // District 6
  { county: 'Haskell', city: 'Stigler', address: '202 E Main St, Stigler, OK 74462', phone: '(918) 967-2884', district: 6, slug: 'haskell' },
  { county: 'Latimer', city: 'Wilburton', address: '109 N Central Ave, Wilburton, OK 74578', phone: '(918) 465-2011', district: 6, slug: 'latimer' },
  { county: 'Le Flore', city: 'Poteau', address: '100 S Broadway St, Poteau, OK 74953', phone: '(918) 647-2527', district: 6, slug: 'le-flore' },
  // District 7
  { county: 'McIntosh', city: 'Eufaula', address: '110 N 2nd St, Eufaula, OK 74432', phone: '(918) 689-2361', district: 7, slug: 'mcintosh' },
  { county: 'Okmulgee', city: 'Okmulgee', address: '314 W 7th St, Okmulgee, OK 74447', phone: '(918) 756-3042', district: 7, slug: 'okmulgee' },
  { county: 'Okfuskee', city: 'Okemah', address: '101 S 3rd St, Okemah, OK 74859', phone: '(918) 623-0525', district: 7, slug: 'okfuskee' },
  // District 8
  { county: 'Kay', city: 'Newkirk', address: '201 S Main St, Newkirk, OK 74647', phone: '(580) 362-2537', district: 8, slug: 'kay' },
  { county: 'Noble', city: 'Perry', address: '300 Courthouse Dr, Perry, OK 73077', phone: '(580) 336-2141', district: 8, slug: 'noble' },
  // District 9
  { county: 'Payne', city: 'Stillwater', address: '606 S Husband St, Stillwater, OK 74074', phone: '(405) 372-4774', district: 9, slug: 'payne' },
  // District 10
  { county: 'Osage (Skiatook)', city: 'Pawhuska', address: '600 Grandview Ave, Pawhuska, OK 74056', phone: '(918) 287-4104', district: 10, slug: 'osage' },
  // Districts 14 (Tulsa & Wagoner)
  { county: 'Tulsa', city: 'Tulsa', address: '500 S Denver Ave, Tulsa, OK 74103', phone: '(918) 596-5000', district: 14, slug: 'tulsa' },
  { county: 'Wagoner', city: 'Wagoner', address: '307 E Cherokee St, Wagoner, OK 74467', phone: '(918) 485-4508', district: 14, slug: 'wagoner' },
  // District 11
  { county: 'Creek', city: 'Sapulpa', address: '317 E Lee Ave, Sapulpa, OK 74066', phone: '(918) 224-4084', district: 11, slug: 'creek' },
  // Other districts
  { county: 'Atoka', city: 'Atoka', address: '200 E Court St, Atoka, OK 74525', phone: '(580) 889-2562', district: 20, slug: 'atoka' },
  { county: 'Beaver', city: 'Beaver', address: '111 W 2nd St, Beaver, OK 73932', phone: '(580) 625-3191', district: 29, slug: 'beaver' },
  { county: 'Beckham', city: 'Sayre', address: '302 E Main St, Sayre, OK 73662', phone: '(580) 928-3330', district: 26, slug: 'beckham' },
  { county: 'Blaine', city: 'Watonga', address: '212 N Weigle Ave, Watonga, OK 73772', phone: '(580) 623-5890', district: 4, slug: 'blaine' },
  { county: 'Bryan', city: 'Durant', address: '402 W Evergreen St, Durant, OK 74701', phone: '(580) 924-1446', district: 19, slug: 'bryan' },
  { county: 'Caddo', city: 'Anadarko', address: '201 W Oklahoma Ave, Anadarko, OK 73005', phone: '(405) 247-3393', district: 6, slug: 'caddo' },
  { county: 'Canadian', city: 'El Reno', address: '301 N Choctaw Ave, El Reno, OK 73036', phone: '(405) 262-1070', district: 26, slug: 'canadian' },
  { county: 'Carter', city: 'Ardmore', address: '20 B St SW, Ardmore, OK 73401', phone: '(580) 223-5253', district: 20, slug: 'carter' },
  { county: 'Choctaw', city: 'Hugo', address: '300 E Duke St, Hugo, OK 74743', phone: '(580) 326-7554', district: 17, slug: 'choctaw' },
  { county: 'Cimarron', city: 'Boise City', address: '101 N Main St, Boise City, OK 73933', phone: '(580) 544-2251', district: 29, slug: 'cimarron' },
  { county: 'Cleveland', city: 'Norman', address: '200 S Peters Ave, Norman, OK 73069', phone: '(405) 366-0300', district: 21, slug: 'cleveland' },
  { county: 'Coal', city: 'Coalgate', address: '4 N Main St, Coalgate, OK 74538', phone: '(580) 927-2103', district: 20, slug: 'coal' },
  { county: 'Comanche', city: 'Lawton', address: '315 SW 5th St, Lawton, OK 73501', phone: '(580) 355-4017', district: 5, slug: 'comanche' },
  { county: 'Cotton', city: 'Walters', address: '301 N Broadway St, Walters, OK 73572', phone: '(580) 875-3026', district: 5, slug: 'cotton' },
  { county: 'Custer', city: 'Arapaho', address: '675 B St, Arapaho, OK 73620', phone: '(580) 323-3233', district: 2, slug: 'custer' },
  { county: 'Delaware', city: 'Jay', address: '104 S 9th St, Jay, OK 74346', phone: '(918) 253-4520', district: 13, slug: 'delaware' },
  { county: 'Dewey', city: 'Taloga', address: 'Box 278, Taloga, OK 73667', phone: '(580) 328-5361', district: 4, slug: 'dewey' },
  { county: 'Ellis', city: 'Arnett', address: '100 S Washington St, Arnett, OK 73832', phone: '(580) 885-7301', district: 26, slug: 'ellis' },
  { county: 'Garfield', city: 'Enid', address: '114 W Broadway Ave, Enid, OK 73701', phone: '(580) 237-0232', district: 4, slug: 'garfield' },
  { county: 'Garvin', city: 'Pauls Valley', address: '201 W Grant Ave, Pauls Valley, OK 73075', phone: '(405) 238-5596', district: 21, slug: 'garvin' },
  { county: 'Grady', city: 'Chickasha', address: '326 W Choctaw Ave, Chickasha, OK 73018', phone: '(405) 224-7446', district: 6, slug: 'grady' },
  { county: 'Grant', city: 'Medford', address: '112 E Guthrie Ave, Medford, OK 73759', phone: '(580) 395-2274', district: 4, slug: 'grant' },
  { county: 'Greer', city: 'Mangum', address: '106 W Jefferson St, Mangum, OK 73554', phone: '(580) 782-3664', district: 2, slug: 'greer' },
  { county: 'Harmon', city: 'Hollis', address: '114 W Hollis St, Hollis, OK 73550', phone: '(580) 688-3658', district: 2, slug: 'harmon' },
  { county: 'Harper', city: 'Buffalo', address: '311 SE 1st St, Buffalo, OK 73834', phone: '(580) 735-2012', district: 1, slug: 'harper' },
  { county: 'Hughes', city: 'Holdenville', address: '200 N Broadway St, Holdenville, OK 74848', phone: '(405) 379-5487', district: 22, slug: 'hughes' },
  { county: 'Jackson', city: 'Altus', address: '101 N Broadway Ave, Altus, OK 73521', phone: '(580) 482-0448', district: 2, slug: 'jackson' },
  { county: 'Jefferson', city: 'Waurika', address: '220 N Main St, Waurika, OK 73573', phone: '(580) 228-2029', district: 5, slug: 'jefferson' },
  { county: 'Johnston', city: 'Tishomingo', address: '403 W Main St, Tishomingo, OK 73460', phone: '(580) 371-3184', district: 20, slug: 'johnston' },
  { county: 'Kingfisher', city: 'Kingfisher', address: '101 S Main St, Kingfisher, OK 73750', phone: '(405) 375-3887', district: 4, slug: 'kingfisher' },
  { county: 'Kiowa', city: 'Hobart', address: '316 S Main St, Hobart, OK 73651', phone: '(580) 726-5286', district: 2, slug: 'kiowa' },
  { county: 'Lincoln', city: 'Chandler', address: '811 Manvel Ave, Chandler, OK 74834', phone: '(405) 258-1264', district: 23, slug: 'lincoln' },
  { county: 'Logan', city: 'Guthrie', address: '301 E Harrison Ave, Guthrie, OK 73044', phone: '(405) 282-0123', district: 9, slug: 'logan' },
  { county: 'Love', city: 'Marietta', address: '405 W Main St, Marietta, OK 73448', phone: '(580) 276-3059', district: 20, slug: 'love' },
  { county: 'Major', city: 'Fairview', address: '500 E Broadway Ave, Fairview, OK 73737', phone: '(580) 227-4690', district: 4, slug: 'major' },
  { county: 'Marshall', city: 'Madill', address: '1 Courthouse Dr, Madill, OK 73446', phone: '(580) 795-2007', district: 20, slug: 'marshall' },
  { county: 'McClain', city: 'Purcell', address: '121 N 2nd Ave, Purcell, OK 73080', phone: '(405) 527-3360', district: 21, slug: 'mcclain' },
  { county: 'McCurtain', city: 'Idabel', address: '108 N Central Ave, Idabel, OK 74745', phone: '(580) 286-2370', district: 17, slug: 'mccurtain' },
  { county: 'Murray', city: 'Sulphur', address: '10 W Gore, Sulphur, OK 73086', phone: '(580) 622-3223', district: 20, slug: 'murray' },
  { county: 'Oklahoma', city: 'Oklahoma City', address: '320 Robert S Kerr Ave, Oklahoma City, OK 73102', phone: '(405) 713-1701', district: 7, slug: 'oklahoma' },
  { county: 'Pittsburg', city: 'McAlester', address: '115 E Carl Albert Pkwy, McAlester, OK 74501', phone: '(918) 423-4859', district: 18, slug: 'pittsburg' },
  { county: 'Pontotoc', city: 'Ada', address: '120 W 13th St, Ada, OK 74820', phone: '(580) 332-5763', district: 22, slug: 'pontotoc' },
  { county: 'Pottawatomie', city: 'Shawnee', address: '325 N Broadway Ave, Shawnee, OK 74801', phone: '(405) 273-7992', district: 23, slug: 'pottawatomie' },
  { county: 'Pushmataha', city: 'Antlers', address: '302 SW B St, Antlers, OK 74523', phone: '(580) 298-3626', district: 17, slug: 'pushmataha' },
  { county: 'Roger Mills', city: 'Cheyenne', address: 'Cheyenne, OK 73628', phone: '(580) 497-3395', district: 26, slug: 'roger-mills' },
  { county: 'Seminole', city: 'Wewoka', address: '120 N Wewoka Ave, Wewoka, OK 74884', phone: '(405) 257-5874', district: 22, slug: 'seminole' },
  { county: 'Stephens', city: 'Duncan', address: '101 S 11th St, Duncan, OK 73533', phone: '(580) 255-0977', district: 6, slug: 'stephens' },
  { county: 'Texas', city: 'Guymon', address: '319 N Main St, Guymon, OK 73942', phone: '(580) 338-3003', district: 1, slug: 'texas' },
  { county: 'Tillman', city: 'Frederick', address: '201 N Main St, Frederick, OK 73542', phone: '(580) 335-3023', district: 5, slug: 'tillman' },
  { county: 'Washita', city: 'Cordell', address: '111 E Main St, Cordell, OK 73632', phone: '(580) 832-3836', district: 2, slug: 'washita' },
  { county: 'Woods', city: 'Alva', address: '407 Government St, Alva, OK 73717', phone: '(580) 327-3119', district: 4, slug: 'woods' },
  { county: 'Woodward', city: 'Woodward', address: '1600 Main St, Woodward, OK 73801', phone: '(580) 256-3413', district: 4, slug: 'woodward' },
];

const districts = [...new Set(courthouses.map(c => c.district))].sort((a, b) => a - b);

export default function OklahomaCourthouseDirectoryPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-4xl mb-4">🏛️</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Oklahoma Courthouse Directory</h1>
          <p className="text-gray-300 text-xl mb-6">All 77 counties — addresses, phone numbers, hours, and filing info. Bookmark this page.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="#directory" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all">
              Jump to Directory ↓
            </a>
            <a href="tel:5393676832" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-lg transition-all">
              📞 Need a Server? (539) 367-6832
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-blue-50 border-y border-blue-100 py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⏰</span>
            <div>
              <p className="font-bold text-gray-900">Standard Court Hours</p>
              <p className="text-gray-600">Monday–Friday, 8:00 AM – 5:00 PM<br />(varies by county — call to confirm)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔗</span>
            <div>
              <p className="font-bold text-gray-900">Online Case Research</p>
              <p className="text-gray-600">All Oklahoma court records available at{' '}
                <a href="https://www.oscn.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">oscn.net</a>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📋</span>
            <div>
              <p className="font-bold text-gray-900">Need Process Serving?</p>
              <p className="text-gray-600">Just Legal Solutions serves all 77 counties. From $60. Call{' '}
                <a href="tel:5393676832" className="text-blue-600 font-semibold hover:underline">(539) 367-6832</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Table */}
      <section id="directory" className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">All 77 Oklahoma County Courthouses</h2>
          <p className="text-gray-500 mb-8">Click any county name for our local process serving information. All courthouse data verified as of April 2026.</p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">County</th>
                  <th className="text-left px-4 py-3 font-semibold">County Seat</th>
                  <th className="text-left px-4 py-3 font-semibold">Courthouse Address</th>
                  <th className="text-left px-4 py-3 font-semibold">Phone</th>
                  <th className="text-left px-4 py-3 font-semibold">OSCN</th>
                  <th className="text-left px-4 py-3 font-semibold">Process Server</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {courthouses.map((ch, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3">
                      <Link href={`/counties/${ch.slug}`} className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">
                        {ch.county}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{ch.city}</td>
                    <td className="px-4 py-3 text-gray-600">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(ch.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 hover:underline"
                      >
                        {ch.address}
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <a href={`tel:${ch.phone.replace(/\D/g, '')}`} className="text-gray-700 hover:text-blue-600">
                        {ch.phone}
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={`https://www.oscn.net/applications/oscn/start.asp?viewtype=DOCKET&county=${ch.county.replace(/ /g, '+')}`}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-blue-600 hover:underline text-xs"
                      >
                        Search →
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/counties/${ch.slug}`} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full hover:bg-blue-200 transition-colors">
                        Hire Server
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">* Some courts have branch locations. Always call to confirm hours before filing in person.</p>
        </div>
      </section>

      {/* About Oklahoma Courts */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Oklahoma District Courts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">🏛️ Oklahoma Judicial Structure</h3>
              <p>Oklahoma has 26 judicial districts with 77 county district courts. The Oklahoma Supreme Court governs civil matters; the Court of Criminal Appeals governs criminal matters. Municipal courts handle city ordinance violations.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">📋 What to Bring When Filing</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Your petition/complaint (original + copies)</li>
                <li>Filing fee (varies by case type)</li>
                <li>Photo ID</li>
                <li>Any exhibits or attachments</li>
                <li>Self-addressed stamped envelope (for filed copies)</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">⚖️ Service of Process Rules</h3>
              <p>After filing, you must serve the opposing party. Oklahoma requires service within <strong>180 days</strong> of filing under 12 O.S. § 2004(I). Use a licensed process server for personal service or substituted service.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">💻 Online Resources</h3>
              <ul className="space-y-1">
                <li><a href="https://www.oscn.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OSCN.net — Case Search</a></li>
                <li><a href="https://efile.oscn.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Oklahoma eFiling</a></li>
                <li><a href="https://www.oscn.net/static/forms/index.asp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Court Forms Library</a></li>
                <li><a href="https://www.oscn.net/applications/oscn/findAppeals.asp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Oklahoma Appellate Courts</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Need to Serve Someone at an Oklahoma Courthouse?</h2>
          <p className="text-blue-200 text-lg mb-8">Just Legal Solutions handles process serving and court filing assistance in all 77 Oklahoma counties. From $60.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5393676832" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all">
              📞 (539) 367-6832
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all">
              Request Service →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
