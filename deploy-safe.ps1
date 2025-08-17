#!/usr/bin/env pwsh

Write-Host "🚀 BEZPIECZNY deployment ARAAI..." -ForegroundColor Green

# Check if dist exists
if (-not (Test-Path "dist")) {
    Write-Host "❌ Brak katalogu dist. Uruchom: npm run build" -ForegroundColor Red
    exit 1
}

# Create temporary directory for deployment
$TempDir = "temp-deploy-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Write-Host "📁 Tworzę tymczasowy katalog: $TempDir" -ForegroundColor Yellow

# Copy dist to temp directory
Copy-Item -Path "dist" -Destination $TempDir -Recurse

# Go to temp directory
Set-Location $TempDir

# Initialize git
Write-Host "🔀 Inicjalizacja git..." -ForegroundColor Yellow
git init
git config user.name "PowerShell Deploy"
git config user.email "deploy@araai.org"

# Add files
git add .
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

# Rename branch to main
git branch -M main

# Push to pages remote
Write-Host "🌐 Deployment do araai-eu.github.io..." -ForegroundColor Yellow
git push --force https://github.com/araai-eu/araai-eu.github.io.git main

# Go back and cleanup
Set-Location ..
Remove-Item -Path $TempDir -Recurse -Force

Write-Host "✅ Deployment zakończony!" -ForegroundColor Green
Write-Host "🌍 Strona: https://araai-eu.github.io/" -ForegroundColor Cyan 