$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot/..
$paths = @(
  'app/(main)/oklahoma-tools',
  'app/(main)/learn',
  'app/(main)/glossary',
  'app/(main)/compare',
  'app/(main)/oklahoma-process-serving-hub',
  'app/(main)/resources/tools-and-guides',
  'app/resources/become-process-server-oklahoma',
  'app/resources/future-of-process-serving'
)
foreach ($p in $paths) {
  if (-not (Test-Path $p)) { Write-Host "Skip missing $p"; continue }
  Get-ChildItem -Path $p -Filter *.tsx -Recurse | ForEach-Object {
    $c = [System.IO.File]::ReadAllText($_.FullName)
    $orig = $c
    $c = $c.Replace("import PageLayout from '@/components/PageLayout';", "import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';")
    $c = $c.Replace('<PageLayout', '<HubPageLayout')
    $c = $c.Replace('</PageLayout>', '</HubPageLayout>')
    $c = $c.Replace("import CitationBanner from '@/components/CitationBanner';`r`n", '')
    $c = $c.Replace("import CitationBanner from '@/components/CitationBanner';`n", '')
    $c = $c.Replace('/tools/', '/oklahoma-tools/')
    $c = $c.Replace('href="/tools"', 'href="/oklahoma-tools"')
    $c = $c.Replace("href='/tools'", "href='/oklahoma-tools'")
    $c = $c.Replace('src="/logo.png"', 'src="/images/jls-logo.webp"')
    if ($c -ne $orig) {
      [System.IO.File]::WriteAllText($_.FullName, $c, [System.Text.UTF8Encoding]::new($false))
      Write-Host "Updated $($_.FullName)"
    }
  }
}
Write-Host 'Done.'
