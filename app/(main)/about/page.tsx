/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BusinessSchema from '@/components/BusinessSchema'
import JsonLd from '@/components/JsonLd'
export const metadata: Metadata = {
  title: 'About Just Legal Solutions | Tulsa Process Server',
  description:
    'Learn how Just Legal Solutions delivers fast, transparent, 24/7 process serving and legal courier services across Tulsa and NE Oklahoma.',
  keywords:
    'about us, just legal solutions, joseph iannazzi, process server oklahoma, legal battle, workers compensation, tulsa process server',
  alternates: {
    canonical: 'https://justlegalsolutions.org/about'
  },
  openGraph: {
    title: 'About Just Legal Solutions | Tulsa Process Server',
    description:
      'Learn how Just Legal Solutions delivers fast, transparent, 24/7 process serving and legal courier services across Tulsa and NE Oklahoma.',
    url: 'https://justlegalsolutions.org/about',
    type: 'website',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Just Legal Solutions | Tulsa Process Server',
    description:
      'Learn how Just Legal Solutions delivers fast, transparent, 24/7 process serving and legal courier services across Tulsa and NE Oklahoma.',
    images: ['https://justlegalsolutions.org/images/jls-logo.webp']
  }
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://justlegalsolutions.org' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://justlegalsolutions.org/about' }
  ]
}

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section with Profile Layout */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/Headshot.jpg"
                    alt="Joseph Iannazzi, Founder of Just Legal Solutions"
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>

              {/* Hero Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Invisible SEO H1 */}
                <h1 className="sr-only">
                  About Just Legal Solutions: Tulsa Process Server
                </h1>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  The Fight That Forged a Business
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-6">
                  How a 5-Year Legal Battle Inspired a New Kind of Process Server in Oklahoma
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For most people, the legal system is an abstract concept. It’s something seen on television dramas—a world of courtrooms, gavels, and eloquent lawyers where justice, though sometimes delayed, is ultimately served. But for Joseph Iannazzi, the founder of Glenpool-based <Link href="/" className="text-blue-600 hover:text-blue-800">Just Legal Solutions</Link>, the legal system became a five-year crucible of pain, frustration, and systemic failure. It was a journey that nearly broke him, but ultimately forged a new purpose: to build the kind of legal support company he so desperately needed.
            </p>

            <p className="mb-6">
              This isn't just the story of a new business. It's the story of how a debilitating workplace injury and a prolonged battle with an indifferent workers' compensation system inspired a mission to bring speed, transparency, and humanity to a critical corner of the legal world. It’s a story that begins with a simple promise of care and ends with the launch of a company dedicated to ensuring that promise is kept for others across Tulsa and northeastern Oklahoma.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700">
              "I'll never forget sitting in one of their approved clinics," Joseph recalls, "and being told by a doctor to simply, 'be tough, you need to tough out your pain.' My body was screaming that something was seriously wrong, but their reports stated I was in 'perfect health,' even as my condition worsened. It felt like a corrupt system where company doctors would protect the insurer, and I was trapped in a web of opinions that had nothing to do with my reality."
            </blockquote>

            <p className="mb-6">
              The core of the battle became the right to choose his own doctor. He researched highly-rated specialists, miles from the insurer's chosen clinic, with better patient outcomes and fewer lawsuits against them. His requests to see these clearly superior doctors were repeatedly denied. At one point, he begged the workers' comp administrators to finish the necessary surgeries on his unstable left knee before operating on his other leg. They refused, giving him an ultimatum: have the surgery on the other leg now, or don't get it at all.
            </p>

            <p className="mb-6">
              Legal emergencies don't keep business hours. Recognizing this, the company operates a dedicated 24/7 emergency hotline. Whether a client needs an emergency process server in Tulsa for a last-minute restraining order, same-day legal document delivery in Broken Arrow for an urgent court filing, or weekend service for a hard-to-reach individual in Sapulpa, the team is always ready to respond.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving All of Oklahoma</h2>

            <p className="mb-6">
              Rogers County: Claremore, Catoosa
            </p>
            <p className="mb-6">
              Washington County: Bartlesville
            </p>

            <p className="mb-8">
              This extensive network ensures that whether you are a downtown Tulsa law firm or an individual in a rural community, you have access to professional, urgent legal support anywhere in Oklahoma.
            </p>

            <p>
              View Our Full Service Area: <a href="https://justlegalsolutions.org/service-areas" className="text-blue-600 hover:text-blue-800 underline">https://justlegalsolutions.org/service-areas</a>
            </p>
          </div>
        </div>
      </main>

      {/* SEO Schema Components */}
      <BusinessSchema />
      <JsonLd data={breadcrumbData} />
    </>
  )
}
