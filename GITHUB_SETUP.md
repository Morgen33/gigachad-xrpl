# GitHub Push Instructions

## After creating your GitHub repository, run these commands:

```bash
cd /Users/mo/gigachad-xrpl

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/gigachad-xrpl.git

# Or if using SSH:
# git remote add origin git@github.com:YOUR_USERNAME/gigachad-xrpl.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Quick Commands (copy and paste after creating repo):

**Replace `YOUR_USERNAME` with your actual GitHub username**

```bash
cd /Users/mo/gigachad-xrpl
git remote add origin https://github.com/YOUR_USERNAME/gigachad-xrpl.git
git branch -M main
git push -u origin main
```

## If you need to set up GitHub authentication:

### Using HTTPS (requires Personal Access Token):
1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate a new token with `repo` permissions
3. Use token as password when pushing

### Using SSH (recommended):
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. Add to GitHub: Settings > SSH and GPG keys > New SSH key
3. Use SSH URL: `git@github.com:YOUR_USERNAME/gigachad-xrpl.git`

## Enable GitHub Pages (to host your website):

1. Go to your repository on GitHub
2. Click Settings > Pages
3. Under "Source", select "Deploy from a branch"
4. Choose branch: `main` and folder: `/ (root)`
5. Click Save
6. Your site will be live at: `https://YOUR_USERNAME.github.io/gigachad-xrpl/`

## Future updates:

After making changes to your files:

```bash
git add .
git commit -m "Your commit message"
git push
```

