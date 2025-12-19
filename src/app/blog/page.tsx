"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Eye, Heart } from "lucide-react";
import Link from "next/link";

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
      "How Do You Choose The Right Generative AI Development Partner?",
    excerpt:
      "Don’t let your AI project fail. Learn the 5 crucial steps to vet and select the right Generative AI development partner.",
    author: "Mohsin Ali",
    date: "2024-10-28",
    readTime: "7 min read",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop&crop=center",
    tags: ["AI", "Partnership", "Strategy"],
    views: 3247,
    likes: 156,
  },
  {
    id: 2,
    title:
      "Building Your Own AI Like ChatGPT: What You Need To Know",
    excerpt:
      "Should you build a custom ChatGPT alternative or use an API? We compare cost, control and data trade‑offs.",
    author: "Mohsin Ali",
    date: "2024-10-23",
    readTime: "9 min read",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=900&h=600&fit=crop&crop=center",
    tags: ["GenAI", "ChatGPT", "Build vs Buy"],
    views: 1890,
    likes: 98,
  },
  {
    id: 3,
    title:
      "Build vs. Buy: What’s The Smarter Move For Generative AI?",
    excerpt:
      "Break down the trade‑offs on cost, control, data and time when choosing between custom AI vs. APIs.",
    author: "Mohsin Ali",
    date: "2024-10-21",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&crop=center",
    tags: ["GenAI", "Strategy", "Decision"],
    views: 1720,
    likes: 75,
  },
  {
    id: 4,
    title:
      "Can Generative AI Really Solve Business Problems Or Is It Just Hype?",
    excerpt:
      "A practical guide to separating hype from impact and creating measurable business value.",
    author: "Mohsin Ali",
    date: "2024-10-14",
    readTime: "10 min read",
    category: "General",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&h=600&fit=crop&crop=center",
    tags: ["Business", "AI", "Strategy"],
    views: 2035,
    likes: 121,
  },
  {
    id: 5,
    title: "How Can AI Chatbots Help Reduce Healthcare Administration Costs?",
    excerpt:
      "Six strategies to automate patient appointments and reduce admin overhead with chatbots.",
    author: "Mohsin Ali",
    date: "2024-10-13",
    readTime: "6 min read",
    category: "Software Development",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&h=600&fit=crop&crop=center",
    tags: ["Healthcare", "Chatbots"],
    views: 1420,
    likes: 63,
  },
  {
    id: 6,
    title: "Design Systems For Scale: From Atoms To Templates",
    excerpt:
      "Use Atomic Design to build consistent, scalable UI across large apps and websites.",
    author: "Team AlienMatrix",
    date: "2024-09-30",
    readTime: "11 min read",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=600&fit=crop&crop=center",
    tags: ["Design", "System", "Atomic"],
    views: 980,
    likes: 54,
  },
  {
    id: 7,
    title: "Modern Web Performance: 7 Quick Wins",
    excerpt:
      "From code‑splitting to image pipelines—practical tips to speed up your site today.",
    author: "Team AlienMatrix",
    date: "2024-09-22",
    readTime: "5 min read",
    category: "Website Development",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=900&h=600&fit=crop&crop=center",
    tags: ["Web", "Performance"],
    views: 1210,
    likes: 44,
  },
  {
    id: 8,
    title: "Choosing The Right Mobile Stack In 2025",
    excerpt:
      "React Native, Flutter or Kotlin/Swift? How to decide for your next app.",
    author: "Team AlienMatrix",
    date: "2024-09-12",
    readTime: "7 min read",
    category: "App Development",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=600&fit=crop&crop=center",
    tags: ["Mobile", "React Native", "Flutter"],
    views: 845,
    likes: 31,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const featured = useMemo(() => blogPosts[0], []);
  const sidePosts = useMemo(() => blogPosts.slice(1, 4), []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Featured: AlienMatrix Latest updates and news */}
      <section className="relative pt-24 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-display text-foreground mb-8 text-balance"
          >
            AlienMatrix <span className="heading-accent">Latest updates and news</span>
          </motion.h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Big feature */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <Card className="group relative overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-violet-500/3 to-purple-500/5 hover:border-violet-500/40 transition-all duration-500 h-full shadow-lg">
                <div className="relative h-72 md:h-[28rem] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-indigo-500/90 text-white">
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
                      <span>{new Date(featured.date).toLocaleDateString()}</span>
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
                  <Button asChild variant="ghost" className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10">
                    <Link href={`/blog/${featured.id}`}>
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right: two/three items */}
            <div className="flex flex-col gap-6">
              {sidePosts.map((post, i) => (
                <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Card className="group overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-violet-500/3 to-purple-500/5 hover:border-violet-500/40 transition-all duration-500 shadow-lg">
                    <div className="relative h-40 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <Badge className="absolute top-3 left-3 bg-indigo-500/90 text-white text-xs">{post.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-foreground/70 line-clamp-2 mb-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-foreground/60">{new Date(post.date).toLocaleDateString()}</span>
                        <Button asChild size="sm" variant="ghost" className="text-indigo-400 hover:text-indigo-300">
                          <Link href={`/blog/${post.id}`}>Read <ArrowRight className="w-3 h-3 ml-1" /></Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AlienMatrix Blog & Articals */}
      <section className="pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl font-display mb-6"
          >
            AlienMatrix Blog & Articals
          </motion.h2>

          {/* Category filter */}
          <div className="relative mb-8">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap border transition-all ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent"
                      : "border-foreground/15 text-foreground/80 hover:bg-foreground/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid 3 in one line */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, index) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                <Card className="group relative overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-violet-500/3 to-purple-500/5 hover:border-violet-500/40 transition-all duration-500 h-full">
                  <div className="relative h-44 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-indigo-500/90 text-white text-xs">{post.category}</Badge>
                  </div>
                  <CardContent className="p-5 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-foreground/60 mb-3">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(post.date).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-foreground/70 line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between text-xs text-foreground/60">
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{post.views.toLocaleString()}</span>
                      <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{post.likes}</span>
                      <Button asChild size="sm" variant="ghost" className="text-indigo-400 hover:text-indigo-300">
                        <Link href={`/blog/${post.id}`}>Read More <ArrowRight className="w-3 h-3 ml-1" /></Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
