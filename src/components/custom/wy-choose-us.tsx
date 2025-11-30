"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Globe, 
  Lightbulb, 
  Settings, 
  DollarSign, 
  Zap, 
  ShieldCheck,
  Quote
} from "lucide-react";
import { Button } from "../ui/button";

const features = [
  {
    icon: Globe,
    title: "African Expertise",
    description: "Deep understanding of local markets, regulations, and business cultures across Africa"
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Cutting-edge technology tailored to solve unique African business challenges"
  },
  {
    icon: Settings,
    title: "Dedicated Support",
    description: "24/7 local support with rapid response times and personalized service"
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Pricing",
    description: "Competitive pricing models designed for African businesses of all sizes"
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    description: "Rapid implementation with minimal disruption to your operations"
  },
  {
    icon: ShieldCheck,
    title: "Proven Track Record",
    description: "Successful implementations across multiple industries and countries"
  }
];

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Why Choose <span className="text-primary">Dash Tech</span>
          </h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Experience the difference of working with Africa's leading digital transformation partner
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Enhanced CEO Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* CEO Card with Image on Left */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12" />
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                  {/* CEO Image - Larger and more prominent */}
                  <motion.div
                    className="flex-shrink-0"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  >
                    <div className="relative w-32 h-32 lg:w-48 lg:h-85 rounded-2xl overflow-hidden  shadow-2xl">
                      <img
                        src="/diletta.webp"
                        alt="Diletta EGBE - CEO Dash Tech Africa"
                        className="w-full h-full object-cover"
                      />
                      {/* Subtle Gradient Overlay */}
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" /> */}
                    </div>
                    
                    {/* CEO Badge */}
                    {/* <motion.div
                      className="absolute -bottom-2 -right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.6, delay: 1, ease: "backOut" }}
                    >
                      CEO
                    </motion.div> */}
                  </motion.div>

                  {/* CEO Content */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Quote Icon */}
                    <motion.div
                      className="text-4xl text-primary mb-4 lg:mb-6"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: 0.8, ease: "backOut" }}
                    >
                      "
                    </motion.div>

                    {/* CEO Message */}
                    <motion.blockquote
                      className="text-lg sm:text-xl text-white leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                    >
                      Technology has the power to transform Africa's future. At Dash Tech, we don't just build solutions—we build partnerships that drive meaningful change and create lasting impact across our continent.
                    </motion.blockquote>

                    {/* CEO Signature */}
                    <motion.div
                      className="border-t border-white/20 pt-4"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                    >
                      <div>
                        <p className="text-white font-bold text-xl">Diletta EGBE</p>
                        <p className="text-primary font-semibold">CEO & Founder</p>
                        <p className="text-gray-400 text-sm">Dash Tech</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Features Grid with Glass Background */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="bg-white/5 backdrop-blur-sm hover:cursor-pointer rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:bg-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon Container with Glass Effect */}
                    <motion.div
                      className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:border-primary/40 group-hover:bg-white/15 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <IconComponent className="w-7 h-7 text-primary" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Line Effect */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mt-4 mx-auto w-1/2"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <p className="text-gray-400 text-lg mb-6">
            Ready to transform your business with African expertise?
          </p>
          <Button size={"lg"}>
            Start Your Digital Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}