import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Kay County Process Server | Serving All of Kay County, OK',
  description: 'Professional process server for all cities in Kay County, OK. We provide reliable and fast service of process for attorneys, businesses, and individuals.',
  keywords: ['Kay county process server', 'process server Kay county', 'oklahoma process server Kay county'],
};

export default function KayCountyProcessServerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Kay County Process Server</h1>
        <p className="text-xl text-muted-foreground mb-6">Your trusted partner for legal document delivery throughout Kay County, Oklahoma.</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Complete Coverage of Kay County</h2>
          <p className="mb-4">We serve every city, town, and rural area within Kay County. Our local process servers have the expertise to ensure your legal documents are served quickly and according to all legal requirements.</p>
          <Button asChild><Link href="/contact">Request Service in Kay County</Link></Button>
        </div>
        <Card>
          <CardHeader><CardTitle>Cities We Serve in Kay County</CardTitle></CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 grid grid-cols-2 gap-2">
              <li><Link href="/seo/ponca-city-process-server" className="underline">Ponca City</Link></li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {courtInfo && (
        <section className="bg-gray-50 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Kay County Courthouse</h3>
          <p>{courtInfo.address}</p>
          <p>{courtInfo.phone}</p>
          <Button asChild variant="link"><a href={courtInfo.website} target="_blank" rel="noopener noreferrer">Visit Court Website</a></Button>
        </section>
      )}
    </div>
  );
}