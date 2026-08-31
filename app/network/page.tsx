import React from 'react';
import { Metadata } from 'next';
import TrustedNetworkClient from './TrustedNetworkClient';
import trustedServers from '@/data/trusted-network.json';

export const metadata: Metadata = {
  title: 'Internal Server Directory & Partner Network | Just Legal Solutions',
  description: 'Private trusted process server lookup for Oklahoma coverage.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NetworkPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 border-b border-slate-800 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  🔒 Private Internal Directory
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  ⚡ Unindexed (No-Index)
                </span>
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tight mt-2">
                Trusted Process Server Network
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                Vetted Oklahoma field servers, direct contact info, county territories, and pricing rules.
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Active Network</span>
              <span className="text-2xl font-black text-emerald-400">{trustedServers.length} Servers</span>
            </div>
          </div>
        </div>

        <TrustedNetworkClient servers={trustedServers} />
      </div>
    </main>
  );
}
