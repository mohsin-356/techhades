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
      { title: "Groups & Clubs", desc: "Dedicated pages with schedules, photos, and join links" },
      { title: "Collections", desc: "Showcase popular games with tags, categories, and difficulty" },
      { title: "CMS Editing", desc: "Editors can update hero sections, cards, and announcements in minutes" }
    ]
  },
  {
    id: "carbon-jobs-admin",
    title: "Carbon Jobs — Admin Panel",
    cat: "Software",
    stack: ["React", "Node.js", "PostgreSQL"],
    desc: "Admin dashboard for managing job listings, companies, and approvals.",
    image: "/projectgifs/softwaresprojects/Carban jobs Admin.gif",
    aboutProject: "A role-based admin panel built to manage job postings, company profiles, user submissions, and moderation workflows. Designed for speed, clarity, and operational efficiency.",
    problem: "As job listings scale, manual updates and approvals become inconsistent and slow without a centralized tool.",
    solution: "We built an admin dashboard with CRUD tools, approval queues, and analytics-style views so teams can manage listings and content with minimal friction.",
    features: [
      { title: "Role-Based Access", desc: "Permissions for admins, editors, and reviewers" },
      { title: "Approval Workflows", desc: "Queue-based moderation for new posts and edits" },
      { title: "Fast CRUD", desc: "Quick create/edit flows for jobs and companies" },
      { title: "Audit-Friendly", desc: "Consistent forms and validation for reliable data" }
    ]
  },
  {
    id: "crypto-matrix",
    title: "CryptoMatrix",
    cat: "Software",
    stack: ["Next.js", "TypeScript", "Node.js"],
    desc: "Crypto dashboard for tracking markets, portfolios, and alerts.",
    image: "/projectgifs/softwaresprojects/cryptomatrix.gif",
    aboutProject: "CryptoMatrix is a product-style dashboard that visualizes market movements, portfolio snapshots, and watchlists in a clean, high-contrast UI.",
    problem: "Most crypto dashboards overwhelm users with noisy data and poor information hierarchy, making quick decisions difficult.",
    solution: "We designed a structured layout with focused KPIs, watchlists, and quick navigation so users can monitor key metrics without distraction.",
    features: [
      { title: "Market Overview", desc: "Top assets, trending movers, and category snapshots" },
      { title: "Watchlists", desc: "Track selected coins with fast filters" },
      { title: "Portfolio View", desc: "Holdings breakdown with clear allocation visuals" },
      { title: "Alerts", desc: "Configurable price and volatility notifications" }
    ]
  },
  {
    id: "earth-matrix",
    title: "EarthMatrix",
    cat: "Software",
    stack: ["React", "TypeScript", "APIs"],
    desc: "Data-rich dashboard experience themed around Earth and sustainability.",
    image: "/projectgifs/softwaresprojects/EarthMatrix.gif",
    aboutProject: "EarthMatrix is a dashboard concept focused on presenting complex datasets with strong visual hierarchy and smooth interactions for exploration.",
    problem: "Large datasets are hard to interpret quickly when charts, filters, and layouts aren’t designed for scanning and comparison.",
    solution: "We built a UI that prioritizes key metrics, provides intuitive filtering, and uses consistent chart patterns for fast comprehension.",
    features: [
      { title: "KPI Panels", desc: "Headline metrics with trends and deltas" },
      { title: "Filtering", desc: "Quick filters for time ranges and categories" },
      { title: "Responsive Layout", desc: "Works smoothly across desktop and tablet" },
      { title: "Visual System", desc: "Consistent charts, spacing, and typography" }
    ]
  },
  {
    id: "ecom-matrix",
    title: "EcomMatrix",
    cat: "Software",
    stack: ["Next.js", "TypeScript", "Stripe"],
    desc: "Ecommerce dashboard and management suite for products and orders.",
    image: "/projectgifs/softwaresprojects/EcomMatrix.gif",
    aboutProject: "EcomMatrix is a management dashboard designed for ecommerce operators to manage products, orders, customers, and revenue insights from a single interface.",
    problem: "Operators often juggle multiple tools and spreadsheets to track orders, inventory, and performance.",
    solution: "We consolidated core workflows into a single dashboard with clear navigation, actionable tables, and revenue-focused reporting.",
    features: [
      { title: "Orders & Fulfillment", desc: "Order status management with quick actions" },
      { title: "Product Management", desc: "Create and update products with validation" },
      { title: "Customer Insights", desc: "Purchase history and segmentation-ready data" },
      { title: "Revenue Analytics", desc: "Charts and summaries for performance monitoring" }
    ]
  },
  {
    id: "foodify",
    title: "Foodify",
    cat: "Software",
    stack: ["React", "Node.js", "MongoDB"],
    desc: "Food ordering and restaurant management platform experience.",
    image: "/projectgifs/softwaresprojects/foodify.gif",
    aboutProject: "Foodify is a full product experience covering discovery, menu browsing, cart flow, and basic restaurant-side management patterns.",
    problem: "Food apps often suffer from slow discovery, confusing cart flows, and poor status visibility after checkout.",
    solution: "We created a streamlined browsing-to-checkout UX with clear menu structure, fast cart controls, and status-driven order tracking patterns.",
    features: [
      { title: "Menu Browsing", desc: "Category-first menus with add-ons support" },
      { title: "Cart & Checkout", desc: "Fast edits, promo support, and clean totals" },
      { title: "Order Tracking", desc: "Status steps from placed to delivered" },
      { title: "Admin Basics", desc: "Patterns for managing items and availability" }
    ]
  }
];
