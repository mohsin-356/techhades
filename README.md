# TechHades – Animated Tech Agency Website

Theme: modern dark with neon indigo/purple/cyan accents. Fonts: Inter + Orbitron.

## Quick Start

1) Install dependencies
```bash
npm install
```

2) Configure environment (email via Nodemailer)
Create a `.env.local` file at project root with:
```
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASS=your-pass
TO_EMAIL=destination@example.com
```

3) Run dev server
```bash
npm run dev
```
Open http://localhost:3000

## Structure

- `src/app/layout.tsx` – global metadata, fonts, `Navbar`, `Footer`, `PageTransition`
- `src/app/page.tsx` – Home: `Hero`, `ServicesOverview`, `TechGrid`, `Testimonials`, `Cta`
- `src/app/{services|projects|about|contact}/page.tsx` – core pages
- `src/app/api/contact/route.ts` – POST endpoint using Nodemailer
- `src/components/*` – UI components and shared pieces
- `src/hooks/*` – `useInView` and `useAnime` helpers
- `src/app/globals.css` – Tailwind v4 theme tokens, gradients, utilities

## Animations

- Reusable text reveal: `components/shared/AnimatedText.tsx`
- Page fade/slide transitions: `components/PageTransition.tsx`
- Card reveal on mount: `components/shared/ServiceCard.tsx`
- Floating particle backdrop in `Hero`

## Notes

- Tailwind v4 uses `@theme inline` tokens (`--color-*`) that power classes like `text-brand`/`bg-brand-2`. CSS linters may warn on `@theme`/`@apply`, but build is correct.
- Update `metadataBase` in `src/app/layout.tsx` to your production URL.
- Replace placeholder social links in `Footer` and contact info on the `Contact` page.

## Deploy

Recommended: Vercel. Set the same environment variables in your Vercel project for email to work.
