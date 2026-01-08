"use client";

import ServicePageTemplate, { ServiceConfig } from "@/app/services/ServicePageTemplate";

const ecommerceConfig: ServiceConfig = {
  slug: "ecommerce",
  badgeLabel: "Ecommerce Solutions",
  heading: "ECOMMERCE DEVELOPMENT SERVICES",
  tagline: "Online stores, payments, and catalogs that convert.",
  description: "Build a powerful ecommerce platform that drives sales and delights customers. From storefront design to payment processing and inventory management, we create seamless shopping experiences.",
  heroTags: ["Shopify Integration", "Payment Gateways", "Inventory Management", "Shopping Cart", "Product Catalog", "Order Tracking"],
  processTitle: "Our Ecommerce Development Process",
  processSubtitle: "We follow a proven approach to build high-converting online stores that scale with your business",
  steps: [
    { number: 1, title: "Discovery & Planning", desc: "We begin by understanding your retail goals and target audience. Through collaborative discussions, we define store requirements, timelines, and resources." },
    { number: 2, title: "Design & Prototyping", desc: "Our design team creates interactive wireframes and store prototypes that reflect the customer journey and optimize checkout flow for maximum conversion." },
    { number: 3, title: "Development & Coding", desc: "We build using latest technologies like Shopify, WooCommerce, or Custom Stacks ensuring secure, fast and scalable online stores with clean code architecture." },
    { number: 4, title: "Testing & Quality Assurance", desc: "We rigorously test cart functionality, payments, security, and mobile responsiveness using automated and manual testing techniques." },
    { number: 5, title: "Launch & Deployment", desc: "We deploy with proper store configuration, SEO setup, payment verification, and optimal scaling for zero-downtime launches." },
    { number: 6, title: "Post-Launch Support", desc: "We offer comprehensive maintenance, monitoring, and support packages to keep your store updated, secure, and running efficiently with 24/7 support." },
  ],
  projectsHeading: "Recent Ecommerce Projects",
  projectsDescription: "Explore our portfolio of successful ecommerce implementations that drive revenue and customer loyalty",
  projectsCategoryLabel: "Ecommerce",
  ctaHeading: "Ready to Launch Your Online Store?",
};


export default function EcommercePage() {
  return (
    <ServicePageTemplate
      config={ecommerceConfig}
      extraSection={
        <div className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-900 backdrop-blur-sm border border-gray-200 dark:border-slate-700 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-[400px] lg:h-full bg-gradient-to-br from-[#43B2F9]/10 to-[#6467FF]/10 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#43B2F9]/10 to-[#6467FF]/10 dark:from-[#43B2F9]/20 dark:to-[#6467FF]/20" />
              <img
                src="https://cdn.dribbble.com/userupload/41679749/file/original-f7d95157bd48917750fac2b5715386db.gif"
                alt="Ecommerce Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#43B2F9]/10 dark:bg-[#43B2F9]/20 text-[#43B2F9] dark:text-[#43B2F9] text-xs font-semibold mb-4">
                <span className="mr-1">Ecommerce Solutions</span>
                <span className="animate-pulse">✨</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                High-Converting Online Stores
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                We build secure, scalable, and user-friendly ecommerce platforms that drive sales.
                From custom storefronts to seamless payment integrations, we handle it all.
              </p>
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                  🏷️ Feature Tags
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#43B2F9] rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">Shopify & WooCommerce</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#43B2F9] rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">Payment Gateways</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#43B2F9] rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">Inventory Sync</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#43B2F9] rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">Custom UI/UX</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 bg-gradient-to-r from-[#43B2F9] to-[#6467FF] text-white shadow-lg shadow-[#43B2F9]/30 hover:shadow-xl hover:shadow-[#43B2F9]/40 hover:scale-[1.02] active:scale-[0.98] h-11 px-6 py-3">
                  Launch Store
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
