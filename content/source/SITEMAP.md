# Site map (this Next build)

| Route | Purpose |
|-------|---------|
| `/` | Portfolio — brand / association grid (live site root) |
| `/about` | About us |
| `/news` | News index |
| `/news/[slug]` | Individual news article (excerpt + link to legacy URL) |
| `/events` | Events (empty state) |
| `/contact` | Contact & forms |

## Redirects

Static export does not apply `next.config` redirects. **Vercel:** [`vercel.json`](../vercel.json) maps `/portfolio` → `/` and `/updates` → `/news`. **Other hosts:** thin pages at [`app/portfolio/page.tsx`](../app/portfolio/page.tsx) and [`app/updates/page.tsx`](../app/updates/page.tsx) client-redirect as fallback.

## External

- Terms: https://robertoatley.com.au/terms-of-use/?e
- Privacy: https://robertoatley.com.au/privacy-policy/?e
- Credit note PDF: see `lib/site.ts` (`CREDIT_NOTE_PDF`)

## Regenerate images

1. Refresh `_archive/html/*.html` (curl with `-e` Referer if needed).
2. `npm run content:build`
