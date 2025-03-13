import Link from 'next/link';
import { Button } from './button';

export function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            JLS
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/#courier-services" className="text-gray-600 hover:text-gray-900">
              Courier Services
            </Link>
            <Link href="/payments" className="text-gray-600 hover:text-gray-900">
              Payments
            </Link>
          </div>

          <Button asChild className="bg-blue-900 hover:bg-blue-800">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}