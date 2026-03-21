"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";
import Link from "next/link";

export function HeroSection() {
  const t = useI18n();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      className="relative -mt-20 min-h-screen w-full overflow-hidden flex items-end"
      aria-labelledby="hero-heading"
    >
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="grok1.mp4" type="video/mp4" />
        </video>
        {/* Solid overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Hero Content */}
      <div className="container-editorial pb-16 md:pb-20 lg:pb-24 pt-40 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <motion.p
              className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-4 md:mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease }}
            >
              Digital Solutions for Africa
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              id="hero-heading"
              className="font-semibold text-white text-display"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease }}
            >
              {t('hero.title.line1')}
              <br />
              <span className="text-primary">{t('hero.title.line2')}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-6 md:mt-8 text-white/60 max-w-xl text-body-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease }}
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease }}
            >
              <Link href="/contact">
                <Button size="lg">
                  {t('hero.buttons.startProject')}
                </Button>
              </Link>
              <Link href="/#services">
                <Button variant="outline" size="lg">
                  {t('hero.buttons.discoverServices')}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="mt-12 md:mt-16 flex flex-wrap gap-8 md:gap-12 border-t border-white/10 pt-6 md:pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "6+", label: "Countries Served" },
              { value: "10+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
