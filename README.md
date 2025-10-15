# Bharat Cultures

Bharat Cultures is a community-driven, educational Next.js project that documents the cultural practices, festivals, arts, cuisine, and rituals of India's states and union territories. It uses a small in-repo data layer for content and a set of reusable React components to render state pages, galleries, and culture aspect detail pages.

This README explains the project structure, how to run the site locally, how to add content, and common developer commands.

[Contributing Guidelines](https://github.com/letscodesaas/Bharat-Cultures/blob/main/CONTRIBUTING.md)

## Key goals
- Provide a consistent, accessible layout for state pages (overview, five canonical culture cards, gallery, stories).
- Keep content versioned inside the repository so contributors can propose edits via pull requests.
- Use server-side rendering (Next.js app dir) for deterministic pages and good SEO.

## Tech stack
- Next.js (app directory)
- React + TypeScript
- Tailwind CSS for styling (utility classes appear across components)

## Repository layout (important files)
- `app/` — Next.js app routes and page components.
- `components/` — Reusable UI components (e.g., `components/states/culture-grid.tsx`).
- `data/` — Content data and helpers (`data/states.ts`, `data/types.ts`).
- `public/` — Static assets (images, placeholder.svg).
- `CONTRIBUTING.md` — Contribution guide (how to add states, aspects, images, stories).

## Running the project locally

Prerequisites
- Node 18+ (or current LTS recommended)
- npm (or your preferred package manager; commands below use npm)

Install dependencies

```bash
npm install
```

Development server

```bash
npm run dev
```

By default Next will try to use port 3000; if it is in use it will pick the next available port (for example 3001). Open the local URL printed in the terminal.

Build for production

```bash
npm run build
npm run start
```

Type checking

```bash
npx tsc --noEmit
```

Linting (if configured)

```bash
npm run lint
```

## Content conventions

All primary content lives inside `data/states.ts`. Each state object follows the same shape: slug, name, tagline, heroImage, about, `cultureAspects` (an array), `gallery`, and `stories`.

Canonical culture aspects (the UI expects these five ids):
- `festivals`
- `dance` (displayed as "Dance & Devotion")
- `cuisine`
- `art` (displayed as "Art & Handicrafts")
- `rituals` (displayed as "Rituals & Customs")

If a state does not provide a particular aspect, the site shows a placeholder card and a generated fallback page for that canonical id. When adding new content, prefer the canonical ids above. The `CONTRIBUTING.md` file contains examples and naming guidance.

Images
- Place images in `public/images/<slug>/` (for example `public/images/kerala/onam.jpg`).
- Use descriptive file names and provide `alt` text for accessibility.
- Prefer optimized images and keep file sizes reasonable.

## How to contribute
1. Read `CONTRIBUTING.md` for detailed instructions and examples.
2. Make your changes on a feature branch.
3. Run the dev server and type-check locally.
4. Open a Pull Request with a clear description and any source attributions for added images/content.
