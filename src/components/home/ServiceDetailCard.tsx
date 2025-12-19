"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users,
  Code2,
  Smartphone,
  Cpu,
  Palette,
  Bot,
  TrendingUp,
  Database,
  Cloud,
  ShieldCheck,
  Zap
} from "lucide-react";

// Technology icons mapping
const techIcons: { [key: string]: string } = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Swift": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  "Kotlin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  ".NET": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Electron": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Adobe XD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
  "Photoshop": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  "Illustrator": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "REST API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
};

interface ServiceDetail {
  id: string;
  topTag: string;
  title: string;
  description: string;
  features: { icon: any; text: string }[];
  technologies: string[];
  duration: string;
  satisfaction: string;
  gif?: string;
}

const serviceDetails: { [key: string]: ServiceDetail } = {
  web: {
    id: "web",
    topTag: "Website Development",
    title: "Website Development According to Your Needs",
    description: "Build powerful, fast, and responsive websites tailored to your business goals. Our expert developers create modern web solutions using cutting-edge technologies to enhance user experience and performance.",
    features: [
      { icon: Code2, text: "Custom-Built Solutions" },
      { icon: Zap, text: "Fast & Responsive Design" },
      { icon: Cloud, text: "SEO-Friendly Architecture" },
      { icon: ShieldCheck, text: "Scalable & Secure Systems" }
    ],
    technologies: ["React", "Next.js", "HTML", "CSS", "JavaScript", "Firebase", "Node.js"],
    duration: "Based on Requirements",
    satisfaction: "100% Guaranteed",
    gif: "https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif"
  },
  mobile: {
    id: "mobile",
    topTag: "App Development",
    title: "Build Scalable & Engaging Mobile Applications",
    description: "We design and develop modern mobile apps that deliver speed, usability, and security. Whether Android, iOS, or cross-platform, our apps provide a seamless experience that boosts your digital presence.",
    features: [
      { icon: Smartphone, text: "Android & iOS Development" },
      { icon: Zap, text: "Fast & Optimized Performance" },
      { icon: Users, text: "User-Centric Interface" },
      { icon: Cloud, text: "Cloud-Integrated Solutions" }
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "REST API"],
    duration: "Based on App Scope",
    satisfaction: "100% Guaranteed",
    gif: "https://cdn.dribbble.com/userupload/19730654/file/original-23a9368d5081d24e5277c67b35b68059.gif"
  },
  software: {
    id: "software",
    topTag: "Software Development",
    title: "Custom Software Solutions Tailored for Your Business",
    description: "We create efficient, scalable, and secure software systems to automate workflows and improve productivity. Our custom-built solutions ensure your business runs smarter and faster.",
    features: [
      { icon: Cpu, text: "End-to-End Software Solutions" },
      { icon: ShieldCheck, text: "Secure & Reliable Architecture" },
      { icon: Code2, text: "Custom Integrations" },
      { icon: Zap, text: "Automation & Optimization" }
    ],
    technologies: ["Python", "Node.js", ".NET", "Electron", "SQL", "Firebase", "MongoDB"],
    duration: "Based on Project Scale",
    satisfaction: "100% Guaranteed",
    gif: "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
  },
  design: {
    id: "design",
    topTag: "UI/UX Designing",
    title: "Beautiful & Functional Designs That Convert",
    description: "Our UI/UX design services focus on creating intuitive, attractive, and conversion-focused interfaces. We blend creativity with usability to deliver designs that users love and businesses grow with.",
    features: [
      { icon: Palette, text: "Creative Visual Design" },
      { icon: Users, text: "User-Centered Approach" },
      { icon: Database, text: "Wireframes & Prototypes" },
      { icon: Zap, text: "Interactive Design Systems" }
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
    duration: "Based on Project Type",
    satisfaction: "100% Guaranteed",
    gif: "https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/f9826f0af8a49462f048262a8502035b.gif"
  },
  ai: {
    id: "ai",
    topTag: "AI & Automation",
    title: "Empower Your Business with Intelligent Automation",
    description: "We integrate AI-driven solutions that streamline operations and improve decision-making. From chatbots to process automation, our smart systems help you save time and boost efficiency.",
    features: [
      { icon: Bot, text: "AI Chatbots & Assistants" },
      { icon: TrendingUp, text: "Data-Driven Insights" },
      { icon: Zap, text: "Workflow Automation" },
      { icon: Cpu, text: "Predictive Analytics" }
    ],
    technologies: ["Python", "TensorFlow", "OpenAI API", "Dialogflow", "Power Automate"],
    duration: "Based on Automation Level",
    satisfaction: "100% Guaranteed",
    gif: "https://gifdb.com/images/high/ai-humanoid-automation-zb3dt1s0n11ucfwb.webp"
  },
  social: {
    id: "social",
    topTag: "Ad & Social Media",
    title: "Grow Your Brand with Targeted Digital Campaigns",
    description: "We manage performance-based ad campaigns and creative social media strategies that drive engagement and conversions across platforms like Meta, Google, and YouTube.",
    features: [
      { icon: TrendingUp, text: "Performance Marketing" },
      { icon: Smartphone, text: "Social Media Strategy" },
      { icon: Zap, text: "Targeted Ad Campaigns" },
      { icon: Database, text: "Brand Growth Analytics" }
    ],
    technologies: ["Meta Ads", "Google Ads", "Canva", "YouTube Studio", "Analytics Tools"],
    duration: "Flexible",
    satisfaction: "100% Guaranteed",
    gif: "https://cdn.dribbble.com/userupload/21955253/file/original-cbc2133f09318197a07643d9033a3f16.gif"
  }
};

interface ServiceDetailCardProps {
  category: string;
}

export default function ServiceDetailCard({ category }: ServiceDetailCardProps) {
  const service = serviceDetails[category] || serviceDetails.web;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-900 backdrop-blur-sm border border-gray-200 dark:border-slate-700 shadow-lg"
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left Side - GIF/Animation */}
        <div className="relative h-[400px] lg:h-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20" />
          {service.gif ? (
            <img
              src={service.gif}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center p-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-dashed border-purple-300 dark:border-purple-600"
              />
              <p className="text-gray-500 dark:text-gray-400">Animation Placeholder</p>
            </div>
          )}
        </div>

        {/* Right Side - Content */}
        <div className="p-8 lg:p-10">
          {/* Top Tag */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-4">
            <span className="mr-1">{service.topTag}</span>
            <span className="animate-pulse">✨</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-6">
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
              🏷️ Feature Tags
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {service.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <Icon className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
              🧩 Technologies Used
            </h4>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
                >
                  {techIcons[tech] && (
                    <img 
                      src={techIcons[tech]} 
                      alt={tech}
                      className="w-4 h-4"
                    />
                  )}
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 gap-4 py-4 mb-6 border-y border-gray-200 dark:border-slate-700">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-500">Project Duration</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{service.duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-500">Client Satisfaction</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{service.satisfaction}</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3">
            <Button variant="primary" size="default">
              {service.topTag}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="secondary" size="default">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
