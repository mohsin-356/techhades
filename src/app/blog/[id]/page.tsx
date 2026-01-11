"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
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
  MessageCircle,
  Printer,
  Tag,
  TrendingUp,
  User,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Extended blog data with full content
const blogData = {
  1: {
    id: 1,
    title: "The Future of AI in Web Development: Transforming How We Build Digital Experiences",
    excerpt: "Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user interfaces that adapt in real-time.",
    author: "Alex Rodriguez",
    date: "2024-10-20",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&crop=center",
    tags: ["AI", "Web Development", "Machine Learning", "Future Tech"],
    views: 1247,
    likes: 89,
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept—it's actively reshaping the web development landscape today. As we advance into 2024, AI tools are becoming indispensable for developers, offering unprecedented capabilities in code generation, testing, and optimization.</p>

      <h2>AI-Powered Development Tools</h2>
      <p>Modern AI assistants like GitHub Copilot, ChatGPT, and specialized coding AIs are transforming how developers write code. These revolutionary tools can:</p>
      <ul>
        <li>Generate entire functions from simple natural language descriptions</li>
        <li>Debug complex issues in seconds rather than hours</li>
        <li>Suggest performance optimizations automatically</li>
        <li>Create responsive designs with minimal input</li>
        <li>Translate code between different programming languages</li>
      </ul>

      <h2>The Rise of Intelligent User Interfaces</h2>
      <p>AI is enabling the creation of interfaces that learn and adapt to user behavior in real-time. Machine learning algorithms can now:</p>
      <ul>
        <li>Personalize content based on user preferences and behavior patterns</li>
        <li>Predict user actions and pre-load resources for faster experiences</li>
        <li>Optimize layouts dynamically based on device and usage patterns</li>
        <li>Provide intelligent search results and recommendations</li>
        <li>Adapt accessibility features automatically for different user needs</li>
      </ul>

      <h2>Impact on Development Workflow</h2>
      <p>The integration of AI in development workflows is creating more efficient and productive processes:</p>
      
      <h3>1. Automated Testing</h3>
      <p>AI can generate comprehensive test cases, identify edge cases that humans might miss, and even create visual regression tests automatically.</p>
      
      <h3>2. Intelligent Code Review</h3>
      <p>AI-powered systems can identify potential bugs, security vulnerabilities, and code quality issues before they reach production.</p>
      
      <h3>3. Performance Optimization</h3>
      <p>Machine learning algorithms can analyze application performance and suggest specific optimizations for better speed and efficiency.</p>
      
      <h3>4. Enhanced Accessibility</h3>
      <p>AI tools can automatically generate alt text for images, ensure proper color contrast, and identify accessibility issues in real-time.</p>

      <h2>Real-World Applications</h2>
      <p>Companies are already leveraging AI in web development:</p>
      <ul>
        <li><strong>Netflix</strong> uses AI for personalized content recommendations and interface optimization</li>
        <li><strong>Shopify</strong> employs AI for automated product descriptions and SEO optimization</li>
        <li><strong>GitHub</strong> powers millions of developers with AI-assisted coding through Copilot</li>
        <li><strong>Figma</strong> integrates AI for design suggestions and automated layout generation</li>
      </ul>

      <h2>The Future Landscape</h2>
      <p>As we look toward the future, AI will continue to democratize web development, making it more accessible to non-technical users while enabling experienced developers to focus on creative problem-solving rather than repetitive tasks.</p>
      
      <p>The next wave of AI in web development will likely include:</p>
      <ul>
        <li>Fully automated deployment and scaling based on traffic patterns</li>
        <li>AI-generated entire applications from high-level descriptions</li>
        <li>Intelligent bug prediction and prevention systems</li>
        <li>Automated security auditing and patching</li>
        <li>Real-time performance optimization without human intervention</li>
      </ul>

      <p>The future of web development is not about replacing developers—it's about augmenting human creativity and problem-solving capabilities with the power of artificial intelligence.</p>
    `,
  },
  2: {
    id: 2,
    title: "Building Scalable React Applications: Best Practices and Performance Optimization",
    excerpt: "Learn essential techniques for building React applications that can handle millions of users while maintaining optimal performance and developer experience.",
    author: "Sarah Chen",
    date: "2024-10-18",
    readTime: "12 min read",
    category: "React Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop&crop=center",
    tags: ["React", "Performance", "Scalability", "Best Practices"],
    views: 2156,
    likes: 134,
    content: `
      <p>Building scalable React applications requires careful planning, architectural decisions, and performance optimization strategies. In this comprehensive guide, we'll explore the best practices that have proven successful in large-scale production environments.</p>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&h=900&fit=crop&crop=center"
          alt="React application architecture planning"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Scalable React starts with a clear architecture and consistent component boundaries.</figcaption>
      </figure>

      <h2>Component Architecture Fundamentals</h2>
      <p>The foundation of a scalable React application lies in its component architecture. Following proven design patterns ensures maintainability and reusability.</p>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=1600&h=900&fit=crop&crop=center"
          alt="Component-driven development and UI composition"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Component-driven development improves reuse, testability, and team velocity.</figcaption>
      </figure>

      <h3>Atomic Design Principles</h3>
      <ul>
        <li><strong>Atoms:</strong> Basic building blocks like buttons, inputs, and labels</li>
        <li><strong>Molecules:</strong> Simple combinations of atoms such as search forms and card headers</li>
        <li><strong>Organisms:</strong> Complex components like navigation bars and product grids</li>
        <li><strong>Templates:</strong> Page-level layouts that define structure</li>
        <li><strong>Pages:</strong> Specific instances of templates with real content</li>
      </ul>

      <h2>State Management Strategies</h2>
      <p>Choosing the right state management solution is crucial for application scalability and developer experience.</p>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&crop=center"
          alt="State management and data flow visualization"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Clear data flow and state boundaries reduce complexity as your app grows.</figcaption>
      </figure>

      <h3>Local State vs Global State</h3>
      <p>Understanding when to use local versus global state is essential:</p>
      <ul>
        <li>Use local state for component-specific data that doesn't need to be shared</li>
        <li>Reserve global state for truly shared data across multiple components</li>
        <li>Consider state colocation to improve performance and maintainability</li>
        <li>Avoid prop drilling by using context or state management libraries</li>
      </ul>

      <h3>Modern State Management Tools</h3>
      <p>Choose the right tool based on your application's complexity:</p>
      <ul>
        <li><strong>Zustand:</strong> Lightweight and flexible, perfect for small to medium applications</li>
        <li><strong>Redux Toolkit:</strong> Powerful for complex applications with predictable state updates</li>
        <li><strong>Jotai:</strong> Atomic approach to state management, great for component-level state</li>
        <li><strong>React Query:</strong> Excellent for server state management and caching</li>
      </ul>

      <h2>State Management Comparison</h2>
      <p>Choosing the right tool depends on your specific needs. Here's a breakdown of the most popular options:</p>
      
      <div class="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Library</th>
              <th>Best For</th>
              <th>Complexity</th>
              <th>Key Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Context API</strong></td>
              <td>Low-frequency updates</td>
              <td>Low</td>
              <td>Built-in, zero bundle size</td>
            </tr>
            <tr>
              <td><strong>Zustand</strong></td>
              <td>Global client state</td>
              <td>Low</td>
              <td>Minimal boilerplate, hooks-based</td>
            </tr>
            <tr>
              <td><strong>Redux Toolkit</strong></td>
              <td>Complex, large apps</td>
              <td>High</td>
              <td>DevTools, rigorous structure</td>
            </tr>
            <tr>
              <td><strong>React Query</strong></td>
              <td>Server state (API)</td>
              <td>Medium</td>
              <td>Caching, deduping, sync</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Performance Optimization Techniques</h2>
      <p>Performance optimization should be built into your development process from the beginning.</p>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1600&h=900&fit=crop&crop=center"
          alt="Performance monitoring and web vitals"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Measure real-user performance (Core Web Vitals) to guide optimizations.</figcaption>
      </figure>

      <h3>Code Splitting and Lazy Loading</h3>
      <p>Reduce initial bundle size by loading components only when needed:</p>
      <pre><code>const LazyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    &lt;Suspense fallback={&lt;Loading /&gt;}&gt;
      &lt;LazyComponent /&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>

      <h3>Memoization Strategies</h3>
      <p>Prevent unnecessary re-renders with proper memoization:</p>
      <ul>
        <li>Use <code>React.memo</code> for component memoization</li>
        <li>Implement <code>useMemo</code> for expensive calculations</li>
        <li>Apply <code>useCallback</code> for function references</li>
        <li>Consider <code>useMemo</code> for object and array dependencies</li>
      </ul>

      <h2>Testing and Quality Assurance</h2>
      <p>A robust testing strategy ensures your application remains stable as it scales and evolves.</p>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&h=900&fit=crop&crop=center"
          alt="Automated testing and quality assurance workflows"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Automated testing protects performance and UX as features scale.</figcaption>
      </figure>

      <h3>Testing Pyramid</h3>
      <ul>
        <li><strong>Unit Tests:</strong> Test individual components and functions in isolation</li>
        <li><strong>Integration Tests:</strong> Verify component interactions and data flow</li>
        <li><strong>End-to-End Tests:</strong> Validate complete user workflows and scenarios</li>
        <li><strong>Performance Tests:</strong> Monitor bundle size and runtime performance</li>
      </ul>

      <h2>Production Deployment Strategies</h2>
      <p>Deploying scalable React applications requires careful consideration of build optimization and deployment strategies.</p>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1600&h=900&fit=crop&crop=center"
          alt="CI/CD pipeline and deployment automation"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Strong build pipelines + caching keep releases fast and stable.</figcaption>
      </figure>

      <h3>Build Optimization</h3>
      <ul>
        <li>Enable tree shaking to eliminate dead code</li>
        <li>Use production builds with minification</li>
        <li>Implement proper caching strategies</li>
        <li>Optimize images and assets</li>
        <li>Configure CDN for static asset delivery</li>
      </ul>

      <h2>Monitoring and Analytics</h2>
      <p>Continuous monitoring helps identify performance bottlenecks and user experience issues:</p>
      <ul>
        <li>Implement error boundary components for graceful error handling</li>
        <li>Use performance monitoring tools like Web Vitals</li>
        <li>Set up real user monitoring (RUM) for production insights</li>
        <li>Track key metrics like Time to Interactive and First Contentful Paint</li>
      </ul>

      <p>By following these practices and continuously iterating on your architecture, you can build React applications that not only perform well today but can adapt and scale as your user base grows and requirements evolve.</p>
    `,
  },
};

type BlogPostRecord = typeof blogData;
type BlogPost = BlogPostRecord[keyof BlogPostRecord];

type TocItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

const stripTags = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const slugify = (input: string) =>
  input
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const buildContentAndToc = (rawHtml: string) => {
  const used = new Map<string, number>();
  const toc: TocItem[] = [];

  const html = rawHtml.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, levelRaw, attrs, inner) => {
    const level = Number(levelRaw) as 2 | 3;
    const title = stripTags(String(inner));
    if (!title) return match;

    let baseId = slugify(title);
    if (!baseId) baseId = `section-${toc.length + 1}`;
    const count = (used.get(baseId) ?? 0) + 1;
    used.set(baseId, count);
    const id = count === 1 ? baseId : `${baseId}-${count}`;
    toc.push({ id, title, level });

    const attrsStr = String(attrs);
    const hasId = /\sid=\s*['"]/i.test(attrsStr);
    if (hasId) return match;
    return `<h${level}${attrsStr} id="${id}">${inner}</h${level}>`;
  });

  return { html, toc };
};

const formatDateLong = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatTimer = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const getStorageKey = (postId: number, key: string) => `blog:${postId}:${key}`;

export default function BlogPost() {
  const params = useParams();
  const blogId = parseInt(params.id as string);
  const post = blogData[blogId as keyof typeof blogData];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [readingSeconds, setReadingSeconds] = useState(0);
  const [activeHeading, setActiveHeading] = useState<string | null>(null);
  const [showToc, setShowToc] = useState(true);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(post?.likes ?? 0);

  // Ref for scroll container (center column)
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const processed = useMemo(() => {
    if (!post) return { html: "", toc: [] as TocItem[] };
    return buildContentAndToc(post.content);
  }, [post]);

  const related = useMemo(() => {
    if (!post) return [] as BlogPost[];
    const all = Object.values(blogData) as BlogPost[];
    return all.filter((p) => p.id !== post.id).slice(0, 3);
  }, [post]);

  const hasToc = processed.toc.length > 0;

  const jsonLd = useMemo(() => {
    if (!post) return null;

    const url = typeof window !== "undefined" ? window.location.href : "";

    return {
      blogPosting: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        author: {
          "@type": "Person",
          name: post.author,
        },
        datePublished: post.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      },
      breadcrumbs: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Blog",
            item: typeof window !== "undefined" ? `${window.location.origin}/blog` : "/blog",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: post.title,
            item: url,
          },
        ],
      },
    };
  }, [post]);

  useEffect(() => {
    if (!post) return;

    try {
      const storedLiked = window.localStorage.getItem(getStorageKey(post.id, "liked"));
      const storedBookmarked = window.localStorage.getItem(getStorageKey(post.id, "bookmarked"));
      const storedLikes = window.localStorage.getItem(getStorageKey(post.id, "likes"));

      if (storedLiked !== null) setLiked(storedLiked === "true");
      if (storedBookmarked !== null) setBookmarked(storedBookmarked === "true");
      if (storedLikes !== null && !Number.isNaN(Number(storedLikes))) setLikes(Number(storedLikes));
    } catch {
      // ignore
    }
  }, [post]);

  useEffect(() => {
    const startTime = Date.now();
    const interval = window.setInterval(() => {
      setReadingSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
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
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (processed.toc.length === 0 || !container) return;

    const elements = processed.toc
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
  }, [processed.toc]);

  const scrollToId = (id: string) => {
    const container = scrollContainerRef.current;
    const el = document.getElementById(id);
    if (!el || !container) return;
    const offset = 80;
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const scrollTop = container.scrollTop + (elRect.top - containerRect.top) - offset;
    container.scrollTo({ top: scrollTop, behavior: "smooth" });
  };

  const handleCopy = async () => {
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
  };

  const handleLike = () => {
    if (!post) return;
    const nextLiked = !liked;
    const nextLikes = nextLiked ? likes + 1 : Math.max(0, likes - 1);
    setLiked(nextLiked);
    setLikes(nextLikes);
    try {
      window.localStorage.setItem(getStorageKey(post.id, "liked"), String(nextLiked));
      window.localStorage.setItem(getStorageKey(post.id, "likes"), String(nextLikes));
    } catch {
      // ignore
    }
  };

  const handleBookmark = () => {
    if (!post) return;
    const next = !bookmarked;
    setBookmarked(next);
    try {
      window.localStorage.setItem(getStorageKey(post.id, "bookmarked"), String(next));
    } catch {
      // ignore
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <Button asChild variant="secondary">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {jsonLd?.blogPosting ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.blogPosting) }} />
      ) : null}
      {jsonLd?.breadcrumbs ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumbs) }} />
      ) : null}

      {/* Reading Progress Bar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 3-Column Layout Container */}
      <div className="h-full grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] xl:grid-cols-[280px_1fr_340px]">

        {/* LEFT SIDEBAR - Table of Contents (Fixed) */}
        <aside className="hidden lg:flex flex-col h-screen border-r border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
          <div className="flex-1 overflow-y-auto p-6 pt-8 custom-scrollbar">
            <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-xs uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  Contents
                </h3>
              </div>

              <nav className="space-y-1">
                {hasToc
                  ? processed.toc.map((item) => (
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
                  ))
                  : null}
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
            </div>
          </div>
        </aside>

        {/* CENTER COLUMN - Scrollable Blog Content */}
        <div
          ref={scrollContainerRef}
          className="h-screen overflow-y-auto scroll-smooth custom-scrollbar"
        >
          {/* Header Bar - Inside scrollable area */}
          <header className="border-b border-slate-800/50 backdrop-blur-xl bg-slate-900/90 sticky top-0 z-40">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  {/* Back Button */}
                  <button
                    onClick={() => window.history.back()}
                    className="p-2 hover:bg-slate-800 rounded-lg transition group"
                    type="button"
                  >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
                  </button>

                  <div className="min-w-0">
                    <div className="text-sm text-slate-400">Reading</div>
                    <div className="text-sm text-slate-200 truncate">{formatTimer(readingSeconds)}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={handleCopy} className="p-2 hover:bg-slate-800 rounded-lg transition" type="button">
                    {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                  <button onClick={handlePrint} className="p-2 hover:bg-slate-800 rounded-lg transition" type="button">
                    <Printer className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
            {/* Mobile TOC Toggle */}
            {hasToc ? (
              <div className="lg:hidden bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-xl p-4 mb-6">
                <button
                  onClick={() => setShowToc(!showToc)}
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
                    {processed.toc.map((item) => (
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
              </div>
            ) : null}

            {/* Mobile Author & Quick Actions */}
            <div className="lg:hidden bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{post.author}</div>
                  <div className="text-xs text-slate-400">{formatDateLong(post.date)} · {post.readTime}</div>
                </div>
              </div>
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
                  onClick={handleCopy}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-white transition border border-slate-700/50"
                  type="button"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Article */}
            <article className="bg-[#0B1526]/80 backdrop-blur-md border border-slate-800/50 rounded-2xl overflow-hidden shadow-2xl min-w-0 ring-1 ring-white/5">
              {/* Hero Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526] via-[#0B1526]/40 to-transparent" />

                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-full text-xs font-semibold text-blue-300 flex items-center gap-2">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="px-6 py-8 sm:px-10 sm:py-10">
                {/* Article Header */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-[1.15] text-white tracking-tight">
                  {post.title}
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed font-light">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-slate-800/50">
                  {post.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-[11px] sm:text-xs font-medium text-slate-300 hover:text-white hover:border-slate-600 transition-colors cursor-default">
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Blog Content */}
                <div
                  className="prose prose-invert prose-lg max-w-none 
                    prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-slate-800 prose-h2:uppercase prose-h2:tracking-wider prose-h2:text-slate-100
                    prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-blue-300 prose-h3:font-semibold
                    prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-slate-200 prose-h4:font-medium
                    prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-blue-400 prose-a:no-underline prose-a:border-b prose-a:border-blue-500/30 hover:prose-a:border-blue-400 prose-a:transition-colors
                    prose-strong:text-white prose-strong:font-semibold
                    prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                    prose-li:text-slate-300 prose-li:mb-2 prose-li:pl-1
                    prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-500/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:text-slate-300 prose-blockquote:italic prose-blockquote:my-8
                    prose-code:bg-slate-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-blue-300 prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-xl prose-pre:p-4 prose-pre:my-8
                    prose-img:rounded-2xl prose-img:shadow-2xl prose-img:border prose-img:border-slate-800 prose-img:my-12
                    prose-table:w-full prose-table:my-8 prose-table:border-collapse prose-table:text-sm prose-table:block prose-table:overflow-x-auto
                    prose-thead:bg-slate-900/50 prose-thead:border-b prose-thead:border-slate-700
                    prose-th:text-blue-400 prose-th:font-semibold prose-th:p-4 prose-th:text-left prose-th:uppercase prose-th:tracking-wider prose-th:text-xs
                    prose-td:p-4 prose-td:border-b prose-td:border-slate-800 prose-td:text-slate-300
                    prose-tr:hover:bg-slate-800/30 prose-tr:transition-colors
                  "
                  dangerouslySetInnerHTML={{ __html: processed.html }}
                />
              </div>
            </article>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/blog/${p.id}`}
                    className="group bg-slate-900/40 border border-slate-800/60 rounded-xl overflow-hidden hover:border-blue-500/50 transition hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526] to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-3 text-slate-200 group-hover:text-blue-400 transition line-clamp-2">{p.title}</h3>
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {p.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {p.views.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Bottom Spacer */}
            <div className="h-16" />
          </div>
        </div>

        {/* RIGHT SIDEBAR - Author & Quick Actions (Fixed) */}
        <aside className="hidden lg:flex flex-col h-screen border-l border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
          <div className="flex-1 overflow-y-auto p-6 pt-8 custom-scrollbar">
            <div className="space-y-6">
              {/* Author & Meta */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800/60">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{post.author}</div>
                    <div className="text-xs text-slate-400">Author</div>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-400 mb-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 opacity-70" /> Published</span>
                    <span className="text-slate-300">{formatDateLong(post.date)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 opacity-70" /> Read time</span>
                    <span className="text-slate-300">{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2"><Eye className="w-3.5 h-3.5 opacity-70" /> Views</span>
                    <span className="text-slate-300">{post.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
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
                    onClick={handleCopy}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-white transition group border border-transparent"
                    type="button"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 transition-transform group-hover:scale-110" />}
                    <span className="text-sm font-medium">{copied ? "Copied!" : "Copy Link"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
