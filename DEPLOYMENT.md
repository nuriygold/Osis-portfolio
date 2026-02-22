# Deployment settings

This repository's app lives in `web-portfolio/`. Configure your provider to build from that directory.

## Vercel

Set these in **Project Settings → General**:

- **Root Directory:** `web-portfolio`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

The checked-in `vercel.json` matches the command/output values. Keep the Root Directory set to `web-portfolio` in Vercel UI.

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

If you deploy from a **fork**, make sure GitHub Pages is enabled in that fork's settings and Actions has permission to deploy Pages.

## CLI deploy scripts

When deploying from CLI, run npm commands from `web-portfolio` (or use `cd web-portfolio && ...`) so builds do not execute from repository root.
