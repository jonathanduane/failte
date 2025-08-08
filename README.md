# FáilteDAB - Digital Radio Ireland

A modern React-based web application for Ireland's DAB+ digital radio trial, operated by Foothold Communications Limited.

## 🚀 Features

- **Interactive DAB+ Station Grid**: 22 stations with unified branding
- **Coverage Maps**: Interactive Google Maps showing transmission areas
- **WordPress Integration**: Live news content from failtedab.ie
- **Contact Forms**: Broadcaster signup and user feedback with email notifications
- **Mobile-First Design**: Responsive across all devices
- **Professional Branding**: Unified DAB+ logo across all stations

## 🛠 Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express, PostgreSQL, Drizzle ORM
- **UI Components**: Radix UI with shadcn/ui components
- **Email Service**: SMTP2GO integration
- **Maps**: Google Maps API
- **CMS**: WordPress REST API integration

## 📦 Deployment

### Railway (Recommended)
This application is configured for Railway deployment with zero code changes required.

See [RAILWAY_DEPLOYMENT.md](./RAILWAY_DEPLOYMENT.md) for complete deployment instructions.

### Quick Deploy to Railway
1. Push this repository to GitHub
2. Connect to Railway at [railway.app](https://railway.app)
3. Add PostgreSQL database service
4. Set environment variables (see documentation)
5. Deploy automatically

## 🔧 Environment Variables

```bash
# WordPress Integration (Required)
VITE_WORDPRESS_USERNAME=your-username
VITE_WORDPRESS_APP_PASSWORD=your-app-password

# Database (Auto-provided by Railway)
DATABASE_URL=postgresql://username:password@host:port/database

# Production Settings
NODE_ENV=production
```

## 🏃‍♂️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared types and schemas
├── attached_assets/ # Static assets and images
├── docs/           # Deployment documentation
└── dist/           # Built files (generated)
```

## 🚦 Testing

After deployment, verify:
- [ ] All homepage variants load (/home1, /home2, /home3)
- [ ] DAB stations display with unified logos
- [ ] Contact forms submit successfully
- [ ] Emails arrive at info@failtedab.ie
- [ ] WordPress news content loads
- [ ] Coverage maps function properly

## 📧 Contact

For technical support or questions about the DAB+ trial, visit [failtedab.ie](https://failtedab.ie)

---

**Built for Ireland's DAB+ Digital Radio Trial**