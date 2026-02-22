# Deployment settings

This repository's app lives in `web-portfolio/`. Configure your provider to build from that directory.

## Vercel

- **Root Directory:** `web-portfolio`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

If using `vercel.json`, this repo is configured to build and output from `web-portfolio`.

## Netlify

- **Base directory:** `web-portfolio`
- **Build command:** `npm run build`
- **Publish directory:** `web-portfolio/dist`

The provided `netlify.toml` sets this via:
- `base = "web-portfolio"`
- `command = "npm run build"`
- `publish = "dist"` (relative to the base directory)

## GitHub Actions / GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml`:
- installs dependencies in `web-portfolio`
- runs `npm run build` in `web-portfolio`
- publishes `web-portfolio/dist`

## CLI deploy scripts

When deploying from CLI, run npm commands from `web-portfolio` (or use `cd web-portfolio && ...`) so builds do not execute from repository root.
