"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  country: string;
  flag: string;
  rating: number;
};

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "Working with TechHades was absolutely phenomenal! They transformed our outdated e-commerce platform into a modern, lightning-fast website that increased our sales by 180%. The attention to detail and user experience is unmatched.",
      name: "Sarah Mitchell",
      title: "CEO, Fashion Forward Inc.",
      country: "United States",
      flag: "🇺🇸",
      rating: 5
    },
    {
      quote: "I've worked with many development teams, but TechHades stands out. They delivered our AI-powered analytics dashboard ahead of schedule and under budget. The real-time data visualization is exactly what we needed for our fintech startup.",
      name: "James Thompson",
      title: "CTO, DataFlow Solutions",
      country: "Canada",
      flag: "🇨🇦",
      rating: 5
    },
    {
      quote: "The mobile app they built for our healthcare platform has been a game-changer. Patient engagement increased by 250% and the seamless integration with our existing systems was flawless. Highly recommend their expertise!",
      name: "Dr. Emily Rodriguez",
      title: "Medical Director, HealthTech Pro",
      country: "Australia",
      flag: "🇦🇺",
      rating: 5
    },
    {
      quote: "TechHades created our company's digital transformation roadmap and executed it perfectly. The new CRM system streamlined our operations and the custom automation saved us 40 hours per week. Outstanding work!",
      name: "Mohammed Al-Rashid",
      title: "Operations Manager, Gulf Enterprises",
      country: "Saudi Arabia",
      flag: "🇸🇦",
      rating: 5
    },
    {
      quote: "From concept to deployment, the team was professional and innovative. Our WordPress site now loads 3x faster and the SEO improvements brought us to page 1 of Google. The ROI has been incredible.",
      name: "Oliver Harrison",
      title: "Marketing Director, London Digital",
      country: "United Kingdom",
      flag: "🇬🇧",
      rating: 5
    },
    {
      quote: "The AI chatbot they developed for our customer service has been revolutionary. It handles 70% of inquiries automatically while maintaining a human-like conversation flow. Customer satisfaction scores improved dramatically.",
      name: "Klaus Weber",
      title: "Head of Customer Experience, TechFlow GmbH",
      country: "Germany",
      flag: "🇩🇪",
      rating: 5
    },
    {
      quote: "I needed a complex inventory management system and TechHades delivered beyond expectations. The real-time tracking, automated reordering, and beautiful dashboard have transformed how we operate our business.",
      name: "Sophie Dubois",
      title: "Founder, Boutique Parisienne",
      country: "France",
      flag: "🇫🇷",
      rating: 5
    },
    {
      quote: "Their expertise in React and Node.js is exceptional. They built our SaaS platform from scratch and it now serves over 10,000 users daily without any performance issues. The code quality is top-notch.",
      name: "Erik Johansson",
      title: "Lead Developer, Nordic Solutions",
      country: "Sweden",
      flag: "🇸🇪",
      rating: 5
    },
    {
      quote: "The e-learning platform they created has revolutionized our online education business. Student engagement is up 300% and the interactive features they built are absolutely brilliant. Worth every penny!",
      name: "Isabella Romano",
      title: "Education Director, LearnItalia",
      country: "Italy",
      flag: "🇮🇹",
      rating: 5
    },
    {
      quote: "TechHades transformed our logistics company with a custom tracking system that integrates with all major shipping providers. Real-time updates and automated notifications have improved customer satisfaction by 85%.",
      name: "Lucas van der Berg",
      title: "CEO, Amsterdam Logistics",
      country: "Netherlands",
      flag: "🇳🇱",
      rating: 5
    },
    {
      quote: "TechHades built our e-commerce platform from scratch with advanced inventory management and multi-currency support. The system handles thousands of orders daily without any issues. Exceptional development quality!",
      name: "Hiroshi Tanaka",
      title: "E-commerce Director, Tokyo Digital",
      country: "Japan",
      flag: "🇯🇵",
      rating: 5
    },
    {
      quote: "Working with TechHades on our fintech app was seamless. They handled complex payment integrations, security protocols, and regulatory compliance perfectly. The app now processes millions in transactions monthly.",
      name: "Michael O'Connor",
      title: "Fintech Entrepreneur, Dublin Payments",
      country: "Ireland",
      flag: "🇮🇪",
      rating: 5
    },
    {
      quote: "They built our restaurant chain's ordering system and it's been phenomenal. Online orders increased by 400% and the kitchen management system optimized our operations. The ROI was achieved in just 3 months.",
      name: "Carlos Mendoza",
      title: "Restaurant Owner, Madrid Flavors",
      country: "Spain",
      flag: "🇪🇸",
      rating: 5
    },
    {
      quote: "The data analytics platform they created gives us insights we never had before. Real-time dashboards, predictive analytics, and automated reporting have transformed our decision-making process completely.",
      name: "Anna Kowalski",
      title: "Data Scientist, Warsaw Analytics",
      country: "Poland",
      flag: "🇵🇱",
      rating: 5
    },
    {
      quote: "TechHades developed our IoT monitoring system for smart buildings. The energy savings alone have paid for the entire project. The system monitors 500+ sensors in real-time with zero downtime.",
      name: "Petra Novák",
      title: "Smart City Coordinator, Prague Tech",
      country: "Czech Republic",
      flag: "🇨🇿",
      rating: 5
    },
    {
      quote: "Their expertise in Flutter helped us launch our mobile app simultaneously on iOS and Android. The performance is native-like and the user experience is smooth. Downloads exceeded 100K in the first month!",
      name: "Andreas Mueller",
      title: "Product Manager, Vienna Innovations",
      country: "Austria",
      flag: "🇦🇹",
      rating: 5
    },
    {
      quote: "The custom CMS they built for our news platform handles millions of articles with lightning speed. The editorial workflow and automated publishing features have increased our productivity by 200%.",
      name: "Lars Hansen",
      title: "Editor-in-Chief, Copenhagen Media",
      country: "Denmark",
      flag: "🇩🇰",
      rating: 5
    },
    {
      quote: "TechHades created our virtual reality training platform and it's revolutionary. Employee training time reduced by 60% while retention rates improved dramatically. The immersive experience is incredible.",
      name: "Yuki Sato",
      title: "Training Director, Osaka VR Solutions",
      country: "Japan",
      flag: "🇯🇵",
      rating: 5
    }
  ];

  // Continuous auto-scroll
  useEffect(() => {
    if (!isHovered && scrollRef.current) {
      const timer = setInterval(() => {
        setScrollPosition(prev => {
          const newPosition = prev + 1;
          if (scrollRef.current) {
            const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
            if (newPosition >= maxScroll) {
              scrollRef.current.scrollLeft = 0;
              return 0;
            } else {
              scrollRef.current.scrollLeft = newPosition;
              return newPosition;
            }
          }
          return newPosition;
        });
      }, 30); // Smooth 30ms intervals for continuous movement
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  // Manual navigation functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = 272; // One card width (256px) + gap (16px)
      const newPosition = Math.max(0, scrollRef.current.scrollLeft - cardWidth);
      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = 272; // One card width (256px) + gap (16px)
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const newPosition = Math.min(maxScroll, scrollRef.current.scrollLeft + cardWidth);
      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="py-16 sm:py-24 section-gradient-4 parallax-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-4">
            What Our <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">Global Clients</span> Say
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Trusted by businesses worldwide to deliver exceptional digital solutions
          </p>
        </motion.div>

        {/* Continuous Scroll Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-violet-500/25"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-violet-500/25"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden scroll-smooth px-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Duplicate testimonials for infinite scroll effect */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`testimonial-${index}`}
                initial={{ opacity: 1 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
                className="group flex-shrink-0 w-64 h-72"
              >
                <div className="relative h-full bg-gradient-to-br from-indigo-500/5 via-violet-500/3 to-purple-500/5 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-4 hover:border-violet-500/40 transition-all duration-300">
                  {/* Country Flag */}
                  <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-lg group-hover:scale-110 transition-all duration-300 drop-shadow-lg">
                    {testimonial.flag}
                  </div>
                  
                  {/* Enhanced border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" 
                       style={{ padding: '1px' }}>
                    <div className="h-full w-full rounded-2xl bg-slate-900/20 backdrop-blur-sm" />
                  </div>
                  
                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-violet-400 rounded-full"
                        style={{
                          left: `${25 + i * 30}%`,
                          top: `${20 + i * 25}%`,
                        }}
                        animate={{
                          y: [-2, 2, -2],
                          opacity: [0.4, 1, 0.4],
                          scale: [0.8, 1.1, 0.8],
                        }}
                        transition={{
                          duration: 1.5 + i * 0.2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          whileHover={{ scale: 1.2, rotate: 180 }}
                        >
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-foreground/90 text-xs leading-relaxed mb-4 group-hover:text-foreground transition-colors duration-300 line-clamp-6">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="space-y-1">
                      <div className="font-semibold text-foreground group-hover:text-indigo-300 transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                        {testimonial.title}
                      </div>
                      <div className="text-xs text-indigo-400 font-medium">
                        {testimonial.country}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
