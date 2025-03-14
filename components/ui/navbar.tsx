"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from './button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToFooter = () => {
    setIsOpen(false);
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/jls-logo.webp" 
                alt="JLS Logo" 
                width={100} 
                height={40} 
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 ml-16">
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/#courier-services" className="text-gray-700 hover:text-gray-900">
                Courier Services
              </Link>
              <Link href="/payments" className="text-gray-700 hover:text-gray-900">
                Payments
              </Link>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center ml-8">
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Sliding from right */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out md:hidden z-[60]`}
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          boxShadow: isOpen ? '-4px 0 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
        }}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          >
            <X className="block h-6 w-6" />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/#courier-services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Courier Services
          </Link>
          <Link
            href="/payments"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Payments
          </Link>
          <button
            onClick={scrollToFooter}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-[55]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}