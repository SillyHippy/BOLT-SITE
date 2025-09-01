#!/usr/bin/env node

/**
 * Schema Conflict Detector
 * Identifies potential duplicate schema types that could conflict
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 SCHEMA CONFLICT DETECTOR');
console.log('===========================');

// Schema types that commonly conflict
const conflictingSchemas = [
  'LocalBusiness',
  'FAQPage', 
  'QAPage',
  'Organization',
  'WebPage',
  'BreadcrumbList'
];

// Files to check
const filesToCheck = [
  'components/UnifiedSchema.tsx',
  'components/ui/ai-voice-supremacy.tsx',
  'components/enhanced-local-business-schema.tsx',
  'components/ui/enhanced-voice-search-2025.tsx'
];

function detectSchemaConflicts() {
  const schemaUsage = {};
  
  filesToCheck.forEach(filePath => {
    const fullPath = path.join(process.cwd(), filePath);
    
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      conflictingSchemas.forEach(schemaType => {
        const regex = new RegExp(`"@type":\\s*["']${schemaType}["']`, 'g');
        const matches = content.match(regex);
        
        if (matches) {
          if (!schemaUsage[schemaType]) {
            schemaUsage[schemaType] = [];
          }
          schemaUsage[schemaType].push({
            file: filePath,
            count: matches.length
          });
        }
      });
    }
  });
  
  // Report conflicts
  console.log('\n📊 SCHEMA USAGE ANALYSIS:');
  console.log('========================');
  
  let conflictsFound = false;
  
  Object.keys(schemaUsage).forEach(schemaType => {
    const usage = schemaUsage[schemaType];
    
    if (usage.length > 1) {
      console.log(`\n⚠️  POTENTIAL CONFLICT: ${schemaType}`);
      usage.forEach(item => {
        console.log(`   📄 ${item.file} (${item.count} instances)`);
      });
      conflictsFound = true;
    } else {
      console.log(`\n✅ ${schemaType}: No conflicts`);
      usage.forEach(item => {
        console.log(`   📄 ${item.file} (${item.count} instances)`);
      });
    }
  });
  
  if (conflictsFound) {
    console.log('\n🚨 RECOMMENDATIONS:');
    console.log('===================');
    console.log('• Remove duplicate LocalBusiness schemas');
    console.log('• Use only one FAQPage OR QAPage per page');
    console.log('• Consolidate Organization data');
    console.log('• Use @id references to link related schemas');
  } else {
    console.log('\n🎉 NO CONFLICTS DETECTED!');
    console.log('Your schema implementation looks clean.');
  }
}

detectSchemaConflicts();
