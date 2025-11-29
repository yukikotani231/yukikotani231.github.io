# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. The site uses static export for deployment to GitHub Pages.

## Technology Stack

- **Framework**: Next.js 15 (App Router with static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Deployment**: GitHub Pages (static files in `docs/` folder)

## Development Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages (builds and moves output to docs/)
npm run deploy

# Linting
npm run lint
```

## Architecture

### Static Export Configuration

The site is configured for static export via `next.config.js`:
- `output: 'export'` - Generates static HTML files
- `images.unoptimized: true` - Required for static export
- `trailingSlash: true` - Adds trailing slashes to URLs for GitHub Pages

### Project Structure

```
app/
├── layout.tsx                 # Root layout with metadata
├── page.tsx                   # Main portfolio page (hybrid one-page design)
│                              # Sections: Hero, About, Skills, Works, Career, Contact
├── globals.css                # Global styles and Tailwind CSS variables
└── works/
    └── [slug]/
        ├── page.tsx           # Dynamic project detail pages
        └── not-found.tsx      # 404 for invalid projects

lib/
└── utils.ts                   # Utility functions (cn for classnames)

docs/                          # Build output for GitHub Pages (DO NOT EDIT MANUALLY)
```

### Content Management

**Project data** is currently hardcoded in `app/works/[slug]/page.tsx` as a `projects` object. To add or modify projects:

1. Edit the `projects` object in `app/works/[slug]/page.tsx`
2. Each project requires: `title`, `description`, `longDescription`, `tags`, `date`
3. Optional: `github`, `demo` (can be `undefined`)
4. The slug (object key) is used in the URL: `/works/{slug}`

**Main page content** is in `app/page.tsx`:
- Personal information in Hero section (lines 10-14)
- Skills array (line 46)
- Project cards (lines 64-83) - should match projects in detail pages
- Career timeline (lines 112-119)
- Contact links (lines 141-148)

### Styling System

The project uses Tailwind CSS with shadcn/ui conventions:
- CSS variables defined in `app/globals.css` for theming
- Dark mode support via `class` strategy
- `cn()` utility from `lib/utils.ts` for conditional classnames
- Component variants can be created using `class-variance-authority`

## Deployment Workflow

The `npm run deploy` command:
1. Runs `next build` to generate static files in `out/`
2. Creates `.nojekyll` file (prevents Jekyll processing on GitHub Pages)
3. Removes old `docs/` folder
4. Renames `out/` to `docs/`

GitHub Actions (`.github/workflows/build_docs.yml`) automatically builds and commits the `docs/` folder on PRs to `main`.

## Repository Conventions

Branch naming: `{issue番号}-{prefix}-{実装内容}`

Prefixes:
- `feature` - 新機能の実装
- `fix` - バグ修正
- `refac` - リファクタリング
- `docs` - ドキュメントの変更
- `chore` - その他ツールの変更

## Important Notes

- **Never edit files in `docs/` directly** - they are auto-generated
- The site uses Next.js 15's async params pattern for dynamic routes
- All images must use `unoptimized: true` due to static export
- Metadata is defined in `app/layout.tsx` for SEO
