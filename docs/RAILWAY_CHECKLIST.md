# Railway Deployment Checklist for FáilteDAB

## Pre-Deployment Checklist

### ✅ Code Repository
- [ ] Code is pushed to GitHub repository
- [ ] All latest changes are committed
- [ ] Repository is public or Railway has access

### ✅ Environment Variables Ready
- [ ] WordPress Username: `VITE_WORDPRESS_USERNAME`
- [ ] WordPress App Password: `VITE_WORDPRESS_APP_PASSWORD`
- [ ] SMTP2GO API Key: Already embedded in code (api-62B342CE059E430EB8A30379BC4C795A)

### ✅ Railway Configuration Files
- [ ] `railway.json` - Railway deployment config ✅ Created
- [ ] `package.json` - Build scripts ready ✅ Verified
- [ ] No additional config needed

## Deployment Steps

### 1. Create Railway Project
1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your FáilteDAB repository
5. Railway detects Node.js automatically

### 2. Add PostgreSQL Database
1. In project dashboard: "New Service" → "Database" → "PostgreSQL"
2. Railway auto-generates `DATABASE_URL`
3. No manual setup required

### 3. Set Environment Variables
In Railway dashboard → Settings → Variables:

```
VITE_WORDPRESS_USERNAME=your-username
VITE_WORDPRESS_APP_PASSWORD=your-app-password
NODE_ENV=production
```

*Note: `DATABASE_URL` is automatically provided*

### 4. Deploy
- Railway automatically starts deployment
- Build process: ~2-3 minutes
- Your app will be live at: `yourproject.up.railway.app`

## Post-Deployment Testing

### ✅ Core Functionality
- [ ] Homepage loads with hero section
- [ ] All 4 homepage variants work (/home1, /home2, /home3)
- [ ] Navigation menu functions properly

### ✅ DAB Stations Page
- [ ] All 22 stations display
- [ ] DAB+ logos show on all stations (not text)
- [ ] "CLASSIC HITS 80S" name is correct
- [ ] Station details modals work
- [ ] Search and filtering functions

### ✅ Contact Forms
- [ ] Feedback form submits successfully
- [ ] Broadcaster signup form works
- [ ] Success messages appear
- [ ] Emails arrive at info@failtedab.ie

### ✅ WordPress Integration
- [ ] News section loads content
- [ ] Images display properly
- [ ] Links work correctly

### ✅ Other Features
- [ ] Coverage map loads and functions
- [ ] All images and assets load
- [ ] Mobile responsiveness works
- [ ] Site performance is good

## Expected Build Output

Railway will show these build steps:
```
1. Installing dependencies...
2. Building client application...
3. Building server bundle...
4. Starting application...
5. Deployment successful!
```

## Domain and SSL
- Railway provides HTTPS automatically
- Custom domain can be added later
- SSL certificates handled by Railway

## Monitoring
After deployment, monitor:
- **Logs**: Real-time in Railway dashboard
- **Metrics**: CPU, memory, requests
- **Uptime**: Railway monitors automatically

## Troubleshooting

### If Build Fails:
1. Check all environment variables are set
2. Verify GitHub repository access
3. Review build logs in Railway dashboard

### If Forms Don't Work:
1. Check environment variables
2. Verify SMTP2GO API key
3. Test API endpoints directly

### If Database Issues:
1. Ensure PostgreSQL service is running
2. Check `DATABASE_URL` is set
3. Verify Drizzle migrations

## Success Indicators
✅ Build completes without errors
✅ Application starts successfully
✅ All pages load correctly
✅ Forms submit and send emails
✅ Database connections work
✅ No console errors

---

**Your FáilteDAB application is Railway-ready!**
All configurations are in place for a seamless deployment.