import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/ui/json-ld';
import UnifiedSchema from '@/components/UnifiedSchema';
import LocalPromoBanner from '@/components/ui/local-promo-banner';
import {
  Heart,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Star,
  CheckCircle,
  BookOpen,
  Sparkles,
  Shield,
  Feather,
  BadgeCheck
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/wedding-officiant';

export const metadata: Metadata = {
  title: 'Wedding Officiant Tulsa Oklahoma | Ordained Minister Since 2017',
  description:
    'Professional wedding officiant services in Oklahoma. Ordained minister since 2017 serving Tulsa County and beyond. Personalized ceremonies for your special day.',
  openGraph: {
    title: 'Wedding Officiant Tulsa Oklahoma | Ordained Minister Since 2017',
    description:
      'Professional wedding officiant services in Oklahoma. Ordained minister since 2017 serving Tulsa County and beyond. Call (539) 367-6832.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/wedding-officiant-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Oklahoma Wedding Officiant'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Officiant Tulsa Oklahoma | Ordained Minister Since 2017',
    description:
      'Professional wedding officiant services in Oklahoma. Ordained minister since 2017 serving Tulsa County and beyond. Call (539) 367-6832.',
    images: ['https://justlegalsolutions.org/images/wedding-officiant-og.jpg']
  },
  alternates: {
    canonical: canonicalUrl
  },
  other: {
    'ai-content-type': 'service',
    'ai-summary': 'Professional wedding officiant services in Tulsa and across Oklahoma. Ordained minister since 2017 offering personalized ceremonies, elopements, and vow renewals.',
    'ai-key-facts': 'Ordained minister since 2017; serving all 77 Oklahoma counties; personalized ceremonies; 43 O.S. § 7 authorized; marriage license valid 30 days per 43 O.S. § 20',
  }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://justlegalsolutions.org/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Wedding Officiant',
      item: canonicalUrl
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Just Legal Solutions - Wedding Officiant Services',
  image:
    'https://www.themonastery.org/credentials/ordination-certificate-Sm9zZXBoIFcgSWFubmF6emleNC8zMC8yMDE3XmxhcmdlXmZyZWVe.jpg',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  url: canonicalUrl,
  areaServed: [
    { '@type': 'City', name: 'Tulsa' },
    { '@type': 'County', name: 'Creek County' },
    { '@type': 'County', name: 'Wagoner County' },
    { '@type': 'County', name: 'Osage County' },
    { '@type': 'State', name: 'Oklahoma' }
  ],
  description:
    'Professional wedding officiant and notary providing courthouse ceremonies, elopements, intimate weddings, and vow renewals across Oklahoma. Ordained via The Monastery (Universal Life Church) on April 30, 2017.',
  founder: {
    '@type': 'Person',
    name: 'Joseph W. Iannazzi',
    jobTitle: 'Wedding Officiant & Notary'
  },
  sameAs: ['https://www.themonastery.org/'],
  serviceArea: {
    '@type': 'State',
    name: 'Oklahoma'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00'
    }
  ]
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Oklahoma Wedding Officiant & Marriage Services',
  provider: {
    '@type': 'Organization',
    name: 'Just Legal Solutions'
  },
  providerMobility: 'dynamic',
  areaServed: {
    '@type': 'State',
    name: 'Oklahoma'
  },
  serviceType: [
    'Courthouse Ceremony Officiant',
    'Elopement Officiant',
    'Intimate Wedding Officiant',
    'Vow Renewal Facilitator'
  ],
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: 'Customized ceremony packages at affordable rates. Contact for quote.'
    }
  }
};

const testimonialData = [
  {
    quote:
      'Joseph created a heartfelt ceremony that was equal parts joyful and reverent. He kept everything on schedule and even helped us rehearse our vows.',
    name: 'Kelsey & Aaron — Tulsa Courthouse Ceremony'
  },
  {
    quote:
      'We planned a sunrise elopement at Turkey Mountain with less than a week of notice. Joseph delivered a meaningful script and handled all the paperwork seamlessly.',
    name: 'Maya & Elliott — Tulsa Elopement'
  },
  {
    quote:
      'Our vow renewal felt more special than our original wedding thanks to Joseph’s guidance and attention to detail. He coordinated with our photographer and kept things relaxed.',
    name: 'Danielle & Marcus — 10-Year Vow Renewal'
  }
];

