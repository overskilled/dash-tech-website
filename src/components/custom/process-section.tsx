"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  Search,
  Palette,
  Code,
  Rocket,
  Settings,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Target
} from "lucide-react";
import { Button } from "../ui/button";
import { useI18n } from "@/locales/client";

const processSteps = [
  {
    id: 1,
    icon: MessageCircle,
    color: "bg-primary"
  },
  {
    id: 2,
    icon: Search,
    color: "bg-secondary"
  },
  {
    id: 3,
    icon: Palette,
    color: "bg-accent"
  },
  {
    id: 4,
    icon: Code,
    color: "bg-primary"
  },
  {
    id: 5,
    icon: Rocket,
    color: "bg-secondary"
  },
  {
    id: 6,
    icon: Settings,
    color: "bg-accent"
  }
];

// Define the exact translation keys as const
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

// Define the translation key type
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
  const isInView = useInView(ref, { once: true});
  const [activeStep, setActiveStep] = useState(0);
  const t = useI18n();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            {t("process.title" as TranslationKey)} <span className="text-primary">{t("process.highlightedTitle" as TranslationKey)}</span>
          </h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {t("process.subtitle" as TranslationKey)}
          </motion.p>
        </motion.div>

        {/* Interactive Process Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border z-0">
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary origin-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
          </div>

          {/* Process Steps */}
          <div className="relative z-10 space-y-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;
              
              return (
                <motion.div
                  key={step.id}
                  className="flex gap-8 group cursor-pointer"
                  variants={itemVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center flex-shrink-0 relative">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center relative z-20 transition-all duration-300 ${
                        isActive
                          ? `${step.color} border-primary text-primary-foreground scale-110 shadow-lg`
                          : "bg-background border-border text-muted-foreground group-hover:bg-accent"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-6 h-6" />
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <CheckCircle className="w-3 h-3 text-primary-foreground" />
                        </motion.div>
                      )}
                    </motion.div>
                    
                    {/* Connection Line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-16 bottom-0 w-0.5 flex justify-center">
                        <motion.div
                          className={`w-0.5 h-full ${
                            isActive ? "bg-primary" : "bg-border"
                          }`}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Step Content */}
                  <motion.div
                    className={`flex-1 pb-8 transition-all duration-300 ${
                      isActive
                        ? "translate-x-2"
                        : "group-hover:translate-x-1"
                    }`}
                  >
                    <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-card border-primary shadow-lg"
                        : "bg-card border-border group-hover:border-primary/50 group-hover:shadow-md"
                    }`}>
                      {/* Step Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className={`text-xl font-bold transition-colors duration-300 ${
                              isActive ? "text-primary" : "text-foreground"
                            }`}>
                              {t(stepKeys.titles[index])}
                            </h3>
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <ArrowRight className="w-5 h-5 text-primary" />
                              </motion.div>
                            )}
                          </div>
                          
                          {/* Duration & Team */}
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {t(stepKeys.durations[index])}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {t(stepKeys.people[index])}
                            </div>
                          </div>
                        </div>
                        
                        {/* Step Number */}
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-muted-foreground"
                        }`}>
                          {t("process.steps.stepNumber" as TranslationKey)} {index + 1}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {t(stepKeys.descriptions[index])}
                      </p>

                      {/* Deliverables */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          {t("process.steps.keyDeliverables" as TranslationKey)}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {stepKeys.deliverables[index].map((deliverableKey, idx) => (
                            <motion.div
                              key={deliverableKey}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * idx }}
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {t(deliverableKey)}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        >
          <p className="text-muted-foreground text-lg mb-6">
            {t("process.cta.text" as TranslationKey)}
          </p>
          <Button size="lg">
            {t("process.cta.button" as TranslationKey)}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}