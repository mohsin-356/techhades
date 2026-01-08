export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceFaqGroup = {
  slug: string;
  heading: string;
  intro?: string;
  items: FaqItem[];
};

export const SERVICE_FAQS: Record<string, ServiceFaqGroup> = {
  "mobile-development": {
    slug: "mobile-development",
    heading: "Mobile App Development FAQs",
    intro:
      "Answers to common questions about custom mobile app development with AlienMatrix — timelines, costs, security, and team structure.",
    items: [
      {
        question: "How does working with AlienMatrix on a mobile app work?",
        answer:
          "We follow a clear, step-by-step process to build your app together. First, we gather requirements by understanding your business needs and goals. Next, our UI/UX designers create wireframes and visuals so we all agree on the look and flow. Then our developers build the app on your chosen platforms (iOS, Android, or both). Finally, we do thorough testing and launch the app to the App Store/Google Play. Throughout each stage, you’ll receive regular updates and have chances to give feedback, ensuring the final app matches your vision.",
      },
      {
        question: "How much does it cost to build a mobile app?",
        answer:
          "Every app is unique, so pricing depends on your specific needs. Factors include the app’s complexity (simple or full-featured), the number of platforms (iOS, Android, or both), and any special integrations (like payment systems or GPS). For example:\nSimple apps (basic features, one platform) cost less and take a few weeks.\nComplex apps (advanced features, custom backend, multiple platforms) take more time and budget.\nOnce we understand what you want, we’ll give you a transparent, detailed quote. Contact us for a free estimate tailored to your project so you’ll know exactly what to expect.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "Timeline depends on the app’s scope. Generally:\nBasic app: around 6–8 weeks.\nComplex app: 3–6 months or more (with features like databases, social logins, or e-commerce).\nAfter discussing your requirements, we’ll share a realistic schedule with milestones. This way, you’ll see the plan before we start. We manage the project actively, so you always know what’s happening and when we’ll finish each phase.",
      },
      {
        question: "Who is on the mobile app development team?",
        answer:
          "Your dedicated team is tailored to your project, but typically includes:\nProject Manager: Oversees the project and communicates with you.\nUI/UX Designer: Crafts the app’s look and user experience.\nMobile Developers: Specialists in iOS, Android, or cross-platform.\nQA/Testers: Ensure the app works smoothly without bugs.\nFor larger projects, we might add a backend developer, business analyst, or additional designers. In every case, we choose the right experts so your app gets built efficiently and to high quality.",
      },
      {
        question: "How will you ensure the mobile app is secure?",
        answer:
          "Security is a top priority. We implement industry best practices such as:\nSecure Authentication: We use proven methods (OAuth, token-based login) to protect user accounts.\nData Encryption: Sensitive data is encrypted in transit (HTTPS) and at rest (encrypted databases).\nAPI Security: All data exchanges use secure APIs with proper validation and error handling.\nOngoing Testing: We perform regular security testing (like penetration tests) before launch.\nWe also follow standards like OWASP guidelines and (if needed) GDPR compliance. This way, your app and its users’ data stay safe.",
      },
    ],
  },

  "web-development": {
    slug: "web-development",
    heading: "Web Development FAQs",
    intro:
      "Quick answers about working with AlienMatrix as a web development agency — SEO-friendly builds, responsive design, redesigns, and maintenance.",
    items: [
      {
        question: "What types of websites does AlienMatrix develop?",
        answer:
          "We build all kinds of custom websites, tailored to your goals. Examples include:\nBusiness/Corporate Sites: Professional sites to showcase your company and services.\nE-commerce Platforms: Online stores (custom-built or on platforms like Shopify).\nWeb Applications/SaaS: Interactive applications and software platforms.\nDashboards/Portals: Interfaces for data analytics, admin panels, or client portals.\nPortfolios: Clean, visually appealing sites for creative professionals.\nWe adapt each project to your industry and audience. In short, if you can think of it online, we can create it.",
      },
      {
        question: "Are your websites SEO-friendly?",
        answer:
          "Absolutely. We incorporate SEO best practices from day one:\nClean Code & Structure: We write semantic HTML and organize content logically.\nPerformance Optimization: Fast loading pages (optimized images, caching) improve SEO.\nResponsive Design: Mobile-friendly sites rank better on search engines.\nOn-page SEO: Proper use of meta tags, headings, and URLs.\nAccessible Content: Using alt text and readable fonts.\nAfter launch, we can also help with ongoing SEO strategy (keywords, content, backlinks). The result is a site that’s easy for search engines to crawl and rank.",
      },
      {
        question: "Do you provide responsive design?",
        answer:
          "Yes. Every website we build is fully responsive, meaning it automatically adapts to all screen sizes. Your site will look and function great on smartphones, tablets, and desktops. We test on different devices and browsers to ensure the user experience is smooth no matter how your visitors access the site.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Certainly. If you have an outdated or underperforming site, we can revamp it. We’ll start by understanding what’s not working now. Then we update the UI/UX to a modern design, improve site speed, and enhance usability. We’ll keep (or evolve) your brand elements so the new site feels familiar. The goal is to boost engagement and conversions. After the redesign, your website will look fresh, load faster, and better meet your users’ needs.",
      },
      {
        question: "Do you provide post-launch support and maintenance?",
        answer:
          "Yes. Our job continues after launch. We offer flexible maintenance plans that can include:\nRegular Updates: Software, security, and plugin updates.\nContent Changes: Adding or editing pages and features.\nSecurity Monitoring: 24/7 monitoring and quick fixes if something happens.\nPerformance Checks: Ensuring the site remains fast and reliable.\nThink of us as your ongoing partner. We keep the site running smoothly so you can focus on your business.",
      },
    ],
  },

  ecommerce: {
    slug: "ecommerce",
    heading: "E-commerce FAQs",
    intro:
      "FAQs for ecommerce website development — platforms, payment gateway integration, scalability, and customer data security.",
    items: [
      {
        question: "Which e-commerce platforms do you work with?",
        answer:
          "We have experience with many e-commerce solutions. Whether you need a completely custom-built store or a setup on a popular platform, we’ve got you covered. For example:\nShopify & WooCommerce: Quick-to-launch platforms ideal for small-to-medium stores.\nMagento: Powerful for large catalogs and enterprise needs.\nCustom Solutions: Fully tailored systems built from scratch.\nHeadless Commerce: Modern setups separating front-end and back-end for maximum flexibility.\nWe’ll advise on the best platform based on your product range, budget, and technical requirements.",
      },
      {
        question: "Can you integrate payment gateways?",
        answer:
          "Yes. We integrate secure payment options so customers can pay easily. This includes global gateways like Stripe and PayPal, as well as regional options (for example, local bank payment gateways or mobile payments popular in the Middle East). We ensure every integration is PCI-compliant and uses HTTPS encryption, so all transactions and customer data remain secure.",
      },
      {
        question: "Is the e-commerce store scalable as the business grows?",
        answer:
          "Absolutely. We build e-commerce stores with growth in mind. Your site will be able to handle:\nMore Products: Easily add new products or categories without slowing down.\nHigher Traffic: Use cloud hosting or scalable servers that can grow with demand.\nAdditional Features: Upgrade the store (like adding multi-language support or new payment methods).\nIn practice, this means choosing robust architectures and hosting plans. As your business grows, we can adjust resources so the site stays fast and reliable.",
      },
      {
        question: "Do you provide product and inventory management?",
        answer:
          "Yes. Your store will include an admin dashboard for managing everything. You can:\nAdd/Update Products: Edit descriptions, prices, and images.\nTrack Inventory: Automatic stock level updates to prevent overselling.\nProcess Orders: View order history, update statuses, and manage returns.\nGenerate Reports: Sales reports and analytics to help you make decisions.\nWhether you have ten products or ten thousand, you’ll have all the tools to manage your catalog and inventory efficiently.",
      },
      {
        question: "Is customer data kept secure?",
        answer:
          "Customer trust is critical, so security is built in. We follow PCI-DSS and data protection best practices:\nSSL/HTTPS: All data between the user and site is encrypted.\nData Encryption: Sensitive data (like credit card info) is encrypted.\nSecure Hosting: We use reputable hosting with firewalls and regular backups.\nPrivacy Compliance: Support for GDPR (Europe), CCPA (USA), or other regulations.\nIn short, we treat customer data carefully and protect it at every step.",
      },
    ],
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    heading: "UI/UX Design FAQs",
    intro:
      "FAQs about working with a UI/UX design company — process, conversion-focused design, brand guidelines, design systems, and tools.",
    items: [
      {
        question: "What is your UI/UX design process?",
        answer:
          "Our process is user-centered and collaborative. It usually follows these steps:\nResearch & Discovery: We learn about your users and goals through stakeholder interviews or user surveys.\nWireframing & User Flows: We sketch layouts and map the user journey to ensure intuitive navigation.\nVisual Design: We create detailed mockups with your branding (colors, fonts, imagery).\nPrototyping: We build clickable prototypes to simulate the product.\nUsability Testing: We test the designs with real users or stakeholders to gather feedback.\nAt each phase, we refine based on input. This way, the final design is both beautiful and highly usable.",
      },
      {
        question: "Do you design with conversion and business goals in mind?",
        answer:
          "Definitely. We always align our designs to your objectives. For example, if your goal is to increase sales or sign-ups, we optimize the layout for conversions:\nClear Call-to-Action (CTA): Prominent buttons guiding users to buy or contact you.\nIntuitive Navigation: Easy paths so users find what they need quickly.\nEngaging Elements: Visual hierarchy and persuasive content placement.\nWe also consider user psychology (like using trust signals or reducing distractions). The end result is a design that not only looks good but helps achieve your business targets.",
      },
      {
        question: "Can you work with our existing brand guidelines?",
        answer:
          "Absolutely. We can seamlessly incorporate your brand’s colors, logos, and typography into the design. If you already have a brand style guide, we follow it closely to maintain consistency. If you need branding help, we can also assist in developing or refining those guidelines. Either way, our designs will feel like a natural extension of your brand identity.",
      },
      {
        question: "Do you provide a design system?",
        answer:
          "Yes. We often deliver a complete design system. A design system includes:\nColor Palette & Typography: Official brand colors and fonts.\nUI Components: Reusable elements like buttons, forms, icons, and menus.\nStyle Guide: Rules for spacing, imagery, and usage.\nThis ensures consistency across your product and speeds up future development. With a design system, your team can quickly create new features that look and feel integrated.",
      },
      {
        question: "Which tools do you use for design?",
        answer:
          "We primarily use Figma for UI/UX design and prototyping. Figma’s real-time collaboration lets you see and comment on designs easily. We also have experience with Adobe XD or Sketch when needed. For handing off designs to developers, we provide specs via Figma or tools like Zeplin. Our goal is to use the best tools to streamline communication and deliver high-quality designs.",
      },
    ],
  },

  "game-app-design": {
    slug: "game-app-design",
    heading: "Game App Design FAQs",
    intro:
      "FAQs for game UI/UX and interactive experiences — platforms, psychology, collaboration, and animation.",
    items: [
      {
        question: "Do you design full game interfaces?",
        answer:
          "Yes, we design complete game UIs. This includes menus (main menu, pause screen), HUD elements (health bars, scores), buttons, icons, and in-game overlays. We create assets that match the game’s art style and theme, ensuring the interface is immersive. Our focus is on clarity (players can easily navigate) and aesthetics (it looks great). Whether it’s a 2D mobile game or a 3D PC game, we craft the UI to enhance the gameplay experience.",
      },
      {
        question: "Which gaming platforms do you design for?",
        answer:
          "We design for a variety of platforms:\nMobile Games: iOS and Android games.\nPC/Console Games: Windows, Mac, and consoles (e.g., PS, Xbox) UIs.\nWeb Games: Browser-based (HTML5) or social platform games.\nFor each platform, we consider its unique needs (touch controls for mobile, keyboard/mouse/gamepad for PC). We ensure the UI adapts properly to screen resolutions and input methods on the target platform.",
      },
      {
        question: "Do you consider player psychology and UX in your designs?",
        answer:
          "Absolutely. Good game design is as much about psychology as it is about graphics. We focus on keeping players engaged and making the experience intuitive:\nFeedback and Rewards: Animations or sounds that reward actions (like collecting points) to motivate players.\nClarity: Ensuring instructions and objectives are easy to understand, so players don’t get frustrated.\nFlow: Designing level progression and menus so players naturally know where to go next.\nWe often test designs with players to see how they respond. This way, we create interfaces that feel fun and keep players coming back.",
      },
      {
        question: "Can you collaborate with developers on implementation?",
        answer:
          "Yes. We work closely with your development team throughout the process. From the start, we discuss technical constraints and optimize designs accordingly. We provide all design assets (sprites, icons, fonts) in developer-friendly formats. If needed, we can also export designs directly into game engines like Unity or Unreal for smoother handoff. Regular communication ensures the final implementation matches our design intent.",
      },
      {
        question: "Do you create animations and interactive elements?",
        answer:
          "Yes. We design UI animations and interactions that make the game feel polished. For example:\nMenu Transitions: Smooth animations when opening or closing menus.\nButton Effects: Visual feedback (like glowing or pressing effects) on buttons.\nHUD Animations: Animating health bars, progress meters, or collectible items.\nWe provide animators or use prototyping tools (like After Effects, Lottie) to convey the motion. These subtle animations engage players and improve the overall user experience.",
      },
    ],
  },

  "ai-ml-applications": {
    slug: "ai-ml-applications",
    heading: "AI / ML Applications FAQs",
    intro:
      "FAQs for AI and machine learning projects — solution types, integrations, privacy, and ongoing optimization.",
    items: [
      {
        question: "What types of AI solutions do you build?",
        answer:
          "We develop a range of AI and ML-powered solutions, including:\nChatbots/Virtual Assistants: Automated bots for customer support or data entry.\nPredictive Analytics: Models that forecast trends (like sales or demand) from your data.\nRecommendation Engines: Personalized suggestions (e.g., product or content recommendations).\nComputer Vision: Image/video analysis (for example, object recognition or quality inspection).\nData Automation Tools: Automated data processing and reporting systems.\nEach solution is custom-built for your use case and industry.",
      },
      {
        question: "Can AI be integrated into our existing systems?",
        answer:
          "Yes. We specialize in integrating AI/ML into existing software or workflows. For example, we can add a chatbot to your website, incorporate a recommendation engine into your e-commerce site, or enhance your analytics dashboard with ML insights. We’ll work with your current stack (APIs, databases, CRM, etc.) to seamlessly plug in the AI features without disrupting your business.",
      },
      {
        question: "Do you offer custom AI solutions?",
        answer:
          "Absolutely. Every business is different, so we never use one-size-fits-all. We start by understanding your data and objectives, then develop or train models specifically for you. This might mean building a new neural network, fine-tuning an open-source model, or creating bespoke algorithms. We ensure the AI solution aligns with your processes and delivers the results you need.",
      },
      {
        question: "Is data privacy maintained with AI/ML?",
        answer:
          "Yes. We treat your data with the utmost care. We implement strong security measures (encryption, access controls) and follow privacy regulations (like GDPR in Europe or similar) to protect sensitive information. Before building a model, we review compliance requirements relevant to your industry (for example, HIPAA for healthcare). You’ll have full control over your data, and we never share it without your permission.",
      },
      {
        question: "Do you provide ongoing AI optimization?",
        answer:
          "Yes. AI models often improve over time with new data. We offer continuous monitoring and maintenance for your AI solutions. This includes tracking performance metrics, retraining models as data changes, and updating algorithms. We also provide reports on the AI’s impact. This ongoing support ensures your AI remains effective and continues to add value.",
      },
    ],
  },

  "aws-cloud": {
    slug: "aws-cloud",
    heading: "AWS & Cloud FAQs",
    intro:
      "FAQs for cloud services — migration, security, provider options, and cost optimization.",
    items: [
      {
        question: "What cloud services do you offer?",
        answer:
          "We offer full cloud services to support your business:\nCloud Architecture & Setup: Designing and setting up cloud infrastructure.\nDeployment & Migration: Moving your apps or data to the cloud (AWS, Azure, etc.).\nDevOps & Automation: Implementing CI/CD pipelines, Docker/Kubernetes setups, and infrastructure as code (Terraform, CloudFormation).\nMonitoring & Support: 24/7 monitoring (e.g., CloudWatch) and quick response to issues.\nScaling & Optimization: Configuring auto-scaling and right-sizing resources for performance and cost savings.\nWhether it’s a one-time migration or ongoing cloud management, we handle all technical aspects to ensure reliability and efficiency.",
      },
      {
        question: "Do you work only with AWS?",
        answer:
          "We are AWS-certified and often use AWS services (EC2, S3, Lambda, etc.), but we’re not limited to AWS. We also have experience with Microsoft Azure and Google Cloud Platform (GCP). We’ll choose the cloud provider based on your needs and existing environment. If you already use Azure or GCP, we can definitely work within those platforms.",
      },
      {
        question: "Can you migrate existing systems to the cloud?",
        answer:
          "Yes. We manage smooth, secure migrations from on-premises or other environments to the cloud. Our process includes:\nAssessment: Analyzing your current architecture.\nPlanning: Choosing the right cloud services (lift-and-shift vs. refactoring).\nMigration: Transferring apps and data with minimal downtime (using tools or containerization).\nVerification: Testing the new setup to ensure everything works.\nAfter migration, we help optimize the cloud environment for performance and cost. You can trust us to handle the technical challenges so you can enjoy the benefits of the cloud.",
      },
      {
        question: "Is cloud infrastructure secure?",
        answer:
          "Yes. Security is a foundational part of our cloud solutions. We implement:\nAccess Controls: Strict identity and access management (IAM) policies.\nNetworking: Private subnets, security groups, and firewalls (VPC configurations).\nEncryption: SSL/TLS for data in transit and encryption for data at rest.\nMonitoring & Logging: Using tools like AWS CloudTrail and GuardDuty to detect threats.\nWe also follow compliance standards relevant to your needs (like ISO 27001, GDPR, HIPAA). This ensures your cloud environment is locked down against attacks.",
      },
      {
        question: "Do you provide cost optimization for cloud?",
        answer:
          "Yes. Keeping your cloud costs in check is important. We analyze your usage and recommend ways to save, such as:\nRight-sizing: Choosing cost-effective instance types and eliminating over-provisioned resources.\nReserved/Savings Plans: Using long-term commitments for steady workloads.\nAuto-Scaling: Automatically scaling resources up/down to match demand.\nSpot Instances: Leveraging spot (preemptible) instances for suitable tasks.\nWe regularly review your billing and adjust configurations to maximize efficiency without compromising performance.",
      },
    ],
  },

  "software-development": {
    slug: "software-development",
    heading: "Software Development FAQs",
    intro:
      "FAQs for working with our software development company — software types, scalability, Agile delivery, ownership, and documentation.",
    items: [
      {
        question: "What kind of software do you develop?",
        answer:
          "We create custom software solutions to meet your needs. Our portfolio includes:\nWeb Applications: E.g., customer portals, SaaS platforms, marketplaces.\nMobile & Desktop Apps: Custom apps for Windows, Mac, or cross-platform.\nInternal Tools: Dashboards, reporting tools, CRMs, or any internal system to boost productivity.\nEnterprise Systems: Large-scale solutions like inventory management, ERP modules, or order processing systems.\nWe work with a variety of technologies (Java, .NET, Python, JavaScript frameworks, etc.) and choose the right stack for your project.",
      },
      {
        question: "Is the software scalable?",
        answer:
          "Absolutely. Scalability is a core design principle for us. We build systems with:\nModular Architecture: Components that can be scaled independently.\nCloud-Native Practices: Deploying on scalable cloud infrastructure (load balancers, auto-scaling groups).\nEfficient Databases: Databases and caches that can grow (sharding, replication).\nThis means as your user base or data grows, the software can handle it without needing a complete rewrite.",
      },
      {
        question: "Do you follow agile development?",
        answer:
          "Yes, we use Agile (often Scrum) methodologies. This means:\nIterative Sprints: We work in short cycles (2-3 weeks), delivering functional increments.\nFrequent Communication: Regular meetings, demos, and updates keep you informed.\nFlexibility: If requirements change, we adapt without derailing the project.\nWith Agile, you get visibility into progress and can give feedback throughout, ensuring the final software aligns with your expectations.",
      },
      {
        question: "Will I get source code ownership?",
        answer:
          "Yes. After the project is completed and paid for, all source code and related assets are handed over to you. You’ll have full ownership and intellectual property rights to the software. This means you can continue development on your own or with another team if desired. We just ask that any third-party licensed components (libraries, etc.) continue to respect their licenses.",
      },
      {
        question: "Do you provide documentation?",
        answer:
          "Yes. We supply comprehensive documentation as part of the project deliverables:\nTechnical Documentation: Architecture overviews, API documentation, setup and deployment guides.\nUser Documentation: Manuals or guides for end users or administrators.\nCode Comments: Important parts of the code will be well-commented.\nGood documentation ensures you and your team can maintain and expand the software smoothly after we hand it over.",
      },
    ],
  },

  "ai-automation": {
    slug: "ai-automation",
    heading: "AI & Automation FAQs",
    intro:
      "FAQs for AI automation services — what can be automated, ROI/cost savings, integrations, customization, and ongoing maintenance.",
    items: [
      {
        question: "What processes can be automated with your services?",
        answer:
          "Many business processes can be automated to save time. Some examples include:\nWorkflow Automation: Tasks like approvals, notifications, and reporting.\nData Entry & Processing: Automated data import/export, cleaning, and formatting.\nEmail & Marketing Automation: Triggered email campaigns or follow-ups.\nCustomer Support: Chatbots for FAQs or ticket routing.\nIntegration Tasks: Syncing data between systems (CRM, accounting, e-commerce).\nIf a process is repetitive and rule-based, it’s a great candidate for automation, and we’ll tailor a solution to streamline it.",
      },
      {
        question: "Can automation reduce operational costs?",
        answer:
          "Yes, automation often leads to significant cost savings. By automating repetitive tasks, you:\nSave Time: Employees focus on high-value work instead of manual tasks.\nReduce Errors: Automated processes are more consistent, cutting down costly mistakes.\nIncrease Efficiency: Faster turnaround on tasks (like faster invoice processing).\nOver time, this efficiency gain translates to lower labor costs and better productivity, giving you a strong return on investment.",
      },
      {
        question: "Do you integrate with third-party tools?",
        answer:
          "Absolutely. We connect and integrate a wide variety of systems, including:\nCRMs: (Salesforce, HubSpot, Zoho, etc.) to streamline customer data.\nERPs: (SAP, Odoo, Oracle, etc.) to sync with financial or inventory systems.\nEmail & Marketing: (Mailchimp, SendGrid, etc.) for automated outreach.\nAPIs: Any available APIs (social media, payment gateways, shipping, etc.) to automate workflows.\nBy integrating these tools, we create seamless data flows so your software ecosystem works together efficiently.",
      },
      {
        question: "Is automation customizable?",
        answer:
          "Absolutely. We tailor each automation solution to your specific workflow. We start by mapping out your current process step by step. Then we design an automated workflow that matches or improves it. If you have unique business rules (like approval chains or data validations), we code those exact conditions into the automation. In the end, the system behaves exactly as your team needs it to.",
      },
      {
        question: "Do you offer ongoing maintenance for automated systems?",
        answer:
          "Yes. Once your automation is live, we can continue supporting it. Our maintenance services include:\nMonitoring: Ensuring processes run smoothly (monitoring logs, alerts).\nUpdates: Adapting to changes (like a new approval policy) or adding new features.\nTroubleshooting: Quickly fixing any issues that arise.\nWe want your automation to keep delivering value, so we stay available to optimize and update the system as needed.",
      },
    ],
  },

  "ads-social-media": {
    slug: "ads-social-media",
    heading: "Ads & Social Media FAQs",
    intro:
      "FAQs for performance marketing — platforms, creative production, ROI tracking, organic vs paid growth, and monthly management.",
    items: [
      {
        question: "On which platforms do you manage ads?",
        answer:
          "We run ad campaigns on a variety of platforms to reach your target audience. Common channels include:\nGoogle Ads: Search, Display, and YouTube ads.\nSocial Media: Facebook, Instagram, LinkedIn, Twitter, TikTok, etc.\nOther Networks: Pinterest, Snapchat, or local networks if relevant to your market.\nWe select the best platforms based on your goals and where your customers are. By combining these channels, we increase your brand’s visibility and reach.",
      },
      {
        question: "Do you handle content creation and ad creatives?",
        answer:
          "Yes. We have a creative team that designs eye-catching visuals and writes compelling copy for your campaigns. This covers:\nGraphic Design: Images, banners, and videos tailored for each platform.\nCopywriting: Engaging headlines and ad text that speak to your audience.\nA/B Testing: We try different versions (images, colors, wording) to see which performs best.\nOur goal is to craft ads that attract attention and drive action, all while staying true to your brand voice.",
      },
      {
        question: "Can you track performance and ROI of campaigns?",
        answer:
          "Absolutely. We set up the necessary tracking tools (like Google Analytics, Facebook Pixel, etc.) to monitor every campaign. You’ll receive regular reports that show key metrics:\nClicks and Impressions: How many people see and click your ads.\nConversions: Actual goals achieved (sales, sign-ups, leads).\nCosts: Cost per click (CPC) and cost per conversion (CPA).\nWe analyze this data to improve your campaigns over time. Our focus is on delivering measurable results and a clear return on your ad spend.",
      },
      {
        question: "Is social media growth organic or paid?",
        answer:
          "We can help with both organic and paid social strategies. For organic growth, we plan and post content, engage with your audience, and optimize your social profiles. For paid growth, we run targeted ad campaigns to reach new customers quickly. Many clients find that a mix of both works best: organic strategies build long-term relationships, and paid ads drive short-term traffic and conversions.",
      },
      {
        question: "Do you provide ongoing monthly management for ads and social media?",
        answer:
          "Yes. We offer flexible monthly management plans. Each month, our team will:\nPlan & Create: New content and ad campaigns.\nExecute: Launch and monitor ads, schedule social posts.\nEngage: (If included) Respond to comments or messages.\nAnalyze & Report: Provide performance reports and adjust strategies accordingly.\nYou’ll get a monthly strategy call or report so you always know how your campaigns are performing. We handle the day-to-day management, so you can focus on your business.",
      },
    ],
  },

  "mvp-development": {
    slug: "mvp-development",
    heading: "MVP Development FAQs",
    intro:
      "Guidance for founders and teams planning an MVP — scope, timeline, ownership, and how we validate fast.",
    items: [
      {
        question: "What is an MVP and do we really need one?",
        answer:
          "An MVP (Minimum Viable Product) is the smallest version of your product that still delivers real value to users. It helps you validate demand, reduce risk, and avoid overbuilding. If you’re launching a new idea, an MVP is often the fastest path to real feedback. Let’s discuss your project and help you choose the right approach.",
      },
      {
        question: "How do you decide what features go into the MVP?",
        answer:
          "We prioritize features based on the core problem you’re solving, the must-have user flows, and the quickest way to test your product-market fit. We’ll help you turn a long wishlist into a focused plan that’s realistic for time and budget.",
      },
      {
        question: "How long does MVP development usually take?",
        answer:
          "MVP timelines depend on complexity and the number of user flows. Many MVPs can be delivered in weeks, while more complex products may take a few months. After a quick discovery session, we’ll share a clear timeline with milestones.",
      },
      {
        question: "Will the MVP be scalable for future growth?",
        answer:
          "Yes. We build MVPs with a clean, scalable foundation so you can iterate without rewriting everything. We choose the right architecture for your stage — fast to launch now, and strong enough to grow later.",
      },
      {
        question: "Do we own the source code after delivery?",
        answer:
          "Yes. Once the project is completed and paid for, you receive source code ownership. Contact us for a free quote, and we’ll outline the deliverables and handover process clearly.",
      },
    ],
  },

  "product-scope": {
    slug: "product-scope",
    heading: "Product Scope & Discovery FAQs",
    intro:
      "Common questions about product discovery — scoping workshops, requirements clarity, and reducing delivery risk.",
    items: [
      {
        question: "What is product scope and why is it important?",
        answer:
          "Product scope defines what you’re building (and what you’re not), including features, priorities, constraints, and success metrics. Clear scope reduces risk, speeds up delivery, and helps avoid budget surprises. Let’s discuss your project and clarify the right scope before development.",
      },
      {
        question: "What happens during a product discovery workshop?",
        answer:
          "We align stakeholders, map user journeys, define key flows, and identify assumptions to validate. The output is a structured plan: a prioritized backlog, clear requirements, and a realistic roadmap.",
      },
      {
        question: "Can product scoping help reduce development cost?",
        answer:
          "Yes. By prioritizing what matters most and cutting low-impact features early, you avoid building the wrong things. This typically reduces rework and keeps your software development budget focused on outcomes.",
      },
      {
        question: "Do you provide documentation after scoping?",
        answer:
          "Yes. You’ll receive usable documentation such as user flows, acceptance criteria, feature priorities, and implementation notes. This helps any development team move forward with confidence.",
      },
      {
        question: "Can you take the scoped plan and build the product too?",
        answer:
          "Absolutely. If you want a single partner from discovery to delivery, we can move straight into design and development. Contact us for a free quote and we’ll recommend the best next step.",
      },
    ],
  },
};

export const ALL_SERVICE_FAQ_GROUPS: ServiceFaqGroup[] = Object.values(SERVICE_FAQS);
