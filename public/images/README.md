# Images

- **`hero/`** - Rotating home hero frames (from live site headers).
- **`brands/`** - Portfolio tiles (one file per brand slug).
- **`news/`** - Optional thumbnails for news posts.

Regenerate from a fresh HTML mirror:

```bash
npm run content:build
```

Downloads use **curl** with `Referer: https://www.oatleywines.com.au/` (WordPress returns 403 without it). Node `fetch` alone is not used for binaries.
