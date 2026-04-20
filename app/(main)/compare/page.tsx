import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comparisons',
  description: 'Side-by-side comparisons for Oklahoma process serving decisions.',
};

const comparisons = [
  {
    href: '/process-server-vs-sheriff',
    title: 'Process Server vs Sheriff',
    desc: 'Compare cost, speed, documentation, and reliability of private process servers versus sheriff service in Oklahoma.',
  },
];

export default function ComparePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-navy text-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Comparisons</h1>
          <p className="text-white/70 text-sm md:text-base max-w-2xl">
            Side-by-side comparisons to help you make informed decisions about Oklahoma process serving.
          </p>
        </div>
      </div>
      <main className="flex-1 bg-cream py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            {comparisons.map((comp) => (
              <Link
                key={comp.href}
                href={comp.href}
                className="card card-hover group block"
              >
                <h2 className="font-semibold text-navy group-hover:text-gold transition-colors mb-1">{comp.title}</h2>
                <p className="text-sm text-text-muted">{comp.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
