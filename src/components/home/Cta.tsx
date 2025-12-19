"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import anime from "animejs";
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, Code2, Sparkles } from "lucide-react";
const teamMembers = [
  {
    name: "Munteeq Manzoor",
    role: "Chief Business Officer",
    department: "Marketing Department",
    bio: "Driving business growth and marketing strategies. Specializes in digital marketing, brand development, and client relationship management.",
    image: "/munteeq.jpg",
    objectPosition: "50% 20%",
    skills: ["Marketing", "Strategy", "Branding", "Growth"],
    social: {
      github: "https://github.com/munteeq",
      linkedin: "https://linkedin.com/in/munteeq",
      twitter: "https://twitter.com/munteeq",
      email: "munteeq@alienmatrix.com"
    },
    location: "Pakistan",
    experience: "6+ Years"
  },
  {
    name: "Hassan Mughal",
    role: "Project Manager",
    department: "Designing Department",
    bio: "Managing design projects and creative workflows. Expert in UI/UX design, project coordination, and delivering exceptional user experiences.",
    image: "/hassan.jpg",
    objectPosition: "50% 12%",
    skills: ["Project Management", "UI/UX", "Design", "Coordination"],
    social: {
      github: "https://github.com/hassan",
      linkedin: "https://linkedin.com/in/hassan",
      twitter: "https://twitter.com/hassan",
      email: "hassan@alienmatrix.com"
    },
    location: "Pakistan",
    experience: "5+ Years"
  },
  {
    name: "Muhammad Mohsin Saeed",
    role: "Chief Executive Officer",
    department: "Development Department",
    bio: "Leading the development vision and technical strategy. Expert in full-stack development with extensive experience in modern web technologies and team leadership.",
    image: "/mohsin.jpg",
    objectPosition: "50% 16%",
    skills: ["Leadership", "Full-Stack", "Strategy", "Innovation"],
    social: {
      github: "https://github.com/mohsin-356",
      linkedin: "https://www.linkedin.com/in/muhammad-mohsin-saeed-4ab1a0219/",
      twitter: "https://x.com/mohsins88202110",
      email: "mohsinsaeed356@gmail.com"
    },
    location: "Pakistan",
    experience: "8+ Years"
  },
  {
    name: "Syed Ali Humza",
    role: "Project Manager",
    department: "AI Department",
    bio: "Leading AI initiatives and machine learning projects. Specializes in artificial intelligence, automation, and innovative AI-driven solutions.",
    image: "/hamza.jpg",
    objectPosition: "50% 18%",
    skills: ["AI/ML", "Project Management", "Automation", "Innovation"],
    social: {
      github: "https://github.com/hamza",
      linkedin: "https://linkedin.com/in/hamza",
      twitter: "https://twitter.com/hamza",
      email: "hamza@alienmatrix.com"
    },
    location: "Pakistan",
    experience: "4+ Years"
  },
  {
    name: "Muhammad Furqan",
    role: "UI/UX Designer",
    department: "Designing Department",
    bio: "Creating intuitive and visually stunning user experiences. Expert in user interface design, user research, and design systems.",
    image: "/furqan.jpg",
    objectPosition: "50% 18%",
    skills: ["UI/UX", "Figma", "Design Systems", "Prototyping"],
    social: {
      github: "https://github.com/furqan",
      linkedin: "https://linkedin.com/in/furqan",
      twitter: "https://twitter.com/furqan",
      email: "furqan@alienmatrix.com"
    },
    location: "Pakistan",
    experience: "3+ Years"
  }
];

