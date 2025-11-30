"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ExternalLink, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Play,
  BarChart3,
  Users,
  Zap,
  Eye,
  Cctv,
  Wrench,
  Vote,
  Building,
  Factory,
  Home
} from "lucide-react";
import { Button } from "../ui/button";
import { useI18n } from "@/locales/client";

const caseStudies = [
  {
    id: 1,
    title: "VIIZE - AI Vision Intelligence",
    client: "Multiple Industrial Clients",
    category: "AI & Computer Vision",
    description: "Advanced AI-powered surveillance system that connects to existing cameras to perform real-time object detection, people counting, theft prevention, and anomaly detection in industrial environments.",
    image: "/portfolio/viize.webp",
    technologies: ["Python", "TensorFlow", "OpenCV", "React", "Node.js", "WebRTC"],
    results: {
      theftPrevention: "92%",
      accuracy: "99.5%",
      falseAlarms: "Reduced by 85%"
    },
    duration: "6 months",
    testimonial: "VIIZE detected unauthorized access patterns we never noticed before, saving us thousands in potential losses.",
    liveLink: "https://traffic.buttertech.ca",
    caseStudy: "/case-studies/vize"
  },
  {
    id: 2,
    title: "Smart IoT for Homes & Industries",
    client: "Residential & Industrial Sector",
    category: "IoT & Automation",
    description: "Comprehensive IoT ecosystem for smart homes and industrial automation. Monitor energy consumption, control devices remotely, predictive maintenance, and real-time environmental monitoring.",
    image: "/portfolio/smart-iot.jpg",
    technologies: ["IoT Sensors", "React Native", "AWS IoT", "Python", "WebSocket"],
    results: {
      energySavings: "35%",
      maintenanceCosts: "Reduced by 60%",
      operationalEfficiency: "+45%"
    },
    duration: "8 months",
    testimonial: "The IoT system helped us reduce energy costs by 35% while improving operational visibility.",
    liveLink: "https://iot.dashtech.cm",
    caseStudy: "/case-studies/smart-iot"
  },
  {
    id: 3,
    title: "AlloTech - Technician Marketplace",
    client: "Service Industry",
    category: "Platform & Marketplace",
    description: "Digital platform connecting skilled technicians (plumbers, electricians, construction workers) with clients. Features include booking, ratings, secure payments, and service tracking.",
    image: "/portfolio/allotech-app.jpg",
    technologies: ["Flutter", "Laravel", "MySQL", "Payment Gateway", "Google Maps API"],
    results: {
      technicianEarnings: "+65%",
      clientSatisfaction: "4.8/5",
      bookingEfficiency: "+80%"
    },
    duration: "5 months",
    testimonial: "AlloTech helped me grow my client base and manage my schedule efficiently.",
    liveLink: "https://allotech.cm",
    caseStudy: "/case-studies/allotech"
  },
  {
    id: 4,
    title: "E-Vote - Blockchain Voting Platform",
    client: "Government & Organizations",
    category: "Blockchain & Security",
    description: "Secure, transparent online voting platform powered by blockchain technology. Ensures election integrity, prevents fraud, and provides real-time results with complete audit trails.",
    image: "/portfolio/evote.webp",
    technologies: ["Blockchain", "React", "Node.js", "Cryptography", "PostgreSQL"],
    results: {
      votingTurnout: "+40%",
      costSavings: "75%",
      securityIncidents: "0"
    },
    duration: "7 months",
    testimonial: "EVote made our organizational elections transparent and accessible to all members worldwide.",
    liveLink: "https://evote.dashtech.cm",
    caseStudy: "/case-studies/evote"
  },
  {
    id: 5,
    title: "WDMS - Warehouse Management",
    client: "Logistics Companies",
    category: "Enterprise Software",
    description: "Advanced warehouse digital management system with inventory tracking, automated counting, real-time analytics, and supply chain optimization features.",
    image: "/portfolio/wdms-pro.jpg",
    technologies: ["Vue.js", "Laravel", "WebSocket", "Redis", "AWS"],
    results: {
      inventoryAccuracy: "99.8%",
      operationalCosts: "Reduced by 45%",
      processingSpeed: "+70%"
    },
    duration: "6 months",
    testimonial: "WDMS Pro transformed our warehouse from chaotic to completely organized and efficient.",
    liveLink: "https://wdms.dashtech.cm",
    caseStudy: "/case-studies/wdms"
  },
  {
    id: 6,
    title: "FuelGuard AI - Fuel Management",
    client: "Petroleum Industry",
    category: "AI & IoT",
    description: "Intelligent fuel monitoring system combining IoT sensors and AI to detect leaks, track consumption, prevent theft, and optimize fuel distribution across multiple locations.",
    image: "/portfolio/fuelguard-ai.jpg",
    technologies: ["IoT Sensors", "Machine Learning", "React", "Python", "Cloud Functions"],
    results: {
      theftPrevention: "95%",
      fuelSavings: "25%",
      leakDetection: "100% accurate"
    },
    duration: "5 months",
    testimonial: "FuelGuard AI helped us recover thousands in lost revenue from undetected fuel theft.",
    liveLink: "https://fuelguard.dashtech.cm",
    caseStudy: "/case-studies/fuelguard"
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "AI & Computer Vision":
      return <Eye className="w-5 h-5" />;
    case "IoT & Automation":
      return <Home className="w-5 h-5" />;
    case "Platform & Marketplace":
      return <Wrench className="w-5 h-5" />;
    case "Blockchain & Security":
      return <Vote className="w-5 h-5" />;
    case "Enterprise Software":
      return <Building className="w-5 h-5" />;
    case "AI & IoT":
      return <Factory className="w-5 h-5" />;
    default:
      return <Zap className="w-5 h-5" />;
  }
};

