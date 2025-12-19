"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const COUNTRIES = [
  { name: "United Kingdom", code: "gb", flag: "https://flagcdn.com/w80/gb.png" },
  { name: "Germany", code: "de", flag: "https://flagcdn.com/w80/de.png" },
  { name: "Netherlands", code: "nl", flag: "https://flagcdn.com/w80/nl.png" },
  { name: "UAE", code: "ae", flag: "https://flagcdn.com/w80/ae.png" },
  { name: "United States", code: "us", flag: "https://flagcdn.com/w80/us.png" },
  { name: "Switzerland", code: "ch", flag: "https://flagcdn.com/w80/ch.png" },
  { name: "Spain", code: "es", flag: "https://flagcdn.com/w80/es.png" },
  { name: "France", code: "fr", flag: "https://flagcdn.com/w80/fr.png" },
  { name: "Canada", code: "ca", flag: "https://flagcdn.com/w80/ca.png" },
  { name: "Denmark", code: "dk", flag: "https://flagcdn.com/w80/dk.png" },
  { name: "Belgium", code: "be", flag: "https://flagcdn.com/w80/be.png" },
  { name: "Japan", code: "jp", flag: "https://flagcdn.com/w80/jp.png" },
  { name: "Australia", code: "au", flag: "https://flagcdn.com/w80/au.png" },
  { name: "Norway", code: "no", flag: "https://flagcdn.com/w80/no.png" },
  { name: "Ireland", code: "ie", flag: "https://flagcdn.com/w80/ie.png" },
  { name: "Singapore", code: "sg", flag: "https://flagcdn.com/w80/sg.png" },
];

// Location markers for the map (approximate positions in percentage)
const LOCATIONS = [
  { left: "15%", top: "30%" }, // USA/Canada
  { left: "22%", top: "45%" }, // USA West
  { left: "28%", top: "20%" }, // Canada
  { left: "35%", top: "35%" }, // Europe West
  { left: "38%", top: "32%" }, // UK
  { left: "42%", top: "28%" }, // Scandinavia
  { left: "45%", top: "35%" }, // Central Europe
  { left: "48%", top: "38%" }, // Eastern Europe
  { left: "52%", top: "42%" }, // Middle East
  { left: "65%", top: "50%" }, // India
  { left: "72%", top: "45%" }, // Southeast Asia
  { left: "78%", top: "65%" }, // Australia
];

export default function GlobalClients() {
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We serve clients globally
          </h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto">
            Trusted by businesses across continents, delivering excellence worldwide
          </p>
        </motion.div>
        
        {/* Countries Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 mb-16"
        >
          {COUNTRIES.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-foreground/5 transition-colors"
            >
              <div className="relative w-12 h-8 rounded overflow-hidden shadow-md">
                <Image
                  src={country.flag}
                  alt={country.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs sm:text-sm text-foreground/70 text-center font-medium">
                {country.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 border border-foreground/10"
        >
          {/* World Map Background Image */}
          <img 
            src="/components/bgtestimonial.png" 
            alt="World Map" 
            className="w-full h-full object-cover opacity-75"
          />

          {/* Location Markers */}
          {LOCATIONS.map((location, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
              className="absolute"
              style={{ left: location.left, top: location.top }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="relative"
              >
                {/* Outer pulse ring */}
                <motion.div
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="absolute -inset-2 rounded-full bg-purple-500"
                />
                
                {/* Pin marker */}
                <div className="relative w-6 h-6 bg-purple-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Map overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
