"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import { useI18n } from "@/locales/client";
import Link from "next/link";

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState(0);
  const [downloading, setDownloading] = useState<string | null>(null);
  const t = useI18n();
  const ease = [0.16, 1, 0.3, 1] as const;

  const services = [
    {
      id: 1,
      title: t('services.items.software.title'),
      description: t('services.items.software.description'),
      image: "/services/crm.webp",
      features: [
        t('services.items.software.features.feature1'),
        t('services.items.software.features.feature2'),
        t('services.items.software.features.feature3'),
        t('services.items.software.features.feature4')
      ]
    },
    {
      id: 2,
      title: t('services.items.ai.title'),
      description: t('services.items.ai.description'),
      image: "/services/ai-girl.webp",
      features: [
        t('services.items.ai.features.feature1'),
        t('services.items.ai.features.feature2'),
        t('services.items.ai.features.feature3'),
        t('services.items.ai.features.feature4')
      ]
    },
    {
      id: 3,
      title: t('services.items.iot.title'),
      description: t('services.items.iot.description'),
      image: "/services/IoT.webp",
      features: [
        t('services.items.iot.features.feature1'),
        t('services.items.iot.features.feature2'),
        t('services.items.iot.features.feature3'),
        t('services.items.iot.features.feature4')
      ]
    },
    {
      id: 4,
      title: t('services.items.warehouse.title'),
      description: t('services.items.warehouse.description'),
      image: "/services/wdms.webp",
      features: [
        t('services.items.warehouse.features.feature1'),
        t('services.items.warehouse.features.feature2'),
        t('services.items.warehouse.features.feature3'),
        t('services.items.warehouse.features.feature4')
      ]
    },
    {
      id: 5,
      title: t('services.items.fuel.title'),
      description: t('services.items.fuel.description'),
      image: "/services/fuel2.webp",
      features: [
        t('services.items.fuel.features.feature1'),
        t('services.items.fuel.features.feature2'),
        t('services.items.fuel.features.feature3'),
        t('services.items.fuel.features.feature4')
      ]
    },
    {
      id: 6,
      title: t('services.items.smart.title'),
      description: t('services.items.smart.description'),
      image: "/services/smart-city.webp",
      features: [
        t('services.items.smart.features.feature1'),
        t('services.items.smart.features.feature2'),
        t('services.items.smart.features.feature3'),
        t('services.items.smart.features.feature4')
      ]
    },
    {
      id: 7,
      title: t('services.items.cybersecurity.title'),
      description: t('services.items.cybersecurity.description'),
      image: "/services/cloud.webp",
      features: [
        t('services.items.cybersecurity.features.feature1'),
        t('services.items.cybersecurity.features.feature2'),
        t('services.items.cybersecurity.features.feature3'),
        t('services.items.cybersecurity.features.feature4')
      ]
    }
  ];

  const current = services[selectedService];

  const handleDownloadGuide = useCallback(async () => {
    setDownloading("guide");
    try {
      const { generateFullProductGuide } = await import("@/lib/pdf-generator");
      generateFullProductGuide(services);
    } finally {
      setTimeout(() => setDownloading(null), 1000);
    }
  }, [services]);

  const handleDownloadService = useCallback(async (service: typeof services[0]) => {
    setDownloading(`service-${service.id}`);
    try {
      const { generateServicePDF } = await import("@/lib/pdf-generator");
      generateServicePDF(service);
    } finally {
      setTimeout(() => setDownloading(null), 1000);
    }
  }, []);

  return (
    <section ref={ref} id="services" className="section-padding">
      <div className="container-editorial">
        {/* Header with full guide download */}
        <motion.div
          className="mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-white/40 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-4">
                {t('services.title.line1')} {t('services.title.line2')}
              </p>
              <h2 className="text-heading font-semibold text-white max-w-2xl">
                {t('services.description')}
              </h2>
            </div>

            {/* Full Product Guide Download */}
            <div className="lg:col-span-5 lg:text-right">
              <button
                onClick={handleDownloadGuide}
                disabled={downloading === "guide"}
                className="group inline-flex items-center gap-3 border border-border/50 hover:border-white/20 rounded-xl px-5 sm:px-6 py-4 transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:cursor-wait text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-500">
                  <DownloadIcon className="text-primary" />
                </div>
                <div>
                  <p className="text-white text-xs sm:text-sm font-semibold">
                    {downloading === "guide" ? "Generating..." : "Product Guide"}
                  </p>
                  <p className="text-white/30 text-[0.6875rem]">
                    Download full services catalog (PDF)
                  </p>
                </div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Service selector + detail */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Left — Service list */}
          <div className="lg:col-span-4 mb-8 lg:mb-0">
            <div className="space-y-0 border-l border-border/50">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  className={`w-full text-left pl-5 sm:pl-6 pr-4 py-3 sm:py-4 transition-all duration-500 cursor-pointer relative ${
                    selectedService === index
                      ? "text-white"
                      : "text-white/40 hover:text-white/70"
                  }`}
                  onClick={() => setSelectedService(index)}
                >
                  {/* Active indicator */}
                  <span
                    className={`absolute left-0 top-0 w-[2px] h-full bg-primary transition-opacity duration-300 ${
                      selectedService === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span className="text-xs sm:text-sm font-medium leading-tight block">
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right — Service detail with large image */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease }}
              >
                {/* Large Image */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6 md:mb-8">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  {/* Service number overlay */}
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                    <span className="text-white/30 text-5xl md:text-7xl font-semibold">
                      0{selectedService + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 md:mb-4">
                      {current.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed text-xs sm:text-sm">
                      {current.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-4">
                      {t('services.keyFeatures')}
                    </p>
                    <ul className="space-y-3">
                      {current.features.map((feature: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-xs sm:text-sm text-white/70"
                        >
                          <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8">
                      <Link href="/contact">
                        <Button size="default">
                          {t('services.buttons.startProject')}
                        </Button>
                      </Link>
                      <button
                        onClick={() => handleDownloadService(current)}
                        disabled={downloading === `service-${current.id}`}
                        className="inline-flex items-center justify-center gap-2.5 h-11 px-5 rounded-md border border-white/20 text-white/70 text-[0.8125rem] font-medium uppercase tracking-[0.08em] hover:bg-white/[0.04] hover:border-white/40 hover:text-white transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:cursor-wait"
                      >
                        <DownloadIcon className="w-4 h-4" />
                        {downloading === `service-${current.id}` ? "Generating..." : "Download PDF"}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
