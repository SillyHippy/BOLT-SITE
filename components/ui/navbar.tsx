
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const updateScrolledState = () => {
      setHasScrolled(window.scrollY > 8);
    };

    updateScrolledState();
    window.addEventListener('scroll', updateScrolledState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolledState);
  }, []);

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleCourierServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== '/') {
      router.push('/#courier-services');
    } else {
      document.getElementById('courier-services')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClass = (active: boolean) =>
    `ui-nav-link ${active ? 'ui-nav-link-active' : ''}`;
  const mobileNavLinkClass = (active: boolean) =>
    `ui-nav-link ui-mobile-nav-link ${active ? 'ui-nav-link-active ui-mobile-nav-link-active' : ''}`;

  return (
    <nav
      className={`ui-glass-nav ui-mobile-safe-top fixed left-0 right-0 top-0 z-40 ${hasScrolled ? 'ui-glass-nav-scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center rounded-lg px-1 py-1 transition hover:bg-white/70">
            <Image 
              src="/favicon1.svg" 
              alt="Just Legal Solutions \u2014 Oklahoma process server and notary" 
              width={60} 
              height={60}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={navLinkClass(pathname === '/')} aria-current={pathname === '/' ? 'page' : undefined} prefetch={false}>
              Home
            </Link>
            <Link href="/process-serving" className={navLinkClass(pathname === '/process-serving')} aria-current={pathname === '/process-serving' ? 'page' : undefined} prefetch={false}>
              Process Serving
            </Link>
            <Link href="/pricing" className={navLinkClass(pathname === '/pricing')} aria-current={pathname === '/pricing' ? 'page' : undefined} prefetch={false}>
              Pricing
            </Link>
            <Link href="/notary" className={navLinkClass(!!pathname?.startsWith('/notary'))} aria-current={pathname?.startsWith('/notary') ? 'page' : undefined} prefetch={false}>
              Notary Services
            </Link>
            <Link href="/service-areas" className={navLinkClass(!!pathname?.startsWith('/service-areas'))} aria-current={pathname?.startsWith('/service-areas') ? 'page' : undefined} prefetch={false}>
              Service Areas
            </Link>
            <Link href="/virtual-assistant-services" className={navLinkClass(pathname === '/virtual-assistant-services')} aria-current={pathname === '/virtual-assistant-services' ? 'page' : undefined} prefetch={false}>
              VA Services
            </Link>
            <Link 
              href="/#courier-services" 
              className={navLinkClass(false) + ' cursor-pointer'}
              onClick={handleCourierServicesClick}
            >
              Courier Services
            </Link>
            <Link href="/law-firm-services" className={navLinkClass(pathname === '/law-firm-services')} aria-current={pathname === '/law-firm-services' ? 'page' : undefined} prefetch={false}>
              Law Firm Services
            </Link>
            <Link href="/payments" className={navLinkClass(pathname === '/payments')} aria-current={pathname === '/payments' ? 'page' : undefined} prefetch={false}>
              Payments
            </Link>
          </div>

          {/* Contact Us Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={scrollToFooter}
              className="ui-btn-primary"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="rounded-lg p-2 text-gray-600 transition hover:bg-slate-100 hover:text-gray-900 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className={`ui-mobile-safe-panel fixed top-0 right-0 bottom-0 w-[270px] bg-white border-l border-slate-300 shadow-xl transform transition-all duration-300 ease-in-out z-50 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-900">Menu</div>
            <button
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          {/* ⚡ Bolt Optimization: Disabled prefetching for mobile menu links
              to prevent downloading all route payloads simultaneously when the
              menu opens. Expected impact: Reduces unnecessary background network
              requests on mobile devices when the menu is opened. */}
          <div className="flex flex-col gap-1 px-3 py-4">
            <Link
              href="/"
              className={mobileNavLinkClass(pathname === '/')}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={pathname === '/' ? 'page' : undefined}
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/process-serving"
              className={mobileNavLinkClass(pathname === '/process-serving')}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={pathname === '/process-serving' ? 'page' : undefined}
              prefetch={false}
            >
              Process Serving
            </Link>
            <Link
              href="/pricing"
              className={mobileNavLinkClass(pathname === '/pricing')}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={pathname === '/pricing' ? 'page' : undefined}
              prefetch={false}
            >
              Pricing
            </Link>
            <Link
              href="/notary"
              className={mobileNavLinkClass(!!pathname?.startsWith('/notary'))}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={pathname?.startsWith('/notary') ? 'page' : undefined}
              prefetch={false}
            >
              Notary Services
            </Link>
            <Link
              href="/service-areas"
              className={mobileNavLinkClass(!!pathname?.startsWith('/service-areas'))}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={pathname?.startsWith('/service-areas') ? 'page' : undefined}
              prefetch={false}
            >
              Service Areas
            </Link>
            <Link
              href="/virtual-assistant-services"
              className={mobileNavLinkClass(pathname === '/virtual-assistant-services')}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={pathname === '/virtual-assistant-services' ? 'page' : undefined}
              prefetch={false}
            >
              VA Services
            </Link>
            <Link
              href="/#courier-services"
              className="ui-nav-link ui-mobile-nav-link cursor-pointer"
              onClick={handleCourierServicesClick}
            >
              Courier Services
            </Link>
            <Link
              href="/law-firm-services"
              className={mobileNavLinkClass(pathname === '/law-firm-services')}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={pathname === '/law-firm-services' ? 'page' : undefined}
              prefetch={false}
            >
              Law Firm Services
            </Link>
            <Link
              href="/payments"
              className={mobileNavLinkClass(pathname === '/payments')}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={pathname === '/payments' ? 'page' : undefined}
              prefetch={false}
            >
              Payments
            </Link>
            <button
              onClick={scrollToFooter}
              className="ui-btn-primary mt-2 w-full"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-slate-900/45 backdrop-blur-[1px] z-40 md:hidden"
            onClick={toggleMobileMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  );
}

// Default export for compatibility
export default Navbar;
