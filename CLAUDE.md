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
├── layout.tsx                 # Root layout (fonts, metadata, ThemeProvider)
├── page.tsx                   # Main page: Hero, Highlights, About, Experience, Works, Skills, Contact
├── globals.css                # Theme tokens (CSS variables, light/dark) and utilities
├── components/                # Navigation, FadeIn, ThemeProvider, Icons
└── works/[slug]/
    ├── page.tsx               # Project detail pages (renders longDescription as structured text)
    └── not-found.tsx

lib/
├── projects.ts                # Project data (single source of truth)
└── utils.ts                   # cn() helper
```

### Content Management

**Project data** lives in `lib/projects.ts` and is shared by the home page and detail pages.

1. Add/edit an entry in `projects` (`title`, `description`, `longDescription`, `tags`, `date`, `category`; optional `github`, `demo`)
2. Add its slug to `projectOrder` (the first slug is shown as the featured card)
3. In `longDescription`, lines ending with `：` become section headings, `1. ...` become subheadings, `- ...` become bullets, and `期間：` / `役割：` / `チーム規模：` lines are shown as metadata

**Main page content** (highlights, experiences, skills, contact) is defined as arrays at the top of `app/page.tsx`.

### Styling System

The project uses Tailwind CSS with shadcn/ui conventions:
- CSS variables defined in `app/globals.css` for theming (neutral palette + amber `accent`)
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
