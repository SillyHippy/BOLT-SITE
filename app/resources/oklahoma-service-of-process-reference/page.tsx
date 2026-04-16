import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  FileText, 
  Scale, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Download,
  Briefcase,
  User,
  Gavel,
  BookOpen,
  Shield,
  MapPin,
  Calendar,
  ChevronRight,
  Printer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
    alternates: {
    canonical: 'https://justlegalsolutions.org/resources/oklahoma-service-of-process-reference',
  },
title: 'Oklahoma Service of Process Quick Reference Card | Free PDF Download',
  description: 'Free downloadable quick reference card for Oklahoma service of process. Includes key statutes (12 O.S. § 2004, § 158.1), service methods, deadlines, and prohibited activities. Perfect for process servers, attorneys, and paralegals.',
  keywords: 'Oklahoma service of process, process server reference card, 12 O.S. 2004, service of process statutes, Oklahoma process serving laws, legal document service reference',
  openGraph: {
    title: 'Oklahoma Service of Process Quick Reference Card | Free PDF Download',
    description: 'Pocket-sized reference guide with Oklahoma service of process statutes, methods, deadlines, and prohibited activities. Free download for legal professionals.',
    type: 'article',
    authors: ['Joseph Iannazzi'],
    publishedTime: '2024-01-15',
    modifiedTime: '2024-01-15',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://justlegalsolutions.org/resources/oklahoma-service-of-process-reference/#article',
      headline: 'Oklahoma Service of Process Quick Reference Card',
      description: 'Free downloadable pocket reference guide covering Oklahoma service of process statutes, methods, deadlines, and prohibited activities for legal professionals.',
      author: {
        '@type': 'Person',
        name: 'Joseph Iannazzi',
        url: 'https://justlegalsolutions.org/about',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Just Legal Solutions',
        logo: {
          '@type': 'ImageObject',
          url: 'https://justlegalsolutions.org/logo.png',
        },
      },
      datePublished: '2024-01-15',
      dateModified: '2024-01-15',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://justlegalsolutions.org/resources/oklahoma-service-of-process-reference/',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Oklahoma Service of Process Quick Reference Card',
      applicationCategory: 'Reference',
      operatingSystem: 'PDF',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '127',
      },
    },
  ],
};

const whatsIncluded = [
  {
    icon: <Scale className="w-6 h-6 text-primary" />,
    title: 'Key Oklahoma Statutes',
    description: 'Essential statutory references including 12 O.S. § 2004 (Service of Process) and 12 O.S. § 158.1 (Alternative Service), with section numbers for quick court citation.',
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: 'Service Methods',
    description: 'Complete breakdown of all approved service methods: personal service, substituted service, service by mail, publication service, and alternative methods.',
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: 'Critical Deadlines',
    description: 'Time-sensitive deadlines for service completion, return filing, and proof of service requirements to keep your cases on track.',
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-primary" />,
    title: 'Prohibited Activities',
    description: 'Clear list of actions that can invalidate service or result in legal consequences, including trespassing rules and service restrictions.',
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: 'Proof of Service Requirements',
    description: 'Documentation standards for affidavits, return of service forms, and evidence requirements for different service methods.',
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: 'Geographic Guidelines',
    description: 'Jurisdiction-specific rules for serving documents across Oklahoma county lines and out-of-state service procedures.',
  },
];

const targetAudience = [
  {
    role: 'Licensed Process Servers',
    description: 'Stay compliant in the field with instant access to statutory requirements and service rules.',
    icon: <User className="w-8 h-8 text-primary" />,
  },
  {
    role: 'Attorneys & Law Firms',
    description: 'Quick reference for advising clients and reviewing service documentation for court acceptance.',
    icon: <Briefcase className="w-8 h-8 text-primary" />,
  },
  {
    role: 'Paralegals & Legal Staff',
    description: 'Essential tool for preparing service instructions and verifying completed service attempts.',
    icon: <FileText className="w-8 h-8 text-primary" />,
  },
  {
    role: 'Legal Assistants',
    description: 'Quick lookup for common service questions and procedural requirements.',
    icon: <BookOpen className="w-8 h-8 text-primary" />,
  },
];

