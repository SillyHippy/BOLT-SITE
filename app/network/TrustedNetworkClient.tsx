'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  AlertTriangle, 
  ShieldCheck, 
  Star, 
  ExternalLink,
  MessageSquare,
  CreditCard,
  Lock,
  Unlock,
  KeyRound,
  LogOut
} from 'lucide-react';

interface Territory {
  region: string;
  primaryCounties: string[];
  majorCities: string[];
}

interface ServerContact {
  id: string;
  name: string;
  businessName: string;
  rating: string;
  phone: string;
  altPhone?: string;
  email: string;
  altEmail?: string;
  paymentMethod: string;
  territory: Territory;
  services: string[];
  notes: string;
  pricingRules: string;
}

const NETWORK_PIN = '8809';
const AUTH_STORAGE_KEY = 'jls_network_authorized_v1';

export default function TrustedNetworkClient({ servers }: { servers: ServerContact[] }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [pinInput, setPinInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Check saved authorization on mount
  useEffect(() => {
    try {
      const savedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
      if (savedAuth === 'true') {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  }, []);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === NETWORK_PIN) {
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      } catch {}
      setIsAuthenticated(true);
      setErrorMsg('');
      setPinInput('');
    } else {
      setErrorMsg('Incorrect PIN. Please try again.');
      setPinInput('');
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {}
    setIsAuthenticated(false);
  };

  // Extract unique regions
  const regions = useMemo(() => {
    const list = new Set<string>();
    servers.forEach((s) => list.add(s.territory.region));
    return ['All', ...Array.from(list)];
  }, [servers]);

  // Filtered servers
  const filteredServers = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return servers.filter((s) => {
      const matchRegion = selectedRegion === 'All' || s.territory.region === selectedRegion;
      if (!matchRegion) return false;
      if (!term) return true;

      const inName = s.name.toLowerCase().includes(term);
      const inBiz = s.businessName.toLowerCase().includes(term);
      const inCounties = s.territory.primaryCounties.some((c) => c.toLowerCase().includes(term));
      const inCities = s.territory.majorCities.some((city) => city.toLowerCase().includes(term));
      const inNotes = s.notes.toLowerCase().includes(term);
      const inServices = s.services.some((srv) => srv.toLowerCase().includes(term));

      return inName || inBiz || inCounties || inCities || inNotes || inServices;
    });
  }, [servers, searchTerm, selectedRegion]);

  // Loading state while checking localStorage
  if (isAuthenticated === null) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // PIN Gate Screen
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-12 bg-slate-800/95 border border-slate-700 rounded-3xl p-8 shadow-2xl backdrop-blur-xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-6 shadow-inner">
          <Lock className="w-8 h-8" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">Private Partner Network</h2>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Enter your 4-digit security PIN to unlock contact information and coverage records.
        </p>

        <form onSubmit={handlePinSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              inputMode="numeric"
              maxLength={6}
              autoFocus
              placeholder="••••"
              value={pinInput}
              onChange={(e) => {
                setPinInput(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              className="w-full text-center tracking-[1em] text-2xl font-mono bg-slate-900 border border-slate-700 rounded-xl py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>

          {errorMsg && (
            <p className="text-xs font-semibold text-rose-400 bg-rose-950/40 py-2 px-3 rounded-lg border border-rose-800/50">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <KeyRound className="w-4 h-4" />
            Unlock Network
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-700/60 text-xs text-slate-500">
          🔒 Just Legal Solutions • Internal Access Only
        </div>
      </div>
    );
  }

  // Authenticated Screen
  return (
    <div className="space-y-6">
      {/* Controls & Search Bar */}
      <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by County (e.g. Rogers, Oklahoma, Jackson), City, or Server..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-11 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-2 py-0.5 bg-slate-800 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Region Tabs & Logout */}
          <div className="flex flex-wrap items-center gap-1.5">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedRegion === reg
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {reg}
              </button>
            ))}

            <button
              onClick={handleLogout}
              title="Lock Directory"
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-rose-900/60 text-slate-400 hover:text-rose-200 border border-slate-700 transition-colors flex items-center gap-1 ml-2"
            >
              <LogOut className="w-3.5 h-3.5" />
              Lock
            </button>
          </div>
        </div>
      </div>

      {/* Result Count */}
      <div className="text-xs text-slate-400 flex items-center justify-between px-1">
        <span>Showing {filteredServers.length} of {servers.length} trusted contacts</span>
        {searchTerm && <span>Filtering by: &quot;{searchTerm}&quot;</span>}
      </div>

      {/* Grid of Server Cards */}
      <div className="grid grid-cols-1 gap-6">
        {filteredServers.map((server) => {
          const hasWarning = server.pricingRules.includes('⚠️') || server.pricingRules.toLowerCase().includes('prior approval');

          return (
            <div
              key={server.id}
              className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-lg hover:border-slate-600 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* Info Column */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2 className="text-xl font-bold text-white">{server.name}</h2>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {server.rating}
                      </span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                        {server.territory.region}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-300">{server.businessName}</p>
                  </div>

                  {/* Territory Badges */}
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Primary Counties:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {server.territory.primaryCounties.map((county) => (
                          <span
                            key={county}
                            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-blue-950/60 text-blue-300 border border-blue-800/40"
                          >
                            <MapPin className="w-3 h-3 text-blue-400" />
                            {county} County
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Major Cities / Hubs:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {server.territory.majorCities.map((city) => (
                          <span
                            key={city}
                            className="text-xs px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Notes & Operational Rules */}
                  <div className="space-y-2 pt-2 border-t border-slate-700/50">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <span className="font-semibold text-white">Operational Notes: </span>
                      {server.notes}
                    </p>

                    {/* Pricing / Alert Box */}
                    <div
                      className={`p-3 rounded-lg text-xs leading-relaxed ${
                        hasWarning
                          ? 'bg-amber-950/40 border border-amber-500/40 text-amber-200'
                          : 'bg-slate-900 border border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {hasWarning ? (
                          <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <CreditCard className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <span className="font-semibold block mb-0.5">Billing &amp; Rate Rules:</span>
                          {server.pricingRules}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Dock */}
                <div className="w-full lg:w-72 bg-slate-900/90 border border-slate-700/70 rounded-xl p-4 space-y-3 flex-shrink-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800">
                    Direct Contact &amp; Dispatch
                  </div>

                  {/* Primary Phone */}
                  <div className="space-y-1">
                    <span className="text-[11px] text-slate-400 font-medium">Primary Phone:</span>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`tel:${server.phone.replace(/[^0-9]/g, '')}`}
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Call
                      </a>
                      <a
                        href={`sms:${server.phone.replace(/[^0-9]/g, '')}`}
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Text
                      </a>
                    </div>
                    <div className="text-center text-xs text-slate-300 font-mono pt-0.5">{server.phone}</div>
                  </div>

                  {/* Alternate Phone */}
                  {server.altPhone && (
                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] text-slate-400 font-medium">Secondary / Alt Phone:</span>
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={`tel:${server.altPhone.replace(/[^0-9]/g, '')}`}
                          className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-600"
                        >
                          <Phone className="w-3 h-3 text-emerald-400" />
                          Call Alt
                        </a>
                        <a
                          href={`sms:${server.altPhone.replace(/[^0-9]/g, '')}`}
                          className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-600"
                        >
                          <MessageSquare className="w-3 h-3 text-blue-400" />
                          Text Alt
                        </a>
                      </div>
                      <div className="text-center text-xs text-slate-400 font-mono">{server.altPhone}</div>
                    </div>
                  )}

                  {/* Email Actions */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] text-slate-400 font-medium">Email Dispatch:</span>
                    <a
                      href={`mailto:${server.email}?subject=Process%20Service%20Dispatch%20-%20Just%20Legal%20Solutions`}
                      className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-600 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-400" />
                      <span className="truncate">{server.email}</span>
                    </a>

                    {server.altEmail && (
                      <a
                        href={`mailto:${server.altEmail}?subject=Process%20Service%20Dispatch%20-%20Just%20Legal%20Solutions`}
                        className="flex items-center justify-center gap-2 w-full py-1.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs border border-slate-700 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate">{server.altEmail}</span>
                      </a>
                    )}
                  </div>

                  {/* Payment */}
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Payment:</span>
                    <span className="font-semibold text-emerald-400">{server.paymentMethod}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filteredServers.length === 0 && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-12 text-center">
            <p className="text-slate-300 text-base font-semibold">No servers found matching &quot;{searchTerm}&quot;</p>
            <p className="text-slate-500 text-sm mt-1">Try searching by county name (e.g. &quot;Payne&quot;, &quot;Rogers&quot;, &quot;Oklahoma&quot;) or clear the search.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('All');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-500"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
