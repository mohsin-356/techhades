"use client";

import ServicePageTemplate, { ServiceConfig } from "@/app/services/ServicePageTemplate";


const aiAutomationConfig: ServiceConfig = {
  slug: "ai-automation",
  badgeLabel: "AI & Automation",
  heading: "AI & AUTOMATION SERVICES",
  tagline: "Workflows, agents, and intelligent integrations.",
  description: "Automate your business processes with AI-powered solutions. From intelligent workflows to autonomous agents, we help you work smarter and faster with cutting-edge automation technology.",
  heroTags: ["AI Agents", "Workflow Automation", "Process Optimization", "Intelligent Bots", "Data Processing", "Integration"],
  processTitle: "Our AI & Automation Process",
  processSubtitle: "We identify automation opportunities and implement intelligent solutions that drive efficiency",
  steps: [
    { number: 1, title: "Discovery & Planning", desc: "We begin by understanding your business workflows and automation goals. Through collaborative discussions, we define project requirements, timelines, and resources." },
    { number: 2, title: "Design & Prototyping", desc: "Our team designs efficient automation flows and system architectures that reflect the operational journey and optimize process efficiency." },
    { number: 3, title: "Development & Coding", desc: "We build using latest automation tools like n8n, Make, and Python ensuring robust, secure and performant automated workflows with clean logic." },
    { number: 4, title: "Testing & Quality Assurance", desc: "We rigorously test workflows, error handling, and data integrity using automated and manual testing techniques to ensure flawless execution." },
    { number: 5, title: "Launch & Deployment", desc: "We deploy with proper monitoring triggers, security protocols, and reliability checks for zero-downtime activation and maximum efficiency." },
    { number: 6, title: "Post-Launch Support", desc: "We offer comprehensive maintenance, monitoring, and support packages to keep your automations updated and running efficiently with proactive issue resolution." },
  ],
  projectsHeading: "Recent AI & Automation Projects",
  projectsDescription: "Explore our portfolio of intelligent automation solutions that streamline business operations",
  projectsCategoryLabel: "AI",
  ctaHeading: "Ready to Automate Your Business Processes?",
};

export default function AIAutomationPage() {
  return (
    <ServicePageTemplate
      config={aiAutomationConfig}
      extraSection={
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative h-[400px] lg:h-full bg-gradient-to-br from-[#6467FF]/10 to-[#43B2F9]/10 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6467FF]/10 to-[#43B2F9]/10 dark:from-[#6467FF]/20 dark:to-[#43B2F9]/20" />
            <img
              src="https://cdn.dribbble.com/users/2482999/screenshots/17532501/media/8e2b0b5dd7c8be6b6d6e4d1e8e9e4e6d.gif"
              alt="AI & Automation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 lg:p-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#6467FF]/10 dark:bg-[#6467FF]/20 text-[#6467FF] dark:text-[#6467FF] text-xs font-semibold mb-4">
              <span className="mr-1">AI &amp; Automation</span>
              <span className="animate-pulse">✨</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Automate Workflows with Intelligent AI Systems
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We build AI-powered automations that handle repetitive tasks, orchestrate workflows, and integrate with your
              existing tools. Free up your team to focus on high-value work while intelligent systems do the heavy lifting.
            </p>
            <div className="space-y-3 mb-6">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                🏷️ Feature Tags
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bot w-4 h-4 text-[#6467FF]"
                  >
                    <path d="M12 8V4H8" />
                    <rect x="3" y="8" width="18" height="12" rx="2" />
                    <path d="M12 14h.01" />
                    <path d="M8 14h.01" />
                    <path d="M16 14h.01" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Autonomous AI Agents</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-workflow w-4 h-4 text-[#6467FF]"
                  >
                    <rect x="3" y="3" width="6" height="6" rx="1" />
                    <rect x="15" y="3" width="6" height="6" rx="1" />
                    <rect x="9" y="15" width="6" height="6" rx="1" />
                    <path d="M6 9v3a3 3 0 0 0 3 3h6" />
                    <path d="M18 9v3a3 3 0 0 1-3 3" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">End-to-End Workflow Automation</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-link-2 w-4 h-4 text-[#6467FF]"
                  >
                    <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                    <path d="M15 7h2a5 5 0 0 1 0 10h-2" />
                    <line x1="8" x2="16" y1="12" y2="12" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Integration with Your Stack</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-gauge w-4 h-4 text-[#6467FF]"
                  >
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Monitoring &amp; Optimization</span>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
                AI &amp; Automation — Our Technologies &amp; Stack
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-gray-100/60 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700">
                  <h5 className="text-sm font-semibold text-[#6467FF] dark:text-[#6467FF] mb-3">Core AI Stack</h5>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {[
                      "Python",
                      "LangChain",
                      "OpenAI GPT-4",
                      "OpenAI Embeddings",
                      "Whisper (STT)",
                      "FAISS",
                      "PyPDF2",
                      "TTS (gTTS/ElevenLabs)",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6467FF]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-gray-100/60 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700">
                  <h5 className="text-sm font-semibold text-[#6467FF] dark:text-[#6467FF] mb-3">RAG Pipeline</h5>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {[
                      "Smart Chunking",
                      "Overlap Context",
                      "Embeddings",
                      "Vector Search",
                      "Re-ranking",
                      "Context Injection",
                      "Citations",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6467FF]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-gray-100/60 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700">
                  <h5 className="text-sm font-semibold text-[#6467FF] dark:text-[#6467FF] mb-3">Serving &amp; Infra</h5>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {[
                      "Streamlit",
                      "FastAPI",
                      "Docker",
                      "AWS S3",
                      "Monitoring",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6467FF]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-4 mb-6 border-y border-gray-200 dark:border-slate-700">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock w-4 h-4 text-gray-400"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Project Duration</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Based on Automation Scope</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big w-4 h-4 text-green-500"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Client Satisfaction</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">100% Guaranteed</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-[#6467FF] to-[#43B2F9] text-white shadow-lg shadow-[#6467FF]/30 hover:shadow-xl hover:shadow-[#6467FF]/40 hover:scale-[1.02] active:scale-[0.98] dark:from-[#6467FF] dark:to-[#43B2F9] dark:shadow-[#6467FF]/20 dark:hover:shadow-[#6467FF]/30 h-11 px-6 py-3">
                AI &amp; Automation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right w-4 h-4 ml-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-white/80 dark:bg-slate-900 backdrop-blur-sm text-[#6467FF] dark:text-[#6467FF] border-2 border-[#6467FF] dark:border-[#6467FF] shadow-md hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] h-11 px-6 py-3">
                View Details
              </button>
            </div>
          </div>
        </div>
      }
    />
  );
}
