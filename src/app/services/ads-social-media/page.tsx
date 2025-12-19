"use client";

import ServicePageTemplate, { ServiceConfig } from "@/app/services/ServicePageTemplate";


const adsSocialMediaConfig: ServiceConfig = {
  slug: "ads-social-media",
  badgeLabel: "Social Media & Ads",
  heading: "ADS & SOCIAL MEDIA SERVICES",
  tagline: "Campaigns, management, and growth strategies.",
  description: "Grow your brand with strategic social media management and targeted advertising campaigns. We create engaging content, manage communities, and drive measurable results across all platforms.",
  heroTags: ["Social Media Management", "Ad Campaigns", "Content Creation", "Community Management", "Analytics", "Growth Strategy"],
  processTitle: "Our Ads & Social Media Process",
  processSubtitle: "We build comprehensive social strategies that drive engagement, reach, and conversions",
  steps: [
    { number: 1, title: "Strategy & Planning", desc: "Develop a comprehensive social media strategy aligned with your business goals. Identify target audiences and key platforms." },
    { number: 2, title: "Content Creation", desc: "Create engaging, on-brand content including posts, videos, and graphics. Plan content calendar for consistent posting." },
    { number: 3, title: "Campaign Setup", desc: "Design and launch targeted ad campaigns on Facebook, Instagram, LinkedIn, and other platforms for maximum reach." },
    { number: 4, title: "Community Management", desc: "Engage with your audience, respond to comments, and build a loyal community around your brand." },
    { number: 5, title: "Analytics & Optimization", desc: "Track performance metrics and optimize campaigns for better ROI. A/B test content and ad variations." },
    { number: 6, title: "Growth & Scaling", desc: "Scale successful campaigns and strategies. Continuously improve reach, engagement, and conversion rates." },
  ],
  projectsHeading: "Recent Social Media & Ad Projects",
  projectsDescription: "Explore our portfolio of successful social media campaigns and growth strategies",
  projectsCategoryLabel: "Social Media",
  ctaHeading: "Ready to Grow Your Social Media Presence?",
};

export default function AdsSocialMediaPage() {
  return (
    <ServicePageTemplate
      config={adsSocialMediaConfig}
      extraSection={
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative h-[400px] lg:h-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20" />
            <img
              src="https://cdn.dribbble.com/userupload/41679749/file/original-f7d95157bd48917750fac2b5715386db.gif"
              alt="Ads & Social Media"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 lg:p-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-4">
              <span className="mr-1">Ads &amp; Social Media</span>
              <span className="animate-pulse">✨</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Performance-Driven Ads &amp; Social Media Growth
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We plan, launch, and optimize high-performing ad campaigns and social strategies that grow your brand, increase
              engagement, and generate measurable ROI across all major platforms.
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
                    className="lucide lucide-megaphone w-4 h-4 text-purple-500"
                  >
                    <path d="M3 11v2a4 4 0 0 0 4 4h1" />
                    <path d="M11 12a5 5 0 0 0 0-10H9a4 4 0 0 0-4 4v1" />
                    <path d="M22 8v8a3 3 0 0 1-3 3h-1" />
                    <path d="M11 22v-4" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Paid Social Campaigns</span>
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
                    className="lucide lucide-messages-square w-4 h-4 text-purple-500"
                  >
                    <path d="m18 10 4-4-4-4" />
                    <path d="M22 6H12a8 8 0 0 0-8 8v4" />
                    <path d="M9 18H5a2 2 0 0 0-2 2v2l4-2h4" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Content &amp; Community</span>
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
                    className="lucide lucide-target w-4 h-4 text-purple-500"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="m22 12-4-2v4z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Laser-Focused Targeting</span>
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
                    className="lucide lucide-bar-chart-3 w-4 h-4 text-purple-500"
                  >
                    <path d="M3 3v18h18" />
                    <rect x="7" y="8" width="3" height="7" rx="1" />
                    <rect x="12" y="5" width="3" height="10" rx="1" />
                    <rect x="17" y="10" width="3" height="5" rx="1" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Analytics &amp; Reporting</span>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
                🧩 Platforms We Work With
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Facebook &amp; Instagram Ads</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">TikTok &amp; YouTube</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">LinkedIn &amp; Twitter/X</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Google &amp; Display Network</span>
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
                  <p className="text-xs text-gray-500 dark:text-gray-500">Optimization Cycle</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Weekly Reporting</p>
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
                Ads &amp; Social Media
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
      }
    />
  );
}
