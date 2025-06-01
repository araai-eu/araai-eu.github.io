#!/usr/bin/env pwsh

Write-Host "🚀 Deploying ARAAI to GitHub Pages..." -ForegroundColor Green

# Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build

# Create temporary branch for deployment
Write-Host "🔀 Creating deployment branch..." -ForegroundColor Yellow
git checkout --orphan deploy-temp
git rm -rf .

# Copy built files
Write-Host "📁 Copying built files..." -ForegroundColor Yellow
Copy-Item -Path "dist\*" -Destination "." -Recurse
Remove-Item -Path "dist" -Recurse -ErrorAction SilentlyContinue
Remove-Item -Path "node_modules" -Recurse -ErrorAction SilentlyContinue

# Deploy to GitHub Pages
Write-Host "🌐 Deploying to GitHub Pages..." -ForegroundColor Yellow
git add .
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push pages deploy-temp:main --force

# Return to main branch
Write-Host "🔄 Returning to main branch..." -ForegroundColor Yellow
git checkout main
git branch -D deploy-temp

Write-Host "✅ Deployment complete! Check https://araai-eu.github.io/" -ForegroundColor Green 