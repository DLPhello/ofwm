# Site map (this Next build)

| Route | Purpose |
|-------|---------|
| `/` | Portfolio - brand / association grid (live site root) |
| `/about` | About us |
| `/news` | News index |
| `/news/[slug]` | Individual news article (excerpt + link to legacy URL) |
| `/events` | Events (empty state) |
| `/contact` | Contact & forms |
| `/terms-of-use` | Terms of Use (placeholder legal page) |
| `/privacy-policy` | Privacy Policy (placeholder legal page) |

## Redirects

Static export does not apply `next.config` redirects. **Vercel:** [`vercel.json`](../vercel.json) maps `/portfolio` → `/` and `/updates` → `/news`. **Other hosts:** thin pages at [`app/portfolio/page.tsx`](../app/portfolio/page.tsx) and [`app/updates/page.tsx`](../app/updates/page.tsx) client-redirect as fallback.

## Legal and forms

- Terms: internal route `/terms-of-use`
- Privacy: internal route `/privacy-policy`
- Credit application PDF: `/67278-Credit-Request-Form.pdf`

## Regenerate images

1. Refresh `_archive/html/*.html` (curl with `-e` Referer if needed).
2. `npm run content:build`
