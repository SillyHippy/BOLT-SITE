import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Camera, 
  Car, 
  Smartphone, 
  FileText, 
  Shield, 
  Briefcase, 
  Laptop, 
  MapPin,
  CheckCircle,
  DollarSign,
  ShoppingCart,
  AlertTriangle,
  Printer,
  ClipboardList,
  Clock,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    alternates: {
    canonical: 'https://justlegalsolutions.org/process-server-equipment-checklist',
  },
title: 'Process Server Equipment Checklist | Complete Starter Kit Guide',
  description: 'Complete process server equipment checklist covering essential gear, vehicle setup, technology, safety equipment, and budget breakdown. Downloadable starter kit guide for Oklahoma process servers.',
  keywords: 'process server equipment, what do process servers need, process server starter kit, process server supplies, legal document delivery equipment',
  openGraph: {
    title: 'Process Server Equipment Checklist | Complete Starter Kit Guide',
    description: 'Essential equipment guide for process servers in Oklahoma. Vehicle setup, technology, safety gear, and budget breakdown.',
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
      '@id': 'https://justlegalsolutions.org/process-server-equipment-checklist/#article',
      headline: 'Process Server Equipment Checklist: Complete Starter Kit Guide',
      description: 'Comprehensive equipment guide for process servers covering essential gear, vehicle setup, technology, safety equipment, and budget breakdown.',
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
        '@id': 'https://justlegalsolutions.org/process-server-equipment-checklist/',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://justlegalsolutions.org/process-server-equipment-checklist/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What equipment do I need to start as a process server in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To start as a process server in Oklahoma, you need: reliable transportation, smartphone with GPS, digital camera, printer/scanner, professional attire, documentation supplies (return of service forms, affidavit templates), and basic safety equipment. A starter kit typically costs $500-$1,500 depending on equipment quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much should I budget for process server equipment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Budget $500-$1,500 for a basic starter kit, $2,000-$4,000 for a professional setup, or $5,000+ for a premium outfit. Essential items include vehicle expenses, technology (phone, camera, GPS), documentation supplies, safety equipment, and professional attire.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a special vehicle to be a process server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No special vehicle is required, but you need reliable transportation with good fuel efficiency, working air conditioning (Oklahoma summers), and adequate storage for supplies. Many successful process servers use standard sedans or compact SUVs.',
          },
        },
        {
          '@type': 'Question',
          name: 'What camera do process servers use for proof of service?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Process servers typically use smartphones with quality cameras (12MP+) or dedicated digital cameras. Key features include timestamp capability, GPS geotagging, good low-light performance, and sufficient storage. Many use apps like Timestamp Camera or GPS Map Camera for automatic documentation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What safety equipment should process servers carry?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Essential safety equipment includes pepper spray (where legal), personal alarm, first aid kit, flashlight, reflective vest for night service, and a charged power bank. Some servers also carry body cameras and maintain regular check-in protocols with family or colleagues.',
          },
        },
        {
          '@type': 'Question',
          name: 'What apps do professional process servers use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Professional process servers use GPS/navigation apps (Google Maps, Waze), timestamp camera apps, document scanning apps (Adobe Scan, CamScanner), note-taking apps, mileage tracking apps (MileIQ, Everlance), and sometimes specialized process server software for case management.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I buy process server equipment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Process server equipment is available at office supply stores (Staples, Office Depot), electronics retailers (Best Buy, Amazon), specialized legal supply companies, automotive stores, and online marketplaces. Many items like cameras and phones can be purchased at standard retail outlets.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is body camera equipment necessary for process serving?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Body cameras are not legally required in Oklahoma but are increasingly recommended. They provide video evidence of service attempts, protect against false allegations, and can be valuable in court proceedings. Quality body cameras range from $100-$400.',
          },
        },
      ],
    },
  ],
};

