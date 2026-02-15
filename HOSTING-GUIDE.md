# Hosting Options for Ferrari Championship Site

## 🚀 EASIEST OPTIONS (Recommended)

### 1. **Render** (FREE - Best Choice)
**Pros:** Free tier, automatic deploys, easy setup, no credit card needed
**Steps:**
1. Create account at https://render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repo (or upload files)
4. Settings:
   - Name: `ferrari-championship`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Click "Create Web Service"
6. Done! Your site will be live at `https://ferrari-championship.onrender.com`

**Note:** Free tier sleeps after 15 min of inactivity (wakes up in ~30 seconds when visited)

---

### 2. **Railway** (FREE with $5 credit)
**Pros:** Very fast, simple, good free tier
**Steps:**
1. Sign up at https://railway.app
2. Click "New Project" → "Deploy from GitHub"
3. Select your repo
4. Railway auto-detects Node.js
5. Click "Deploy"
6. Get custom URL: `https://ferrari-championship.up.railway.app`

**Free tier:** $5 credit/month (plenty for this app)

---

### 3. **Heroku** (FREE tier available)
**Pros:** Reliable, well-documented
**Steps:**
1. Create account at https://heroku.com
2. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
3. In your project folder:
```bash
heroku login
heroku create ferrari-championship
git init
git add .
git commit -m "Initial commit"
git push heroku main
```
4. Your site is live at `https://ferrari-championship.herokuapp.com`

---

### 4. **Glitch** (FREE - Great for beginners)
**Pros:** No command line needed, live code editor
**Steps:**
1. Go to https://glitch.com
2. Click "New Project" → "Import from GitHub"
3. Or manually upload your files
4. Glitch auto-runs Node.js apps
5. Live at `https://ferrari-championship.glitch.me`

**Note:** Great for testing, stays awake while editing

---

## 💰 PAID OPTIONS (More Professional)

### 5. **DigitalOcean App Platform** ($5/month)
- More reliable uptime
- Custom domains easy to setup
- Good for long-term hosting

### 6. **AWS Elastic Beanstalk** (Pay as you go)
- Very scalable
- More complex setup
- Could be ~$10-20/month

### 7. **Google Cloud Run** (Pay as you go)
- Only pay when people visit
- Likely $1-5/month for low traffic

---

## 📝 PREPARATION FOR DEPLOYMENT

Before deploying, make these changes:

### 1. Add a Procfile (for Heroku/Railway)
Create `Procfile` (no extension) in root:
```
web: node server.js
```

### 2. Update server.js port (already done!)
```javascript
const PORT = process.env.PORT || 3000;
```

### 3. Add environment variable for password
Instead of hardcoding password, use:

**In server.js**, change:
```javascript
const initialData = {
    drivers: [],
    races: [],
    season: '2026-2027',
    adminPassword: process.env.ADMIN_PASSWORD || 'ferrari2026'
};
```

Then set environment variable in hosting platform:
- Render: Environment → Add `ADMIN_PASSWORD=YourSecurePassword`
- Railway: Variables → Add `ADMIN_PASSWORD=YourSecurePassword`
- Heroku: Settings → Config Vars → Add `ADMIN_PASSWORD=YourSecurePassword`

---

## 🌐 CUSTOM DOMAIN

After hosting, add your own domain:

1. **Buy domain** from:
   - Namecheap ($10-15/year)
   - Google Domains
   - GoDaddy

2. **Point to your host:**
   - Render: Settings → Custom Domains
   - Railway: Settings → Domains
   - Heroku: Settings → Domains

Example: `championship.ferrarisouthwest.com`

---

## 📊 MY RECOMMENDATION

**For Ferrari Club (Non-Technical):**
1. **Use Render** - Completely free, reliable, easy
2. Upload your code to GitHub (free)
3. Connect Render to GitHub
4. Auto-deploys when you update code

**Setup Time:** 10 minutes
**Cost:** $0
**Maintenance:** Automatic

---

## 🔒 SECURITY TIPS

1. **Change default password immediately**
2. **Use strong admin password**
3. **Enable HTTPS** (all platforms do this automatically)
4. **Backup your data file regularly**
5. **Don't commit passwords to GitHub** (use environment variables)

---

## 🆘 NEED HELP?

Most platforms have excellent documentation:
- Render Docs: https://render.com/docs
- Railway Docs: https://docs.railway.app
- Heroku Docs: https://devcenter.heroku.com

---

## 📦 QUICK START WITH RENDER (Step-by-Step)

1. Go to https://github.com and create free account
2. Create new repository called "ferrari-championship"
3. Upload your project files (drag and drop)
4. Go to https://render.com and sign up
5. Click "New +" → "Web Service"
6. Connect GitHub account
7. Select "ferrari-championship" repo
8. Click "Create Web Service"
9. Wait 2-3 minutes
10. **Done!** Your site is live 🎉

Your URL will be: `https://ferrari-championship.onrender.com`

You can access:
- Public: `https://ferrari-championship.onrender.com`
- Admin: `https://ferrari-championship.onrender.com/admin`
