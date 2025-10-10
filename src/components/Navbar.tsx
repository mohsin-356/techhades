"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("theme");
    const system = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = (saved === "light" || saved === "dark") ? (saved as "light" | "dark") : system;
    setTheme(initial);
  }, []);

  // Apply theme attribute to <html>
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    try {
      window.localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-foreground/10 bg-foreground/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-wide">
          <span className="text-foreground">Tech</span>
          <span className="text-brand">Hades</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          <NavLink href="/services" label="Services" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            aria-pressed={theme === "light"}
            className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition"
            title={theme === "light" ? "Switch to dark" : "Switch to light"}
          >
            {theme === "light" ? (
              // Moon icon
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-foreground/80">
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"></path>
              </svg>
            ) : (
              // Sun icon
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-foreground/80">
                <path d="M12 4V2m0 20v-2M4.93 4.93 3.52 3.52m16.97 16.97-1.41-1.41M4 12H2m20 0h-2M4.93 19.07l-1.41 1.41M20.48 3.52l-1.41 1.41M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <Link
            href="/contact"
            className="rounded-full px-4 py-2 bg-brand hover:bg-brand-2 transition-colors text-white text-sm font-medium shadow-[0_0_24px_rgba(109,106,255,0.35)]"
          >
            Get a Quote
          </Link>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-foreground/10 bg-foreground/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-5 h-5 text-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-[max-height] duration-300",
          open ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="px-4 pb-4 space-y-2">
          <MobileLink href="/services" label="Services" />
          <MobileLink href="/projects" label="Projects" />
          <MobileLink href="/about" label="About" />
          <MobileLink href="/contact" label="Contact" />
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            aria-pressed={theme === "light"}
            className="w-full rounded-md border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 py-2 text-sm text-foreground"
          >
            {theme === "light" ? "Switch to Dark" : "Switch to Light"}
          </button>
          <Link
            href="/contact"
            className="block text-center rounded-md px-4 py-2 bg-brand hover:bg-brand-2 transition-colors text-white text-sm font-medium"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={clsx(
        "hover:text-foreground transition-colors",
        active && "text-foreground"
      )}
    >
      {label}
    </Link>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="block py-2 text-foreground/80 hover:text-foreground">
      {label}
    </Link>
  );
}
