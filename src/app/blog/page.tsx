import Link from "next/link";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Eye, Heart, Newspaper } from "lucide-react";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
};

const categories = [
  "All",
  "Website Design",
  "Website Development",
  "Software Development",
  "AlienMatrix Learning",
  "App Development",
  "UI/UX Design",
  "Artificial Intelligence",
  "General",
] as const;

const blogPosts = [
  {
    id: 1,
    title:
      "The Future of AI in Web Development: Transforming How We Build Digital Experiences",
    excerpt:
      "Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user interfaces that adapt in real-time.",
    author: "Alex Rodriguez",
    date: "2024-10-20",
    readTime: "8 min read",
    category: "AI & Technology",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&crop=center",
    tags: ["AI", "Web Development", "Machine Learning", "Future Tech"],
    views: 1247,
    likes: 89,
  },
  {
    id: 2,
    title:
      "Building Scalable React Applications: Best Practices and Performance Optimization",
    excerpt:
      "Learn essential techniques for building React applications that can handle millions of users while maintaining optimal performance and developer experience.",
    author: "Sarah Chen",
    date: "2024-10-18",
    readTime: "12 min read",
    category: "React Development",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop&crop=center",
    tags: ["React", "Performance", "Scalability", "Best Practices"],
    views: 2156,
    likes: 134,
  },
];

export const revalidate = 86400;

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { category?: string };
}): Promise<Metadata> {
  const rawCategory = searchParams?.category;
  const activeCategory = (categories as readonly string[]).includes(String(rawCategory))
    ? (rawCategory as (typeof categories)[number])
    : "All";

  const envBase = process.env.NEXT_PUBLIC_SITE_URL;
  let baseUrl = new URL("https://example.com");
  if (envBase) {
    baseUrl = new URL(envBase);
  } else {
    const h = await headers();
    const host = h.get("x-forwarded-host") ?? h.get("host");
    const proto = h.get("x-forwarded-proto") ?? "https";
    if (host) baseUrl = new URL(`${proto}://${host}`);
  }

  const title =
    activeCategory === "All"
      ? "Blog"
      : `Blog – ${activeCategory}`;

  const canonical = new URL("/blog", baseUrl);
  if (activeCategory !== "All") canonical.searchParams.set("category", activeCategory);

  return {
    title,
    description: "Articles on web development, UI/UX, AI automation, and product engineering.",
    keywords: [
      "Blog",
      "AlienMatrix",
      "Web Development",
      "UI/UX",
      "AI",
      "Automation",
      activeCategory,
    ],
    metadataBase: baseUrl,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description: "Articles on web development, UI/UX, AI automation, and product engineering.",
      url: canonical,
      type: "website",
      images: ["/components/blog card.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "Articles on web development, UI/UX, AI automation, and product engineering.",
      images: ["/components/blog card.png"],
    },
  };
}

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const rawCategory = searchParams?.category;
  const activeCategory = (categories as readonly string[]).includes(String(rawCategory))
    ? (rawCategory as (typeof categories)[number])
    : "All";

  const featured = blogPosts[0];
  const sidePosts = blogPosts.slice(1, 4);

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#050714] via-[#0B1526] to-[#050714]">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(67,178,249,0.15),transparent_60%)]" />
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="glow" className="mb-6">
              <Newspaper className="w-3 h-3 mr-1" />
              Insights & Updates
            </Badge>
            <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              ALIENMATRIX <span className="heading-accent">BLOG & ARTICLES</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Stay updated with the latest trends in AI, Web Development, and Digital Innovation.
            </p>
          </div>
        </section>
      </div>

      <section className="relative pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Big feature */}
            <div className="lg:col-span-2">
              <Card className="group relative overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-500/5 via-cyan-500/3 to-blue-500/5 hover:border-cyan-500/40 transition-all duration-500 h-full shadow-lg">
                <div className="relative h-60 sm:h-72 md:h-[28rem] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-blue-500/90 text-white">
                    {featured.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-foreground/60 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{featured.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(featured.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{featured.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-foreground/70 mb-6 line-clamp-3">{featured.excerpt}</p>
                  <Button asChild variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10">
                    <Link href={`/blog/${featured.id}`}>
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right: two/three items */}
            <div className="flex flex-col gap-6">
              {sidePosts.map((post) => (
                <div key={post.id}>
                  <Card className="group overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-500/5 via-cyan-500/3 to-blue-500/5 hover:border-cyan-500/40 transition-all duration-500 shadow-lg">
                    <div className="relative h-36 sm:h-40 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <Badge className="absolute top-3 left-3 bg-blue-500/90 text-white text-xs">{post.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-foreground/70 line-clamp-2 mb-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-foreground/60">{formatDate(post.date)}</span>
                        <Button asChild size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300">
                          <Link href={`/blog/${post.id}`}>Read <ArrowRight className="w-3 h-3 ml-1" /></Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AlienMatrix Blog & Articals */}
      <section className="pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-display mb-6">
            AlienMatrix Blog & Articals
          </h2>

          {/* Category filter */}
          <div className="relative mb-8">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              {categories.map((cat) => {
                const href = cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`;
                const isActive = activeCategory === cat;
                return (
                  <Link
                    key={cat}
                    href={href}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap border transition-all ${isActive
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent"
                      : "border-foreground/15 text-foreground/80 hover:bg-foreground/5"
                      }`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Grid 3 in one line */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <div key={post.id}>
                <Card className="group relative overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-500/5 via-cyan-500/3 to-blue-500/5 hover:border-cyan-500/40 transition-all duration-500 h-full">
                  <div className="relative h-40 sm:h-44 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-blue-500/90 text-white text-xs">{post.category}</Badge>
                  </div>
                  <CardContent className="p-5 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-foreground/60 mb-3">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-foreground/70 line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between text-xs text-foreground/60">
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{post.views.toLocaleString()}</span>
                      <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{post.likes}</span>
                      <Button asChild size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300">
                        <Link href={`/blog/${post.id}`}>Read More <ArrowRight className="w-3 h-3 ml-1" /></Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
