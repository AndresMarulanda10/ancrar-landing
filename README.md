# ANCRAR Landing Page

Static Astro landing page for ANCRAR, a Spanish verb-conjugation practice app. The homepage is self-contained and requires no external services to develop or build.

## Development

```bash
npm install
npm run dev
```

Astro serves the site locally with live reload.

## Commands

```bash
npm run check
npm run build
npm run preview
```

The production site is generated in `dist`.

## Optional Site URL

Copy `.env.example` to `.env` and set `PUBLIC_SITE_URL` when the production domain is known. It is used for canonical and social preview URLs; the project uses its Vercel URL by default.

## Vercel

Import the repository into Vercel. Use `npm run build` as the build command and `dist` as the output directory. No Vercel adapter is required because the site uses Astro's static output.
