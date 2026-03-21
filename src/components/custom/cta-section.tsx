"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import { useI18n } from "@/locales/client";
import Link from "next/link";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useI18n();
  const ease = [0.16, 1, 0.3, 1] as const;

  const industries = [
    t("cta.industries.0"),
    t("cta.industries.1"),
    t("cta.industries.2"),
    t("cta.industries.3"),
    t("cta.industries.4"),
    t("cta.industries.5")
  ];

  return (
    <section ref={ref} className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background image with solid overlay */}
      <div className="absolute inset-0">
        <img
          src="/pathern.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="container-editorial relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, ease }}
          >
            <h2 className="text-heading font-semibold text-white mb-4 md:mb-6">
              {t("cta.title.line1")}{" "}
              <span className="text-primary">{t("cta.title.highlighted")}</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              {t("cta.subtitle")}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 md:mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            <Link href="/contact">
              <Button size="lg">
                {t("cta.buttons.primary")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                {t("cta.buttons.secondary")}
              </Button>
            </Link>
          </motion.div>

          {/* Industries */}
          <motion.div
            className="mt-12 md:mt-16 border-t border-border/50 pt-6 md:pt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-4">
              {t("cta.trustedBy")}
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="text-xs text-white/40 border border-border/50 px-3 py-1.5 rounded-md"
                >
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
