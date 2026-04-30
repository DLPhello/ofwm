This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## GitHub Pages

This app is a static export (`output: "export"`). The workflow `.github/workflows/deploy-pages.yml` builds with `NEXT_PUBLIC_BASE_PATH=/ofwm` so the site resolves at **`https://<user>.github.io/ofwm/`**.

### One-time repo settings

1. **Settings → Pages → Build and deployment**  
   Set **Source** to **GitHub Actions** (not “Deploy from a branch”). Save if prompted. Until this is set, the deploy step can fail with **404 Failed to create deployment**.

2. **Settings → Actions → General → Workflow permissions**  
   Choose **Read and write permissions** (or your org’s equivalent that allows **`pages: write`** for `GITHUB_TOKEN`). If this stays on **Read repository contents and packages permissions** only, **Deploy to GitHub Pages** can fail even when the build job succeeds.

3. Re-run the failed workflow: **Actions → failed run → Re-run all jobs**.

Ignore GitHub’s **“Next.js - Configure”** starter on the Pages screen if you already have `.github/workflows/deploy-pages.yml`; that template is optional and duplicates what this repo ships.
