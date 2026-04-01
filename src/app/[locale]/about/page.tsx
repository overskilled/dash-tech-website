"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    const t = useI18n();
    const ease = [0.16, 1, 0.3, 1] as const;

    const values = [
        {
            title: "Our Mission",
            description: "To empower African businesses with cutting-edge digital solutions that drive growth, efficiency, and innovation across the continent.",
            image: "/services/smart-city.webp",
        },
        {
            title: "Our Team",
            description: "A diverse team of experienced developers, designers, and strategists passionate about transforming Africa's digital landscape.",
            image: "/whyChooseUs/team.webp",
        },
        {
            title: "Our Excellence",
            description: "Committed to delivering world-class solutions with attention to detail, quality, and customer satisfaction.",
            image: "/services/crm.webp",
        },
        {
            title: "Innovation First",
            description: "Leveraging the latest technologies and methodologies to build future-ready solutions for modern businesses.",
            image: "/services/ai-girl.webp",
        },
        {
            title: "Trust & Security",
            description: "Maintaining the highest standards of security and data protection in all our solutions and partnerships.",
            image: "/services/cloud.webp",
        },
        {
            title: "Made in Africa",
            description: "Proudly African, building solutions tailored for African markets while meeting global standards.",
            image: "/madeinAfrica.webp",
        }
    ];

    const stats = [
        { number: "10+", label: "Projects Delivered" },
        { number: "15+", label: "Happy Clients" },
        { number: "8+", label: "Team Members" },
        { number: "3+", label: "Years Experience" }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero — full-bleed image */}
            <section className="relative min-h-[55vh] lg:min-h-[65vh] flex items-end overflow-hidden -mt-20">
                <div className="absolute inset-0">
                    <img
                        src="/hero.webp"
                        alt="Dash Tech Africa office"
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
                            About Us
                        </p>
                        <h1 className="text-display font-semibold text-white mb-4 md:mb-6">
                            About <span className="text-primary">Dash Tech Africa</span>
                        </h1>
                        <p className="text-body-lg text-white/50 max-w-xl">
                            We are a leading digital transformation company dedicated to empowering African businesses with innovative technology solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-padding">
                <div className="container-editorial">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease }}
                    >
                        <div>
                            <h2 className="text-subheading font-semibold text-white mb-4 md:mb-6">Our Story</h2>
                            <div className="space-y-4 text-white/50 text-sm sm:text-[0.9375rem] leading-relaxed">
                                <p>
                                    Founded with a vision to bridge the digital divide in Africa, Dash Tech Africa has grown from a small startup to a trusted technology partner for businesses across the continent.
                                </p>
                                <p>
                                    We specialize in custom software development, AI & computer vision, IoT automation, and digital transformation solutions. Our team combines deep technical expertise with an understanding of African market dynamics to deliver solutions that truly make a difference.
                                </p>
                                <p>
                                    From Cameroon to the rest of Africa, we&apos;ve helped organizations modernize their operations, improve efficiency, and unlock new opportunities through technology.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative aspect-[6/3] rounded-xl overflow-hidden">
                            <img
                                src="/storie.png"
                                alt="Dash Tech Africa team at work"
                                className="w-full h-full object-fit"
                            />
                            <div className="absolute inset-0 bg-black/15" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 md:py-16 border-y border-border/50">
                <div className="container-editorial">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">{stat.number}</p>
                                <p className="text-white/40 text-xs sm:text-sm mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Values Grid — image-backed cards */}
            <section className="section-padding">
                <div className="container-editorial">
                    <motion.div
                        className="mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <p className="text-white/40 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-4">
                            Our Values
                        </p>
                        <h2 className="text-heading font-semibold text-white max-w-lg">
                            What drives us forward
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                className="group relative h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden"
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.08 }}
                            >
                                <img
                                    src={value.image}
                                    alt={value.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-700" />
                                <div className="relative h-full flex flex-col justify-end p-5 sm:p-6">
                                    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{value.title}</h3>
                                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-700">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24 md:pb-32">
                <div className="container-editorial">
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border/50 pt-10 md:pt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <p className="text-white/40 text-base sm:text-lg">Ready to work with us?</p>
                        <Link href="/contact">
                            <Button size="lg">Get in Touch</Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
