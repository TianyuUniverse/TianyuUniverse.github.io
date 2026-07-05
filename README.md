# Tianyu Chen — Personal Homepage

Bilingual research and open-source portfolio built with React, TypeScript, and Vite.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Local development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run preview
```

## Deployment

The `main` branch is built to `dist` and deployed to GitHub Pages by `.github/workflows/deploy.yml`.
GitHub Pages must use **GitHub Actions** as its publishing source.
