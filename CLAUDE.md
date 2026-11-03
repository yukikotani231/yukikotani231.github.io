# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. The site uses static export for deployment to GitHub Pages.

## Technology Stack

- **Framework**: Next.js 16 (App Router with static export), React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first config in `app/globals.css`, no `tailwind.config`)
- **Animation**: Motion (`motion/react`)
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

- Theme tokens (oklch) are CSS variables in `app/globals.css`, exposed to Tailwind via `@theme inline` (neutral palette + amber `accent`)
- Dark mode uses the `.dark` class (`@custom-variant dark`) toggled by `next-themes`
- Custom utilities are declared with `@utility` (e.g. `bg-dots`, `mask-fade`)
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
