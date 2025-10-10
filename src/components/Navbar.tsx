"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-wide">
          <span className="text-white">Tech</span>
          <span className="text-brand">Hades</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-200">
          <NavLink href="/services" label="Services" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />
        </nav>
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full px-4 py-2 bg-brand hover:bg-brand-2 transition-colors text-white text-sm font-medium shadow-[0_0_24px_rgba(109,106,255,0.35)]"
          >
            Get a Quote
          </Link>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-5 h-5 text-white"
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
        "hover:text-white transition-colors",
        active && "text-white"
      )}
    >
      {label}
    </Link>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="block py-2 text-zinc-200 hover:text-white">
      {label}
    </Link>
  );
}
