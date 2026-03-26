"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useCallback } from "react";

const DownloadIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const ArrowIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

export default function ProductPage() {
    const t = useI18n();
    const ease = [0.16, 1, 0.3, 1] as const;
    const [downloading, setDownloading] = useState<string | null>(null);

    const products = [
        {
            id: 1,
            title: t('products.items.software.title'),
            description: t('products.items.software.description'),
            link: "https://zylo-platform.cloud/",
            image: "/portfolio/zylo.png",
            features: [
                t('products.items.software.features.feature1'),
                t('products.items.software.features.feature2'),
                t('products.items.software.features.feature3'),
                t('products.items.software.features.feature4')
            ],
            useCases: ["Enterprise resource planning", "CRM implementation", "Business process automation", "Legacy system modernization"],
            stats: { projects: "20+", clients: "15+", uptime: "99.9%" }
        },
        {
            id: 2,
            title: t('products.items.ai.title'),
            description: t('products.items.ai.description'),
            image: "/portfolio/VMARIC.png",
            link: "https://zylo-platform.cloud/",
            features: [
                t('products.items.ai.features.feature1'),
                t('products.items.ai.features.feature2'),
                t('products.items.ai.features.feature3'),
                t('products.items.ai.features.feature4')
            ],
            useCases: ["Security & surveillance", "Quality control inspection", "Document digitization", "Traffic & crowd analysis"],
            stats: { projects: "12+", clients: "8+", accuracy: "98.5%" }
        },
        {
            id: 3,
            title: t('products.items.iot.title'),
            description: t('products.items.iot.description'),
            image: "/portfolio/allo-Tech.png",
            link: "https://allotechafrica.com/",
            features: [
                t('products.items.iot.features.feature1'),
                t('products.items.iot.features.feature2'),
                t('products.items.iot.features.feature3'),
                t('products.items.iot.features.feature4')
            ],
            useCases: ["Factory automation", "Environmental monitoring", "Predictive maintenance", "Energy management"],
            stats: { projects: "10+", devices: "500+", uptime: "99.7%" }
        },
        {
            id: 4,
            title: t('products.items.warehouse.title'),
            description: t('products.items.warehouse.description'),
            image: "/portfolio/evote.webp",
            link: "https://zylo-platform.cloud/",
            features: [
                t('products.items.warehouse.features.feature1'),
                t('products.items.warehouse.features.feature2'),
                t('products.items.warehouse.features.feature3'),
                t('products.items.warehouse.features.feature4')
            ],
            useCases: ["Warehouse operations", "Supply chain management", "Inventory optimization", "Loss prevention"],
            stats: { projects: "8+", reduction: "40%", tracked: "1M+" }
        },
        {
            id: 5,
            title: t('products.items.fuel.title'),
            description: t('products.items.fuel.description'),
            image: "/portfolio/fuelguard.webp",
            link: "https://zylo-platform.cloud/",
            features: [
                t('products.items.fuel.features.feature1'),
                t('products.items.fuel.features.feature2'),
                t('products.items.fuel.features.feature3'),
                t('products.items.fuel.features.feature4')
            ],
            useCases: ["Fuel depot management", "Fleet fuel tracking", "Leak detection & prevention", "Distribution optimization"],
            stats: { projects: "6+", savings: "35%", monitored: "200+" }
        },
        {
            id: 6,
            title: t('products.items.smart.title'),
            description: t('products.items.smart.description'),
            image: "/portfolio/carepass.png",
            link: "https://carepass.zylo-platform.cloud/",
            features: [
                t('products.items.smart.features.feature1'),
                t('products.items.smart.features.feature2'),
                t('products.items.smart.features.feature3'),
                t('products.items.smart.features.feature4')
            ],
            useCases: ["Hôpitaux & cliniques", "Laboratoires d'analyses", "Compagnies d'assurance santé", "Cabinets médicaux"],
            stats: { portals: "7", roles: "6+", payments: "Mobile Money" }
        },
        {
            id: 7,
            title: t('products.items.cybersecurity.title'),
            description: t('products.items.cybersecurity.description'),
            image: "/portfolio/churchOS.png",
            link: "https://carepass.zylo-platform.cloud/",
            features: [
                t('products.items.cybersecurity.features.feature1'),
                t('products.items.cybersecurity.features.feature2'),
                t('products.items.cybersecurity.features.feature3'),
                t('products.items.cybersecurity.features.feature4')
            ],
            useCases: ["Églises & paroisses", "Organisations multi-branches", "Communautés francophones", "Gestion administrative religieuse"],
            stats: { tenants: "Multi", platforms: "Web & Mobile", payments: "Mobile Money" }
        }
    ];

    const handleDownloadGuide = useCallback(async () => {
        setDownloading("guide");
        try {
            const { generateFullProductGuide } = await import("@/lib/pdf-generator");
            generateFullProductGuide(products);
        } finally {
            setTimeout(() => setDownloading(null), 1000);
        }
    }, [products]);

    const handleDownloadService = useCallback(async (service: typeof products[0]) => {
        setDownloading(`service-${service.id}`);
        try {
            const { generateServicePDF } = await import("@/lib/pdf-generator");
            generateServicePDF(service);
        } finally {
            setTimeout(() => setDownloading(null), 1000);
        }
    }, []);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden -mt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
                        alt="Dash Tech Africa digital services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/55" />
                </div>

                <div className="container-editorial relative z-10 pb-16 md:pb-20 lg:pb-24 pt-40">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease }}
                    >
                        <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-4 md:mb-6">
                            {t('products.title.line1')} {t('products.title.line2')}
                        </p>
                        <h1 className="text-display font-semibold text-white mb-4 md:mb-6">
                            Digital Solutions for <span className="text-primary">Africa</span>
                        </h1>
                        <p className="text-body-lg text-white/50 max-w-xl mb-8 md:mb-10">
                            {t('products.description')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Link href="/contact">
                                <Button size="lg">
                                    {t('products.buttons.startProject')}
                                </Button>
                            </Link>
                            <button
                                onClick={handleDownloadGuide}
                                disabled={downloading === "guide"}
                                className="inline-flex items-center justify-center gap-2.5 h-[3.25rem] px-9 rounded-md border border-white/25 text-white text-sm font-medium uppercase tracking-[0.08em] hover:bg-white/[0.04] hover:border-white/50 transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:cursor-wait"
                            >
                                <DownloadIcon className="w-4 h-4" />
                                {downloading === "guide" ? "Generating..." : "Download Full Catalog"}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services overview strip */}
            <section className="py-10 md:py-12 border-b border-border/50">
                <div className="container-editorial">
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {[
                            { value: "7", label: "Service Areas" },
                            { value: "50+", label: "Projects Delivered" },
                            { value: "6+", label: "Countries Served" },
                            { value: "24/7", label: "Support Available" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">{stat.value}</p>
                                <p className="text-white/40 text-xs sm:text-sm mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* All Services — detailed cards */}
            <section className="section-padding">
                <div className="container-editorial">
                    <div className="space-y-20 md:space-y-28 lg:space-y-32">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                id={`product-${product.id}`}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.8, ease }}
                            >
                                {/* Service number + title header */}
                                <div className="flex items-start gap-4 md:gap-6 mb-8 md:mb-10">
                                    <span className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white/[0.06] leading-none flex-shrink-0">
                                        0{product.id}
                                    </span>
                                    <div className="pt-1 sm:pt-2">
                                        <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-2">
                                            Product {product.id} of {products.length}
                                        </p>
                                        <h2 className="text-subheading font-semibold text-white">
                                            {product.title}
                                        </h2>
                                    </div>
                                </div>

                                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 ${
                                    index % 2 === 1 ? "lg:[direction:rtl] lg:[&>*]:[direction:ltr]" : ""
                                }`}>
                                    {/* Image */}
                                    <div className="lg:col-span-6">
                                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/15" />
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="lg:col-span-6 lg:flex lg:flex-col lg:justify-between">
                                <div className="">
                                                                            {/* Description */}
                                        <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-6 md:mb-8">
                                            {product.description}
                                        </p>

                                        {/* Features + Use Cases — two columns */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 md:mb-8">
                                            <div>
                                                <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-3">
                                                    {t('products.keyFeatures')}
                                                </p>
                                                <ul className="space-y-2.5">
                                                    {product.features.map((feature) => (
                                                        <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-white/60">
                                                            <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-3">
                                                    Ideal For
                                                </p>
                                                <ul className="space-y-2.5">
                                                    {product.useCases.map((uc) => (
                                                        <li key={uc} className="flex items-start gap-3 text-xs sm:text-sm text-white/60">
                                                            <span className="w-1 h-1 rounded-full bg-white/30 mt-1.5 flex-shrink-0" />
                                                            {uc}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Stats row */}
                                        <div className="flex flex-wrap gap-6 md:gap-8 mb-6 md:mb-8 py-4 border-y border-border/50">
                                            {Object.entries(product.stats).map(([key, value]) => (
                                                <div key={key}>
                                                    <p className="text-lg sm:text-xl font-semibold text-white">{value}</p>
                                                    <p className="text-white/30 text-xs capitalize mt-0.5">{key}</p>
                                                </div>
                                            ))}
                                        </div>
                                </div>

                                        {/* Action buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Link href="/contact">
                                                <Button size="default">
                                                    {t('products.buttons.startProject')}
                                                </Button>
                                            </Link>
                                            <button
                                                // onClick={() => handleDownloadProduct(product)}
                                                disabled={downloading === `product-${product.id}`}
                                                className="inline-flex items-center justify-center gap-2.5 h-11 px-5 rounded-md border border-white/20 text-white/70 text-[0.8125rem] font-medium uppercase tracking-[0.08em] hover:bg-white/[0.04] hover:border-white/40 hover:text-white transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:cursor-wait"
                                            >
                                                <DownloadIcon className="w-4 h-4" />
                                                {downloading === `product-${product.id}` ? "Generating..." : "Download Reference"}
                                            </button>
                                            <Button
                                                className="inline-flex items-center justify-center gap-2.5 h-11 px-5 rounded-md border border-white/20 text-white/70 text-[0.8125rem] font-medium uppercase tracking-[0.08em] hover:bg-white/[0.04] hover:border-white/40 hover:text-white transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:cursor-wait"
                                            >
                                                <a href={`${product.link}`} target="_blank" rel="noopener noreferrer" >
                                                    voir
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process overview */}
            <section className="py-16 md:py-20 border-y border-border/50">
                <div className="container-editorial">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                            <div className="lg:col-span-5">
                                <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-4">Our Process</p>
                                <h2 className="text-subheading font-semibold text-white mb-3 md:mb-4">
                                    From Idea to Deployment
                                </h2>
                                <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                                    Every project follows our proven 6-step methodology — from discovery through continuous support — ensuring quality delivery and measurable impact.
                                </p>
                            </div>
                            <div className="lg:col-span-7">
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {[
                                        { step: "01", name: "Discovery", duration: "2-5 days" },
                                        { step: "02", name: "Planning", duration: "3-5 days" },
                                        { step: "03", name: "Design", duration: "1-2 weeks" },
                                        { step: "04", name: "Development", duration: "2-8 weeks" },
                                        { step: "05", name: "Deployment", duration: "1-2 weeks" },
                                        { step: "06", name: "Support", duration: "Ongoing" },
                                    ].map((item) => (
                                        <div key={item.step} className="border border-border/50 rounded-lg p-4 hover:border-white/10 transition-colors duration-500">
                                            <p className="text-primary text-xs font-semibold mb-1">{item.step}</p>
                                            <p className="text-white text-sm font-semibold">{item.name}</p>
                                            <p className="text-white/25 text-xs mt-1">{item.duration}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section-padding">
                <div className="container-editorial">
                    <motion.div
                        className="text-center max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                    >
                        <h2 className="text-heading font-semibold text-white mb-4 md:mb-6">
                            Ready to <span className="text-primary">Transform</span> Your Business?
                        </h2>
                        <p className="text-white/40 text-sm sm:text-[0.9375rem] leading-relaxed mb-8 md:mb-10">
                            Get in touch to discuss your project requirements. Our team will provide a custom consultation and detailed proposal tailored to your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg">Schedule a Consultation</Button>
                            </Link>
                            <button
                                onClick={handleDownloadGuide}
                                disabled={downloading === "guide"}
                                className="inline-flex items-center justify-center gap-2.5 h-[3.25rem] px-9 rounded-md border border-white/25 text-white text-sm font-medium uppercase tracking-[0.08em] hover:bg-white/[0.04] hover:border-white/50 transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:cursor-wait"
                            >
                                <DownloadIcon className="w-4 h-4" />
                                {downloading === "guide" ? "Generating..." : "Download Catalog"}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
