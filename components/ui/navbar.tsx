"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./sheet";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/jls-logo.png" alt="JLS Logo" className="h-8" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex space-x-8">
              <Link
                href="/"
                className="text-black hover:text-gray-600 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="text-black hover:text-gray-600 transition-colors duration-200"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-black hover:text-gray-600 transition-colors duration-200"
              >
                Courier Services
              </Link>
              <Link
                href="#"
                className="text-black hover:text-gray-600 transition-colors duration-200"
              >
                Payments
              </Link>
            </nav>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button className="bg-[#003366] hover:bg-[#002347] text-white rounded-full px-6">
              Contact Us
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden ml-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-black">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-black p-0">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col h-full py-4">
                  <Link
                    href="/"
                    className="text-lg font-semibold text-white px-6 py-4 hover:bg-gray-900 transition-colors"
                  >
                    HOME
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-lg font-semibold text-white px-6 py-4 hover:bg-gray-900 transition-colors"
                  >
                    PRICING
                  </Link>
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white px-6 py-4 hover:bg-gray-900 transition-colors"
                  >
                    COURIER SERVICES
                  </Link>
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white px-6 py-4 hover:bg-gray-900 transition-colors"
                  >
                    CONTACT
                  </Link>
                  <Link
                    href="#"
                    className="text-lg font-semibold text-white px-6 py-4 hover:bg-gray-900 transition-colors"
                  >
                    PAYMENTS
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}