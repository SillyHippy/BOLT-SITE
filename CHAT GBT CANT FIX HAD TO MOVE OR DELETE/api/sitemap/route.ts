import { NextResponse } from 'next/server';

export async function GET() {
  // Minimal valid sitemap endpoint
  return NextResponse.json({ status: 'ok', message: 'Sitemap endpoint is active.' });
}
