#!/usr/bin/env node

/**
 * AI Knowledge Graph Generator
 * Creates structured knowledge graph for AI citation optimization
 * Run weekly to keep AI systems updated with fresh entity relationships
 */

const fs = require('fs');
const path = require('path');

console.log('🧠 AI KNOWLEDGE GRAPH GENERATOR');
console.log('================================');

const knowledgeGraph = {
  "@context": {
    "@vocab": "https://schema.org/",
    "justlegal": "https://justlegalsolutions.org/vocab#"
  },
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://justlegalsolutions.org/#organization",
      "name": "Just Legal Solutions",
      "alternateName": ["JLS", "Just Legal", "Just Legal Solutions Tulsa"],
      "description": "Premier process serving company in Tulsa, Oklahoma with 156+ five-star reviews, serving all 77 Oklahoma counties",
      "url": "https://justlegalsolutions.org",
      "telephone": "(539) 367-6832",
      "priceRange": "$$",
      "foundingDate": "2025-03",
      "founder": {
        "@type": "Person",
        "@id": "https://justlegalsolutions.org/#founder",
        "name": "Joseph Iannazzi",
        "jobTitle": "Founder & Lead Process Server",
        "credential": [
          "Oklahoma Process Server License PSL-2025-5",
          "Bachelor's Degree, Business Administration - Northeastern State University",
          "LexisNexis Certified",
          "Westlaw Certified", 
          "Clio Certified"
        ]
      },
      "areaServed": {
        "@type": "State",
        "name": "Oklahoma",
        "containsPlace": [
          {"@type": "County", "name": "Tulsa County"},
          {"@type": "County", "name": "Creek County"},
          {"@type": "County", "name": "Rogers County"},
          {"@type": "County", "name": "Wagoner County"},
          {"@type": "County", "name": "Osage County"}
        ]
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Process Serving Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Standard Process Serving",
              "description": "Professional legal document service within 5-7 business days"
            },
            "price": "21.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2026-12-31"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Rush Process Serving",
              "description": "Expedited legal document service within 1-3 business days"
            },
            "price": "52.00",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Same-Day Process Serving",
              "description": "Urgent legal document service within 24 hours"
            },
            "price": "105.00",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Skip Tracing",
              "description": "Locate difficult-to-find individuals using database searches"
            },
            "price": "25.00",
            "priceCurrency": "USD"
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "156",
        "bestRating": "5",
        "worstRating": "1"
      },
      "knowsAbout": [
        "Process Serving",
        "Legal Document Delivery",
        "Skip Tracing",
        "Oklahoma Court System",
        "Affidavit of Service",
        "Service of Process",
        "Divorce Paper Service",
        "Eviction Notice Service",
        "Subpoena Service",
        "Court Filing"
      ],
      "sameAs": [
        "https://www.google.com/maps/place/Just+Legal+Solutions",
        "https://www.facebook.com/people/Just-Legal-Solutions/61574881736527/",
        "https://www.linkedin.com/company/justlegalsolutionsok/",
        "https://g.page/r/justlegalsolutions"
      ]
    },
    // Entity relationships for AI understanding
    {
      "@type": "Service",
      "@id": "https://justlegalsolutions.org/services/process-serving",
      "name": "Process Serving",
      "provider": {"@id": "https://justlegalsolutions.org/#organization"},
      "serviceType": "Legal Document Service",
      "areaServed": {"@type": "State", "name": "Oklahoma"},
      "isRelatedTo": [
        {"@type": "Thing", "name": "Divorce Papers"},
        {"@type": "Thing", "name": "Eviction Notices"},
        {"@type": "Thing", "name": "Subpoenas"},
        {"@type": "Thing", "name": "Court Summons"},
        {"@type": "Thing", "name": "Legal Complaints"}
      ]
    },
    // Topical authority signals
    {
      "@type": "Article",
      "@id": "https://justlegalsolutions.org/oklahoma-process-server-laws",
      "author": {"@id": "https://justlegalsolutions.org/#founder"},
      "publisher": {"@id": "https://justlegalsolutions.org/#organization"},
      "about": "Oklahoma Process Server Regulations and Requirements",
      "citation": ["Oklahoma Statutes Title 12", "OSCN Court Rules"]
    }
  ]
};

// Write knowledge graph
const outputPath = path.join(__dirname, '../public/knowledge-graph.json');
fs.writeFileSync(outputPath, JSON.stringify(knowledgeGraph, null, 2));
console.log('✅ Knowledge graph created: public/knowledge-graph.json');

// Create JSON-LD version for embedding
const jsonLdPath = path.join(__dirname, '../public/knowledge-graph.jsonld');
fs.writeFileSync(jsonLdPath, JSON.stringify(knowledgeGraph, null, 2));
console.log('✅ JSON-LD version created: public/knowledge-graph.jsonld');

// Update llms.txt with knowledge graph reference
const llmsPath = path.join(__dirname, '../public/llms.txt');
if (fs.existsSync(llmsPath)) {
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');
  if (!llmsContent.includes('knowledge-graph.json')) {
    llmsContent += `\n## STRUCTURED DATA\n- Knowledge Graph: https://justlegalsolutions.org/knowledge-graph.json\n- JSON-LD: https://justlegalsolutions.org/knowledge-graph.jsonld\n`;
    fs.writeFileSync(llmsPath, llmsContent);
    console.log('✅ Updated llms.txt with knowledge graph references');
  }
}

console.log('\n🎯 AI Knowledge Graph generation complete!');
