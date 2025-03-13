"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from './button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/jls-logo.webp"
                alt="JLS Logo"
                width={60}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
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

          {/* Contact Button - Right aligned */}
          <div className="hidden md:block">
            <Button onClick={scrollToContact} variant="default" className="bg-black text-white hover:bg-gray-800">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Slide from right */}
        <div 
          className={`
            fixed top-0 right-0 h-full w-48 bg-white transform transition-transform duration-300 ease-in-out z-50
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden
          `}
          style={{ marginTop: '64px' }}
        >
          <div className="flex flex-col h-full">
            <div className="flex-1 px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/#courier-services"
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Courier Services
              </Link>
              <Link
                href="/payments"
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Payments
              </Link>
            </div>
            <div className="p-4 border-t">
              <Button
                onClick={scrollToContact}
                variant="default"
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            style={{ marginTop: '64px' }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}