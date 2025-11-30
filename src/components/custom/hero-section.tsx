"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      className="relative -mt-16 h-[90vh] w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* === BACKGROUND VIDEO - FIXED AUTOPLAY === */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }}
        >
          <source
            src="/videos/DASHACO HOLDINGS AFRICA  present.mp4"
            type="video/mp4"
          />
          {/* Fallback if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-800" />
        </video>
      </div>

      {/* === OVERLAY === */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-black/50 to-black/70" />

      {/* === HERO CONTENT === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="container mx-auto container-padding-x h-full
                   flex flex-col items-center justify-center
                   text-center lg:text-left lg:items-start max-w-5xl"
      >
        <motion.h1
          className="font-semibold text-white drop-shadow-xl leading-tight
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.1 }}
        >
          Empowering Africa's{" "}
          <span className="block text-primary relative ml-1 inline-block">digital future</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-white/90 drop-shadow max-w-2xl
                     text-base sm:text-lg md:text-xl"
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.1 }}
        >
          Dash Tech Africa delivers innovative digital solutions that help
          businesses grow, scale, and thrive in a connected world.
          Transform your ideas into impactful technology.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.6,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: { y: 0, opacity: 1 },
            }}
          >
            <Button
              size="lg"
              className="font-semibold shadow-lg shadow-black/20 hover:scale-105 transition-all duration-300"
            >
              Start your project
            </Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: { y: 0, opacity: 1 },
            }}
          >
            <Button
              variant="outline"
              size="lg"
              className="text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Discover services
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}