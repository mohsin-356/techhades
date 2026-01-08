"use client";

import ServicePageTemplate, { ServiceConfig } from "@/app/services/ServicePageTemplate";


const gameAppDesignConfig: ServiceConfig = {
  slug: "game-app-design",
  badgeLabel: "Game & App Design",
  heading: "GAME APP DESIGN SERVICES",
  tagline: "UI/UX for games and interactive apps.",
  description: "Create engaging game interfaces and interactive app experiences that captivate users. From casual games to complex interactive applications, we design intuitive UX that keeps players engaged.",
  heroTags: ["UI/UX Design", "Game Interfaces", "Interactive Apps", "User Testing", "Wireframing", "Prototyping"],
  processTitle: "Our Game App Design Process",
  processSubtitle: "We craft immersive and intuitive interfaces that enhance gameplay and user engagement",
  steps: [
    { number: 1, title: "Discovery & Planning", desc: "We begin by analyzing game mechanics, genre, and target audience. Through collaborative discussions, we define visual direction, timelines, and resources." },
    { number: 2, title: "Design & Prototyping", desc: "Our designers create character concepts, environments, and interactive prototypes that reflect the core gameplay loop and optimize engagement." },
    { number: 3, title: "Development & Coding", desc: "We implement UI/UX assets using engines like Unity or Unreal ensuring responsive, immersive and performant game interfaces with clean architecture." },
    { number: 4, title: "Testing & Quality Assurance", desc: "We rigorously test gameplay flows, HUD elements, and device compatibility using automated playtesting and manual review techniques." },
    { number: 5, title: "Launch & Deployment", desc: "We prepare asset bundles for developer handoff and store submission, ensuring proper optimization and visual fidelity across all target devices." },
    { number: 6, title: "Post-Launch Support", desc: "We offer comprehensive design support for DLCs, live ops updates, and seasonal events to keep your game fresh and engaging." },
  ],
  projectsHeading: "Recent Game & App Design Projects",
  projectsDescription: "Explore our portfolio of beautifully designed game interfaces and interactive applications",
  projectsCategoryLabel: "Game",
  ctaHeading: "Let's Design Your Next Game or Interactive App",
};

export default function GameAppDesignPage() {
  return (
    <ServicePageTemplate
      config={gameAppDesignConfig}
      extraSection={
        <div className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-900 backdrop-blur-sm border border-gray-200 dark:border-slate-700 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-[400px] lg:h-full bg-gradient-to-br from-[#6467FF]/10 to-[#43B2F9]/10 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6467FF]/10 to-[#43B2F9]/10 dark:from-[#6467FF]/20 dark:to-[#43B2F9]/20" />
              <img
                src="https://cdn.dribbble.com/userupload/21617979/file/original-756d16dda13c3b13319d8cc29fdbb780.gif"
                alt="Game & App Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#6467FF]/10 dark:bg-[#6467FF]/20 text-[#6467FF] dark:text-[#6467FF] text-xs font-semibold mb-4">
                <span className="mr-1">Game & App Designing</span>
                <span className="animate-pulse">✨</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Immersive Game UI & App Experiences
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                We design intuitive menus, HUDs, and interaction flows that keep players engaged. From casual mobile games to
                complex interactive applications, our designs balance aesthetics with usability.
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
                      className="lucide lucide-gamepad-2 w-4 h-4 text-[#6467FF]"
                    >
                      <line x1="6" x2="10" y1="11" y2="11" />
                      <line x1="8" x2="8" y1="9" y2="13" />
                      <line x1="15" x2="15.01" y1="12" y2="12" />
                      <line x1="18" x2="18.01" y1="10" y2="10" />
                      <path d="M17 17.5L16.16 19.14A2 2 0 0 1 14.38 20.2L13.94 20.16A1.99 1.99 0 0 1 12.5 19.1L12 18" />
                      <path d="M7 17.5L7.84 19.14A2 2 0 0 0 9.62 20.2L10.06 20.16A1.99 1.99 0 0 0 11.5 19.1L12 18" />
                      <path d="M11 4.5L12 4l1 .5" />
                      <path d="M12 18V4" />
                      <path d="M20 7a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v7a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5Z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Game UI & HUD Design</span>
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
                      className="lucide lucide-smartphone w-4 h-4 text-[#6467FF]"
                    >
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Mobile & Cross-Platform Games</span>
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
                      className="lucide lucide-users w-4 h-4 text-[#6467FF]"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Player-Centric Flows</span>
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
                      className="lucide lucide-zap w-4 h-4 text-[#6467FF]"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Micro-Interactions & Feedback</span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
                  🧩 Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img
                      alt="Figma"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Figma</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img
                      alt="Unity"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Unity UI</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img
                      alt="Unreal"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Unreal UI</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img
                      alt="Blender"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Blender</span>
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
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Based on Game Scope</p>
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
                  Game App Designing
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
        </div>
      }
    />
  );
}
