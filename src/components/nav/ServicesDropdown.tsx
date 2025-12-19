"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code2, Globe, Smartphone, Palette, Bot, Megaphone } from "lucide-react";

interface Item {
  href: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

const items: Item[] = [
  { href: "/services/software-development", title: "Software Development", desc: "Custom software solutions for your business.", icon: Code2 },
  { href: "/services/website-development", title: "Website Development", desc: "Fast, modern, and SEO-optimized websites.", icon: Globe },
  { href: "/services/mobile-app-development", title: "Mobile App Development", desc: "iOS, Android, and cross-platform apps.", icon: Smartphone },
  { href: "/services/ui-ux-designing", title: "UI/UX Designing", desc: "Beautiful, user-centric design experiences.", icon: Palette },
  { href: "/services/ai-automation", title: "AI & Automation", desc: "Intelligent automation and AI solutions.", icon: Bot },
  { href: "/services/ads-social-media", title: "Ads & Social Media", desc: "Strategic marketing and social presence.", icon: Megaphone },
];

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/services"
        className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
      >
        Services
        <ChevronDown className="w-4 h-4" />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 top-8 w-[min(92vw,980px)] z-50"
          >
            <div className="rounded-2xl border shadow-xl backdrop-blur bg-white/90 dark:bg-slate-900/90 border-gray-200 dark:border-slate-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 p-4">
                {items.map((it) => {
                  const Icon = it.icon;
                  const active = pathname?.startsWith(it.href);
                  return (
                    <Link
                      key={it.href}
                      href={it.href}
                      className="group"
                    >
                      <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-100/80 dark:hover:bg-slate-800/80 transition-colors border border-transparent hover:border-gray-200/70 dark:hover:border-slate-700/70">
                        <div className="mt-0.5 flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 text-white dark:from-purple-500 dark:to-indigo-500">
                          <motion.div whileHover={{ scale: 1.1, rotate: 8 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}>
                            <Icon className="w-5 h-5" />
                          </motion.div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {it.title}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {it.desc}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
