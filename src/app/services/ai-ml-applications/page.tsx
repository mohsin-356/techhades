"use client";

import ServicePageTemplate, { ServiceConfig } from "@/app/services/ServicePageTemplate";


const aiMlApplicationsConfig: ServiceConfig = {
  slug: "ai-ml-applications",
  badgeLabel: "AI/ML Applications",
  heading: "AI/ML APPLICATIONS SERVICES",
  tagline: "Intelligent automations, agents, and analytics.",
  description: "Harness the power of artificial intelligence and machine learning to solve complex business problems. From predictive analytics to intelligent agents, we build AI solutions that drive innovation and competitive advantage.",
  heroTags: ["Machine Learning", "Predictive Analytics", "AI Agents", "Natural Language Processing", "Computer Vision", "Data Analytics"],
  processTitle: "Our AI/ML Development Process",
  processSubtitle: "We build intelligent solutions through data analysis, model development, and continuous optimization",
  steps: [
    { number: 1, title: "Discovery & Planning", desc: "We begin by understanding your data landscape and AI goals. Through collaborative discussions, we define project requirements, timelines, and resources." },
    { number: 2, title: "Design & Prototyping", desc: "Our data scientists design the model architecture and data pipelines, creating prototypes to validate the feasibility and performance of the AI solution." },
    { number: 3, title: "Development & Coding", desc: "We build using latest technologies like TensorFlow, PyTorch, and Python ensuring robust, secure and performant AI models with clean code architecture." },
    { number: 4, title: "Testing & Quality Assurance", desc: "We rigorously test model accuracy, bias, and edge cases using automated and manual testing techniques to ensure flawless execution and reliable predictions." },
    { number: 5, title: "Launch & Deployment", desc: "We deploy with proper MLOps pipelines, containerization, and API endpoints for zero-downtime integration and maximum reliability." },
    { number: 6, title: "Post-Launch Support", desc: "We offer comprehensive monitoring, retraining, and support packages to keep your AI application updated and performing efficiently." },
  ],
  projectsHeading: "Recent AI/ML Application Projects",
  projectsDescription: "Explore our portfolio of intelligent AI and machine learning solutions that drive business value",
  projectsCategoryLabel: "AI/ML",
  ctaHeading: "Ready to Implement AI/ML Solutions?",
};

export default function AIMLApplicationsPage() {
  return (
    <ServicePageTemplate
      config={aiMlApplicationsConfig}
      extraSection={
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative h-[400px] lg:h-full bg-gradient-to-br from-[#6467FF]/10 to-[#43B2F9]/10 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6467FF]/10 to-[#43B2F9]/10 dark:from-[#6467FF]/20 dark:to-[#43B2F9]/20" />
            <img
              src="https://cdn.dribbble.com/users/2482999/screenshots/17532501/media/8e2b0b5dd7c8be6b6d6e4d1e8e9e4e6d.gif"
              alt="AI & ML Applications"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 lg:p-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#6467FF]/10 dark:bg-[#6467FF]/20 text-[#6467FF] dark:text-[#6467FF] text-xs font-semibold mb-4">
              <span className="mr-1">AI &amp; Automation</span>
              <span className="animate-pulse">✨</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Intelligent AI &amp; Automation for Your Business
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We design, build, and deploy AI-driven systems that automate repetitive work, uncover insights, and unlock new
              opportunities. From predictive models to autonomous agents, we turn your data into real results.
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
                  <span className="text-gray-700 dark:text-gray-300">AI Chatbots &amp; Agents</span>
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
                  <span className="text-gray-700 dark:text-gray-300">Workflow Automation</span>
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
                    className="lucide lucide-trending-up w-4 h-4 text-[#6467FF]"
                  >
                    <path d="M3 17 9 11 13 15 21 7" />
                    <path d="M21 11V7h-4" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Predictive Analytics</span>
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
                    <path d="M3 5v14a9 3 0 0 0 18 0V5" />
                    <path d="M3 12a9 3 0 0 0 18 0" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Data Pipelines &amp; ETL</span>
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
                    alt="TensorFlow"
                    className="w-4 h-4"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                  />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">TensorFlow</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <img
                    alt="PyTorch"
                    className="w-4 h-4"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                  />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">PyTorch</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <img
                    alt="LangChain"
                    className="w-4 h-4"
                    src="https://avatars.githubusercontent.com/u/130722123?s=48&v=4"
                  />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">LangChain</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <img
                    alt="OpenAI"
                    className="w-4 h-4"
                    src="https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png"
                  />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">OpenAI</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <img
                    alt="Docker"
                    className="w-4 h-4"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Docker</span>
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
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Based on Use Case</p>
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