export default function OurTeam() {
  const teamGridRef = useRef<HTMLDivElement>(null);
  const codeRainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Anime.js: Floating code particles
    if (codeRainRef.current) {
      const particles = codeRainRef.current.querySelectorAll('.code-particle');
      anime({
        targets: particles,
        translateY: () => anime.random(-30, 30),
        translateX: () => anime.random(-20, 20),
        opacity: [0.2, 0.8, 0.2],
        scale: [0.8, 1.2, 0.8],
        duration: () => anime.random(3000, 5000),
        delay: anime.stagger(100),
        loop: true,
        easing: 'easeInOutQuad',
      });
    }

    // Anime.js: Team cards staggered entrance
    if (teamGridRef.current) {
      const cards = teamGridRef.current.querySelectorAll('.team-card');
      anime({
        targets: cards,
        translateY: [60, 0],
        opacity: [0, 1],
        scale: [0.9, 1],
        rotateX: [45, 0],
        duration: 1200,
        delay: anime.stagger(150, { start: 300 }),
        easing: 'spring(1, 80, 10, 0)',
      });
    }

    // Anime.js: Circuit line animations
    anime({
      targets: '.circuit-line',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 2000,
      delay: anime.stagger(200),
      loop: true,
      direction: 'alternate',
    });
  }, []);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900"></div>
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-violet-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 -right-32 w-72 h-72 bg-indigo-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Matrix-Style Dot Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99,102,241,0.6) 2px, transparent 0)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Secondary Matrix Grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139,92,246,0.8) 1px, transparent 0)`,
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Matrix Rain Effect - Fixed timing for SSR */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { position: 7, duration: 3.2, delay: 0.5 },
          { position: 14, duration: 4.1, delay: 1.2 },
          { position: 21, duration: 2.8, delay: 0.3 },
          { position: 28, duration: 3.7, delay: 1.8 },
          { position: 35, duration: 4.5, delay: 0.8 },
          { position: 42, duration: 3.1, delay: 1.5 },
          { position: 49, duration: 4.2, delay: 0.2 },
          { position: 56, duration: 2.9, delay: 1.1 },
          { position: 63, duration: 3.8, delay: 0.7 },
          { position: 70, duration: 4.3, delay: 1.6 },
          { position: 77, duration: 3.4, delay: 0.4 },
          { position: 84, duration: 4.0, delay: 1.3 },
          { position: 91, duration: 3.6, delay: 0.9 },
          { position: 98, duration: 2.7, delay: 1.7 },
          { position: 5, duration: 4.4, delay: 0.6 }
        ].map((line, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent"
            style={{
              left: `${line.position}%`,
              height: '100%',
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              delay: line.delay,
            }}
          />
        ))}
      </div>
      
      {/* Floating Particles - Fixed positions for SSR */}
      <div className="absolute inset-0">
        {[
          { left: 15, top: 20, duration: 4, delay: 0 },
          { left: 85, top: 30, duration: 3.5, delay: 0.5 },
          { left: 25, top: 70, duration: 4.5, delay: 1 },
          { left: 75, top: 15, duration: 3, delay: 1.5 },
          { left: 45, top: 85, duration: 4, delay: 0.3 },
          { left: 65, top: 45, duration: 3.8, delay: 0.8 },
          { left: 10, top: 60, duration: 3.2, delay: 1.2 },
          { left: 90, top: 75, duration: 4.2, delay: 0.2 },
          { left: 35, top: 25, duration: 3.6, delay: 0.7 },
          { left: 55, top: 90, duration: 4.8, delay: 1.8 },
          { left: 20, top: 40, duration: 3.4, delay: 0.4 },
          { left: 80, top: 55, duration: 4.6, delay: 1.4 },
          { left: 50, top: 10, duration: 3.3, delay: 0.9 },
          { left: 70, top: 80, duration: 4.1, delay: 1.6 },
          { left: 30, top: 50, duration: 3.7, delay: 0.6 },
          { left: 60, top: 35, duration: 4.3, delay: 1.1 },
          { left: 40, top: 65, duration: 3.9, delay: 0.1 },
          { left: 85, top: 20, duration: 4.4, delay: 1.3 },
          { left: 15, top: 75, duration: 3.1, delay: 0.5 },
          { left: 95, top: 45, duration: 4.7, delay: 1.7 }
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-display text-foreground mb-4">
            Meet Our <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Passionate professionals dedicated to bringing your digital vision to life with cutting-edge technology and creative excellence
          </p>
        </motion.div>

        {/* Tech-themed Code Rain Background - Fixed positions to avoid hydration issues */}
        <div ref={codeRainRef} className="absolute inset-0 pointer-events-none">
          {[
            { left: 5, top: 10, symbol: '</>' },
            { left: 15, top: 25, symbol: '{}' },
            { left: 25, top: 15, symbol: '()' },
            { left: 35, top: 35, symbol: '[]' },
            { left: 45, top: 20, symbol: '::' },
            { left: 55, top: 40, symbol: '->' },
            { left: 65, top: 10, symbol: '=>' },
            { left: 75, top: 30, symbol: '&&' },
            { left: 85, top: 18, symbol: '||' },
            { left: 95, top: 28, symbol: '==' },
            { left: 10, top: 50, symbol: '</>' },
            { left: 20, top: 65, symbol: '{}' },
            { left: 30, top: 55, symbol: '()' },
            { left: 40, top: 75, symbol: '[]' },
            { left: 50, top: 60, symbol: '::' },
            { left: 60, top: 80, symbol: '->' },
            { left: 70, top: 50, symbol: '=>' },
            { left: 80, top: 70, symbol: '&&' },
            { left: 90, top: 58, symbol: '||' },
            { left: 12, top: 88, symbol: '==' },
            { left: 8, top: 42, symbol: '</>' },
            { left: 18, top: 72, symbol: '{}' },
            { left: 28, top: 38, symbol: '()' },
            { left: 38, top: 82, symbol: '[]' },
            { left: 48, top: 45, symbol: '::' },
            { left: 58, top: 15, symbol: '->' },
            { left: 68, top: 85, symbol: '=>' },
            { left: 78, top: 52, symbol: '&&' },
            { left: 88, top: 35, symbol: '||' },
            { left: 92, top: 78, symbol: '==' },
          ].map((particle, i) => (
            <div
              key={i}
              className="code-particle absolute text-indigo-400/20 text-xs font-mono"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
            >
              {particle.symbol}
            </div>
          ))}
        </div>

        {/* Unified Team Grid with CEO Highlight */}
        <div ref={teamGridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className={`team-card group relative ${
                member.role === 'Chief Executive Officer'
                  ? 'lg:col-span-3 xl:col-span-1 xl:row-span-1 lg:row-start-1 lg:col-start-2'
                  : ''
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className={`relative h-full rounded-2xl overflow-hidden transition-all duration-300 shadow-lg dark:shadow-none ${
                member.role === 'Chief Executive Officer'
                  ? 'bg-gradient-to-br from-indigo-100 via-violet-100 to-purple-100 dark:from-indigo-500/15 dark:via-violet-500/12 dark:to-purple-500/15 border-2 border-indigo-300 dark:border-indigo-400/40 hover:border-violet-500 dark:hover:border-violet-400/60'
                  : member.role === 'Chief Business Officer'
                  ? 'bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 dark:from-violet-500/10 dark:via-purple-500/8 dark:to-indigo-500/10 border-2 border-violet-300 dark:border-violet-400/35 hover:border-purple-500 dark:hover:border-purple-400/55'
                  : 'bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-indigo-500/5 dark:via-violet-500/3 dark:to-purple-500/5 border border-indigo-200 dark:border-indigo-500/20 hover:border-violet-400 dark:hover:border-violet-500/40'
              }`}>
                {/* Tech Circuit Pattern Overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-5" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`circuit-${index}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <path className="circuit-line" d="M10,10 L50,10 L50,50 L90,50" fill="none" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="50" cy="10" r="2" fill="currentColor"/>
                      <circle cx="50" cy="50" r="2" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#circuit-${index})`} className="text-indigo-600 dark:text-indigo-400"/>
                </svg>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-violet-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:via-violet-500/8 group-hover:to-purple-500/10 transition-all duration-500"></div>
                
                <div className="relative z-10 p-6">
                  {/* CEO Badge */}
                  {member.role === 'Chief Executive Officer' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: 'spring' }}
                      className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg"
                    >
                      <Sparkles className="w-3 h-3" />
                      CEO
                    </motion.div>
                  )}
                  
                  {/* CBO Badge */}
                  {member.role === 'Chief Business Officer' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: 'spring' }}
                      className="absolute top-4 right-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg"
                    >
                      <Code2 className="w-3 h-3" />
                      CBO
                    </motion.div>
                  )}

                  {/* COO Badge for Muhammad Furqan */}
                  {(member.name === 'Muhammad Furqan' || member.role === 'Chief Operating Officer') && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: 'spring' }}
                      className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg"
                    >
                      <Code2 className="w-3 h-3" />
                      COO
                    </motion.div>
                  )}

                  {/* Profile Image with Tech Border */}
                  <div className="relative mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                      transition={{ duration: 0.3 }}
                      className={`mx-auto rounded-full overflow-hidden border-2 p-0.5 relative ${
                        member.role === 'Chief Executive Officer'
                          ? 'w-28 h-28 border-indigo-400/50 shadow-lg shadow-indigo-500/30'
                          : member.role === 'Chief Business Officer'
                          ? 'w-28 h-28 border-violet-400/50 shadow-lg shadow-violet-500/30'
                          : 'w-24 h-24 border-indigo-400/30'
                      }`}
                    >
                      {/* Animated Border Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                          boxShadow: [
                            '0 0 0 0 rgba(99, 102, 241, 0)',
                            '0 0 0 4px rgba(99, 102, 241, 0.1)',
                            '0 0 0 0 rgba(99, 102, 241, 0)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                        style={{ objectPosition: member.objectPosition || '50% 18%' }}
                      />
                    </motion.div>
                    
                    {/* Status Indicator */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </motion.div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center space-y-2">
                    <h3 className={`font-bold text-slate-900 dark:text-foreground ${
                      member.role === 'Chief Executive Officer' || member.role === 'Chief Business Officer' || member.role === 'Chief Operating Officer' || member.name === 'Muhammad Furqan' ? 'text-lg' : 'text-base'
                    }`}>
                      {member.name}
                    </h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{member.role}</p>
                    <p className="text-[10px] text-violet-600 dark:text-violet-300">{member.department}</p>
                    
                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-1 justify-center pt-2">
                      {member.skills.slice(0, 3).map((skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="px-2 py-0.5 text-[10px] bg-indigo-200 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-300 dark:border-indigo-500/25"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Quick Stats */}
                    <div className="flex items-center justify-center gap-3 text-[10px] text-slate-600 dark:text-foreground/60 pt-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {member.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {member.experience}
                      </div>
                    </div>

                    {/* Social Links - Show on Hover */}
                    <div className="flex justify-center gap-2 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={member.social.github}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="w-7 h-7 rounded-full bg-indigo-200 dark:bg-indigo-500/20 hover:bg-indigo-300 dark:hover:bg-indigo-500/30 flex items-center justify-center text-indigo-700 dark:text-indigo-400 transition-colors"
                      >
                        <Github className="w-3 h-3" />
                      </motion.a>
                      <motion.a
                        href={member.social.linkedin}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="w-7 h-7 rounded-full bg-indigo-200 dark:bg-indigo-500/20 hover:bg-indigo-300 dark:hover:bg-indigo-500/30 flex items-center justify-center text-indigo-700 dark:text-indigo-400 transition-colors"
                      >
                        <Linkedin className="w-3 h-3" />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="w-7 h-7 rounded-full bg-indigo-200 dark:bg-indigo-500/20 hover:bg-indigo-300 dark:hover:bg-indigo-500/30 flex items-center justify-center text-indigo-700 dark:text-indigo-400 transition-colors"
                      >
                        <Twitter className="w-3 h-3" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="w-7 h-7 rounded-full bg-indigo-200 dark:bg-indigo-500/20 hover:bg-indigo-300 dark:hover:bg-indigo-500/30 flex items-center justify-center text-indigo-700 dark:text-indigo-400 transition-colors"
                      >
                        <Mail className="w-3 h-3" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
