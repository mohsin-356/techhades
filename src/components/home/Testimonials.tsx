"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Artem Riabchuk",
    role: "Senior Web Developer, SoftwareDevelopment.co",
    country: "UK",
    flagUrl: "https://flagcdn.com/w320/gb.png",
    text: "Working with AlienMatrix was a wonderful experience. They provide quality services and solutions with a proactive approach to improvements. We rely on the team and recommend them to everyone.",
  },
  {
    id: 2,
    name: "Janie Mathews",
    role: "Business Development Manager, LimeUp",
    country: "Germany",
    flagUrl: "https://flagcdn.com/w320/de.png",
    text: "The team at AlienMatrix delivered beyond our expectations. Their technical expertise and dedication to quality made our project a huge success. Highly recommended!",
  },
  {
    id: 3,
    name: "Ian Greenhalgh",
    role: "Managing Director",
    country: "Ireland",
    flagUrl: "https://flagcdn.com/w320/ie.png",
    text: "Outstanding work! AlienMatrix transformed our vision into reality with precision and creativity. Their communication throughout the project was excellent.",
  },
  {
    id: 4,
    name: "Faisal Altaf",
    role: "VP Operations, GoodCore",
    country: "Pakistan",
    flagUrl: "https://flagcdn.com/w320/pk.png",
    text: "Professional, efficient, and innovative. AlienMatrix helped us scale our platform seamlessly. Their technical skills are top-notch and they're a pleasure to work with.",
  },
  {
    id: 5,
    name: "Ammar Suleman",
    role: "COO, Abu Sufyan Furniture",
    country: "UAE",
    flagUrl: "https://flagcdn.com/w320/ae.png",
    text: "AlienMatrix exceeded all our expectations. Their attention to detail and commitment to excellence is unmatched. We couldn't have asked for a better partner.",
  },
  {
    id: 6,
    name: "Robert Mitchell",
    role: "Founder, TechBridge Solutions",
    country: "USA",
    flagUrl: "https://flagcdn.com/w320/us.png",
    text: "Exceptional service from start to finish. AlienMatrix helped us modernize our entire tech stack. Their professionalism and expertise are unmatched.",
  },
  {
    id: 7,
    name: "Sophie Laurent",
    role: "Marketing Director, Digital Innovations",
    country: "France",
    flagUrl: "https://flagcdn.com/w320/fr.png",
    text: "We've worked with many development teams, but AlienMatrix stands out. Their attention to detail and commitment to deadlines is impressive.",
  },
  {
    id: 8,
    name: "James Thompson",
    role: "Operations Manager, CloudTech Ltd",
    country: "UK",
    flagUrl: "https://flagcdn.com/w320/gb.png",
    text: "AlienMatrix transformed our business operations with their innovative solutions. They understood our needs perfectly and delivered exceptional results.",
  },
  {
    id: 9,
    name: "Ahmed Al-Mansoori",
    role: "CEO, Digital Horizons",
    country: "Qatar",
    flagUrl: "https://flagcdn.com/w320/qa.png",
    text: "Working with AlienMatrix has been a game-changer for our company. Their expertise in modern technologies and professional approach made all the difference.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Map/background layer (replace src with your asset when provided) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="h-full w-full bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(124,58,237,0.10),transparent_60%)]"/>
        <div
          className="absolute inset-0 opacity-[0.06] bg-center bg-cover"
          style={{ backgroundImage: "url('/sectionandlogo.png')" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Speech bubble testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={TESTIMONIALS[activeIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-foreground/10 shadow-xl p-6 sm:p-8"
              >
                <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {TESTIMONIALS[activeIndex].text}
                </p>

                {/* bubble tail */}
                <div className="absolute -bottom-4 left-10 h-4 w-4 rotate-45 bg-white/90 dark:bg-slate-900/90 border-b border-r border-foreground/10" />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${TESTIMONIALS[activeIndex].id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-6 flex items-center gap-3"
              >
                <div className="relative h-14 w-14 rounded-full ring-2 ring-purple-500 overflow-hidden">
                  <Image
                    src={TESTIMONIALS[activeIndex].flagUrl}
                    alt={TESTIMONIALS[activeIndex].country}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-semibold text-foreground">
                    {TESTIMONIALS[activeIndex].name}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {TESTIMONIALS[activeIndex].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: World map with geographic flag placement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-[600px] h-[400px]"
          >
            {/* Card background with image (75% opacity) */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 dark:from-slate-950/90 dark:to-slate-900/90 border border-violet-500/30 overflow-hidden backdrop-blur-sm">
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-75"
                style={{ backgroundImage: "url('/components/bgtestimonial.png')" }}
              />
              {/* Glow effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-600/10 via-transparent to-purple-600/10" />
            </div>

            {/* Flags positioned geographically on the map */}
            {/* UK - Left side, upper middle (Europe) */}
            <Avatar
              src={TESTIMONIALS[0].flagUrl}
              alt={TESTIMONIALS[0].country}
              className="left-[28%] top-[25%]"
              onClick={() => setActiveIndex(0)}
              isActive={activeIndex === 0}
              index={0}
            />
            {/* Germany - Europe, slightly right of UK */}
            <Avatar
              src={TESTIMONIALS[1].flagUrl}
              alt={TESTIMONIALS[1].country}
              className="left-[35%] top-[28%]"
              onClick={() => setActiveIndex(1)}
              isActive={activeIndex === 1}
              index={1}
            />
            {/* Ireland - Left of UK */}
            <Avatar
              src={TESTIMONIALS[2].flagUrl}
              alt={TESTIMONIALS[2].country}
              className="left-[24%] top-[27%]"
              onClick={() => setActiveIndex(2)}
              isActive={activeIndex === 2}
              index={2}
            />
            {/* Pakistan - South Asia, right side middle */}
            <Avatar
              src={TESTIMONIALS[3].flagUrl}
              alt={TESTIMONIALS[3].country}
              className="right-[28%] top-[38%]"
              onClick={() => setActiveIndex(3)}
              isActive={activeIndex === 3}
              index={3}
            />
            {/* UAE - Middle East, center-right */}
            <Avatar
              src={TESTIMONIALS[4].flagUrl}
              alt={TESTIMONIALS[4].country}
              className="left-[48%] top-[42%]"
              onClick={() => setActiveIndex(4)}
              isActive={activeIndex === 4}
              index={4}
            />
            {/* USA - Left side, center */}
            <Avatar
              src={TESTIMONIALS[5].flagUrl}
              alt={TESTIMONIALS[5].country}
              className="left-[12%] top-[35%]"
              onClick={() => setActiveIndex(5)}
              isActive={activeIndex === 5}
              index={5}
              size={68}
            />
            {/* France - Europe, near Germany */}
            <Avatar
              src={TESTIMONIALS[6].flagUrl}
              alt={TESTIMONIALS[6].country}
              className="left-[32%] top-[32%]"
              onClick={() => setActiveIndex(6)}
              isActive={activeIndex === 6}
              index={6}
            />
            {/* UK (James) - Same as first UK */}
            <Avatar
              src={TESTIMONIALS[7].flagUrl}
              alt={TESTIMONIALS[7].country}
              className="left-[30%] top-[23%]"
              onClick={() => setActiveIndex(7)}
              isActive={activeIndex === 7}
              index={7}
            />
            {/* Qatar - Middle East, near UAE */}
            <Avatar
              src={TESTIMONIALS[8].flagUrl}
              alt={TESTIMONIALS[8].country}
              className="left-[52%] top-[44%]"
              onClick={() => setActiveIndex(8)}
              isActive={activeIndex === 8}
              index={8}
            />
          </motion.div>
        </div>

        {/* CTA under testimonials */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-white shadow-lg hover:opacity-95">
            Start your project
          </Link>
          <span className="text-sm text-foreground/60">98% client satisfaction • 500+ projects</span>
        </div>
      </div>
    </section>
  );
}

function Avatar({
  src,
  alt,
  className,
  size = 56,
  onClick,
  isActive,
  index,
}: {
  src: string;
  alt: string;
  className?: string;
  size?: number;
  onClick?: () => void;
  isActive?: boolean;
  index?: number;
}) {
  const activeSize = isActive ? size * 1.3 : size;
  
  return (
    <motion.div
      className={`absolute ${className || ""} cursor-pointer`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: isActive ? 1.15 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ zIndex: isActive ? 20 : 10 }}
    >
      <motion.div
        className={`rounded-full overflow-hidden shadow-lg ${
          isActive ? "ring-4 ring-purple-500" : "ring-2 ring-white/60"
        }`}
        style={{
          width: size,
          height: size,
        }}
        animate={{
          boxShadow: isActive
            ? "0 10px 40px rgba(168, 85, 247, 0.5)"
            : "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
}