const fieldUsageTips = [
  {
    title: 'Print & Laminate',
    description: 'Print the reference card on cardstock and laminate it for durability during fieldwork.',
  },
  {
    title: 'Keep in Your Vehicle',
    description: 'Store a copy in your glove compartment for quick access during service attempts.',
  },
  {
    title: 'Bookmark Key Sections',
    description: 'Use colored tabs to mark frequently referenced statutes and deadlines.',
  },
  {
    title: 'Digital Backup',
    description: 'Save the PDF to your smartphone for access even when you don\'t have the printed version.',
  },
  {
    title: 'Review Regularly',
    description: 'Refresh your knowledge by reviewing the card monthly to stay current with procedures.',
  },
  {
    title: 'Share with Clients',
    description: 'Provide copies to attorney clients to help them understand service requirements.',
  },
];

const keyStatutes = [
  {
    citation: '12 O.S. § 2004',
    title: 'Service of Process - General Provisions',
    summary: 'Governs the basic requirements for serving process in Oklahoma civil cases, including who may serve and general procedures.',
  },
  {
    citation: '12 O.S. § 158.1',
    title: 'Alternative Service Methods',
    summary: 'Outlines circumstances and procedures for alternative service when personal service is not possible.',
  },
  {
    citation: '12 O.S. § 2004.1',
    title: 'Service by Certified Mail',
    summary: 'Specific requirements for serving documents via certified mail with return receipt requested.',
  },
  {
    citation: '12 O.S. § 2004.2',
    title: 'Service by Publication',
    summary: 'Procedures for publication service when defendant cannot be located through reasonable diligence.',
  },
];

const relatedResources = [
  {
    title: 'Oklahoma Process Server Forms & Templates',
    description: 'Downloadable return of service forms, affidavit templates, and service logs.',
    href: '/resources/oklahoma-process-server-forms-templates/',
  },
  {
    title: 'Process Server Equipment Checklist',
    description: 'Complete guide to essential gear for Oklahoma process servers.',
    href: '/resources/process-server-equipment-checklist/',
  },
  {
    title: 'Process Server Safety Guide',
    description: 'Safety protocols and best practices for field service work.',
    href: '/resources/process-server-safety-guide-oklahoma/',
  },
  {
    title: 'Become a Process Server in Oklahoma',
    description: 'Step-by-step guide to getting licensed in Oklahoma.',
    href: '/resources/become-process-server-oklahoma-complete-guide/',
  },
];

