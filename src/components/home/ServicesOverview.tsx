"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ServiceCategories from "@/components/home/ServiceCategories";
import ServiceDetailCard from "@/components/home/ServiceDetailCard";
import { Button } from "@/components/ui/button";

// Service category tabs
const categoryTabs = [
  { id: "web", label: "Web Development", color: "from-purple-600 to-indigo-600" },
  { id: "mobile", label: "App Development", color: "from-green-600 to-emerald-600" },
  { id: "software", label: "Software Development", color: "from-blue-600 to-cyan-600" },
  { id: "design", label: "UI/UX Designing", color: "from-pink-600 to-rose-600" },
  { id: "ai", label: "AI & Automation", color: "from-violet-600 to-purple-600" },
  { id: "social", label: "Ad & Social Media", color: "from-orange-600 to-red-600" }
];


export default function ServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState("web");
  const [showDetail, setShowDetail] = useState(false);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowDetail(true);
  };

  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 -top-28 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/10 blur-3xl opacity-60" />
        <div className="absolute right-[-10%] top-1/3 h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />
          <h2 className="text-3xl sm:text-5xl font-display text-foreground mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">Core Services</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to transform your business with cutting-edge technology and innovative strategies
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categoryTabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => handleCategorySelect(tab.id)}
              variant={selectedCategory === tab.id ? "primary" : "secondary"}
              size="sm"
              className="rounded-full"
            >
              {tab.label}
            </Button>
          ))}
        </motion.div>

        {/* Service Categories Grid or Detail Card */}
        {showDetail ? (
          <div className="mb-8">
            <ServiceDetailCard category={selectedCategory} />
            <div className="flex justify-center mt-6">
              <Button
                onClick={() => setShowDetail(false)}
                variant="secondary"
                size="sm"
              >
                View All Services
              </Button>
            </div>
          </div>
        ) : (
          <ServiceCategories onCategorySelect={handleCategorySelect} />
        )}

        {/* Service Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-8 mt-16 text-sm text-foreground/60"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span>500+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-violet-500"></div>
            <span>98% Client Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            <span>24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

