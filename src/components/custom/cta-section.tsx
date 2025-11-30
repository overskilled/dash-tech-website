"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, Zap, Users } from "lucide-react";
import { Button } from "../ui/button";
import { useI18n } from "@/locales/client";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useI18n();

  // Get industries from translation
  const industries = [
    t("cta.industries.0"),
    t("cta.industries.1"),
    t("cta.industries.2"),
    t("cta.industries.3"),
    t("cta.industries.4"),
    t("cta.industries.5")
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background with African Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/pathern.webp')",
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t("cta.title.line1")}{" "}
              <span className="text-primary relative">
                {t("cta.title.highlighted")}
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("cta.subtitle")}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <Button size={"lg"}>
              {t("cta.buttons.primary")}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Button>
            
            <Button size={"lg"} variant={"outline"}> 
              {t("cta.buttons.secondary")}
              <motion.div
                className="w-5 h-5 rounded-full border-2 border-primary group-hover:border-primary-foreground flex items-center justify-center"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-1 h-1 bg-primary group-hover:bg-primary-foreground rounded-full" />
              </motion.div>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="border-t border-border pt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <p className="text-muted-foreground text-sm mb-4">
              {t("cta.trustedBy")}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {industries.map((industry, index) => (
                <motion.span
                  key={industry}
                  className="text-xs text-foreground bg-accent px-3 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1, ease: "easeOut" }}
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/4 -right-4 w-6 h-6 bg-secondary/20 rounded-full"
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-8 left-1/4 w-4 h-4 bg-accent/30 rounded-full"
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
      </div>
    </section>
  );
}