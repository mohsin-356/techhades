"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Eye, Heart, Share2, BookOpen, Tag, MessageCircle } from "lucide-react";
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
    `
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
    `
  }
};

export default function BlogPost() {
  const params = useParams();
  const blogId = parseInt(params.id as string);
  const post = blogData[blogId as keyof typeof blogData];

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8"
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <Badge 
              variant="glow" 
              className="absolute top-6 left-6 bg-indigo-500/90 text-white text-sm px-4 py-2"
            >
              {post.category}
            </Badge>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <Button asChild variant="ghost" className="text-indigo-400 hover:text-indigo-300">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-foreground/60 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium text-foreground/80">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{post.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>{post.likes} likes</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge 
                    key={tag}
                    variant="outline" 
                    className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 transition-colors"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Social Actions */}
              <div className="flex items-center gap-4 pt-6 border-t border-foreground/10">
                <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-red-400">
                  <Heart className="w-4 h-4 mr-2" />
                  Like ({post.likes})
                </Button>
                <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-indigo-400">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-green-400">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Comment
                </Button>
              </div>
            </header>

            {/* Article Content */}
            <Card className="border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-violet-500/3 to-purple-500/5 shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div 
                  className="prose prose-lg prose-invert max-w-none
                    prose-headings:text-foreground prose-headings:font-display
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-indigo-300
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-violet-300
                    prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-6
                    prose-ul:text-foreground/80 prose-li:mb-2
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-code:text-indigo-300 prose-code:bg-indigo-500/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
                    prose-pre:bg-slate-900/50 prose-pre:border prose-pre:border-indigo-500/20 prose-pre:rounded-lg"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </CardContent>
            </Card>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-foreground/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{post.author}</p>
                    <p className="text-sm text-foreground/60">Technical Writer & Developer</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-indigo-400">
                    <BookOpen className="w-4 h-4 mr-2" />
                    More Posts
                  </Button>
                </div>
              </div>
            </footer>
          </motion.article>
        </div>
      </section>
    </div>
  );
}
