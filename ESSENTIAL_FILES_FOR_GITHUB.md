# Essential Files for GitHub Upload

## Core Files to Upload (Only These!)

### Root Directory Files
- `README.md` - Project description
- `package.json` - Dependencies and scripts
- `package-lock.json` - Exact dependency versions
- `railway.json` - Railway deployment config
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Build configuration
- `tailwind.config.ts` - Styling configuration
- `components.json` - UI components config
- `postcss.config.js` - CSS processing
- `drizzle.config.ts` - Database configuration
- `replit.md` - Project documentation
- `.gitignore` - Files to ignore

### Folders to Upload
- `client/` - React frontend (entire folder)
- `server/` - Express backend (entire folder)
- `shared/` - Shared types (entire folder)
- `docs/` - Railway deployment guides
- `attached_assets/DAB_logo.svg_-e1750186890569_1754655587312.png` - Your DAB+ logo

## Files to SKIP (Will be ignored)
- `node_modules/` - Dependencies (too large)
- All `*.tar.gz` files - Old archives
- `failtedab-deployment/` folder - Old version
- `static-export/` folder - Not needed
- Any `Pasted-*.txt` files - Temporary files
- `.replit` file - Replit specific

## Total Upload Size
After excluding unnecessary files: **~50-100 files** (very manageable!)

## Quick Upload Method
1. Select these essential files only
2. Drag to GitHub repository
3. Commit with message: "Initial FáilteDAB website"

Your `.gitignore` file will automatically exclude the large/unnecessary files.