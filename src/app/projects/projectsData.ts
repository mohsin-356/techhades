export interface Project {
  id: string;
  title: string;
  cat: string;
  stack: string[];
  desc: string;
  image: string;
  aboutProject: string;
  problem: string;
  solution: string;
  platform?: string;
  domain?: string;
  duration?: string;
  process?: string;
  features?: { title: string; desc: string }[];
}

export const allProjects: Project[] = [

  {
    id: "ai-chatbot-mobile-app",
    title: "AI Chatbot Mobile App",
    cat: "Mobile",
    stack: ["React Native", "Firebase", "Node.js"],
    desc: "Conversational AI assistant for iOS and Android.",
    image: "/projectgifs/ai.gif",
    aboutProject: "AI Chatbot Mobile App is a cross-platform assistant that helps users get instant answers, manage tasks, and receive smart recommendations inside a clean mobile UI.",
    problem: "Users juggle multiple apps and manual searches to find information or complete small tasks, which is slow and distracting on mobile.",
    solution: "We designed a focused mobile experience where users can chat with an AI assistant, trigger quick actions, and review history in a minimal, dark-themed interface.",
    platform: "iOS & Android",
    domain: "Mobile App",
    duration: "3 Months",
    process: "Discovery → UX Flows → UI Design → Development",
    features: [
      { title: "Conversational UI", desc: "Chat-first interface with quick reply chips" },
      { title: "Task Shortcuts", desc: "Action buttons for frequent flows like reminders" },
      { title: "Multi-platform", desc: "Consistent experience on iOS and Android" },
      { title: "Offline First", desc: "Graceful handling of low connectivity" }
    ]
  },
  {
    id: "coursify-uiux",
    title: "Coursify",
    cat: "Mobile",
    stack: ["Figma", "Miro", "Uizard", "Photoshop"],
    desc: "Mobile-first UI/UX for an online course platform.",
    image: "/projectgifs/course.gif",
    aboutProject: "Coursify is a learning app concept focused on distraction-free lesson consumption, progress tracking, and community discussions.",
    problem: "Many course apps feel cluttered, making it hard for learners to focus on content or see their progress.",
    solution: "We created clear information hierarchy, progress-focused dashboards, and simple navigation patterns so learners stay engaged.",
    platform: "iOS",
    domain: "Mobile App",
    duration: "2 Months",
    process: "Research → Wireframes → High-fidelity UI → Prototype",
    features: [
      { title: "Lesson Flows", desc: "Swipe-friendly lesson and quiz experience" },
      { title: "Progress Dashboard", desc: "Visual progress rings and streaks" },
      { title: "Community Screens", desc: "Threaded Q&A and discussions" },
      { title: "Design System", desc: "Reusable components made in Figma" }
    ]
  },
  {
    id: "novobank-app",
    title: "NovoBank App",
    cat: "Design",
    stack: ["Flutter", "Firebase", "Node.js"],
    desc: "Modern fintech banking experience on mobile.",
    image: "/projectgifs/novobank.gif",
    aboutProject: "NovoBank is a digital banking app concept with real-time balances, budgeting tools, and a clean, trustworthy interface.",
    problem: "Traditional banking apps are often slow, confusing, and visually outdated, which breaks user trust.",
    solution: "We designed and implemented a frictionless banking experience with clear money flows, quick transfers, and smart insights.",
    platform: "iOS & Android",
    domain: "Mobile App",
    duration: "4 Months",
    process: "Product Mapping → UX → UI → Development → Handoff",
    features: [
      { title: "Account Overview", desc: "Real-time balances and recent activity" },
      { title: "Budgeting", desc: "Category-based spend limits and insights" },
      { title: "Secure Auth", desc: "Biometric login and secure PIN flows" },
      { title: "Card Controls", desc: "Freeze card, set limits, manage virtual cards" }
    ]
  },
  {
    id: "trip-map-app",
    title: "Trip Map",
    cat: "Design",
    stack: ["Figma", "Miro", "Uizard", "Photoshop"],
    desc: "Travel planning and itinerary UI/UX design.",
    image: "/projectgifs/travel.gif",
    aboutProject: "Trip Map helps travelers plan trips visually with maps, day-wise itineraries, and saved spots.",
    problem: "Travelers bounce between maps, notes, and screenshots, making it hard to keep a single source of truth for trips.",
    solution: "We designed flows where users can pin places on a map, drag them into daily plans, and share itineraries with friends.",
    platform: "Android",
    domain: "Mobile App",
    duration: "3 Months",
    process: "Workshops → User Flows → Wireframes → UI Kit",
    features: [
      { title: "Map-first UI", desc: "Places managed directly on an interactive map" },
      { title: "Day Planner", desc: "Drag-and-drop stops into each day" },
      { title: "Offline Itinerary", desc: "Key details cached for offline use" },
      { title: "Shareable Trips", desc: "Simple share links for friends and family" }
    ]
  },
  {
    id: "popcorn-tv-app",
    title: "PopCorn TV",
    cat: "Mobile",
    stack: ["React Native", "Firebase", "Node.js"],
    desc: "Movie streaming and download mobile app UI.",
    image: "/projectgifs/popcorntv.gif",
    aboutProject: "PopCorn TV is a streaming app concept focused on fast content discovery, watchlists, and offline downloads.",
    problem: "Users spend too much time searching for what to watch and struggle to manage downloads across devices.",
    solution: "We crafted a bold cinematic UI with strong typography, category carousels, and clear download management.",
    platform: "iOS & Android",
    domain: "Mobile App",
    duration: "4 Months",
    process: "Discovery → UX → UI Design → Prototype",
    features: [
      { title: "Smart Home", desc: "Personalised rails by mood and genre" },
      { title: "Downloads", desc: "Offline library with storage indicators" },
      { title: "Player UI", desc: "Minimal, thumb-friendly video controls" },
      { title: "Profiles", desc: "Multiple profiles with separate watchlists" }
    ]
  },
  {
    id: "home-services-app",
    title: "HomeServices",
    cat: "Design",
    stack: ["Figma", "Miro", "Uizard", "Photoshop"],
    desc: "On-demand home services booking app design.",
    image: "/projectgifs/shifty.gif",
    aboutProject: "HomeServices is a mobile app concept where users can book electricians, cleaners, plumbers, and more in a few taps.",
    problem: "Finding reliable home service providers is slow and unorganized, with calls, chats, and payments all happening in different places.",
    solution: "We designed a clean two-sided experience for customers and service partners with transparent pricing and clear status steps.",
    platform: "Android",
    domain: "Mobile App",
    duration: "3 Months",
    process: "Research → Personas → UX → UI → Prototype",
    features: [
      { title: "Service Catalog", desc: "Category-based listing with clear pricing" },
      { title: "Booking Flow", desc: "Step-by-step booking with time slots" },
      { title: "Order Tracking", desc: "Live status from accepted to completed" },
      { title: "Reviews", desc: "Rating and feedback flows for providers" }
    ]
  },
  {
    id: "pet-puzzle-game",
    title: "Pet Puzzle Game",
    cat: "Game",
    stack: ["Unity", "C#", "Figma", "Photoshop"],
    desc: "Casual pet puzzle game with delightful UI and animations.",
    image: "/projectgifs/pet puzzle.gif",
    aboutProject: "Pet Puzzle Game is a mobile-friendly casual game where players match and rescue cute pets through bite-sized levels. The focus is on a bright, friendly interface and satisfying micro-interactions.",
    problem: "Many puzzle games are visually noisy and hard to understand quickly, which makes new players drop off in the first few minutes.",
    solution: "We designed a clean grid-based layout, clear onboarding, and expressive pet characters so players immediately understand goals and enjoy progressing.",
    platform: "iOS & Android",
    domain: "Game App",
    duration: "3 Months",
    process: "Game Loop Mapping → Wireframes → UI/UX → Unity Implementation",
    features: [
      { title: "Level Map", desc: "Scrollable world map with progression states" },
      { title: "Onboarding", desc: "Guided first-time user flow explaining core mechanics" },
      { title: "Juicy Feedback", desc: "Particles, shakes, and sounds tuned for each match" },
      { title: "Accessibility", desc: "Color-safe palettes and large tap targets" }
    ]
  },
  {
    id: "jonah-adventure-game",
    title: "Jonah Adventure",
    cat: "Game",
    stack: ["Unity", "C#", "Figma", "Miro"],
    desc: "Story-driven side-scroller with cinematic UI.",
    image: "/projectgifs/jonah.gif",
    aboutProject: "Jonah Adventure is a narrative side-scroller where players explore a stylized world, uncovering story fragments through environmental puzzles.",
    problem: "Story games often hide critical information in cluttered HUDs or menus, breaking immersion and confusing players.",
    solution: "We created an interface that keeps most UI diegetic—minimal HUD, contextual prompts, and an in-world journal that feels part of the story.",
    platform: "PC & Console",
    domain: "Game App",
    duration: "4 Months",
    process: "Narrative Mapping → UX Flows → UI Concepts → Playtest Iterations",
    features: [
      { title: "Diegetic HUD", desc: "Health, hints, and objectives integrated into the world" },
      { title: "Journal UI", desc: "In-game notebook for story fragments and clues" },
      { title: "Controller-first UX", desc: "Navigation and menus optimised for gamepads" },
      { title: "Cinematic Moments", desc: "Letterboxing and camera work for key scenes" }
    ]
  },
  {
    id: "mermaid-rescue-game",
    title: "Mermaid Rescue",
    cat: "Game",
    stack: ["Unity", "C#", "Figma", "Uizard"],
    desc: "Underwater rescue game with playful UI/UX.",
    image: "/projectgifs/mermaidrescue.gif",
    aboutProject: "Mermaid Rescue is an underwater adventure where players save sea creatures, avoid hazards, and upgrade abilities in a colorful ocean world.",
    problem: "Younger players struggle when controls, objectives, and rewards are not communicated clearly inside action games.",
    solution: "We focused on large, readable UI elements, guided missions, and a simple reward loop so kids always know what to do next.",
    platform: "iOS & Android",
    domain: "Game App",
    duration: "2 Months",
    process: "Persona Definition → Prototype → UI Polish → Asset Integration",
    features: [
      { title: "Mission Panel", desc: "One-tap mission cards with clear objectives" },
      { title: "Kid-friendly Controls", desc: "Simplified input and strong visual feedback" },
      { title: "Rewards", desc: "Collectibles and cosmetic upgrades for mermaids" },
      { title: "Parental Settings", desc: "Session timers and basic safety controls" }
    ]
  },
  {
    id: "hospital-website",
    title: "CarePlus",
    cat: "Web",
    stack: ["Next.js", "TailwindCSS", "PostgreSQL", "Prisma"],
    desc: "Comprehensive patient care and appointment portal.",
    image: "/projectgifs/websites/hospital.gif",
    aboutProject: "A robust hospital management website allowing patients to book appointments, view doctors, and access medical reports online. Streamlines administrative tasks and improves patient experience.",
    problem: "Hospitals struggle with manual appointment handling, fragmented patient data, and inefficient communication channels.",
    solution: "We built a centralized portal for seamless booking, detailed doctor profiles, secure health record access, and automated appointment reminders.",
    features: [
      { title: "Appointment Booking", desc: "Easy scheduling with calendar view" },
      { title: "Doctor Profiles", desc: "Detailed bios, specialties, and availability" },
      { title: "Patient Dashboard", desc: "Secure access to reports and history" },
      { title: "Emergency Alerts", desc: "Quick contact protocols for urgent care" }
    ]
  },
  {
    id: "saas-landing-page",
    title: "SaaS Landing",
    cat: "Web",
    stack: ["Webflow", "GSAP", "JavaScript"],
    desc: "High-conversion landing page with animations.",
    image: "/projectgifs/websites/landingpg.gif",
    aboutProject: "A high-performance landing page designed to convert visitors into leads. Features smooth scroll animations, interactive demos, and clear value propositions.",
    problem: "SaaS products often fail to explain their complex value quickly, leading to high bounce rates and low conversion.",
    solution: "We designed a storytelling-driven page with smooth GSAP animations, interactive elements, and clear CTAs to keep users engaged and informed.",
    features: [
      { title: "Scroll Animations", desc: "Engaging reveals and transitions as users scroll" },
      { title: "Interactive Demo", desc: "Try the product features without signing up" },
      { title: "Speed Optimized", desc: "Instant loading for better SEO and UX" },
      { title: "Lead Capture", desc: "Strategically placed forms and call-to-actions" }
    ]
  },
  {
    id: "ai-image-animation",
    title: "AI Image Animation - Photo to Video Generation",
    cat: "AI/ML",
    stack: ["Python", "Stable Diffusion", "OpenCV", "TensorFlow", "FFmpeg"],
    desc: "Transform static photos into dynamic animated videos with AI-powered motion generation.",
    image: "/projectgifs/ml_projects/Ai image animation Photo to Video Generation.gif",
    aboutProject: "An advanced AI system that brings still photographs to life by generating realistic motion and animation. Using cutting-edge computer vision and deep learning techniques, it creates smooth, natural-looking video animations from single images, perfect for content creators and digital artists.",
    problem: "Content creators and marketers struggle to produce engaging video content from static images. Traditional animation methods are time-consuming, expensive, and require specialized skills.",
    solution: "Our AI-powered system analyzes image content, generates motion trajectories, and creates smooth animations using generative models. It automatically identifies animate elements, applies realistic movement patterns, and outputs high-quality video files.",
    platform: "Web App",
    domain: "AI & Machine Learning",
    duration: "3 Months",
    process: "Image Analysis → Motion Planning → Animation Generation → Video Rendering",
    features: [
      { title: "Smart Motion Detection", desc: "AI identifies animate elements and plans natural movement paths" },
      { title: "Multiple Animation Styles", desc: "Choose from various animation presets like breathing, camera movement, and object motion" },
      { title: "High-Quality Output", desc: "Generates HD videos with smooth frame interpolation" },
      { title: "Batch Processing", desc: "Process multiple images simultaneously for efficiency" },
      { title: "Custom Parameters", desc: "Fine-tune animation intensity, duration, and style" },
      { title: "Export Options", desc: "Multiple video formats and resolutions for different platforms" }
    ]
  },
  {
    id: "ai-parent-monitoring",
    title: "AI Powered Parent Monitoring App",
    cat: "AI/ML",
    stack: ["React Native", "Python", "Computer Vision", "TensorFlow Lite", "Firebase"],
    desc: "Smart childcare monitoring with AI-powered activity recognition and alert system.",
    image: "/projectgifs/ml_projects/Ai powered parent Monitoring App.gif",
    aboutProject: "An intelligent monitoring application that helps parents keep track of their children's activities and safety. Using advanced computer vision and machine learning, it recognizes potentially dangerous situations, monitors child behavior patterns, and provides real-time alerts to ensure child safety.",
    problem: "Parents cannot constantly supervise their children, especially in busy households or when working from home. Traditional baby monitors only provide video feeds without intelligent analysis or proactive safety alerts.",
    solution: "Our app uses AI to analyze video feeds in real-time, recognizing activities, detecting potential hazards, and learning child behavior patterns. It sends smart notifications for unusual activities and provides parents with actionable insights about their child's routines and safety.",
    platform: "iOS & Android",
    domain: "AI & Machine Learning",
    duration: "4 Months",
    process: "Video Analysis → Activity Recognition → Pattern Learning → Alert Generation",
    features: [
      { title: "Activity Recognition", desc: "AI identifies various child activities like playing, sleeping, eating" },
      { title: "Safety Alerts", desc: "Real-time notifications for potentially dangerous situations" },
      { title: "Behavior Analytics", desc: "Tracks and analyzes daily patterns and routines" },
      { title: "Privacy-First Design", desc: "All processing happens on-device with optional cloud backup" },
      { title: "Multi-Camera Support", desc: "Monitor multiple rooms and angles simultaneously" },
      { title: "Parent Dashboard", desc: "Comprehensive app for monitoring and insights" }
    ]
  },
  {
    id: "deep-shield-voice-detect",
    title: "Deep Shield AI - Fake Voice Detection App",
    cat: "AI/ML",
    stack: ["Python", "PyTorch", "Librosa", "FastAPI", "React"],
    desc: "Advanced deepfake voice detection system for identifying AI-generated audio in real-time.",
    image: "/projectgifs/ml_projects/Deep Shield Ai Fake Voice Detect App.gif",
    aboutProject: "A sophisticated voice authentication system that detects deepfake and AI-generated voices with high accuracy. Using advanced neural networks and audio analysis techniques, it provides real-time protection against voice-based fraud and misinformation for businesses and individuals.",
    problem: "AI-generated voices are becoming increasingly sophisticated, making it difficult to distinguish real from fake audio. This poses serious security risks for voice authentication, financial transactions, and misinformation campaigns.",
    solution: "Deep Shield analyzes multiple audio characteristics including spectral patterns, prosody, vocal tract resonances, and micro-artifacts that AI models struggle to replicate perfectly. Our ensemble of specialized models provides confidence scores and detailed analysis for each audio sample.",
    platform: "Web & Mobile",
    domain: "AI Security & Authentication",
    duration: "5 Months",
    process: "Audio Analysis → Feature Extraction → Model Inference → Confidence Scoring",
    features: [
      { title: "Real-Time Detection", desc: "Analyze audio streams live with毫isecond response times" },
      { title: "Multi-Model Analysis", desc: "Ensemble of specialized models for different voice types" },
      { title: "Confidence Scoring", desc: "Detailed probability scores with uncertainty quantification" },
      { title: "Audio Forensics", desc: "Comprehensive analysis report with visualizations" },
      { title: "API Integration", desc: "Easy integration with existing security systems" },
      { title: "Continuous Learning", desc: "Models update with new deepfake techniques" }
    ]
  },
  {
    id: "pharmacare-web",
    title: "PharmaCare",
    cat: "Web",
    stack: ["Next.js", "Stripe", "Sanity CMS"],
    desc: "Online pharmacy and health store.",
    image: "/projectgifs/websites/pharmacare.gif",
    aboutProject: "A digital pharmacy allowing users to order medicines, upload prescriptions, and consult pharmacists online. Ensures safe and timely delivery of healthcare products.",
    problem: "Patients often face long queues at pharmacies, lack access to specific medicines, and have difficulty verifying prescription requirements.",
    solution: "We built an easy-to-use ecommerce store for medicines with secure prescription verification, pharmacist consultation chat, and doorstep delivery.",
    features: [
      { title: "Prescription Upload", desc: "Secure upload for prescription-only medicines" },
      { title: "Medicine Search", desc: "Fast search by brand or generic name" },
      { title: "Consultation", desc: "Secure chat with verified pharmacists" },
      { title: "Express Delivery", desc: "Real-time order tracking and updates" }
    ]
  }
  ,
  {
    id: "content-gen-automation",
    title: "Automated Content Generation Pipeline",
    cat: "Ai and Automation",
    stack: ["n8n", "OpenAI API", "Google Sheets", "WordPress API"],
    desc: "Autonomous end-to-end content creation and publishing workflow.",
    image: "/projectgifs/ai and automation/Contnet Generation.gif",
    aboutProject: "A fully autonomous content engine that streamlines the entire production lifecycle. From topic ideation and keyword research to drafting, SEO optimization, and final publishing, this system removes manual bottlenecks. It ensures a consistent stream of high-quality, on-brand content across multiple channels with minimal human intervention.",
    problem: "Maintaining a consistent content schedule is resource-intensive. Teams struggle with the repetitive grind of drafting, formatting, and distributing content, leading to burnout and inconsistent quality.",
    solution: "We engineered a seamless n8n workflow that orchestrates the entire process. It pulls trends, generates drafts using advanced LLMs, formats them for specific platforms, and manages the publishing schedule automatically.",
    features: [
      { title: "Trend Monitoring", desc: "Scrapes and analyzes data to identify high-engagement topics" },
      { title: "Automated Drafting", desc: "Generates comprehensive articles with proper formatting" },
      { title: "Multi-Platform Sync", desc: "Publishes directly to WordPress, Medium, and social channels" },
      { title: "SEO Optimization", desc: "Automatically inserts keywords and meta descriptions" }
    ]
  },
  {
    id: "customer-support-agent",
    title: "AI Customer Support Agent",
    cat: "Ai and Automation",
    stack: ["n8n", "LangChain", "Pinecone", "Telegram API"],
    desc: "24/7 intelligent support handling complex queries autonomously.",
    image: "/projectgifs/ai and automation/customer support ai agent.gif",
    aboutProject: "An always-on digital support representative capable of handling complex customer inquiries with empathy and precision. Unlike rigid chatbots, this agent understands context, remembers interaction history, and can take diverse actions to resolve issues immediately.",
    problem: "Customer support teams are overwhelmed by repetitive queries, leading to slow response times and frustrated users. Traditional chatbots fail to handle nuance, resulting in a poor customer experience.",
    solution: "We developed a context-aware AI agent integrated with your knowledge base. It resolves 80% of queries instantly, escalates complex issues intelligently, and operates 24/7 across multiple communication channels.",
    features: [
      { title: "Omni-channel Support", desc: "Seamless operation on Telegram, WhatsApp, and Web Chat" },
      { title: "Knowledge Retrieval", desc: "Instantly accesses company docs to provide accurate answers" },
      { title: "Smart Escalation", desc: "Detects sentiment and hands off to humans when necessary" },
      { title: "Action Execution", desc: "Can process refunds, check status, and update records" }
    ]
  },
  {
    id: "n8n-voice-agent",
    title: "n8n Voice AI Agent",
    cat: "Ai and Automation",
    stack: ["n8n", "OpenAI Realtime API", "Twilio", "Supabase"],
    desc: "Human-like conversational voice bot for business automation.",
    image: "/projectgifs/ai and automation/n8n voice agent.gif",
    aboutProject: "A next-generation voice interface that allows users to interact with your business naturally over the phone. This voice agent can handle appointments, qualify leads, and provide information with near-zero latency, feeling remarkably human.",
    problem: "Phone support is expensive and difficult to scale. Basic IVR systems are frustrating for callers, while human agents can only handle one call at a time.",
    solution: "We implemented a real-time voice agent using the latest OpenAI Realtime API. It understands interruptions, manages turn-taking perfectly, and can trigger complex backend workflows during the call.",
    features: [
      { title: "Natural Conversation", desc: "Handles interruptions and pauses just like a human" },
      { title: "Appointment Booking", desc: "Checks calendar availability and books slots in real-time" },
      { title: "CRM Integration", desc: "Automatically logs call details and outcomes to your database" },
      { title: "Low Latency", desc: "Optimized infrastructure for instant voice responses" }
    ]
  },
  {
    id: "rag-faq-system",
    title: "RAG FAQ System",
    cat: "Ai and Automation",
    stack: ["n8n", "Qdrant", "LlamaIndex", "Slack API"],
    desc: "Instant, accurate answers from your internal knowledge base.",
    image: "/projectgifs/ai and automation/RAG FAQ.gif",
    aboutProject: "An intelligent internal search engine that turns your company's scattered documentation into a conversational expert. Employees can ask questions in plain English and receive precise, sourced answers instantly, drastically reducing onboarding time and information silos.",
    problem: "Valuable company knowledge is often buried in PDFs, Google Docs, and Slack threads. Finding specific information takes time and interrupts workflows.",
    solution: "We built a robust RAG (Retrieval-Augmented Generation) pipeline that continuously indexes your internal documents. It uses semantic search to find the exact relevant chunks and synthesizes a direct answer.",
    features: [
      { title: "Dynamic Indexing", desc: "Automatically updates when new documents are added" },
      { title: "Source Citations", desc: "Always provides links to the source documents for verification" },
      { title: "Slack Integration", desc: "Lives where your team works for frictionless access" },
      { title: "Secure Access", desc: "Respects document permissions and confidentiality" }
    ]
  },
  {
    id: "stock-analysis-bot",
    title: "Stock Market Analyst Bot",
    cat: "Ai and Automation",
    stack: ["n8n", "Yahoo Finance API", "GPT-4", "Discord API"],
    desc: "Real-time financial analysis and regulatory insights.",
    image: "/projectgifs/ai and automation/reg apple stock.gif",
    aboutProject: "A specialized financial assistant that monitors market data and regulatory filings in real-time. It provides investors with instant summaries, anomaly detection, and sentiment analysis on specific stocks, helping them make data-driven decisions faster.",
    problem: "The financial market moves faster than any human can track. Filtering through earnings reports, news, and price action to find actionable insights is overwhelming.",
    solution: "We created an autonomous analyst that monitors specific tickers 24/7. It correlates price movements with news events and generates concise, actionable reports delivered directly to your chat application.",
    features: [
      { title: "Real-time Alerts", desc: "Instant notifications for significant price or volume changes" },
      { title: "Sentiment Analysis", desc: "Evaluates news and earnings calls for bullish/bearish signals" },
      { title: "Technical Summary", desc: "Generates key technical indicators and trend analysis" },
      { title: "Multi-Ticker Tracking", desc: "Monitors a portfolio of assets simultaneously" }
    ]
  },
  {
    id: "ecomm2-store",
    title: "OLYAMPIA — Headless Storefront",
    cat: "Ecommerce",
    stack: ["Next.js", "Stripe", "Sanity", "TailwindCSS"],
    desc: "Headless ecommerce with blazing-fast UX and optimized checkout.",
    image: "/projectgifs/websites/ecomm2.gif",
    aboutProject: "A modern headless ecommerce storefront focused on performance, SEO, and content agility. Built with Next.js and Sanity CMS for flexible merchandising and rapid iteration.",
    problem: "Traditional ecommerce stacks are slow to iterate and hard to customize for rich content and SEO.",
    solution: "We implemented a headless architecture using Next.js + Sanity with Stripe payments, providing fast pages, flexible content, and a smooth checkout.",
    features: [
      { title: "Product Catalog", desc: "CMS-driven product and content management" },
      { title: "Cart & Checkout", desc: "Optimized flows with Stripe integration" },
      { title: "SEO Optimized", desc: "SSR, metadata, and structured data" },
      { title: "Performance", desc: "Image optimization and caching for speed" }
    ]
  },
  {
    id: "ecommerce-wp",
    title: "Ecommerce Dashborads — WooCommerce",
    cat: "Ecommerce",
    stack: ["WordPress", "WooCommerce", "Elementor", "Stripe"],
    desc: "WooCommerce storefront with custom pages and secure payments.",
    image: "/projectgifs/websites/ecommerce.gif",
    aboutProject: "A scalable WooCommerce setup tailored for quick product management and marketing pages. Built to be easily editable by non-technical teams.",
    problem: "Merchants need an editable storefront without complex developer workflows.",
    solution: "We delivered a WooCommerce site with custom templates, Elementor controls, and Stripe for secure transactions.",
    features: [
      { title: "Editable Pages", desc: "Landing pages and promos with visual editor" },
      { title: "Inventory", desc: "Product, variants, and coupon management" },
      { title: "Payments", desc: "Stripe and local gateways" },
      { title: "Reports", desc: "Sales analytics and order insights" }
    ]
  },
  {
    id: "omnibuy-shopify",
    title: "OmniBuy — Shopify Store",
    cat: "Ecommerce",
    stack: ["Shopify", "Liquid", "Klaviyo", "Apps"],
    desc: "High-converting Shopify theme with marketing integrations.",
    image: "/projectgifs/websites/OmniBuy.gif",
    aboutProject: "A conversion-focused Shopify storefront with tailored theme sections, optimized PDPs/PLPs, and automated flows for retention.",
    problem: "Default themes limit brand expression and conversion optimizations.",
    solution: "We built custom Liquid sections, improved performance, and integrated Klaviyo flows for abandoned carts and win-backs.",
    features: [
      { title: "Custom Sections", desc: "Reusable theme blocks for flexible layouts" },
      { title: "Optimized PDP", desc: "Trust elements, bundles, and sticky ATC" },
      { title: "Apps & Flows", desc: "Klaviyo, reviews, subscriptions, and more" },
      { title: "Speed", desc: "Theme performance tuning and asset hygiene" }
    ]
  },
  {
    id: "board-gaming-website",
    title: "Board Gaming — Community & Events Site",
    cat: "Web",
    stack: ["Next.js", "TailwindCSS", "TypeScript", "Sanity CMS"],
    desc: "A fast, friendly hub for discovering board game nights, leagues, and local clubs.",
    image: "/projectgifs/websites/Board Gaming.gif",
    aboutProject: "We built a vibrant community website that makes it effortless to find nearby board game events, browse collections, and connect with fellow players. The design balances playful energy with clear structure so visitors immediately understand what's happening and how to join in.",
    problem: "Local gaming groups usually coordinate via scattered chats and posts, which makes discovery difficult and event attendance inconsistent.",
    solution: "We centralized everything into a polished site: upcoming events with RSVP, group profiles, simple hosting tools, and lightweight CMS-driven updates. Clear typography and color accents guide attention without overwhelming the page.",
    features: [
      { title: "Event Calendar", desc: "Filter by location, game type, and skill level with quick RSVP" },
      { title: "Groups & Clubs", desc: "Dedicated pages with schedules, photos, and join links" },
      { title: "Collections", desc: "Showcase popular games with tags, categories, and difficulty" },
      { title: "CMS Editing", desc: "Editors can update hero sections, cards, and announcements in minutes" }
    ]
  },
  {
    id: "carbon-jobs-website",
    title: "Carbon Jobs — Climate Tech Careers Portal",
    cat: "Web",
    stack: ["Next.js", "TailwindCSS", "PostgreSQL", "Prisma"],
    desc: "A purpose-driven job board helping talent find roles in climate and carbon-reduction startups.",
    image: "/projectgifs/websites/Carbon Jobs.gif",
    aboutProject: "Carbon Jobs connects mission-driven candidates with impactful companies. We focused on clean information hierarchy, search clarity, and fast performance so users can explore roles with zero friction.",
    problem: "Climate roles are spread across multiple platforms and vague tags, making it hard for candidates to find relevant, credible opportunities.",
    solution: "A focused experience with semantic search, useful filters (role, location, compensation, impact area), and company profiles that actually tell the mission story. Strong accessibility and crisp typography keep it professional and trustworthy.",
    features: [
      { title: "Smart Search", desc: "Keyword + structured filters for precise matching" },
      { title: "Company Profiles", desc: "Mission, funding stage, impact areas, and culture highlights" },
      { title: "Saved Roles", desc: "One-click bookmarks and email alerts" },
      { title: "Admin Tools", desc: "Simple posting workflow with moderation and analytics" }
    ]
  },
  {
    id: "customer-support-agency-website",
    title: "Customer Support Agency — Service Website",
    cat: "Web",
    stack: ["Next.js", "TailwindCSS", "Framer Motion", "Sanity CMS"],
    desc: "A high-converting agency site with clear services, credibility signals, and lead capture.",
    image: "/projectgifs/websites/customer support agency.gif",
    aboutProject: "We designed a professional website that positions the agency as a reliable extension of in‑house teams. Strong value props, social proof, and process clarity help visitors trust and convert.",
    problem: "Agencies often struggle to communicate service depth and differentiation without overwhelming visitors.",
    solution: "We crafted a concise narrative: outcomes first, detailed services second, then proof and next steps. Gradients and subtle motion provide a premium feel while keeping readability and speed intact.",
    features: [
      { title: "Services Catalog", desc: "Clearly packaged offerings with tiers and add‑ons" },
      { title: "Case Highlights", desc: "Short, scannable wins with metrics and logos" },
      { title: "Conversion Paths", desc: "Contact, discovery call, and quote forms with validation" },
      { title: "CMS Editing", desc: "Marketing can update hero copy and CTAs instantly" }
    ]
  },
  {
    id: "talwarwaly-website",
    title: "TalwarWaly — Brand Website",
    cat: "Web",
    stack: ["Next.js", "TailwindCSS", "TypeScript", "SEO"],
    desc: "A bold, modern brand site focused on story, product highlights, and trust signals.",
    image: "/projectgifs/websites/TalwarWaly.gif",
    aboutProject: "TalwarWaly needed a site that feels contemporary and confident. We combined expressive visuals with disciplined layout and performance budgets, so the brand looks premium without sacrificing speed.",
    problem: "Previous pages were inconsistent and text‑heavy, making it hard for users to understand the offering quickly.",
    solution: "We introduced a modular component system: hero narratives, product spotlights, testimonials, and FAQs—each optimized for skimmability. Subtle interactions create delight without distracting from the message.",
    features: [
      { title: "Story-first Layout", desc: "Sections that guide users from brand narrative to offering" },
      { title: "Product Highlights", desc: "Image-forward modules with clear benefits and specs" },
      { title: "Trust & Social Proof", desc: "Reviews, badges, and partner mentions for credibility" },
      { title: "Performance & SEO", desc: "Lighthouse-friendly setup with semantic content structure" }
    ]
  },
  {
    id: "board-gaming-uiux",
    title: "Board Gaming — UI/UX Case Study",
    cat: "Design",
    stack: ["Figma", "Design Systems", "Framer", "Prototyping"],
    desc: "Community platform redesigned with information architecture, component library, and accessible flows.",
    image: "/projectgifs/websites/Board Gaming.gif",
    aboutProject: "We reframed the experience around discovery and participation—designing a clear structure for events, groups, and collections so people find what matters fast.",
    problem: "Event discovery and participation suffered because information lived across chats and feeds, with inconsistent presentation and no shared patterns.",
    solution: "We rebuilt the UX from the ground up: explicit IA, reusable components, clean navigation, and guided flows for browsing, joining, and hosting.",
    features: [
      { title: "Information Architecture", desc: "Card sorting and sitemap for events, clubs, and collections" },
      { title: "Design System", desc: "Tokens, components, and patterns for rapid iteration" },
      { title: "Accessibility", desc: "Color contrast, keyboard navigation, and focus states" },
      { title: "Usability Testing", desc: "Iterated on RSVP and filters based on real user feedback" }
    ]
  },
  {
    id: "carbon-jobs-uiux",
    title: "Carbon Jobs — UI/UX Case Study",
    cat: "Design",
    stack: ["Figma", "Wireframes", "Prototyping", "Content Strategy"],
    desc: "A focused job-search UX with clean structure, powerful filters, and credible company profiles.",
    image: "/projectgifs/websites/Carbon Jobs.gif",
    aboutProject: "We designed a recruiting experience where mission-driven candidates quickly understand fit, impact area, and requirements.",
    problem: "Climate roles lacked consistent structure, unclear filters, and weak narratives, causing drop-offs.",
    solution: "We clarified job content models, defined clear filters and empty states, and built a profile template that tells the mission and value clearly.",
    features: [
      { title: "Job Search UX", desc: "Frictionless search with sensible defaults and saved views" },
      { title: "Filtering & Sorting", desc: "Role, location, compensation, and impact areas" },
      { title: "Company Storytelling", desc: "Profile templates that highlight mission and culture" },
      { title: "Empty States", desc: "Helpful messaging that guides users to adjust filters" }
    ]
  },
  {
    id: "customer-support-agency-uiux",
    title: "Customer Support Agency — UI/UX Case Study",
    cat: "Design",
    stack: ["Figma", "Framer", "Design Systems", "Motion"],
    desc: "Outcome-first landing and service UX that builds trust and drives high-quality leads.",
    image: "/projectgifs/websites/customer support agency.gif",
    aboutProject: "We focused on clarity, credibility, and momentum—structuring the story so visitors know what you do, why it works, and how to start.",
    problem: "Visitors struggled to differentiate offerings and find a confident path to contact.",
    solution: "We reorganized IA, elevated proof, and designed clear conversion paths with accessible forms and progressive disclosure.",
    features: [
      { title: "Landing & IA", desc: "Narrative structure from value to details to proof" },
      { title: "Pricing UX", desc: "Tier cards that communicate scope and options clearly" },
      { title: "Testimonials & Proof", desc: "Logos, quotes, and results surfaced at key moments" },
      { title: "Forms UX", desc: "Reduced friction with validation and helpful microcopy" }
    ]
  },
  {
    id: "fitpulse-mobile",
    title: "FitPulse — Personal Fitness & Habit Coach",
    cat: "Mobile",
    stack: ["React Native", "Expo", "TypeScript", "Firebase"],
    desc: "Track workouts, build habits, and stay motivated with a clean, friendly mobile UI.",
    image: "/projectgifs/fitness App.gif",
    aboutProject: "FitPulse helps people stay consistent. The experience focuses on simple logging, gentle streaks, and progress visuals that actually motivate rather than overwhelm.",
    problem: "Most fitness apps feel heavy: too many inputs, complex graphs, and no emotional reinforcement. Users drop off quickly.",
    solution: "We designed a calm, encouraging flow—fast logging, lightweight habits, and small wins that build momentum. Clear typography and delightful micro‑interactions make the routine feel rewarding.",
    platform: "iOS & Android",
    domain: "Mobile App",
    duration: "3 Months",
    process: "Research → Wireframes → UI Kit → Development",
    features: [
      { title: "Fast Logging", desc: "One‑tap sets, weights, and habit check‑ins" },
      { title: "Streaks & Goals", desc: "Gentle reminders and achievable milestones" },
      { title: "Progress Visuals", desc: "Clear charts that highlight meaningful change" },
      { title: "Sync & Backup", desc: "Secure cloud sync across devices" }
    ]
  },
  {
    id: "furniee-mobile-commerce",
    title: "Furniee — Furniture Shopping with AR",
    cat: "Mobile",
    stack: ["React Native", "Expo", "Three.js", "Stripe"],
    desc: "Visualize furniture at home with AR and checkout in seconds.",
    image: "/projectgifs/furniee.gif",
    aboutProject: "Buying furniture is risky when you can’t picture it at home. Furniee removes that uncertainty with realistic AR previews and a frictionless purchase flow.",
    problem: "Photos alone don’t communicate scale, color, or fit—leading to returns and second‑guessing.",
    solution: "We built an AR‑first shopping experience with accurate scaling, room sizing helpers, and a checkout that respects the user’s time.",
    platform: "iOS & Android",
    domain: "Mobile App",
    duration: "4 Months",
    process: "Discovery → Prototyping → AR Flows → Payments",
    features: [
      { title: "AR Placement", desc: "Place sofas, tables, and decor true‑to‑scale" },
      { title: "Room Measurement", desc: "Auto measure spaces and save room profiles" },
      { title: "Wishlist & Sync", desc: "Save looks and revisit across devices" },
      { title: "One‑Tap Checkout", desc: "Secure payments with Stripe" }
    ]
  },
  {
    id: "homeie-services-app",
    title: "Homeie — Home Services Booking",
    cat: "Mobile",
    stack: ["Flutter", "Firebase", "Node.js"],
    desc: "Book cleaners, electricians, and handymen with live status updates.",
    image: "/projectgifs/homeie.gif",
    aboutProject: "Homeie connects busy households with trusted professionals. The app emphasizes clarity: transparent pricing, exact time slots, and real‑time status.",
    problem: "Scheduling home services is often a guessing game—unclear availability, hidden fees, and poor communication.",
    solution: "We designed a straightforward booking flow, accurate ETAs, and in‑app chat so users feel in control from request to completion.",
    platform: "iOS & Android",
    domain: "Mobile App",
    duration: "3 Months",
    process: "Research → UX Flows → UI → Build",
    features: [
      { title: "Service Catalog", desc: "Clear categories with upfront pricing" },
      { title: "Live Tracking", desc: "Real‑time arrival estimates and status" },
      { title: "In‑App Chat", desc: "Coordinate details securely inside the app" },
      { title: "Secure Payments", desc: "Card on file with receipts and history" }
    ]
  },
  {
    id: "uptome-wellness-app",
    title: "UpToMe — Mood & Journaling",
    cat: "Mobile",
    stack: ["React Native", "SQLite", "Notifications", "Reanimated"],
    desc: "Gentle journaling, mood tracking, and mindful routines.",
    image: "/projectgifs/uptome.gif",
    aboutProject: "UpToMe is a calming space to capture feelings and patterns. The design is soft, private by default, and built to support small daily practices.",
    problem: "Wellness tools can feel clinical or demanding, causing people to abandon them when they need them most.",
    solution: "We reduced friction to the essentials—quick mood check‑ins, tiny prompts, and insights that feel supportive rather than judgmental.",
    platform: "iOS & Android",
    domain: "Mobile App",
    duration: "2 Months",
    process: "Concept → Prototype → MVP → Iterations",
    features: [
      { title: "Mood Check‑ins", desc: "Two‑tap entries with optional notes and tags" },
      { title: "Guided Journaling", desc: "Short prompts for reflection and clarity" },
      { title: "Streaks & Insights", desc: "Gentle trends—not pressure—over time" },
      { title: "Privacy‑First", desc: "Local storage with optional encrypted backup" }
    ]
  }
];

