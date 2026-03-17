# Newspaper-AI

News website built with Next.js with a single masonry-style layout. The app displays **three columns** for **AI**, **Sports**, and **World News**, and each column contains news for its respective category.

## Tech stack

- **Framework**: Next.js (App Router)
- **UI**: React, shadcn/ui, Base UI, Tailwind CSS
- **State**: Zustand
- **Tooling**: TypeScript, Oxlint, Prettier

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
- **`oxlint`**: fast linting (also used in `build`)
- **`prettier`**, **`prettier-plugin-tailwindcss`**: formatting
- **`tailwindcss`**, **`postcss`**, **`@tailwindcss/postcss`**: styling pipeline

## Entire folder structure

> Generated from the current workspace layout.

```text
.
├── README.md              # project documentation
├── app                    # Next.js App Router pages, layouts, and global styles
│   ├── favicon.ico        # site favicon
│   ├── globals.css        # global Tailwind and app-wide styles
│   ├── layout.tsx         # root layout shared across all pages
│   └── page.tsx           # homepage with the single-page news layout
├── components             # reusable React components
│   ├── theme-provider.tsx # app theme provider integration
│   └── ui                 # shadcn/ui primitive components
│       └── button.tsx     # reusable button component
├── components.json        # shadcn/ui generator configuration
├── hooks                  # custom React hooks
├── lib                    # shared helper/library code
│   └── utils.ts           # common utility helpers
├── next-env.d.ts          # Next.js TypeScript environment declarations
├── next.config.mjs        # Next.js configuration
├── node_modules           # installed npm packages
├── package-lock.json      # exact dependency lockfile
├── package.json           # project metadata, scripts, and dependencies
├── postcss.config.mjs     # PostCSS and Tailwind integration config
├── public                 # static public assets
├── services               # API clients and data-fetching logic
├── store                  # Zustand/global state stores
├── tsconfig.json          # TypeScript configuration
├── types                  # shared TypeScript type definitions
└── utils                  # additional generic utility functions
```
