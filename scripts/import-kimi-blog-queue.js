#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const defaultSource = 'C:\\Users\\ianna\\Downloads\\Kimi_Agent_AI Blog SEO Pipeline\\organized-blog-posts';
const sourceRoot = path.resolve(process.env.KIMI_PIPELINE_SOURCE || defaultSource);
const destinationRoot = path.join(ROOT, 'content', 'blog-queue');

function copyRecursive(source, destination) {
  const stats = fs.statSync(source);
  if (stats.isDirectory()) {
    fs.mkdirSync(destination, { recursive: true });
    for (const entry of fs.readdirSync(source)) {
      copyRecursive(path.join(source, entry), path.join(destination, entry));
    }
    return;
  }
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

if (!fs.existsSync(sourceRoot)) {
  throw new Error(`Kimi pipeline source not found: ${sourceRoot}`);
}

copyRecursive(path.join(sourceRoot, 'BLOG_MANIFEST.json'), path.join(destinationRoot, 'BLOG_MANIFEST.json'));
copyRecursive(path.join(sourceRoot, 'README.md'), path.join(destinationRoot, 'README.md'));
copyRecursive(path.join(sourceRoot, 'app', 'blog'), path.join(destinationRoot, 'app', 'blog'));

const sourcePublicRoot = path.join(sourceRoot, 'public');
if (fs.existsSync(sourcePublicRoot)) {
  copyRecursive(sourcePublicRoot, path.join(destinationRoot, 'public'));
  console.log(`Imported public assets from: ${sourcePublicRoot}`);
} else {
  console.log('No public assets folder found in pipeline export (skipping public import).');
}

console.log(`Imported queue from: ${sourceRoot}`);
console.log(`Destination: ${destinationRoot}`);
