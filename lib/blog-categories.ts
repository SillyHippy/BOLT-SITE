/**
 * Blog category taxonomy — single source of truth for the blog index, the
 * dynamic /blog/category/[slug] routes, and any future tag UI. Adding a new
 * post means adding a single entry here.
 */

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export type BlogCategory = {
  /** URL slug used at /blog/category/<slug> */
  slug: string;
  name: string;
  /** Lucide icon name; resolved via iconMap on the index page */
  icon:
    | 'BookOpen'
    | 'Scale'
    | 'Briefcase'
    | 'HelpCircle'
    | 'Calendar'
    | 'GitCompare'
    | 'FileSignature'
    | 'DollarSign';
  /** Tailwind color key used by colorMap on the index page */
  color: 'blue' | 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'teal' | 'green';
  description: string;
  posts: readonly BlogPost[];
};

export const BLOG_CATEGORIES: readonly BlogCategory[] = [
  {
    slug: 'how-to-guides',
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
    slug: 'oklahoma-legal-procedures',
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
    slug: 'industry-guides',
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
    slug: 'notary-and-specialty-services',
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
    slug: 'practical-guides',
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
    slug: 'seasonal-and-timely',
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
    slug: 'comparison-guides',
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
    slug: 'pricing-and-cost-guides',
    name: 'Pricing & Cost Guides',
    icon: 'DollarSign',
    color: 'green',
    description: 'Transparent pricing, cost breakdowns, and hidden-fee guidance',
    posts: [
      { slug: 'process-serving-cost-guide-oklahoma', title: 'How Much Does a Process Server Cost in Oklahoma? 2026 Pricing Guide', description: 'Full cost breakdown by tier (starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $200 triple-attempt, $265 after-hours), comparison with sheriff fees, and hidden costs to avoid.', date: '2026-04-19' },
    ],
  },
] as const;

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): readonly string[] {
  return BLOG_CATEGORIES.map((c) => c.slug);
}

export function getTotalPostCount(): number {
  return BLOG_CATEGORIES.reduce((acc, c) => acc + c.posts.length, 0);
}
