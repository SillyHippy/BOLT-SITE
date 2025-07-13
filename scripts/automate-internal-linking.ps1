#!/usr/bin/env pwsh
# Automated Internal Linking Script
# Adds links to main Tulsa pages in all SEO/location pages

$mainTulsaLinks = @(
    '[Tulsa Process Server](/tulsa-process-server)',
    '[Process Server Tulsa](/process-server-tulsa)',
    '[Same Day Process Serving Tulsa](/seo/same-day-process-serving-tulsa)',
    '[Courier Services Tulsa](/courier-services-tulsa)'
)

$seoPages = Get-ChildItem -Path "app/seo" -Filter "*.tsx" -Recurse
foreach ($page in $seoPages) {
    $content = Get-Content $page.FullName
    if ($content -notmatch $mainTulsaLinks[0]) {
        Add-Content -Path $page.FullName -Value "\n<!-- Internal Links -->\n" + ($mainTulsaLinks -join " | ")
    }
}
Write-Host "✅ Internal linking added to all SEO/location pages." -ForegroundColor Green
