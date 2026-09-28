# Fernando — Playable Portfolio

A bilingual, browse-first portfolio for work spanning game systems, sound, creative code, and interactive media. The optional **Build the Brief** puzzle lets visitors combine real project cards to satisfy short creative constraints; every project remains directly accessible without playing, sound, or JavaScript.

## Stack

- Astro 7 and TypeScript for static routes, content collections, metadata, and localization
- React islands for project filtering and the puzzle interface
- Phaser, loaded only after a visitor starts the optional puzzle
- Vitest, Playwright, axe, and Lighthouse CI for acceptance checks

## Local development

Use Node.js 22.19 or newer; Node 24 is the tested runtime.

```bash
npm install
npm run dev
```

The main verification commands are:

```bash
npm run verify
npm run test:e2e
npm run lighthouse
```

## Content

Localized project entries live in `src/content/projects/en` and `src/content/projects/pt-BR`. Their frontmatter is validated by `src/content.config.ts`. Product intent and remaining human-review gates are documented in `docs/`.

The current artwork is an original CSS-based abstract card system. It is intentionally structured so final drawings and audio examples can replace the prototype media without changing the information architecture.
