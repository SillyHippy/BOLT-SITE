import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Just Legal Solutions',
  description: 'Privacy policy for Just Legal Solutions — Oklahoma process server and notary services. How we collect, use, and protect your information.',
  alternates: { canonical: 'https://justlegalsolutions.org/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'April 10, 2026';
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
          <p>
            Just Legal Solutions ("Company," "we," "us," or "our") operates the website{' '}
            <a href="https://justlegalsolutions.org">justlegalsolutions.org</a> (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site or use our services.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>Information You Provide Directly</h3>
          <ul>
            <li><strong>Contact forms:</strong> Name, email address, phone number, and message content when you submit a quote request or contact form.</li>
            <li><strong>Service requests:</strong> Names and addresses of parties to be served (required to perform legal services).</li>
            <li><strong>Payment information:</strong> Payment is processed by third-party processors (Square, Stripe, etc.). We do not store credit card numbers on our servers.</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li><strong>Log files:</strong> IP address, browser type, pages visited, time and date of visits, referring URLs.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device. We use cookies for site functionality and analytics.</li>
            <li><strong>Analytics:</strong> We use Google Analytics and Microsoft Clarity to understand how visitors use our Site. This data is anonymized and aggregated.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain our process serving and notary services</li>
            <li>Respond to your inquiries and fulfill your service requests</li>
            <li>Send service updates, invoices, and affidavits of service</li>
            <li>Improve our website and services based on how you use them</li>
            <li>Comply with legal obligations (including maintaining service records required by Oklahoma law)</li>
            <li>Protect against fraud and unauthorized use</li>
          </ul>

          <h2>3. Legal Basis for Processing (Where Applicable)</h2>
          <p>We process your information based on:</p>
          <ul>
            <li><strong>Contract performance:</strong> To fulfill the process serving services you hire us to perform.</li>
            <li><strong>Legitimate interests:</strong> To improve our services and communicate with current and prospective clients.</li>
            <li><strong>Legal obligation:</strong> Oklahoma process servers are required by law (12 O.S. § 158.1) to maintain records of service.</li>
            <li><strong>Consent:</strong> For marketing communications, where required.</li>
          </ul>

          <h2>4. Information Sharing and Disclosure</h2>
          <p>We do <strong>not</strong> sell, trade, or rent your personal information. We may share information with:</p>
          <ul>
            <li><strong>Service providers:</strong> Third-party vendors that help us operate our business (payment processors, email services, hosting providers). These vendors are contractually required to keep your information confidential.</li>
            <li><strong>Courts and legal authorities:</strong> When we file affidavits of service with courts, your case information becomes part of the public court record.</li>
            <li><strong>Law enforcement:</strong> When required by law, court order, or to protect our legal rights.</li>
          </ul>

          <h2>5. Cookies and Tracking Technologies</h2>
          <p>We use the following cookies and tracking tools:</p>
          <ul>
            <li><strong>Google Analytics:</strong> Traffic analysis and user behavior. <a href="https://tools.google.com/dlpage/gaoptout" rel="nofollow noopener">Opt out here.</a></li>
            <li><strong>Microsoft Clarity:</strong> Session recording and heatmaps for UX improvement.</li>
            <li><strong>Essential cookies:</strong> Required for the Site to function properly (cannot be disabled).</li>
          </ul>
          <p>You can control cookie settings through your browser. Disabling cookies may affect certain Site functionality.</p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Service records (including affidavits of service) may be retained for up to 7 years as required by Oklahoma law.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to our legal obligations)</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p>To exercise these rights, contact us at <a href="mailto:info@justlegalsolutions.org">info@justlegalsolutions.org</a>.</p>

          <h2>8. Security</h2>
          <p>
            We implement industry-standard security measures including SSL/TLS encryption, access controls, and regular security reviews. However, no method of electronic transmission is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            Our Site may contain links to third-party websites (court systems, legal resources, etc.). We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies.
          </p>

          <h2>10. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. The "Last updated" date at the top of this page indicates when it was last revised. Continued use of our Site after changes constitutes acceptance of the updated policy.
          </p>

          <h2>12. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:info@justlegalsolutions.org">info@justlegalsolutions.org</a></li>
            <li><strong>Phone:</strong> <a href="tel:5393676832">(539) 367-6832</a></li>
            <li><strong>Address:</strong> 564 E 138th PL, Glenpool, OK 74033</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-200 py-8 px-4">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center text-sm text-gray-600">
          <p>© 2026 Just Legal Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms-of-service" className="hover:text-blue-600">Terms of Service</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
