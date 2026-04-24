#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const defaultSource = 'C:\\Users\\ianna\\Downloads\\Kimi_Agent_AI Blog SEO Pipeline\\organized-blog-posts';
const sourceRoot = path.resolve(process.env.KIMI_PIPELINE_SOURCE || defaultSource);
const destinationRoot = path.join(ROOT, 'content', 'blog-queue');
const sourceBlogRoot = path.join(sourceRoot, 'app', 'blog');

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

function walkFiles(dir, output = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, output);
    } else {
      output.push(fullPath);
    }
  }
  return output;
}

function inferTitleFromSource(source, slug) {
  const metadataTitle = source.match(/title\s*:\s*(['"`])([\s\S]*?)\1/);
  if (metadataTitle) return metadataTitle[2].trim();
  const h1Title = source.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Title) return h1Title[1].replace(/<[^>]+>/g, '').trim();
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function inferCategoryFromSource(slug, source) {
  const text = `${slug} ${source}`.toLowerCase();
  if (text.includes('notary') || text.includes('notar')) return 'Notary Services';
  if (text.includes('process server') || text.includes('service of process') || text.includes('served')) {
    return 'Process Serving';
  }
  return 'Legal Support';
}

function generateManifestFromBlogPages() {
  if (!fs.existsSync(sourceBlogRoot)) {
    throw new Error(`Missing app/blog source directory: ${sourceBlogRoot}`);
  }
  const pageFiles = walkFiles(sourceBlogRoot).filter((file) => file.endsWith(`${path.sep}page.tsx`));
  const posts = pageFiles.map((file) => {
    const slug = path.basename(path.dirname(file));
    const source = fs.readFileSync(file, 'utf8');
    return {
      slug,
      title: inferTitleFromSource(source, slug),
      category: inferCategoryFromSource(slug, source),
      file_path: path.relative(sourceRoot, file).replace(/\\/g, '/'),
    };
  });
  return {
    generated_at: new Date().toISOString(),
    source: 'generated-from-app-blog',
    posts,
  };
}

if (!fs.existsSync(sourceRoot)) {
  throw new Error(`Kimi pipeline source not found: ${sourceRoot}`);
}

const sourceManifestPath = path.join(sourceRoot, 'BLOG_MANIFEST.json');
const destinationManifestPath = path.join(destinationRoot, 'BLOG_MANIFEST.json');
if (fs.existsSync(sourceManifestPath)) {
  copyRecursive(sourceManifestPath, destinationManifestPath);
  console.log(`Imported manifest from: ${sourceManifestPath}`);
} else {
  const generatedManifest = generateManifestFromBlogPages();
  fs.mkdirSync(path.dirname(destinationManifestPath), { recursive: true });
  fs.writeFileSync(destinationManifestPath, `${JSON.stringify(generatedManifest, null, 2)}\n`, 'utf8');
  console.log(`Generated manifest with ${generatedManifest.posts.length} posts (BLOG_MANIFEST.json was missing).`);
}

const sourceReadmePath = path.join(sourceRoot, 'README.md');
if (fs.existsSync(sourceReadmePath)) {
  copyRecursive(sourceReadmePath, path.join(destinationRoot, 'README.md'));
}
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
