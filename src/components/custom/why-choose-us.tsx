"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import { useI18n } from "@/locales/client";
import Link from "next/link";

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useI18n();

  const features = [
    {
      title: t('whyChooseUs.features.africanExpertise.title'),
      description: t('whyChooseUs.features.africanExpertise.description'),
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    },
    {
      title: t('whyChooseUs.features.innovativeSolutions.title'),
      description: t('whyChooseUs.features.innovativeSolutions.description'),
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    },
    {
      title: t('whyChooseUs.features.dedicatedSupport.title'),
      description: t('whyChooseUs.features.dedicatedSupport.description'),
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    },
    {
      title: t('whyChooseUs.features.costEffective.title'),
      description: t('whyChooseUs.features.costEffective.description'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: t('whyChooseUs.features.fastDeployment.title'),
      description: t('whyChooseUs.features.fastDeployment.description'),
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    },
    {
      title: t('whyChooseUs.features.provenTrackRecord.title'),
      description: t('whyChooseUs.features.provenTrackRecord.description'),
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    }
  ];

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section ref={ref} className="section-padding">
      <div className="container-editorial">
        {/* Header */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.8, ease }}
        >
          <div>
            <p className="text-white/40 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-4">
              {t('whyChooseUs.title.line1')} {t('whyChooseUs.title.line2')}
            </p>
            <h2 className="text-heading font-semibold text-white">
              {t('whyChooseUs.description')}
            </h2>
          </div>

          {/* CEO Quote */}
          <div className="flex flex-col justify-end">
            <div className="border-l-2 border-primary pl-6">
              <blockquote className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                &ldquo;{t('whyChooseUs.ceo.quote')}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="/diletta.webp"
                    alt={t('whyChooseUs.ceo.name')}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t('whyChooseUs.ceo.name')}</p>
                  <p className="text-white/40 text-xs">{t('whyChooseUs.ceo.position')}, {t('whyChooseUs.ceo.company')}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Full-width hero image */}
        <motion.div
          className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-8 md:mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1600&q=80"
            alt="African tech professionals collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold max-w-2xl">
              Experience the difference of working with Africa&apos;s leading digital transformation partner
            </p>
          </div>
        </motion.div>

        {/* Features Grid — image-backed cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.08,
                ease,
              }}
            >
              {/* Background Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />

              {/* Solid overlay */}
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-700" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-5 sm:p-6">
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-700">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border/50 pt-10 md:pt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-white/40 text-base sm:text-lg">
            {t('whyChooseUs.cta.description')}
          </p>
          <Link href="/contact">
            <Button size="lg">
              {t('whyChooseUs.cta.button')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
