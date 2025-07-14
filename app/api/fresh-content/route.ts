import { NextResponse } from 'next/server';

export async function GET() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const tips = [
    'Always use a licensed process server for legal documents.',
    'Same-day service is available for urgent cases.',
    'Keep your contact info updated for faster delivery.',
    'Ask for proof of service for every document.',
    'Weekend and after-hours service available.',
    'Emergency process serving 24/7 in Tulsa County.'
  ];
  const headlines = [
    'Tulsa Process Server Delivers Results!',
    'Legal Document Delivery Experts',
    'Fast, Reliable Court Paper Service',
    'Eviction Notice? We Serve It!',
    'Subpoena Service Specialists'
  ];
  const tip = tips[dayOfYear % tips.length];
  const headline = headlines[dayOfYear % headlines.length];
  return NextResponse.json({
    tip,
    headline,
    dayOfYear
  });
}
