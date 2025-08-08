# FáilteDAB - Digital Radio Ireland

## Overview

FáilteDAB is a React-based web application for Ireland's DAB+ digital radio trial, operated by Foothold Communications Limited. The application provides comprehensive information about the digital radio trial, interactive coverage maps, news updates, and forms for broadcaster participation and user feedback.

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod schemas for type-safe data validation
- **API**: RESTful endpoints for form submissions and data retrieval
- **Development**: Hot Module Replacement (HMR) via Vite in development

### Full-Stack Integration
- **Development**: Vite middleware integration with Express
- **Production**: Static build serving with API routes
- **TypeScript**: Shared types between client and server via `/shared` directory

## Key Components

### Pages
- **Home Variants**: Four different homepage designs (/, /home1, /home2, /home3) with image sliders and WordPress news integration
- **DAB+ Information**: Comprehensive information about DAB+ technology and benefits
- **Coverage Map**: Interactive Google Maps showing DAB+ transmission coverage areas
- **News**: WordPress-integrated news section with live content loading
- **Broadcasters**: Information and signup form for potential broadcasters
- **Feedback**: User feedback form with comprehensive input validation

### Core Features
- **WordPress Integration**: Live news content fetched from existing WordPress site
- **Interactive Maps**: Google Maps API integration for coverage visualization
- **Form Handling**: Validated forms for broadcaster signups and user feedback
- **Responsive Design**: Mobile-first approach with centered logo on mobile devices
- **Image Management**: Multiple DAB radio images with optimized loading

### UI Components
- **Navigation**: Responsive navigation with dropdown menus for home variants
- **Sliders**: Hero image sliders with both abstract SVG and real radio images
- **Cards**: Information cards for features, news, and stations
- **Forms**: Validated forms with error handling and success feedback
- **Modals**: Dialog components for detailed information display

## Data Flow

### Client-Side Data Flow
1. **React Query**: Manages server state and caching for WordPress content and API calls
2. **WordPress API**: Fetches live news content from external WordPress installation
3. **Form Submissions**: Validated data sent to Express API endpoints
4. **State Management**: Local component state for UI interactions, React Query for server state

### Server-Side Data Flow
1. **Express Routes**: Handle API requests for form submissions and data retrieval
2. **Drizzle ORM**: Database operations with type-safe queries
3. **Zod Validation**: Request validation before database operations
4. **Error Handling**: Comprehensive error handling with proper HTTP status codes

### Database Schema
```sql
- users: Basic user authentication (id, username, password)
- broadcaster_signups: Broadcaster application data (station info, contact details)
- feedback_submissions: User feedback data (ratings, comments, contact info)
```

## External Dependencies

### WordPress Integration
- **WordPress REST API**: Fetches news content from failtedab.ie
- **Authentication**: Application password for secure API access
- **Content Types**: Posts and pages with custom fields support

### Google Maps
- **Maps API**: Interactive coverage map display
- **KML Integration**: Coverage area visualization via KML files
- **Styling**: Custom map styling for brand consistency

### Third-Party Services
- **Neon Database**: PostgreSQL hosting for production
- **Replit**: Development environment integration
- **Cloudflare**: CDN and performance optimization

### NPM Dependencies
- **Core**: React, React-DOM, TypeScript, Vite
- **UI**: Radix UI components, Tailwind CSS, Lucide React icons
- **Data**: TanStack Query, Drizzle ORM, Zod validation
- **Server**: Express, Node.js utilities

## Deployment Strategy

### Development Deployment
- **Replit Environment**: Integrated development with live preview
- **Hot Reload**: Vite HMR for instant development feedback
- **Database**: Development database with in-memory fallback

### Production Deployment Options

#### Option 1: Full-Stack Node.js Hosting
- **Build Process**: `npm run build` creates optimized static files and server bundle
- **Server**: Express server serves API routes and static files
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Deployment**: Upload entire project, install dependencies, build, and start server

#### Option 2: Static Site Hosting
- **Build Output**: `dist/` folder contains optimized static files
- **Limitations**: No form submissions or database features
- **Suitable For**: Information-only deployment without interactive features

#### Option 3: Subdomain Testing
- **Target**: test.failtedab.ie for trial deployment
- **Process**: Extract built files to subdomain directory
- **Integration**: Can still connect to WordPress for news content

### Environment Configuration
```bash
# Required for WordPress integration
VITE_WORDPRESS_BASE_URL=https://failtedab.ie/wp-json/wp/v2
VITE_WORDPRESS_USERNAME=your-username
VITE_WORDPRESS_APP_PASSWORD=your-app-password

# Required for database features
DATABASE_URL=postgresql://username:password@host:port/database

# Required for Google Maps
GOOGLE_MAPS_API_KEY=your-api-key
```

### File Structure
```
├── client/          # React frontend application
├── server/          # Express backend API
├── shared/          # Shared TypeScript types and schemas
├── dist/            # Built static files (production)
├── static-export/   # Static HTML export
└── website-export/  # Complete deployment package
```

The application is designed for flexible deployment, supporting both full-stack hosting with database features and static hosting for information display, with comprehensive documentation for various deployment scenarios.