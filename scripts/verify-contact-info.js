#!/usr/bin/env node
/**
 * Contact Info Verification Script
 * Scans built HTML files for required phone and email, logs any issues per page.
 */

const fs = require('fs');
const path = require('path');

// --- CONFIG ---
const BUILD_DIR = path.join(__dirname, '../out'); // Next.js static export dir
const LOG_FILE = path.join(__dirname, '../contact-log.txt');
const REQUIRED_PHONE = '(539) 367-6832';
const REQUIRED_EMAIL = 'info@justlegalsolutions.org';

function findHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  }
  return results;
}

function verifyContactInfo() {
  const htmlFiles = findHtmlFiles(BUILD_DIR);
  const issues = [];
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const hasPhone = content.includes(REQUIRED_PHONE);
    const hasEmail = content.includes(REQUIRED_EMAIL);
    if (!hasPhone || !hasEmail) {
      issues.push({
        file: path.relative(BUILD_DIR, file),
        hasPhone,
        hasEmail
      });
    }
  }
  return issues;
}

function logResults(issues) {
  const now = new Date().toISOString();
  let log = `\n📞 Contact Verification - ${now}\n`;
  if (issues.length === 0) {
    log += 'All pages PASS: required phone and email found.\n';
  } else {
    log += `FAILURES (${issues.length}):\n`;
    for (const issue of issues) {
      log += `- ${issue.file}: `;
      if (!issue.hasPhone && !issue.hasEmail) log += 'MISSING phone & email';
      else if (!issue.hasPhone) log += 'MISSING phone';
      else if (!issue.hasEmail) log += 'MISSING email';
      log += '\n';
    }
  }
  fs.appendFileSync(LOG_FILE, log);
  console.log(log);
}

if (require.main === module) {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error('Build directory not found:', BUILD_DIR);
    process.exit(1);
  }
  const issues = verifyContactInfo();
  logResults(issues);
}
