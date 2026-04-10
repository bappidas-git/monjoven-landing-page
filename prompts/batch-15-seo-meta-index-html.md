# Batch 15: SEO Meta Tags & index.html Update

## Objective
Update the public/index.html with Monjoven-specific SEO meta tags, structured data, Open Graph tags, and PWA configuration.

## Files to Modify

### 1. `public/index.html`

**Title:**
```html
<title>Monjoven | Hair Transplant & Cosmetic Surgery in Guwahati, Assam</title>
```

**Meta Tags:**
```html
<meta name="description" content="Monjoven - Northeast India's first dedicated hair transplant clinic. Led by Dr. Porag Neog (MBBS, MS) with 12+ years of experience. Advanced Micro-FUE technology, cosmetic surgery, and non-surgical treatments in Guwahati, Assam." />
<meta name="keywords" content="hair transplant guwahati, hair transplant assam, fue hair transplant, fut hair transplant, beard transplant, cosmetic surgery guwahati, rhinoplasty, liposuction, gynecomastia, prp therapy, hair loss treatment northeast india, dr porag neog, monjoven" />
<meta name="author" content="Monjoven Hair Transplant & Cosmetic Surgery" />
```

**Apple/PWA Config:**
```html
<meta name="apple-mobile-web-app-title" content="Monjoven" />
<meta name="theme-color" content="#1A5276" />
<meta name="msapplication-TileColor" content="#1A5276" />
```

**Open Graph Tags:**
```html
<meta property="og:title" content="Monjoven | Hair Transplant & Cosmetic Surgery in Guwahati" />
<meta property="og:description" content="Northeast India's premier hair transplant clinic. 12+ years of excellence. Advanced Micro-FUE technology. Book your free consultation today." />
<meta property="og:image" content="https://www.monjoven.com/assets/img/logo.png" />
<meta property="og:url" content="https://www.monjoven.com" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Monjoven" />
<meta property="og:locale" content="en_IN" />
```

**Twitter Card Tags:**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Monjoven | Hair Transplant & Cosmetic Surgery" />
<meta name="twitter:description" content="Northeast India's first dedicated hair transplant clinic. Book your free consultation." />
<meta name="twitter:image" content="https://www.monjoven.com/assets/img/logo.png" />
```

**Geo Tags:**
```html
<meta name="geo.region" content="IN-AS" />
<meta name="geo.placename" content="Guwahati" />
```

**Canonical:**
```html
<link rel="canonical" href="https://www.monjoven.com" />
```

**Preconnect (if applicable):**
```html
<link rel="preconnect" href="https://www.monjoven.com" />
```

**Initial Loader Text:**
Update any loading screen text from "Your Business" to "Monjoven"

### 2. `public/manifest.json` (if present)
Update:
```json
{
  "short_name": "Monjoven",
  "name": "Monjoven - Hair Transplant & Cosmetic Surgery",
  "description": "Northeast India's premier hair transplant and cosmetic surgery clinic",
  "theme_color": "#1A5276",
  "background_color": "#FFFFFF"
}
```

### 3. `public/robots.txt`
Ensure it allows crawling:
```
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://www.monjoven.com/sitemap.xml
```

### 4. `public/sitemap.xml`
Update the sitemap with:
- Homepage: `https://www.monjoven.com/`
- Last modified: current date
- Priority: 1.0
- Change frequency: weekly

## Validation
- All meta tags render in the document head
- Open Graph preview shows correct title, description, image
- Theme color is applied on mobile browsers
- No placeholder "Your Business" text remains in index.html
- Manifest.json has correct app name

---

**Test the changes and raise a PR after completion.**
