"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Github } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Mohsin Raza",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Visionary leader with 10+ years in tech innovation",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Hamza Ahmed",
    role: "CTO & Co-Founder",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Full-stack architect specializing in scalable systems",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Furqan Ali",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Award-winning designer crafting exceptional UX",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Munteeq Hassan",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Expert in modern web technologies and AI integration",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Johnson",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Product strategist driving innovation and growth",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "David Chen",
    role: "Senior Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Backend specialist with expertise in cloud architecture",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="h-full w-full bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(124,58,237,0.08),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto">
            Meet the talented individuals driving innovation and excellence at AlienMatrix
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-background/80 dark:bg-slate-900/80 border border-foreground/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-violet-500/30">
                {/* Image */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Linkedin className="w-5 h-5 text-violet-600" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Twitter className="w-5 h-5 text-violet-600" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Github className="w-5 h-5 text-violet-600" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-violet-600 dark:text-violet-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
