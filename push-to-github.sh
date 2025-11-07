#!/bin/bash
# Script to push GIGA website to GitHub

echo "🚀 GIGA Website - GitHub Push Script"
echo "======================================"
echo ""

# Check if remote already exists
if git remote get-url origin &>/dev/null; then
    echo "✅ Remote 'origin' already configured:"
    git remote -v
    echo ""
    read -p "Push to existing remote? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git push -u origin main
        exit 0
    fi
fi

# Get GitHub repo URL
echo "Please provide your GitHub repository URL"
echo "Example: https://github.com/username/gigachad-xrpl.git"
echo ""
read -p "GitHub repo URL: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ No URL provided. Exiting."
    exit 1
fi

# Add remote and push
echo ""
echo "📦 Adding remote repository..."
git remote add origin "$REPO_URL" 2>/dev/null || git remote set-url origin "$REPO_URL"

echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 Your repo: ${REPO_URL%.git}"
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "   1. Repository exists on GitHub"
    echo "   2. You have access permissions"
    echo "   3. Your GitHub credentials are configured"
fi

