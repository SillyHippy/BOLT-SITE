import { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone, MapPin, Clock, Shield, CheckCircle, Star,
  Building2, ChevronRight, ExternalLink, DollarSign,
  Users, FileText, Scale, Navigation, Briefcase, HelpCircle,
} from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';
import {
  getLocationSlugs,
  getLocationContent,
  extractTitle,
  extractDescription,
  extractFAQs,
  slugToLocationName,
} from '@/lib/markdown-utils';

/* ── Structured data extracted from markdown ── */

interface CourthouseInfo {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapsQuery: string;
  oscnSlug?: string;
}

interface EmployerInfo {
  name: string;
  address: string;
  industry: string;
  notes: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface AdjacentCity {
  name: string;
  slug: string;
  distance: string;
}

interface LocationData {
  title: string;
  description: string;
  intro: string;
  locationName: string;
  countyName: string;
  regionLabel: string;
  courthouse: CourthouseInfo;
  additionalCourts: { label: string; address: string; phone: string }[];
  parking: string[];

  distances: { destination: string; driveTime: string; turnaround: string }[];
  employers: EmployerInfo[];
  neighborhoods: string[];
  faqs: FAQ[];
  adjacentCities: AdjacentCity[];
  serviceTips: string[];
  aboutText: string;
  population: string;
}

/* ── Parse helpers ── */

function parseSection(content: string, heading: string): string {
  const esc = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`##\\s+${esc}[^\\n]*\\n([\\s\\S]*?)(?=\\n##\\s|$)`, 'i');
  const m = content.match(re);
  return m ? m[1].trim() : '';
}

function parseTableRows(section: string): string[][] {
  const rows: string[][] = [];
  for (const line of section.split('\n')) {
    if (/^\|[\s-|]+\|$/.test(line.trim())) continue;
    const m = line.match(/^\|(.+)\|$/);
    if (m) {
      const cells = m[1].split('|').map(c => c.replace(/\*\*/g, '').trim());
      rows.push(cells);
    }
  }
  return rows.slice(1); // skip header
}

function parseBullets(section: string): string[] {
  return section
    .split('\n')
    .filter(l => /^[-*]\s+/.test(l.trim()))
    .map(l => l.replace(/^[-*]\s+/, '').replace(/\*\*/g, '').trim());
}

function extractField(section: string, field: string): string {
  const re = new RegExp(`\\*\\*${field}:?\\*\\*\\s*(.+)`, 'i');
  const m = section.match(re);
  return m ? m[1].trim() : '';
}

