# Contributing to Bharat Cultures

Thank you for helping improve Bharat Cultures. This document explains how to add and edit resources (states, culture aspects, images, stories), how to run the project locally, and the repository conventions we follow. Please read this guide before opening a pull request.

Table of contents
- What this project contains
- Repo structure (important paths)
- How to add or update a State
  - Data shape example
  - Where to add images and assets
  - Naming conventions
- How to add or update a Culture Aspect
  - Canonical aspect ids
  - Fallback behavior
- How to add Stories
- Development and testing
  - Install and run locally
  - Type checking and linting
- Pull request checklist
- Accessibility and content guidance
- Licensing and attribution
- Reporting issues or getting help


## What this project contains
Bharat Cultures is a curated collection of entries for Indian states and union territories organized by cultural aspects (festivals, dance, cuisine, art, rituals, etc.). Each state page includes an overview, a small gallery, five canonical culture cards, and story vignettes.

The site is a Next.js application (app directory) built with TypeScript. Content lives in the repository under `data/` and components live under `components/`.


## Repo structure (important paths)
- `app/` — Next.js app routes and pages.
- `components/` — Reusable UI components (e.g., `components/states/culture-grid.tsx`).
- `data/` — Source content and helpers. Key files:
  - `data/states.ts` — Master in-repo dataset for states and their culture aspects.
  - `data/types.ts` — TypeScript types for content shapes.
- `public/` — Static assets (images, placeholder SVGs).


## How to add or update a State
All state-level content is stored in `data/states.ts`. Please follow the data shape and naming conventions to ensure pages render consistently.

Important rules
- Keep `slug` lowercase, dash-separated (e.g., `tamil-nadu`, `andhra-pradesh`).
- Provide `name` as the human-friendly name (e.g., `Tamil Nadu`).
- Provide a `heroImage` path pointing to a file in `public/` (recommended) or an absolute URL. If no `heroImage` is provided, the site will fall back to a placeholder image.

Example entry (shortened):

```ts
{
  slug: "kerala",
  name: "Kerala",
  tagline: "Backwaters, festivals and classical arts",
  heroImage: "/images/kerala/hero.jpg",
  about: "Short overview text...",
  cultureAspects: [
    {
      id: "festivals",
      title: "Festivals",
      description: "Onam celebrates...",
      image: "/images/kerala/onam.jpg",
      content: "Longer markdown or plain text content"
    },
    // Add other aspects here
  ],
  gallery: [
    { id: "img1", src: "/images/kerala/gallery1.jpg", alt: "Pookalam" },
  ],
  stories: [
    { id: "story-1", title: "The Boat Race", excerpt: "...", content: "..." }
  ],
}
```

Where to put images
- Place images under `public/images/<slug>/` (e.g., `public/images/kerala/onam.jpg`).
- Use descriptive file names and add `alt` text for accessibility.
- Prefer royalty-free or your own photographs and note attribution in the content when required.

Image sizing and formats
- Use web-friendly formats (JPEG, PNG, or optimized WebP).
- Keep image sizes reasonable (under 1–2MB) and provide appropriately sized hero images (e.g., 1200×600 or similar). The site will crop images responsively.


## How to add or update a Culture Aspect
A culture aspect is an object inside `cultureAspects` for a state. The application expects five canonical IDs to be present in the UI for every state:
- `festivals`
- `dance` (UI title: "Dance & Devotion")
- `cuisine`
- `art` (UI title: "Art & Handicrafts")
- `rituals` (UI title: "Rituals & Customs")

If a state does not have a particular aspect, the UI will show a placeholder card and a fallback aspect page for that id. To add an aspect, follow this structure:

```ts
{
  id: "dance",
  title: "Dance & Devotion",
  description: "Short summary",
  image: "/images/<slug>/dance.jpg",
  content: "Longer content or markdown"
}
```

Notes
- `id` should be a short, URL-safe string (no spaces). The UI will map aliases like `music` to `dance` where appropriate, but prefer canonical ids.
- `title` is displayed in the UI. We prefer the canonical titles listed above for consistency.


## How to add Stories
Stories are short vignettes that appear on state pages. Each story entry should include `id`, `title`, `excerpt`, and `content`.

Example:
```ts
{ id: "onam-boat-race", title: "Onam Boat Race", excerpt: "A village tale...", content: "Full story content" }
```


## Development and testing
Local setup
1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Open the site at `http://localhost:3000` (or the port printed by Next). The dev server may choose a different port if 3000 is in use.

Type checking

```bash
npx tsc --noEmit
```

Linting (if configured)

```bash
npm run lint
```


## Pull request checklist
Before opening a PR, please ensure:
- [ ] You updated `data/states.ts` (or other relevant data files) — do not alter the canonical order of the `cultureAspects` array unless intentionally rearranging.
- [ ] All new images are added under `public/images/<slug>/` and referenced by relative paths from `data/states.ts`.
- [ ] You ran `npx tsc --noEmit` and fixed type errors.
- [ ] Text content is proofread and formatted.
- [ ] If you added new pages or routes, they are accessible from the UI or documented in the PR description.
- [ ] Add attribution for images or external sources in the PR description.


## Accessibility and content guidance
- Provide meaningful `alt` text for images.
- Avoid sensational or demeaning language. Focus on neutral, factual descriptions.
- Prefer simple, clear language for broad audiences. Avoid undocumented claims.


## Licensing and attribution
- Include source attribution for any content or images not created by you. Mention the license where applicable.
- Do not add copyrighted text verbatim without permission.


## Reporting issues or getting help
- If you find a bug or want to discuss a content change, open an issue with a clear description and steps to reproduce.
- For editorial questions (content accuracy or sensitive topics), include references or suggested sources.


Thank you for contributing. Your changes help make this resource more useful and accurate for learners and researchers.
