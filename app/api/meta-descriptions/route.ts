import { NextResponse } from 'next/server';

// Auto-generates fresh meta descriptions with current date for SEO freshness
export async function GET() {
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const metaDescriptions = {
    home: `Professional process serving and courier services in Tulsa, Oklahoma. Fast, reliable legal document delivery. Updated ${today}. Call (539) 367-6832 for same-day service!`,
    
    'tulsa-process-server': `Certified process server in Tulsa, OK. Same-day service available. Professional legal document delivery throughout Tulsa County. Updated ${today}. Call (539) 367-6832.`,
    
    'process-server-tulsa': `Tulsa process serving services. Licensed, bonded, and insured. Court documents served professionally and efficiently. Updated ${today}. Contact: (539) 367-6832.`,
    
    'courier-services-tulsa': `Legal courier services in Tulsa. Fast document delivery, court filings, and rush services. Professional and reliable. Updated ${today}. Call (539) 367-6832.`,
    
    services: `Complete legal services in Tulsa: process serving, court filings, document delivery. Licensed professionals. Updated ${today}. Contact: (539) 367-6832.`,
    
    pricing: `Affordable process serving rates in Tulsa. Transparent pricing starting at $40. No hidden fees. Get a quote today! Updated ${today}. Call (539) 367-6832.`,
    
    payments: `Easy payment options for legal services. Accept credit cards, checks, and online payments. Secure and convenient. Updated ${today}. Info: info@justlegalsolutions.org.`,
    
    'security-policy': `Privacy and security policy for Just Legal Solutions. Your information is protected with industry-standard security. Updated ${today}. Contact: info@justlegalsolutions.org.`,
    
    card: `Contact Just Legal Solutions. Professional process serving in Tulsa, Oklahoma. Get in touch for reliable legal document services. Updated ${today}. Call (539) 367-6832.`,
    
    'card/calendar': `Schedule your process serving appointment online. Quick and easy booking for Tulsa legal services. Available slots updated ${today}. Call (539) 367-6832.`
  };

  return NextResponse.json({
    descriptions: metaDescriptions,
    lastUpdated: today,
    timestamp: new Date().toISOString()
  });
}
