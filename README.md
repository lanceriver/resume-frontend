# lanceriver.com

Personal website and blog for Lance Rivera — deployed to [lanceriver.com](https://lanceriver.com) via AWS S3 + CloudFront.

## Active project

All current work lives in [`resume-frontend-vite/`](./resume-frontend-vite) — a Vite + React + TypeScript single-page app using Tailwind CSS v4 and MDX for the blog. It was built from scratch on the `rebuild-vite` branch to replace two earlier iterations.

## Legacy trees (ignored)

Two previous versions of the site remain on disk for reference but are ignored by this repo's `.gitignore`:

- `resume-frontend/` — original vanilla HTML/CSS/JS version.
- `resume-frontend-new/personal-website/` — Next.js 15 + Flowbite version.

Both directories carry their own internal `.git/` history; they are not embedded submodules.

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds the Vite app and syncs `resume-frontend-vite/dist/` to `s3://lanceriver.com/`, then invalidates the CloudFront distribution. Auth via OIDC — no long-lived AWS keys.

## CloudFront SPA fallback

Because routing is client-side (`react-router-dom` with `BrowserRouter`), deep links like `https://lanceriver.com/blog/about-me` need CloudFront to rewrite 403/404 responses to `/index.html` (HTTP 200). Configure this once in the CloudFront distribution's **Error pages** tab:

- 403 → `/index.html`, HTTP 200
- 404 → `/index.html`, HTTP 200

## Local development

```bash
cd resume-frontend-vite
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serves dist/
```
