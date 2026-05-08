$source = $PSScriptRoot
$destination = "C:\Users\gdalbey\Documents\GitHub\ResumeProject"

Get-ChildItem -Path $source -Recurse | Where-Object {
    $_.FullName -notmatch '\\node_modules(\\|$)'
} | ForEach-Object {
    $relativePath = $_.FullName.Substring($source.Length).TrimStart('\')
    $destPath = Join-Path $destination $relativePath

    if ($_.PSIsContainer) {
        if (-not (Test-Path $destPath)) {
            New-Item -ItemType Directory -Path $destPath -Force | Out-Null
        }
    } else {
        $destDir = Split-Path $destPath -Parent
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
        }
        Copy-Item -Path $_.FullName -Destination $destPath -Force
    }
}

Write-Host "Deploy complete. Files copied to: $destination"
