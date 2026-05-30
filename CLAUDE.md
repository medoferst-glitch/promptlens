# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm start        # Run production server
npm run lint     # ESLint
```

No test framework is configured yet.

## Architecture

**Stack**: Next.js (App Router), React 19, TypeScript, Tailwind CSS 4.

**Routing**: Uses the `/app` directory (App Router), not the Pages Router. All routes are file-based under `src/app/`.

**Path alias**: `@/*` resolves to `./src/*` — use this for imports instead of relative paths.

**Styling**: Tailwind CSS via PostCSS. Global CSS variables (`--background`, `--foreground`) are defined in `src/app/globals.css` and support automatic dark mode via `prefers-color-scheme`.

**Fonts**: Geist Sans and Geist Mono are loaded via `next/font/google` in `src/app/layout.tsx` and applied as CSS variables (`--font-geist-sans`, `--font-geist-mono`).
