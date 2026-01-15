"use client";

import GlobalClients from "@/components/home/GlobalClients";
import { SectionDivider } from "@/components/ui/section-divider";
import ServicesOverview from "@/components/home/ServicesOverview";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotionSection, MotionDiv } from "@/components/ui/motion";
import { Users } from "lucide-react";
import ScrollStack, { ScrollStackItem } from '@/components/react-bits/ScrollStack';

export default function AboutPage() {
  const timeline = [
    { year: "2021", text: "Founded with a mission to fuse design and engineering." },
    { year: "2022", text: "Expanded into AI and automations, launching agent products." },
    { year: "2023", text: "Scaled dashboard solutions for B2B and enterprise clients." },
    { year: "2024", text: "Serving clients globally with 500+ successful projects delivered." },
  ];

  const storyCards = [
    {
      label: "2024",
      headline: "2024 - Our Foundation",
      content:
        "🌱 AlienMatrix was born with a vision to deliver cutting-edge digital solutions. Starting with a passionate team of developers and designers, we established our foundation in Karachi, focusing on building strong relationships with local businesses. Our commitment to quality and innovation helped us complete our first 50+ projects, laying the groundwork for something bigger.",
      stats: [
        { label: "Founded", value: "2024" },
        { label: "Local Projects", value: "50+" },
        { label: "Core Team", value: "5+" },
        { label: "Focus", value: "Web & App Development" },
      ],
      borderClassName: "border-[#43B2F9]/40",
    },
    {
      label: "Local Market",
      headline: "Building Trust Locally",
      content:
        "🎯 With proven expertise and satisfied clients, we expanded our services across Pakistan. Our portfolio grew to include diverse industries - from e-commerce platforms to enterprise solutions. We mastered understanding local market needs, delivering tailored solutions in Web Development, UI/UX Design, and Digital Marketing. Our reputation for reliability and excellence became our strongest asset.",
      stats: [
        { label: "Projects Delivered", value: "150+" },
        { label: "Team Members", value: "20+" },
        { label: "Presence", value: "Major Pakistani cities" },
        { label: "Client Retention", value: "95%" },
      ],
      borderClassName: "border-[#6467FF]/30",
    },
    {
      label: "International",
      headline: "Reaching Global Heights",
      content:
        " Our exceptional work caught international attention. AlienMatrix began partnering with clients from USA, UK, UAE, Canada, and Australia. We adapted to global standards, mastered international collaboration tools, and delivered projects across different time zones. This phase marked our transformation from a local agency to a globally recognized tech partner.",
      stats: [
        { label: "Projects Worldwide", value: "350+" },
        { label: "Countries Served", value: "15+" },
        { label: "Team Members", value: "40+" },
        { label: "Support", value: "24/7" },
      ],
      borderClassName: "border-[#43B2F9]/30",
    },
    {
      label: "Present",
      headline: "2024 - 500+ Success Stories",
      content:
        " Today, AlienMatrix stands as a trusted name in the global tech industry. With 500+ successful projects delivered across Web Development, App Development, Software Engineering, UI/UX Design, AI & Automation, and Digital Marketing, we've partnered with startups, SMEs, and Fortune 500 companies. Our success is built on innovation, dedicated expertise, strategic partnerships, and the trust of clients worldwide.",
      stats: [
        { label: "Projects Completed", value: "500+" },
        { label: "Team Members", value: "50+" },
        { label: "Core Services", value: "6" },
        { label: "Client Satisfaction", value: "98%" },
      ],
      borderClassName: "border-[#6467FF]/35",
    },
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
      <div className="relative overflow-hidden bg-gradient-to-br from-[#050714] via-[#0B1526] to-[#050714]">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(67,178,249,0.15),transparent_60%)]" />
        </div>

        <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <MotionDiv variant="fadeInUp" className="text-center max-w-4xl mx-auto">
            <Badge variant="glow" className="mb-6">
              <Users className="w-3 h-3 mr-1" />
              Who We Are
            </Badge>
            <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              ELEVATING BUSINESS THROUGH <span className="heading-accent">INTELLIGENT SOLUTIONS</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              We are a group of elite engineers and designers delivering premium digital products
              that transform businesses and drive innovation worldwide.
            </p>
          </MotionDiv>
        </MotionSection>
      </div>

      <SectionDivider variant="wave" animated />

      {/* Our Story Section - Animated Gallery */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Our Story
          </h2>

          <div className="h-[600px] w-full rounded-3xl overflow-hidden border border-gray-800 bg-[#050714]/50 backdrop-blur-sm">
            <ScrollStack itemDistance={50} itemScale={0.05}>
              {storyCards.map((card) => (
                <ScrollStackItem
                  key={card.headline}
                  itemClassName={`bg-[#0B1526] border-2 ${card.borderClassName} h-auto min-h-[22rem] flex flex-col justify-center items-center text-center px-6 sm:px-12 py-10`}
                >
                  <div className="w-full max-w-3xl">
                    <div className="flex items-center justify-center mb-5">
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                        {card.label}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      <span className="text-[#6467FF]">{card.headline}</span>
                    </h3>

                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      {card.content}
                    </p>

                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {card.stats.map((stat) => (
                        <div
                          key={`${card.headline}-${stat.label}`}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                        >
                          <div className="text-white font-semibold leading-none">{stat.value}</div>
                          <div className="mt-1 text-[11px] sm:text-xs text-white/70 leading-snug">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
          {/* Optional Add-on Text */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-lg font-medium text-[#6467FF] italic">
              "At AlienMatrix, we don't just build software — we design engineer intelligence beyond the human matrix that shape the future."
            </p>
          </div>
        </div>
      </div>

      <SectionDivider variant="diagonal" animated />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">


        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-[rgba(100,103,255,0.25)] bg-[#0B1526] backdrop-blur-xl shadow-[0_0_40px_rgba(100,103,255,0.15)] p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                At AlienMatrix, our mission is to build engineer intelligence beyond the human matrix that empower businesses through modern
                software, design, and AI-driven solutions.
              </p>
            </div>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-[rgba(100,103,255,0.25)] bg-[#0B1526] backdrop-blur-xl shadow-[0_0_40px_rgba(100,103,255,0.15)] p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                We envision a world where technology is humane, performant, and accessible—blending engineering excellence
                with world-class design to drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, index) => (
            <div key={v.title} className="relative rounded-[2.5rem] overflow-hidden border border-[rgba(100,103,255,0.25)] bg-[#0B1526] backdrop-blur-xl shadow-[0_0_40px_rgba(100,103,255,0.15)] p-8 transition-transform hover:-translate-y-1 duration-300">
              <h3 className="text-lg font-semibold text-white mb-3">{v.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>




      {/* Global Clients Section */}
      <GlobalClients />
    </div>
  );
}

