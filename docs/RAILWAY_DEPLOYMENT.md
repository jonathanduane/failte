# Railway Deployment Guide for FáilteDAB

This guide explains how to deploy the FáilteDAB application to Railway with zero code changes required.

## Prerequisites

1. **GitHub Repository**: Your code should be in a GitHub repository
2. **Railway Account**: Sign up at [railway.app](https://railway.app)
3. **Environment Variables**: Have your credentials ready (listed below)

## Deployment Steps

### 1. Connect Repository to Railway

1. Login to Railway dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your FáilteDAB repository
5. Railway auto-detects Node.js and uses your existing `package.json`

### 2. Add PostgreSQL Database

1. In your Railway project dashboard
2. Click "New Service" → "Database" → "PostgreSQL"
3. Railway automatically creates a database and provides `DATABASE_URL`
4. No manual database setup needed - Drizzle handles table creation

### 3. Configure Environment Variables

In Railway dashboard → Settings → Variables, add these:

#### Required for WordPress Integration:
```
VITE_WORDPRESS_USERNAME=your-wordpress-username
VITE_WORDPRESS_APP_PASSWORD=your-wordpress-app-password
```

#### Database (Auto-provided by Railway):
```
DATABASE_URL=postgresql://username:password@host:port/database
```
*Note: Railway automatically provides this when you add PostgreSQL service*

#### Optional for Enhanced Features:
```
NODE_ENV=production
PORT=5000
```

### 4. Build Configuration

Railway automatically uses your existing scripts from `package.json`:
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

No additional configuration needed - your current setup works perfectly.

## What Happens During Deployment

1. **Dependencies**: Railway installs all packages from `package.json`
2. **Frontend Build**: Vite builds optimized React application
3. **Database**: PostgreSQL service starts and provides connection URL
4. **Server**: Express server starts and serves both API and static files
5. **Domain**: Railway provides a custom domain (e.g., `failtedab-production.up.railway.app`)

## Features That Work Immediately

✅ **All React Components**: DAB stations, coverage maps, forms
✅ **API Endpoints**: `/api/feedback` and `/api/broadcaster-signup`
✅ **Email Service**: SMTP2GO integration for form notifications
✅ **Database**: PostgreSQL with Drizzle ORM
✅ **WordPress Integration**: Live news content loading
✅ **Static Assets**: All images and logos

## Environment Variables Reference

| Variable | Purpose | Required |
|----------|---------|----------|
| `VITE_WORDPRESS_USERNAME` | WordPress API access | Yes |
| `VITE_WORDPRESS_APP_PASSWORD` | WordPress authentication | Yes |
| `DATABASE_URL` | PostgreSQL connection | Auto-provided |
| `NODE_ENV` | Environment setting | Optional |
| `PORT` | Server port | Optional (defaults to 5000) |

## Post-Deployment Verification

After deployment, test these features:
1. **Homepage**: Verify all content loads
2. **DAB Stations**: Check all 22 stations display with DAB+ logos
3. **Contact Forms**: Test both feedback and broadcaster signup
4. **Email Notifications**: Confirm emails arrive at info@failtedab.ie
5. **WordPress News**: Verify news content loads
6. **Coverage Map**: Test interactive map functionality

## Custom Domain (Optional)

To use your own domain (e.g., `new.failtedab.ie`):
1. Go to Railway project → Settings → Domains
2. Add custom domain
3. Update DNS records as instructed by Railway
4. Railway handles SSL certificates automatically

## Database Management

- **Migrations**: Handled automatically by Drizzle ORM
- **Backups**: Railway provides automated backups
- **Monitoring**: View database metrics in Railway dashboard

## Troubleshooting

### Common Issues:

**Build Fails**:
- Check all environment variables are set
- Verify `package.json` scripts are correct

**Database Connection Errors**:
- Ensure PostgreSQL service is running
- Check `DATABASE_URL` is properly set

**Email Not Working**:
- Verify SMTP2GO API key is correct
- Check server logs for email errors

### Support Resources:
- **Railway Docs**: [docs.railway.app](https://docs.railway.app)
- **Project Logs**: Available in Railway dashboard
- **Community**: Railway Discord server

## Monitoring and Maintenance

- **Logs**: View real-time logs in Railway dashboard
- **Metrics**: Monitor CPU, memory, and request volume
- **Updates**: Push to GitHub triggers automatic redeployment
- **Rollback**: Easy rollback to previous deployments

## Cost Considerations

- **Free Tier**: Railway offers generous free usage
- **Pricing**: Pay-as-you-scale based on resource usage
- **Database**: PostgreSQL included in usage calculations

---

Your FáilteDAB application is fully ready for Railway deployment with zero code modifications required!