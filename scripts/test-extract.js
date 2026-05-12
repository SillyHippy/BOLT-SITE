const fs = require('fs');
const path = require('path');

const kimiPostPath = 'C:\\Users\\ianna\\Downloads\\Kimi_Agent_300代理内容扩展\\content\\blog-queue\\app\\blog\\virtual-assistant-transform-law-firm-efficiency-oklahoma\\page.tsx';
const content = fs.readFileSync(kimiPostPath, 'utf8');

function extractData(content, slug) {
    // Extract metadata
    const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
    const descMatch = content.match(/description:\s*['"](.*?)['"]/);
    const dateMatch = content.match(/['"]article:published_time['"]:\s*['"](.*?)['"]/);
    const categoryMatch = content.match(/<span className="inline-block[^>]*>\s*(.*?)\s*<\/span>/);
    
    // Extract FAQs
    const faqsMatch = content.match(/const faqs = (\[[\s\S]*?\]);/);
    
    // Extract Article Content
    const articleStart = content.indexOf('<article className="prose prose-lg max-w-none">');
    const faqHeading = content.indexOf('<h2>Frequently Asked Questions</h2>');
    const conclusionHeading = content.indexOf('<h2>Conclusion</h2>');
    const articleEnd = content.indexOf('</article>');
    
    let mainContent = '';
    let conclusionContent = '';
    
    if (articleStart !== -1 && faqHeading !== -1) {
        mainContent = content.substring(articleStart + '<article className="prose prose-lg max-w-none">'.length, faqHeading).trim();
    }
    
    if (conclusionHeading !== -1 && articleEnd !== -1) {
        conclusionContent = content.substring(conclusionHeading, articleEnd).trim();
    }

    // Extract Reading Time
    const readingTimeMatch = content.match(/<span>(~.*?)<\/span>/);
    
    return {
        title: titleMatch ? titleMatch[1] : 'Untitled',
        description: descMatch ? descMatch[1] : '',
        date: dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0],
        category: categoryMatch ? categoryMatch[1] : 'Legal Services',
        readingTime: readingTimeMatch ? readingTimeMatch[1] : '~10 min',
        faqs: faqsMatch ? faqsMatch[1] : '[]',
        mainContent,
        conclusionContent,
        slug
    };
}

const data = extractData(content, 'virtual-assistant-transform-law-firm-efficiency-oklahoma');
console.log(JSON.stringify(data, null, 2).substring(0, 1000) + '...\n\n');
console.log("Main Content Length:", data.mainContent.length);
console.log("Conclusion Length:", data.conclusionContent.length);
