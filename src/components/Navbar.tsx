"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { AlienHead, UFO } from "@/components/ui/alien-icons";

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
    <motion.header 
      className="fixed top-0 inset-x-0 z-50 glass-strong border-b border-foreground/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="font-display text-xl tracking-wide flex items-center gap-2">
            <AlienHead className="w-5 h-5 text-brand" animated />
            <span className="text-foreground">Tech</span>
            <span className="text-brand">Hades</span>
            <UFO className="w-6 h-4 text-accent ml-1" animated />
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          <NavLink href="/services" label="Services" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />
        </nav>
        
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            aria-pressed={theme === "light"}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg glass hover:bg-foreground/10 transition-all duration-200"
            title={theme === "light" ? "Switch to dark" : "Switch to light"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          
          <Button asChild variant="glow" size="sm">
            <Link href="/contact">
              Get a Quote
            </Link>
          </Button>
        </div>
        
        <motion.button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg glass"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden glass-card border-t border-foreground/10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 py-4 space-y-3">
              <MobileLink href="/services" label="Services" />
              <MobileLink href="/projects" label="Projects" />
              <MobileLink href="/about" label="About" />
              <MobileLink href="/contact" label="Contact" />
              
              <motion.button
                onClick={toggleTheme}
                className="w-full flex items-center justify-center gap-2 rounded-lg glass py-3 text-sm text-foreground"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                {theme === "light" ? "Switch to Dark" : "Switch to Light"}
              </motion.button>
              
              <Button asChild variant="glow" className="w-full">
                <Link href="/contact">
                  Get a Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      <Link
        href={href}
        className={cn(
          "relative hover:text-foreground transition-colors duration-200",
          active && "text-foreground"
        )}
      >
        {label}
        {active && (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-brand-2 rounded-full"
            layoutId="navbar-indicator"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        )}
      </Link>
    </motion.div>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Link 
        href={href} 
        className="block py-3 px-4 text-foreground/80 hover:text-foreground glass rounded-lg transition-colors"
      >
        {label}
      </Link>
    </motion.div>
  );
}
