"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import { useI18n } from "@/locales/client";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    image: "/portfolio/VMARIC.png",
    technologies: ["Python", "TensorFlow", "OpenCV", "React", "Node.js"],
    results: {
      "Theft Prevention": "92%",
      "Accuracy": "99.5%",
      "False Alarms Reduced": "85%"
    },
  },
  {
    id: 2,
    image: "/portfolio/carepass.png",
    technologies: ["IoT Sensors", "React Native", "AWS IoT", "Python"],
    results: {
      "Energy Savings": "35%",
      "Maintenance Cost": "-60%",
      "Efficiency": "+45%"
    },
  },
  {
    id: 3,
    image: "/portfolio/allo-Tech.png",
    technologies: ["Flutter", "Laravel", "MySQL", "Google Maps API"],
    results: {
      "Earnings": "+65%",
      "Satisfaction": "4.8/5",
      "Bookings": "+80%"
    },
  },
  {
    id: 4,
    image: "/portfolio/evote.webp",
    technologies: ["Blockchain", "React", "Node.js", "PostgreSQL"],
    results: {
      "Voter Turnout": "+40%",
      "Cost Savings": "75%",
      "Incidents": "0"
    },
  },
  {
    id: 5,
    image: "/portfolio/zylo.png",
    technologies: ["Vue.js", "Laravel", "WebSocket", "Redis", "AWS"],
    results: {
      "Accuracy": "99.8%",
      "Costs": "-45%",
      "Speed": "+70%"
    },
  },
  {
    id: 6,
    image: "/portfolio/churchOS.png",
    technologies: ["", "ML", "React", "Python", "Cloud"],
    results: {
      "Theft Prevention": "95%",
      "Fuel Savings": "25%",
      "Leak Detection": "100%"
    },
  }
];

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
};

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState(0);
  const t = useI18n();

  const next = () => setSelected((prev) => (prev + 1) % caseStudies.length);
  const prev = () => setSelected((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  return (
    <section ref={ref} id="portfolio" className="section-padding bg-card">
      <div className="container-editorial">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-4">
              {t('portfolio.title')} {t('portfolio.highlightedTitle')}
            </p>
            <h2 className="text-heading font-semibold text-white max-w-xl">
              {t('portfolio.subtitle')}
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-3 mt-8 md:mt-0">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-lg border border-border flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-lg border border-border flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Featured Project - large image layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image - takes 7 columns */}
              <div className="lg:col-span-7 relative aspect-[6/3] rounded-xl overflow-hidden">
                <img
                  src={caseStudies[selected].image}
                  alt={t(caseStudyKeys.titles[selected])}
                  className="w-full h-full object-fit"
                />
                <div className="absolute inset-0 bg-black/10" />

                {/* Project counter */}
                <div className="absolute top-6 left-6 text-white/30 text-sm font-medium">
                  {String(selected + 1).padStart(2, '0')} / {String(caseStudies.length).padStart(2, '0')}
                </div>
              </div>

              {/* Details - takes 5 columns */}
              <div className="lg:col-span-5 flex flex-col justify-between py-2">
                <div>
                  {/* Category */}
                  <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-3">
                    {t(caseStudyKeys.categories[selected])}
                  </p>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-3">
                    {t(caseStudyKeys.titles[selected])}
                  </h3>

                  {/* Client */}
                  <p className="text-white/40 text-sm mb-6">
                    {t(caseStudyKeys.clients[selected])}
                  </p>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    {t(caseStudyKeys.descriptions[selected])}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(caseStudies[selected].results).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-2xl font-semibold text-white">{value}</p>
                        <p className="text-white/30 text-xs mt-1">{key}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[selected].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs text-white/50 border border-border rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Project thumbnails strip */}
        <motion.div
          className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {caseStudies.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setSelected(index)}
              className={`relative aspect-[4/2] rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                selected === index
                  ? "ring-2 ring-primary opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              <img
                src={project.image}
                alt={t(caseStudyKeys.titles[index])}
                className="w-full h-full object-fit"
              />
            </button>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border/50 pt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-white/40 text-lg">
            {t('portfolio.cta.text')}
          </p>
          <Link href="/contact">
            <Button size="lg">
              {t('portfolio.cta.button')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
