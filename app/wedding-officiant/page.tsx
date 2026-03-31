import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/ui/json-ld';
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
  title: 'Oklahoma Wedding Officiant | Tulsa Marriage Services | Just Legal Solutions',
  description:
    'Ordained wedding officiant Joseph W. Iannazzi delivers heartfelt ceremonies across Tulsa, Creek, Wagoner, Osage, and all Oklahoma counties. Courthouse weddings, elopements, vow renewals, and custom scripts with flexible scheduling. Call (539) 367-6832 or email info@justlegalsolutions.org.',
  openGraph: {
    title: 'Ordained Oklahoma Wedding Officiant | Just Legal Solutions',
    description:
      'Since 2017 Joseph W. Iannazzi has officiated courthouse ceremonies, elopements, and intimate weddings throughout Oklahoma. Licensed, professional, and available with short notice.',
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
    title: 'Oklahoma Wedding Officiant | Just Legal Solutions',
    description:
      'Tulsa-area ordained officiant for modern ceremonies, elopements, and vow renewals. Contact Just Legal Solutions for availability.',
    images: ['https://justlegalsolutions.org/images/wedding-officiant-og.jpg']
  },
  alternates: {
    canonical: canonicalUrl
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
  }
];

const benefits = [
  {
    title: 'Ordained & Documented',
    detail: 'Ordained April 30, 2017 via The Monastery with verifiable certificate for complete peace of mind.',
    icon: BadgeCheck
  },
  {
    title: 'Legal Experience',
    detail: 'Backed by Just Legal Solutions and decades of legal support expertise for meticulous record handling.',
    icon: Shield
  },
  {
    title: 'Notary Advantage',
    detail: 'Licensed Oklahoma notary capable of notarizing name change forms, prenuptial acknowledgments, and wedding affidavits.',
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
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
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
                  Joseph W. Iannazzi of Just Legal Solutions creates modern, heartfelt ceremonies for courthouse weddings, elopements, intimate celebrations, and vow renewals. Licensed officiant, seasoned notary, and legal professional ready to guide you through every step.
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
                    Certificate: <a className="underline" href="https://www.themonastery.org/credentials/ordination-certificate-Sm9zZXBoIFcgSWFubmF6emleNC8zMC8yMDE3XmxhcmdlXmZyZWVe.jpg" target="_blank" rel="noreferrer">Verified Ordination</a>
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
      </main>
      <Footer />
    </div>
  );
}
