"use client";

import ServicePageTemplate, { ServiceConfig } from "@/app/services/ServicePageTemplate";


const softwareDevelopmentConfig: ServiceConfig = {
  slug: "software-development",
  badgeLabel: "Software Development",
  heading: "SOFTWARE DEVELOPMENT SERVICES",
  tagline: "Bespoke systems and platforms for your business.",
  description: "Build custom software solutions tailored to your unique business needs. From enterprise systems to specialized tools, we develop robust, scalable software that drives efficiency and growth.",
  heroTags: ["Custom Software", "Enterprise Systems", "Business Automation", "API Development", "Database Design", "System Integration"],
  processTitle: "Our Software Development Process",
  processSubtitle: "We deliver enterprise-grade software solutions through rigorous planning, development, and testing",
  steps: [
    { number: 1, title: "Requirements Analysis", desc: "Deep dive into your business processes to understand needs, pain points, and desired outcomes. Define clear project scope." },
    { number: 2, title: "Architecture Design", desc: "Design scalable, maintainable software architecture. Plan database structure, APIs, and system integrations." },
    { number: 3, title: "Development", desc: "Build using industry best practices and modern technologies. Write clean, well-documented code with regular code reviews." },
    { number: 4, title: "Quality Assurance", desc: "Comprehensive testing including unit tests, integration tests, and user acceptance testing to ensure reliability." },
    { number: 5, title: "Deployment", desc: "Deploy to production with minimal downtime. Set up monitoring, logging, and backup systems for reliability." },
    { number: 6, title: "Maintenance & Support", desc: "Ongoing support, bug fixes, performance optimization, and feature enhancements based on user feedback." },
  ],
  projectsHeading: "Recent Software Development Projects",
  projectsDescription: "Explore our portfolio of custom software solutions that solve complex business challenges",
  projectsCategoryLabel: "Software",
  ctaHeading: "Ready to Build Your Custom Software Solution?",
};

export default function SoftwareDevelopmentPage() {
  return (
    <ServicePageTemplate
      config={softwareDevelopmentConfig}
      extraSection={
        <div className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-900 backdrop-blur-sm border border-gray-200 dark:border-slate-700 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-[400px] lg:h-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20" />
              <img
                src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                alt="Software Development"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-4">
                <span className="mr-1">Software Development</span>
                <span className="animate-pulse">✨</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Custom Software Solutions Tailored for Your Business
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                We create efficient, scalable, and secure software systems to automate workflows and improve productivity. Our
                custom-built solutions ensure your business runs smarter and faster.
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
                      className="lucide lucide-cpu w-4 h-4 text-purple-500"
                    >
                      <rect width="16" height="16" x="4" y="4" rx="2" />
                      <rect width="6" height="6" x="9" y="9" rx="1" />
                      <path d="M15 2v2" />
                      <path d="M15 20v2" />
                      <path d="M2 15h2" />
                      <path d="M2 9h2" />
                      <path d="M20 15h2" />
                      <path d="M20 9h2" />
                      <path d="M9 2v2" />
                      <path d="M9 20v2" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">End-to-End Software Solutions</span>
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
                      className="lucide lucide-shield-check w-4 h-4 text-purple-500"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Secure &amp; Reliable Architecture</span>
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
                      className="lucide lucide-code-xml w-4 h-4 text-purple-500"
                    >
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Custom Integrations</span>
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
                      className="lucide lucide-zap w-4 h-4 text-purple-500"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Automation &amp; Optimization</span>
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
                      alt="Python"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Python</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img
                      alt="Node.js"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Node.js</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img
                      alt=".NET"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">.NET</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img
                      alt="Electron"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Electron</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img
                      alt="SQL"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">SQL</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img
                      alt="Firebase"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Firebase</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img
                      alt="MongoDB"
                      className="w-4 h-4"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">MongoDB</span>
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
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Based on Project Scale</p>
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
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] dark:from-purple-500 dark:to-indigo-500 dark:shadow-purple-500/20 dark:hover:shadow-purple-500/30 h-11 px-6 py-3">
                  Software Development
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
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-white/80 dark:bg-slate-900 backdrop-blur-sm text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-500 shadow-md hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] h-11 px-6 py-3">
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
