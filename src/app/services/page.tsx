"use client";
import ServiceDetailedSection from "@/components/shared/ServiceDetailedSection";
import {
  ArrowRight, Code, Database, Globe, Server, Smartphone, Cpu, CheckCircle2,
  Monitor, Palette, Layout, Bot, Megaphone, Share2, ShoppingBag, CreditCard,
  Gamepad2, Box, Cloud
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />
        <h2 className="text-4xl sm:text-6xl font-[family:var(--font-display)] text-foreground mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">Our Core Services</span>
        </h2>
        <p className="mt-4 text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
          Comprehensive digital solutions tailored to transform your business with cutting-edge technology and innovative strategies
        </p>
      </div>

      <div className="space-y-8 pb-24">

        {/* 1. Web Development */}
        <ServiceDetailedSection
          badgeText="Website Development"
          title="Web Development"
          tagline="Website Development According to Your Needs"
          description="Build powerful, fast, and responsive websites tailored to your business goals. Our expert developers create modern web solutions using cutting-edge technologies to enhance user experience and performance."
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
          tagline="Build Scalable & Engaging Mobile Applications"
          description="We design and develop modern mobile apps that deliver speed, usability, and security. Whether Android, iOS, or cross-platform, our apps provide a seamless experience that boosts your digital presence."
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
          tagline="Custom Software Solutions Tailored for Your Business"
          description="We create efficient, scalable, and secure software systems to automate workflows and improve productivity. Our custom-built solutions ensure your business runs smarter and faster."
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
          tagline="Designing Intuitive & Aesthetic User Experiences"
          description="Crafting pixel-perfect designs that blend aesthetics with functionality. We focus on user research, wireframing, and interactive prototyping to create interfaces that users love."
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
          imageSrc="https://cdn.dribbble.com/users/1288528/screenshots/15063535/media/5b5c7f4a6f4e4e4e4e4e4e4e4e4e4e4e.gif"
        />

        {/* 5. Ecommerce Development */}
        <ServiceDetailedSection
          badgeText="Ecommerce"
          title="Ecommerce Solutions"
          tagline="Online Stores & Payments That Convert"
          description="Build a powerful ecommerce platform that drives sales. From storefront design to payment processing and inventory management, we create seamless shopping experiences."
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
          tagline="Immersive Game UI & Interactive Experiences"
          description="Create engaging game interfaces and interactive app experiences. From casual games to complex applications, we design intuitive navigation and HUDs that keep players engaged."
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
          tagline="Intelligent Solutions for Modern Business Problems"
          description="Leverage the power of Artificial Intelligence to automate repetitive tasks, gain insights from data, and build smarter applications. From chatbots to predictive analytics, we have you covered."
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
          tagline="Advanced Machine Learning & Data Agents"
          description="Harness the power of machine learning to solve complex business problems. We build intelligent agents and predictive systems that drive innovation and competitive advantage."
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
          tagline="Scalable Cloud Infrastructure & DevOps"
          description="Design and implement scalable, secure cloud architecture. From migration to optimization, we ensure your applications run smoothly on AWS, Azure, or GCP."
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
          tagline="Grow Your Brand Presence & Reach New Customers"
          description="Strategic digital marketing campaigns that drive engagement and conversions. We handle everything from content creation to ad management across all major social platforms."
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
  );
}
