# Bremerton Sports Center - AI Assistant Instructions

## Project Overview
This is a static website for Bremerton Sports Center built with HTML, TailwindCSS, and deployed on Netlify. The site consists of multiple pages for different sports programs and services.

## Architecture & Structure
- Static HTML pages in root directory (e.g., `index.html`, `soccer.html`, `cornhole.html`)
- CSS source files in `src/` with corresponding built files in `dist/`
- Assets (images, documents, fonts) in `assets/` directory
- Archive of old pages in `archive/` directory

## Key Development Workflows

### Environment Setup
```bash
nvm use 20.18.0  # Required Node.js version
npm i
npm run build    # Builds all CSS files
npm run start    # Starts local dev server on port 3000
```

### CSS Development
- Each page has its own CSS file in `src/` directory
- Use `npm run build:{page-name}` to build specific page CSS
- Use `npm run watch:{page-name}` for live reload during development
- Common styles are in `src/common.css` and `src/fonts.css`

### TailwindCSS Conventions
- Custom colors defined: `black`, `orange`, `light-blue`, `dark-blue`
- Uses Inter font family as default sans-serif
- Container centered by default with 2rem padding
- Includes @tailwindcss/aspect-ratio and @tailwindcss/forms plugins

### Deployment
- Automatically deploys to Netlify on main branch updates
- URL redirects configured in `netlify.toml`
- Example: `/menu` → `/assets/docs/menu/bremerton-sports-center-concession-stand-menu.pdf`

## Common Operations
1. Adding a new page:
   - Create HTML file in root directory
   - Create CSS file in `src/`
   - Add build/watch scripts to `package.json`
   - Update build script to include new page

2. Updating content:
   - HTML files contain page-specific content
   - Common elements should be updated across all relevant pages
   - PDF documents stored in `assets/docs/` by category

## Tips
- Check `page-template.html` for base page structure
- Use `container` class for consistent page width
- Keep image assets organized in topic-specific folders under `assets/images/`
- Update both the main build script and individual page script when adding new CSS files
