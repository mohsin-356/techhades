"use client";

import ServicePageTemplate, { ServiceConfig } from "@/app/services/ServicePageTemplate";

const awsCloudConfig: ServiceConfig = {
  slug: "aws-cloud",
  badgeLabel: "Cloud Infrastructure",
  heading: "AWS & CLOUD SERVICES",
  tagline: "Cloud infrastructure, DevOps, and scaling.",
  description: "Leverage AWS and cloud technologies to build scalable, reliable, and cost-effective infrastructure. From migration to optimization, we ensure your applications run smoothly in the cloud.",
  heroTags: ["AWS Services", "Cloud Migration", "DevOps", "Auto-scaling", "CI/CD Pipelines", "Infrastructure as Code"],
  processTitle: "Our AWS & Cloud Development Process",
  processSubtitle: "We design and implement cloud solutions that scale with your business while optimizing costs",
  steps: [
    { number: 1, title: "Discovery & Planning", desc: "We begin by auditing your infrastructure and business objectives. Through collaborative discussions, we define migration requirements, timelines, and resources." },
    { number: 2, title: "Design & Prototyping", desc: "Our architects design secure, scalable cloud architectures and proof-of-concepts that reflect the optimal infrastructure flow for maximum efficiency." },
    { number: 3, title: "Development & Coding", desc: "We build using Infrastructure as Code (IaC) tools like Terraform and AWS CDK ensuring compliant, secure and replicable cloud environments." },
    { number: 4, title: "Testing & Quality Assurance", desc: "We rigorously test security, load, and failover capabilities using automated and manual testing techniques to ensure flawless execution." },
    { number: 5, title: "Launch & Deployment", desc: "We deploy with proper CI/CD pipelines, security hardening, zero-downtime cutover strategies and maximum reliability." },
    { number: 6, title: "Post-Launch Support", desc: "We offer comprehensive maintenance, monitoring, and support packages to keep your cloud infrastructure updated, secure, and running efficiently." },
  ],
  projectsHeading: "Recent AWS & Cloud Projects",
  projectsDescription: "Explore our portfolio of successful cloud migrations and infrastructure implementations",
  projectsCategoryLabel: "Cloud",
  ctaHeading: "Ready to Scale Your Infrastructure with AWS?",
};


export default function AWSCloudPage() {
  return (
    <ServicePageTemplate
      config={awsCloudConfig}
      extraSection={
        <div className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-900 backdrop-blur-sm border border-gray-200 dark:border-slate-700 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-[400px] lg:h-full bg-gradient-to-br from-[#43B2F9]/10 to-[#6467FF]/10 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#43B2F9]/10 to-[#6467FF]/10 dark:from-[#43B2F9]/20 dark:to-[#6467FF]/20" />
              <img
                src="https://cdn.dribbble.com/userupload/42030686/file/original-29e4df2860dde0ea7c87ba3276a7a6b2.gif"
                alt="Cloud Infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#43B2F9]/10 dark:bg-[#43B2F9]/20 text-[#43B2F9] dark:text-[#43B2F9] text-xs font-semibold mb-4">
                <span className="mr-1">Cloud Infrastructure</span>
                <span className="animate-pulse">✨</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Scalable & Secure Cloud Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Design, deploy, and manage scalable cloud architectures on AWS.
                Ensure high availability, security, and cost-efficiency for your applications.
              </p>
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                  🏷️ Feature Tags
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#43B2F9] rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">AWS Migration</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#43B2F9] rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">DevOps (CI/CD)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#43B2F9] rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">Serverless</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#43B2F9] rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">Cost Optimization</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 bg-gradient-to-r from-[#43B2F9] to-[#6467FF] text-white shadow-lg shadow-[#43B2F9]/30 hover:shadow-xl hover:shadow-[#43B2F9]/40 hover:scale-[1.02] active:scale-[0.98] h-11 px-6 py-3">
                  Scale Now
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
