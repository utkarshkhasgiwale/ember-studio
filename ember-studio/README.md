# Ember Studio

An interactive, animation-driven agency website built to explore production-grade front-end motion design — custom page transitions, a hand-built animated cursor, and scroll-driven reveals, all on top of React and Tailwind CSS.

**Live demo:** [ember-studio.vercel.app](#) <!-- replace with your real Vercel URL -->

## Tech stack

`React` · `React Router` · `Tailwind CSS` · `GSAP` · `Vite`

## Features

- **Custom page-transition system** — staggered stair-wipe animation between routes, built with GSAP timelines
- **Full-screen animated navigation overlay** — staggered link reveals, magnetic hover states
- **Custom cursor component** — built from scratch with `requestAnimationFrame`-based easing, no library
- **Scroll-driven project showcase** — image pinning and progress-based image swapping via ScrollTrigger
- **Fully responsive** — desktop, tablet, and mobile breakpoints throughout

## What this project demonstrates

- Structuring a multi-page React app with shared context (`NavContext`) and route-aware animation
- Orchestrating complex, multi-step GSAP timelines rather than isolated CSS transitions
- Building a custom, reusable interaction primitive (the cursor component) instead of reaching for a library
- A cohesive visual design system (color tokens, typography, motion) applied consistently across pages

## Getting started

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Project structure

```
src/
├── components/
│   ├── common/        # Stairs (page transition), CustomCursor
│   ├── Navigation/     # Navbar, FullScreenNav
│   ├── home/           # Hero + bottom text, Video
│   └── projects/        # ProjectCard
├── context/            # NavContext (nav state + theme color)
├── pages/              # Home, Agence, Projects
└── App.jsx
```
