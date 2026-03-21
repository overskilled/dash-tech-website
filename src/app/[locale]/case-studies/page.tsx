"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CaseStudiesPage() {
    const t = useI18n();
    const ease = [0.16, 1, 0.3, 1] as const;

    const caseStudies = [
        {
            title: "DGI Cameroun: Digital Tax System Transformation",
            client: "Direction Generale des Impots",
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
            client: "Societe Immobiliere du Cameroun",
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
        <div className="min-h-screen bg-background">
            {/* Hero — full-bleed image */}
            <section className="relative min-h-[55vh] lg:min-h-[60vh] flex items-end overflow-hidden -mt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
                        alt="Dash Tech Africa success stories"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/55" />
                </div>

                <div className="container-editorial relative z-10 pb-16 md:pb-20 lg:pb-24 pt-40">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease }}
                    >
                        <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-4 md:mb-6">
                            Case Studies
                        </p>
                        <h1 className="text-display font-semibold text-white mb-4 md:mb-6">
                            Success <span className="text-primary">Stories</span>
                        </h1>
                        <p className="text-body-lg text-white/50 max-w-xl">
                            Discover how we&apos;ve helped businesses across Africa transform their operations with innovative digital solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section-padding">
                <div className="container-editorial">
                    <div className="space-y-12 md:space-y-16">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start"
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            >
                                {/* Image */}
                                <div className={`lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden bg-card flex items-center justify-center ${
                                    index % 2 === 1 ? "lg:order-2" : ""
                                }`}>
                                    <img
                                        src={study.image}
                                        alt={study.client}
                                        className="w-3/4 h-3/4 object-contain img-mono"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/logo-dash-tech.webp';
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div className={`lg:col-span-7 ${
                                    index % 2 === 1 ? "lg:order-1" : ""
                                }`}>
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {study.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs text-white/40 border border-border/50 px-3 py-1 rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="text-subheading font-semibold text-white mb-2">
                                        {study.title}
                                    </h2>

                                    <p className="text-white/30 text-xs sm:text-sm mb-6">
                                        {study.client} &middot; {study.industry}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 md:mb-8">
                                        <div>
                                            <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-2">Challenge</p>
                                            <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-2">Solution</p>
                                            <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{study.solution}</p>
                                        </div>
                                    </div>

                                    {/* Results */}
                                    <div className="mb-6 md:mb-8">
                                        <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-3">Key Results</p>
                                        <ul className="space-y-2">
                                            {study.results.map((result) => (
                                                <li key={result} className="flex items-start gap-3 text-xs sm:text-sm text-white/60">
                                                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Button size="default">Read Full Case Study</Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        className="mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border/50 pt-10 md:pt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <p className="text-white/40 text-base sm:text-lg">Ready to write your success story?</p>
                        <Link href="/contact">
                            <Button size="lg">Start Your Project</Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
