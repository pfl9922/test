# Complete Render.com Deployment Guide

## 🚀 Deploy Ferrari Championship to Render.com

Render.com is FREE and reliable, but requires GitHub. Don't worry - I'll walk you through EVERYTHING step-by-step.

---

## STEP 1: Create GitHub Account (5 minutes)

1. **Go to https://github.com**
2. **Click "Sign Up"**
   - Enter your email
   - Create a password
   - Choose a username (e.g., "ferrarisouthwest")
3. **Verify your email**
4. **Done!** You now have GitHub

---

## STEP 2: Upload Your Project to GitHub (10 minutes)

### Method A: Using GitHub Website (EASIEST - No coding knowledge needed)

1. **Log into GitHub**
2. **Click the "+" icon** (top right) → "New repository"
3. **Fill out the form:**
   - Repository name: `ferrari-championship`
   - Description: "Ferrari Club Southwest GoKart Championship Tracker"
   - Make it **Public** (or Private if you prefer)
   - ✅ Check "Add a README file"
   - Click **"Create repository"**

4. **Upload your files:**
   - Click **"Add file"** → **"Upload files"**
   - Drag and drop ALL your files/folders:
     - `server.js`
     - `package.json`
     - `Procfile`
     - `README.md`
     - `public/` folder (with index.html and admin.html inside)
     - `.gitignore`
   
   **IMPORTANT:** Make sure to upload the `public` folder structure correctly:
   - Either upload the whole `public` folder, or
   - Create folder by uploading `public/index.html` (GitHub auto-creates folder)

5. **Scroll down and click "Commit changes"**
6. **Done!** Your code is now on GitHub

### Method B: Using GitHub Desktop (If you prefer a visual tool)

1. **Download GitHub Desktop**: https://desktop.github.com
2. **Install and sign in** with your GitHub account
3. **Click "Create New Repository"**
   - Name: `ferrari-championship`
   - Local Path: Choose where to save it
   - Click "Create Repository"
4. **Copy your project files** into this folder
5. **In GitHub Desktop:**
   - You'll see all your files listed
   - Add a commit message: "Initial upload"
   - Click "Commit to main"
   - Click "Publish repository"
6. **Done!** Your code is on GitHub

---

## STEP 3: Deploy to Render.com (5 minutes)

1. **Go to https://render.com**
2. **Click "Get Started for Free"** or "Sign Up"
3. **Sign up using GitHub** (click "GitHub" button)
   - This connects your GitHub account
   - Click "Authorize Render"

4. **Create New Web Service:**
   - Click **"New +"** (top right)
   - Select **"Web Service"**

