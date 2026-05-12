const fs = require('fs');
const path = require('path');

// Category-specific related guides mapping
const relatedGuides = {
  'VA Services': [
    {
      href: '/blog/virtual-assistant-transform-law-firm-efficiency-oklahoma',
      label: 'VA Efficiency',
      title: 'How a VA Transforms Law Firm Efficiency',
      desc: 'Discover how virtual assistants help Oklahoma attorneys reclaim billable hours and cut overhead.'
    },
    {
      href: '/blog/scale-solo-practice-virtual-support-oklahoma',
      label: 'Solo Practice',
      title: 'Scale Your Solo Practice with Virtual Support',
      desc: 'Practical strategies for Oklahoma solo practitioners to grow without hiring full-time staff.'
    }
  ],
  'Courier': [
    {
      href: '/blog/same-day-document-delivery-law-firms-oklahoma',
      label: 'Same-Day Delivery',
      title: 'Same-Day Document Delivery for Law Firms',
      desc: 'When time-sensitive filings demand speed, learn how same-day courier service works in Oklahoma.'
    },
    {
      href: '/blog/secure-document-handling-hipaa-attorney-client-privilege-oklahoma',
      label: 'Document Security',
      title: 'Secure Document Handling & Privilege Protection',
      desc: 'HIPAA-compliant and privilege-protected document handling for Oklahoma legal professionals.'
    }
  ],
  'Technology': [
    {
      href: '/blog/gps-tracking-revolutionizes-process-serving-accountability-oklahoma',
      label: 'GPS Tracking',
      title: 'GPS Tracking in Process Serving',
      desc: 'How GPS technology is transforming accountability and proof of service in Oklahoma.'
    },
    {
      href: '/blog/electronic-proof-service-digital-signatures-court-acceptance-oklahoma',
      label: 'Digital Signatures',
      title: 'Electronic Proof of Service & Digital Signatures',
      desc: 'Court acceptance of digital signatures and electronic proof of service in Oklahoma.'
    }
  ],
  'Notary': [
    {
      href: '/blog/how-much-does-notary-cost-oklahoma',
      label: 'Notary Pricing',
      title: 'How Much Does a Notary Cost in Oklahoma?',
      desc: '2026 pricing guide for notary services across all 77 Oklahoma counties.'
    },
    {
      href: '/blog/what-documents-need-notarized-oklahoma',
      label: 'Document Guide',
      title: 'What Documents Need to Be Notarized?',
      desc: 'Complete list of documents requiring notarization under Oklahoma law.'
    }
  ],
  'Process Serving': [
    {
      href: '/blog/how-much-does-process-server-cost-oklahoma',
      label: 'Pricing Guide',
      title: 'Process Server Costs in Oklahoma',
      desc: '2026 pricing guide for process serving across all 77 Oklahoma counties.'
    },
    {
      href: '/blog/what-to-look-for-choosing-process-server-oklahoma',
      label: 'Hiring Guide',
      title: 'Choosing the Right Process Server',
      desc: 'Key credentials and experience to look for when hiring a process server.'
    }
  ],
  'Family Law': [
    {
      href: '/blog/domestic-violence-protective-order-service-oklahoma',
      label: 'Protective Orders',
      title: 'Serving Domestic Violence Protective Orders',
      desc: 'Sensitive, compliant service of protective orders in Oklahoma family law cases.'
    },
    {
      href: '/blog/process-serving-child-support-enforcement-oklahoma',
      label: 'Child Support',
      title: 'Process Serving for Child Support Enforcement',
      desc: 'Legal requirements for serving child support documents in Oklahoma.'
    }
  ],
  'Legal Procedures': [
    {
      href: '/blog/legal-document-retention-requirements-oklahoma',
      label: 'Retention Rules',
      title: 'Legal Document Retention Requirements',
      desc: 'Oklahoma-specific document retention requirements every attorney must know.'
    },
    {
      href: '/blog/what-documents-can-process-server-deliver-oklahoma',
      label: 'Document Types',
      title: 'What Documents Can a Process Server Deliver?',
      desc: 'Complete list of legal documents that can be served in Oklahoma.'
    }
  ],
  'Trends': [
    {
      href: '/blog/ai-changing-legal-support-services-2026',
      label: 'AI in Legal',
      title: 'How AI Is Changing Legal Support Services',
      desc: 'The 2026 landscape of AI-powered legal support in Oklahoma.'
    },
    {
      href: '/blog/technology-reduces-process-serving-errors-oklahoma',
      label: 'Tech Solutions',
      title: 'How Technology Reduces Process Serving Errors',
      desc: 'Modern technology solutions that improve accuracy in Oklahoma process serving.'
    }
  ]
};

// Default fallback
const defaultGuides = [
  {
    href: '/blog/how-much-does-process-server-cost-oklahoma',
    label: 'Pricing Guide',
    title: 'Process Server Costs in Oklahoma',
    desc: '2026 pricing guide for process serving across all 77 Oklahoma counties.'
  },
  {
    href: '/blog/what-to-look-for-choosing-process-server-oklahoma',
    label: 'Hiring Guide',
    title: 'Choosing the Right Process Server',
    desc: 'Key credentials and experience to look for when hiring a process server.'
  }
];

