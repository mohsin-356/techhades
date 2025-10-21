"use client";

import ServiceCard from "@/components/shared/ServiceCard";
import { motion } from "framer-motion";
import { Code2, Smartphone, Bot, TrendingUp, Video, BarChart3, Palette, ShoppingCart, Zap, Globe } from "lucide-react";

const services = [
  { 
    title: "Full-Stack Web Development", 
    desc: "Modern web applications using React, Next.js, Node.js, Django, Laravel, and .NET with responsive design and optimal performance", 
    icon: <Code2 className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600",
    tags: ["React", "Next.js", "Node.js", "Laravel"],
    stats: "50+ Projects"
  },
  { 
    title: "Mobile App Development", 
    desc: "Cross-platform mobile applications with React Native and Flutter, delivering native performance and seamless user experiences", 
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-green-500 to-emerald-600",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    stats: "30+ Apps"
  },
  { 
    title: "AI & Machine Learning", 
    desc: "Intelligent automation solutions, custom AI agents, chatbots with LangChain, and workflow automation using cutting-edge AI technologies", 
    icon: <Bot className="w-6 h-6" />,
    color: "from-purple-500 to-violet-600",
    tags: ["TensorFlow", "LangChain", "OpenAI", "Automation"],
    stats: "25+ AI Solutions"
  },
  { 
    title: "Digital Marketing & Growth", 
    desc: "Comprehensive social media management, SEO optimization, content strategy, and growth hacking for maximum online presence", 
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-pink-500 to-rose-600",
    tags: ["SEO", "Social Media", "Analytics", "Growth"],
    stats: "100+ Campaigns"
  },
  { 
    title: "Animation & Video Production", 
    desc: "Professional 2D/3D animations, motion graphics, explainer videos, and interactive visualizations that captivate audiences", 
    icon: <Video className="w-6 h-6" />,
    color: "from-orange-500 to-red-600",
    tags: ["After Effects", "Blender", "Motion", "3D"],
    stats: "200+ Videos"
  },
  { 
    title: "Data Analytics & Dashboards", 
    desc: "Interactive business intelligence dashboards, real-time analytics, data visualization, and automated reporting systems", 
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-600",
    tags: ["Power BI", "D3.js", "Analytics", "Reporting"],
    stats: "40+ Dashboards"
  },
  { 
    title: "UI/UX Design & Branding", 
    desc: "Modern interface design, user experience optimization, brand identity creation, and design systems that convert visitors to customers", 
    icon: <Palette className="w-6 h-6" />,
    color: "from-teal-500 to-green-600",
    tags: ["Figma", "Adobe XD", "Branding", "UX"],
    stats: "80+ Designs"
  },
  { 
    title: "E-commerce Solutions", 
    desc: "Complete online store development with Shopify, WooCommerce, custom solutions, payment integration, and inventory management", 
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-600",
    tags: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
    stats: "35+ Stores"
  },
  { 
    title: "Performance Optimization", 
    desc: "Website speed optimization, SEO enhancement, database optimization, and scalability improvements for maximum efficiency", 
    icon: <Zap className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-600",
    tags: ["Speed", "SEO", "Optimization", "Scaling"],
    stats: "90% Faster"
  }
];

export default function ServicesOverview() {
  return (
    <section className="relative pt-10 sm:pt-10 pb-20 sm:pb-1 section-gradient-3 section-transition grid-pattern">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 -top-28 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-brand/20 to-brand-2/20 blur-3xl opacity-60" />
        <div className="absolute right-[-10%] top-1/3 h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mb-8" />
          <h2 className="text-3xl sm:text-5xl font-display text-foreground mb-4">
            Our <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">Core Services</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to transform your business with cutting-edge technology and innovative strategies
          </p>
          
          {/* Service Stats */}
          <div className="flex justify-center items-center gap-8 mt-8 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              <span>500+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-violet-500"></div>
              <span>98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ServiceCard 
                title={service.title} 
                desc={service.desc} 
                icon={service.icon}
                color={service.color}
                tags={service.tags}
                stats={service.stats}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

