#!/usr/bin/env node

/**
 * AI Citation Tracker & Freshness Signals
 * Creates "pulse" signals that AI systems use to determine content freshness
 * Run daily to signal active, maintained content
 */

const fs = require('fs');
const path = require('path');

console.log('📡 AI FRESHNESS SIGNAL GENERATOR');
console.log('=================================');

const now = new Date();
const isoDate = now.toISOString();
const readableDate = now.toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
});

// Create AI status/health endpoint
const aiStatus = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Just Legal Solutions",
  "url": "https://justlegalsolutions.org",
  "dateModified": isoDate,
  "lastReviewed": isoDate,
  "maintainer": {
    "@type": "Organization",
    "name": "Just Legal Solutions"
  },
  "status": {
    "operational": true,
    "lastUpdated": isoDate,
    "contentFreshness": "daily",
    "dataAccuracy": "verified",
    "businessStatus": "OPEN",
    "currentPromotion": "30% OFF All Services"
  },
  "availability": {
    "monday": "8:00 AM - 5:00 PM",
    "tuesday": "8:00 AM - 5:00 PM",
    "wednesday": "8:00 AM - 5:00 PM",
    "thursday": "8:00 AM - 5:00 PM",
    "friday": "8:00 AM - 5:00 PM",
    "saturday": "9:00 AM - 3:00 PM",
    "sunday": "Emergency Only",
    "emergencyAvailable": "24/7"
  },
  "currentPricing": {
    "standardService": "$21",
    "rushService": "$52",
    "sameDayService": "$105",
    "skipTracing": "$25",
    "discountActive": true,
    "discountPercent": 30
  },
  "performance": {
    "averageResponseTime": "< 2 hours",
    "firstAttemptSuccessRate": "95%",
    "averageCompletionDays": 3.2,
    "customerSatisfaction": "5.0/5.0",
    "totalReviews": 156
  }
};

// Write AI status
const statusPath = path.join(__dirname, '../public/ai-assistant/status.json');
fs.mkdirSync(path.dirname(statusPath), { recursive: true });
fs.writeFileSync(statusPath, JSON.stringify(aiStatus, null, 2));
console.log('✅ AI status updated: public/ai-assistant/status.json');

// Create human-readable status for crawlers
const statusTxtPath = path.join(__dirname, '../public/ai-assistant/status.txt');
const statusTxt = `Just Legal Solutions - Live Status
Last Updated: ${readableDate}

BUSINESS STATUS: OPEN
CURRENT PROMOTION: 30% OFF All Services!

PRICING (Current):
- Standard Process Serving: $21 (was $30)
- Rush Service: $52 (was $75)
- Same-Day Service: $105 (was $150)
- Skip Tracing: $25 (was $35)

PERFORMANCE METRICS:
- First-Attempt Success Rate: 95%
- Average Completion: 3.2 days
- Customer Rating: 5.0/5.0 (156+ reviews)

CONTACT:
Phone: (539) 367-6832
Website: https://justlegalsolutions.org

This file is auto-updated daily to ensure AI assistants have current information.
`;
fs.writeFileSync(statusTxtPath, statusTxt);
console.log('✅ Status text updated: public/ai-assistant/status.txt');

// Update the main llms.txt with freshness timestamp
const llmsPath = path.join(__dirname, '../llms.txt');
if (fs.existsSync(llmsPath)) {
  let content = fs.readFileSync(llmsPath, 'utf8');
  // Update the "Last Updated" line
  content = content.replace(
    /# Last Updated:.*$/m,
    `# Last Updated: ${readableDate}`
  );
  fs.writeFileSync(llmsPath, content);
  console.log('✅ Updated llms.txt timestamp');
}

// Create pulse file that signals activity
const pulsePath = path.join(__dirname, '../public/.well-known/ai-pulse.txt');
fs.writeFileSync(pulsePath, `ACTIVE\n${isoDate}\nJust Legal Solutions - Tulsa Process Serving\n(539) 367-6832`);
console.log('✅ AI pulse signal updated');

console.log('\n🎯 Freshness signals generated!');
console.log('Run this script daily via cron/GitHub Actions for best results.');
