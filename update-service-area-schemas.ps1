$serviceAreaPages = Get-ChildItem -Path "app/service-areas/**/page.tsx" -Recurse

foreach ($file in $serviceAreaPages) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Check if the file contains UnifiedSchema but doesn't have image property
    if ($content -match '<UnifiedSchema' -and $content -match 'pageType="location"' -and -not ($content -match 'image=')) {
        Write-Host "Updating $($file.FullName)..."
        
        # Insert image property before the aggregateRating
        $updatedContent = $content -replace '(\s+priceRange="[^"]+")(\s+aggregateRating=)', '$1$2$3' -replace '(\s+priceRange="[^"]+")(\s+aggregateRating=)', '$1
          image="https://justlegalsolutions.org/images/jls-logo.webp"$2'
        
        # If there's no priceRange property before aggregateRating, try adding it after services
        if ($updatedContent -eq $content) {
            $updatedContent = $content -replace '(\s+services=\[[^\]]+\])(\s+aggregateRating=)', '$1
          image="https://justlegalsolutions.org/images/jls-logo.webp"$2'
        }
        
        # If the content was updated, save it back to the file
        if ($updatedContent -ne $content) {
            Set-Content -Path $file.FullName -Value $updatedContent
            Write-Host "Updated $($file.FullName) successfully."
        } else {
            Write-Host "Pattern not found in $($file.FullName). Manual update may be needed."
        }
    } else {
        Write-Host "Skipping $($file.FullName) - already has image property or doesn't have UnifiedSchema."
    }
}

Write-Host "Schema update process completed."
