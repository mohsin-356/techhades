"use client";

import { motion } from "framer-motion";
import { 
  Monitor, 
  Smartphone, 
  Code, 
  Palette, 
  Bot, 
  TrendingUp
} from "lucide-react";

const serviceCategories = [
  {
    id: "web",
    icon: Monitor,
    title: "Web Development",
    description: "Full-stack MERN, Next.js, PERN, LAMP, Django, ASP.NET, Spring Boot",
    gradient: "from-blue-600 to-indigo-600",
    darkGradient: "dark:from-blue-500 dark:to-indigo-500"
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "App Development",
    description: "Cross-platform apps with React Native & Flutter",
    gradient: "from-green-600 to-emerald-600",
    darkGradient: "dark:from-green-500 dark:to-emerald-500",
    badge: { text: "30+ Apps", color: "bg-green-500" }
  },
  {
    id: "software",
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions, desktop apps, and enterprise systems",
    gradient: "from-blue-600 to-cyan-600",
    darkGradient: "dark:from-blue-500 dark:to-cyan-500"
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Designing",
    description: "Beautiful & functional designs that convert",
    gradient: "from-pink-600 to-rose-600",
    darkGradient: "dark:from-pink-500 dark:to-rose-500"
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI & Automation",
    description: "Agents, LangChain chatbots, n8n automations, scraping",
    gradient: "from-purple-600 to-violet-600",
    darkGradient: "dark:from-purple-500 dark:to-violet-500",
    badge: { text: "New", color: "bg-purple-500" }
  },
  {
    id: "social",
    icon: TrendingUp,
    title: "Ad & Social Media",
    description: "FB/IG/TikTok growth with content & analytics",
    gradient: "from-orange-600 to-red-600",
    darkGradient: "dark:from-orange-500 dark:to-red-500"
  }
];

interface ServiceCategoriesProps {
  onCategorySelect: (category: string) => void;
}

export default function ServiceCategories({ onCategorySelect }: ServiceCategoriesProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {serviceCategories.map((category, index) => {
        const Icon = category.icon;
        
        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onCategorySelect(category.id)}
            className="relative group cursor-pointer"
          >
            <div className="relative h-full rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-gray-200 dark:border-slate-700 p-6 hover:border-purple-500/50 transition-all duration-300 overflow-hidden shadow-md">
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} ${category.darkGradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Badge */}
              {category.badge && (
                <div className={`absolute top-4 right-4 ${category.badge.color} text-white text-xs px-2 py-1 rounded-full`}>
                  {category.badge.text}
                </div>
              )}
              
              {/* Icon Container */}
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} ${category.darkGradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-full h-full text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {category.description}
              </p>
              
              {/* Hover effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
