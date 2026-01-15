"use client";
import ServiceDetailedSection from "@/components/shared/ServiceDetailedSection";
import {
  Code, Database, Globe, Server, Smartphone, Cpu,
  Monitor, Palette, Layout, Bot, Megaphone, Share2, ShoppingBag, CreditCard,
  Gamepad2, Box, Cloud
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-[#050714] min-h-screen overflow-x-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
        <div className="h-px bg-gradient-to-r from-transparent via-[#6467FF]/50 to-transparent mb-8" />
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[family:var(--font-display)] text-white mb-3 sm:mb-4">
          <span className="bg-gradient-to-r from-[#43B2F9] via-[#6467FF] to-[#43B2F9] bg-clip-text text-transparent">Our Core Services</span>
        </h2>
        <p className="mt-3 text-[#94A3B8] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Digital services built to launch faster, scale smoother, and convert better.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid gap-6 sm:gap-8 xl:grid-cols-2">

        {/* 1. Web Development */}
        <ServiceDetailedSection
          badgeText="Website Development"
          title="Web Development"
          tagline="Fast, Modern Websites"
          description="Responsive, SEO-ready websites built for performance and conversions."
          tags={["Custom-Built Solutions", "Fast & Responsive Design", "SEO-Friendly Architecture", "Scalable & Secure Systems"]}
          features={["Next.js SSR & SEO", "Interactive 3D Elements", "CMS Integration", "Global CDN Hosting"]}
          technologies={[
            { name: "React", icon: <Code className="w-3 h-3" /> },
            { name: "Next.js", icon: <Globe className="w-3 h-3" /> },
            { name: "Node.js", icon: <Server className="w-3 h-3" /> },
            { name: "Firebase", icon: <Database className="w-3 h-3" /> }
          ]}
          stats={[
            { label: "Project Duration", value: "Based on Requirements" },
            { label: "Client Satisfaction", value: "100% Guaranteed" }
          ]}
          ctaLink="/services/web-development"
          imagePosition="right"
          imageSrc="https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif"
        />

        {/* 2. App Development */}
        <ServiceDetailedSection
          badgeText="App Development"
          title="Mobile Apps"
          tagline="Scalable Mobile Apps"
          description="Secure, smooth apps for iOS, Android, and cross-platform builds."
          tags={["Android & iOS Development", "Fast & Optimized Performance", "User-Centric Interface", "Cloud-Integrated Solutions"]}
          features={["Offline Capabilities", "Push Notifications", "Biometric Auth", "Real-time Sync"]}
          technologies={[
            { name: "Flutter", icon: <Smartphone className="w-3 h-3" /> },
            { name: "React Native", icon: <Code className="w-3 h-3" /> },
            { name: "Swift", icon: <Cpu className="w-3 h-3" /> },
            { name: "Kotlin", icon: <Smartphone className="w-3 h-3" /> }
          ]}
          stats={[
            { label: "Project Duration", value: "Based on App Scope" },
            { label: "Client Satisfaction", value: "100% Guaranteed" }
          ]}
          ctaLink="/services/mobile-development"
          imagePosition="left"
          imageSrc="https://cdn.dribbble.com/userupload/19730654/file/original-23a9368d5081d24e5277c67b35b68059.gif"
        />

        {/* 3. Software Development */}
        <ServiceDetailedSection
          badgeText="Software Development"
          title="Software Development"
          tagline="Custom Software Systems"
          description="Automate workflows and scale operations with secure custom software."
          tags={["End-to-End Solutions", "Secure & Reliable Architecture", "Custom Integrations", "Automation & Optimization"]}
          features={["Workflow Automation", "Legacy Migration", "API Development", "Desktop Applications"]}
          technologies={[
            { name: "Python", icon: <Code className="w-3 h-3" /> },
            { name: "Node.js", icon: <Server className="w-3 h-3" /> },
            { name: ".NET", icon: <Monitor className="w-3 h-3" /> },
            { name: "SQL", icon: <Database className="w-3 h-3" /> }
          ]}
          stats={[
            { label: "Project Duration", value: "Based on Project Scale" },
            { label: "Client Satisfaction", value: "100% Guaranteed" }
          ]}
          ctaLink="/services/software-development"
          imagePosition="right"
          imageSrc="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
        />

        {/* 4. UI/UX Designing */}
        <ServiceDetailedSection
          badgeText="UI/UX Design"
          title="UI/UX Designing"
          tagline="UI/UX That Users Love"
          description="Clean, intuitive experiences from research to prototypes and design systems."
          tags={["User-Centered Design", "Interactive Prototyping", "Design Systems", "Accessibility Focused"]}
          features={["User Research", "Wireframing", "High-Fidelity Mockups", "Usability Testing"]}
          technologies={[
            { name: "Figma", icon: <Palette className="w-3 h-3" /> },
            { name: "Adobe XD", icon: <Layout className="w-3 h-3" /> },
            { name: "Sketch", icon: <Palette className="w-3 h-3" /> },
            { name: "Tailwind", icon: <Code className="w-3 h-3" /> }
          ]}
          stats={[
            { label: "Design Sprint", value: "2-4 Weeks" },
            { label: "Revisions", value: "Unlimited" }
          ]}
          ctaLink="/services/ui-ux-design"
          imagePosition="left"
          imageSrc="https://cdn.dribbble.com/users/1288528/screenshots/15063535/media/5b5c7f4a6f4e4e4e4e4e4e4e4e4e4e.gif"
        />

        {/* 5. Ecommerce Development */}
        <ServiceDetailedSection
          badgeText="Ecommerce"
          title="Ecommerce Solutions"
          tagline="Stores That Convert"
          description="High-performing storefronts with secure checkout and smooth operations."
          tags={["Shopify Integration", "Payment Systems", "Custom Storefronts", "Inventory Management"]}
          features={["Secure Checkout", "Order Tracking", "Product Catalog", "Admin Dashboard"]}
          technologies={[
            { name: "Shopify", icon: <Globe className="w-3 h-3" /> },
            { name: "Stripe", icon: <CreditCard className="w-3 h-3" /> },
            { name: "WooCommerce", icon: <ShoppingBag className="w-3 h-3" /> },
            { name: "Next.js", icon: <Code className="w-3 h-3" /> }
          ]}
          stats={[
            { label: "Conversion Rate", value: "Optimized" },
            { label: "Uptime", value: "99.9%" }
          ]}
          ctaLink="/services/ecommerce"
          imagePosition="right"
          imageSrc="https://cdn.dribbble.com/userupload/41679749/file/original-f7d95157bd48917750fac2b5715386db.gif"
        />

        {/* 6. Game App Design */}
        <ServiceDetailedSection
          badgeText="Game Design"
          title="Game & App Design"
          tagline="Game UI & Interactions"
          description="Immersive UI, HUDs, and flows designed to keep users engaged."
          tags={["Game UI/UX", "HUD Design", "Interactive Flow", "Character Concepts"]}
          features={["User Flows", "Asset Creation", "Animation", "Prototyping"]}
          technologies={[
            { name: "Unity", icon: <Gamepad2 className="w-3 h-3" /> },
            { name: "Unreal", icon: <Cpu className="w-3 h-3" /> },
            { name: "Figma", icon: <Palette className="w-3 h-3" /> },
            { name: "Blender", icon: <Box className="w-3 h-3" /> }
          ]}
          stats={[
            { label: "Engagement", value: "High Retention" },
            { label: "Platform", value: "Cross-Platform" }
          ]}
          ctaLink="/services/game-app-design"
          imagePosition="left"
          imageSrc="https://cdn.dribbble.com/userupload/21617979/file/original-756d16dda13c3b13319d8cc29fdbb780.gif"
        />

        {/* 7. AI & Automation */}
        <ServiceDetailedSection
          badgeText="AI & Automation"
          title="AI & Automation"
          tagline="AI That Saves Time"
          description="Automate work, extract insights, and ship smarter AI-powered features."
          tags={["Machine Learning", "Process Automation", "NLP Solutions", "Data Analytics"]}
          features={["Custom Chatbots", "Predictive Modeling", "Workflow Automation", "Data Scraping"]}
          technologies={[
            { name: "OpenAI", icon: <Bot className="w-3 h-3" /> },
            { name: "Python", icon: <Code className="w-3 h-3" /> },
            { name: "TensorFlow", icon: <Cpu className="w-3 h-3" /> },
            { name: "LangChain", icon: <Bot className="w-3 h-3" /> }
          ]}
          stats={[
            { label: "Efficiency Gain", value: "Up to 80%" },
            { label: "Accuracy", value: "99.9%" }
          ]}
          ctaLink="/services/ai-automation"
          imagePosition="right"
          imageSrc="https://cdn.dribbble.com/users/2482999/screenshots/17532501/media/8e2b0b5dd7c8be6b6d6e4d1e8e9e4e6d.gif"
        />

        {/* 8. AI/ML Applications */}
        <ServiceDetailedSection
          badgeText="AI/ML Apps"
          title="AI/ML Applications"
          tagline="ML Apps & Agents"
          description="Build models, agents, and pipelines that deliver measurable business impact."
          tags={["Deep Learning", "Intelligent Agents", "Computer Vision", "Big Data"]}
          features={["Model Training", "Neural Networks", "Data Pipelines", "Real-time Inference"]}
          technologies={[
            { name: "PyTorch", icon: <Cpu className="w-3 h-3" /> },
            { name: "Keras", icon: <Code className="w-3 h-3" /> },
            { name: "AWS SageMaker", icon: <Cloud className="w-3 h-3" /> },
            { name: "Docker", icon: <Box className="w-3 h-3" /> }
          ]}
          stats={[
            { label: "Insights", value: "Real-time" },
            { label: "Scale", value: "Enterprise" }
          ]}
          ctaLink="/services/ai-ml-applications"
          imagePosition="left"
          imageSrc="https://cdn.dribbble.com/users/2482999/screenshots/17532501/media/8e2b0b5dd7c8be6b6d6e4d1e8e9e4e6d.gif"
        />

        {/* 9. AWS & Cloud */}
        <ServiceDetailedSection
          badgeText="Cloud Infrastructure"
          title="AWS & Cloud Services"
          tagline="Cloud & DevOps"
          description="Reliable cloud setups, migrations, and CI/CD for smooth scale."
          tags={["Cloud Migration", "DevOps Pipelines", "Serverless", "Security"]}
          features={["Auto-scaling", "CI/CD Setup", "Cost Optimization", "Disaster Recovery"]}
          technologies={[
            { name: "AWS", icon: <Cloud className="w-3 h-3" /> },
            { name: "Docker", icon: <Box className="w-3 h-3" /> },
            { name: "Kubernetes", icon: <Server className="w-3 h-3" /> },
            { name: "Terraform", icon: <Code className="w-3 h-3" /> }
          ]}
          stats={[
            { label: "Uptime", value: "99.99%" },
            { label: "Cost Savings", value: "High" }
          ]}
          ctaLink="/services/aws-cloud"
          imagePosition="right"
          imageSrc="https://cdn.dribbble.com/userupload/42030686/file/original-29e4df2860dde0ea7c87ba3276a7a6b2.gif"
        />

        {/* 10. Ads and Social Media */}
        <ServiceDetailedSection
          badgeText="Digital Marketing"
          title="Ads and Social Media"
          tagline="Ads & Social Growth"
          description="Campaigns that increase reach, leads, and conversions across platforms."
          tags={["Targeted Advertising", "Content Strategy", "Brand Growth", "Performance Analytics"]}
          features={["Facebook/IG Ads", "SEO Optimization", "Viral Content", "Community Management"]}
          technologies={[
            { name: "Google Ads", icon: <Megaphone className="w-3 h-3" /> },
            { name: "Meta Ads", icon: <Share2 className="w-3 h-3" /> },
            { name: "Analytics", icon: <Monitor className="w-3 h-3" /> },
            { name: "Canva", icon: <Palette className="w-3 h-3" /> }
          ]}
          stats={[
            { label: "ROI Focus", value: "High Conversion" },
            { label: "Reach", value: "Global" }
          ]}
          ctaLink="/services/ads-social-media"
          imagePosition="left"
          imageSrc="https://cdn.dribbble.com/userupload/41679749/file/original-f7d95157bd48917750fac2b5715386db.gif"
        />

        </div>
      </div>
    </div>
  );
}
