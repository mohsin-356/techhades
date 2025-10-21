# TechHades – Modern Animated Tech Agency Website

A cutting-edge, fully animated tech agency website built with the latest modern technologies and UI libraries.

**Theme**: Modern dark with neon indigo/purple/cyan accents  
**Fonts**: Inter + Orbitron  
**Stack**: Next.js 15 + React 19 + TypeScript + Framer Motion + Tailwind CSS v4

## ✨ Modern Features

- 🎨 **Latest UI Libraries**: shadcn/ui components with Radix UI primitives
- 🎭 **Advanced Animations**: Framer Motion + Anime.js for cinematic effects
- 🎯 **Modern Icons**: Lucide React icon library
- 🌈 **Glass Morphism**: Advanced backdrop blur effects
- 📱 **Responsive Design**: Mobile-first with progressive enhancement
- 🔔 **Toast Notifications**: Sonner for elegant notifications
- 🎪 **Micro-interactions**: Hover effects, loading states, and transitions
- 🌙 **Theme System**: Dark/light mode with smooth transitions

## 🚀 Quick Start

1) **Install dependencies**
```bash
npm install
```

2) **Configure environment** (email via Nodemailer)
Create a `.env.local` file at project root with:
```
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASS=your-pass
TO_EMAIL=destination@example.com
```

3) **Run development server**
```bash
npm run dev
```
Open http://localhost:3000

## 📦 Modern Tech Stack

### Core Framework
- **Next.js 15.5.4** - Latest App Router with React 19
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Full type safety

### UI & Styling
- **Tailwind CSS v4** - Latest utility-first CSS framework
- **shadcn/ui** - Modern component library with Radix UI
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Intelligent class merging

### Animations & Interactions
- **Framer Motion 12.0** - Production-ready motion library
- **Anime.js 3.2.2** - Lightweight animation engine
- **React Intersection Observer** - Viewport-based animations

### Icons & Assets
- **Lucide React** - Modern icon library (460+ icons)
- **Next.js Image** - Optimized image loading

### Notifications & UX
- **Sonner** - Beautiful toast notifications
- **Vaul** - Drawer component for mobile

### Backend & API
- **Nodemailer** - Email sending functionality
- **Next.js API Routes** - Serverless functions

## 📁 Project Structure

- `src/app/layout.tsx` – Global layout with modern UI providers
- `src/app/page.tsx` – Home: Enhanced `Hero`, `ServicesOverview`, `TechGrid`, `Testimonials`, `Cta`
- `src/app/{services|projects|about|contact}/page.tsx` – Modernized core pages
- `src/app/api/contact/route.ts` – Contact form API with validation
- `src/components/ui/*` – Modern UI component library (Button, Card, Badge, Motion, etc.)
- `src/components/shared/*` – Reusable components with animations
- `src/hooks/*` – Custom hooks for animations and viewport detection
- `src/lib/utils.ts` – Utility functions and class merging
- `src/app/globals.css` – Enhanced CSS with modern effects and animations

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