function parseLocationData(content: string, slug: string): LocationData {
  const locationName = slugToLocationName(slug);
  const title = extractTitle(content) || `Process Server ${locationName} Oklahoma`;
  const description = extractDescription(content) ||
    `Licensed process server in ${locationName}, Oklahoma. Same-day service, GPS tracking, and court-ready documentation.`;

  // Intro paragraph
  const introMatch = content.match(/^#[^\n]+\n+(.+?)(?=\n\n|---)/s);
  const intro = introMatch ? introMatch[1].replace(/\*\*/g, '').trim() : description;

  // County name from title
  const countyMatch = content.match(/\|\s*([A-Za-z]+\s+County)/i);
  const countyName = countyMatch ? countyMatch[1] : `${locationName} County`;

  // Courthouse info
  const courthouseSection = parseSection(content, '.*Courthouse Information') || parseSection(content, 'Courthouse Information');
  const courthouseAddress = extractField(courthouseSection, 'Address');
  const courthousePhone = extractField(courthouseSection, 'Phone');
  const courthouseHours = extractField(courthouseSection, 'Hours');

  // Find courthouse name from ### heading
  const courthouseNameMatch = courthouseSection.match(/###\s+(.+?County Courthouse)/i);
  const courthouseName = courthouseNameMatch ? courthouseNameMatch[1].replace(/\*\*/g, '') : `${countyName} Courthouse`;

  // OSCN slug
  const oscnSlug = countyName.toLowerCase().replace(/\s+county$/, '').replace(/\s+/g, '');

  // Additional courts
  const additionalCourts: { label: string; address: string; phone: string }[] = [];
  const courtMatches = courthouseSection.matchAll(/###\s+((?:Municipal|Federal|District|Alternative).+?)\n([\s\S]*?)(?=###|\n---|\n##|$)/gi);
  for (const cm of courtMatches) {
    const label = cm[1].replace(/\*\*/g, '').trim();
    const block = cm[2];
    const addr = extractField(block, 'Address');
    const ph = extractField(block, 'Phone');
    if (addr || ph) additionalCourts.push({ label, address: addr, phone: ph });
  }

  // Parking
  const parkingSection = courthouseSection.match(/### Parking[\s\S]*?(?=###|$)/i);
  const parking = parkingSection ? parseBullets(parkingSection[0]) : [];

  // Contact table (for region label)
  const contactSection = parseSection(content, 'Contact Information');
  const contactRows = parseTableRows(contactSection);

  // Region label
  const regionMatch = contactRows.find(r => /service area/i.test(r[0]));
  const regionLabel = regionMatch ? regionMatch[1] : `${locationName} and surrounding areas`;

  // Distances
  const distSection = parseSection(content, 'Distance from Tulsa');
  const distRows = parseTableRows(distSection);
  const distances = distRows.map(r => ({
    destination: r[0] || '',
    driveTime: r[1] || '',
    turnaround: r[2] || '',
  }));

  // Employers
  const empSection = parseSection(content, 'Major Employers');
  const empRows = parseTableRows(empSection);
  const employers = empRows.map(r => ({
    name: r[0] || '',
    address: r[1] || '',
    industry: r[2] || '',
    notes: r[3] || '',
  }));

  // Neighborhoods
  const neighborhoodSection = parseSection(content, 'Local Landmarks');
  const neighborhoods = parseBullets(neighborhoodSection);

  // FAQs
  const faqs = extractFAQs(content);

  // Adjacent cities
  const adjSection = parseSection(content, 'Adjacent Cities');
  const adjacentCities: AdjacentCity[] = [];
  const adjMatches = adjSection.matchAll(/\[(.+?)\]\(\/(?:seo-content\/locations|service-areas)\/(.+?)(?:\.md)?\)\s*-\s*(.+)/g);
  for (const am of adjMatches) {
    adjacentCities.push({ name: am[1], slug: am[2], distance: am[3].trim() });
  }

  // Service tips
  const tipsSection = parseSection(content, 'Local Service Tips');
  const serviceTips = parseBullets(tipsSection);

  // About text
  const aboutSection = parseSection(content, 'About');
  const aboutText = aboutSection.split('\n').filter(l => l.trim() && !l.startsWith('#') && !l.startsWith('-') && !l.startsWith('*Just Legal')).join(' ').replace(/\*\*/g, '').trim();

  // Population
  const popMatch = content.match(/Population:\s*~?([\d,]+)/i);
  const population = popMatch ? popMatch[1] : '';

  return {
    title, description, intro, locationName, countyName, regionLabel,
    courthouse: {
      name: courthouseName,
      address: courthouseAddress,
      phone: courthousePhone,
      hours: courthouseHours,
      mapsQuery: courthouseAddress,
      oscnSlug,
    },
    additionalCourts,
    parking,

    distances,
    employers,
    neighborhoods,
    faqs,
    adjacentCities,
    serviceTips,
    aboutText,
    population,
  };
}


export function generateStaticParams(): { slug: string }[] {
  return getLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getLocationContent(slug);
  const locationName = slugToLocationName(slug);
  const rawTitle = extractTitle(content);
  // CTR-optimized title — pricing in metadata, not in FAQs
  const fullTitle = `Process Server ${locationName}, OK | From $60 | Same-Day Available`;
  const title = fullTitle.length > 60
    ? `${locationName} Process Server OK | $60+`
    : fullTitle;
  const description =
    `Licensed process server in ${locationName}, OK. Standard service from $60, rush & same-day available. GPS-tracked, court-ready affidavits. Call (539) 367-6832.`;

  return {
    title,
    description,
    authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
    openGraph: {
      title,
      description,
      url: `https://justlegalsolutions.org/service-areas/${slug}`,
      siteName: 'Just Legal Solutions',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://justlegalsolutions.org/og-image.webp',
          width: 1200,
          height: 630,
          alt: `Just Legal Solutions - Process Server ${locationName} Oklahoma`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://justlegalsolutions.org/og-image.webp'],
    },
    alternates: {
      canonical: `https://justlegalsolutions.org/service-areas/${slug}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getLocationContent(slug);
  const data = parseLocationData(content, slug);
  const {
    title, description, locationName, countyName, intro,
    courthouse, additionalCourts, parking, distances,
    employers, neighborhoods, faqs, adjacentCities, serviceTips,
    aboutText, population, regionLabel,
  } = data;

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
    { name: locationName, url: `/service-areas/${slug}` },
  ];

  return (
    <>
      <UnifiedSchema
        pageType="location"
        pageTitle={title}
        pageDescription={description}
        pageUrl={`https://justlegalsolutions.org/service-areas/${slug}`}
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={[
          'Process Serving',
          'Legal Document Delivery',
          'Skip Tracing',
          'Courthouse Filing',
          'Mobile Notary',
        ]}
        breadcrumbs={breadcrumbItems}
        faqItems={faqs}
        location={{
          name: locationName,
          state: 'Oklahoma',
          region: locationName,
        }}
        keywords={[
          `process server ${locationName}`,
          `${locationName} process serving`,
          `serve papers ${locationName} Oklahoma`,
          'Oklahoma process server',
        ]}
      />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* ── Hero Section ── */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-28 pb-20 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-blue-200">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><ChevronRight className="w-3 h-3" /></li>
                <li><Link href="/service-areas" className="hover:text-white transition">Service Areas</Link></li>
                <li><ChevronRight className="w-3 h-3" /></li>
                <li className="text-yellow-400 font-medium">{locationName}</li>
              </ol>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span>{countyName} &bull; Oklahoma</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Process Server in{' '}
              <span className="text-yellow-400">{locationName}</span>,{' '}
              Oklahoma
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mb-8">{intro}</p>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">2–3 Days</div>
                <div className="text-sm text-blue-200">Standard Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">Next Day</div>
                <div className="text-sm text-blue-200">Rush Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">Today</div>
                <div className="text-sm text-blue-200">Same-Day</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">GPS</div>
                <div className="text-sm text-blue-200">Tracked Service</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:5393676832"
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3.5 rounded-xl shadow-lg transition"
              >
                <Phone className="w-5 h-5" />
                (539) 367-6832
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-3.5 rounded-xl transition"
              >
                <FileText className="w-5 h-5" />
                Request Service Online
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              {['Licensed & Bonded', 'GPS Tracking', 'Court-Ready Docs', 'Same-Day Available'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-green-500/20 border border-green-400/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-100">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Area Overview ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why Choose Just Legal Solutions in {locationName}?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our network of professional process servers covers all of {regionLabel} with reliable, legally compliant service.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed &amp; Bonded</h3>
                <p className="text-gray-600">Licensed licensed through the state of Oklahoma. Full compliance with Title 12 O.S. rules of civil procedure.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Navigation className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">GPS-Tracked Proof</h3>
                <p className="text-gray-600">Every service attempt is GPS-timestamped. Affidavits stand up in court with precise location and time documentation.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Available</h3>
                <p className="text-gray-600">Urgent deadlines? Same-day and rush service options available throughout {locationName} and {countyName}.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Courthouse Information ── */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" />
                Courthouse Information
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {courthouse.name}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Courthouse card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    {courthouse.name}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {courthouse.address && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">{courthouse.address}</p>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(courthouse.mapsQuery)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mt-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Open in Google Maps
                        </a>
                      </div>
                    </div>
                  )}
                  {courthouse.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">{courthouse.phone}</p>
                        <p className="text-sm text-gray-500">Court Clerk</p>
                      </div>
                    </div>
                  )}
                  {courthouse.hours && (
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <p className="text-gray-700">{courthouse.hours}</p>
                    </div>
                  )}
                  <div className="pt-3 border-t border-gray-100">
                    <a
                      href={`https://www.oscn.net/courts/counties/${courthouse.oscnSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium px-4 py-2 rounded-lg text-sm transition"
                    >
                      <Scale className="w-4 h-4" />
                      View Court Records on OSCN
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional courts + parking */}
              <div className="space-y-6">
                {additionalCourts.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Scale className="w-5 h-5 text-blue-600" />
                      Additional Courts
                    </h3>
                    <div className="space-y-4">
                      {additionalCourts.map((court, i) => (
                        <div key={i} className="bg-slate-50 rounded-lg p-4">
                          <p className="font-semibold text-slate-900">{court.label}</p>
                          {court.address && (
                            <div className="flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3 text-gray-400" />
                              <p className="text-sm text-gray-600">{court.address}</p>
                            </div>
                          )}
                          {court.phone && (
                            <div className="flex items-center gap-1 mt-1">
                              <Phone className="w-3 h-3 text-gray-400" />
                              <p className="text-sm text-gray-600">{court.phone}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {parking.length > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <Navigation className="w-5 h-5" />
                      Parking Information
                    </h3>
                    <ul className="space-y-2">
                      {parking.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-blue-800">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing Section ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <DollarSign className="w-4 h-4" />
                Transparent Pricing
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Process Serving Rates for {locationName}
              </h2>
              <p className="text-gray-600">Flat-rate pricing. No hidden fees, no mileage charges.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Standard Service</h3>
                <p className="text-sm text-gray-500 mb-4">2–3 business days</p>
                <p className="text-xs text-gray-400 mt-2">3 attempts · GPS affidavit · Photo docs</p>
              </div>
              <div className="bg-white rounded-2xl border-2 border-blue-300 shadow-lg p-8 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Rush Service</h3>
                <p className="text-sm text-gray-500 mb-4">Next business day</p>
                <p className="text-xs text-gray-400 mt-2">Priority scheduling · All features</p>
              </div>
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-red-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Same-Day Service</h3>
                <p className="text-sm text-gray-500 mb-4">Call before noon</p>
                <p className="text-xs text-gray-400 mt-2">Immediate deployment · {locationName} coverage</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/pricing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow">
                <DollarSign className="w-4 h-4" /> View Current Rates &amp; Full Pricing
              </Link>
              <p className="text-xs text-gray-500 mt-3">All rates are flat — no hidden mileage fees.</p>
            </div>
          </div>
        </section>

        {/* ── Drive Times & Turnaround ── */}
        {distances.length > 0 && (
          <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
                Service Coverage &amp; Turnaround Times
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {distances.map((d, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
                    <h3 className="font-bold text-slate-900 mb-3">{d.destination}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Navigation className="w-4 h-4 text-blue-500" />
                        <span>{d.driveTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-500" />
                        <span className="font-semibold text-green-700">{d.turnaround}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Major Employers ── */}
        {employers.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Briefcase className="w-4 h-4" />
                  Workplace Service
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Major Employers in {locationName}
                </h2>
                <p className="text-gray-600">We serve papers at all major workplaces in the {locationName} area.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {employers.slice(0, 9).map((emp, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-slate-900">{emp.name}</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full whitespace-nowrap ml-2">{emp.industry}</span>
                    </div>
                    {emp.address && (
                      <p className="text-sm text-gray-500 flex items-center gap-1 mb-1">
                        <MapPin className="w-3 h-3" />
                        {emp.address}
                      </p>
                    )}
                    {emp.notes && (
                      <p className="text-sm text-gray-600 mt-2">
                        <span className="font-medium">Service tip:</span> {emp.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Google Maps ── */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
              {locationName} Service Area Map
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <GoogleMapsEmbed
                countyName={countyName}
                cityName={locationName}
                state="Oklahoma"
                title={`${locationName}, Oklahoma - Process Server Service Area`}
              />
            </div>
          </div>
        </section>

        {/* ── Local Neighborhoods ── */}
        {neighborhoods.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
                Neighborhoods &amp; Landmarks We Serve
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {neighborhoods.map((n, i) => (
                  <span key={i} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm border border-slate-200">
                    {n.replace(/^[-*]\s*/, '')}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FAQs ── */}
        {faqs.length > 0 && (
          <section className="py-16 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <HelpCircle className="w-4 h-4" />
                  FAQ
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Frequently Asked Questions — {locationName}
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                      <ChevronRight className="w-5 h-5 text-blue-600 transition-transform group-open:rotate-90 flex-shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 text-slate-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Adjacent Cities ── */}
        {adjacentCities.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Users className="w-4 h-4" />
                  Nearby Service Areas
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  We Also Serve These Cities
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {adjacentCities.map((city, i) => (
                  <Link
                    key={i}
                    href={`/service-areas/${city.slug}`}
                    className="group bg-slate-50 rounded-xl border border-slate-200 p-5 text-center hover:border-blue-300 hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition">{city.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{city.distance}</p>
                  </Link>
                ))}
              </div>

              {/* Internal links to key pages */}
              <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-blue-900 mb-4 text-center">More Resources</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/service-areas" className="inline-flex items-center gap-1 bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200 hover:bg-blue-100 transition">
                    <MapPin className="w-3 h-3" /> All Service Areas
                  </Link>
                  <Link href="/oklahoma-process-server-laws" className="inline-flex items-center gap-1 bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200 hover:bg-blue-100 transition">
                    <Scale className="w-3 h-3" /> OK Process Server Laws
                  </Link>
                  <Link href="/oklahoma-process-server-pricing" className="inline-flex items-center gap-1 bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200 hover:bg-blue-100 transition">
                    <DollarSign className="w-3 h-3" /> Pricing Guide
                  </Link>
                  <Link href="/process-serving" className="inline-flex items-center gap-1 bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200 hover:bg-blue-100 transition">
                    <Shield className="w-3 h-3" /> Process Serving
                  </Link>
                  <Link href="/process-serving" className="inline-flex items-center gap-1 bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200 hover:bg-blue-100 transition">
                    <Shield className="w-3 h-3" /> Process Serving
                  </Link>
                  <Link href="/how-long-does-process-serving-take" className="inline-flex items-center gap-1 bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200 hover:bg-blue-100 transition">
                    <Clock className="w-3 h-3" /> How Long Does It Take?
                  </Link>
                  <Link href="/notary" className="inline-flex items-center gap-1 bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200 hover:bg-blue-100 transition">
                    <FileText className="w-3 h-3" /> Notary Services
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── About the City ── */}
        {aboutText && (
          <section className="py-16 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">
                About {locationName}, Oklahoma
              </h2>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <p className="text-gray-700 leading-relaxed text-lg">{aboutText}</p>
                {population && (
                  <div className="mt-6 flex items-center gap-3">
                    <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                      Population: ~{population}
                    </div>
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                      {countyName}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── Final CTA ── */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Process Server in {locationName}?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Licensed, bonded, &amp; GPS-tracked. Same-day service available throughout {countyName}. Call now or submit your documents online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5393676832"
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl shadow-lg text-lg transition"
              >
                <Phone className="w-5 h-5" />
                (539) 367-6832
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                <FileText className="w-5 h-5" />
                Submit Documents
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Serving all of {regionLabel} &bull; Available 7 days a week
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
