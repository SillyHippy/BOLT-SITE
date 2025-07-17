
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Just Legal Solutions</h3>
            <p className="text-gray-300">
              Professional process serving throughout Tulsa County and surrounding areas.
            </p>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Tulsa, Oklahoma</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+15393676832" className="text-sm hover:text-blue-400">
                  (539) 367-6832
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@justlegalsolutions.org" className="text-sm hover:text-blue-400">
                  info@justlegalsolutions.org
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-blue-400">Process Serving</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Court Document Delivery</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Skip Tracing</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Legal Courier Services</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <div className="text-sm">
                  <div>Mon-Fri: 8:00 AM - 5:00 PM</div>
                  <div>Sat: 9:00 AM - 3:00 PM</div>
                  <div>Emergency Service Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Just Legal Solutions. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Default export for compatibility
export default Footer;