const faqs = [
  {
    question: 'Is Joseph W. Iannazzi legally authorized to officiate weddings in Oklahoma?',
    answer:
      'Yes. Joseph was ordained on April 30, 2017 through The Monastery (Universal Life Church). He complies with Oklahoma marriage laws and files completed licenses promptly.'
  },
  {
    question: 'Do we need to obtain our marriage license before the ceremony?',
    answer:
      'Couples must secure an Oklahoma marriage license from the county court clerk before the ceremony. Joseph can guide you on required identification and waiting periods.'
  },
  {
    question: 'What types of ceremonies are available?',
    answer:
      'Courthouse-style civil ceremonies, elopements, small intimate celebrations, and vow renewals. Each option can be customized with readings, unity rituals, and cultural elements.'
  },
  {
    question: 'Can the officiant travel outside Tulsa?',
    answer:
      'Yes. Regular coverage includes Tulsa, Creek, Wagoner, and Osage counties, and statewide travel across Oklahoma is available with advance notice.'
  },
  {
    question: 'Is pricing listed online?',
    answer:
      'We quote affordable rates based on travel distance, ceremony style, and rehearsal needs. Contact Just Legal Solutions at (539) 367-6832 for a personalized estimate.'
  },
  {
    question: 'Can Joseph notarize our marriage-related documents?',
    answer:
      'Yes. As an Oklahoma notary, Joseph can notarize name change affidavits, prenuptial acknowledgments, or other documents related to your ceremony.'
  },
  {
    question: 'How long is an Oklahoma marriage license valid?',
    answer:
      "Under 43 O.S. § 20, an Oklahoma marriage license is valid for thirty (30) days from the date of issuance. If the ceremony is not performed within this window, you must apply for a new license."
  },
  {
    question: 'Who can legally perform marriages in Oklahoma?',
    answer:
      "Under 43 O.S. § 7, marriages may be solemnized by ordained ministers, judges, justices of the peace, and rabbis. The officiant must be at least 18 years old. Two witnesses are required."
  },
  {
    question: 'Do I need to be an Oklahoma resident to get married here?',
    answer:
      "No. Oklahoma has no residency requirement for marriage. Couples from any state or country may obtain a marriage license and marry in Oklahoma."
  },
  {
    question: 'What is the minimum age to marry in Oklahoma?',
    answer:
      "Under 43 O.S. § 3, persons 18 and older can marry without restrictions. Those aged 16-17 need parental consent and face a 72-hour waiting period. Marriage under 16 requires a court order."
  },
  {
    question: 'Can you perform courthouse or civil ceremonies?',
    answer:
      "Absolutely. Joseph regularly performs courthouse-style civil ceremonies that are simple, dignified, and legally compliant. These can be customized with personal vows or kept brief and professional."
  },
  {
    question: 'What areas do you serve for wedding officiant services?',
    answer:
      "Joseph serves all 77 Oklahoma counties. Primary focus is the Tulsa metro area including Tulsa, Creek, Wagoner, Osage, and Rogers counties. Extended statewide travel is available with advance notice."
  },
  {
    question: 'How does the premarital counseling fee reduction work?',
    answer:
      "Under 43 O.S. § 5.1, completing 4 or more hours of premarital counseling from a licensed healthcare professional or religious official reduces the marriage license fee from approximately $50 to $5. Your counselor provides a signed certificate to present at the county court clerk's office."
  }
];

const services = [
  {
    title: 'Courthouse & Civil Ceremonies',
    description:
      'Professional officiating for courthouse-style weddings with personalized vows, legal compliance, and rapid filing of your marriage license.',
    icon: CheckCircle
  },
  {
    title: 'Elopements & Adventure Ceremonies',
    description:
      'Flexible elopement packages for parks, rooftops, private venues, and destination-friendly locations across Oklahoma.',
    icon: Heart
  },
  {
    title: 'Intimate Weddings & Micro Events',
    description:
      'Small guest counts still deserve big moments. Receive curated scripts, coordination support, and calming leadership.',
    icon: Users
  },
  {
    title: 'Vow Renewals & Anniversaries',
    description:
      'Celebrate milestones with new vows, unity rituals, and optional readings tailored to your story.',
    icon: Sparkles
  },
  {
    title: 'Marriage Document Notarization',
    description:
      'Integrated notary services for marriage license notarization, name change documents, and prenuptial agreement acknowledgments—all handled by the same professional who officiates your ceremony.',
    icon: Feather
  }
];

const benefits = [
  {
    title: 'Ordained & Documented',
    detail: 'Ordained April 30, 2017 via The Monastery with verifiable ordination certificate for complete peace of mind.',
    icon: BadgeCheck
  },
  {
    title: 'Legal Experience',
    detail: 'Backed by Just Legal Solutions and decades of legal support expertise for meticulous record handling.',
    icon: Shield
  },
  {
    title: 'Integrated Notary Services',
    detail: 'Licensed Oklahoma notary capable of notarizing marriage licenses, name change forms, prenuptial acknowledgments, and wedding affidavits—seamlessly combined with your ceremony.',
    icon: Feather
  },
  {
    title: 'Flexible Scheduling',
    detail: 'Weekday, evening, weekend, and short-notice ceremonies with optional rehearsal leadership.',
    icon: Clock
  }
];

const serviceAreas = ['Tulsa County', 'Creek County', 'Wagoner County', 'Osage County', 'Rogers County', 'Statewide Oklahoma'];

