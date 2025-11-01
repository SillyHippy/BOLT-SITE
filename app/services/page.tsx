import Link from 'next/link';
import { Wrench, Home, Mail } from 'lucide-react';

export const metadata = {
  title: 'Services Under Maintenance | Just Legal Solutions',
  description: 'Our services page is currently undergoing maintenance. We will be back soon with enhanced features and information.',
  robots: 'noindex, nofollow',
};

export default function ServicesMaintenancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-6">
                <Wrench className="h-16 w-16 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Under Maintenance
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-2">
            We&apos;re currently updating our services page to serve you better.
          </p>
          <p className="text-gray-500 mb-8">
            This page will be back online shortly with enhanced features and updated information.
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2 mb-8">
            <div className="h-2 w-2 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-yellow-800">Maintenance in Progress</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              <Home className="h-5 w-5" />
              Return to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors font-medium"
            >
              <Mail className="h-5 w-5" />
              Contact Us
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need immediate assistance?{' '}
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium underline">
                Get in touch with our team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