5. **Connect Repository:**
   - You'll see a list of your GitHub repositories
   - Find **"ferrari-championship"**
   - Click **"Connect"**
   
   (If you don't see it, click "Configure account" and give Render access)

6. **Configure Service:**
   Fill in these settings:
   
   - **Name:** `ferrari-championship` (or whatever you want)
   - **Region:** Choose closest to you (e.g., Oregon/Ohio)
   - **Branch:** `main` (should be auto-selected)
   - **Root Directory:** Leave blank
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Plan:** Select **"Free"** (at the bottom)

7. **Add Environment Variable (IMPORTANT!):**
   - Scroll down to "Environment Variables"
   - Click **"Add Environment Variable"**
   - Key: `ADMIN_PASSWORD`
   - Value: `YourSecurePassword123` (choose a strong password!)
   - Click "Save"

8. **Click "Create Web Service"** (bottom of page)

9. **Wait for deployment (2-3 minutes):**
   - You'll see a live log of the deployment
   - Wait for "Your service is live 🎉"

10. **Get Your URL:**
    - At the top, you'll see your URL
    - Example: `https://ferrari-championship.onrender.com`
    - Click it to open your site!

---

## STEP 4: Test Your Site

1. **Public Page:**
   - Go to: `https://your-app-name.onrender.com`
   - You should see the championship standings

2. **Admin Page:**
   - Go to: `https://your-app-name.onrender.com/admin`
   - Enter the password you set in environment variables
   - You should be able to add drivers and races!

---

## 🎯 COMPLETE VISUAL WALKTHROUGH

### GitHub Upload:
```
1. GitHub.com
   ↓
2. Click "+" → New repository
   ↓
3. Name it "ferrari-championship"
   ↓
4. Create repository
   ↓
5. Click "Add file" → "Upload files"
   ↓
6. Drag ALL your project files
   ↓
7. Commit changes
   ✅ Code is on GitHub!
```

### Render Deploy:
```
1. Render.com
   ↓
2. Sign up with GitHub
   ↓
3. Click "New +" → "Web Service"
   ↓
4. Connect "ferrari-championship" repo
   ↓
5. Settings:
   - Environment: Node
   - Build: npm install
   - Start: node server.js
   - Plan: Free
   ↓
6. Add environment variable:
   - ADMIN_PASSWORD = your-password
   ↓
7. Click "Create Web Service"
   ↓
8. Wait 2-3 minutes
   ✅ Site is LIVE!
```

---

## 📱 YOUR LIVE URLS

After deployment, you'll have:

- **Public Standings:** `https://ferrari-championship.onrender.com`
- **Admin Panel:** `https://ferrari-championship.onrender.com/admin`

Share the public URL with your club members!

---

## ⚡ IMPORTANT NOTES

### Free Tier Limitations:
- **Sleep after 15 minutes** of inactivity
  - First visit after sleep takes ~30 seconds to wake up
  - Subsequent visits are instant
  - This is fine for most clubs!

### To Keep It Always Awake (Optional):
Use a free ping service:
1. Go to https://uptimerobot.com (free)
2. Add your URL to monitor
3. It pings every 5 minutes
4. Your site never sleeps!

### Custom Domain (Optional):
Want `championship.ferrarisouthwest.com`?
1. Buy domain from Namecheap ($10/year)
2. In Render: Settings → Custom Domain
3. Add your domain
4. Update DNS records (Render gives you instructions)

---

## 🔄 UPDATING YOUR SITE

When you want to make changes:

1. **Update files in GitHub:**
   - Go to your repository on GitHub.com
   - Click on the file you want to edit
   - Click the pencil icon (Edit)
   - Make changes
   - Click "Commit changes"

2. **Render auto-deploys!**
   - Render detects the change
   - Automatically rebuilds and deploys
   - Takes 2-3 minutes
   - No need to do anything else!

---

## 🆘 TROUBLESHOOTING

### "Build failed"
- Check that you uploaded ALL files
- Make sure `package.json` is in the root directory
- Check build logs for specific error

### "Can't connect to repository"
- Go to Render → Account Settings → GitHub
- Click "Configure GitHub App"
- Make sure repository has access

### "Application error"
- Check Logs tab in Render
- Make sure environment variable is set
- Verify Start Command is `node server.js`

### "Site is slow to load first time"
- This is normal! Free tier sleeps after 15 min
- Use UptimeRobot (free) to keep it awake

---

## 💰 UPGRADE OPTIONS

If you want better performance:

**Render Starter Plan ($7/month):**
- No sleep
- Faster builds
- Better for official use

To upgrade:
1. In Render dashboard
2. Click your service
3. Settings → Plan
4. Choose "Starter"

---

## ✅ CHECKLIST

Before going live:

- [ ] GitHub repository created
- [ ] All files uploaded to GitHub
- [ ] Render account created
- [ ] Repository connected to Render
- [ ] Environment variable `ADMIN_PASSWORD` set
- [ ] Service deployed successfully
- [ ] Public page loads
- [ ] Admin login works
- [ ] Can add drivers
- [ ] Can record race results
- [ ] URL shared with club members

---

## 🏁 FINAL TIPS

1. **Backup your data regularly**
   - Download the data file from Render occasionally
   - In Render: Shell tab → `cat data/championship.json`

2. **Use a strong admin password**
   - Not "ferrari2026"!
   - Something like "Ferrari_SW_Admin_2026!"

3. **Bookmark your Render dashboard**
   - Easy access to logs and settings

4. **Share only the public URL with members**
   - Keep admin URL private

---

## 📞 NEED HELP?

If you get stuck:
- Render Documentation: https://render.com/docs
- Render Community: https://community.render.com
- Or ask me! I can help troubleshoot

---

**Your championship site will be live in about 20 minutes total! 🏎️🏁**
