"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Sparkles, Globe, Smartphone, Palette, Bot, Code2, Megaphone, Gamepad2, Cloud, ShoppingCart, ChevronDown } from "lucide-react";
// import ThemeToggle from "@/components/ThemeToggle"; // temporarily hidden


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Track scroll position to switch between full-width (top) and condensed (after leaving top)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const atTop = y <= 8;
      setCondensed(!atTop);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed z-50 transition-all duration-300",
        "backdrop-blur-[14px] border",
        "bg-[rgba(5,7,20,0.6)] border-[rgba(255,255,255,0.08)]",
        condensed
          ? "top-2 left-[10%] right-[10%] w-auto rounded-2xl shadow-[0_8px_32px_rgba(100,103,255,0.15)]"
          : "top-0 left-0 right-0 w-full rounded-none border-b shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative">
        {/* AlienMatrix gradient sweep */}
        <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(100,103,255,0.08)] via-transparent to-[rgba(67,178,249,0.05)]" />
          <div className="absolute -inset-x-8 -top-24 h-48 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(67,178,249,0.15),transparent)]" />
        </div>

        <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center gap-2 group" aria-label="AlienMatrix Home">
              <Image
                src="/components/AlienMatrix_logo.png"
                alt="AlienMatrix logo"
                width={28}
                height={28}
                className="h-7 w-7 rounded-sm shadow-sm"
                priority
              />
              <span className="font-display text-xl tracking-wide brand-shift">
                AlienMatrix
              </span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-1 rounded-full bg-[rgba(11,21,38,0.6)] p-1 ring-1 ring-[rgba(255,255,255,0.08)] backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(100,103,255,0.2),0_6px_20px_rgba(100,103,255,0.1)]">
            <NavPillLink href="/" label="Home" />
            <ServicesDropdownPill />
            <NavPillLink href="/projects" label="Projects" />
            {/* <NavPillLink href="/blog" label="Blog" /> */}
            <NavPillLink href="/about" label="About" />
            <NavPillLink href="/contact" label="Contact" />
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="primary" size="sm">
              <Link href="/contact">
                Get a Quote
              </Link>
            </Button>
            {/* <ThemeToggle /> */}
          </div>

          <motion.button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg"
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
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-[#0B1526] border border-[rgba(100,103,255,0.25)] rounded-2xl mt-2 mx-2 shadow-[0_8px_32px_rgba(100,103,255,0.15)]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 py-4 space-y-3">
              <div className="space-y-2">
                <MobileServicesDropdown />
                <MobileLink href="/projects" label="Projects" />
                {/* <MobileLink href="/blog" label="Blog" /> */}
                <MobileLink href="/about" label="About" />
                <MobileLink href="/contact" label="Contact" />
              </div>
              <div className="flex justify-center py-2">
                {/* <ThemeToggle /> */}
              </div>
              <Button asChild variant="primary" className="w-full">
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

function NavPillLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
        active
          ? "text-white bg-gradient-to-r from-[#6467FF] to-[#43B2F9] shadow-[0_0_24px_rgba(100,103,255,0.5)] font-semibold"
          : "text-[#94A3B8] hover:text-white hover:bg-[rgba(100,103,255,0.15)]"
      )}
    >
      {label}
    </Link>
  );
}

