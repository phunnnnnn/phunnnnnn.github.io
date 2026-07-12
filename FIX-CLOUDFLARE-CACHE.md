# Fixing the stale cache on www.phunn.me (Cloudflare side)

## What was wrong

The certificates section rendered **empty** on the live site even though the
code and images were deployed correctly.

Root cause: **Cloudflare was serving a stale, cached copy of `script.js`.**

| Request | Cloudflare status | Version served |
| --- | --- | --- |
| `https://www.phunn.me/script.js` (normal) | `HIT` | old — no cert code |
| `https://www.phunn.me/script.js?v=<random>` (cache bypass) | `MISS` → origin | new — has cert code |

GitHub Pages (the origin) already had the correct new `script.js`. The browser
just never received it, because Cloudflare kept returning the old cached file
from its edge. The certificate images were fine (they were brand-new files, so
the cached copy was already correct).

## The code fix (already done — nothing for you to do here)

`index.html` now loads its assets with a version query string so that every
deploy points browsers and Cloudflare at a URL they have never cached before:

```html
<link rel="stylesheet" href="styles.css?v=2" />
<script src="script.js?v=2"></script>
```

**Whenever you change `script.js` or `styles.css` in the future, bump the
number** (`?v=3`, `?v=4`, …) and redeploy. That alone forces a fresh fetch and
avoids this problem going forward — no manual purge needed for later changes.

## What YOU need to do on Cloudflare (one time, to clear the currently-cached file)

The version bump handles *future* changes, but the *currently cached* old
`script.js` (and `styles.css`) must be purged once so returning visitors stop
getting the stale copy.

### Option A — Purge just the affected files (recommended, surgical)

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Select the **phunn.me** zone.
3. Go to **Caching → Configuration**.
4. Click **Purge Cache → Custom Purge**.
5. Choose **URL** and paste these, one per line:
   ```
   https://www.phunn.me/script.js
   https://phunn.me/script.js
   https://www.phunn.me/styles.css
   https://phunn.me/styles.css
   ```
6. Click **Purge**.

### Option B — Purge everything (simplest, slightly broader)

1. Cloudflare dashboard → **phunn.me** zone → **Caching → Configuration**.
2. Click **Purge Cache → Purge Everything** → confirm.

This clears the whole edge cache for the site. It's safe; Cloudflare just
re-fetches each file from GitHub Pages on the next request.

## How to verify it worked

After purging, run either of these:

```bash
# Should show cert code (a number > 0) and NOT the old file:
curl -s https://www.phunn.me/script.js | grep -c "renderCerts"

# Header check — Cf-Cache-Status should eventually say HIT again,
# but Last-Modified should be today's deploy, not the old date:
curl -sI https://www.phunn.me/script.js | grep -i "last-modified\|cf-cache-status"
```

Or just open <https://www.phunn.me> in a fresh/incognito window (to avoid your
own browser cache) and confirm the **Certificates** section now shows the
cards, including the featured **Robotics (Intermediate) — Gold Medal**.

## Optional: prevent long stale windows in the future

If you want Cloudflare to hold JS/CSS for a shorter time, add a **Cache Rule**
(Caching → Cache Rules) that sets **Edge TTL** to something short (e.g. 5
minutes) for `*.js` and `*.css`. With the `?v=` versioning already in place this
is optional, but it's a belt-and-suspenders safeguard.
