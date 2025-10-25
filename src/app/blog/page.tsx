"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Eye, Heart } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development: Transforming How We Build Digital Experiences",
    excerpt: "Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user interfaces that adapt in real-time.",
    author: "Alex Rodriguez",
    date: "2024-10-20",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center",
    tags: ["AI", "Web Development", "Machine Learning", "Future Tech"],
    views: 1247,
    likes: 89
  },
  {
    id: 2,
    title: "Building Scalable React Applications: Best Practices and Performance Optimization",
    excerpt: "Learn essential techniques for building React applications that can handle millions of users while maintaining optimal performance and developer experience.",
    author: "Sarah Chen",
    date: "2024-10-18",
    readTime: "12 min read",
    category: "React Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop&crop=center",
    tags: ["React", "Performance", "Scalability", "Best Practices"],
    views: 2156,
    likes: 134
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-display text-foreground mb-6">
              Tech <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Insights, tutorials, and thoughts on modern web development, AI, and emerging technologies
            </p>
            
            <div className="flex justify-center items-center gap-8 mt-8 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                <span>Expert Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>Practical Tutorials</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="group relative overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-violet-500/3 to-purple-500/5 backdrop-blur-xl hover:border-violet-500/40 transition-all duration-500 h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge 
                      variant="glow" 
                      className="absolute top-4 left-4 bg-indigo-500/90 text-white"
                    >
                      {post.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-foreground/60 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title & Excerpt */}
                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-indigo-300 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <Badge 
                          key={tag}
                          variant="outline" 
                          className="text-xs border-indigo-500/30 text-indigo-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                      <div className="flex items-center gap-4 text-xs text-foreground/60">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      
                      <Button 
                        asChild 
                        variant="ghost" 
                        size="sm"
                        className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10"
                      >
                        <Link href={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-8"
          >
            <Button 
              variant="glow" 
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600"
            >
              Load More Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
