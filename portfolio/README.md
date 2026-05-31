# Kidist Mulualem — Portfolio

Production-quality personal portfolio built with **React 19 + TypeScript** (strict mode), Vite, and Framer Motion.

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript (strict) |
| Build Tool | Vite 6 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Styling | CSS Custom Properties (no CSS-in-JS) |
| Deployment | GitHub Pages (via GitHub Actions) |

## 📁 Project Structure

```
src/
├── types/           # All TypeScript interfaces, enums & utility types
│   └── index.ts
├── data/            # Static portfolio data (strictly typed)
│   └── portfolioData.ts
├── hooks/           # Custom React hooks
│   ├── useTheme.ts           # Theme context consumer
│   ├── useScrollProgress.ts  # Scroll position tracker
│   ├── useIntersectionObserver.ts  # Scroll-triggered animations
│   └── useLocalStorage.ts    # Generic localStorage hook (uses generics)
├── components/
│   ├── layout/      # App shell components
│   │   ├── ThemeProvider.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/    # Page section components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── ui/          # Reusable UI primitives
│       └── ScrollProgressBar.tsx
├── App.tsx
└── main.tsx
```

## 🔷 TypeScript Features Demonstrated

- **Strict mode** enabled (`"strict": true` + `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`)
- **Enums** — `Theme`, `TechCategory`, `ProjectStatus`
- **Interfaces** — Every data model (`Skill`, `Project`, `Experience`, `Education`, `PersonalInfo`, etc.)
- **Generics** — `useLocalStorage<T>`, `useIntersectionObserver<T extends Element>`
- **Utility types** — `DeepPartial<T>`, `StringKeys<T>`, `Record<K,V>`, `Extract<>`
- **Discriminated unions** — `SocialLink['platform']` as literal union
- **`Readonly`** — All data model interfaces use `readonly` properties
- **No `any`** — Zero `any` usage throughout the codebase
- **JSDoc comments** — All hooks and key functions documented
- **Typed event handlers** — `React.ChangeEvent<HTMLInputElement>`, `React.MouseEvent<HTMLButtonElement>`
- **Typed component props** — Every component has explicitly typed `Props` interface or `React.FC<Props>`

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type check only
npx tsc --noEmit

# Production build
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to GitHub Pages

### One-time Setup

1. Push this repo to GitHub as `<your-username>/<your-username>.github.io` (or any repo name)
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` handles everything

### Manual Deploy

```bash
npm run build
# Then push the dist/ folder to gh-pages branch, or use the Actions workflow
```

### Custom Domain (optional)

Add a `CNAME` file in `/public/` with your domain:
```
kidistmulualem.dev
```

## ✏️ Customisation Guide

All content lives in **`src/data/portfolioData.ts`** — update your name, bio, skills, experiences, projects, and education there. No other files need to change for content updates.

To update the theme colours, edit the CSS custom properties in `src/index.css` under `:root` (dark) and `[data-theme='light']`.

## 📄 License

MIT — feel free to use this as a template for your own portfolio.
