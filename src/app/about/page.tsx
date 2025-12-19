"use client";

import GlobalClients from "@/components/home/GlobalClients";
import { SectionDivider } from "@/components/ui/section-divider";
import ServicesOverview from "@/components/home/ServicesOverview";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const timeline = [
    { year: "2021", text: "Founded with a mission to fuse design and engineering." },
    { year: "2022", text: "Expanded into AI and automations, launching agent products." },
    { year: "2023", text: "Scaled dashboard solutions for B2B and enterprise clients." },
    { year: "2024", text: "Serving clients globally with 500+ successful projects delivered." },
  ];

  const values = [
    {
      title: "Communication",
      desc:
        "Our adherence to open and honest communication leads to our clients & employees, as we actively seek feedback.",
    },
    {
      title: "Seriousness",
      desc:
        "At AlienMatrix, we value the significance of professionalism in our industry for achieving outstanding outcomes.",
    },
    {
      title: "Professionalism",
      desc:
        "Professionalism and integrity are the pillars of our work, as we wholeheartedly adhere to a strict code of conduct.",
    },
    {
      title: "Awareness",
      desc:
        "We are committed to continuous learning, growth, and awareness and equip our team with the latest tools and technologies.",
    },
    {
      title: "Respect & Kindness",
      desc:
        "Respect & kindness are the guiding principles of our work culture, as we foster an inclusive and diverse environment.",
    },
    {
      title: "Responsibility",
      desc:
        "We understand the significance of responsibility and accountability in projects, we take ownership to ensure the best.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-violet-50 via-background to-purple-50 dark:from-slate-900 dark:via-background dark:to-slate-900">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(124,58,237,0.15),transparent_60%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-center mb-6">
            <span className="heading-accent">About</span> Us
          </h1>
          <p className="text-lg sm:text-xl text-foreground/75 max-w-3xl mx-auto text-center">
            We are a group of elite engineers and designers delivering premium digital products
            that transform businesses and drive innovation worldwide.
          </p>
        </div>
      </div>

      <SectionDivider variant="wave" animated />

      {/* Our Story Section - Animated Gallery */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-75 pointer-events-none">
          <img 
            src="/components/bgtestimonial.png" 
            alt="" 
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Our Story
          </h2>
        
        {/* Animated Image Gallery */}
        <div className="w-full max-w-5xl mx-auto h-[400px] flex justify-center items-stretch gap-5 transition-all duration-[400ms] group">
          {/* 2021 Card */}
          <div className="group relative flex-1 h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg dark:shadow-none translate-y-[-20px] hover:flex-[3] group-hover:[&:not(:hover)]:grayscale bg-gradient-to-br from-indigo-100 via-violet-100 to-purple-100 dark:from-indigo-500/15 dark:via-violet-500/12 dark:to-purple-500/15 border-2 border-indigo-300 dark:border-indigo-400/40 hover:border-violet-500 dark:hover:border-violet-400/60">
            {/* Tech Circuit Pattern Overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit-2021" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M10,10 L50,10 L50,50 L90,50" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="10" r="2" fill="currentColor"/>
                  <circle cx="50" cy="50" r="2" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-2021)" className="text-indigo-600 dark:text-indigo-400"/>
            </svg>
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-violet-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:via-violet-500/8 group-hover:to-purple-500/10 transition-all duration-500"></div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <svg className="w-48 h-48 opacity-30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="4" strokeDasharray="10 5" className="text-indigo-600 dark:text-indigo-400"/>
                  <path d="M100 20 L140 60 L120 100 L140 140 L100 180 L60 140 L80 100 L60 60 Z" fill="currentColor" opacity="0.2" className="text-indigo-600 dark:text-indigo-400"/>
                </svg>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div className="text-foreground text-center">
                  <h3 className="text-2xl font-bold mb-3">2021</h3>
                  <p className="text-sm leading-relaxed">🚀 TechHaddies was born with a bold mission — to fuse creativity, design, and engineering into powerful digital experiences.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2022 Card */}
          <div className="group relative flex-1 h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg dark:shadow-none translate-y-[20px] hover:flex-[3] group-hover:[&:not(:hover)]:grayscale bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 dark:from-violet-500/10 dark:via-purple-500/8 dark:to-indigo-500/10 border-2 border-violet-300 dark:border-violet-400/35 hover:border-purple-500 dark:hover:border-purple-400/55">
            {/* Tech Circuit Pattern Overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit-2022" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M10,10 L50,10 L50,50 L90,50" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="10" r="2" fill="currentColor"/>
                  <circle cx="50" cy="50" r="2" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-2022)" className="text-violet-600 dark:text-violet-400"/>
            </svg>
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-violet-500/10 group-hover:via-purple-500/8 group-hover:to-indigo-500/10 transition-all duration-500"></div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <svg className="w-48 h-48 opacity-30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="60" y="60" width="80" height="80" rx="10" stroke="currentColor" strokeWidth="4" className="text-violet-600 dark:text-violet-400"/>
                  <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.3" className="text-violet-600 dark:text-violet-400"/>
                  <path d="M80 80 L120 120 M120 80 L80 120" stroke="currentColor" strokeWidth="3" opacity="0.2" className="text-violet-600 dark:text-violet-400"/>
                </svg>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div className="text-foreground text-center">
                  <h3 className="text-2xl font-bold mb-3">2022</h3>
                  <p className="text-sm leading-relaxed">🧠 We stepped into the future by integrating AI and automation, launching next-gen agent products and intelligent business tools.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2023 Card */}
          <div className="group relative flex-1 h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg dark:shadow-none translate-y-[-20px] hover:flex-[3] group-hover:[&:not(:hover)]:grayscale bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-indigo-500/5 dark:via-violet-500/3 dark:to-purple-500/5 border border-indigo-200 dark:border-indigo-500/20 hover:border-violet-400 dark:hover:border-violet-500/40">
            {/* Tech Circuit Pattern Overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit-2023" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M10,10 L50,10 L50,50 L90,50" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="10" r="2" fill="currentColor"/>
                  <circle cx="50" cy="50" r="2" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-2023)" className="text-indigo-600 dark:text-indigo-400"/>
            </svg>
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-violet-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:via-violet-500/8 group-hover:to-purple-500/10 transition-all duration-500"></div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <svg className="w-48 h-48 opacity-30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="60" width="40" height="80" rx="5" fill="currentColor" opacity="0.2" className="text-indigo-600 dark:text-indigo-400"/>
                  <rect x="90" y="40" width="40" height="100" rx="5" fill="currentColor" opacity="0.3" className="text-indigo-600 dark:text-indigo-400"/>
                  <rect x="140" y="70" width="40" height="70" rx="5" fill="currentColor" opacity="0.2" className="text-indigo-600 dark:text-indigo-400"/>
                </svg>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div className="text-foreground text-center">
                  <h3 className="text-2xl font-bold mb-3">2023</h3>
                  <p className="text-sm leading-relaxed">📊 Our team scaled dashboard and SaaS solutions for B2B and enterprise clients, empowering businesses to visualize and automate their operations seamlessly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2024 Card */}
          <div className="group relative flex-1 h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg dark:shadow-none translate-y-[20px] hover:flex-[3] group-hover:[&:not(:hover)]:grayscale bg-gradient-to-br from-purple-100 via-indigo-100 to-violet-100 dark:from-purple-500/10 dark:via-indigo-500/8 dark:to-violet-500/10 border-2 border-purple-300 dark:border-purple-400/35 hover:border-indigo-500 dark:hover:border-indigo-400/55">
            {/* Tech Circuit Pattern Overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit-2024" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M10,10 L50,10 L50,50 L90,50" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="10" r="2" fill="currentColor"/>
                  <circle cx="50" cy="50" r="2" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-2024)" className="text-purple-600 dark:text-purple-400"/>
            </svg>
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-indigo-500/0 to-violet-500/0 group-hover:from-purple-500/10 group-hover:via-indigo-500/8 group-hover:to-violet-500/10 transition-all duration-500"></div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <svg className="w-48 h-48 opacity-30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="4" opacity="0.3" className="text-purple-600 dark:text-purple-400"/>
                  <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="3" opacity="0.2" className="text-purple-600 dark:text-purple-400"/>
                  <circle cx="100" cy="100" r="30" fill="currentColor" opacity="0.2" className="text-purple-600 dark:text-purple-400"/>
                  <path d="M100 30 L100 170 M30 100 L170 100" stroke="currentColor" strokeWidth="2" opacity="0.3" className="text-purple-600 dark:text-purple-400"/>
                </svg>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div className="text-foreground text-center">
                  <h3 className="text-2xl font-bold mb-3">2024</h3>
                  <p className="text-sm leading-relaxed">🌍 Now serving clients worldwide, TechHaddies has delivered 500+ successful projects in Web Development, App Development, Software Engineering, UI/UX Design, AI & Automation, and Digital Marketing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Add-on Text */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg font-medium text-violet-600 dark:text-violet-400 italic">
            "At TechHaddies, we don't just build software — we design intelligent digital experiences that shape the future."
          </p>
        </div>
        </div>
      </div>

      <SectionDivider variant="diagonal" animated />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-75 pointer-events-none">
          <img 
            src="/components/bgtestimonial.png" 
            alt="" 
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative rounded-2xl overflow-hidden transition-all duration-300 shadow-lg dark:shadow-none bg-gradient-to-br from-indigo-100 via-violet-100 to-purple-100 dark:from-indigo-500/15 dark:via-violet-500/12 dark:to-purple-500/15 border-2 border-indigo-300 dark:border-indigo-400/40 hover:border-violet-500 dark:hover:border-violet-400/60">
            {/* Tech Circuit Pattern Overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit-mission" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M10,10 L50,10 L50,50 L90,50" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="10" r="2" fill="currentColor"/>
                  <circle cx="50" cy="50" r="2" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-mission)" className="text-indigo-600 dark:text-indigo-400"/>
            </svg>
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-violet-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:via-violet-500/8 group-hover:to-purple-500/10 transition-all duration-500"></div>
            <div className="relative z-10 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-foreground/75">
                At AlienMatrix, our mission is to build intelligent digital experiences that empower businesses through modern
                software, design, and AI-driven solutions.
              </p>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden transition-all duration-300 shadow-lg dark:shadow-none bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 dark:from-violet-500/10 dark:via-purple-500/8 dark:to-indigo-500/10 border-2 border-violet-300 dark:border-violet-400/35 hover:border-purple-500 dark:hover:border-purple-400/55">
            {/* Tech Circuit Pattern Overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit-vision" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M10,10 L50,10 L50,50 L90,50" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="10" r="2" fill="currentColor"/>
                  <circle cx="50" cy="50" r="2" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-vision)" className="text-violet-600 dark:text-violet-400"/>
            </svg>
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-violet-500/10 group-hover:via-purple-500/8 group-hover:to-indigo-500/10 transition-all duration-500"></div>
            <div className="relative z-10 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Vision</h3>
              <p className="text-foreground/75">
                We envision a world where technology is humane, performant, and accessible—blending engineering excellence
                with world-class design to drive growth.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, index) => (
            <div key={v.title} className="group relative rounded-2xl overflow-hidden transition-all duration-300 shadow-lg dark:shadow-none bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-indigo-500/5 dark:via-violet-500/3 dark:to-purple-500/5 border border-indigo-200 dark:border-indigo-500/20 hover:border-violet-400 dark:hover:border-violet-500/40">
              {/* Tech Circuit Pattern Overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-5" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id={`circuit-value-${index}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M10,10 L50,10 L50,50 L90,50" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="50" cy="10" r="2" fill="currentColor"/>
                    <circle cx="50" cy="50" r="2" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#circuit-value-${index})`} className="text-indigo-600 dark:text-indigo-400"/>
              </svg>
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-violet-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:via-violet-500/8 group-hover:to-purple-500/10 transition-all duration-500"></div>
              <div className="relative z-10 p-6">
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-foreground/75 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      


      {/* Global Clients Section */}
      <GlobalClients />
    </div>
  );
}
