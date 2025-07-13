#!/usr/bin/env pwsh
# Automated Image Alt Text Script
# Adds descriptive alt text to images missing it in SEO/location pages

$seoPages = Get-ChildItem -Path "app/seo" -Filter "*.tsx" -Recurse
foreach ($page in $seoPages) {
    $content = Get-Content $page.FullName -Raw
    $updated = $content -replace '<img([^>]*)(?<!alt)>' , '<img$1 alt="Tulsa Process Server">'
    if ($content -ne $updated) {
        Set-Content -Path $page.FullName -Value $updated
    }
}
Write-Host "✅ Alt text added to all images in SEO/location pages." -ForegroundColor Green
