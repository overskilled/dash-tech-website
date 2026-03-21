"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import { useI18n } from "@/locales/client";
import Link from "next/link";

const stepKeys = {
  titles: [
    "process.stepsData.0.title",
    "process.stepsData.1.title",
    "process.stepsData.2.title",
    "process.stepsData.3.title",
    "process.stepsData.4.title",
    "process.stepsData.5.title"
  ] as const,
  descriptions: [
    "process.stepsData.0.description",
    "process.stepsData.1.description",
    "process.stepsData.2.description",
    "process.stepsData.3.description",
    "process.stepsData.4.description",
    "process.stepsData.5.description"
  ] as const,
  durations: [
    "process.stepsData.0.duration",
    "process.stepsData.1.duration",
    "process.stepsData.2.duration",
    "process.stepsData.3.duration",
    "process.stepsData.4.duration",
    "process.stepsData.5.duration"
  ] as const,
  people: [
    "process.stepsData.0.people",
    "process.stepsData.1.people",
    "process.stepsData.2.people",
    "process.stepsData.3.people",
    "process.stepsData.4.people",
    "process.stepsData.5.people"
  ] as const,
  deliverables: [
    [
      "process.stepsData.0.deliverables.0",
      "process.stepsData.0.deliverables.1",
      "process.stepsData.0.deliverables.2"
    ] as const,
    [
      "process.stepsData.1.deliverables.0",
      "process.stepsData.1.deliverables.1",
      "process.stepsData.1.deliverables.2"
    ] as const,
    [
      "process.stepsData.2.deliverables.0",
      "process.stepsData.2.deliverables.1",
      "process.stepsData.2.deliverables.2"
    ] as const,
    [
      "process.stepsData.3.deliverables.0",
      "process.stepsData.3.deliverables.1",
      "process.stepsData.3.deliverables.2"
    ] as const,
    [
      "process.stepsData.4.deliverables.0",
      "process.stepsData.4.deliverables.1",
      "process.stepsData.4.deliverables.2"
    ] as const,
    [
      "process.stepsData.5.deliverables.0",
      "process.stepsData.5.deliverables.1",
      "process.stepsData.5.deliverables.2"
    ] as const
  ] as const
};

type TranslationKey =
  | "process.title"
  | "process.highlightedTitle"
  | "process.subtitle"
  | "process.steps.stepNumber"
  | "process.steps.keyDeliverables"
  | "process.cta.text"
  | "process.cta.button"
  | typeof stepKeys.titles[number]
  | typeof stepKeys.descriptions[number]
  | typeof stepKeys.durations[number]
  | typeof stepKeys.people[number]
  | typeof stepKeys.deliverables[number][number];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);
  const t = useI18n();

  return (
    <section ref={ref} className="section-padding">
      <div className="container-editorial">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-4">
            {t("process.title" as TranslationKey)} {t("process.highlightedTitle" as TranslationKey)}
          </p>
          <h2 className="text-heading font-semibold text-white max-w-2xl">
            {t("process.subtitle" as TranslationKey)}
          </h2>
        </motion.div>

        {/* Steps - horizontal selector */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex overflow-x-auto gap-0 border-b border-border/50 pb-0 scrollbar-hide">
            {stepKeys.titles.map((titleKey, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex-shrink-0 px-6 py-4 text-sm font-medium transition-all duration-300 border-b-2 cursor-pointer ${
                  activeStep === index
                    ? "text-white border-primary"
                    : "text-white/30 border-transparent hover:text-white/60"
                }`}
              >
                <span className="text-white/20 mr-2">0{index + 1}</span>
                {t(titleKey)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Left - content */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-primary text-sm font-medium">
                  {t("process.steps.stepNumber" as TranslationKey)} {activeStep + 1}
                </span>
                <h3 className="text-3xl font-semibold text-white mt-2 mb-4">
                  {t(stepKeys.titles[activeStep])}
                </h3>
                <p className="text-white/50 leading-relaxed mb-8">
                  {t(stepKeys.descriptions[activeStep])}
                </p>
              </div>

              {/* Meta */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-2">Duration</p>
                  <p className="text-white text-sm font-medium">{t(stepKeys.durations[activeStep])}</p>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-2">Team</p>
                  <p className="text-white text-sm font-medium">{t(stepKeys.people[activeStep])}</p>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-4">
                  {t("process.steps.keyDeliverables" as TranslationKey)}
                </p>
                <div className="flex flex-wrap gap-3">
                  {stepKeys.deliverables[activeStep].map((deliverableKey) => (
                    <span
                      key={deliverableKey}
                      className="px-4 py-2 text-sm text-white/60 border border-border rounded-lg"
                    >
                      {t(deliverableKey)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - visual representation */}
            <div className="relative">
              {/* Step number large */}
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="text-[12rem] lg:text-[16rem] font-semibold text-white/[0.03] leading-none block">
                    0{activeStep + 1}
                  </span>
                  <div className="mt-[-4rem] relative z-10">
                    {/* Progress dots */}
                    <div className="flex justify-center gap-3">
                      {stepKeys.titles.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveStep(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            index === activeStep
                              ? "bg-primary w-8"
                              : index < activeStep
                              ? "bg-white/30"
                              : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border/50 pt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white/40 text-lg">
            {t("process.cta.text" as TranslationKey)}
          </p>
          <Link href="/contact">
            <Button size="lg">
              {t("process.cta.button" as TranslationKey)}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
