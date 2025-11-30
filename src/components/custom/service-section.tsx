"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";

const services = [
    {
        id: 1,
        title: "Custom Software & ERP/CRM Solutions",
        description: "We develop tailored web and mobile applications, custom ERP/CRM systems, and industry-specific platforms with seamless third-party integrations. Our solutions streamline business processes, enhance productivity, and provide real-time insights for informed decision-making across your organization.",
        image: "/services/crm.webp",
        features: ["Custom Web & Mobile Apps", "ERP/CRM Development", "Third-party Integrations", "Business Process Automation"]
    },
    {
        id: 2,
        title: "AI & Computer Vision Systems",
        description: "Advanced artificial intelligence solutions including facial recognition, object counting and classification, optical character recognition (OCR), license plate reading, intelligent alert systems, and automated reporting. Our AI systems transform visual data into actionable business intelligence.",
        image: "/services/ai-cv.webp",
        features: ["Facial Recognition", "Object Detection & Counting", "OCR & Document Processing", "Intelligent Alert Systems"]
    },
    {
        id: 3,
        title: "IoT & Industrial Automation",
        description: "Comprehensive IoT solutions featuring advanced sensors, SCADA/PLC systems, real-time monitoring, predictive maintenance, and industrial line automation. We help businesses optimize operations, reduce downtime, and enhance efficiency through smart connected devices and automated processes.",
        image: "/services/IoT.webp",
        features: ["Smart Sensors & Devices", "SCADA/PLC Systems", "Predictive Maintenance", "Industrial Process Automation"]
    },
    {
        id: 4,
        title: "Warehouse & Industrial Digitalization (WDMS)",
        description: "Complete digital transformation for warehouses, silos, and industrial facilities. Our Warehouse Digital Management System enables automated inventory counting, real-time tracking, movement monitoring, inventory optimization, and loss prevention with comprehensive digital oversight.",
        image: "/services/wms.webp",
        features: ["Automated Inventory Counting", "Real-time Asset Tracking", "Inventory Optimization", "Loss Prevention Systems"]
    },
    {
        id: 5,
        title: "Fuel Management & Petroleum Depots",
        description: "Advanced fuel management solutions including tank level monitoring, leak detection, delivery tracking, automatic reconciliation, distribution control, and real-time dashboards. Ensure accurate fuel management, prevent losses, and optimize petroleum depot operations.",
        image: "/services/fuel.webp",
        features: ["Tank Level Monitoring", "Leak Detection Systems", "Delivery Tracking", "Real-time Dashboards"]
    },
    {
        id: 6,
        title: "Smart Port, City & Logistics",
        description: "Digital twin technology for ports, comprehensive truck and container tracking, OCR automation, gate automation, intelligent security systems, and optimized logistics flow management. Transform traditional operations into smart, efficient, and connected ecosystems.",
        image: "/services/smart-city.webp",
        features: ["Digital Twin Technology", "Container & Vehicle Tracking", "Gate Automation", "Logistics Optimization"]
    },
    {
        id: 7,
        title: "Cybersecurity, Cloud & Infrastructure",
        description: "End-to-end security and infrastructure solutions including intelligent video security, physical/virtual servers, cloud services, backup systems, comprehensive cybersecurity measures, and business continuity planning. Protect your digital assets while ensuring operational resilience.",
        image: "/services/cloud.webp",
        features: ["Intelligent Video Security", "Cloud Infrastructure", "Data Backup & Recovery", "Business Continuity"]
    }
];

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [selectedService, setSelectedService] = useState(services[0]);

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
                    <h2 className="text-4xl sm:text-5xl md:text-6xl  font-bold text-white mb-6">
                        Our
                        <span className="text-primary relative ml-1 inline-block">
                            Services
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
                        Comprehensive digital solutions tailored to drive your business forward
                        in Africa's evolving tech landscape
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
                                    className={`w-full text-left p-4 rounded-lg hover:cursor-pointer transition-all duration-300 relative overflow-hidden group ${selectedService.id === service.id
                                        ? "bg-primary text-white shadow-lg"
                                        : "bg-transparent text-gray-300"
                                        }`}
                                    onClick={() => setSelectedService(service)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Overlay for hover effect */}
                                    <span className={`absolute inset-0 transform transition-all duration-500 ease-out rounded-lg z-0 ${selectedService.id === service.id
                                        ? "bg-transparent translate-x-0" // Selected state - full primary color
                                        : "bg-white/20 -translate-x-full group-hover:translate-x-0" // Hover state - sliding overlay
                                        }`} />
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-sm lg:text-base">
                                            {service.title}
                                        </span>
                                        {selectedService.id === service.id && (
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
                                            className={`h-px mt-4 ${selectedService.id === service.id
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
                            key={selectedService.id}
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
                                            src={selectedService.image}
                                            alt={selectedService.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-primary/10" />
                                    </motion.div>
                                </div>

                                {/* Service Description & Features */}
                                <div className="flex flex-col justify-center space-y-6">
                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                            {selectedService.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {selectedService.description}
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-white">Key Features:</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {selectedService.features.map((feature, index) => (
                                                <motion.div
                                                    key={feature}
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
                                        Start your project
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