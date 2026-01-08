"use client";

import { useEffect, useMemo, useState } from "react";
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

      <h2>Component Architecture Fundamentals</h2>
      <p>The foundation of a scalable React application lies in its component architecture. Following proven design patterns ensures maintainability and reusability.</p>

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

      <h2>Performance Optimization Techniques</h2>
      <p>Performance optimization should be built into your development process from the beginning.</p>

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

      <h3>Testing Pyramid</h3>
      <ul>
        <li><strong>Unit Tests:</strong> Test individual components and functions in isolation</li>
        <li><strong>Integration Tests:</strong> Verify component interactions and data flow</li>
        <li><strong>End-to-End Tests:</strong> Validate complete user workflows and scenarios</li>
        <li><strong>Performance Tests:</strong> Monitor bundle size and runtime performance</li>
      </ul>

      <h2>Production Deployment Strategies</h2>
      <p>Deploying scalable React applications requires careful consideration of build optimization and deployment strategies.</p>

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
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const next = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(next);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (processed.toc.length === 0) return;

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
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0.1, 0.5, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [processed.toc]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 110;
    const rect = el.getBoundingClientRect();
    const top = rect.top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {jsonLd?.blogPosting ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.blogPosting) }} />
      ) : null}
      {jsonLd?.breadcrumbs ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumbs) }} />
      ) : null}

      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <header className="border-b border-slate-800/50 backdrop-blur-xl bg-slate-900/90 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
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

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Contents
                  </h3>
                  <button onClick={() => setShowToc(!showToc)} className="lg:hidden p-1 hover:bg-slate-700 rounded" type="button">
                    <ChevronDown className={`w-4 h-4 transition-transform ${showToc ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <nav className={`space-y-2 ${showToc ? "block" : "hidden lg:block"}`}>
                  {hasToc
                    ? processed.toc.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToId(item.id)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all group ${
                            activeHeading === item.id
                              ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/50 shadow-lg shadow-blue-500/10"
                              : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                          }`}
                          type="button"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className={`text-sm font-medium truncate ${item.level === 3 ? "pl-4" : ""}`}>{item.title}</span>
                          </div>
                          <span className="text-xs text-slate-500">{item.level === 2 ? "H2" : "H3"}</span>
                        </button>
                      ))
                    : null}
                </nav>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Progress</span>
                    <span>{Math.round(scrollProgress)}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
                      style={{ width: `${scrollProgress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-xl">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Quick Actions
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={handleLike}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all ${
                      liked
                        ? "bg-red-500/20 text-red-400 border border-red-500/50"
                        : "hover:bg-slate-700/50 text-slate-400 border border-transparent"
                    }`}
                    type="button"
                  >
                    <div className="flex items-center gap-3">
                      <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
                      <span className="text-sm">Like Article</span>
                    </div>
                    <span className="text-xs">{likes}</span>
                  </button>

                  <button
                    onClick={handleBookmark}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                      bookmarked
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                        : "hover:bg-slate-700/50 text-slate-400 border border-transparent"
                    }`}
                    type="button"
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`} />
                    <span className="text-sm">Save for Later</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-slate-700/50 text-slate-400 transition border border-transparent hover:border-slate-600"
                    type="button"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    <span className="text-sm">{copied ? "Link Copied!" : "Copy Link"}</span>
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-9 min-w-0">
            {hasToc ? (
              <div className="lg:hidden bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 mb-6">
                <button
                  onClick={() => setShowToc(!showToc)}
                  className="w-full flex items-center justify-between gap-3"
                  type="button"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                    <BookOpen className="w-4 h-4" />
                    Contents
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showToc ? "rotate-180" : ""}`} />
                </button>
                {showToc ? (
                  <div className="mt-4 space-y-2">
                    {processed.toc.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToId(item.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all ${
                          activeHeading === item.id ? "bg-blue-500/10 text-white" : "text-slate-300 hover:bg-slate-700/40"
                        }`}
                        type="button"
                      >
                        <span className={`text-sm truncate ${item.level === 3 ? "pl-4" : ""}`}>{item.title}</span>
                        <span className="text-xs text-slate-500">{item.level === 2 ? "H2" : "H3"}</span>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}

            <article className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-3xl overflow-hidden mb-8 shadow-2xl min-w-0">
              {/* Hero Image */}
              <div className="relative h-96 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-blue-500/90 backdrop-blur rounded-full text-xs font-semibold flex items-center gap-2">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  {post.tags.slice(0, 2).map((t) => (
                    <span key={t} className="px-4 py-1.5 bg-purple-500/90 backdrop-blur rounded-full text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur rounded-xl px-4 py-2 border border-slate-700">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span>{likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-green-400" />
                      <span>24</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                {/* Article Header */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {post.title}
                </h1>

                <p className="text-xl text-slate-300 mb-8 leading-relaxed">{post.excerpt}</p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-8 pb-8 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDateLong(post.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-700/40 border border-slate-600 rounded-full text-xs text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Social Actions */}
                <div className="flex items-center justify-between mb-12 p-4 bg-slate-700/30 rounded-xl border border-slate-600">
                  <span className="text-sm text-slate-400 font-medium">Share this article:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleLike}
                      className={`p-2 rounded-lg transition ${
                        liked ? "text-red-400 bg-red-500/10" : "hover:bg-slate-700/50 text-slate-300"
                      }`}
                      type="button"
                    >
                      <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
                    </button>
                    <button
                      onClick={handleCopy}
                      className="p-2 hover:bg-purple-500/20 hover:text-purple-400 rounded-lg transition"
                      type="button"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                    </button>
                    <button onClick={handlePrint} className="p-2 hover:bg-slate-700/50 rounded-lg transition" type="button">
                      <Printer className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:scroll-mt-28 break-words">
                  <div
                    className="prose prose-invert max-w-none
                      prose-headings:text-white prose-headings:font-bold
                      prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                      prose-p:text-slate-300 prose-p:leading-relaxed
                      prose-ul:text-slate-300 prose-li:mb-2
                      prose-strong:text-white
                      prose-pre:overflow-x-auto prose-pre:max-w-full
                      prose-code:break-words"
                    dangerouslySetInnerHTML={{ __html: processed.html }}
                  />
                </div>

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-slate-700 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">{post.author}</div>
                      <div className="text-sm text-slate-400">Technical Writer & Developer</div>
                    </div>
                  </div>
                  <Link href="/blog" className="text-sm text-blue-400 hover:text-blue-300 transition">
                    More Posts
                  </Link>
                </div>
              </div>
            </article>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/blog/${p.id}`}
                    className="group bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition hover:scale-105"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-3 group-hover:text-blue-400 transition line-clamp-2">{p.title}</h3>
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

            <section className="bg-slate-800/40 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-blue-400" />
                Comments <span className="text-slate-400 text-lg">(24)</span>
              </h2>

              <div className="flex gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <textarea
                    placeholder="Share your thoughts on this article..."
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:border-blue-500 transition resize-none text-slate-200 placeholder-slate-500"
                    rows={4}
                  />
                  <div className="flex justify-end mt-3">
                    <button
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition"
                      type="button"
                    >
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-4 pb-6 border-b border-slate-700 last:border-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Alex Johnson</h4>
                        <span className="text-xs text-slate-400">2 hours ago</span>
                      </div>
                      <p className="text-slate-300 mb-3 leading-relaxed">
                        Great insights! The section about scalability was particularly helpful. Would love more content on security implementations.
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <button className="flex items-center gap-1 text-slate-400 hover:text-blue-400 transition" type="button">
                          <Heart className="w-4 h-4" />
                          <span>12</span>
                        </button>
                        <button className="text-slate-400 hover:text-blue-400 transition" type="button">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
