"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import React from "react";

interface ServiceDetailedSectionProps {
    title: string;
    tagline: string;
    description: string;
    tags: string[]; // "Feature Tags"
    features: string[]; // "Fast & Responsive Design", etc.
    technologies: { name: string; icon?: React.ReactNode }[];
    stats: { label: string; value: string }[];
    ctaLink: string;
    imageSrc?: string; // Optional image URL
    imagePosition?: "left" | "right";
    badgeText?: string;
}

export default function ServiceDetailedSection({
    title,
    tagline,
    description,
    tags,
    features,
    technologies,
    stats,
    ctaLink,
    imageSrc,
    imagePosition = "right",
    badgeText,
}: ServiceDetailedSectionProps) {
    return (
        <section className="relative overflow-hidden h-full">
            <div className="relative h-full rounded-[2.5rem] overflow-hidden border border-[rgba(100,103,255,0.25)] bg-[#0B1526] backdrop-blur-xl shadow-[0_0_40px_rgba(100,103,255,0.15)] p-5 sm:p-8 lg:p-10 xl:p-12">
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6467FF]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#43B2F9]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="flex flex-col gap-8 items-start">

                        {/* Content Column */}
                        <div className="flex-1 min-w-0 space-y-6 sm:space-y-8 relative z-10 pl-0.5">
                            {badgeText && (
                                <Badge variant="glow" className="mb-2 ml-0.5">
                                    {badgeText} ✨
                                </Badge>
                            )}

                            <div>
                                {/* Primary Section Heading (title) */}
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-lg sm:text-xl font-semibold text-white/90 mb-2"
                                >
                                    {title}
                                </motion.h3>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-display text-white mb-3 sm:mb-4 leading-tight"
                                >
                                    {tagline}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-base sm:text-lg text-slate-300 leading-relaxed [display:-webkit-box] [-webkit-box-orient:vertical] overflow-hidden [-webkit-line-clamp:3]"
                                >
                                    {description}
                                </motion.p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                                <div>
                                    <h4 className="text-sm font-semibold text-[#6467FF] mb-4 flex items-center gap-2">
                                        <span className="w-1 h-4 bg-[#6467FF] rounded-full" /> FEATURE TAGS
                                    </h4>
                                    <ul className="space-y-2 sm:space-y-3">
                                        {tags.map((tag, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm leading-snug">
                                                <span className="w-1.5 h-1.5 bg-[#43B2F9] rounded-full" />
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-[#6467FF] mb-4 opacity-0 sm:opacity-100 hidden sm:block">&nbsp;</h4> {/* Spacer for alignment, hidden on mobile */}
                                    <ul className="space-y-2 sm:space-y-3">
                                        {features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm leading-snug">
                                                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#6467FF]" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h4 className="text-sm font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-emerald-500 rounded-full" /> TECHNOLOGIES USED
                                </h4>
                                <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible">
                                    {technologies.map((tech, i) => (
                                        <Badge key={i} variant="secondary" className="bg-slate-900/50 border-white/10 text-slate-300 px-2.5 py-1 text-xs sm:text-sm hover:bg-slate-800 transition-colors whitespace-nowrap">
                                            {tech.icon && <span className="mr-1.5">{tech.icon}</span>}
                                            {tech.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Stats & CTA */}
                            <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col 2xl:flex-row items-start 2xl:items-center justify-between gap-6">
                                <div className="space-y-1 min-w-0">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                                            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-slate-800 text-xs">🕒</span>
                                            {stat.label}: <span className="text-white font-medium">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-3 sm:gap-4 w-full 2xl:w-auto 2xl:flex-row 2xl:justify-end min-w-0">
                                    <Button asChild className="bg-[#6467FF] hover:bg-[#43B2F9] text-white rounded-full px-6 sm:px-8 w-full 2xl:w-auto justify-center">
                                        <Link href={ctaLink}>
                                            <span className="block max-w-full truncate">{title}</span>
                                            <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" className="rounded-full border-white/10 text-white hover:bg-white/5 hover:text-white w-full 2xl:w-auto justify-center">
                                        <Link href={`/projects`}>
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                        </div>

                        {/* Image/Visual Column */}
                        <div className="sm:hidden flex-1 min-w-0 w-full max-w-lg">
                            <div className="relative aspect-[16/10] sm:aspect-[4/3] xl:aspect-[16/10] 2xl:aspect-square bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/5 p-4 sm:p-6 lg:p-8 flex items-center justify-center group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#43B2F9]/20 via-[#6467FF]/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />

                                {/* Placeholder Illustration Logic - if imageSrc provided use it, otherwise show generic icon/graphic */}
                                {imageSrc ? (
                                    <div className="relative w-full h-full">
                                        <div className="absolute -inset-4 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                                        {/* We will just use a colored div placeholder if real images aren't available to avoid broken images, 
                            but attempting to use Next Image if a src is passed */}
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={imageSrc} alt={title} className="w-full h-full object-contain relative z-0" />
                                    </div>
                                ) : (
                                    <div className="text-center relative z-10">
                                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#43B2F9] to-[#6467FF] rounded-full flex items-center justify-center mb-6 shadow-glow">
                                            <span className="text-6xl">✨</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
            </div>
        </section>
    );
}
