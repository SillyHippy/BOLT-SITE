#!/usr/bin/env node

/**
 * Master AI Optimization Runner
 * Runs all AI citation optimization scripts in correct order
 * Safe for Cloudflare Pages static builds
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('');
console.log('╔══════════════════════════════════════════════════════════╗');
console.log('║        🚀 AI CITATION OPTIMIZATION SUITE                 ║');
console.log('║        Just Legal Solutions - Tulsa, OK                  ║');
console.log('╚══════════════════════════════════════════════════════════╝');
console.log('');

const scriptsDir = __dirname;
const startTime = Date.now();

// Scripts to run in order
const scripts = [
  { name: 'AI Knowledge Graph', file: 'ai-knowledge-graph.js' },
  { name: 'AI Freshness Signals', file: 'ai-freshness-signals.js' },
  { name: 'Answer Engine Optimization', file: 'answer-engine-optimization.js' },
  { name: 'AI Entity Signals', file: 'ai-entity-signals.js' },
  { name: 'AI Competitor Differentiation', file: 'ai-competitor-signals.js' },
  { name: 'AI Local Authority', file: 'ai-local-authority.js' },
  { name: 'AI Social Activity', file: 'ai-social-signals.js' }
];

let successCount = 0;
let failCount = 0;

scripts.forEach((script, index) => {
  const scriptPath = path.join(scriptsDir, script.file);
  
  // Check if script exists
  if (!fs.existsSync(scriptPath)) {
    console.log(`⚠️  [${index + 1}/${scripts.length}] ${script.name} - SKIPPED (file not found)`);
    return;
  }
  
  console.log(`\n[${index + 1}/${scripts.length}] Running: ${script.name}`);
  console.log('─'.repeat(50));
  
  try {
    execSync(`node "${scriptPath}"`, { 
      stdio: 'inherit',
      cwd: path.join(scriptsDir, '..')
    });
    successCount++;
    console.log(`✅ ${script.name} completed`);
  } catch (error) {
    failCount++;
    console.log(`❌ ${script.name} failed: ${error.message}`);
  }
});

const duration = ((Date.now() - startTime) / 1000).toFixed(2);

console.log('\n');
console.log('═'.repeat(60));
console.log(`📊 RESULTS: ${successCount} succeeded, ${failCount} failed`);
console.log(`⏱️  Duration: ${duration}s`);
console.log('═'.repeat(60));

// Create a build manifest for tracking
const manifest = {
  lastRun: new Date().toISOString(),
  scriptsRun: successCount,
  scriptsFailed: failCount,
  duration: `${duration}s`,
  environment: process.env.CF_PAGES ? 'cloudflare-pages' : 'local'
};

const manifestPath = path.join(scriptsDir, '../public/ai-search/build-manifest.json');
const manifestDir = path.dirname(manifestPath);
if (!fs.existsSync(manifestDir)) {
  fs.mkdirSync(manifestDir, { recursive: true });
}
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log('\n✅ Build manifest saved to public/ai-search/build-manifest.json');
console.log('🎯 AI Citation Optimization complete!');
console.log('');

// Exit with error if any script failed
if (failCount > 0) {
  process.exit(1);
}
