"use client";

import { motion } from "framer-motion";
import { FileCheck, TrendingUp, Users, ArrowRight } from "lucide-react";
import { useI18n } from "@/locales/client";

export default function CaseStudiesPage() {
    const t = useI18n();

    const caseStudies = [
        {
            title: "DGI Cameroun: Digital Tax System Transformation",
            client: "Direction Générale des Impôts",
            industry: "Government",
            challenge: "Modernize tax collection and processing systems across Cameroon",
            solution: "Custom ERP system with automated workflows and real-time reporting",
            results: [
                "60% reduction in processing time",
                "Enhanced transparency and accountability",
                "Improved revenue collection efficiency"
            ],
            image: "/Logo_DGI_Cameroun.webp",
            tags: ["ERP", "Government", "Automation"]
        },
        {
            title: "Cadyst Group: Warehouse Management System",
            client: "Cadyst Group",
            industry: "Manufacturing",
            challenge: "Track inventory across multiple warehouses with real-time visibility",
            solution: "AI-powered warehouse management system with IoT sensors",
            results: [
                "40% reduction in inventory losses",
                "Real-time stock tracking",
                "Automated reporting and alerts"
            ],
            image: "/cadyst.webp",
            tags: ["IoT", "AI", "Logistics"]
        },
        {
            title: "SIC: Smart Building Management",
            client: "Société Immobilière du Cameroun",
            industry: "Real Estate",
            challenge: "Monitor and control building systems efficiently",
            solution: "IoT-based building automation and monitoring platform",
            results: [
                "35% energy cost savings",
                "Predictive maintenance alerts",
                "Enhanced tenant satisfaction"
            ],
            image: "/SIC.webp",
            tags: ["IoT", "Smart Buildings", "Automation"]
        }
    ];

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                        <FileCheck className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                        Success <span className="text-primary">Stories</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover how we've helped businesses across Africa transform their operations with innovative digital solutions.
                    </p>
                </motion.div>

                {/* Case Studies */}
                <div className="space-y-12">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {/* Image */}
                                <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                                    <img
                                        src={study.image}
                                        alt={study.client}
                                        className="w-full h-full object-contain p-12"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/logo-dash-tech.webp';
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {study.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                        {study.title}
                                    </h2>

                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                        <span className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {study.client}
                                        </span>
                                        <span>•</span>
                                        <span>{study.industry}</span>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-2">Challenge</h3>
                                            <p className="text-muted-foreground text-sm">
                                                {study.challenge}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-2">Solution</h3>
                                            <p className="text-muted-foreground text-sm">
                                                {study.solution}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                            <TrendingUp className="w-5 h-5 text-primary" />
                                            Key Results
                                        </h3>
                                        <ul className="space-y-2">
                                            {study.results.map((result, resultIndex) => (
                                                <li
                                                    key={resultIndex}
                                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                                >
                                                    <span className="text-primary mt-0.5">✓</span>
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 w-fit">
                                        Read Full Case Study
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="mt-20 bg-primary/5 rounded-2xl p-12 border border-primary/20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        Ready to Write Your Success Story?
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Let's discuss how we can help transform your business with our innovative digital solutions.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                        Start Your Project
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
