import React from 'react';
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
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Efficient Process Serving Solutions</h1>
          <p className="text-lg md:text-xl max-w-3xl drop-shadow-md">
            At Just Legal Solutions, we offer comprehensive process serving services
            tailored to your needs. Whether it's routine, rush, or same-day service, we
            ensure statewide coverage at reasonable rates.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black text-white py-16 md:py-24" aria-label="Our services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Service 1 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-56 w-full rounded-lg overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <img
                  src="/images/secure-delivery.webp"
                  alt="Professional courier delivering legal documents securely"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Document Delivery</h3>
              <p className="text-gray-400">
                Our secure document delivery ensures your documents arrive safely and on time, handled with professional confidentiality.
              </p>
            </div>
            {/* Service 2 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-56 w-full rounded-lg overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <img
                  src="/images/court-transfer.webp"
                  alt="Court document transfer service"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Court-Run Transfers</h3>
              <p className="text-gray-400">
                We specialize in court-run document transfers, ensuring your critical files reach their destination without delay.
              </p>
            </div>
            {/* Service 3 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-56 w-full rounded-lg overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <img
                  src="/images/skip-trace.webp"
                  alt="Skip tracing and investigation services"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Skip Tracing</h3>
              <p className="text-gray-400">
                Our skip trace service helps locate hard-to-find individuals efficiently and cost-effectively.
              </p>
            </div>
            {/* Service 4 */}
            <div className="text-center flex flex-col">
              <div className="mb-4 relative h-56 w-full rounded-lg overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <img
                  src="/images/same-day.webp"
                  alt="Same day delivery service"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Same-Day Service</h3>
              <p className="text-gray-400">
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
