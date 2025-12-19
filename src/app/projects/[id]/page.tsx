"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { allProjects, Project } from "../projectsData";
import { motion } from "framer-motion";
import Image from "next/image";
// import LottieGrid from "@/components/LottieGrid";

function NeonIllustration({ variant = 0 }: { variant?: number }) {
  const title = ["Code", "Analytics", "Mobile", "Cloud"][variant];
  return (
    <motion.div
      className="relative w-full h-full"
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute -inset-24 blur-2xl bg-[radial-gradient(450px_350px_at_20%_30%,rgba(168,85,247,0.35),transparent_60%),radial-gradient(450px_350px_at_80%_70%,rgba(59,130,246,0.28),transparent_60%)]" />
      <motion.div
        className="relative h-full w-full rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-md overflow-hidden"
        whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 180, damping: 16 }}
      >
        <div className="absolute top-0 inset-x-0 h-10 bg-slate-950/40 border-b border-white/10 flex items-center gap-2 px-4">
          <span className="w-2 h-2 rounded-full bg-pink-500/80" />
          <span className="w-2 h-2 rounded-full bg-purple-500/80" />
          <span className="w-2 h-2 rounded-full bg-blue-500/80" />
          <span className="ml-auto text-[11px] tracking-wide text-white/60">{title}</span>
        </div>
        <svg viewBox="0 0 800 450" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="neonStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <filter id="neoGlow">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g stroke="#ffffff" strokeOpacity="0.08">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`h-${i}`} x1="60" y1={80 + i * 32} x2="740" y2={80 + i * 32} />
            ))}
            {Array.from({ length: 16 }).map((_, i) => (
              <line key={`v-${i}`} x1={60 + i * 42} y1="80" x2={60 + i * 42} y2="360" />
            ))}
          </g>
          <g stroke="url(#neonStroke)" strokeWidth="3" fill="none" filter="url(#neoGlow)">
            <rect x="90" y="110" width="300" height="200" rx="12" />
            <polyline points="120,280 160,200 200,230 240,170 280,210 320,150 360,190" />
            <rect x="430" y="110" width="280" height="200" rx="12" />
            <line x1="460" y1="150" x2="680" y2="150" />
            <line x1="460" y1="190" x2="650" y2="190" />
            <line x1="460" y1="230" x2="600" y2="230" />
          </g>
        </svg>
        <motion.div
          className="absolute -right-8 -bottom-6 h-24 w-24 rounded-full bg-pink-500/40 blur-xl"
          animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-6 -top-8 h-24 w-24 rounded-full bg-blue-500/30 blur-xl"
          animate={{ x: [0, -8, 0], y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ProjectDetailPage() {
  const params = useParams();
  const project = allProjects.find((p: Project) => p.id === params.id);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link href="/projects" className="text-violet-500 hover:underline mt-4 inline-block">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const isAIProject = project.cat === "AI" || project.cat === "AI/ML" || (project.domain?.toLowerCase().includes("ai") ?? false);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link href="/projects" className="text-violet-500 hover:underline mb-8 inline-block">
          ← Back to Projects
        </Link>

        {/* About Section with Content Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="pr-about-content">
            <h2 className="about-project text-4xl font-bold mb-8">
              About <span className="text-violet-500">{project.title}</span>
            </h2>
            <div className="mt-8">
              <p className="pr-about-text text-foreground/80 leading-relaxed">
                {project.aboutProject}
              </p>
            </div>

            <h3 className="pr-about-sub-heading text-2xl font-semibold mt-12 mb-4">Problem</h3>
            <div>
              <p className="pr-about-text text-foreground/80 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <h3 className="pr-about-sub-heading text-2xl font-semibold mt-8 mb-4">Solution</h3>
            <div>
              <p className="pr-about-text text-foreground/80 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Single Image on Right */}
          <div className="pr-about-image relative">
            <div className="sticky top-8">
              <img
                className="uploaded-image w-full h-auto rounded-xl shadow-2xl"
                src={project.image}
                alt={project.title}
              />
            </div>
          </div>
        </div>

        {/* Process Icons Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "💻", label: "Platform", value: project.platform || project.cat },
              { icon: "🌐", label: "Domain", value: project.domain || "Web Application" },
              { icon: "⏱️", label: "Duration", value: project.duration || "Custom Timeline" },
              { icon: "⚡", label: "Process", value: project.process || "Agile" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-background/80 border border-foreground/10 rounded-xl hover:border-violet-500/40 transition-all"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-violet-500/10 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
                <p className="text-sm text-foreground/60 mb-1">{item.label}</p>
                <p className="text-lg font-semibold text-violet-500">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Tech Stack</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {project.stack.map((tech: string) => (
              <span
                key={tech}
                className="px-6 py-3 bg-violet-500/10 border border-violet-500/20 rounded-full text-sm font-medium hover:bg-violet-500/20 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features - Half Image, Half Text */}
        {project.features && (
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-12 text-center">Key <span className="text-violet-500">Features</span></h3>
            <div className="space-y-8">
              {project.features.map((feature: { title: string; desc: string }, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${idx % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Image Mockup */}
                  <div className={`relative ${idx % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-indigo-500/20 border border-violet-500/20">
                      <div className="absolute inset-0">
                        <Image
                          src={project.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                          unoptimized={/\.(gif|webp)$/i.test(project.image) || project.image.includes('/projectgifs/')}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={idx % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                    <p className="text-foreground/70 leading-relaxed text-lg">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Our Technologies / AI & Automation Stack */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center">{isAIProject ? (
            <>AI & Automation — <span className="text-violet-500">Our Technologies &amp; Stack</span></>
          ) : (
            <>Our <span className="text-violet-500">Technologies</span></>
          )}</h3>

          {/* Scrolling Marquee */}
          <div className="overflow-hidden py-8 bg-foreground/5 rounded-xl">
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: [0, -1400] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {(isAIProject
                ? [
                    "Python",
                    "✱",
                    "LangChain",
                    "✱",
                    "OpenAI GPT-4",
                    "✱",
                    "Whisper",
                    "✱",
                    "FAISS",
                    "✱",
                    "PyPDF2",
                    "✱",
                    "TTS",
                    "✱",
                    "Streamlit",
                    "✱",
                    "FastAPI",
                    "✱",
                    "Docker",
                  ]
                : [
                    "Figma",
                    "✱",
                    "Miro",
                    "✱",
                    "Uizard",
                    "✱",
                    "Photoshop",
                    "✱",
                    "React Native",
                    "✱",
                    "Flutter",
                    "✱",
                    "Firebase",
                    "✱",
                    "Node.js",
                    "✱",
                  ]).map((item, i) => (
                <span
                  key={i}
                  className={`text-2xl font-bold ${item === "✱" ? "text-violet-400" : "text-foreground"}`}
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Technology Categories */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {isAIProject ? (
              <>
                <div className="p-6 bg-background/80 border border-foreground/10 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-violet-500">Core AI Stack</h4>
                  <div className="space-y-2">
                    {["Python", "LangChain", "OpenAI GPT-4", "OpenAI Embeddings", "FAISS", "Whisper", "PyPDF2", "TTS"].map((tech) => (
                      <div key={tech} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                        <span className="text-foreground/70">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-background/80 border border-foreground/10 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-violet-500">RAG Pipeline</h4>
                  <div className="space-y-2">
                    {["Smart Chunking", "Overlap Context", "Embeddings", "Vector Search", "Re-ranking", "Context Injection", "Citations"].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                        <span className="text-foreground/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-background/80 border border-foreground/10 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-violet-500">Serving &amp; Infra</h4>
                  <div className="space-y-2">
                    {["Streamlit", "FastAPI", "Docker", "AWS S3", "Monitoring"].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                        <span className="text-foreground/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="p-6 bg-background/80 border border-foreground/10 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-violet-500">UI/UX Design Tools</h4>
                  <div className="space-y-2">
                    {["Figma", "Miro", "Uizard", "Photoshop"].map((tech) => (
                      <div key={tech} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                        <span className="text-foreground/70">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-background/80 border border-foreground/10 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-violet-500">Mobile App Stack</h4>
                  <div className="space-y-2">
                    {["React Native", "Flutter", "Firebase", "Node.js"].map((tech) => (
                      <div key={tech} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                        <span className="text-foreground/70">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-background/80 border border-foreground/10 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-violet-500">Product Experience</h4>
                  <div className="space-y-2">
                    {["User Flows", "Interactive Prototypes", "Design Systems", "Usability Testing"].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                        <span className="text-foreground/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
