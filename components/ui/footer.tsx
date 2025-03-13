import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">GET IN TOUCH</h2>
          <p className="text-gray-600">
            For any inquiries, please reach out via phone, text, or email. We&apos;re here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-600">
              You can reach us at <a href="mailto:info@JustLegalSolutions.org" className="text-blue-600">info@JustLegalSolutions.org</a>. We respond promptly to all inquiries.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-600">
              Contact us anytime Call or Text at <a href="tel:539-367-6832" className="text-blue-600">539-367-6832</a>. We&apos;re here and ready to assist you with all your needs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Payments</h3>
            <p className="text-gray-600">
              At this time, we accept electronic payments, cash, checks, or money orders. Payments should be made payable to Joseph Iannazzi and mailed to: 564 E 138th Pl, Glenpool, OK 74033. Please ensure that payment is made in full within 10 days of the invoice date.
            </p>
          </div>
        </div>

        <div className="text-center border-t pt-8">
          <p className="text-sm text-gray-600 mb-4">© 2025 Just Legal Solutions. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="/terms" className="text-gray-600 hover:text-blue-900">Terms and Conditions</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-blue-900">Privacy Policy</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-900">Pricing</Link>
            <Link href="/payments" className="text-gray-600 hover:text-blue-900">Payments</Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-900">FAQ</Link>
          </div>
          <p className="text-sm text-gray-600">
            Phone: 539-367-6832 | Email: info@justlegalsolutions.org
          </p>
        </div>
      </div>
    </footer>
  );
}