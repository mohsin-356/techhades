"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ServiceDetailCard from "@/components/home/ServiceDetailCard";
import { Button } from "@/components/ui/button";

// Service category tabs
const categoryTabs = [
  { id: "web", label: "Web Development", color: "from-[#6467FF] to-[#43B2F9]" },
  { id: "mobile", label: "App Development", color: "from-[#43B2F9] to-[#6467FF]" },
  { id: "software", label: "Software Development", color: "from-[#6467FF] to-[#43B2F9]" },
  { id: "design", label: "UI/UX Designing", color: "from-[#43B2F9] to-[#6467FF]" },
  { id: "ai", label: "AI & Automation", color: "from-[#6467FF] to-[#43B2F9]" },
  { id: "social", label: "Ad & Social Media", color: "from-[#43B2F9] to-[#6467FF]" }
];


export default function ServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState("web");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className="relative py-14 sm:py-24">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 -top-28 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#6467FF]/10 to-[#43B2F9]/10 blur-3xl opacity-60" />
        <div className="absolute right-[-10%] top-1/3 h-[360px] w-[360px] rounded-full bg-[#43B2F9]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[#43B2F9]/50 to-transparent mb-8" />
          <h2 className="text-3xl sm:text-5xl font-display text-foreground mb-4">
            Our <span className="bg-gradient-to-r from-[#6467FF] via-[#43B2F9] to-[#6467FF] bg-clip-text text-transparent">Core Services</span>
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

        {/* Service Detail Card (always visible) */}
        <div className="mb-8">
          <ServiceDetailCard category={selectedCategory} />
        </div>

        {/* Service Stats */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 mt-10 sm:mt-16 text-xs sm:text-sm text-foreground/60 text-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#6467FF]"></div>
            <span>500+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#43B2F9]"></div>
            <span>98% Client Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#6467FF]"></div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