export default function WeddingOfficiantPage() {
  return (
    <>
      <UnifiedSchema
        pageType="service"
        pageTitle="Wedding Officiant Tulsa Oklahoma"
        pageDescription="Professional wedding officiant services in Oklahoma. Ordained minister since 2017 serving Tulsa County and beyond. Personalized ceremonies for your special day."
        pageUrl="https://justlegalsolutions.org/wedding-officiant"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Wedding Officiant', 'Marriage Ceremony', 'Elopement Services']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Wedding Officiant', url: '/wedding-officiant' },
        ]}
        faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
        keywords={['wedding officiant Tulsa', 'Oklahoma wedding officiant', 'ordained minister Oklahoma', 'elopement officiant Tulsa']}
      />
      <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <LocalPromoBanner zips={[]} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-pink-600 to-rose-500 text-white pt-24 pb-20">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-semibold mb-6">
                  <Heart className="w-4 h-4" /> Ordained April 30, 2017 · Universal Life Church
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Tulsa Wedding Officiant &
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
                    Marriage Services Across Oklahoma
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-rose-50/90 max-w-2xl mb-8">
                  Joseph W. Iannazzi of Just Legal Solutions creates modern, heartfelt ceremonies for courthouse weddings, elopements, intimate celebrations, and vow renewals. Licensed officiant since 2017, seasoned notary, and legal professional ready to guide you through every step—including marriage license notarization, name change documents, and prenuptial acknowledgments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:5393676832"
                    className="inline-flex items-center gap-2 bg-white text-rose-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-rose-50 transition"
                  >
                    <Phone className="w-5 h-5" /> Call (539) 367-6832
                  </a>
                  <a
                    href="mailto:info@justlegalsolutions.org"
                    className="inline-flex items-center gap-2 border border-white/70 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    <Mail className="w-5 h-5" /> info@justlegalsolutions.org
                  </a>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <Calendar className="w-8 h-8 mx-auto text-amber-200 mb-2" />
                      <p className="text-3xl font-bold">2017</p>
                      <p className="text-sm text-rose-100">Ordained</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <Users className="w-8 h-8 mx-auto text-amber-200 mb-2" />
                      <p className="text-3xl font-bold">Hundreds</p>
                      <p className="text-sm text-rose-100">Of Happy Couples</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <MapPin className="w-8 h-8 mx-auto text-amber-200 mb-2" />
                      <p className="text-3xl font-bold">Statewide</p>
                      <p className="text-sm text-rose-100">Oklahoma Travel</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <Star className="w-8 h-8 mx-auto text-amber-200 mb-2" />
                      <p className="text-3xl font-bold">5-Star</p>
                      <p className="text-sm text-rose-100">Client Praise</p>
                    </div>
                  </div>
                  <p className="text-sm text-rose-50 mt-4 text-center">
                    Certificate: <a className="underline" href="https://www.themonastery.org/credentials/ordination-certificate-Sm9zZXBoIFcgSWFubmF6emleNC8zMC8yMDE3XmxhcmdlXmZyZWVe.jpg" target="_blank" rel="noreferrer nofollow">Verified Ordination</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-rose-600 font-semibold mb-2 flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" /> Ceremony Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Full-Service Officiating & Marriage Support</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From courthouse filings to mountaintop vows, every ceremony receives professional scripting, logistics guidance, and warm delivery.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-2xl p-6 hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white rounded-full p-3 shadow">
                        <Icon className="w-6 h-6 text-rose-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-pink-50 via-white to-rose-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-rose-600 font-semibold mb-2 flex items-center gap-2">
                  <Feather className="w-5 h-5" /> Why Couples Choose Joseph
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ordained Officiant + Notary Advantage</h2>
                <p className="text-gray-700 mb-6">
                  Joseph W. Iannazzi brings a rare blend of heartfelt storytelling and legal precision. As an ordained minister and experienced notary, he can officiate your wedding and notarize related documents such as prenuptial acknowledgments, name change affidavits, or witness statements.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={benefit.title} className="flex items-start gap-4">
                        <div className="bg-white rounded-xl p-3 shadow">
                          <Icon className="w-5 h-5 text-rose-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-rose-600" /> Ceremony Process
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">1. Schedule & Vision</p>
                      <p>Share your story, preferred tone, and ceremonial elements. We coordinate time, location, and backup plans.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">2. Script Crafting</p>
                      <p>Receive a tailored script with vows, readings, and rituals. Edits are welcome until it feels perfect.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">3. Ceremony Day</p>
                      <p>Joseph arrives early, coordinates cues, leads guests, and ensures the license is signed correctly.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">4. Legal Follow-Through</p>
                      <p>Marriage licenses are filed promptly, and any needed notarizations or certified copies are handled with care.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <p className="text-rose-600 font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Service Area
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tulsa Metro & Statewide Coverage</h2>
                <p className="text-gray-700 mb-6">
                  Couples invite Joseph to courthouses, private venues, family ranches, lakefront decks, and modern event spaces across Oklahoma. Travel is coordinated with transparent timelines and dependable communication.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {serviceAreas.map((area) => (
                    <div key={area} className="bg-rose-50 border border-rose-100 rounded-xl p-4 text-gray-700 font-semibold flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-rose-600" /> {area}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mt-4">
                  Need a ceremony beyond the Tulsa metro? Contact us to coordinate extended travel throughout Oklahoma.
                </p>
              </div>

              <div className="bg-gradient-to-br from-rose-600 to-pink-600 text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Phone className="w-6 h-6" /> Contact & Scheduling
                </h3>
                <p className="text-rose-50 mb-6">
                  Share your ideal date, venue, and ceremony style. We respond promptly with availability and next steps.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <a href="tel:5393676832" className="font-semibold">(539) 367-6832</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:info@justlegalsolutions.org" className="font-semibold">info@justlegalsolutions.org</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" /> Tulsa, Oklahoma Area
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" /> Weekday, weekend, and evening availability
                  </div>
                </div>
                <p className="text-sm text-rose-100 mt-6">
                  No published pricing—every ceremony is quoted individually based on travel, rehearsal needs, and personalization. Expect affordable, transparent rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-rose-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-rose-600 font-semibold mb-2 flex items-center justify-center gap-2">
                <Star className="w-5 h-5" /> Praise from Couples
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonials</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Couples consistently applaud Joseph’s calming presence, timely communication, and heartfelt ceremonies.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonialData.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-white border border-rose-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <Heart className="w-8 h-8 text-rose-600 mb-4" />
                  <p className="text-gray-700 mb-4 italic">“{testimonial.quote}”</p>
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Oklahoma Marriage Law Essentials */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-blue-700 font-semibold mb-2 flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" /> Legal Reference
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Oklahoma Marriage Law Essentials</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Verified legal information to help you prepare for your Oklahoma wedding ceremony.
              </p>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-8 mb-10 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-blue-50">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /><span>License valid <strong>30 days</strong> from issuance (43 O.S. &sect; 20)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /><span>Both parties must appear in person with government-issued photo ID (43 O.S. &sect; 5)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /><span>No Oklahoma residency required &mdash; open to all couples</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /><span>No blood test required</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /><span>Two witnesses required at the ceremony</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /><span>Officiants must be 18+ and ordained (43 O.S. &sect; 7)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /><span>Premarital counseling (4+ hrs) reduces license fee to ~$5 (43 O.S. &sect; 5.1)</span></li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Marriage License Requirements (43 O.S. &sect; 5)</h3>
                  <p className="text-gray-700">
                    Both parties must appear in person at the county court clerk&apos;s office. Each must present a government-issued photo ID. Oklahoma has no residency requirement, meaning couples from any state or country may marry here. The license is issued immediately upon approval.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">License Validity: 30 Days (43 O.S. &sect; 20)</h3>
                  <p className="text-gray-700">
                    An Oklahoma marriage license is valid for <strong>thirty (30) days</strong> from the date of issuance. If the ceremony does not take place within this window, the license expires and the couple must apply for a new one. This is a critical deadline to keep in mind when scheduling.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Who Can Officiate (43 O.S. &sect; 7)</h3>
                  <p className="text-gray-700">
                    Oklahoma law authorizes ordained ministers, judges, justices of the peace, and rabbis to solemnize marriages. The officiant must be at least 18 years old. Two witnesses must be present and sign the marriage license. Joseph W. Iannazzi was ordained April 30, 2017, satisfying all statutory requirements.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Age Requirements (43 O.S. &sect; 3)</h3>
                  <p className="text-gray-700">
                    Persons 18 and older may marry without restriction. Those aged 16&ndash;17 require parental consent and face a mandatory 72-hour waiting period. Marriage under age 16 requires a court order. There is no waiting period for adults 18 and over.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Premarital Counseling Discount (43 O.S. &sect; 5.1)</h3>
                  <p className="text-gray-700">
                    Couples who complete 4 or more hours of premarital counseling from a licensed healthcare professional or religious official may present a signed certificate at the county clerk&apos;s office. This reduces the marriage license fee from approximately $50 to $5 &mdash; a meaningful incentive for couples who invest in pre-wedding preparation.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Remarriage After Divorce</h3>
                  <p className="text-gray-700">
                    Persons divorced in Oklahoma may not remarry someone other than their former spouse for six (6) months from the date the divorce decree is entered. This waiting period applies to Oklahoma divorces and is intended to allow for potential appeals or modifications of the decree.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-6">
              <strong>Legal Disclaimer:</strong> This information is for educational purposes only and does not constitute legal advice. For specific legal questions about your marriage or ceremony, consult a licensed Oklahoma attorney. Just Legal Solutions provides wedding officiant and legal support services — we are not a law firm and do not provide legal counsel.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-rose-600 font-semibold mb-2 flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" /> Frequently Asked Questions
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQ: Oklahoma Marriage Requirements</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Answers to the most common ceremony and paperwork questions couples ask before booking.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-rose-600" /> {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose an Ordained Minister */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-rose-600 font-semibold mb-2 flex items-center justify-center gap-2">
                <BadgeCheck className="w-5 h-5" /> Legal Authority &amp; Credentials
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose an Ordained Minister for Your Oklahoma Wedding</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the legal requirements ensures your marriage is valid, enforceable, and properly documented from day one.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-rose-50 border border-rose-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Authorization Under Oklahoma Law</h3>
                <p className="text-gray-700 mb-4">
                  Under <a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST43" className="text-rose-600 underline" target="_blank" rel="noopener noreferrer">43 O.S. &sect; 7 (Oklahoma Marriage Laws, Title 43)</a>, the State of Oklahoma authorizes ordained ministers, judges, justices of the peace, and rabbis to solemnize marriages. Joseph W. Iannazzi has been ordained since April 30, 2017, through The Monastery (Universal Life Church), satisfying all statutory requirements to legally perform your ceremony.
                </p>
                <p className="text-gray-700">
                  Unlike some officiants who obtained overnight ordinations, Joseph&apos;s credentials are verifiable through The Monastery&apos;s official records, giving you and the county clerk complete confidence in the legality of your union. Additional information on marriage procedures can be found on the <a href="https://www.courts.ok.gov/" className="text-rose-600 underline" target="_blank" rel="noopener noreferrer">Oklahoma Courts website</a>.
                </p>
              </div>
              <div className="bg-rose-50 border border-rose-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What Oklahoma Law Requires</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Both parties must be <strong>18 years of age or older</strong> (43 O.S. &sect; 3)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>A <strong>valid marriage license</strong> must be obtained from the county clerk before the ceremony</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Two witnesses</strong> over age 18 must be present and sign the license (43 O.S. &sect; 7)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>The <strong>officiant signs the certificate</strong> and it must be returned to the county clerk promptly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Marriage license is <strong>valid for 30 days</strong> from issuance (43 O.S. &sect; 20)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-rose-600 to-pink-600 text-white rounded-2xl p-8">
              <p className="text-rose-50 text-lg leading-relaxed">
                Joseph handles all legal follow-through&mdash;signing your marriage certificate, coordinating with witnesses, and ensuring the document is returned to the county clerk promptly. Need notarized documents as part of your ceremony planning? Visit our <Link href="/notary" className="underline font-semibold">Notary Services page</Link> or learn about our <Link href="/mobile-notary" className="underline font-semibold">Mobile Notary</Link> that can come directly to your venue. Questions about cost? <Link href="/pricing" className="underline font-semibold">View our pricing</Link> or <Link href="/contact" className="underline font-semibold">contact us</Link> to reserve your date. Want to learn more about Joseph? Visit the <Link href="/about" className="underline font-semibold">About page</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Planning Your Oklahoma Wedding Ceremony */}
        <section className="py-16 bg-gradient-to-b from-rose-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-rose-600 font-semibold mb-2 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" /> Ceremony Planning
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Planning Your Oklahoma Wedding Ceremony</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A well-planned ceremony runs smoothly, feels meaningful, and creates memories that last a lifetime. Here&apos;s everything you need to know before your big day.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-rose-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-rose-600" /> Choosing Your Ceremony Location
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Your venue sets the tone for the entire ceremony. Oklahoma offers a beautiful range of settings&mdash;from the urban elegance of downtown Tulsa to the natural beauty of the Ozark foothills or the sweeping plains of western Oklahoma.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" /><span><strong>Indoor venues</strong> offer climate control, predictable lighting, and easier logistics for guests with mobility considerations.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" /><span><strong>Outdoor locations</strong> like Turkey Mountain, Chandler Park, or lakeside venues create stunning backdrops&mdash;always plan a weather contingency.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" /><span><strong>Courthouse ceremonies</strong> at the Tulsa County Courthouse are simple, efficient, and legally straightforward.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" /><span><strong>Private residences</strong> offer the most personal touch&mdash;backyard ceremonies with family and close friends are among the most memorable.</span></li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-rose-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-rose-600" /> Ceremony Timeline Planning
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Good timing reduces stress and keeps everything flowing naturally. Consider these milestones when building your ceremony day schedule:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" /><span><strong>Rehearsal (1&ndash;2 days before):</strong> Walk through the ceremony order, practice vow delivery, and coordinate with photographers and musicians.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" /><span><strong>Arrival (45&ndash;60 min before):</strong> Joseph arrives early to confirm setup, review the marriage license, and coordinate with your wedding party.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" /><span><strong>Photography coordination:</strong> Share your shot list so ceremonial cues align with photo opportunities.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" /><span><strong>Ceremony duration:</strong> Most intimate weddings run 15&ndash;30 minutes; ceremonies with multiple readings or unity rituals may run 45&ndash;60 minutes.</span></li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-rose-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-rose-600" /> Writing Your Own Vows vs. Traditional Vows
                  </h3>
                  <p className="text-gray-700 mb-3">
                    One of the most personal decisions you&apos;ll make is whether to write your own vows or use traditional language. Both are equally valid under Oklahoma law&mdash;what matters legally is that you both consent to the marriage, not the specific words spoken.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-rose-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-1">Custom Vows</p>
                      <p className="text-gray-700 text-sm">Personal, unique, and deeply meaningful. Joseph helps couples craft vows that reflect their story without sounding like a speech. Aim for 1&ndash;2 minutes per person.</p>
                    </div>
                    <div className="bg-rose-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-1">Traditional Vows</p>
                      <p className="text-gray-700 text-sm">Time-honored language that resonates across religions and cultures. Familiar to guests and deeply symbolic&mdash;works beautifully for formal or religious ceremonies.</p>
                    </div>
                    <div className="bg-rose-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-1">Hybrid Approach</p>
                      <p className="text-gray-700 text-sm">Begin with traditional vows and add one personalized promise. Many couples find this balances familiarity with individuality perfectly.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-rose-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-600" /> What to Expect During the Ceremony
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Joseph leads each ceremony with a calm, professional demeanor that puts everyone at ease. A typical ceremony includes these elements in order:
                  </p>
                  <ol className="space-y-2 text-gray-700 list-decimal ml-5">
                    <li>Welcome and opening remarks (1&ndash;3 min)</li>
                    <li>Optional readings or unity rituals (if requested)</li>
                    <li>Declaration of intent (&ldquo;Do you take&hellip;&rdquo;)</li>
                    <li>Exchange of vows</li>
                    <li>Ring exchange (if applicable)</li>
                    <li>Pronouncement of marriage</li>
                    <li>The kiss and introduction of the couple</li>
                    <li>Signing of the marriage license with both witnesses</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Oklahoma Wedding Venue Types We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-rose-600 font-semibold mb-2 flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" /> Venue Types
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Oklahoma Wedding Venue Types We Serve</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Joseph travels to a wide variety of settings across Oklahoma to perform your ceremony in the location that means the most to you and your partner.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">🌳</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Outdoor Venues</h3>
                <p className="text-gray-700 text-sm">Parks, botanical gardens, lakeside settings, and scenic overlooks. Turkey Mountain Urban Wilderness, the Gathering Place, and Lake Keystone are popular Tulsa-area choices. Joseph coordinates weather backup plans for all outdoor ceremonies to keep your day stress-free.</p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">🏡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Private Residences &amp; Backyards</h3>
                <p className="text-gray-700 text-sm">Home ceremonies are intimate, cost-effective, and deeply personal. Whether it&apos;s a sprawling ranch property or a cozy urban backyard, Joseph brings the ceremony to you. Our <Link href="/mobile-notary" className="text-rose-600 underline">mobile notary services</Link> can handle any additional documents on-site.</p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Courthouse Ceremonies (Tulsa County)</h3>
                <p className="text-gray-700 text-sm">
                  The <a href="https://www.tulsacounty.org/Tulsa/County/Departments/Court+Clerk/" className="text-rose-600 underline" target="_blank" rel="noopener noreferrer">Tulsa County Court Clerk&apos;s office</a> is where you obtain your marriage license before the ceremony. Joseph regularly performs courthouse-style ceremonies that are professional, dignified, and efficient&mdash;ideal for couples who want a legally complete ceremony without the elaborate planning.
                </p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">⛪</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Churches &amp; Places of Worship</h3>
                <p className="text-gray-700 text-sm">For couples who want a sacred space but prefer an independent officiant, Joseph can perform ceremonies at churches, chapels, and other houses of worship. He respects all faith traditions and works with your venue coordinator to honor the space and its practices.</p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">🎉</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Event Venues &amp; Banquet Halls</h3>
                <p className="text-gray-700 text-sm">From boutique event spaces to full-service banquet halls, Joseph is experienced working alongside catering teams, photographers, and event coordinators to seamlessly integrate the ceremony into your broader reception timeline.</p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Destination Ceremonies Within Oklahoma</h3>
                <p className="text-gray-700 text-sm">From the Wichita Mountains Wildlife Refuge to the Ouachita National Forest, Oklahoma has stunning destination-worthy locations. Joseph travels statewide with advance notice. Need documents handled remotely? Ask about our <Link href="/remote-online-notary" className="text-rose-600 underline">remote online notary</Link> options for out-of-town guests.</p>
              </div>
            </div>
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 text-center">
              <p className="text-gray-700 mb-4">Have a unique venue in mind? <Link href="/contact" className="text-rose-600 font-semibold underline">Contact Joseph</Link> to discuss your vision. Nearly every location in Oklahoma is within reach. Couples buying a home together after the wedding can also ask about our <Link href="/real-estate-notary" className="text-rose-600 underline">real estate notary services</Link> for closing documents.</p>
            </div>
          </div>
        </section>

        {/* The Marriage Certificate Process */}
        <section className="py-16 bg-gradient-to-b from-white to-rose-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-rose-600 font-semibold mb-2 flex items-center justify-center gap-2">
                <Feather className="w-5 h-5" /> Documentation
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Marriage Certificate Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the paperwork process ensures your marriage is officially recorded and you have the certified copies needed for name changes, insurance, and legal updates.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 bg-white rounded-xl p-6 shadow-sm border border-rose-100">
                <div className="bg-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Marriage License from the County Clerk</h3>
                  <p className="text-gray-700">
                    Both parties must appear in person at the county court clerk&apos;s office. In Tulsa County, visit the <a href="https://www.tulsacounty.org/Tulsa/County/Departments/Court+Clerk/" className="text-rose-600 underline" target="_blank" rel="noopener noreferrer">Tulsa County Court Clerk</a>. You&apos;ll need a <strong>valid government-issued photo ID</strong> (driver&apos;s license, passport, or state ID) and your <strong>Social Security number</strong>. The fee is approximately $50, reducible to as low as $5 with proof of premarital counseling (43 O.S. &sect; 5.1). Oklahoma has no residency requirement&mdash;couples from any state or country are welcome.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white rounded-xl p-6 shadow-sm border border-rose-100">
                <div className="bg-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Use Your License Within 30 Days</h3>
                  <p className="text-gray-700">
                    Under <strong>43 O.S. &sect; 20</strong>, your Oklahoma marriage license is valid for <strong>thirty (30) days</strong> from the date of issuance. Your ceremony must take place within this window. If you miss the deadline, you must apply for a new license and pay the fee again. Joseph tracks these deadlines as part of his ceremony coordination process so nothing slips through the cracks.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white rounded-xl p-6 shadow-sm border border-rose-100">
                <div className="bg-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Officiant Signs the Certificate After the Ceremony</h3>
                  <p className="text-gray-700">
                    Immediately after your ceremony, Joseph signs the marriage certificate as your ordained officiant. Both witnesses&mdash;two adults over age 18 are required by <strong>43 O.S. &sect; 7</strong>&mdash;also sign at this time. Joseph reviews all signatures before leaving the venue to ensure the document is complete and legally valid before filing.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white rounded-xl p-6 shadow-sm border border-rose-100">
                <div className="bg-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Filing the Signed Certificate with the County Clerk</h3>
                  <p className="text-gray-700">
                    The signed marriage license must be returned to the county court clerk&apos;s office to be officially recorded. Joseph handles this filing promptly after your ceremony, so you don&apos;t have to worry about this administrative step during your honeymoon or the immediate post-wedding whirlwind.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white rounded-xl p-6 shadow-sm border border-rose-100">
                <div className="bg-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">5</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Getting Certified Copies for Name Changes, Insurance &amp; Records</h3>
                  <p className="text-gray-700">
                    Once filed, you can request certified copies of your marriage certificate from the county clerk (typically $5&ndash;$10 per copy). You&apos;ll need certified copies for your Social Security name change, driver&apos;s license update, passport application, insurance beneficiary changes, and bank account updates. Order at least 3&ndash;5 certified copies upfront to avoid repeat trips to the courthouse. Need any post-ceremony documents notarized? Ask about our <Link href="/notary" className="text-rose-600 underline">notary services</Link> or <Link href="/mobile-notary" className="text-rose-600 underline">mobile notary</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elopement Packages & Small Ceremonies */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-rose-600 font-semibold mb-2 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" /> Elopements &amp; Small Ceremonies
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Elopement Packages &amp; Small Ceremonies</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Some of the most meaningful weddings happen with just a few people present. Joseph specializes in intimate ceremonies that are legally complete, emotionally resonant, and completely stress-free.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included in a Simple Ceremony</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Pre-ceremony consultation to learn your story and preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>A fully customized or traditional ceremony script (your choice)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Professional and heartfelt delivery of vows and declaration of marriage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Signing of your marriage license with two witnesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Prompt filing of the completed certificate with the county clerk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>Optional: integrated notary services for same-day document needs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How Quick Courthouse-Style Ceremonies Work</h3>
                <p className="text-gray-700 mb-4">
                  For couples who want maximum efficiency with minimal planning, a courthouse-style ceremony can be completed in under 30 minutes. Here&apos;s the streamlined process:
                </p>
                <ol className="space-y-2 text-gray-700 list-decimal ml-5">
                  <li>Obtain your marriage license at the county court clerk (bring valid ID and Social Security number)</li>
                  <li>Schedule your ceremony with Joseph&mdash;often same-day or next-day availability for simple ceremonies</li>
                  <li>Arrive at your chosen location with your two witnesses (both must be 18+)</li>
                  <li>Exchange vows in a 10&ndash;15 minute ceremony</li>
                  <li>Sign the license with both witnesses and Joseph</li>
                  <li>Joseph files the certificate&mdash;you&apos;re legally married in Oklahoma</li>
                </ol>
                <p className="text-gray-700 mt-4">
                  <Link href="/pricing" className="text-rose-600 font-semibold underline">View our pricing</Link> or <Link href="/contact" className="text-rose-600 font-semibold underline">contact us to check availability</Link> for your preferred date.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" /> Witness Requirements Under Oklahoma Law
              </h3>
              <p className="text-gray-700">
                Under <strong>43 O.S. &sect; 7</strong>, two witnesses must be present at the ceremony and sign the marriage license. Both witnesses must be over the age of 18. If you&apos;re planning a truly private elopement and don&apos;t have witnesses available, Joseph can help arrange for witnesses to be present at your ceremony. This is a common request for couples eloping spontaneously or traveling to Oklahoma from out of state specifically to get married.
              </p>
            </div>
          </div>
        </section>

        {/* After Your Ceremony: Next Steps */}
        <section className="py-16 bg-rose-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-rose-600 font-semibold mb-2 flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" /> Post-Ceremony Checklist
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">After Your Ceremony: Next Steps</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your ceremony is complete&mdash;congratulations! Here&apos;s a practical guide to the administrative and legal steps to take in the days and weeks following your wedding.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-rose-100">
                <div className="text-3xl mb-3">📄</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Filing the Marriage Certificate</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Joseph returns your signed marriage license to the county court clerk within days of your ceremony. Once filed, the clerk officially records your marriage in the public record. You can then request certified copies for your personal records.
                </p>
                <p className="text-gray-700 text-sm">
                  Need additional documents notarized post-wedding? Our <Link href="/notary" className="text-rose-600 underline">notary services</Link>, <Link href="/mobile-notary" className="text-rose-600 underline">mobile notary</Link>, and <Link href="/remote-online-notary" className="text-rose-600 underline">remote online notary</Link> options are all available for your convenience.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-rose-100">
                <div className="text-3xl mb-3">🪪</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Name Change Process</h3>
                <p className="text-gray-700 text-sm mb-2">If you&apos;re changing your name after marriage, complete these steps in order:</p>
                <ol className="text-gray-700 text-sm space-y-1 list-decimal ml-4">
                  <li><strong>Social Security Administration</strong>&mdash;update your SSN record first (free, required before all others)</li>
                  <li><strong>Oklahoma driver&apos;s license / state ID</strong>&mdash;visit the DPS with your certified marriage certificate</li>
                  <li><strong>U.S. Passport</strong>&mdash;submit Form DS-5504 or DS-82 with USPS</li>
                  <li><strong>Bank accounts</strong>&mdash;each institution has its own process; bring certified certificate</li>
                  <li><strong>Employer / HR records</strong>&mdash;update payroll and benefits</li>
                  <li><strong>Voter registration</strong>&mdash;update with the Oklahoma State Election Board</li>
                </ol>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-rose-100">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Updating Insurance &amp; Benefits</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Marriage is a qualifying life event that opens a special enrollment window for health insurance. Within 30&ndash;60 days of your ceremony, you should:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-disc ml-4">
                  <li>Add your spouse to your health insurance plan</li>
                  <li>Update life insurance beneficiaries</li>
                  <li>Update retirement account beneficiaries (401k, IRA)</li>
                  <li>Review and bundle auto and homeowner&apos;s insurance</li>
                  <li>Update estate planning documents (will, power of attorney)</li>
                </ul>
                <p className="text-gray-700 text-sm mt-3">
                  Buying a home together? Ask about our <Link href="/real-estate-notary" className="text-rose-600 underline">real estate notary services</Link> for closing documents.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Need Help with Post-Ceremony Documents?</h3>
              <p className="text-rose-50 mb-6 max-w-2xl mx-auto">
                Joseph and the Just Legal Solutions team are here for you beyond the ceremony. From notarizing name change affidavits to handling real estate closing documents, we&apos;re your full legal support partner. Learn more <Link href="/about" className="underline font-semibold">about Joseph Iannazzi</Link> and the full range of services we offer.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="bg-white text-rose-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-rose-50 transition">
                  Contact Us
                </Link>
                <Link href="/pricing" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Schedule Your Ceremony?</h2>
            <p className="text-lg text-rose-50 mb-8">
              Reserve Joseph W. Iannazzi for courthouse weddings, elopements, intimate events, or vow renewals anywhere in the Tulsa metro or throughout Oklahoma.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-white text-rose-700 px-6 py-3 rounded-lg font-semibold shadow">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a href="mailto:info@justlegalsolutions.org" className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-semibold">
                <Mail className="w-5 h-5" /> Request Availability
              </a>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Also Available from Just Legal Solutions</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Link href="/notary" className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-rose-600 transition-colors group text-center">
                <p className="font-bold group-hover:text-rose-600">Notary Services</p>
                <p className="text-sm text-gray-600">General document notarization</p>
              </Link>
              <Link href="/mobile-notary" className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-rose-600 transition-colors group text-center">
                <p className="font-bold group-hover:text-rose-600">Mobile Notary</p>
                <p className="text-sm text-gray-600">Notarization at your venue</p>
              </Link>
              <Link href="/real-estate-notary" className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-rose-600 transition-colors group text-center">
                <p className="font-bold group-hover:text-rose-600">Real Estate Notary</p>
                <p className="text-sm text-gray-600">Closing docs for newlywed homebuyers</p>
              </Link>
              <Link href="/remote-online-notary" className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-rose-600 transition-colors group text-center">
                <p className="font-bold group-hover:text-rose-600">Remote Online Notary</p>
                <p className="text-sm text-gray-600">Notarize from anywhere</p>
              </Link>
              <Link href="/apostille" className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-rose-600 transition-colors group text-center">
                <p className="font-bold group-hover:text-rose-600">Apostille Services</p>
                <p className="text-sm text-gray-600">International marriage certificates</p>
              </Link>
              <Link href="/about" className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-rose-600 transition-colors group text-center">
                <p className="font-bold group-hover:text-rose-600">About Joseph Iannazzi</p>
                <p className="text-sm text-gray-600">Credentials &amp; background</p>
              </Link>
            </div>
            <div className="text-center mt-4">
              <a href="https://www.themonastery.org/verify-ministers" target="_blank" rel="noopener noreferrer nofollow" className="text-rose-600 hover:underline text-sm">
                Verify Ordination at Universal Life Church ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
}
