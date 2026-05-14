# Site map (this Next build)

| Route | Purpose |
|-------|---------|
| `/` | Portfolio - brand / association grid (live site root) |
| `/about` | About us |
| `/news` | News index |
| `/news/[slug]` | Individual news article (excerpt + link to legacy URL) |
| `/contact` | Contact & forms |
| `/terms-of-use` | Terms of Use (placeholder; footer links to Robert Oatley site) |
| `/privacy-policy` | Privacy Policy (placeholder; footer links to Robert Oatley site) |
| `/code-of-conduct` | Code of Conduct (placeholder) |
| `/safe-to-speak` | Safe to Speak (placeholder) |
| `/ethical-dealing-principles` | Ethical Dealing Principles (placeholder) |

## Redirects

Static export does not apply `next.config` redirects. **Vercel:** [`vercel.json`](../vercel.json) maps `/portfolio` → `/`, `/updates` → `/news`, and `/events` → `/`. **Other hosts:** thin client redirects at [`app/portfolio/page.tsx`](../app/portfolio/page.tsx), [`app/updates/page.tsx`](../app/updates/page.tsx), and [`app/events/page.tsx`](../app/events/page.tsx) as fallback.

## Legal and forms

- Terms (footer): `https://robertoatley.com.au/terms-of-use/?e`
- Privacy (footer): `https://robertoatley.com.au/privacy-policy/?e`
- Online credit application: `https://ofwm.applyeasy.com.au/credit/introduction`
- Credit request PDF: `/67278 Credit Request Form.pdf`

## Regenerate images

1. Refresh `_archive/html/*.html` (curl with `-e` Referer if needed).
2. `npm run content:build`
