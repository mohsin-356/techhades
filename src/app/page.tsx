"use client";

import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import TechGrid from "@/components/home/TechGrid";
import Testimonials from "@/components/home/Testimonials";
import Cta from "@/components/home/Cta";
import { SectionDivider } from "@/components/ui/section-divider";

// Performance optimized variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  return (
    <motion.div 
      className="relative gpu-accelerated"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={sectionVariants} className="smooth-rendering">
        <Hero />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <SectionDivider variant="wave" animated />
      </motion.div>
      
      <motion.div variants={sectionVariants} className="smooth-rendering">
        <ServicesOverview />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <SectionDivider variant="diagonal" animated />
      </motion.div>
      
      <motion.div variants={sectionVariants} className="smooth-rendering">
        <TechGrid />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <SectionDivider variant="curve" animated />
      </motion.div>
      
      <motion.div variants={sectionVariants} className="smooth-rendering">
        <Testimonials />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <SectionDivider variant="wave" animated />
      </motion.div>
      
      <motion.div variants={sectionVariants} className="smooth-rendering">
        <Cta />
      </motion.div>
    </motion.div>
  );
}
