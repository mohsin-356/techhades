"use client";

import ServicePageTemplate, { ServiceConfig } from "@/app/services/ServicePageTemplate";


const uiUxDesignConfig: ServiceConfig = {
  slug: "ui-ux-design",
  badgeLabel: "UI/UX Design",
  heading: "UI/UX DESIGN SERVICES",
  tagline: "Engaging, conversion-focused interfaces and systems.",
  description: "Create beautiful, intuitive digital experiences that delight users and drive business results. From research to implementation, we design interfaces that are both stunning and highly functional.",
  heroTags: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing", "Design Systems"],
  processTitle: "Our UI/UX Design Process",
  processSubtitle: "We create user-centered designs that balance aesthetics with functionality and drive conversions",
  steps: [
    { number: 1, title: "Discovery & Planning", desc: "We begin by understanding user needs and business goals. Through collaborative discussions, we define design requirements, timelines, and resources." },
    { number: 2, title: "Design & Prototyping", desc: "Our design team creates low-fidelity wireframes and interactive prototypes that reflect the user journey and optimize navigation flow." },
    { number: 3, title: "Development & Coding", desc: "We create pixel-perfect UI assets and design systems using tools like Figma ensuring consistent, accessible and scalable interfaces." },
    { number: 4, title: "Testing & Quality Assurance", desc: "We rigorously test usability, accessibility, and visual consistency using user testing sessions and heuristic evaluation techniques." },
    { number: 5, title: "Launch & Deployment", desc: "We deliver comprehensive design systems, component libraries, and style guides for seamless developer handoff and implementation." },
    { number: 6, title: "Post-Launch Support", desc: "We offer comprehensive design audits and iterative updates based on user feedback to keep your products engaging and effective." },
  ],
  projectsHeading: "Recent UI/UX Design Projects",
  projectsDescription: "Explore our portfolio of beautifully designed digital experiences that drive engagement and conversions",
  projectsCategoryLabel: "Design",
  ctaHeading: "Ready to Transform Your User Experience?",
};

export default function UIUXDesignPage() {
  return (
    <ServicePageTemplate
      config={uiUxDesignConfig}
      extraSection={
        <div className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-900 backdrop-blur-sm border border-gray-200 dark:border-slate-700 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-[400px] lg:h-full bg-gradient-to-br from-[#6467FF]/10 to-[#43B2F9]/10 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6467FF]/10 to-[#43B2F9]/10 dark:from-[#6467FF]/20 dark:to-[#43B2F9]/20" />
              <img
                src="https://cdn.dribbble.com/users/1288528/screenshots/15063535/media/5b5c7f4a6f4e4e4e4e4e4e4e4e4e4e4e.gif"
                alt="UI/UX Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#6467FF]/10 dark:bg-[#6467FF]/20 text-[#6467FF] dark:text-[#6467FF] text-xs font-semibold mb-4">
                <span className="mr-1">UI/UX Designing</span>
                <span className="animate-pulse">✨</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Beautiful & Functional Designs That Convert
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Our UI/UX design services focus on creating intuitive, attractive, and conversion-focused interfaces. We blend
                creativity with usability to deliver designs that users love and businesses grow with.
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
                      className="lucide lucide-palette w-4 h-4 text-[#6467FF]"
                    >
                      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
                      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
                      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
                      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Creative Visual Design</span>
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
                    <span className="text-gray-700 dark:text-gray-300">User-Centered Approach</span>
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
                      className="lucide lucide-database w-4 h-4 text-[#6467FF]"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                      <path d="M3 12A9 3 0 0 0 21 12" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Wireframes & Prototypes</span>
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
                    <span className="text-gray-700 dark:text-gray-300">Interactive Design Systems</span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
                  🧩 Technologies Used
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
                      alt="Adobe XD"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Adobe XD</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Sketch</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img
                      alt="Photoshop"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Photoshop</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img
                      alt="Illustrator"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Illustrator</span>
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
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Based on Project Type</p>
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
                  UI/UX Designing
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
