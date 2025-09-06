param(
    [switch]$WhatIf = $false
)

# Find all service area pages
$serviceAreaPages = Get-ChildItem -Path "app/service-areas/**/page.tsx" -Recurse

foreach ($page in $serviceAreaPages) {
    Write-Host "Processing: $($page.FullName)"
    $content = Get-Content -Path $page.FullName -Raw
    $modified = $false
    
    # Check if UnifiedSchema is present but doesn't have an image property
    if ($content -match '<UnifiedSchema[^>]*>' -and -not ($content -match 'image=["'']')) {
        Write-Host "  - Adding image field to UnifiedSchema"
        
        # Find the appropriate position to insert the image prop
        # We'll look for priceRange first, then fall back to services or description
        if ($content -match '(\s+priceRange="[^"]+")(\s+aggregateRating=|\s+\/>|\s*>)') {
            $replacement = '$1
          image="https://justlegalsolutions.org/images/jls-logo.webp"$2'
            $content = $content -replace '(\s+priceRange="[^"]+")(\s+aggregateRating=|\s+\/>|\s*>)', $replacement
            $modified = $true
        }
        elseif ($content -match '(\s+services=\[[^\]]+\])(\s+faqItems=|\s+aggregateRating=|\s+\/>|\s*>)') {
            $replacement = '$1
          image="https://justlegalsolutions.org/images/jls-logo.webp"$2'
            $content = $content -replace '(\s+services=\[[^\]]+\])(\s+faqItems=|\s+aggregateRating=|\s+\/>|\s*>)', $replacement
            $modified = $true
        }
        elseif ($content -match '(\s+description="[^"]+")(\s+breadcrumbItems=|\s+location=|\s+services=|\s+\/>|\s*>)') {
            $replacement = '$1
          image="https://justlegalsolutions.org/images/jls-logo.webp"$2'
            $content = $content -replace '(\s+description="[^"]+")(\s+breadcrumbItems=|\s+location=|\s+services=|\s+\/>|\s*>)', $replacement
            $modified = $true
        }
        else {
            Write-Host "  - Could not find a suitable position to insert image field in UnifiedSchema" -ForegroundColor Yellow
        }
    }
    
    # Save changes if modifications were made
    if ($modified) {
        if ($WhatIf) {
            Write-Host "  - Would update file (WhatIf mode)" -ForegroundColor Cyan
        } else {
            Write-Host "  - Updating file" -ForegroundColor Green
            Set-Content -Path $page.FullName -Value $content
        }
    } else {
        Write-Host "  - No changes needed" -ForegroundColor Gray
    }
}

Write-Host "`nSchema update complete!" -ForegroundColor Green
Write-Host "Run the schema-validation.ps1 script again to verify the fixes"