function ServicesDropdownPill() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = pathname?.startsWith('/services');

  const services = [
    { href: "/services/web-development", title: "Web Development", desc: "Custom, fast, SEO-friendly websites.", icon: Globe },
    { href: "/services/ecommerce", title: "Ecommerce", desc: "Online stores, payments, catalogs.", icon: ShoppingCart },
    { href: "/services/mobile-development", title: "Mobile Development", desc: "iOS, Android, and cross‑platform.", icon: Smartphone },
    { href: "/services/ui-ux-design", title: "UI/UX Design", desc: "Engaging, conversion‑focused design.", icon: Palette },
    { href: "/services/game-app-design", title: "Game App Design", desc: "UI/UX for games & interactive apps.", icon: Gamepad2 },
    { href: "/services/ai-ml-applications", title: "AI/ML Applications", desc: "Automations, agents, analytics.", icon: Bot },
    { href: "/services/software-development", title: "Software Development", desc: "Bespoke systems and platforms.", icon: Code2 },
    { href: "/services/aws-cloud", title: "AWS & Cloud", desc: "Cloud infra, DevOps & scaling.", icon: Cloud },
    { href: "/services/ai-automation", title: "AI & Automation", desc: "Workflows, agents, and integrations.", icon: Bot },
    { href: "/services/ads-social-media", title: "Ads & Social Media", desc: "Campaigns, management, and growth.", icon: Megaphone },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
          active
            ? "text-white bg-gradient-to-r from-[#6467FF] to-[#43B2F9] shadow-[0_0_24px_rgba(100,103,255,0.5)] font-semibold"
            : "text-[#94A3B8] hover:text-white hover:bg-[rgba(100,103,255,0.15)]"
        )}
      >
        Services
        <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[min(92vw,980px)] z-[60]"
          >
            <div className="rounded-2xl border shadow-[0_8px_32px_rgba(100,103,255,0.2)] backdrop-blur-[14px] bg-[rgba(11,21,38,0.95)] border-[rgba(100,103,255,0.25)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 p-4">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group"
                  >
                    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-[rgba(100,103,255,0.1)] transition-colors border border-transparent hover:border-[rgba(67,178,249,0.3)]">
                      <div className="mt-0.5 flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#6467FF] to-[#43B2F9] text-white shadow-[0_0_15px_rgba(100,103,255,0.4)]">
                        <motion.div whileHover={{ scale: 1.1, rotate: 8 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}>
                          {(() => { const Icon = service.icon as any; return <Icon className="w-5 h-5" />; })()}
                        </motion.div>
                      </div>
                      <div>
                        <div className="font-semibold text-white group-hover:text-[#43B2F9] transition-colors">
                          {service.title}
                        </div>
                        <div className="text-sm text-[#94A3B8]">
                          {service.desc}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileServicesDropdown() {
  const [open, setOpen] = useState(false);
  const services = [
    { href: "/services/web-development", title: "Web Development", desc: "Custom, fast, SEO-friendly websites.", icon: Globe },
    { href: "/services/ecommerce", title: "Ecommerce", desc: "Online stores, payments, catalogs.", icon: ShoppingCart },
    { href: "/services/mobile-development", title: "Mobile Development", desc: "iOS, Android, and cross‑platform.", icon: Smartphone },
    { href: "/services/ui-ux-design", title: "UI/UX Design", desc: "Engaging, conversion‑focused design.", icon: Palette },
    { href: "/services/game-app-design", title: "Game App Design", desc: "UI/UX for games & interactive apps.", icon: Gamepad2 },
    { href: "/services/ai-ml-applications", title: "AI/ML Applications", desc: "Automations, agents, analytics.", icon: Bot },
    { href: "/services/software-development", title: "Software Development", desc: "Bespoke systems and platforms.", icon: Code2 },
    { href: "/services/aws-cloud", title: "AWS & Cloud", desc: "Cloud infra, DevOps & scaling.", icon: Cloud },
    { href: "/services/ai-automation", title: "AI & Automation", desc: "Workflows, agents, and integrations.", icon: Bot },
    { href: "/services/ads-social-media", title: "Ads & Social Media", desc: "Campaigns, management, and growth.", icon: Megaphone },
  ];

  return (
    <div className="rounded-lg border border-[rgba(100,103,255,0.25)]">
      <button
        className="w-full flex items-center justify-between px-4 py-2 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium text-white">Services</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-[#43B2F9]" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="px-1 pb-2"
          >
            <div className="grid grid-cols-1 gap-1 max-h-[60vh] overflow-y-auto">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-[rgba(100,103,255,0.1)] transition-colors border border-transparent hover:border-[rgba(67,178,249,0.2)]">
                    <div className="mt-0.5 flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#6467FF] to-[#43B2F9] text-white shadow-[0_0_10px_rgba(100,103,255,0.3)]">
                      {(() => { const Icon = service.icon as any; return <Icon className="w-5 h-5" />; })()}
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-[#43B2F9] transition-colors">
                        {service.title}
                      </div>
                      <div className="text-sm text-[#94A3B8]">
                        {service.desc}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <div className="px-4 py-2 rounded-lg bg-[rgba(100,103,255,0.08)] hover:bg-[rgba(100,103,255,0.15)] transition-colors">
        <Link
          href={href}
          className="block text-[#94A3B8] hover:text-white transition-colors"
        >
          {label}
        </Link>
      </div>
    </motion.div>
  );
}
