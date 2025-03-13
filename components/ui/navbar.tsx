"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/jls-logo.webp" alt="JLS Logo" className="h-8" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-800 hover:text-black text-base">
                Home
              </Link>
              <Link href="/pricing" className="text-gray-800 hover:text-black text-base">
                Pricing
              </Link>
              <Link href="/#courier-services" className="text-gray-800 hover:text-black text-base">
                Courier Services
              </Link>
              <Link href="/payments" className="text-gray-800 hover:text-black text-base">
                Payments
              </Link>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-black hover:bg-black/90 text-white rounded-lg px-6"
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out z-[60] ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 py-2 space-y-4">
            <Link
              href="/"
              className="block text-[#ffffff] text-xl font-semibold hover:text-[#ffffff]/80"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/pricing"
              className="block text-[#ffffff] text-xl font-semibold hover:text-[#ffffff]/80"
              onClick={() => setIsOpen(false)}
            >
              PRICING
            </Link>
            <Link
              href="/#courier-services"
              className="block text-[#ffffff] text-xl font-semibold hover:text-[#ffffff]/80"
              onClick={() => setIsOpen(false)}
            >
              COURIER SERVICES
            </Link>
            <Link
              href="/#contact"
              className="block text-[#ffffff] text-xl font-semibold hover:text-[#ffffff]/80"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/payments"
              className="block text-[#ffffff] text-xl font-semibold hover:text-[#ffffff]/80"
              onClick={() => setIsOpen(false)}
            >
              PAYMENTS
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 md:hidden z-50"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}