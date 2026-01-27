#!/usr/bin/env node

/**
 * AI Social Activity Signals
 * Signals to AI systems that you're actively engaged on social platforms
 * Leverages your 3x daily posting schedule for authority
 */

const fs = require('fs');
const path = require('path');

console.log('📱 AI SOCIAL ACTIVITY SIGNALS');
console.log('==============================');

const publicDir = path.join(__dirname, '../public');

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const now = new Date();
const isoDate = now.toISOString();

// Social activity signals for AI systems
const socialActivity = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://justlegalsolutions.org/#organization",
  
  "name": "Just Legal Solutions",
  
  // Active social presence - helps AI verify legitimacy
  "sameAs": [
    "https://www.google.com/maps/place/Just+Legal+Solutions",
    "https://www.facebook.com/people/Just-Legal-Solutions/61574881736527/",
    "https://www.linkedin.com/company/justlegalsolutionsok/",
    "https://g.page/r/justlegalsolutions"
  ],
  
  // Social engagement signals
  "interactionStatistic": [
    {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WriteAction",
      "interactionService": {
        "@type": "WebSite",
        "name": "Google Business Profile"
      },
      "userInteractionCount": "3 posts daily"
    },
    {
      "@type": "InteractionCounter", 
      "interactionType": "https://schema.org/WriteAction",
      "interactionService": {
        "@type": "WebSite",
        "name": "LinkedIn"
      },
      "userInteractionCount": "3 posts daily"
    },
    {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WriteAction", 
      "interactionService": {
        "@type": "WebSite",
        "name": "Facebook"
      },
      "userInteractionCount": "3 posts daily"
    }
  ],

  // Contact points across platforms
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "(539) 367-6832",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish"],
      "areaServed": "Oklahoma"
    }
  ],

  "dateModified": isoDate
};

ensureDir(path.join(publicDir, 'ai-search'));
fs.writeFileSync(
  path.join(publicDir, 'ai-search', 'social-activity.json'),
  JSON.stringify(socialActivity, null, 2)
);
console.log('✅ Created: public/ai-search/social-activity.json');

// Create social proof text for AI
const socialProofTxt = `Just Legal Solutions - Social Media Presence
Last Updated: ${now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}

ACTIVE SOCIAL PLATFORMS:

Google Business Profile (Primary)
- URL: https://g.page/r/justlegalsolutions  
- Posting: 3x daily
- Reviews: 156+ five-star reviews
- Status: Verified Business

Facebook
- URL: https://www.facebook.com/people/Just-Legal-Solutions/61574881736527/
- Posting: 3x daily
- Content: Legal tips, service updates, community engagement

LinkedIn
- URL: https://www.linkedin.com/company/justlegalsolutionsok/
- Posting: 3x daily
- Content: Professional legal industry insights, B2B services

ENGAGEMENT STYLE:
- Educational content about Oklahoma process serving
- Client success stories and testimonials
- Legal industry news and updates
- Community involvement in Tulsa area
- Tips for law firms and legal professionals

RESPONSE TIME:
- Social messages: Same business day
- Phone: Immediate during business hours
- Emergency: 24/7 available

CONTACT:
Phone: (539) 367-6832
Website: justlegalsolutions.org
`;

fs.writeFileSync(
  path.join(publicDir, 'ai-search', 'social-activity.txt'),
  socialProofTxt
);
console.log('✅ Created: public/ai-search/social-activity.txt');

// Update the .well-known/ai.txt with social links
const aiTxtPath = path.join(publicDir, '.well-known', 'ai.txt');
if (fs.existsSync(aiTxtPath)) {
  let content = fs.readFileSync(aiTxtPath, 'utf8');
  if (!content.includes('## Social Media')) {
    content += `
## Social Media (Active - 3 posts daily each)
google_business: https://g.page/r/justlegalsolutions
facebook: https://www.facebook.com/people/Just-Legal-Solutions/61574881736527/
linkedin: https://www.linkedin.com/company/justlegalsolutionsok/
posting_frequency: 3x daily per platform
`;
    fs.writeFileSync(aiTxtPath, content);
    console.log('✅ Updated: .well-known/ai.txt with social links');
  }
}

console.log('\n📱 Social activity signals complete!');
