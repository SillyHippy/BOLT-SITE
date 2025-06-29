import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Truck, FileText, Building2, Clock } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Tulsa County Oklahoma | Same-Day Service $150',
  description: 'Expert process serving in Tulsa County, Broken Arrow, Sapulpa. Same-day $150, rush $100, standard $60. Professional legal document delivery statewide.',
  alternates: {
    canonical: 'https://justlegalsolutions.org/'
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)]" aria-label="Hero section">
        <div className="absolute inset-0">
          <img
            src="/images/hero.webp"
            alt="Professional legal services office with modern workspace and legal documents"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Efficient Process Serving Solutions</h1>
          <p className="text-lg md:text-xl max-w-3xl drop-shadow-md mb-8">
            At Just Legal Solutions, we offer comprehensive process serving services tailored to your needs. Whether it&apos;s routine, rush, or same-day service, we ensure statewide Oklahoma coverage at reasonable rates.
          </p>
          {/* SEO-visible pricing and service areas - hidden from users */}
          <div className="sr-only">
            <span>Standard service $60, Rush service $100, Same-day service $150</span>
            <span>Serving Tulsa County, Broken Arrow, Sapulpa, and statewide Oklahoma</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black text-white py-16 md:py-24" aria-label="Our services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {/* Service 1 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300">
                <img
                  src="/images/secure-delivery.webp"
                  alt="Professional courier delivering legal documents securely"
                  className="w-full h-full object-cover object-position-upper-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Secure Document Delivery</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Our secure document delivery ensures your documents arrive safely and on time, handled with professional confidentiality.
              </p>
            </div>
            {/* Service 2 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300">
                <img
                  src="/images/court-transfer.webp"
                  alt="Court document transfer service"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Court-Run Transfers</h3>
              <p className="text-gray-400 text-sm md:text-base">
                We specialize in court-run document transfers, ensuring your critical files reach their destination without delay.
              </p>
            </div>
            {/* Service 3 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300">
                <img
                  src="/images/skip-trace.webp"
                  alt="Professional skip tracing and investigation services for locating individuals in Oklahoma"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Skip Tracing Services</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Professional skip tracing services to locate individuals throughout Oklahoma when traditional methods fail.
              </p>
            </div>
            {/* Service 4 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-shadow duration-300">
                <img
                  src="/images/same-day.webp"
                  alt="Same-day process serving and urgent document delivery services"
                  className="w-full h-full object-cover object-position-same-day"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Same-Day Service</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Get your time-sensitive documents delivered quickly with our reliable same-day process serving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Courier Services */}
      <section id="courier-services" className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="/images/courier-bg.webp"
            alt="Legal office environment"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h2 className="text-4xl font-bold text-center mb-16">Dedicated Courier Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center flex flex-col items-center">
              <div className="bg-white/10 rounded-full p-4 mb-4">
                 <Clock className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Same-Day Delivery</h3>
              <p className="text-gray-300">When time is critical, our same-day courier service ensures your documents reach their destination quickly.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="bg-white/10 rounded-full p-4 mb-4">
                <FileText className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Handling</h3>
              <p className="text-gray-300">Our secure handling procedures ensure your sensitive materials are protected throughout the delivery process.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="bg-white/10 rounded-full p-4 mb-4">
                <Building2 className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Electronic Filing Assistance</h3>
              <p className="text-gray-300">Let our experienced staff handle your electronic court filings efficiently and accurately.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
