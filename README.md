# Newspaper-AI

News website built with Next.js that renders articles in a **single Masonry layout**. It provides three categories — **AI**, **Sports**, and **World News** — shown on a single page with a **horizontal category selector**.

## Tech stack

- **Framework**: Next.js (App Router)
- **UI**: React, shadcn/ui, Base UI, Tailwind CSS
- **State**: Zustand
- **Tooling**: TypeScript, ESLint, Oxlint, Prettier

## Scripts

```bash
# dev server (turbopack)
npm run dev

# production build (runs oxlint first)
npm run build

# start production server
npm run start

# formatting + checks
npm run format
npm run typecheck
npm run lint
npm run lint:fix
```

## Packages (from `package.json`)

### Dependencies

- **`next`**: framework/runtime
- **`react`, `react-dom`**: UI library
- **`tailwind-merge`**, **`clsx`**: className composition utilities
- **`class-variance-authority`**: variant-driven component styling
- **`lucide-react`**: icons
- **`next-themes`**: theme toggling (light/dark/system)
- **`zustand`**: state management
- **`@base-ui/react`**: headless UI primitives
- **`shadcn`**: shadcn/ui CLI utilities
- **`tw-animate-css`**: animation utilities

### Dev dependencies

- **`typescript`**, **`@types/*`**: TypeScript + type definitions
- **`eslint`**, **`eslint-config-next`**, **`@eslint/eslintrc`**: linting
- **`oxlint`**: fast linting (also used in `build`)
- **`prettier`**, **`prettier-plugin-tailwindcss`**: formatting
- **`tailwindcss`**, **`postcss`**, **`@tailwindcss/postcss`**: styling pipeline

## Entire folder structure

> Generated from the current workspace layout.

```text
.
├── README.md
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── theme-provider.tsx
│   └── ui
│       └── button.tsx
├── components.json
├── eslint.config.mjs
├── hooks
├── lib
│   └── utils.ts
├── next-env.d.ts
├── next.config.mjs
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
├── services
├── store
├── tsconfig.json
├── types
└── utils
```