const essentialEquipment = [
  {
    category: 'Core Documentation',
    items: [
      'Return of Service forms (printed and digital templates)',
      'Affidavit of Service templates',
      'Non-Service report forms',
      'Proof of service stamps/seals',
      'Legal-size clipboard with storage',
      'Pens (multiple, reliable brands)',
      'Permanent markers for labeling',
      'Document folders and organizers',
    ],
  },
  {
    category: 'Technology Essentials',
    items: [
      'Smartphone with reliable service',
      'Digital camera or quality phone camera',
      'GPS device or GPS-enabled phone',
      'Portable phone charger/power bank',
      'Car charger for devices',
      'Document scanning app subscription',
      'Timestamp camera app',
      'Cloud storage for document backup',
    ],
  },
  {
    category: 'Vehicle Equipment',
    items: [
      'Reliable vehicle with maintenance records',
      'Phone mount for hands-free navigation',
      'Dash cam for documentation',
      'Emergency roadside kit',
      'Jumper cables or portable jump starter',
      'Tire pressure gauge and inflator',
      'Spare tire in good condition',
      'Fuel efficiency tracking system',
    ],
  },
];

const safetyEquipment = [
  {
    item: 'Pepper Spray',
    description: 'Legal self-defense option (check local regulations)',
    priority: 'High',
  },
  {
    item: 'Personal Alarm',
    description: 'Loud alarm to deter threats and attract attention',
    priority: 'High',
  },
  {
    item: 'First Aid Kit',
    description: 'Basic medical supplies for emergencies',
    priority: 'High',
  },
  {
    item: 'Flashlight',
    description: 'LED flashlight with extra batteries',
    priority: 'High',
  },
  {
    item: 'Reflective Safety Vest',
    description: 'For night service and roadside safety',
    priority: 'Medium',
  },
  {
    item: 'Body Camera',
    description: 'Video documentation of all interactions',
    priority: 'Medium',
  },
  {
    item: 'Emergency Contact System',
    description: 'Check-in protocol with family or colleagues',
    priority: 'High',
  },
  {
    item: 'Door Wedge/Door Stop',
    description: 'Prevents doors from closing during service',
    priority: 'Low',
  },
];

const professionalAttire = [
  {
    category: 'Clothing',
    items: [
      'Business casual attire (slacks, polo shirts, blouses)',
      'Professional closed-toe shoes',
      'Weather-appropriate outerwear',
      'Clean, pressed clothing for court appearances',
      'Neutral colors (avoid bright or distracting patterns)',
    ],
  },
  {
    category: 'Accessories',
    items: [
      'Professional bag or briefcase',
      'ID badge holder with CLEET license',
      'Watch for accurate timestamping',
      'Sunglasses for outdoor service',
      'Weather-appropriate gear (umbrella, hat)',
    ],
  },
];

const officeEquipment = [
  {
    item: 'Computer or Laptop',
    description: 'For document preparation and case management',
    essential: true,
  },
  {
    item: 'Printer/Scanner',
    description: 'For printing forms and scanning completed documents',
    essential: true,
  },
  {
    item: 'Filing System',
    description: 'Physical and digital organization for case files',
    essential: true,
  },
  {
    item: 'Shredder',
    description: 'For secure disposal of sensitive documents',
    essential: false,
  },
  {
    item: 'Dedicated Phone Line',
    description: 'Business phone separate from personal line',
    essential: false,
  },
  {
    item: 'Backup Storage',
    description: 'External hard drive or cloud storage subscription',
    essential: true,
  },
];

