import { Metadata } from 'next';
import Hero from '@/components/ui/hero';
import Features from '@/components/ui/features';
import Testimonials from '@/components/ui/testimonials';
import CTA from '@/components/ui/cta';
import BusinessSchema from '@/components/BusinessSchema';
import FAQSchema from '@/components/FAQSchema';
import ServiceSchema from '@/components/ServiceSchema';

export const metadata: Metadata = {
  title: 'Just Legal Solutions - Oklahoma Process Server',
  description: 'Licensed and bonded process servers in Tulsa, Oklahoma. Offering same-day, rush, and standard legal document delivery. Call for a quote.',
};

export default function HomePage() {
  return (
    <>
      {/* Schema for SEO - Invisible to users */}
      <BusinessSchema />
      <FAQSchema />
      <ServiceSchema />

      {/* Main Page Content */}
      <Hero />
      <Features />
      <Testimonials />
      <CTA />

      {/* Hidden, SEO-rich content for search engines.
        Wrapped in a single div to prevent hydration errors.
      */}
      <div className="sr-only">
        <h1>Professional Process Server Tulsa County</h1>
        <h2>Same-Day Legal Document Delivery in Tulsa, Oklahoma</h2>
        <p>
          Just Legal Solutions is a premier, licensed, and bonded process serving agency in Tulsa, Oklahoma, providing reliable and professional legal support services across Tulsa County, Creek County, and Wagoner County. Our experienced process servers ensure your legal documents, including summons, subpoenas, divorce papers, and eviction notices, are delivered promptly and in accordance with all state laws. We offer same-day, rush, and standard service options to meet the urgent needs of law firms, businesses, and individuals. Our services include court document transfers, skip tracing to locate hard-to-find individuals, and electronic filing assistance. We are committed to providing detailed affidavits of service for every successful serve. Whether you need a process server in Broken Arrow, Sapulpa, Glenpool, Owasso, or anywhere in the Tulsa metro area, our team is ready to assist with efficiency and discretion. Contact us for a competitive quote and experience the best process serving in Oklahoma. We also specialize in serving documents for small claims court, child support cases, and restraining orders. Our local knowledge of the Tulsa area courts and procedures makes us the top choice for legal professionals.
        </p>
        <div>
          <h3>Our Legal Services in Oklahoma</h3>
          <ul>
            <li>Process Serving</li>
            <li>Same-Day Service</li>
            <li>Rush Service</li>
            <li>Skip Tracing</li>
            <li>Court Document Filing</li>
            <li>Legal Courier Services</li>
          </ul>
        </div>
        <div>
          <h3>Service Areas</h3>
          <p>Tulsa, Broken Arrow, Jenks, Bixby, Owasso, Sand Springs, Sapulpa, Glenpool, Catoosa, Collinsville, Skiatook, Coweta, Claremore.</p>
        </div>
      </div>
    </>
  );
}
