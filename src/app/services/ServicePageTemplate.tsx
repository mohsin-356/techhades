"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotionSection, MotionDiv } from "@/components/ui/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, ArrowRight } from "lucide-react";
import ProjectsGrid from "@/components/ProjectsGrid";
 import FaqAccordion from "@/components/faq/FaqAccordion";
 import FaqJsonLd from "@/components/faq/FaqJsonLd";
 import { SERVICE_FAQS } from "@/data/serviceFaqs";

export type ServiceStep = {
  number: number;
  title: string;
  desc: string;
};

export type ServiceConfig = {
  slug: string; // service route slug, e.g. "web-development"
  badgeLabel: string;
  heading: string;
  tagline: string;
  description: string;
  heroTags: string[];
  processTitle: string;
  processSubtitle: string;
  steps: ServiceStep[];
  projectsHeading: string;
  projectsDescription: string;
  projectsCategoryLabel: string; // category string for projects page filter
  ctaHeading: string;
};

export default function ServicePageTemplate({
  config,
  extraSection,
}: {
  config: ServiceConfig;
  extraSection?: ReactNode;
}) {
  const {
    slug,
    badgeLabel,
    heading,
    tagline,
    description,
    heroTags,
    processTitle,
    processSubtitle,
    steps,
    projectsHeading,
    projectsDescription,
    projectsCategoryLabel,
    ctaHeading,
  } = config;

  const floatingTagLayout: { left: string; top: number; delay: number }[] = [
    { left: "5%", top: 0, delay: 0 },
    { left: "18%", top: 40, delay: 0.2 },
    { left: "32%", top: 10, delay: 0.4 },
    { left: "48%", top: 55, delay: 0.1 },
    { left: "62%", top: 5, delay: 0.5 },
    { left: "76%", top: 45, delay: 0.3 },
    { left: "88%", top: 15, delay: 0.15 },
  ];

  const baseMarqueeItems = heroTags.length ? heroTags : [badgeLabel];
  const marqueeItems: string[] = [];
  baseMarqueeItems.forEach((item) => {
    marqueeItems.push(item);
    marqueeItems.push("✱");
  });
  const marqueeLoop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative">
      {/* Hero Section */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <MotionDiv variant="fadeInUp" className="text-center max-w-4xl mx-auto">
          <Badge variant="glow" className="mb-6">
            <Code2 className="w-3 h-3 mr-1" />
            {badgeLabel}
          </Badge>
          <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {heading}
          </h1>
          <p className="text-xl text-foreground/70 mb-4">{tagline}</p>
          <p className="text-lg text-foreground/60 mb-10 max-w-3xl mx-auto">{description}</p>
          <Button asChild size="lg" variant="primary">
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </MotionDiv>

        {/* Simple animated hero tags */}
        {heroTags.length > 0 && (
          <>
            {/* Floating Service Tags */}
            <div className="relative h-40 mt-16">
              {heroTags.slice(0, floatingTagLayout.length).map((tag, i) => {
                const layout = floatingTagLayout[i];
                const baseRotation = -4 + i * 1.5;

                return (
                  <motion.div
                    key={tag + i}
                    className="absolute px-4 py-2 bg-[#6467FF] text-white font-semibold rounded-full text-sm whitespace-nowrap shadow-lg"
                    style={{ left: layout.left, top: `${layout.top}px` }}
                    initial={{ opacity: 0, y: -30, rotate: baseRotation - 3 }}
                    animate={{
                      opacity: 1,
                      y: [0, -8, 0],
                      rotate: [baseRotation, baseRotation + 3, baseRotation],
                    }}
                    transition={{
                      opacity: { delay: layout.delay, duration: 0.5 },
                      y: { duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
                    }}
                  >
                    {tag}
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
                {marqueeLoop.map((item, i) => (
                  <span key={item + i} className="text-[#6467FF] text-2xl font-bold">
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </>
        )}
      </MotionSection>

      {/* Process Timeline - Horizontal Flow */}
      <MotionSection className="bg-gradient-to-br from-[#050714] via-[#0B1526] to-[#050714] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv variant="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {processTitle}
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">{processSubtitle}</p>
          </MotionDiv>

          {/* Desktop Horizontal Flow */}
          <div className="hidden lg:flex flex-col items-center relative">
            {/* Center Brand Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h3 className="text-6xl font-bold text-white/10 tracking-wider">AlienMatrix</h3>
            </div>

            {/* Horizontal bar with animated gradient and arrows */}
            <div className="relative w-full flex items-center justify-between mb-12">
              <div className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 z-0">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#6467FF] via-[#43B2F9] to-[#6467FF] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Step Indicators with Arrows */}
              <div className="absolute top-1/2 w-full px-4 z-10 -translate-y-1/2">
                {steps.map((_, index, array) => {
                  if (index === array.length - 1) return null;
                  const left = `calc(${((index + 1) / array.length) * 100}% - 8px)`;
                  return (
                    <motion.div
                      key={`arrow-${index}`}
                      className="absolute"
                      style={{ left }}
                      initial={{ opacity: 0, y: -5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.15, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 1L15 8L8 15"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Process Steps in a Row */}
            <div className="w-full grid grid-cols-6 gap-6 relative z-20">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6467FF] to-[#43B2F9] text-white flex items-center justify-center font-bold text-xl shadow-xl shadow-[#6467FF]/50 mb-4"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {step.number}
                  </motion.div>
                  <div className="bg-[#0B1526]/40 backdrop-blur-sm border-2 border-[#6467FF]/50 rounded-lg p-4 h-full w-full">
                    <h3 className="text-base font-bold text-white mb-2 text-center">{step.title}</h3>
                    <p className="text-xs text-gray-300 leading-tight text-center">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Return Arrow */}
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <svg
                width="80"
                height="40"
                viewBox="0 0 80 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M75 20C75 8 60 5 40 5C20 5 5 8 5 20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.7, duration: 1 }}
                />
                <motion.path
                  d="M15 10L5 20L15 30"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.7, duration: 0.4 }}
                />
              </svg>
            </motion.div>
          </div>

          {/* Mobile Process Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index, array) => (
              <motion.div
                key={step.number}
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-[#6467FF] to-[#43B2F9] text-white flex items-center justify-center font-bold text-xl shadow-lg"
                  whileInView={{
                    boxShadow: [
                      "0 10px 15px -3px rgba(100, 103, 255, 0.3)",
                      "0 10px 20px -2px rgba(100, 103, 255, 0.6)",
                      "0 10px 15px -3px rgba(100, 103, 255, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {step.number}
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.desc}</p>

                  {index < array.length - 1 && (
                    <motion.div
                      className="flex justify-center mt-4 text-white"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 4L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path
                          d="M6 10L12 16L18 10"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Return Arrow for Mobile */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.path
                  d="M20 10L26 7M20 10L26 13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 2.5 }}
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {extraSection && (
        <MotionSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{extraSection}</div>
        </MotionSection>
      )}

      {/* Projects Showcase Section */}
      <MotionSection className="bg-foreground/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv variant="fadeInUp" className="text-center mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl font-semibold mb-4">
              {projectsHeading}
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">{projectsDescription}</p>
          </MotionDiv>

          <ProjectsGrid filter={slug} limit={3} />

          {/* Show All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-10"
          >
            <Button
              asChild
              variant="secondary"
              className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 bg-gradient-to-r from-[#6467FF] via-[#43B2F9] to-[#6467FF] text-white hover:scale-105 transition-transform duration-300"
            >
              <Link href={`/projects?category=${encodeURIComponent(projectsCategoryLabel)}`} className="flex items-center gap-2">
                <span>Show All</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </MotionSection>

      {SERVICE_FAQS[slug] && (
        <>
          <FaqJsonLd groups={[SERVICE_FAQS[slug]]} />
          <FaqAccordion groups={[SERVICE_FAQS[slug]]} searchable oneAtATime showCta />
        </>
      )}

      {/* Final CTA Section */}
      <MotionSection className="bg-gradient-to-br from-[#050714] via-[#0B1526] to-[#050714] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv variant="fadeInUp" className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {ctaHeading}
            </h2>
            <Button
              asChild
              size="lg"
              className="bg-[#6467FF] hover:bg-[#43B2F9] text-white px-8 py-6 text-lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </MotionDiv>
        </div>
      </MotionSection>
    </div>
  );
}
