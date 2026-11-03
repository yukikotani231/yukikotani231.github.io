# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. The site uses static export for deployment to GitHub Pages.

## Technology Stack

- **Framework**: Next.js 16 (App Router with static export), React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first config in `app/globals.css`, no `tailwind.config`) + shadcn/ui conventions
- **Animation**: Motion (`motion/react`), GSAP
- **Package manager**: pnpm (version pinned via `packageManager` in `package.json`)
- **Deployment**: GitHub Actions → GitHub Pages (artifact from `out/`)

## Development Commands

```bash
pnpm dev         # Development server (http://localhost:3000)
pnpm build       # Static export to out/
pnpm lint        # ESLint 10 (flat config: eslint.config.mjs)
pnpm typecheck   # tsc --noEmit
```

## Architecture

### Static Export Configuration

The site is configured for static export via `next.config.ts`:
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

The project uses Tailwind CSS v4 with shadcn/ui conventions:
- Theme tokens are CSS variables in `app/globals.css`, exposed to Tailwind via `@theme inline`
- Dark mode uses the `.dark` class (`@custom-variant dark`) toggled by `next-themes`
- Custom utilities/animations are declared in CSS (`@utility`, `@keyframes` inside `@theme`)
- `cn()` utility from `lib/utils.ts` for conditional classnames

## Deployment Workflow

- `.github/workflows/nextjs.yml`: on push to `main`, builds with pnpm and deploys `out/` to GitHub Pages
- `.github/workflows/ci.yml`: on pull requests, runs lint / typecheck / build
- `.github/dependabot.yml`: weekly grouped updates for npm (pnpm) and GitHub Actions
- Security overrides for transitive deps live in `pnpm-workspace.yaml`

## Repository Conventions

Branch naming: `{issue番号}-{prefix}-{実装内容}`

Prefixes:
- `feature` - 新機能の実装
- `fix` - バグ修正
- `refac` - リファクタリング
- `docs` - ドキュメントの変更
- `chore` - その他ツールの変更

## Important Notes

- Dynamic routes use the async `params` pattern (Next.js 15+)
- All images must use `unoptimized: true` due to static export
- Metadata is defined in `app/layout.tsx` for SEO