export default function OklahomaServiceOfProcessReference() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Free PDF Download
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Oklahoma Service of Process<br />Quick Reference Card
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your pocket-sized guide to Oklahoma service of process laws. Instant access to key statutes, service methods, deadlines, and prohibited activities—wherever your work takes you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/downloads/oklahoma-service-of-process-reference-card.pdf" target="_blank">
                  <Download className="w-5 h-5 mr-2" />
                  Download Free PDF
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/contact">
                  Contact Our Team
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Created by <Link href="/about" className="text-primary hover:underline">Joseph Iannazzi</Link>, Licensed Oklahoma Process Server (Licensed)
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                When you're in the field serving legal documents, you don't have time to search through statute books or legal databases. You need answers at your fingertips—fast, accurate, and reliable. That's exactly what the <strong>Oklahoma Service of Process Quick Reference Card</strong> delivers.
              </p>
              <p className="text-lg leading-relaxed">
                This professionally designed, pocket-sized reference card puts Oklahoma's essential service of process statutes right in your hand. Whether you're a seasoned process server, an attorney reviewing service documentation, or a paralegal preparing case files, this card ensures you always have the critical information you need.
              </p>
              <p className="text-lg leading-relaxed">
                At <Link href="/" className="text-primary hover:underline">Just Legal Solutions</Link>, we've distilled decades of field experience into this convenient reference tool. Every statute, deadline, and requirement has been carefully verified and organized for maximum utility in real-world situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This comprehensive reference card covers everything you need to know about Oklahoma service of process in a compact, easy-to-read format.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatsIncluded.map((item, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      {item.icon}
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Statutes Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Gavel className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Oklahoma Statutes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The reference card includes these essential Oklahoma statutes governing service of process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {keyStatutes.map((statute, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <Badge className="w-fit mb-2">{statute.citation}</Badge>
                    <CardTitle className="text-lg">{statute.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{statute.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Important Legal Notice</h4>
                  <p className="text-amber-700">
                    This reference card is provided for informational purposes only and does not constitute legal advice. Statutes are subject to change. Always verify current law through official sources or consult with an attorney for specific legal questions. Last updated January 2024.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <User className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who This Reference Card Is For</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This quick reference tool is designed for anyone involved in Oklahoma legal document service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {targetAudience.map((audience, index) => (
                <Card key={index} className="flex flex-col">
                  <CardContent className="pt-6 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        {audience.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{audience.role}</h3>
                        <p className="text-muted-foreground">{audience.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pocket-Sized Format Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Printer className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pocket-Sized Reference Format</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Designed for real-world use in the field. Print it, laminate it, and keep it with you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Compact Size</h3>
                  <p className="text-muted-foreground">Designed to print on standard letter paper and fold to fit in your pocket or clipboard.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Easy to Read</h3>
                  <p className="text-muted-foreground">Clear typography and organized layout make information easy to find at a glance.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Laminate Ready</h3>
                  <p className="text-muted-foreground">Print on cardstock and laminate for durability in all weather conditions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use in the Field */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Use It in the Field</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Maximize the value of your reference card with these practical tips from experienced process servers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fieldUsageTips.map((tip, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary text-sm">{index + 1}</span>
                      </div>
                      <h3 className="font-semibold">{tip.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Download className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Download Your Free Reference Card
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get instant access to the Oklahoma Service of Process Quick Reference Card. No email required. No strings attached.
            </p>
            
            <div className="bg-primary-foreground/10 rounded-lg p-6 mb-8">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>PDF Format</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Print-Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free Download</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Updated 2024</span>
                </div>
              </div>
            </div>

            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/downloads/oklahoma-service-of-process-reference-card.pdf" target="_blank">
                <Download className="w-5 h-5 mr-2" />
                Download Free PDF Now
              </Link>
            </Button>

            <p className="mt-6 text-sm opacity-75">
              File size: 245 KB • Format: PDF • Compatible with all devices
            </p>
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Instructions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Printer className="w-5 h-5" />
                    Printing Instructions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">1.</span>
                      <span>Download the PDF file using the button above</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">2.</span>
                      <span>Open in Adobe Acrobat Reader or your preferred PDF viewer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">3.</span>
                      <span>Select "Print" and choose "Actual Size" or "100%" scaling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">4.</span>
                      <span>Print on cardstock (110 lb recommended) for durability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">5.</span>
                      <span>Take to a copy shop for lamination (3-5 mil recommended)</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Digital Usage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Save to your smartphone for offline access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Store in cloud storage (Google Drive, Dropbox, iCloud)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Email to colleagues and team members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Bookmark on your tablet for quick reference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Share with attorney clients as a value-add</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Resources</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore more free resources for Oklahoma process servers and legal professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Link href={resource.href} className="group">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{resource.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Professional Process Serving?</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Just Legal Solutions provides reliable, professional process serving throughout Oklahoma. With over 50 years of combined experience, we ensure your documents are served correctly and on time.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild>
                      <Link href="/contact">
                        Request Service
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/services">
                        View Our Services
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-6 text-sm text-muted-foreground">
                    <p>Licensed Oklahoma Process Server: Licensed</p>
                    <p>Call: <a href="tel:539-367-6832" className="text-primary hover:underline">(539) 367-6832</a></p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
            <p className="mb-2">
              © {new Date().getFullYear()} Just Legal Solutions. All rights reserved.
            </p>
            <p>
              This reference card is provided as a free educational resource. 
              <Link href="/privacy" className="text-primary hover:underline ml-1">Privacy Policy</Link> | 
              <Link href="/terms" className="text-primary hover:underline ml-1">Terms of Use</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
