import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Claremore Process Server | Reliable Process Serving in Claremore, OK',
  description: 'Need a licensed process server in Claremore, OK? We offer fast, affordable, and reliable service of process for all legal documents in Claremore and Rogers County.',
  keywords: ['Claremore process server', 'process server Claremore', 'process server in Claremore', 'Claremore ok processor', 'legal document delivery Claremore'],
};

export default function ClaremoreProcessServerPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of legal documents do you serve in Claremore, OK?",
        "acceptedAnswer": { "@type": "Answer", "text": "Our experienced Claremore process servers handle all types of legal documents, including summons, complaints, subpoenas, eviction notices, and family court papers. We ensure every service is performed according to Oklahoma state law." }
      },
      {
        "@type": "Question",
        "name": "How quickly can you serve documents in Claremore?",
        "acceptedAnswer": { "@type": "Answer", "text": "We offer multiple service levels in Claremore, including standard (3-5 days), rush (24-48 hours), and same-day service for urgent matters. Our local process servers in Claremore are ready to meet your deadlines." }
      },
      {
        "@type": "Question",
        "name": "What areas in Rogers County do you cover?",
        "acceptedAnswer": { "@type": "Answer", "text": "We serve all of Claremore and the entirety of Rogers County. Whether the service is in a dense urban area or a rural location, our servers are equipped to handle it." }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <JsonLd data={faqData} />
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Professional Process Server in Claremore, OK</h1>
        <p className="text-xl text-muted-foreground mb-6">Serving Claremore and greater <Link href="/seo/rogers-county-process-server" className="underline">Rogers County</Link>.</p>
        <div className="flex justify-center gap-4">
          <Button asChild><Link href="/pricing">View Pricing</Link></Button>
          <Button asChild variant="outline"><Link href="/contact">Contact Us</Link></Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Claremore Process Server?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card><CardHeader><CardTitle>Local Expertise</CardTitle></CardHeader><CardContent><p>Our process servers have extensive knowledge of Claremore, ensuring prompt and successful service.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>Speed and Efficiency</CardTitle></CardHeader><CardContent><p>We offer rush and same-day services in Claremore to meet your tight deadlines.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>Proof of Service</CardTitle></CardHeader><CardContent><p>You will receive a notarized affidavit of service promptly after completion for your records and court filings.</p></CardContent></Card>
        </div>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8 mb-12 items-start">
        <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Rogers County Courthouse</h3>
            {courtInfo ? (
                <>
                    <p>{courtInfo.address}</p>
                    <p>{courtInfo.phone}</p>
                    <Button asChild variant="link" className="px-0"><a href={courtInfo.website} target="_blank" rel="noopener noreferrer">Visit Court Website</a></Button>
                </>
            ) : <p>Courthouse information coming soon.</p>}
        </div>
        <div><iframe width="100%" height="450" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://maps.google.com/maps?q=Claremore+OK&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe></div>
      </section>

      <section id="faq" className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions for Claremore Process Serving</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.mainEntity.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger>{faq.name}</AccordionTrigger>
              <AccordionContent>{faq.acceptedAnswer.text}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
          <p className="mb-6">Ready to have your legal documents served in Claremore? Contact us now for a free quote.</p>
          <Button asChild size="lg"><Link href="/contact">Contact a Claremore Process Server</Link></Button>
      </section>
    </div>
  );
}