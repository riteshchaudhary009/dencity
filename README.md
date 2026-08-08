# Dencity — Dental Care, Designed for City Life

A single-page marketing site for a modern dental clinic, built with React 19, Vite 8, and Tailwind CSS v4.

## What's here

- **Hero** — headline, CTAs, and the "smile arc" signature illustration (a dental chart traced by an animated smile curve)
- **About** — clinic story + feature grid
- **Dentists** — team profiles
- **Pricing** — three-tier pricing cards
- **Testimonials** — patient reviews
- **FAQ** — accordion
- **Contact** — booking request form (front-end only, no backend wired up)
- **Navbar / Footer / Floating action button**

All copy is placeholder content for a fictional clinic ("Dencity") — swap in real clinic details, dentist names/bios, prices, and contact info before launch.

## Brand

- **Logo**: `src/components/Logo.jsx` — an inline SVG mark (crisp at any size), reused in the navbar and footer. The favicon at `public/favicon.svg` uses the same mark.
- **Colors / fonts**: defined in `src/index.css` under the Tailwind v4 `@theme` block — deep teal (`--color-teal-*`) as the primary brand color, warm coral (`--color-coral-*`) reserved for the signature "smile arc" curve and primary actions, on a warm paper background.
- **Signature element**: the "smile arc" — the curve of a dental arch and the curve of a smile are the same line. It appears in the hero illustration, the headline underline, and card hover accents.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

> **Note:** `node_modules` is not included in this zip — it's large and dependency binaries are platform-specific. Run `npm install` first; `package-lock.json` is included so you get the exact same dependency versions.

## Structure

```
src/
  components/     All page sections (Navbar, Hero, About, Dentists, Pricing,
                   Testimonials, FAQ, FAQItem, Contact, Footer, Floating, Logo)
  App.jsx         Assembles the page
  index.css       Tailwind import + design tokens (@theme)
  main.jsx        React root + router
public/
  favicon.svg     Brand mark favicon
```
