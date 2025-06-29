import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Truck, FileText, Building2, Clock } from "lucide-react";

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Professional Process Server Tulsa County Oklahoma</h1>
          <p className="text-lg md:text-xl max-w-3xl drop-shadow-md mb-8">
            Expert process serving in Tulsa County, Broken Arrow (Wagoner County), and Sapulpa (Creek County). Same-day, rush, and standard legal document delivery starting at $60. Statewide Oklahoma coverage with professional service.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
            <span className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">Standard Service: $60</span>
            <span className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">Rush Service: $100</span>
            <span className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">Same-Day: $150</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black text-white py-16 md:py-24" aria-label="Process serving services in Tulsa County">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Process Serving Services</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Serving Tulsa County, Broken Arrow (Wagoner County), Sapulpa (Creek County), and throughout Oklahoma with reliable legal document delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Service 1 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-56 w-full rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300">
                <img
                  src="/images/secure-delivery.webp"
                  alt="Professional courier delivering legal documents securely"
                  className="w-full h-full object-cover object-[50%_30%]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Legal Document Delivery</h3>
              <p className="text-gray-400">
                Professional process serving in Tulsa County with secure document delivery. Our certified process servers ensure your legal documents reach their destination safely and on time with complete confidentiality.
              </p>
            </div>
            {/* Service 2 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-56 w-full rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300">
                <img
                  src="/images/court-transfer.webp"
                  alt="Court document transfer service"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Court Document Transfers</h3>
              <p className="text-gray-400">
                Expert court document transfer services throughout Oklahoma. We handle court filings, transfers, and legal document exchanges between courts in Tulsa County, Wagoner County, and Creek County.
              </p>
            </div>
            {/* Service 3 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-56 w-full rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300">
                <img
                  src="/images/skip-trace.webp"
                  alt="Professional skip tracing and investigation services for locating individuals in Oklahoma"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Skip Tracing Services Oklahoma</h3>
              <p className="text-gray-400">
                Professional skip tracing services to locate individuals throughout Oklahoma. Our investigators use advanced techniques to find defendants in Tulsa County, Broken Arrow, Sapulpa, and surrounding areas when traditional methods fail.
              </p>
            </div>
            {/* Service 4 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-56 w-full rounded-lg overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-shadow duration-300">
                <img
                  src="/images/same-day.webp"
                  alt="Same-day process serving and urgent document delivery services"
                  className="w-full h-full object-cover object-[50%_30%]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Same-Day Process Serving</h3>
              <p className="text-gray-400">
                Urgent same-day process serving in Tulsa County starting at $150. When time is critical, our same-day service ensures your legal documents are delivered quickly throughout Broken Arrow, Sapulpa, and greater Tulsa area.
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
