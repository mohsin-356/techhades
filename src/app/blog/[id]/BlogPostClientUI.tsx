"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  Bookmark,
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Copy,
  Eye,
  Heart,
  Printer,
  TrendingUp,
} from "lucide-react";

type TocItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

const formatDateLong = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
};

const formatTimer = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const getStorageKey = (postId: number, key: string) => `blog:${postId}:${key}`;

function getScrollContainer() {
  return document.getElementById("blog-scroll-container") as HTMLDivElement | null;
}

function scrollToId(id: string) {
  const container = getScrollContainer();
  const el = document.getElementById(id);
  if (!el || !container) return;
  const offset = 80;
  const containerRect = container.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  const scrollTop = container.scrollTop + (elRect.top - containerRect.top) - offset;
  container.scrollTo({ top: scrollTop, behavior: "smooth" });
}

async function copyCurrentUrl(setCopied: (v: boolean) => void) {
  const url = window.location.href;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  } catch {
    // ignore
  }
}

export default function BlogPostClientUI({
  postId,
  toc,
  author,
  date,
  readTime,
  views,
  initialLikes,
}: {
  postId: number;
  toc: TocItem[];
  author: string;
  date: string;
  readTime: string;
  views: number;
  initialLikes: number;
}) {
  const [mounted, setMounted] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [readingSeconds, setReadingSeconds] = useState(0);
  const [activeHeading, setActiveHeading] = useState<string | null>(null);
  const [showToc, setShowToc] = useState(true);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const hasToc = toc.length > 0;

  const portalNodes = useMemo(() => {
    if (!mounted) return null;
    return {
      progress: document.getElementById("blog-progress-root"),
      leftToc: document.getElementById("blog-left-toc-root"),
      header: document.getElementById("blog-header-root"),
      mobileToc: document.getElementById("blog-mobile-toc-root"),
      mobileActions: document.getElementById("blog-mobile-actions-root"),
      rightActions: document.getElementById("blog-right-actions-root"),
    };
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    try {
      const storedLiked = window.localStorage.getItem(getStorageKey(postId, "liked"));
      const storedBookmarked = window.localStorage.getItem(getStorageKey(postId, "bookmarked"));
      const storedLikes = window.localStorage.getItem(getStorageKey(postId, "likes"));

      if (storedLiked !== null) setLiked(storedLiked === "true");
      if (storedBookmarked !== null) setBookmarked(storedBookmarked === "true");
      if (storedLikes !== null && !Number.isNaN(Number(storedLikes))) setLikes(Number(storedLikes));
    } catch {
      // ignore
    }
  }, [mounted, postId]);

  useEffect(() => {
    if (!mounted) return;

    const startTime = Date.now();
    const interval = window.setInterval(() => {
      setReadingSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const container = getScrollContainer();
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const next = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(next);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    if (!hasToc) return;

    const container = getScrollContainer();
    if (!container) return;

    const elements = toc
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0));
        if (visible[0]?.target?.id) setActiveHeading(visible[0].target.id);
      },
      {
        root: container,
        rootMargin: "-80px 0px -70% 0px",
        threshold: [0.1, 0.5, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [mounted, hasToc, toc]);

  const handleLike = () => {
    const nextLiked = !liked;
    const nextLikes = nextLiked ? likes + 1 : Math.max(0, likes - 1);
    setLiked(nextLiked);
    setLikes(nextLikes);
    try {
      window.localStorage.setItem(getStorageKey(postId, "liked"), String(nextLiked));
      window.localStorage.setItem(getStorageKey(postId, "likes"), String(nextLikes));
    } catch {
      // ignore
    }
  };

  const handleBookmark = () => {
    const next = !bookmarked;
    setBookmarked(next);
    try {
      window.localStorage.setItem(getStorageKey(postId, "bookmarked"), String(next));
    } catch {
      // ignore
    }
  };

  if (!portalNodes) return null;

  return (
    <>
      {portalNodes.progress
        ? createPortal(
          <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>,
          portalNodes.progress
        )
        : null}

      {portalNodes.leftToc && hasToc
        ? createPortal(
          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-xs uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" />
                Contents
              </h3>
            </div>

            <nav className="space-y-1">
              {toc.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className={`w-full flex items-start text-left py-2 px-3 rounded-lg transition-all text-sm group ${activeHeading === item.id
                    ? "bg-blue-500/10 text-blue-400 border-l-2 border-blue-500 font-medium"
                    : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/50"
                    }`}
                  type="button"
                >
                  <span className={`block truncate ${item.level === 3 ? "pl-3 text-xs" : ""}`}>
                    {item.title}
                  </span>
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-slate-800/60">
              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 font-medium uppercase tracking-wide">
                <span>Reading Progress</span>
                <span>{Math.round(scrollProgress)}%</span>
              </div>
              <div className="h-1.5 bg-slate-800/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>
          </div>,
          portalNodes.leftToc
        )
        : null}

      {portalNodes.header
        ? createPortal(
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <button
                onClick={() => window.history.back()}
                className="p-2 hover:bg-slate-800 rounded-lg transition group"
                type="button"
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
              </button>

              <div className="min-w-0">
                <div className="text-sm text-slate-400">Reading</div>
                <div className="text-sm text-slate-200 truncate">{formatTimer(readingSeconds)}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => copyCurrentUrl(setCopied)}
                className="p-2 hover:bg-slate-800 rounded-lg transition"
                type="button"
                aria-label="Copy link"
              >
                {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
              </button>
              <button
                onClick={() => window.print()}
                className="p-2 hover:bg-slate-800 rounded-lg transition"
                type="button"
                aria-label="Print"
              >
                <Printer className="w-5 h-5" />
              </button>
            </div>
          </div>,
          portalNodes.header
        )
        : null}

      {portalNodes.mobileToc && hasToc
        ? createPortal(
          <div className="lg:hidden bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-xl p-4 mb-6">
            <button
              onClick={() => setShowToc((v) => !v)}
              className="w-full flex items-center justify-between gap-3"
              type="button"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <BookOpen className="w-4 h-4" />
                Contents
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform text-slate-500 ${showToc ? "rotate-180" : ""}`} />
            </button>

            {showToc ? (
              <div className="mt-4 space-y-1">
                {toc.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToId(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all ${activeHeading === item.id
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                      }`}
                    type="button"
                  >
                    <span className={`text-sm truncate ${item.level === 3 ? "pl-4" : ""}`}>{item.title}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>,
          portalNodes.mobileToc
        )
        : null}

      {portalNodes.mobileActions
        ? createPortal(
          <div className="flex items-center gap-2">
            <button
              onClick={handleLike}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all ${liked
                ? "bg-red-500/10 text-red-400 border border-red-500/20"
                : "hover:bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700/50"
                }`}
              type="button"
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
              <span className="text-xs">{likes}</span>
            </button>
            <button
              onClick={handleBookmark}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all ${bookmarked
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                : "hover:bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700/50"
                }`}
              type="button"
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`} />
            </button>
            <button
              onClick={() => copyCurrentUrl(setCopied)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-white transition border border-slate-700/50"
              type="button"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>,
          portalNodes.mobileActions
        )
        : null}

      {portalNodes.rightActions
        ? createPortal(
          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-xl p-5 shadow-lg">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2 font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              Quick Actions
            </h4>
            <div className="space-y-2">
              <button
                onClick={handleLike}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all group ${liked
                  ? "bg-red-500/10 text-red-400 border border-red-500/20"
                  : "hover:bg-slate-800/50 text-slate-400 hover:text-white border border-transparent"
                  }`}
                type="button"
              >
                <div className="flex items-center gap-3">
                  <Heart className={`w-4 h-4 transition-transform group-hover:scale-110 ${liked ? "fill-current" : ""}`} />
                  <span className="text-sm font-medium">Like</span>
                </div>
                <span className="text-xs bg-slate-800/50 px-2 py-0.5 rounded-full text-slate-400 group-hover:text-white">{likes}</span>
              </button>

              <button
                onClick={handleBookmark}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${bookmarked
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  : "hover:bg-slate-800/50 text-slate-400 hover:text-white border border-transparent"
                  }`}
                type="button"
              >
                <Bookmark className={`w-4 h-4 transition-transform group-hover:scale-110 ${bookmarked ? "fill-current" : ""}`} />
                <span className="text-sm font-medium">{bookmarked ? "Saved" : "Save"}</span>
              </button>

              <button
                onClick={() => copyCurrentUrl(setCopied)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-white transition group border border-transparent"
                type="button"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 transition-transform group-hover:scale-110" />}
                <span className="text-sm font-medium">{copied ? "Copied!" : "Copy Link"}</span>
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800/60 space-y-3 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 opacity-70" /> Published</span>
                <span className="text-slate-300">{formatDateLong(date)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 opacity-70" /> Read time</span>
                <span className="text-slate-300">{readTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Eye className="w-3.5 h-3.5 opacity-70" /> Views</span>
                <span className="text-slate-300">{views.toLocaleString()}</span>
              </div>
            </div>
          </div>,
          portalNodes.rightActions
        )
        : null}
    </>
  );
}
