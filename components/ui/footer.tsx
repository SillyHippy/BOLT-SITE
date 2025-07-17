
'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+15393676832" className="hover:text-blue-400 transition-colors">
                  (539) 367-6832
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:info@justlegalsolutions.org" className="hover:text-blue-400 transition-colors">
                  info@justlegalsolutions.org
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <span>Serving Tulsa, Broken Arrow, Sapulpa, and surrounding areas</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-blue-400" />
                <span>Available 24/7 for Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Process Serving</Link></li>
              <li><Link href="/courier-services-tulsa" className="hover:text-blue-400 transition-colors">Courier Services</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Business Solutions</Link></li>
              <li><span className="text-gray-400">Court Filing</span></li>
              <li><span className="text-gray-400">Document Delivery</span></li>
              <li><span className="text-gray-400">Skip Tracing</span></li>
            </ul>
          </div>

          {/* Legal & About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300 mb-4">
              Professional process serving throughout Oklahoma with fast, reliable service. 
              Licensed and bonded for your peace of mind.
            </p>
            <div className="space-y-2">
              <Link href="/security-policy" className="block hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/security-policy" className="block hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Just Legal Solutions. All rights reserved. Licensed Process Server in Oklahoma.
          </p>
        </div>
      </div>
    </footer>
  );
}
