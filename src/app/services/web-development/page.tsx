"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MotionSection, MotionDiv } from "@/components/ui/motion";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { CheckCircle, Code2, Rocket, Zap, Users, Shield, Target, ArrowRight, Clock, CircleCheckBig, CodeXml, Cloud, ShieldCheck, Sparkles, LightbulbIcon, Gauge, UserCheck, Lock } from "lucide-react";
import ProjectsGrid from "@/components/ProjectsGrid";
 import FaqAccordion from "@/components/faq/FaqAccordion";
 import FaqJsonLd from "@/components/faq/FaqJsonLd";
 import { SERVICE_FAQS } from "@/data/serviceFaqs";


// Typing Animation Component
function TypingText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isInView, text]);

  return (
    <h2 ref={ref} className="section-heading text-3xl sm:text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6467FF] via-[#43B2F9] to-[#6467FF] dark:from-[#6467FF] dark:via-[#43B2F9] dark:to-[#6467FF]">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </h2>
  );
}

export default function WebDevelopmentPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <MotionDiv variant="fadeInUp" className="text-center max-w-4xl mx-auto">
          <Badge variant="glow" className="mb-6">
            <Code2 className="w-3 h-3 mr-1" />
            Web Application Development
          </Badge>
          <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            WEB APPLICATION <span className="heading-accent">DEVELOPMENT SERVICES</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            Dynamic, high-performance web app development
          </p>
          <p className="text-lg text-foreground/60 mb-10 max-w-3xl mx-auto">
            Create a powerful web app that's fast, secure, and designed to scale with your business. Count on us for consistent, top-tier results, and hassle-free web application development.
          </p>
          <Button asChild size="lg" variant="primary">
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </MotionDiv>

        {/* Floating Service Tags */}
        <div className="relative h-40 mt-16">
          {[
            { text: "React Development", left: "2%", top: 0, delay: 0 },
            { text: "Node.js", left: "16%", top: 45, delay: 0.2 },
            { text: "API Integration", left: "28%", top: 10, delay: 0.4 },
            { text: "Database Design", left: "45%", top: 50, delay: 0.1 },
            { text: "Authentication", left: "60%", top: 5, delay: 0.5 },
            { text: "Cloud Hosting", left: "75%", top: 45, delay: 0.3 },
            { text: "Payment Gateway", left: "88%", top: 15, delay: 0.15 },
          ].map((tag, i) => {
            const rotation = Math.random() * 6 - 3;
            return (
              <motion.div
                key={i}
                className="absolute px-4 py-2 bg-[#6467FF] text-white font-semibold rounded-full text-sm whitespace-nowrap shadow-lg"
                style={{ left: tag.left, top: `${tag.top}px` }}
                initial={{ opacity: 0, y: -30, rotate: -5 }}
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                  rotate: [rotation, rotation + 3, rotation],
                }}
                transition={{
                  opacity: { delay: tag.delay, duration: 0.5 },
                  y: { duration: 3.5 + Math.random() * 1.5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 5 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                {tag.text}
              </motion.div>
            );
          })}
        </div>

        {/* Scrolling Service Marquee */}
        <div className="mt-16 overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {["Web Development", "✱", "API Services", "✱", "Backend", "✱", "Frontend", "✱", "Full Stack", "✱"].map((item, i) => (
              <span key={i} className="text-[#6467FF] text-2xl font-bold">
                {item}
              </span>
            ))}
            {["Web Development", "✱", "API Services", "✱", "Backend", "✱", "Frontend", "✱", "Full Stack", "✱"].map((item, i) => (
              <span key={`dup-${i}`} className="text-[#6467FF] text-2xl font-bold">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      {/* Process Timeline - Development Process */}
      <MotionSection className="bg-[#050714] py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#43B2F9]/5 via-transparent to-transparent opacity-40"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#43B2F9]/20 to-transparent"></div>
          <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6467FF]/20 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv variant="fadeInUp" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Our Web Development Process
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
              We follow a structured approach to deliver high-quality web applications that exceed expectations
            </p>
          </MotionDiv>

          {/* New Horizontal 6-Step Layout */}
          <div className="relative">
            {/* Desktop View */}
            <div className="hidden lg:block relative">
              {/* Connecting Line - Top */}
              <div className="absolute top-8 left-[8%] right-[8%] h-[2px] bg-[#1E293B]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#6467FF] via-[#43B2F9] to-[#6467FF]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
              </div>

              <div className="grid grid-cols-6 gap-6 relative z-10">
                {[
                  { number: 1, title: "Discovery & Planning", desc: "We begin by understanding your business, goals, and target audience. Through collaborative discussions, we define project requirements, timelines, and resources." },
                  { number: 2, title: "Design & Prototyping", desc: "Our design team creates interactive wireframes and high-fidelity prototypes that reflect the user journey and optimize interface flow for maximum engagement." },
                  { number: 3, title: "Development & Coding", desc: "We build using latest technologies like React, Next.js, Node.js, and Laravel ensuring responsive, secure and performant web applications with clean code architecture." },
                  { number: 4, title: "Testing & Quality Assurance", desc: "We rigorously test functionality, performance, security, and cross-device compatibility using automated and manual testing techniques to ensure flawless execution." },
                  { number: 5, title: "Launch & Deployment", desc: "We deploy with proper CI/CD pipelines, security hardening, CDN configuration, and optimal scaling for zero-downtime releases and maximum reliability." },
                  { number: 6, title: "Post-Launch Support", desc: "We offer comprehensive maintenance, monitoring, and support packages to keep your website updated, secure, and running efficiently with proactive issue resolution." },
                ].map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="flex flex-col items-center group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {/* Number Indicator */}
                    <div className="relative mb-8">
                      <div className="w-16 h-16 rounded-full bg-[#0B1526] border-2 border-[#43B2F9] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(67,178,249,0.3)]">
                        <span className="text-xl font-bold text-[#43B2F9]">{step.number}</span>
                      </div>
                      {/* Glow behind number */}
                      <div className="absolute inset-0 bg-[#43B2F9]/20 blur-xl rounded-full"></div>
                    </div>

                    {/* Card */}
                    <div className="w-full h-full">
                      <div className="h-full bg-[#0B1526]/60 backdrop-blur-md border border-[#43B2F9]/30 rounded-2xl p-6 hover:border-[#43B2F9] transition-colors duration-300 flex flex-col items-center text-center group-hover:shadow-[0_0_30px_rgba(67,178,249,0.1)]">
                        <h3 className="text-lg font-bold text-white mb-3 min-h-[48px] flex items-center justify-center">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[#94A3B8] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet View (Stacked) */}
            <div className="lg:hidden space-y-8">
              {[
                { number: 1, title: "Discovery & Planning", desc: "We begin by understanding your business, goals, and target audience. Through collaborative discussions, we define project requirements, timelines, and resources." },
                { number: 2, title: "Design & Prototyping", desc: "Our design team creates interactive wireframes and high-fidelity prototypes that reflect the user journey and optimize interface flow for maximum engagement." },
                { number: 3, title: "Development & Coding", desc: "We build using latest technologies like React, Next.js, Node.js, and Laravel ensuring responsive, secure and performant web applications with clean code architecture." },
                { number: 4, title: "Testing & Quality Assurance", desc: "We rigorously test functionality, performance, security, and cross-device compatibility using automated and manual testing techniques to ensure flawless execution." },
                { number: 5, title: "Launch & Deployment", desc: "We deploy with proper CI/CD pipelines, security hardening, CDN configuration, and optimal scaling for zero-downtime releases and maximum reliability." },
                { number: 6, title: "Post-Launch Support", desc: "We offer comprehensive maintenance, monitoring, and support packages to keep your website updated, secure, and running efficiently with proactive issue resolution." },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  className="flex gap-6 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Vertical Line */}
                  {index !== 5 && (
                    <div className="absolute left-[31px] top-[64px] bottom-[-32px] w-[2px] bg-gradient-to-b from-[#43B2F9]/50 to-transparent"></div>
                  )}

                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#0B1526] border-2 border-[#43B2F9] flex items-center justify-center shadow-[0_0_15px_rgba(67,178,249,0.2)]">
                      <span className="text-xl font-bold text-[#43B2F9]">{step.number}</span>
                    </div>
                  </div>

                  <div className="grow pb-4">
                    <div className="bg-[#0B1526]/60 backdrop-blur-sm border border-[#43B2F9]/30 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Website Development Section */}
      <MotionSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
            {/* Left - Image/GIF */}
            <div className="relative h-[400px] lg:h-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6467FF]/10 to-[#43B2F9]/10 dark:from-[#6467FF]/20 dark:to-[#43B2F9]/20"></div>
              <img
                src="https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif"
                alt="Website Development"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="p-8 lg:p-10 bg-background">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#6467FF]/10 text-[#6467FF] text-xs font-semibold mb-4">
                <span className="mr-1">Website Development</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Website Development According to Your Needs
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Build powerful, fast, and responsive websites tailored to your business goals. Our expert developers create modern web solutions using cutting-edge technologies to enhance user experience and performance.
              </p>

              {/* Feature Tags */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                  🏷️ Feature Tags
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <MotionDiv variant="fadeInUp" className="flex items-center space-x-2 text-sm">
                    <CodeXml className="w-4 h-4 text-[#6467FF]" />
                    <span className="text-gray-700 dark:text-gray-300">Custom-Built Solutions</span>
                  </MotionDiv>
                  <MotionDiv variant="fadeInUp" className="flex items-center space-x-2 text-sm">
                    <Zap className="w-4 h-4 text-[#6467FF]" />
                    <span className="text-gray-700 dark:text-gray-300">Fast & Responsive Design</span>
                  </MotionDiv>
                  <MotionDiv variant="fadeInUp" className="flex items-center space-x-2 text-sm">
                    <Cloud className="w-4 h-4 text-[#6467FF]" />
                    <span className="text-gray-700 dark:text-gray-300">SEO-Friendly Architecture</span>
                  </MotionDiv>
                  <MotionDiv variant="fadeInUp" className="flex items-center space-x-2 text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#6467FF]" />
                    <span className="text-gray-700 dark:text-gray-300">Scalable & Secure Systems</span>
                  </MotionDiv>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
                  🧩 Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                  ].map((tech, i) => (
                    <MotionDiv
                      key={i}
                      variant="fadeInUp"
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
                    >
                      <Image alt={tech.name} className="w-4 h-4" src={tech.icon} width={16} height={16} unoptimized />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                    </MotionDiv>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 py-4 mb-6 border-y border-gray-200 dark:border-slate-700">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Project Duration</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Based on Requirements</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CircleCheckBig className="w-4 h-4 text-purple-500" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Client Satisfaction</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">100% Guaranteed</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex space-x-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#6467FF] to-[#43B2F9] text-white shadow-lg shadow-[#6467FF]/30 hover:shadow-xl hover:shadow-[#6467FF]/40 hover:scale-[1.02]"
                >
                  <Link href="/contact">
                    Website Development <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/80 dark:bg-slate-900 text-[#6467FF] border-2 border-[#6467FF] hover:bg-white dark:hover:bg-slate-800"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Projects Showcase Section */}
      <MotionSection className="bg-foreground/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv variant="fadeInUp" className="text-center mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl font-semibold mb-4">
              Our <span className="heading-accent">Recent Projects</span>
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Explore our portfolio of successful web development projects
            </p>
          </MotionDiv>

          {/* Use ProjectsGrid component to show only Web projects */}
          <ProjectsGrid filter="web-development" limit={3} />

          {/* Show All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-10"
          >
            <Button
              asChild
              variant="secondary"
              className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 bg-gradient-to-r from-[#6467FF] via-[#43B2F9] to-[#6467FF] text-white hover:scale-105 transition-transform duration-300"
            >
              <Link href="/projects?category=Web" className="flex items-center gap-2">
                <span>Show All</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </MotionSection>

      {/* Tailored Services */}
      <MotionSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv variant="fadeInUp" className="text-center mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl font-semibold mb-4">
              Tailored web application development services for every business need
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Your go-to partner for custom web app development services, serving both startups and established businesses across diverse industries.
            </p>
          </MotionDiv>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* For New Ventures */}
            <MotionDiv variant="fadeInLeft">
              <Card className="h-full bg-background border border-foreground/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">For new ventures</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                      <span><strong>Build an MVP</strong> version of your application and validate product-market fit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                      <span><strong>Launch a SaaS platform</strong> to bring your product idea to life with a scalable, cloud-based solution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                      <span><strong>Enhance your existing web app</strong> for better performance, security, and user experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                      <span><strong>Integrate 3rd party APIs</strong> and services to extend functionality seamlessly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                      <span><strong>Continuous support</strong> to your product throughout its lifecycle</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>

            {/* For Established Businesses */}
            <MotionDiv variant="fadeInRight">
              <Card className="h-full bg-background border border-foreground/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">For established businesses</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                      <span><strong>Streamline workflows</strong> with an intuitive, custom-tailored web platform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                      <span><strong>Develop bespoke web apps</strong> to address unique business requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                      <span><strong>Monetise your services</strong> by offering expertise via a SaaS solution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                      <span><strong>Connect business systems</strong> for seamless data flow</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                      <span><strong>Modernise software</strong> or migrate to the cloud for scalability</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {/* Experience Section */}
      <MotionSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv variant="fadeInUp" className="text-center mb-16">
            <h2 className="section-heading text-3xl sm:text-4xl font-semibold mb-4">
              Hands-on experience in custom web application development
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Whether you aim to build a SaaS platform, streamline operations, or digitise your business, we've got you covered. Our web application development company offers multiple solutions to meet your business needs.
            </p>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Technology Stack */}
      <MotionSection className="bg-foreground/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv variant="fadeInUp" className="text-center mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl font-semibold mb-4">
              Our technology stack for website application development
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Our team of skilled web application developers is equipped to build robust, high-performing web products tailored to your business needs.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Front-end */}
            <MotionDiv variant="fadeInUp">
              <Card className="bg-background border border-foreground/10 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Front-end</h3>
                  <p className="text-sm text-foreground/70 mb-6">
                    From interactive single-page applications to enterprise-level solutions, ensuring seamless, high-performance, and future-proof digital experiences.
                  </p>
                  <div className="space-y-3">
                    {["React", "Angular", "Vue.js"].map((tech) => (
                      <div key={tech} className="flex items-center gap-3 p-3 rounded-lg bg-foreground/5">
                        <Code2 className="w-5 h-5 text-brand" />
                        <span className="font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>

            {/* Back-end */}
            <MotionDiv variant="fadeInUp">
              <Card className="bg-background border border-foreground/10 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Back-end</h3>
                  <p className="text-sm text-foreground/70 mb-6">
                    Powerful back-end tech stack that supports growth and delivers unparalleled performance and adaptability for your business.
                  </p>
                  <div className="space-y-3">
                    {["Node.js", ".NET", "Laravel/PHP", "Java"].map((tech) => (
                      <div key={tech} className="flex items-center gap-3 p-3 rounded-lg bg-foreground/5">
                        <Code2 className="w-5 h-5 text-brand" />
                        <span className="font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>

            {/* Cloud */}
            <MotionDiv variant="fadeInUp">
              <Card className="bg-background border border-foreground/10 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Cloud</h3>
                  <p className="text-sm text-foreground/70 mb-6">
                    Mainstream cloud tech stack offering scalable, secure, and powerful solutions that simplify maintenance.
                  </p>
                  <div className="space-y-3">
                    {["Microsoft Azure", "Google Cloud", "Amazon Web Services"].map((tech) => (
                      <div key={tech} className="flex items-center gap-3 p-3 rounded-lg bg-foreground/5">
                        <Code2 className="w-5 h-5 text-brand" />
                        <span className="font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {/* Why Choose AlienMatrix */}
      <MotionSection className="py-20 bg-gradient-to-b from-background to-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv variant="fadeInUp" className="text-center mb-20">
            <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose <span className="heading-accent">AlienMatrix</span>?
            </h2>
          </MotionDiv>

          {/* Connected Horizontal Layout */}
          <div className="relative">
            {/* Dashed Connection Lines - Desktop */}
            <svg className="hidden lg:block absolute top-20 left-0 w-full h-32 pointer-events-none" preserveAspectRatio="none">
              <path
                d="M 100 16 Q 250 -20, 400 16 T 700 16 T 1000 16 T 1300 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
                className="text-cyan-500/30"
              />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
              {/* Item 1 */}
              <MotionDiv variant="fadeInUp" className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">End-to-End Expertise</h3>
                  <p className="text-sm text-foreground/70">
                    We provide comprehensive web development services covering strategy, design, development, and ongoing support. Our team delivers high-quality, scalable web solutions.
                  </p>
                </div>
              </MotionDiv>

              {/* Item 2 */}
              <MotionDiv variant="fadeInUp" className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6467FF] to-[#43B2F9] flex items-center justify-center mb-4 shadow-lg shadow-[#6467FF]/30">
                    <LightbulbIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Cutting-Edge Technologies</h3>
                  <p className="text-sm text-foreground/70">
                    We use the latest technologies like React, Angular, Node.js, and Laravel to deliver high-performance, future-ready websites. Our developers stay ahead of industry trends for optimal results.
                  </p>
                </div>
              </MotionDiv>

              {/* Item 3 */}
              <MotionDiv variant="fadeInUp" className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4 shadow-lg shadow-pink-500/30">
                    <Gauge className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Scalability & Flexibility</h3>
                  <p className="text-sm text-foreground/70">
                    Our web solutions are designed to grow with your business, allowing for easy adjustments and scalability. We ensure long-term value by building flexible and adaptable websites.
                  </p>
                </div>
              </MotionDiv>

              {/* Item 4 */}
              <MotionDiv variant="fadeInUp" className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                    <UserCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">User-Centered Design</h3>
                  <p className="text-sm text-foreground/70">
                    We focus on creating intuitive and visually appealing designs that enhance user engagement. Our responsive designs create a seamless experience across all devices and platforms.
                  </p>
                </div>
              </MotionDiv>

              {/* Item 5 */}
              <MotionDiv variant="fadeInUp" className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Security and Compliance</h3>
                  <p className="text-sm text-foreground/70">
                    We prioritize website security by implementing robust protocols and conducting regular audits. Your website will always comply with the latest security standards and regulations.
                  </p>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Dedicated Team Section */}
      <MotionSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            {/* Left: 60% */}
            <MotionDiv variant="fadeInLeft" className="lg:w-[60%]">
              <h2 className="section-heading text-3xl sm:text-4xl font-semibold mb-6">
                Your Dedicated <span className="heading-accent">Team</span>
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Work with a tailor-made team of top-tier talent, carefully selected to elevate your brand. From strategy to design and full-stack development, we assemble experts with the experience to bring your website vision to life.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Beyond websites, we provide ongoing maintenance and marketing options, ensuring your brand stays ahead in an ever-evolving digital landscape.
              </p>
            </MotionDiv>

            {/* Right: 40% - Team Images */}
            <MotionDiv variant="fadeInRight" className="lg:w-[40%] relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#6467FF] to-[#43B2F9]"
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                    👨‍💻
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#43B2F9] to-[#6467FF] mt-8"
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                    👩‍💻
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-600 to-cyan-600 -mt-8"
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                    👨‍🎨
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#6467FF] to-[#43B2F9]"
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                    👩‍🎨
                  </div>
                </motion.div>
              </div>
            </MotionDiv>
          </div>

          {/* Cards Below */}
          <div className="grid md:grid-cols-3 gap-6">
            <MotionDiv variant="fadeInUp">
              <Card className="bg-background border border-foreground/10 h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center">
                    <Target className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Strategic & Creative Excellence</h3>
                  <p className="text-sm text-foreground/70">
                    We combine stunning design with smart strategy to drive results and elevate your brand.
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv variant="fadeInUp">
              <Card className="bg-background border border-foreground/10 h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Full-Service Capabilities</h3>
                  <p className="text-sm text-foreground/70">
                    Branding, web development, marketing—we handle it all with precision and expertise.
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv variant="fadeInUp">
              <Card className="bg-background border border-foreground/10 h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Performance-Driven Execution</h3>
                  <p className="text-sm text-foreground/70">
                    Every design, website, and campaign is built with ROI and long-term success in mind.
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {SERVICE_FAQS["web-development"] && (
        <>
          <FaqJsonLd groups={[SERVICE_FAQS["web-development"]]} />
          <FaqAccordion
            groups={[SERVICE_FAQS["web-development"]]}
            searchable
            oneAtATime
            showCta
          />
        </>
      )}

      {/* Final CTA Section */}
      <MotionSection className="bg-gradient-to-br from-[#050714] via-[#0B1526] to-[#050714] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv variant="fadeInUp" className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Create an <span className="bg-gradient-to-r from-[#6467FF] to-[#43B2F9] bg-clip-text text-transparent">Amazing</span>
              <br />
              <span className="bg-gradient-to-r from-[#6467FF] to-[#43B2F9] bg-clip-text text-transparent">Project Together!</span>
            </h2>
            <Button asChild size="lg" className="bg-[#6467FF] hover:bg-[#43B2F9] text-white px-8 py-6 text-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </MotionDiv>
        </div>
      </MotionSection>
    </div>
  );
}
