"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, Zap, Users } from "lucide-react";
import { Button } from "../ui/button";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
              Ready to Transform Your{" "}
              <span className="text-primary relative">
                Business?
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Join the growing number of African businesses leveraging our innovative 
              digital solutions to drive growth and efficiency.
            </p>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {[
              { icon: Users, number: "100+", label: "Clients Served" },
              { icon: Zap, number: "50+", label: "Projects Delivered" },
              { icon: Star, number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center p-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div> */}

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <Button size={"lg"}>
              Start Your Project
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Button>
            
            <Button size={"lg"}  variant={"outline"}> 
              Schedule a Call
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
            <p className="text-gray-400 text-sm mb-4">
              Trusted by leading businesses across Africa
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[
                "Manufacturing",
                "Logistics",
                "Energy",
                "Government",
                "Healthcare",
                "Retail"
              ].map((industry, index) => (
                <motion.span
                  key={industry}
                  className="text-xs text-white font-medium px-3 py-1 bg-accent rounded-full"
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