const budgetBreakdown = [
  {
    level: 'Starter Kit',
    range: '$500 - $1,500',
    description: 'Basic equipment to begin process serving',
    items: [
      'Used smartphone or basic camera: $100-300',
      'Basic documentation supplies: $50-100',
      'Professional attire basics: $100-200',
      'Safety equipment essentials: $50-100',
      'Office supplies and printer: $200-300',
      'Miscellaneous supplies: $50-150',
    ],
  },
  {
    level: 'Professional Setup',
    range: '$2,000 - $4,000',
    description: 'Comprehensive equipment for serious professionals',
    items: [
      'Quality smartphone with good camera: $400-800',
      'Dedicated digital camera: $200-500',
      'Dash cam system: $100-300',
      'Complete documentation system: $200-400',
      'Professional wardrobe: $300-600',
      'Advanced safety equipment: $200-400',
      'Office equipment and software: $400-600',
      'Vehicle accessories and maintenance: $200-400',
    ],
  },
  {
    level: 'Premium Outfit',
    range: '$5,000+',
    description: 'Top-tier equipment for established professionals',
    items: [
      'Latest smartphone with premium camera: $800-1,200',
      'Professional DSLR camera: $500-1,500',
      'Body camera system: $300-600',
      'Premium dash cam with cloud storage: $300-500',
      'Complete professional wardrobe: $500-1,000',
      'Advanced safety and security systems: $400-800',
      'Professional office setup: $800-1,500',
      'Vehicle upgrades and equipment: $500-1,000',
    ],
  },
];

const whereToBuy = [
  {
    category: 'Office Supplies',
    stores: ['Staples', 'Office Depot', 'Amazon', 'Walmart'],
    items: 'Documentation supplies, printers, filing systems',
  },
  {
    category: 'Electronics',
    stores: ['Best Buy', 'Amazon', 'B&H Photo', 'Newegg'],
    items: 'Cameras, phones, dash cams, body cameras',
  },
  {
    category: 'Automotive',
    stores: ['AutoZone', 'O\'Reilly', 'Advance Auto Parts', 'Amazon'],
    items: 'Vehicle accessories, emergency kits, maintenance supplies',
  },
  {
    category: 'Safety Equipment',
    stores: ['Amazon', 'Safety Glasses USA', 'Galls', 'Local sporting goods'],
    items: 'Pepper spray, personal alarms, first aid kits, flashlights',
  },
  {
    category: 'Professional Clothing',
    stores: ['Kohl\'s', 'Macy\'s', 'JCPenney', 'Amazon', 'Local retailers'],
    items: 'Business casual attire, professional accessories',
  },
];

const recommendedApps = [
  {
    category: 'Navigation & GPS',
    apps: [
      { name: 'Google Maps', use: 'Primary navigation and route planning' },
      { name: 'Waze', use: 'Real-time traffic and route optimization' },
      { name: 'MileIQ', use: 'Automatic mileage tracking for tax purposes' },
    ],
  },
  {
    category: 'Documentation',
    apps: [
      { name: 'Timestamp Camera', use: 'Photos with automatic date/time/GPS stamps' },
      { name: 'GPS Map Camera', use: 'Geotagged photos for proof of location' },
      { name: 'Adobe Scan', use: 'Document scanning and PDF creation' },
      { name: 'CamScanner', use: 'Mobile scanning and document management' },
    ],
  },
  {
    category: 'Business Management',
    apps: [
      { name: 'Evernote', use: 'Note-taking and case documentation' },
      { name: 'Trello', use: 'Case and task management' },
      { name: 'QuickBooks', use: 'Invoicing and accounting' },
      { name: 'Dropbox', use: 'Cloud storage and file backup' },
    ],
  },
];

