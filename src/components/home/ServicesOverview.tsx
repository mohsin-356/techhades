"use client";

import ServiceCard from "@/components/shared/ServiceCard";
import { motion } from "framer-motion";
import { Code2, Smartphone, Bot, TrendingUp, Video, BarChart3, Palette, ShoppingCart, Zap, Globe, Monitor, Cpu, Brain, Rocket, Play, PieChart, Brush, Store } from "lucide-react";

// Advanced Custom Icon Components with Animations
const WebDevIcon = () => (
  <div className="relative group">
    <Monitor className="w-6 h-6 text-blue-100" />
    <motion.div
      className="absolute -bottom-1 -right-1"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <Code2 className="w-3 h-3 text-blue-300" />
    </motion.div>
    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

const MobileIcon = () => (
  <div className="relative group">
    <Smartphone className="w-6 h-6 text-green-100" />
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="w-2 h-2 bg-green-400 rounded-full" />
    </motion.div>
    <div className="absolute -inset-1 bg-green-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

const AIIcon = () => (
  <div className="relative group">
    <Brain className="w-6 h-6 text-purple-100" />
    <motion.div
      className="absolute -top-1 -right-1"
      animate={{ y: [-2, 2, -2] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <Cpu className="w-3 h-3 text-purple-300" />
    </motion.div>
    <motion.div
      className="absolute inset-0 bg-purple-400/20 rounded-full blur-md"
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </div>
);

const MarketingIcon = () => (
  <div className="relative group">
    <TrendingUp className="w-6 h-6 text-pink-100" />
    <motion.div
      className="absolute -bottom-1 -right-1"
      animate={{ x: [-1, 1, -1], y: [-1, 1, -1] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    >
      <Rocket className="w-3 h-3 text-pink-300" />
    </motion.div>
    <div className="absolute -inset-1 bg-pink-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

const VideoIcon = () => (
  <div className="relative group">
    <Play className="w-6 h-6 text-orange-100" />
    <motion.div
      className="absolute -top-1 -right-1"
      animate={{ rotate: [0, 15, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <Video className="w-3 h-3 text-orange-300" />
    </motion.div>
    <motion.div
      className="absolute inset-0 bg-orange-400/20 rounded-full blur-md"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </div>
);

const AnalyticsIcon = () => (
  <div className="relative group">
    <PieChart className="w-6 h-6 text-cyan-100" />
    <motion.div
      className="absolute -bottom-1 -right-1"
      animate={{ rotate: [0, 180, 360] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    >
      <BarChart3 className="w-3 h-3 text-cyan-300" />
    </motion.div>
    <div className="absolute -inset-1 bg-cyan-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

const DesignIcon = () => (
  <div className="relative">
    <Brush className="w-5 h-5" />
    <Palette className="w-3 h-3 absolute -top-1 -right-1 text-teal-300" />
  </div>
);

const EcommerceIcon = () => (
  <div className="relative">
    <Store className="w-5 h-5" />
    <ShoppingCart className="w-3 h-3 absolute -bottom-1 -right-1 text-yellow-300" />
  </div>
);

const OptimizationIcon = () => (
  <div className="relative">
    <Zap className="w-5 h-5" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-1 h-1 bg-indigo-400 rounded-full animate-ping" />
    </div>
  </div>
);

const services = [
  { 
    title: "Web Development", 
    desc: "Full-stack MERN, Next.js, PERN, LAMP, Django, ASP.NET, Spring Boot", 
    icon: <WebDevIcon />,
    color: "from-blue-500 to-indigo-600",
    tags: ["React", "Next.js", "Node.js", "Laravel"],
    stats: "50+ Projects"
  },
  { 
    title: "Mobile Apps", 
    desc: "Cross-platform apps with React Native & Flutter", 
    icon: <MobileIcon />,
    color: "from-green-500 to-emerald-600",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    stats: "30+ Apps"
  },
  { 
    title: "AI & Automation", 
    desc: "Agents, LangChain chatbots, n8n automations, scraping", 
    icon: <AIIcon />,
    color: "from-purple-500 to-violet-600",
    tags: ["TensorFlow", "LangChain", "OpenAI", "Automation"],
    stats: "25+ AI Solutions"
  },
  { 
    title: "Social Media", 
    desc: "FB/IG/TikTok growth with content & analytics", 
    icon: <MarketingIcon />,
    color: "from-pink-500 to-rose-600",
    tags: ["SEO", "Social Media", "Analytics", "Growth"],
    stats: "100+ Campaigns"
  },
  { 
    title: "2D/3D Animation", 
    desc: "Explainers, motion, and 3D visualizations", 
    icon: <VideoIcon />,
    color: "from-orange-500 to-red-600",
    tags: ["After Effects", "Blender", "Motion", "3D"],
    stats: "200+ Videos"
  },
  { 
    title: "Smart Dashboards", 
    desc: "MERN dashboards with analytics & RBAC", 
    icon: <AnalyticsIcon />,
    color: "from-cyan-500 to-blue-600",
    tags: ["Power BI", "D3.js", "Analytics", "Reporting"],
    stats: "40+ Dashboards"
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

