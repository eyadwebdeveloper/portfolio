# 💼 Eyad Ashraf — Developer Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

A premium, single-page developer portfolio showcasing full-stack projects, collaborations, and recommendation letters. Built with React and a custom design system — animated, interactive, and tuned for performance.

---

## 🌐 Live Preview

**[https://eyadashraf.dev](https://eyadashraf.dev)**

---

## ✨ Features

- **Animated Page Loader** — Full-screen loader dismissed once critical assets are ready
- **Custom Cursor** — Smooth, LERP-trailing cursor replacement (desktop / pointer devices only)
- **Starfield Background** — Ambient animated backdrop with subtle parallax
- **Scroll Progress Bar** — Fixed indicator tracking read progress down the page
- **Hero Section** — Introductory panel with animated entrance
- **About** — Background, skills, and technical focus areas
- **Projects Grid** — Bento-style responsive grid with variable card spans, tilt-on-hover cards, live-status badges, and stack tags
- **Collaborations** — Dedicated section highlighting organizational work (IYNA, YSJ, TutWonders)
- **Services** — Overview of offerings for prospective clients or collaborators
- **Recommendation Letters** — Real letters with image previews and PDF downloads
- **Contact Form** — Client-validated form wired to a serverless function (Resend) with honeypot spam protection
- **Scroll Reveal** — Reusable `Reveal` component fading/sliding elements in via IntersectionObserver, with directional and delay variants
- **Sidenav** — Persistent section navigation with theme toggle
- **Toast Notifications** — Global toast system for form feedback and confirmations
- **Modals** — Dedicated project and recommendation-letter modals with context-based state management
- **Click Sparks** — Decorative particle burst on click
- **Back to Top** — Appears after a scroll threshold
- **Dark / Light Theme** — Persisted theme toggle via `useTheme`

---

## 🗂️ Project Structure

```
portfolio/
├── src/
│   ├── App.jsx                  # Root composition of all sections and providers
│   ├── components/
│   │   ├── Seo.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Loader.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── Starfield.jsx
│   │   ├── BackToTop.jsx
│   │   ├── ClickSparks.jsx
│   │   ├── Sidenav.jsx
│   │   ├── Toast.jsx
│   │   ├── ToastContext.jsx
│   │   ├── Reveal.jsx            # Generic scroll-reveal wrapper
│   │   ├── ProjectCard.jsx
│   │   ├── modals/
│   │   │   ├── ProjectModal.jsx
│   │   │   ├── ProjectModalContext.jsx
│   │   │   ├── LetterModal.jsx
│   │   │   └── LetterModalContext.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Projects.jsx
│   │       ├── Collaborations.jsx
│   │       ├── Services.jsx
│   │       ├── Letters.jsx
│   │       └── Contact.jsx
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useTilt.js
│   │   ├── useMagnetic.js
│   │   └── useRipple.js
│   ├── data/
│   │   └── projects.js           # Project content and metadata
│   └── styles/
│       └── global.css            # All styles, section-commented
├── api/
│   └── contact.js                 # Vercel serverless function (Resend email delivery)
└── README.md                       # This file
```

---

## 🎨 Design System

| CSS Variable | Usage |
|---|---|
| `--bg2` | Card and panel backgrounds |
| `--ink` | Primary body text |
| `--ink3` | Secondary / muted text |
| `--v` | Primary gradient accent (violet) |
| `--c` | Secondary gradient accent |

**Layout:** 12-column responsive bento grid for the Projects section, with `span-4` through `span-12` utility classes for variable card sizing.

---

## 🧩 Component Architecture

| Component / Hook | Responsibility |
|---|---|
| `Reveal` | Wraps any element in a self-contained IntersectionObserver-based scroll reveal, replacing global `querySelectorAll` passes |
| `useTilt` | Adds pointer-based 3D tilt to project cards |
| `useMagnetic` | Adds magnetic pull-toward-cursor effect on interactive buttons |
| `useRipple` | Adds click ripple feedback on buttons |
| `useTheme` | Manages and persists dark/light theme state |
| `ProjectModalContext` / `LetterModalContext` | Global state for opening project and letter detail modals from anywhere in the tree |
| `ToastContext` | Global toast dispatch used for form validation and submission feedback |

---

## 📬 Contact Form Backend

The contact form submits to `/api/contact`, a Vercel serverless function that:

- Validates required fields and email format server-side
- Rejects spam submissions via a hidden honeypot field
- Sends the message via the [Resend](https://resend.com) API to the site owner's inbox, with `reply_to` set to the sender's address

**Required environment variable (set in Vercel project settings):**

```
RESEND_API_KEY=your_resend_api_key
```

> The sender address in `api/contact.js` must be on a domain verified with Resend before production use.

---

## 📱 Responsive Behaviour

| Breakpoint | Layout |
|---|---|
| `> 1100 px` | Full desktop — 12-column project grid, multi-column sections |
| `600 px – 1100 px` | Tablet — 6-column project grid, condensed spans |
| `< 600 px` | Mobile — single-column stacks, full-width project cards |

The custom cursor and tilt/magnetic effects are suppressed on touch devices via `(hover: hover)` media queries.

---

## 🚀 Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/new).
3. Add the `RESEND_API_KEY` environment variable under **Project Settings → Environment Variables**.
4. Deploy — the `/api` directory is automatically detected and deployed as serverless functions.

---

## 🛠️ Local Development

```bash
git clone https://github.com/eyadwebdeveloper/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

---

## 📄 License

© 2026 Eyad Ashraf. All rights reserved.