export default function ProcessServerEquipmentChecklist() {
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
              <ClipboardList className="w-4 h-4 mr-2" />
              Essential Resource Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Process Server Equipment Checklist
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Complete starter kit guide for Oklahoma process servers. Everything you need to know about essential equipment, vehicle setup, technology, safety gear, and budget planning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="#download-checklist">
                  <Download className="w-5 h-5 mr-2" />
                  Download Checklist
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/contact">
                  Contact Our Team
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Written by <Link href="/about" className="text-primary hover:underline">Joseph Iannazzi</Link>, Owner of Just Legal Solutions
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
                Starting a career as a process server in Oklahoma requires more than just a CLEET license and determination. Having the right equipment can mean the difference between successful service attempts and frustrating failures. This comprehensive equipment checklist will guide you through everything you need to build a professional process serving operation, from essential starter items to advanced tools that can give you a competitive edge.
              </p>
              <p className="text-lg leading-relaxed">
                At <Link href="/" className="text-primary hover:underline">Just Legal Solutions</Link>, our team brings over 50 years of combined experience to every service attempt. We've learned through decades of fieldwork exactly what equipment makes the difference between amateur and professional service. This guide shares those insights to help you start your process serving career on the right foot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Equipment Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Equipment Categories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every process server needs these fundamental items to perform their duties effectively and professionally.
              </p>
            </div>

            <div className="grid gap-8">
              {essentialEquipment.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      {index === 0 && <FileText className="w-6 h-6 text-primary" />}
                      {index === 1 && <Smartphone className="w-6 h-6 text-primary" />}
                      {index === 2 && <Car className="w-6 h-6 text-primary" />}
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Requirements */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Car className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vehicle Requirements and Setup</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your vehicle is your mobile office. Proper setup ensures efficiency, safety, and professionalism.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Selection Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Reliability:</strong> Consistent performance with minimal breakdowns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Fuel Efficiency:</strong> 25+ MPG recommended for cost savings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Air Conditioning:</strong> Essential for Oklahoma summers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Storage Space:</strong> Room for supplies and documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Low Profile:</strong> Unobtrusive appearance for surveillance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Organization Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Document Organizer:</strong> Keep forms easily accessible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Phone Mount:</strong> Hands-free navigation compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Trunk Organizer:</strong> Separate supplies by category</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Charging Station:</strong> Multiple USB ports for devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Privacy:</strong> Tinted windows for document security</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Vehicle Maintenance Reminder</h4>
                  <p className="text-amber-700">
                    Regular vehicle maintenance is crucial for process servers. A breakdown during a time-sensitive service can result in missed deadlines and lost clients. Budget for oil changes, tire rotations, and preventive maintenance. Keep maintenance records for tax deduction purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology and Apps</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Modern process serving relies heavily on technology for documentation, navigation, and efficiency.
              </p>
            </div>

            <div className="grid gap-6">
              {recommendedApps.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Laptop className="w-6 h-6 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.apps.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">{app.name.charAt(0)}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">{app.name}</h4>
                            <p className="text-sm text-muted-foreground">{app.use}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    Camera Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Minimum 12MP resolution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Timestamp capability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>GPS geotagging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Good low-light performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Sufficient storage (64GB+)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    GPS Tracking Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Route optimization saves time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Proof of service location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Mileage tracking for taxes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Client reporting capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Service attempt documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Equipment */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety Equipment</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Personal safety should always be your top priority. These items help protect you during service attempts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {safetyEquipment.map((item, index) => (
                <Card key={index} className={item.priority === 'High' ? 'border-red-200' : ''}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant={item.priority === 'High' ? 'destructive' : item.priority === 'Medium' ? 'default' : 'secondary'}>
                        {item.priority} Priority
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{item.item}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Safety First Protocol</h4>
                  <p className="text-red-700 mb-3">
                    Always prioritize your personal safety over completing a service. If a situation feels dangerous, leave immediately and document what occurred. Never argue with hostile recipients or enter unsafe situations.
                  </p>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Establish regular check-in times with a trusted contact</li>
                    <li>• Share your service schedule with someone you trust</li>
                    <li>• Trust your instincts—if something feels wrong, leave</li>
                    <li>• Keep emergency numbers readily accessible</li>
                    <li>• Consider carrying a personal safety alarm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Attire */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Attire</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your appearance affects how recipients perceive you and can impact service success rates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {professionalAttire.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">Dress Code Tips</h4>
              <div className="grid md:grid-cols-2 gap-4 text-blue-700">
                <ul className="space-y-2">
                  <li>• Avoid clothing with logos or slogans</li>
                  <li>• Keep clothing clean and pressed</li>
                  <li>• Choose comfortable shoes for walking</li>
                  <li>• Dress slightly more formal than the neighborhood average</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Avoid excessive jewelry or accessories</li>
                  <li>• Keep hair neat and professional</li>
                  <li>• Minimal, professional fragrance</li>
                  <li>• Weather-appropriate layers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Setup */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Printer className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Office and Setup Equipment</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A well-organized home office ensures efficient case management and professional document handling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officeEquipment.map((item, index) => (
                <Card key={index} className={item.essential ? 'border-primary/30' : ''}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant={item.essential ? 'default' : 'secondary'}>
                        {item.essential ? 'Essential' : 'Recommended'}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{item.item}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Home Office Setup Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Dedicated Space:</strong> Separate work area from living space</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Secure Storage:</strong> Locked filing cabinet for sensitive documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Backup System:</strong> Both physical and digital backups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Professional Address:</strong> Consider a business mailbox</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Document Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Encryption:</strong> Password-protect digital files</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Shredding:</strong> Secure disposal of old documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Access Control:</strong> Limit who can access files</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Cloud Backup:</strong> Off-site storage for critical files</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Budget Breakdown</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Plan your equipment investment with these three budget tiers based on your goals and resources.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {budgetBreakdown.map((tier, index) => (
                <Card key={index} className={index === 1 ? 'border-primary' : ''}>
                  <CardHeader className="text-center">
                    <Badge className="mb-2 mx-auto" variant={index === 0 ? 'secondary' : index === 1 ? 'default' : 'outline'}>
                      {tier.level}
                    </Badge>
                    <CardTitle className="text-2xl">{tier.range}</CardTitle>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {tier.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Tax Deductions</h4>
                  <p className="text-green-700">
                    Most process server equipment and supplies are tax-deductible business expenses. Keep all receipts and maintain detailed records of purchases. Consult with a tax professional to maximize your deductions. Common deductible items include vehicle expenses, equipment purchases, phone bills, office supplies, and professional development costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Buy */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Where to Buy Equipment</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quality equipment is available from various retailers. Here's where to find the best options.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whereToBuy.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{category.items}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.stores.map((store, storeIndex) => (
                        <Badge key={storeIndex} variant="outline">{store}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-purple-50 border border-purple-200 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-3">Shopping Tips</h4>
              <div className="grid md:grid-cols-2 gap-4 text-purple-700">
                <ul className="space-y-2">
                  <li>• Compare prices across multiple retailers</li>
                  <li>• Look for sales and bulk discounts</li>
                  <li>• Read reviews before purchasing</li>
                  <li>• Consider refurbished electronics for savings</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Buy quality items that will last longer</li>
                  <li>• Keep receipts for warranty and tax purposes</li>
                  <li>• Join professional associations for member discounts</li>
                  <li>• Consider leasing expensive equipment initially</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Checklist */}
      <section id="download-checklist" className="py-12 md:py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Download className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Your Free Checklist</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get our comprehensive printable equipment checklist to take with you when shopping. Includes all items mentioned in this guide with priority rankings and estimated costs.
            </p>
            <Button size="lg" className="mb-4">
              <Download className="w-5 h-5 mr-2" />
              Download PDF Checklist
            </Button>
            <p className="text-sm text-muted-foreground">
              Free download • No email required • Updated January 2024
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Common questions about process server equipment and setup
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What equipment do I need to start as a process server in Oklahoma?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    To start as a process server in Oklahoma, you need: reliable transportation, smartphone with GPS, digital camera, printer/scanner, professional attire, documentation supplies (return of service forms, affidavit templates), and basic safety equipment. A starter kit typically costs $500-$1,500 depending on equipment quality. The most critical items are your vehicle, phone with camera, and proper documentation supplies.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How much should I budget for process server equipment?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Budget $500-$1,500 for a basic starter kit, $2,000-$4,000 for a professional setup, or $5,000+ for a premium outfit. Essential items include vehicle expenses, technology (phone, camera, GPS), documentation supplies, safety equipment, and professional attire. Start with essentials and upgrade as your business grows. Many items are tax-deductible business expenses.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do I need a special vehicle to be a process server?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    No special vehicle is required, but you need reliable transportation with good fuel efficiency, working air conditioning (essential for Oklahoma summers), and adequate storage for supplies. Many successful process servers use standard sedans or compact SUVs. The key factors are reliability, fuel economy, and a professional appearance. Avoid vehicles that stand out or attract attention.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What camera do process servers use for proof of service?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Process servers typically use smartphones with quality cameras (12MP+) or dedicated digital cameras. Key features include timestamp capability, GPS geotagging, good low-light performance, and sufficient storage. Many use apps like Timestamp Camera or GPS Map Camera for automatic documentation. The camera should produce clear, date-stamped photos that can serve as evidence in court if needed.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What safety equipment should process servers carry?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Essential safety equipment includes pepper spray (where legal), personal alarm, first aid kit, flashlight, reflective vest for night service, and a charged power bank. Some servers also carry body cameras and maintain regular check-in protocols with family or colleagues. Always prioritize personal safety over completing a service—if a situation feels dangerous, leave immediately.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>What apps do professional process servers use?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Professional process servers use GPS/navigation apps (Google Maps, Waze), timestamp camera apps, document scanning apps (Adobe Scan, CamScanner), note-taking apps, mileage tracking apps (MileIQ, Everlance), and sometimes specialized process server software for case management. These apps improve efficiency, documentation accuracy, and business management.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Where can I buy process server equipment?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Process server equipment is available at office supply stores (Staples, Office Depot), electronics retailers (Best Buy, Amazon), specialized legal supply companies, automotive stores, and online marketplaces. Many items like cameras and phones can be purchased at standard retail outlets. Compare prices and read reviews before purchasing to ensure quality and value.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>Is body camera equipment necessary for process serving?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Body cameras are not legally required in Oklahoma but are increasingly recommended. They provide video evidence of service attempts, protect against false allegations, and can be valuable in court proceedings. Quality body cameras range from $100-$400. Many professional process servers consider them essential for liability protection and documentation quality.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>Can I use my personal phone for process serving?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, many process servers use their personal phones, but consider getting a dedicated business line as you grow. Your phone needs a quality camera (12MP+), reliable service, GPS capability, and sufficient storage. Install timestamp camera apps and document scanning apps. Keep your phone charged and consider a portable power bank for long service days.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>What documentation supplies are absolutely essential?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Absolutely essential documentation supplies include: return of service forms, affidavit of service templates, non-service report forms, reliable pens, a legal-size clipboard with storage, and document folders. You also need access to a printer and scanner. These items are critical for properly documenting service attempts and completing legal requirements.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Licensing Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about CLEET certification, training requirements, and licensing fees in Oklahoma.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/how-to-become-process-server-oklahoma">Read Guide</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Our Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about our professional process serving services throughout Oklahoma.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/services">View Services</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have questions about process serving? Our experienced team is here to help.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Professional Process Serving?</h2>
            <p className="text-lg mb-8 opacity-90">
              Just Legal Solutions provides GPS-tracked process serving throughout Oklahoma. With over 50 years of combined experience, we deliver reliable, professional service for attorneys, businesses, and individuals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Request Service</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:539-367-6832">Call (539) 367-6832</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Disclaimer:</strong> This equipment checklist is provided for educational purposes only and does not constitute legal advice. Equipment requirements may vary based on your specific situation, location, and the types of services you provide. Consult with experienced process servers, legal professionals, and relevant authorities to ensure you meet all requirements for your area. Just Legal Solutions and Joseph Iannazzi are not responsible for any decisions made based on this information. Always verify current regulations with CLEET and Oklahoma state authorities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
