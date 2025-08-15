# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a hydrology research website built with MkDocs using the Material theme. The site focuses on WRF-Hydro model documentation and research notes. The main content is in Chinese with some technical terms in English.

## Codebase Structure

```
.
├── docs/                    # Main documentation source
│   ├── index.md            # Homepage with custom hero section
│   ├── introduction.md     # Introduction page
│   ├── blog/               # Blog posts
│   │   └── posts/
│   │       └── wrf-hydro.md # Main WRF-Hydro technical documentation
│   ├── about/              # About pages
│   └── assets/             # Static assets (images, CSS, JS)
├── override/               # Custom theme overrides
├── mkdocs.yml             # Main configuration file
└── site/                  # Generated static site (do not edit)
```

## Development Commands

### Building the Site

```bash
# Build the site
mkdocs build

# Build with minification
mkdocs build --clean

# Serve locally with hot reload
mkdocs serve

# Serve on a specific port
mkdocs serve -a localhost:8000
```

### Deployment

```bash
# Deploy to GitHub Pages
mkdocs gh-deploy
```

## Key Configuration Files

1. **mkdocs.yml** - Main configuration with:
   - Material theme settings
   - Navigation structure
   - Plugin configuration (blog, search, minify)
   - Markdown extensions
   - Custom CSS/JS

2. **docs/assets/extra.css** - Custom styling for the hero section and navigation

3. **docs/javascripts/extra.js** - Custom JavaScript for scroll effects and navigation

4. **override/custom-blog.html** - Custom blog template

## Architecture Notes

### Homepage Features
- Custom hero section with background image that changes size on scroll
- Fixed background that transforms to a smaller header when scrolling
- Content section positioned below the hero image

### Blog System
- Uses MkDocs blog plugin
- Custom blog post template with author and date display
- WRF-Hydro technical documentation as the main blog post

### Theme Customization
- Material theme with custom color palette
- Dark/light mode toggle
- Custom CSS for hero section effects
- JavaScript for scroll-based transformations

## Content Guidelines

1. **Blog Posts** - Technical documentation and research notes in Chinese
2. **Homepage** - Minimal content with visual hero section
3. **Navigation** - Simple structure with Welcome, Introduction, Blog, and About sections

## Important Notes

- The site is configured to deploy to GitHub Pages
- Custom CSS/JS handles the hero section scroll effects
- Blog posts are used for detailed technical documentation
- All content is in the `docs/` directory
- Generated site files are in the `site/` directory (do not edit)
- Custom theme overrides are in the `override/` directory