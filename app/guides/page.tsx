import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, MapPin, Building2, Shield, BookOpen } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Legal Process Serving Guides',
  description:
    'Comprehensive guides on process serving in Oklahoma. Attorney resources, rural serving strategies, tribal land jurisdictions, and military base procedures.',
  openGraph: {
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-077-guides-hero.png',
      width: 1200,
      height: 630,
      alt: 'Oklahoma legal process guides from Just Legal Solutions',
    }],
    title: 'Legal Process Serving Guides',
    description:
      'Comprehensive guides on process serving in Oklahoma. Attorney resources, rural serving strategies, tribal land jurisdictions, and military base procedures.',
    url: 'https://justlegalsolutions.org/guides',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Process Serving Guides',
    description:
      'Comprehensive guides on process serving in Oklahoma. Attorney resources, rural serving strategies, tribal land jurisdictions, and military base procedures.',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/guides',
  },
};

const guides = [
  {
    title: 'Process Serving for Oklahoma Attorneys',
    description:
      'Complete guide on selecting, working with, and depending on professional process servers. Avoid common mistakes and protect your cases.',
    href: '/guides/attorney-guide',
    icon: Scale,
  },
  {
    title: 'Process Serving in Rural Oklahoma',
    description:
      'Navigate the unique challenges of rural Oklahoma process serving — GPS tracking, tribal lands, weather, and county-by-county strategies.',
    href: '/guides/rural-oklahoma',
    icon: MapPin,
  },
  {
    title: 'McGirt v. Oklahoma — What Process Servers Need to Know',
    description:
      'How the landmark Supreme Court decision affects process serving on tribal land. Jurisdictional changes, tribal coordination, and practical guidance.',
    href: '/guides/mcgirt-v-oklahoma',
    icon: BookOpen,
  },
  {
    title: 'Serving Process on Military Bases',
    description:
      'How to serve legal documents on Oklahoma military installations including Fort Sill, Tinker AFB, and Altus AFB. Gate access, JAG coordination, and SCRA protections.',
    href: '/guides/military-base-service',
    icon: Shield,
  },
  {
    title: 'Serving Legal Papers on Tribal Land',
    description:
      'Understand the protocols and legal requirements for serving process on tribal land across Oklahoma\'s 39 tribal nations.',
    href: '/serving-legal-papers-on-tribal-land',
    icon: Building2,
  },
];

export default function GuidesIndexPage() {
  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Legal Process Serving Guides"
        pageDescription="Comprehensive guides on process serving in Oklahoma. Attorney resources, rural serving strategies, tribal land jurisdictions, and military base procedures."
        pageUrl="https://justlegalsolutions.org/guides"
        siteName="Just Legal Solutions"
        reviewCount={156}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides' },
        ]}
        keywords={['process serving guides Oklahoma', 'attorney guide process server', 'Oklahoma legal guides']}
      />
      <Navbar />
      <main className="pt-14 pb-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Legal Process Serving Guides
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              In-depth resources for attorneys, paralegals, and legal
              professionals navigating process serving across Oklahoma.
            </p>
          </div>
        </section>

        {/* Guide Cards */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-sm text-gray-600">{guide.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
