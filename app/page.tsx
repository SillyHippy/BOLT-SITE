import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Truck, FileText, Building2, Clock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Professional in suit"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-6">Efficient Process Serving Solutions</h1>
          <p className="text-xl max-w-2xl">
            At Just Legal Solutions, we offer comprehensive process serving services
            tailored to your needs. Whether it's routine, rush, or same-day service, we
            ensure Statewide coverage at reasonable rates.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Secure Document Delivery"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-bold mb-2">Secure Document Delivery</h3>
            <p className="text-gray-300">
              Our secure document delivery ensures your documents arrive safely and on time, professionally and confidentially.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Court-Run Transfers"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-bold mb-2">Court-Run Transfers</h3>
            <p className="text-gray-300">
              We specialize in court-run document transfers, ensuring your files reach their destination without delay.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Skip Tracing"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-bold mb-2">Skip Tracing</h3>
            <p className="text-gray-300">
              Our skip trace service helps locate hard-to-find individuals efficiently and cost-effectively.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Same-Day Delivery"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-bold mb-2">Same-Day Delivery</h3>
            <p className="text-gray-300">
              Get your time-sensitive documents delivered quickly with our reliable same-day service.
            </p>
          </div>
        </div>
      </section>

      {/* Secure Courier Services */}
      <section id="courier-services" className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Legal office at night"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h2 className="text-4xl font-bold text-center mb-16">Secure Courier Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Same-Day Delivery</h3>
              <p>When time is critical, our same-day delivery service ensures your documents reach their destination quickly.</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Handling</h3>
              <p>Our secure handling procedures ensure your sensitive materials are protected throughout the delivery process.</p>
            </div>
            <div className="text-center">
              <Building2 className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Electronic Filing Assistance</h3>
              <p>Let our experienced staff handle your electronic court filings efficiently and accurately.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}