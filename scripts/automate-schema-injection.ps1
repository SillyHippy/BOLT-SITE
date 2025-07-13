#!/usr/bin/env pwsh
# Automated Schema Markup Injection Script
# Adds FAQ, Service, and LocalBusiness schema to SEO/location pages

$faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a process server?","acceptedAnswer":{"@type":"Answer","text":"A process server delivers legal documents to individuals involved in court cases."}}]}'
$serviceSchema = '{"@context":"https://schema.org","@type":"Service","serviceType":"Process Serving","areaServed":"Tulsa, OK"}'
$localBusinessSchema = '{"@context":"https://schema.org","@type":"LocalBusiness","name":"Just Legal Solutions","address":{"@type":"PostalAddress","addressLocality":"Tulsa","addressRegion":"OK","postalCode":"74103","streetAddress":"Your Address Here"},"telephone":"Your Phone Here","url":"https://justlegalsolutions.org"}'

$seoPages = Get-ChildItem -Path "app/seo" -Filter "*.tsx" -Recurse
foreach ($page in $seoPages) {
    $content = Get-Content $page.FullName -Raw
    if ($content -notmatch 'FAQPage') {
        $schemaBlock = "\n<script type=\"application/ld+json\">$faqSchema</script>\n<script type=\"application/ld+json\">$serviceSchema</script>\n<script type=\"application/ld+json\">$localBusinessSchema</script>\n"
        $updated = $content -replace "(<head[^>]*>)", "$1$schemaBlock"
        Set-Content -Path $page.FullName -Value $updated
    }
}
Write-Host "✅ Schema markup injected into all SEO/location pages." -ForegroundColor Green