function getGuides(category, slug) {
  // Find the best matching category
  let guides = null;
  for (const [key, value] of Object.entries(relatedGuides)) {
    if (category.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(category.toLowerCase())) {
      guides = value;
      break;
    }
  }
  if (!guides) guides = defaultGuides;
  
  // Make sure we don't link to ourselves
  guides = guides.filter(g => !g.href.includes(slug));
  if (guides.length < 2) {
    // Fill from default if needed
    for (const dg of defaultGuides) {
      if (!dg.href.includes(slug) && !guides.find(g => g.href === dg.href)) {
        guides.push(dg);
        if (guides.length >= 2) break;
      }
    }
  }
  return guides.slice(0, 2);
}

// The hardcoded related guides block to find and replace
const hardcodedBlock = `          {/* Related Guides */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Related Legal Guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/blog/process-server-safety-guide-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Safety Protocol</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Process Server Safety Guide</h3>
                <p className="text-sm text-gray-600">Essential safety protocols for field service in rural and urban Oklahoma.</p>
              </Link>
              <Link href="/blog/what-to-look-for-choosing-process-server-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Hiring Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Choosing the Right Server</h3>
                <p className="text-sm text-gray-600">Key credentials and experience to look for when hiring a process server.</p>
              </Link>
            </div>
          </section>`;

function buildRelatedGuidesBlock(guides) {
  return `          {/* Related Guides */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Related Legal Guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="${guides[0].href}" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">${guides[0].label}</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">${guides[0].title}</h3>
                <p className="text-sm text-gray-600">${guides[0].desc}</p>
              </Link>
              <Link href="${guides[1].href}" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">${guides[1].label}</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">${guides[1].title}</h3>
                <p className="text-sm text-gray-600">${guides[1].desc}</p>
              </Link>
            </div>
          </section>`;
}

// Also fix the generic keywords while we're at it
const genericKeywords = `  keywords: 'process server Oklahoma, legal support, courier, notary, skip tracing',`;

// Category-specific keyword sets
const categoryKeywords = {
  'VA Services': "  keywords: 'virtual assistant law firm Oklahoma, legal virtual assistant, law firm efficiency, legal support services, Oklahoma attorney support',",
  'Courier': "  keywords: 'legal courier Oklahoma, document delivery law firms, court filing courier, same day legal delivery, Oklahoma legal courier service',",
  'Technology': "  keywords: 'legal technology Oklahoma, process serving technology, law firm tech, digital legal services, Oklahoma legal innovation',",
  'Notary': "  keywords: 'notary public Oklahoma, mobile notary, notarization services, Oklahoma notary near me, document notarization',",
  'Process Serving': "  keywords: 'process server Oklahoma, process serving, serve legal papers, Oklahoma process server, court document delivery',",
  'Family Law': "  keywords: 'family law process serving Oklahoma, divorce papers service, custody documents, protective order service, Oklahoma family court',",
  'Legal Procedures': "  keywords: 'Oklahoma legal procedures, court deadlines Oklahoma, legal document requirements, Oklahoma court rules, legal compliance',",
  'Trends': "  keywords: 'legal industry trends 2026, AI legal services, law firm technology, future of legal support, Oklahoma legal innovation',",
};

// Process directories
const dirsToProcess = [
  'c:\\Users\\ianna\\OneDrive\\Desktop\\GitHub\\BOLT-SITE\\app\\blog',
  'c:\\Users\\ianna\\OneDrive\\Desktop\\GitHub\\BOLT-SITE\\content\\blog-queue\\app\\blog'
];

let fixedGuides = 0;
let fixedKeywords = 0;

for (const baseDir of dirsToProcess) {
  if (!fs.existsSync(baseDir)) continue;
  const slugs = fs.readdirSync(baseDir);
  
  for (const slug of slugs) {
    const filePath = path.join(baseDir, slug, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Only process files that have the hardcoded block (our generated ones)
    if (!content.includes(hardcodedBlock)) continue;
    
    // Detect category from the file
    const categoryMatch = content.match(/<Shield className="w-4 h-4" \/>\s*\n\s*(.*)/);
    const category = categoryMatch ? categoryMatch[1].trim() : 'Process Serving';
    
    // Fix related guides
    const guides = getGuides(category, slug);
    content = content.replace(hardcodedBlock, buildRelatedGuidesBlock(guides));
    fixedGuides++;
    
    // Fix generic keywords
    if (content.includes(genericKeywords)) {
      let newKeywords = genericKeywords; // default
      for (const [key, value] of Object.entries(categoryKeywords)) {
        if (category.toLowerCase().includes(key.toLowerCase())) {
          newKeywords = value;
          break;
        }
      }
      content = content.replace(genericKeywords, newKeywords);
      fixedKeywords++;
    }
    
    fs.writeFileSync(filePath, content);
  }
}

console.log(`Fixed related guides in ${fixedGuides} files.`);
console.log(`Fixed keywords in ${fixedKeywords} files.`);
