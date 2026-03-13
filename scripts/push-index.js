const SEOPerformanceBot = require('./seo-automation.js');

const bot = new SEOPerformanceBot();

const urls = [
    'https://justlegalsolutions.org/process-serving',
    'https://justlegalsolutions.org/skip-tracing',
    'https://justlegalsolutions.org/subpoena-service',
    'https://justlegalsolutions.org/eviction-notice-service',
    'https://justlegalsolutions.org/same-day-process-server',
    'https://justlegalsolutions.org/courier-services',
    'https://justlegalsolutions.org/how-much-does-process-server-cost',
    'https://justlegalsolutions.org/what-happens-if-someone-refuses-service',
    'https://justlegalsolutions.org/how-long-does-process-serving-take',
    'https://justlegalsolutions.org/can-process-server-serve-on-sunday'
];

bot.submitToIndexNow(urls).then((status) => {
    console.log(`Successfully submitted ${urls.length} URLs to IndexNow. Status Code: ${status}`);
}).catch(console.error);
