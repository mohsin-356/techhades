"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar } from "lucide-react";
const teamMembers = [
  {
    name: "Muhammad Mohsin Saeed",
    role: "Chief Executive Officer",
    department: "Development Department",
    bio: "Leading the development vision and technical strategy. Expert in full-stack development with extensive experience in modern web technologies and team leadership.",
    image: "/mohsin.jpg",
    objectPosition: "50% 16%",
    skills: ["Leadership", "Full-Stack", "Strategy", "Innovation"],
    social: {
      github: "https://github.com/mohsin",
      linkedin: "https://linkedin.com/in/mohsin",
      twitter: "https://twitter.com/mohsin",
      email: "mohsin@techhades.com"
    },
    location: "Pakistan",
    experience: "8+ Years"
  },
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
      email: "munteeq@techhades.com"
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
      email: "hassan@techhades.com"
    },
    location: "Pakistan",
    experience: "5+ Years"
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
      email: "hamza@techhades.com"
    },
    location: "Pakistan",
    experience: "4+ Years"
  }
];

export default function OurTeam() {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-indigo-500/5 via-violet-500/3 to-purple-500/5 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-200">
                {/* Enhanced border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" 
                     style={{ padding: '1px' }}>
                  <div className="h-full w-full rounded-2xl bg-slate-900/20 backdrop-blur-sm" />
                </div>

                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="relative mb-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden border-2 border-indigo-400/30 p-0.5"
                    >
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: (member as any).objectPosition || "50% 18%" }}
                      />
                    </motion.div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-indigo-400 font-medium mb-1">{member.role}</p>
                    <p className="text-xs text-violet-300 font-medium mb-2">{member.department}</p>
                    <p className="text-xs text-foreground/70 leading-relaxed">{member.bio}</p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-4 justify-center">
                    {member.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 text-xs bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Location & Experience */}
                  <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{member.experience}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <motion.a
                      href={member.social.github}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.15 }}
                      className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 hover:bg-indigo-500/30 transition-colors duration-150"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={member.social.linkedin}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.15 }}
                      className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 hover:bg-indigo-500/30 transition-colors duration-150"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={member.social.twitter}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.15 }}
                      className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 hover:bg-indigo-500/30 transition-colors duration-150"
                    >
                      <Twitter className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.social.email}`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.15 }}
                      className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 hover:bg-indigo-500/30 transition-colors duration-150"
                    >
                      <Mail className="w-4 h-4" />
                    </motion.a>
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
