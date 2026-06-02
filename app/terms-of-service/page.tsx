import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  openGraph: {
    title: 'Terms of Service',
    description: 'Terms of service for Just Legal Solutions — Oklahoma process server and notary services. Service agreements, payment terms, and liability limitations.',
    url: 'https://justlegalsolutions.org/terms-of-service',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp',
      width: 1200,
      height: 630,
      alt: 'Just Legal Solutions — professional process serving in Oklahoma',
    }],
  },
  title: 'Terms of Service',
  description: 'Terms of service for Just Legal Solutions — Oklahoma process server and notary services. Service agreements, payment terms, and liability limitations.',
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service',
    description: 'Terms of service for Just Legal Solutions — Oklahoma process server and notary services. Service agreements, payment terms, and liability limitations.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp'],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/terms-of-service' },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'April 10, 2026';
  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Terms of Service"
        pageDescription="Terms of service for Just Legal Solutions — Oklahoma process server and notary services. Service agreements, payment terms, and liability limitations."
        pageUrl="https://justlegalsolutions.org/terms-of-service"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Terms of Service', url: '/terms-of-service' },
        ]}
      />
    <div className="min-h-screen bg-white font-sans">
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
          <p>
            These Terms of Service ("Terms") govern your use of the website justlegalsolutions.org and the process serving, notary, and related legal support services provided by Just Legal Solutions ("Company," "we," "us," or "our"). By using our Site or engaging our services, you agree to these Terms.
          </p>
          <p>
            <strong>If you do not agree to these Terms, do not use our Site or services.</strong>
          </p>

          <h2>1. Services Provided</h2>
          <p>Just Legal Solutions provides the following services in the State of Oklahoma:</p>
          <ul>
            <li>Process serving (personal service, substituted service, posting)</li>
            <li>Legal document delivery and courier services</li>
            <li>Skip tracing and defendant location services</li>
            <li>Notarization (in-office, mobile, and remote online)</li>
            <li>Court filing assistance (eFiling and in-person)</li>
          </ul>
          <p>
            Just Legal Solutions is licensed as a process server under <strong>12 O.S. § 158.1</strong>. We are <strong>not attorneys</strong> and do not provide legal advice, draft legal documents, or represent clients in any legal proceeding.
          </p>

          <h2>2. Service Agreements</h2>
          <h3>Client Responsibilities</h3>
          <ul>
            <li>You agree to provide accurate, complete, and current information for service, including the name and address of the party to be served.</li>
            <li>You represent that you have legal authority to request service of the documents provided.</li>
            <li>You are responsible for ensuring documents comply with applicable law before submission for service.</li>
          </ul>

          <h3>Our Responsibilities</h3>
          <ul>
            <li>We agree to make diligent efforts to complete service as instructed.</li>
            <li>We will provide a court-ready affidavit of service or non-service upon completion.</li>
            <li>All service attempts are GPS-tracked and time-stamped.</li>
          </ul>

          <h2>3. Pricing and Payment</h2>
          <ul>
            <li><strong>Standard service:</strong> Starts at $60 for Tulsa County and nearby areas. Surcharges apply for other counties and will be quoted upfront.</li>
            <li><strong>Rush service:</strong> Starts at $100 (attempt within 72 hours).</li>
            <li><strong>Same-day service:</strong> Starts at $150 (attempt within 24 hours, subject to availability).</li>
            <li><strong>Prepayment required</strong> for non-established clients. Established accounts may be invoiced net-30.</li>
            <li><strong>Late payment:</strong> A $40 late fee applies to overdue invoices, plus 0.5% per day on the outstanding balance until paid.</li>
          </ul>

          <h2>4. Cancellation and Refund Policy</h2>
          <ul>
            <li>Orders may be cancelled without charge before service attempts begin.</li>
            <li><strong>All fees are non-refundable once a service attempt has been made</strong>, regardless of whether service was successful.</li>
            <li>We charge for the <em>act of service</em>, not the outcome. Our fees compensate for the time, mileage, and professional effort expended on your behalf.</li>
            <li>Invalid addresses provided by the client do not constitute a failure of service by Just Legal Solutions. Re-service attempts required due to incorrect information will be billed separately.</li>
          </ul>

          <h2>5. Non-Service Policy</h2>
          <p>
            Despite diligent efforts, there may be circumstances where service cannot be completed (evasive respondent, incorrect address, etc.). In such cases:
          </p>
          <ul>
            <li>The standard service fee still applies once an attempt has been made.</li>
            <li>You will receive a non-service affidavit documenting our attempts.</li>
            <li>We will communicate any issues promptly and recommend alternatives (skip tracing, publication service, etc.).</li>
          </ul>

          <h2>6. Due Diligence</h2>
          <p>
            Our standard service includes a minimum of <strong>three service attempts</strong> at different times of day and on different days of the week. Additional attempts beyond this standard protocol require prior approval and are subject to additional fees.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law:
          </p>
          <ul>
            <li>Just Legal Solutions' total liability for any claim arising from our services shall not exceed the fees actually paid by the client for the specific service in question.</li>
            <li>We are not liable for consequential, indirect, incidental, special, or punitive damages arising from our services, including missed court deadlines caused by factors outside our control.</li>
            <li>We are not responsible for outcomes in your legal case based on the service we perform.</li>
          </ul>

          <h2>8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Just Legal Solutions and its employees from any claims, damages, or expenses (including attorney fees) arising from: (a) your breach of these Terms; (b) inaccurate or incomplete information you provide; or (c) your use of our services in violation of applicable law.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the <strong>State of Oklahoma</strong>. Any disputes arising from these Terms or our services shall be resolved in the state or federal courts located in <strong>Tulsa County, Oklahoma</strong>.
          </p>

          <h2>10. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised "Last updated" date. Continued use of our services after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>11. Contact Us</h2>
          <p>Questions about these Terms? Contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:info@JustLegalSolutions.org">info@JustLegalSolutions.org</a></li>
            <li><strong>Phone:</strong> <a href="tel:5393676832">(539) 367-6832</a></li>
            <li><strong>Address:</strong> 564 E 138th PL, Glenpool, OK 74033</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-200 py-8 px-4">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center text-sm text-gray-600">
          <p>© 2026 Just Legal Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
