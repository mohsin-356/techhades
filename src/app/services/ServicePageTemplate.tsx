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

      {/* Development Process - ReactBits ScrollStack */}
      <MotionSection className="bg-[#050714] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#43B2F9]/5 via-transparent to-transparent opacity-40"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#43B2F9]/20 to-transparent"></div>
          <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6467FF]/20 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv variant="fadeInUp" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              {processTitle}
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
              {processSubtitle}
            </p>
          </MotionDiv>

          <div className="relative">
            <div className="hidden lg:block relative">
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
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="flex flex-col items-center group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative mb-8">
                      <div className="w-16 h-16 rounded-full bg-[#0B1526] border-2 border-[#43B2F9] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(67,178,249,0.3)]">
                        <span className="text-xl font-bold text-[#43B2F9]">{step.number}</span>
                      </div>
                      <div className="absolute inset-0 bg-[#43B2F9]/20 blur-xl rounded-full"></div>
                    </div>

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

            <div className="lg:hidden space-y-8">
              {steps.map((step, index, array) => (
                <motion.div
                  key={step.number}
                  className="flex gap-6 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {index !== array.length - 1 && (
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
