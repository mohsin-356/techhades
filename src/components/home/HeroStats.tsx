"use client";

import { motion } from "framer-motion";
import { Calendar, Users, TrendingUp, Briefcase, Globe, UsersRound, Headphones } from "lucide-react";

const stats = [
  { icon: Calendar, value: "3+", label: "Years Of Experience" },
  { icon: Users, value: "60+", label: "Clients" },
  { icon: TrendingUp, value: "97%", label: "Client Retention Rate" },
  { icon: Briefcase, value: "100+", label: "Projects Delivered" },
  { icon: Globe, value: "2+", label: "Countries" },
  { icon: UsersRound, value: "350+", label: "Employees" }
];

export default function HeroStats() {
  return (
    <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative bg-white/80 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg">
        {/* Header Section */}
        <div className="grid lg:grid-cols-[1fr,auto] gap-4 p-5 sm:p-6 border-b border-gray-200 dark:border-slate-700">
          {/* Left: Title */}
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              The Reasons Why <span className="font-semibold text-[#6467FF] dark:text-[#6467FF]">ALIENMATRIX</span> Stand Out
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              ALIENMATRIX Provide Perfect Solutions To Everything
            </h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#6467FF] to-[#43B2F9] rounded-full mt-2" />
          </div>

          {/* Right: 24/7 Support Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 bg-gradient-to-br from-[#6467FF]/10 to-[#43B2F9]/10 dark:from-[#6467FF]/20 dark:to-[#43B2F9]/20 px-5 py-3 rounded-xl border border-[#6467FF]/30 dark:border-[#6467FF]/30"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#6467FF] dark:bg-[#6467FF] rounded-full blur-xl"
              />
              <div className="relative bg-white dark:bg-slate-800 p-2.5 rounded-full shadow-md">
                <Headphones className="w-6 h-6 text-[#6467FF] dark:text-[#6467FF]" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Support for you</div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-5 sm:p-6 border-r border-b border-gray-200 dark:border-slate-700 last:border-r-0 lg:last:border-r lg:[&:nth-child(3)]:border-r-0 lg:[&:nth-child(6)]:border-b-0 [&:nth-child(5)]:border-b-0 [&:nth-child(6)]:border-b-0 hover:bg-[#6467FF]/5 dark:hover:bg-[#6467FF]/10 transition-all duration-300"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6467FF]/0 to-[#43B2F9]/0 group-hover:from-[#6467FF]/5 group-hover:to-[#43B2F9]/5 dark:group-hover:from-[#6467FF]/10 dark:group-hover:to-[#43B2F9]/10 transition-all duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="relative mb-3 inline-flex p-2.5 bg-gray-100 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-[#6467FF] dark:group-hover:text-[#43B2F9] transition-colors" />
              </div>

              {/* Value */}
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#6467FF] dark:group-hover:text-[#43B2F9] transition-colors">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-xs text-gray-600 dark:text-gray-400 leading-snug">
                {stat.label}
              </div>

              {/* Decorative Arrow */}
              {index === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 0.3, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-4 right-4 text-gray-300 dark:text-gray-600"
                >
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M10 38L38 10M38 10H18M38 10V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