// Type-safe translation keys for case studies
const caseStudyKeys = {
  titles: [
    "portfolio.caseStudies.0.title",
    "portfolio.caseStudies.1.title",
    "portfolio.caseStudies.2.title",
    "portfolio.caseStudies.3.title",
    "portfolio.caseStudies.4.title",
    "portfolio.caseStudies.5.title"
  ] as const,
  clients: [
    "portfolio.caseStudies.0.client",
    "portfolio.caseStudies.1.client",
    "portfolio.caseStudies.2.client",
    "portfolio.caseStudies.3.client",
    "portfolio.caseStudies.4.client",
    "portfolio.caseStudies.5.client"
  ] as const,
  categories: [
    "portfolio.caseStudies.0.category",
    "portfolio.caseStudies.1.category",
    "portfolio.caseStudies.2.category",
    "portfolio.caseStudies.3.category",
    "portfolio.caseStudies.4.category",
    "portfolio.caseStudies.5.category"
  ] as const,
  descriptions: [
    "portfolio.caseStudies.0.description",
    "portfolio.caseStudies.1.description",
    "portfolio.caseStudies.2.description",
    "portfolio.caseStudies.3.description",
    "portfolio.caseStudies.4.description",
    "portfolio.caseStudies.5.description"
  ] as const,
  testimonials: [
    "portfolio.caseStudies.0.testimonial",
    "portfolio.caseStudies.1.testimonial",
    "portfolio.caseStudies.2.testimonial",
    "portfolio.caseStudies.3.testimonial",
    "portfolio.caseStudies.4.testimonial",
    "portfolio.caseStudies.5.testimonial"
  ] as const
};

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState(0);
  const [isFlipped, setIsFlipped] = useState(Array(caseStudies.length).fill(false));
  const t = useI18n();

  const handleFlip = (index: number) => {
    const newFlipped = [...isFlipped];
    newFlipped[index] = !newFlipped[index];
    setIsFlipped(newFlipped);
  };

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % caseStudies.length);
  };

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  // Get translated text for dynamic content
  const getTranslatedProjectData = (index: number) => {
    return {
      title: t(caseStudyKeys.titles[index]),
      client: t(caseStudyKeys.clients[index]),
      category: t(caseStudyKeys.categories[index]),
      description: t(caseStudyKeys.descriptions[index]),
      testimonial: t(caseStudyKeys.testimonials[index])
    };
  };

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            {t('portfolio.title')} <span className="text-primary">{t('portfolio.highlightedTitle')}</span>
          </h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {t('portfolio.subtitle')}
          </motion.p>
        </motion.div>

        {/* Featured Project Carousel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <div className="relative bg-card rounded-3xl p-8 border shadow-sm">
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-background hover:bg-accent rounded-full flex items-center justify-center text-foreground border shadow-sm transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-background hover:bg-accent rounded-full flex items-center justify-center text-foreground border shadow-sm transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Featured Project Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <motion.div
                key={selectedProject}
                className="relative rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src={caseStudies[selectedProject].image}
                  alt={getTranslatedProjectData(selectedProject).title}
                  className="w-full h-90 object-fit group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                    {getCategoryIcon(caseStudies[selectedProject].category)}
                  </div>
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {getTranslatedProjectData(selectedProject).category}
                  </span>
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                key={selectedProject + "details"}
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {getTranslatedProjectData(selectedProject).title}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {getTranslatedProjectData(selectedProject).client}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {getTranslatedProjectData(selectedProject).description}
                  </p>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(caseStudies[selectedProject].results).map(([key, value], index) => (
                    <div key={key} className="text-center p-4 bg-background rounded-xl border shadow-sm">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <BarChart3 className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-xl font-bold text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-foreground font-semibold mb-3">{t('portfolio.featuredProject.technologies')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[selectedProject].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent rounded-full text-sm text-foreground border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-4 h-4" />
                    {t('portfolio.featuredProject.viewCaseStudy')}
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 border border-input bg-background hover:bg-accent text-foreground px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('portfolio.featuredProject.liveDemo')}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid with 3D Flip Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          {caseStudies.map((project, index) => {
            const translatedProject = getTranslatedProjectData(index);
            return (
              <motion.div
                key={project.id}
                className="relative h-80 [perspective:1000px]"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: "easeOut" }}
              >
                {/* 3D Flip Card */}
                <motion.div
                  className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
                  animate={{ rotateY: isFlipped[index] ? 180 : 0 }}
                  onClick={() => handleFlip(index)}
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 bg-card rounded-2xl border shadow-sm p-6 [backface-visibility:hidden] cursor-pointer group hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-40 mb-4 rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={translatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <div className="bg-primary text-primary-foreground p-1 rounded">
                          {getCategoryIcon(project.category)}
                        </div>
                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                          {translatedProject.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-foreground font-semibold text-lg mb-2 line-clamp-2">
                      {translatedProject.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {translatedProject.description}
                    </p>
                    
                    <div className="flex justify-end items-center">
                      <motion.div
                        className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl border border-primary/20 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] cursor-pointer shadow-sm">
                    <h3 className="text-foreground font-semibold text-lg mb-4">
                      {t('portfolio.projectCards.keyResults')}
                    </h3>
                    
                    <div className="space-y-3 mb-4">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-muted-foreground text-sm capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="text-foreground font-bold">{value}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-muted-foreground text-sm italic mb-4 line-clamp-2">
                      "{translatedProject.testimonial}"
                    </p>

                    <motion.button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg text-sm font-semibold transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t('portfolio.projectCards.viewDetails')}
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        >
          <p className="text-muted-foreground text-lg mb-6">
            {t('portfolio.cta.text')}
          </p>
          <Button size={"lg"}>
            {t('portfolio.cta.button')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}