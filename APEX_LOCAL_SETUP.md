# APEX — Local VS Code setup

This ZIP is self-contained: all website images are included in `client/public/assets/` and the source code uses local `/assets/...` paths.

## Run locally

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Build and run production locally

```bash
pnpm build
pnpm start
```

Then open `http://localhost:3000`.

## Image source locations

- Hero image: `client/public/assets/bharat-rooted-hero.jpg`
- Catalog images: `client/public/assets/catalog-*.jpg`
- Hero reference in source: `client/src/pages/Home.tsx`
- Product image references: `client/src/pages/productData.ts`

The visible trading brand remains **Annapoorna Exports**. **APEX** is the local project/package name.
