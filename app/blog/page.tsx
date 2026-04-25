import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, BookOpen, Scale, Briefcase, HelpCircle, Calendar, GitCompare, ArrowRight, Star, Shield, Clock, FileSignature, DollarSign } from 'lucide-react';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import path from 'path';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Oklahoma Legal Blog | Process Serving & Legal Guides',
  description: 'Expert Oklahoma legal guides covering process serving, service of process procedures, eviction timelines, court rules, and practical legal information for attorneys and individuals.',
  keywords: 'oklahoma legal blog, process serving blog, oklahoma law guides, service of process oklahoma, oklahoma legal information',
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Oklahoma Legal Blog | Process Serving & Legal Guides',
    description: 'Expert Oklahoma legal guides covering process serving, service of process procedures, eviction timelines, court rules, and practical legal information.',
    url: 'https://justlegalsolutions.org/blog',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.png', width: 1200, height: 630, alt: 'Just Legal Solutions Blog' }],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/blog' },
};

const categories = [
  {
    name: 'How-To Guides',
    icon: 'BookOpen',
    color: 'blue',
    description: 'Step-by-step guides for serving legal papers in Oklahoma',
    posts: [
      { slug: 'how-to-serve-a-subpoena-oklahoma', title: 'How to Serve a Subpoena in Oklahoma', description: 'Complete guide to serving subpoenas including witness fees, contempt consequences, and service requirements under 12 O.S. \u00A7 2004.', date: '2026-04-02' },
      { slug: 'how-to-serve-divorce-papers-oklahoma', title: 'How to Serve Divorce Papers in Oklahoma', description: 'Service methods, deadlines, proof of service requirements, and common mistakes to avoid when serving divorce papers.', date: '2026-04-02' },
      { slug: 'how-to-serve-eviction-notices-in-oklahoma', title: 'How to Serve Eviction Notices in Oklahoma', description: 'Critical differences between Title 41 initial notices (age 12+) and Title 12 FED summonses (age 15+).', date: '2025-05-15' },
      { slug: 'how-to-serve-small-claims-oklahoma', title: 'How to Serve Small Claims Papers in Oklahoma', description: 'The $10,000 limit, service methods, timelines, return of service requirements, and tips for self-represented parties.', date: '2026-04-02' },
      { slug: 'how-to-file-protective-order-oklahoma', title: 'How to File a Protective Order in Oklahoma', description: 'Step-by-step guide covering emergency VPOs, permanent orders, court procedures, and service requirements.', date: '2026-04-08' },
      { slug: 'tulsa-court-filing-guide', title: 'Tulsa County Court Filing Guide \u2014 eFiling, Costs & Timelines', description: 'OCIS eFiling walkthrough, document prep, court fees, common filing mistakes, and combining filing with service of process.', date: '2026-04-19' },
      { slug: 'how-to-hire-a-process-server-oklahoma', title: 'How to Hire a Process Server in Oklahoma \u2014 2026 Checklist', description: 'License/bond verification, pricing transparency, GPS proof, court-ready affidavits, red flags, and what to ask before hiring.', date: '2026-04-19' },
      { slug: 'serve-out-of-state-defendant-oklahoma', title: 'How to Serve an Out-of-State Defendant in Oklahoma', description: 'Long-arm statute, interstate service methods, Hague Convention for international service, and practical solutions.', date: '2026-04-08' },
      { slug: 'serve-business-corporation-oklahoma', title: 'How to Serve a Business or Corporation in Oklahoma', description: 'Registered agents, Secretary of State service, CT Corporation, and handling evasive businesses.', date: '2026-04-08' },
      { slug: 'become-process-server-oklahoma', title: 'How to Become a Process Server in Oklahoma (2026)', description: 'License requirements, CLEET certification, surety bonds, costs, training, and what the job is really like.', date: '2026-04-08' },
    ],
  },
  {
    name: 'Oklahoma Legal Procedures',
    icon: 'Scale',
    color: 'indigo',
    description: 'Understanding Oklahoma court rules, statutes, and legal processes',
    posts: [
      { slug: 'oklahoma-default-judgment-guide', title: 'Oklahoma Default Judgment Guide', description: 'What happens when a defendant ignores a lawsuit\u2014timelines, consequences, and how to set aside a default.', date: '2026-04-08' },
      { slug: 'oklahoma-landlord-tenant-eviction-timelines', title: 'Oklahoma Eviction Timelines & Notice Requirements', description: 'Notice periods, FED procedures, court timelines, and common landlord mistakes under Oklahoma law.', date: '2026-04-08' },
      { slug: 'substitute-service-oklahoma', title: 'Substitute Service in Oklahoma', description: 'When substitute service is allowed under 12 O.S. \u00A7 2004(c), abode service, posting, and judicial approval.', date: '2026-04-08' },
      { slug: 'oklahoma-child-custody-support-service', title: 'Child Custody & Support Service of Process', description: 'How service works for custody modifications, paternity actions, DHS cases, and tribal court implications.', date: '2026-04-08' },
      { slug: 'contest-improper-service-oklahoma', title: 'How to Contest Improper Service in Oklahoma', description: 'Motions to quash, due process challenges, common service defects, and Oklahoma case law examples.', date: '2026-04-08' },
      { slug: 'understanding-the-affidavit-of-service', title: 'Understanding the Affidavit of Service', description: 'What an affidavit of service is, why it matters, and how to ensure your proof of service holds up in court.', date: '2025-06-01' },
      { slug: 'how-long-respond-lawsuit-oklahoma', title: 'How Long to Respond After Being Served in Oklahoma', description: 'The 20-day rule, different case types, military exceptions, and what filing an answer means.', date: '2026-04-08' },
      { slug: 'oklahoma-eviction-moratorium-history', title: 'Oklahoma Eviction Moratorium History & Current Rules (2026)', description: 'Post-COVID eviction landscape, remaining protections, ERA funds, and what landlords need to know.', date: '2026-04-08' },
    ],
  },
  {
    name: 'Industry Guides',
    icon: 'Briefcase',
    color: 'emerald',
    description: 'Process serving for specific industries and professionals',
    posts: [
      { slug: 'process-serving-oil-gas-companies-oklahoma', title: 'Process Serving for Oil & Gas Companies', description: 'Lease disputes, mineral rights, royalty cases, and serving operators at drilling sites across Oklahoma.', date: '2026-04-08' },
      { slug: 'bail-bondsmen-process-servers-oklahoma', title: 'How Bail Bondsmen Work With Process Servers', description: 'FTA warrants, bond forfeiture hearings, skip tracing overlap, and locating defendants who skip bail.', date: '2026-04-08' },
      { slug: 'process-serving-healthcare-hospitals-oklahoma', title: 'Process Serving for Healthcare & Hospitals', description: 'HIPAA considerations, medical malpractice service, hospital policies, and serving medical professionals.', date: '2026-04-08' },
      { slug: 'real-estate-agents-process-serving-oklahoma', title: 'What Real Estate Agents Should Know About Process Serving', description: 'Contract disputes, escrow issues, HOA enforcement, quiet title actions, and litigation service.', date: '2026-04-08' },
      { slug: 'process-serving-small-business-owners-oklahoma', title: 'Process Serving for Small Business Owners', description: "When to sue, when you get sued, breach of contract, mechanic's lien actions, and protecting your business.", date: '2026-04-08' },
      { slug: 'banks-lenders-process-serving-oklahoma', title: 'How Banks & Lenders Use Process Servers', description: 'Foreclosure service requirements, deficiency judgments, replevin, and commercial vs. residential processes.', date: '2026-04-08' },
      { slug: 'skip-tracing-oklahoma-guide', title: 'Skip Tracing in Oklahoma \u2014 Find Hard-to-Locate Defendants', description: 'Legal limits (FCRA / GLBA / DPPA), sources used, success rates, integration with process serving, pricing starts at $50.', date: '2026-04-19' },
    ],
  },
  {
    name: 'Notary & Specialty Services',
    icon: 'FileSignature',
    color: 'teal',
    description: 'Mobile notary, loan signing, and specialty notarial services in Oklahoma',
    posts: [
      { slug: 'mobile-notary-tulsa-guide', title: 'Mobile Notary in Tulsa \u2014 When, Why, and How Much', description: 'When mobile notary makes sense (hospital, jail, business, after-hours), Tulsa metro coverage, and pricing starting at $25 per act plus travel.', date: '2026-04-19' },
      { slug: 'loan-signing-agent-oklahoma', title: 'Loan Signing Agents in Oklahoma \u2014 What You Need to Know', description: 'NNA certification, mortgage closing process, common LSA documents, package pricing, and how it differs from a regular notary.', date: '2026-04-19' },
      { slug: 'oklahoma-notary-fees-guide', title: 'Oklahoma Notary Fees & Rules 2026 \u2014 Complete Guide', description: 'The $5 maximum per act under 49 O.S. \u00A7 5, RON pricing, mobile travel fees, after-hours surcharges, and how total cost is calculated.', date: '2026-04-07' },
      { slug: 'ron-vs-mobile-notary-oklahoma', title: 'RON vs. Mobile Notary in Oklahoma', description: 'Remote Online Notarization vs. mobile notary \u2014 when to use each, identity verification, recording requirements, and pricing.', date: '2026-04-08' },
      { slug: 'estate-planning-notarization-oklahoma', title: 'Estate Planning Notarization in Oklahoma', description: 'Wills, trusts, healthcare directives, and powers of attorney \u2014 what needs notarization and witnessing requirements.', date: '2026-04-08' },
      { slug: 'power-of-attorney-guide-oklahoma', title: 'Oklahoma Power of Attorney Guide', description: 'Durable, medical, financial POAs in Oklahoma, statutory forms, witness/notary requirements, and revocation procedures.', date: '2026-04-08' },
    ],
  },
  {
    name: 'Practical Guides',
    icon: 'HelpCircle',
    color: 'amber',
    description: 'Answering common questions about being involved in legal proceedings',
    posts: [
      { slug: 'what-to-do-when-served-papers-oklahoma', title: 'What to Do When You Get Served Papers', description: "Calm, step-by-step guide: read the papers, count your days, find a lawyer, and don't ignore them.", date: '2026-04-08' },
      { slug: 'can-you-avoid-being-served-oklahoma', title: 'Can You Avoid Being Served in Oklahoma?', description: 'Myths vs. reality about evading service, service by publication, and what happens when the court loses patience.', date: '2026-04-08' },
      { slug: 'what-does-process-server-do-day-in-life', title: 'What Does a Process Server Actually Do?', description: 'Behind the scenes: GPS tracking, multiple attempts, skip tracing, nights and weekends\u2014the real work of legal service.', date: '2026-04-08' },
    ],
  },
  {
    name: 'Seasonal & Timely',
    icon: 'Calendar',
    color: 'rose',
    description: 'Legal trends tied to seasons and current events',
    posts: [
      { slug: 'january-process-serving-spike-oklahoma', title: 'Why Process Serving Spikes in January', description: "Post-holiday divorce filings, lease terminations, and how to prepare for Oklahoma's busiest legal season.", date: '2026-04-08' },
      { slug: 'tax-season-legal-actions-oklahoma', title: 'Tax Season & Legal Actions in Oklahoma', description: 'Tax liens, IRS levies, state tax warrants, OTC processes, and how tax-related legal actions get served.', date: '2026-04-08' },
    ],
  },
  {
    name: 'Comparison Guides',
    icon: 'GitCompare',
    color: 'violet',
    description: 'Helping you choose the right approach for your situation',
    posts: [
      { slug: 'sheriff-vs-private-process-server-oklahoma', title: 'Sheriff vs. Private Process Server in Oklahoma', description: 'Cost comparison, speed, success rates, flexibility, and which counties have backed-up sheriff departments.', date: '2026-04-08' },
      { slug: 'diy-vs-professional-service-oklahoma', title: 'DIY vs. Professional Service of Process', description: 'When you can serve papers yourself (rarely), who qualifies, risks of improper service, and cost of doing it wrong.', date: '2026-04-08' },
      { slug: 'certified-mail-vs-personal-service-oklahoma', title: 'Certified Mail vs. Personal Service in Oklahoma', description: 'Which case types allow certified mail, when personal service is required, and strategic considerations.', date: '2026-04-08' },
    ],
  },
  {
    name: 'Pricing & Cost Guides',
    icon: 'DollarSign',
    color: 'green',
    description: 'Transparent pricing, cost breakdowns, and hidden-fee guidance',
    posts: [
      { slug: 'process-serving-cost-guide-oklahoma', title: 'How Much Does a Process Server Cost in Oklahoma? 2026 Pricing Guide', description: 'Full cost breakdown by tier (starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $200 triple-attempt, $265 after-hours), comparison with sheriff fees, and hidden costs to avoid.', date: '2026-04-19' },
    ],
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Scale,
  Briefcase,
  HelpCircle,
  Calendar,
  GitCompare,
  FileSignature,
  DollarSign,
};

const colorMap: Record<string, { badge: string; iconBg: string; border: string; hover: string }> = {
  blue:    { badge: 'bg-blue-100 text-blue-700', iconBg: 'bg-blue-100', border: 'border-blue-200', hover: 'hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]' },
  indigo:  { badge: 'bg-indigo-100 text-indigo-700', iconBg: 'bg-indigo-100', border: 'border-indigo-200', hover: 'hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]' },
  emerald: { badge: 'bg-emerald-100 text-emerald-700', iconBg: 'bg-emerald-100', border: 'border-emerald-200', hover: 'hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]' },
  amber:   { badge: 'bg-amber-100 text-amber-700', iconBg: 'bg-amber-100', border: 'border-amber-200', hover: 'hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]' },
  rose:    { badge: 'bg-rose-100 text-rose-700', iconBg: 'bg-rose-100', border: 'border-rose-200', hover: 'hover:border-rose-400 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]' },
  violet:  { badge: 'bg-violet-100 text-violet-700', iconBg: 'bg-violet-100', border: 'border-violet-200', hover: 'hover:border-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]' },
  teal:    { badge: 'bg-teal-100 text-teal-700', iconBg: 'bg-teal-100', border: 'border-teal-200', hover: 'hover:border-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.15)]' },
  green:   { badge: 'bg-green-100 text-green-700', iconBg: 'bg-green-100', border: 'border-green-200', hover: 'hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]' },
};

// Map of category display name -> URL slug used by /blog/category/[slug]. Keep
// in sync with lib/blog-categories.ts BLOG_CATEGORIES[*].slug.
const categoryNameToSlug: Record<string, string> = {
  'How-To Guides': 'how-to-guides',
  'Oklahoma Legal Procedures': 'oklahoma-legal-procedures',
  'Industry Guides': 'industry-guides',
  'Notary & Specialty Services': 'notary-and-specialty-services',
  'Practical Guides': 'practical-guides',
  'Seasonal & Timely': 'seasonal-and-timely',
  'Comparison Guides': 'comparison-guides',
  'Pricing & Cost Guides': 'pricing-and-cost-guides',
};

type ReleasedPost = {
  slug: string;
  title: string;
  category: string;
  releasedAt: string;
  quality?: {
    words?: number;
  };
};

async function getLatestReleasedPosts(limit = 6): Promise<ReleasedPost[]> {
  try {
    const releaseLogPath = path.join(process.cwd(), 'content', 'blog-queue', 'release-log.json');

    // ⚡ Bolt Performance Optimization:
    // Use asynchronous fs/promises instead of synchronous fs.readFileSync
    // to avoid blocking the Node.js event loop during Server Component rendering.
    try {
      await fsPromises.access(releaseLogPath);
    } catch {
      return [];
    }

    const fileContent = await fsPromises.readFile(releaseLogPath, 'utf8');
    const parsed = JSON.parse(fileContent) as { releases?: ReleasedPost[] };
    const releases = parsed.releases || [];

    return releases
      .slice()
      .sort((a, b) => new Date(b.releasedAt).getTime() - new Date(a.releasedAt).getTime())
      .slice(0, limit);
  } catch {
    return [];
  }
}

export default async function BlogIndex() {
  const totalArticles = categories.reduce((total, cat) => total + cat.posts.length, 0);
  const latestReleasedPosts = await getLatestReleasedPosts();

  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Oklahoma Legal Blog | Process Serving & Legal Guides"
        pageDescription="Expert Oklahoma legal guides covering process serving, service of process procedures, eviction timelines, court rules, and practical legal information."
        pageUrl="https://justlegalsolutions.org/blog"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Process Serving', 'Legal Document Delivery', 'Same-Day Service']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
        keywords={['oklahoma legal blog', 'process serving guides', 'oklahoma law articles']}
      />

      <Navbar />
      <LocalPromoBanner zips={[]} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Blog</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Oklahoma Legal Blog
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
            Expert guides on process serving, Oklahoma court procedures, and practical legal information. Written by licensed process servers who work in Oklahoma courts every day.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <div className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-200" />
              <span className="text-white font-medium text-sm">{totalArticles} In-Depth Articles</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-medium text-sm">5.0 Google Rating</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-white font-medium text-sm">Licensed & Bonded</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

          {latestReleasedPosts.length > 0 && (
            <section className="mb-20">
              <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Newly Released Articles
                  </h2>
                  <p className="text-gray-500 mt-0.5">
                    Automatically published from the weekly content pipeline.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                {latestReleasedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 bg-blue-100 text-blue-700">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          Freshly published from your weekly automated queue.
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-xs text-gray-400">
                            {new Date(post.releasedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            {typeof post.quality?.words === 'number' ? ` • ${post.quality.words.toLocaleString()} words` : ''}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300 mt-8 flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {categories.map((category, catIndex) => {
            const IconComponent = iconMap[category.icon];
            const colors = colorMap[category.color] || colorMap.blue;
            const categorySlug = categoryNameToSlug[category.name];
            return (
              <section key={catIndex} className="mb-20">
                <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${colors.iconBg}`}>
                      {IconComponent && <IconComponent className="w-6 h-6 text-gray-800" />}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {categorySlug ? (
                          <Link href={`/blog/category/${categorySlug}`} className="hover:text-blue-700">
                            {category.name}
                          </Link>
                        ) : (
                          category.name
                        )}
                      </h2>
                      <p className="text-gray-500 mt-0.5">{category.description}</p>
                    </div>
                  </div>
                  {categorySlug && (
                    <Link
                      href={`/blog/category/${categorySlug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:underline"
                    >
                      View all {category.posts.length} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                  {category.posts.map((post, postIndex) => (
                    <Link
                      key={postIndex}
                      href={`/blog/${post.slug}`}
                      className={`group block bg-white rounded-xl p-6 border ${colors.border} ${colors.hover} transition-all duration-300 hover:-translate-y-0.5`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${colors.badge}`}>
                            {category.name}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                            {post.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.description}</p>
                          <div className="flex items-center gap-3 mt-4">
                            <Clock className="w-3.5 h-3.5 text-gray-400" />
                            <span className="text-xs text-gray-400">
                              {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300 mt-8 flex-shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          {/* CTA Section */}
          <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl p-10 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 rounded-2xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Need Process Serving in Oklahoma?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
                Just Legal Solutions provides GPS-tracked process serving across all 77 Oklahoma counties. Licensed, bonded, and insured.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:5393676832"
                  className="text-white font-semibold border-2 border-white/50 px-8 py-3.5 rounded-lg hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300"
                >
                  Call (539) 367-6832
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
