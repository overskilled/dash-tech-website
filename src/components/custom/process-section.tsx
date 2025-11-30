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

const processSteps = [
  {
    id: 1,
    title: "Discovery & Consultation",
    description: "We begin by deeply understanding your business needs, challenges, and objectives through comprehensive discussions and analysis.",
    icon: MessageCircle,
    duration: "1-2 weeks",
    deliverables: ["Requirements Document", "Project Scope", "Technical Feasibility"],
    color: "bg-primary",
    people: ["Business Analyst", "Project Manager"]
  },
  {
    id: 2,
    title: "Research & Planning",
    description: "Our team conducts market research, technical analysis, and creates a detailed project roadmap with clear milestones.",
    icon: Search,
    duration: "2-3 weeks",
    deliverables: ["Technical Specification", "Project Timeline", "Resource Plan"],
    color: "bg-secondary",
    people: ["UX Researcher", "Solution Architect"]
  },
  {
    id: 3,
    title: "Design & Prototyping",
    description: "We create intuitive user interfaces, interactive prototypes, and design systems that align with your brand and user needs.",
    icon: Palette,
    duration: "3-4 weeks",
    deliverables: ["UI/UX Designs", "Interactive Prototype", "Design System"],
    color: "bg-accent",
    people: ["UI/UX Designer", "Product Designer"]
  },
  {
    id: 4,
    title: "Development & Testing",
    description: "Our developers build your solution using best practices, with continuous testing and quality assurance throughout the process.",
    icon: Code,
    duration: "4-12 weeks",
    deliverables: ["MVP Development", "Quality Assurance", "Performance Testing"],
    color: "bg-primary",
    people: ["Frontend/Backend Devs", "QA Engineer"]
  },
  {
    id: 5,
    title: "Deployment & Launch",
    description: "We handle the complete deployment process, ensuring a smooth transition to production with minimal disruption.",
    icon: Rocket,
    duration: "1-2 weeks",
    deliverables: ["Production Deployment", "User Training", "Documentation"],
    color: "bg-secondary",
    people: ["DevOps Engineer", "Project Manager"]
  },
  {
    id: 6,
    title: "Support & Evolution",
    description: "Post-launch support, maintenance, and continuous improvement to ensure your solution evolves with your business needs.",
    icon: Settings,
    duration: "Ongoing",
    deliverables: ["Technical Support", "Feature Updates", "Performance Monitoring"],
    color: "bg-accent",
    people: ["Support Team", "Product Manager"]
  }
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});
  const [activeStep, setActiveStep] = useState(0);

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
          {/* <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Target className="w-4 h-4 mr-2" />
            Our Process
          </motion.div> */}
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            How We <span className="text-primary">Work</span>
          </h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            A transparent, collaborative process designed to deliver exceptional results 
            while keeping you involved every step of the way
          </motion.p>
        </motion.div>

        {/* Interactive Process Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Progress Line - Fixed positioning */}
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
                  {/* Step Number & Icon - Fixed positioning */}
                  <div className="flex flex-col items-center flex-shrink-0 relative">
                    {/* Icon Container with proper background */}
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
                    
                    {/* Connection Line - Fixed to not show below cards */}
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
                              {step.title}
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
                          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {step.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {step.people.join(", ")}
                            </div>
                          </div>
                        </div>
                        
                        {/* Step Number */}
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-gray-300"
                        }`}>
                          Step {index + 1}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {step.description}
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
                          Key Deliverables:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <motion.div
                              key={deliverable}
                              className="flex items-center gap-2 text-sm text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * idx }}
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {deliverable}
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

        {/* Process Stats */}
        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "4.8/5", label: "Average Rating" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-card rounded-2xl border shadow-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        >
          <p className="text-gray-300 text-lg mb-6">
            Ready to start your project with our proven process?
          </p>
          <Button size={"lg"}>
            Begin Your Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}