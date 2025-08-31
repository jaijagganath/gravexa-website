# Gravexa Agrow — Website

This is a lightweight, production-ready static website for **Gravexa Agrow** to showcase Makhana varieties by Suta size (3–6) and blends (3–5, 5–6, 4–6, 6+ Rajanya).

## Pages
- `index.html` — Landing page with hero, range, and contact.
- `products.html` — Interactive catalog with filters (category, Suta, pack, search, sort) and an enquiry drawer.

## Tech
- Pure HTML/CSS/JS (no build step). Google Fonts (Inter).
- Responsive layout, accessible drawer, semantic markup, basic SEO meta & canonical tags.
- Color system aligned to Gravexa palette: leafy green, deep blue, gold, sky blue, orange accents.

## Logo
- Place your logo at `img/logo.png`. The current repo includes a copy of your provided logo.

## Deploy
Any static host works:
- **GitHub Pages**: push this folder to a repo and enable Pages (root).
- **Netlify / Vercel**: drag-drop or connect repo. Build command: none. Output dir: `/`.
- **Custom domain**: point `www.gravexaagrow.com` to your hosting provider and serve this folder.

## Customize
- Update contact info & addresses in `index.html` footer.
- Add pricing or live inventory: extend `PRODUCTS` array in `js/app.js` with `price` values and optional fields.
- Add more images: replace generated SVG thumbs with product photos.

## Structured Data (optional)
You can add JSON-LD schema to `products.html` for Product listings if you want richer search previews.

---
© Gravexa Agrow

## Repository Environment

### Local dev
```bash
# 1) Install deps (optional: only for dev server/formatting)
npm install
# 2) Start a local static server
npm run dev
# Open http://localhost:5173
```

### GitHub Pages
- Create a repo named `gravexa-agrow-website`.
- Push this folder to the `main` branch.
- Pages → Source: `GitHub Actions`. The included workflow `.github/workflows/deploy.yml` will publish automatically.
- Optional: add `CNAME` for `www.gravexaagrow.com` (already included). Point DNS to GitHub Pages.

### Netlify / Vercel
- Link this repo and deploy. No build step required. Output dir: `/`.

### Docker
```bash
docker build -t gravexa-agrow .
docker run -p 8080:80 gravexa-agrow
# Open http://localhost:8080
```

### House-keeping
- Format code: `npm run format`
- Update `sitemap.xml` when adding pages.
- Replace `img/logo.png` if you update the logo.
