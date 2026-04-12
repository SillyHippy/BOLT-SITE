const fs = require('fs');

const p = 'scripts/kimi-data.json';
const data = JSON.parse(fs.readFileSync(p, 'utf8'));

let count = 0;
for (const loc of data) {
  if (loc.faqs) {
    for (const faq of loc.faqs) {
      if (faq.answer) {
        const old = faq.answer;
        // Strip prices like "($265)" or "$265 "
        faq.answer = faq.answer.replace(/\s?\(\$(60|85|100|150|265)\)/g, '');
        faq.answer = faq.answer.replace(/\$(60|85|100|150|265)\s?/g, '');
        if (old !== faq.answer) count++;
      }
    }
  }
}

fs.writeFileSync(p, JSON.stringify(data, null, 2));
console.log('Stripped prices from ' + count + ' FAQs in kimi-data.json');
