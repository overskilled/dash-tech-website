"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import { useI18n } from "@/locales/client";

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [selectedService, setSelectedService] = useState(0); // Start with first service
    const t = useI18n();

    // Get services data from translations - create individual arrays for each service
    const services = [
        {
            id: 1,
            title: t('services.items.software.title'),
            description: t('services.items.software.description'),
            image: "/services/crm.webp",
            features: [
                t('services.items.software.features.feature1'),
                t('services.items.software.features.feature2'),
                t('services.items.software.features.feature3'),
                t('services.items.software.features.feature4')
            ]
        },
        {
            id: 2,
            title: t('services.items.ai.title'),
            description: t('services.items.ai.description'),
            image: "/services/ai-cv.webp",
            features: [
                t('services.items.ai.features.feature1'),
                t('services.items.ai.features.feature2'),
                t('services.items.ai.features.feature3'),
                t('services.items.ai.features.feature4')
            ]
        },
        {
            id: 3,
            title: t('services.items.iot.title'),
            description: t('services.items.iot.description'),
            image: "/services/IoT.webp",
            features: [
                t('services.items.iot.features.feature1'),
                t('services.items.iot.features.feature2'),
                t('services.items.iot.features.feature3'),
                t('services.items.iot.features.feature4')
            ]
        },
        {
            id: 4,
            title: t('services.items.warehouse.title'),
            description: t('services.items.warehouse.description'),
            image: "/services/wms.webp",
            features: [
                t('services.items.warehouse.features.feature1'),
                t('services.items.warehouse.features.feature2'),
                t('services.items.warehouse.features.feature3'),
                t('services.items.warehouse.features.feature4')
            ]
        },
        {
            id: 5,
            title: t('services.items.fuel.title'),
            description: t('services.items.fuel.description'),
            image: "/services/fuel.webp",
            features: [
                t('services.items.fuel.features.feature1'),
                t('services.items.fuel.features.feature2'),
                t('services.items.fuel.features.feature3'),
                t('services.items.fuel.features.feature4')
            ]
        },
        {
            id: 6,
            title: t('services.items.smart.title'),
            description: t('services.items.smart.description'),
            image: "/services/smart-city.webp",
            features: [
                t('services.items.smart.features.feature1'),
                t('services.items.smart.features.feature2'),
                t('services.items.smart.features.feature3'),
                t('services.items.smart.features.feature4')
            ]
        },
        {
            id: 7,
            title: t('services.items.cybersecurity.title'),
            description: t('services.items.cybersecurity.description'),
            image: "/services/cloud.webp",
            features: [
                t('services.items.cybersecurity.features.feature1'),
                t('services.items.cybersecurity.features.feature2'),
                t('services.items.cybersecurity.features.feature3'),
                t('services.items.cybersecurity.features.feature4')
            ]
        }
    ];

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
                        {t('services.title.line1')}{" "}
                        <span className="text-primary relative ml-1 inline-block">
                            {t('services.title.line2')}
                            <motion.span
                                className="absolute bottom-0 left-0 w-full h-1 bg-primary"
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            />
                            <motion.span
                                className="absolute -bottom-1 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2"
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
                            />
                        </span>
                    </h2>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        {t('services.description')}
                    </motion.p>
                </motion.div>

                {/* Services Grid - 1:3 Ratio */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                >
                    {/* Left Side - Service Titles (1 part) */}
                    <div className="lg:col-span-1">
                        <div className="space-y-2">
                            {services.map((service, index) => (
                                <motion.button
                                    key={service.id}
                                    className={`w-full text-left p-4 rounded-lg hover:cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                                        selectedService === index
                                            ? "bg-primary text-white shadow-lg"
                                            : "bg-transparent text-gray-300"
                                    }`}
                                    onClick={() => setSelectedService(index)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Overlay for hover effect */}
                                    <span className={`absolute inset-0 transform transition-all duration-500 ease-out rounded-lg z-0 ${
                                        selectedService === index
                                            ? "bg-transparent translate-x-0" // Selected state - full primary color
                                            : "bg-white/20 -translate-x-full group-hover:translate-x-0" // Hover state - sliding overlay
                                    }`} />
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-sm lg:text-base">
                                            {service.title}
                                        </span>
                                        {selectedService === index && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="w-2 h-2 bg-accent rounded-full"
                                            />
                                        )}
                                    </div>

                                    {/* Separator - only show between items, not after last */}
                                    {index < services.length - 1 && (
                                        <motion.div
                                            className={`h-px mt-4 ${
                                                selectedService === index
                                                    ? "bg-white/50"
                                                    : "bg-gray-200"
                                            }`}
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ delay: 0.1 + index * 0.05 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Service Details (3 parts) */}
                    <div className="lg:col-span-3">
                        <motion.div
                            key={selectedService}
                            className="bg-white/20 rounded-2xl shadow-xl overflow-hidden"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                                {/* Service Image */}
                                <div className="flex items-center justify-center">
                                    <motion.div
                                        className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img
                                            src={services[selectedService].image}
                                            alt={services[selectedService].title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-primary/10" />
                                    </motion.div>
                                </div>

                                {/* Service Description & Features */}
                                <div className="flex flex-col justify-center space-y-6">
                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                            {services[selectedService].title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {services[selectedService].description}
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-white">
                                            {t('services.keyFeatures')}
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {services[selectedService].features.map((feature: string, index: number) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-center space-x-2"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 + index * 0.1 }}
                                                >
                                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                                    <span className="text-sm text-gray-300">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        size="lg"
                                        className="font-semibold shadow-lg shadow-black/20 hover:scale-105 transition-all duration-300"
                                    >
                                        {t('services.buttons.startProject')}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}