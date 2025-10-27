# Deployment Instructions

## Publishing to GitHub

### Step 1: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `value-vs-effort-prioritizer`
3. Description: "⚡ Simple web app for prioritizing ideas based on Value vs Effort matrix"
4. Choose Public or Private
5. **Do NOT initialize with README** (we already have files)
6. Click "Create repository"

### Step 2: Connect Local Repository to GitHub

Run these commands in your terminal:

```bash
git remote add origin https://github.com/YOUR-USERNAME/value-vs-effort-prioritizer.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

## Publishing to Vercel (Optional)

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Deploy
```bash
vercel
```

### Step 3: Follow Prompts
- Link to existing project or create new
- Confirm settings
- Deploy!

---

## Publishing to Netlify (Optional)

### Step 1: Build Project
```bash
npm run build
```

### Step 2: Deploy
1. Go to https://www.netlify.com
2. Drag and drop the `dist` folder
3. Done!

Or use Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod
```

