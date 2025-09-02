# Fix Review schemas by adding itemReviewed field
$filePath = "components\ReviewSchema.tsx"
$content = Get-Content $filePath -Raw

# Replace pattern: add itemReviewed after "@type": "Review",
$pattern = '("@type": "Review",\s*)"author":'
$replacement = '$1"itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author":'

$newContent = $content -replace $pattern, $replacement

Set-Content $filePath $newContent -Encoding UTF8
Write-Host "Fixed Review schemas in $filePath"
