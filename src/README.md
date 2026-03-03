# Elab'Site

Site web (Vite + React + TypeScript + Tailwind + shadcn-ui).

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Déploiement sur GitHub Pages

1) Configure `base` dans `vite.config.ts` (souvent `/<nom-du-repo>/`).
2) Build : `npm run build`
3) Publie le contenu de `dist/` sur GitHub Pages (branche `gh-pages` ou GitHub Actions).