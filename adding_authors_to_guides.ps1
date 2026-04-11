$folders = @(
    "ai-skip-tracing-guide-oklahoma",
    "become-process-server-oklahoma-complete-guide",
    "family-law-service-guide-tulsa",
    "oklahoma-electronic-service-guide",
    "process-server-business-startup-guide",
    "process-server-marketing-guide",
    "process-server-safety-guide-oklahoma",
    "process-server-tulsa-guide",
    "process-serving-mistakes-guide"
)

foreach ($folder in $folders) {
    $path = "c:\Users\ianna\OneDrive\Desktop\GitHub\BOLT-SITE\app\$folder\page.tsx"
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        if ($content -match "</article>") {
            if ($content -notmatch "AuthorBox") {
                # 1. Add import
                $content = $content -replace "import \{ Navbar \} from '@/components/ui/navbar';", "import { Navbar } from '@/components/ui/navbar';`nimport { AuthorBox } from '@/components/ui/author-box';"
                
                # 2. Add AuthorBox component
                $content = $content -replace "</article>", "</article>`n          <div className=`"mt-12`">`n            <AuthorBox />`n          </div>"
                
                Set-Content -Path $path -Value $content -NoNewline
                Write-Host "Updated page.tsx in $folder"
            }
        }
    }
}
