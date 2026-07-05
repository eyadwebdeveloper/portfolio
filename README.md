# Eyad Ashraf — Portfolio (React)

A Create React App conversion of the original static HTML/CSS/JS portfolio, split
into clean, reusable components with `react-helmet-async` for SEO.

## Getting started

```bash
npm install
npm start      # dev server at http://localhost:3000
npm run build  # production build in /build
```

## What's missing (not part of the original upload)

Only `index.html`, `style.css`, and `script.js` were provided, so a few
**binary assets referenced by the markup** aren't included yet. Add them and
everything will "just work" since the paths already match:

| File | Expected path |
|---|---|
| CV PDF | `public/cv-eyad-ashraf.pdf` |
| Open Graph preview image | `public/og-image.jpg` |
| IYNA / YSJ logos | `public/assets/img/logos/iyna-logo.png`, `ysj-logo.png` |
| Recommendation letter PDFs + preview images | `public/assets/media/letters/*.pdf`, `*.jpg` |
| Platform demo video | `public/assets/media/portal.mp4` |

(One letter PDF in the original pointed at `http://localhost:5500/...` — a
leftover local dev URL — it's been normalized to the same `/assets/media/letters/...`
convention as the rest.)

## Project structure

```
src/
├── App.jsx                     # composes providers + layout
├── index.js                    # ReactDOM root, HelmetProvider, web-vitals
├── components/
│   ├── Seo.jsx                 # react-helmet-async: title/meta/OG/JSON-LD
│   ├── CustomCursor.jsx        # desktop-only custom cursor
│   ├── Starfield.jsx           # animated <canvas> background
│   ├── Loader.jsx, ScrollProgress.jsx, BackToTop.jsx, ClickSparks.jsx
│   ├── Sidenav.jsx             # nav + theme toggle, active-section highlight
│   ├── Reveal.jsx              # generic scroll-reveal wrapper (IntersectionObserver)
│   ├── AnimatedCounter.jsx, SkillBar.jsx, ProjectCard.jsx,
│   │   CaseStudyCard.jsx, LetterCard.jsx, LaptopIllustration.jsx, Footer.jsx
│   ├── ToastContext.jsx        # toast notification state
│   ├── modals/                 # ProjectModal + LetterModal (+ their contexts)
│   └── sections/                # Hero, About, Projects, Collaborations,
│                                 # Services, Letters, Contact — one file per
│                                 # <section id="..."> in the original page
├── data/                        # projects.js, collaborations.js, letters.js,
│                                 # about.js, services.js — all copy lives here,
│                                 # not hardcoded in JSX
├── hooks/                       # useTheme, useTypewriter, useMagnetic, useTilt,
│                                 # useRipple, useActiveSection, useNameShimmer
└── styles/global.css            # the original stylesheet, unmodified
```

## Design decisions

- **CSS stayed as one global stylesheet.** The original 3,200-line file uses
  shared CSS custom properties and cross-cutting responsive rules (one media
  query block touches nearly every section), so splitting it per-component
  would risk breaking the cascade for a cosmetic-only win. Componentization
  happened at the **markup/behavior** layer instead — every section, card,
  and interactive effect (cursor, tilt, magnetic buttons, ripple, starfield,
  typewriter, counters, reveal-on-scroll) is now its own component or hook
  instead of one 727-line script running querySelectorAll on load.
- **The laptop hero illustration** is a large, static, `aria-hidden` decorative
  SVG with no dynamic data, so it's kept as a verbatim string
  (`src/assets/laptopSvgInner.js`) rendered via `dangerouslySetInnerHTML`
  rather than hand-converted attribute-by-attribute to JSX — same output,
  far less risk of a typo silently breaking the artwork.
- **Contact form** simulates sending (same as the original) — swap the
  `setTimeout` in `Contact.jsx` for a real request (Formspree, your own API,
  a serverless function) when you're ready to actually receive messages.

## SEO

- Per-render `<title>`, meta description, canonical URL, Open Graph, Twitter
  Card, and a `Person` JSON-LD block via `react-helmet-async` (`Seo.jsx`),
  scoped to `https://eyadashraf.dev`.
- `public/robots.txt` and `public/sitemap.xml` included.
- Fonts are preconnected + loaded in the static HTML shell (not injected by
  JS) so they start downloading before React hydrates.
- A tiny inline script in `public/index.html` applies the saved theme
  before first paint, avoiding a light/dark flash on load.

## Performance notes

- Every scroll-triggered animation (reveal, skill bars, counters, active-nav
  highlight) uses `IntersectionObserver`, not scroll-event polling.
- The starfield canvas, custom cursor, and click-sparks effects clean up
  their `requestAnimationFrame` loops and listeners on unmount.
- `web-vitals` is wired up in `index.js` — replace the no-op logger with a
  real analytics call when you're ready to track CLS/LCP/FID/TTFB in
  production.
