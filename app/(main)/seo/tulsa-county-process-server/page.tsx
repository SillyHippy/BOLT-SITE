import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Tulsa County Process Server | Serving All of Tulsa County, OK',
  description: 'Professional process server for all cities in Tulsa County, OK. We provide reliable and fast service of process for attorneys, businesses, and individuals.',
  keywords: ['Tulsa county process server', 'process server Tulsa county', 'oklahoma process server Tulsa county'],
};

export default function TulsaCountyProcessServerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tulsa County Process Server</h1>
        <p className="text-xl text-muted-foreground mb-6">Your trusted partner for legal document delivery throughout Tulsa County, Oklahoma.</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Complete Coverage of Tulsa County</h2>
          <p className="mb-4">We serve every city, town, and rural area within Tulsa County. Our local process servers have the expertise to ensure your legal documents are served quickly and according to all legal requirements.</p>
          <Button asChild><Link href="/contact">Request Service in Tulsa County</Link></Button>
        </div>
        <Card>
          <CardHeader><CardTitle>Cities We Serve in Tulsa County</CardTitle></CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 grid grid-cols-2 gap-2">
              <li><Link href="/seo/tulsa-process-server" className="underline">Tulsa</Link></li><li><Link href="/seo/broken-arrow-process-server" className="underline">Broken Arrow</Link></li><li><Link href="/seo/jenks-process-server" className="underline">Jenks</Link></li><li><Link href="/seo/bixby-process-server" className="underline">Bixby</Link></li><li><Link href="/seo/owasso-process-server" className="underline">Owasso</Link></li><li><Link href="/seo/sand-springs-process-server" className="underline">Sand Springs</Link></li><li><Link href="/seo/glenpool-process-server" className="underline">Glenpool</Link></li><li><Link href="/seo/collinsville-process-server" className="underline">Collinsville</Link></li><li><Link href="/seo/skiatook-process-server" className="underline">Skiatook</Link></li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {courtInfo && (
        <section className="bg-gray-50 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Tulsa County Courthouse</h3>
          <p>{courtInfo.address}</p>
          <p>{courtInfo.phone}</p>
          <Button asChild variant="link"><a href={courtInfo.website} target="_blank" rel="noopener noreferrer">Visit Court Website</a></Button>
        </section>
      )}
    </div>
  );
}