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
        <section className="py-16 sm:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-zinc-950 border border-white/5 rounded-3xl p-6 sm:p-12 lg:p-16 relative backdrop-blur-sm overflow-hidden">
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}>

                        {/* Content Column */}
                        <div className="flex-1 space-y-8 relative z-10">
                            {badgeText && (
                                <Badge variant="glow" className="mb-2">
                                    {badgeText} ✨
                                </Badge>
                            )}

                            <div>
                                {/* Primary Section Heading (title) */}
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-xl sm:text-2xl font-semibold text-white/90 mb-2"
                                >
                                    {title}
                                </motion.h3>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-4 leading-tight"
                                >
                                    {tagline}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-lg text-slate-300 leading-relaxed"
                                >
                                    {description}
                                </motion.p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-purple-400 mb-4 flex items-center gap-2">
                                        <span className="w-1 h-4 bg-purple-500 rounded-full" /> FEATURE TAGS
                                    </h4>
                                    <ul className="space-y-3">
                                        {tags.map((tag, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                                                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-purple-400 mb-4 opacity-0 sm:opacity-100 hidden sm:block">&nbsp;</h4> {/* Spacer for alignment, hidden on mobile */}
                                    <ul className="space-y-3">
                                        {features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-purple-400" />
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
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech, i) => (
                                        <Badge key={i} variant="secondary" className="bg-slate-900/50 border-white/10 text-slate-300 px-3 py-1.5 hover:bg-slate-800 transition-colors">
                                            {tech.icon && <span className="mr-1.5">{tech.icon}</span>}
                                            {tech.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Stats & CTA */}
                            <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                <div className="space-y-1">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                                            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-slate-800 text-xs">🕒</span>
                                            {stat.label}: <span className="text-white font-medium">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
                                        <Link href={ctaLink}>
                                            {title} <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" className="rounded-full border-white/10 text-white hover:bg-white/5 hover:text-white">
                                        <Link href={`/projects`}>
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                        </div>

                        {/* Image/Visual Column */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none">
                            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/5 p-8 flex items-center justify-center group">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />

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
                                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-glow">
                                            <span className="text-6xl">✨</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
