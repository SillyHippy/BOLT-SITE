const fs = require('fs');
const path = require('path');

// Count live new posts (ones we deployed)
const liveDir = 'c:\\Users\\ianna\\OneDrive\\Desktop\\GitHub\\BOLT-SITE\\app\\blog';
const queueDir = 'c:\\Users\\ianna\\OneDrive\\Desktop\\GitHub\\BOLT-SITE\\content\\blog-queue\\app\\blog';

const newLiveSlugs = [
    'ai-skip-tracing-finding-evasive-defendants-oklahoma',
    'automation-streamlines-legal-document-workflow-oklahoma',
    'calendar-management-court-deadline-tracking-virtual-support-oklahoma',
    'client-portals-legal-services-secure-document-access-oklahoma',
    'client-relationship-management-oklahoma-law-firms',
    'cloud-based-case-management-process-servers-oklahoma',
    'courier-services-integrate-process-serving-workflows-oklahoma',
    'data-entry-database-management-legal-practices-oklahoma',
    'document-courier-vs-regular-mail-law-firms-oklahoma',
    'document-organization-filing-systems-legal-practices-oklahoma'
];

console.log('=== LIVE POSTS (10 deployed to app/blog) ===');
let liveOk = 0;
for (const slug of newLiveSlugs) {
    const exists = fs.existsSync(path.join(liveDir, slug, 'page.tsx'));
    console.log(`  ${exists ? '✅' : '❌'} ${slug}`);
    if (exists) liveOk++;
}

console.log(`\nLive: ${liveOk}/${newLiveSlugs.length} verified`);

// Count queued posts
const queueSlugs = fs.readdirSync(queueDir).filter(f => {
    return fs.statSync(path.join(queueDir, f)).isDirectory() && 
           fs.existsSync(path.join(queueDir, f, 'page.tsx'));
});

// Load manifest
const manifest = JSON.parse(fs.readFileSync('c:\\Users\\ianna\\OneDrive\\Desktop\\GitHub\\BOLT-SITE\\content\\blog-queue\\BLOG_MANIFEST.json', 'utf8'));

console.log(`\n=== QUEUE STATUS ===`);
console.log(`  Queue directory: ${queueSlugs.length} post folders`);
console.log(`  Manifest entries: ${manifest.posts.length} posts`);

// Check for any "Joseph Iannazzi" still in the new posts
let badAuthor = 0;
for (const slug of [...newLiveSlugs]) {
    const fp = path.join(liveDir, slug, 'page.tsx');
    if (fs.existsSync(fp)) {
        const content = fs.readFileSync(fp, 'utf8');
        if (content.includes('Joseph Iannazzi')) {
            console.log(`  ⚠️ ${slug} still has "Joseph Iannazzi"`);
            badAuthor++;
        }
    }
}
for (const slug of queueSlugs) {
    const fp = path.join(queueDir, slug, 'page.tsx');
    const content = fs.readFileSync(fp, 'utf8');
    if (content.includes('Joseph Iannazzi')) {
        badAuthor++;
    }
}
console.log(`\n=== AUTHOR CHECK ===`);
console.log(`  Files still with "Joseph Iannazzi": ${badAuthor}`);
console.log(`  ${badAuthor === 0 ? '✅ All clean' : '⚠️ Needs fix'}`);
