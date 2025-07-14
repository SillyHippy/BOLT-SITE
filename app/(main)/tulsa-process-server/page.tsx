import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Zap, Map, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Process Server Tulsa OK | Same-Day Service | Just Legal Solutions',
  description: 'Top-rated process server in Tulsa, OK. We offer same-day service for subpoenas, summons, and divorce papers across Tulsa County. Licensed, insured, and available 24/7. Call for a free quote.',
  keywords: [
    'process server tulsa ok',
    'tulsa process serving',
    'legal document delivery tulsa',
    'same day process server tulsa',
    'subpoena service tulsa',
    'divorce papers tulsa',
    'eviction notice tulsa',
    'tulsa county process server'
  ],
  alternates: {
    canonical: 'https://justlegalsolutions.org/tulsa-process-server'
  }
};

const TulsaProcessServerPage = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <div className="relative bg-gray-900">
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1590650213165-3376a0a0b04a?fit=crop&w=1200&h=500&q=80"
                            alt="Downtown Tulsa skyline at dusk"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-40"
                        />
                    </div>
                    <div className="relative container mx-auto px-4 py-24 text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-extrabold">Premier Process Server in Tulsa, Oklahoma</h1>
                        <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
                            Your trusted partner for fast, accurate, and professional legal document delivery across Tulsa County.
                        </p>
                        <div className="mt-8">
                            <a href="/pricing" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-transform transform hover:scale-105">
                                View Pricing & Services
                            </a>
                        </div>
                    </div>
                </div>

                {/* Why Us Section */}
                <div className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Gold Standard in Tulsa Process Serving</h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We combine speed, technology, and local expertise to offer unparalleled service.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <Zap className="h-12 w-12 mx-auto text-yellow-500" />
                                <h3 className="mt-4 text-xl font-semibold">Same-Day Service</h3>
                                <p className="mt-2 text-gray-600">Urgent documents are our specialty. We guarantee same-day attempts for all rush orders in Tulsa.</p>
                            </div>
                            <div className="text-center">
                                <Shield className="h-12 w-12 mx-auto text-green-500" />
                                <h3 className="mt-4 text-xl font-semibold">Licensed & Insured</h3>
                                <p className="mt-2 text-gray-600">Our process servers are fully licensed and insured in Oklahoma for your complete peace of mind.</p>
                            </div>
                            <div className="text-center">
                                <Map className="h-12 w-12 mx-auto text-blue-500" />
                                <h3 className="mt-4 text-xl font-semibold">Tulsa County Coverage</h3>
                                <p className="mt-2 text-gray-600">We serve documents in Tulsa, Broken Arrow, Bixby, Jenks, Owasso, and all surrounding areas.</p>
                            </div>
                            <div className="text-center">
                                <FileText className="h-12 w-12 mx-auto text-purple-500" />
                                <h3 className="mt-4 text-xl font-semibold">Digital Proof of Service</h3>
                                <p className="mt-2 text-gray-600">Receive a legally compliant, digital affidavit of service as soon as the job is complete.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Serving All Types of Legal Documents in Tulsa</h2>
                        </div>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8">
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h3 className="font-semibold text-xl mb-2">Summons & Complaints</h3>
                                <p className="text-gray-600">Initiate your lawsuit correctly with prompt and professional service of your summons.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h3 className="font-semibold text-xl mb-2">Subpoenas</h3>
                                <p className="text-gray-600">Ensure witnesses and documents appear in court with our reliable subpoena delivery service.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h3 className="font-semibold text-xl mb-2">Divorce & Family Law Papers</h3>
                                <p className="text-gray-600">We handle sensitive family law documents, including divorce papers and child custody orders, with discretion.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h3 className="font-semibold text-xl mb-2">Eviction Notices</h3>
                                <p className="text-gray-600">Properly serve tenants with notices to quit and other eviction-related documents.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default TulsaProcessServerPage;
